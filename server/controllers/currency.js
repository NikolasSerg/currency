const fs = require("fs");
const path = require("path");

exports.getCurrency = function (req, res) {
    console.log(req.params, ' - req')
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).send({message: "error loading file on server"})
        } else {
            let dbItem = JSON.parse(data).currency[req.params.id];
            res.status(200).send(dbItem);
        }
    })
}