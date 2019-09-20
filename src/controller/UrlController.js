const Url = require("../model/Url");
const qrcode = require("qrcode");

class UrlController {
  async show(req, res) {
    const url = await Url.findById(req.params.id);
    res.redirect(url.url);
  }

  async store(req, res) {
    const response = await Url.create(req.body);
    const qrcode_url = req.get("host") + "/" + response._id;
    const url = await qrcode.toDataURL(qrcode_url);

    return res.json({ qrcode: url });
  }
}

module.exports = new UrlController();
