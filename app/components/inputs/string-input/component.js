import StringInput from "ember-simple-form/components/inputs/string-input";

export default StringInput.extend({
  selectOnClick: false,

  click(e) {
    this._super(e);
    if (this.get("selectOnClick")) {
      this.$().focus().select();
    }
  }
});
