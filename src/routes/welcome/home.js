module.exports = async (req, res) => {
   return res.render('welcome/index', { user: req.user });
}
