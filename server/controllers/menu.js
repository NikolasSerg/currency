const fs = require("fs");
const path = require("path");

exports.getMenu = function (req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).send({message: "error loading file on server"})
        } else {
            res.status(200).send(JSON.parse(data)["menuItem"]);
        }
    })
}