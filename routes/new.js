const express = require("express")

const router = express.Router()

router.post("/", (req, res) => {
    messages.push({ user: req.body.user, text: req.body.text, added: new Date() })
    res.redirect("/")
})

module.exports = router
