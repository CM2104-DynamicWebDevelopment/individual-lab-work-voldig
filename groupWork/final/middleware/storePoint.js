module.exports = (req, res, next) => {
    if (!req.body.title || !req.body.description || !req.body.latitude || !req.body.longitude) {
        alert("all fields are required!");
        return res.redirect('/points/new')
    }
    next()
}
