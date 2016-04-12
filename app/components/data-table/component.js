import Ember from "ember";

export default Ember.Component.extend({
  classNames: "data-table",
  tagName: "table",

  currentColumnIndex: 0,
  visibleColumnCount: 0,
  columnCount: 0,

  actions: {
    next() {
      this.set("currentColumnIndex", this.get("currentColumnIndex") + this.get("visibleColumnCount"));
      this.fitColumns();
    },
    previous() {
      this.set("currentColumnIndex", this.get("currentColumnIndex") - this.get("visibleColumnCount"));
      this.fitColumns();
    }
  },

  didInsertElement() {
    this._super(...arguments);
    $(window).on("resize." + Ember.guidFor(this), $.proxy(this.handleResize, this));
    Ember.run.scheduleOnce("afterRender", this, this.fitColumns);
  },

  willDestroy() {
    $(window).off("." + Ember.guidFor(this));
    Ember.run.cancel(this.debouncedRun);
    this._super(...arguments);
  },

  handleResize() {
    this.debouncedRun = Ember.run.debounce(this, this.fitColumns, 500);
  },

  fitColumns() {
    this.$("td, th").css("display", "none");
    let n = this.get("currentColumnIndex") + 2;
    let columnCount = this.$("tr").first().children().length - 1;
    let maxWidth = this.$().width();
    this.$(`td:nth-child(1), th:nth-child(1)`).css("display", "");
    while (n < columnCount + 2) {
      this.$(`td:nth-child(${n}), th:nth-child(${n})`).css("display", "");
      if (this.$().width() > maxWidth) {
        this.$(`td:nth-child(${n}), th:nth-child(${n})`).css("display", "none");
        break;
      } else {
        n++;
      }
    }
    this.setProperties({
      columnCount: columnCount,
      visibleColumnCount: n - this.get("currentColumnIndex") - 2
    });
  }
});
