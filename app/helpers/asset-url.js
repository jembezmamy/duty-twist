var assets = [
  "/assets/images/icons/bathroom.png",
  "/assets/images/icons/hall.png",
  "/assets/images/icons/kitchen.png",
  "/assets/images/icons/trash.png",
  "/assets/images/illustrations/bathroom.jpg",
  "/assets/images/illustrations/hall.jpg",
  "/assets/images/illustrations/kitchen.jpg",
  "/assets/images/illustrations/trash.jpg"
];

export function assetUrl(name) {
  if (typeof name !== "string") {
    name = name[0];
  }
  let regexp = new RegExp(name.replace(/(\.[^.]+)$/, "(-[^.]+)*$1"));
  for (var i = 0; i < assets.length; i++) {
    if (regexp.exec(assets[i])) {
      return assets[i];
    }
  }
}

export default Ember.Helper.helper(assetUrl);
