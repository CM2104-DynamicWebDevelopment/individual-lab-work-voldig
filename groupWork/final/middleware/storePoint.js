module.exports = (req, res, next) => {
    if (!req.body.title || !req.body.description || !req.body.latitude || !req.body.longitude) {
        return res.redirect('/points/new')
    }
    next()
}
