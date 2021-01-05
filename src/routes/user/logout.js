module.exports = (req, res) => {
    res.logout();

    return req.redirect('/users');
}

