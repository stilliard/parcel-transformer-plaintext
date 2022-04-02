const { Transformer } = require('@parcel/plugin');

module.exports = new Transformer({
  async transform({asset}) {
    // do nothing
    return [asset];
  }
});
