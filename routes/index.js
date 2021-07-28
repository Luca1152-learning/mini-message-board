var express = require("express")
var router = express.Router()

const messages = [
    {
        text: "Salut, boss!",
        user: "florin salam",
        added: new Date(),
    },
    {
        text: "Hallo!",
        user: "nob",
        added: new Date(),
    },
]

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Messageboard", messages })
})

module.exports = router
