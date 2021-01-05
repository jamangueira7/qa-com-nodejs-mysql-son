const User = require('./../../models/index').User;
const md5 = require('md5');

module.exports = async (req, res) => {
    try {
        const { name, age } = req.body;
        const hash = md5(req.user.email);
        const obj = {
            name,
            age,
            first_access: false,
            avatar: `https://www.gravatar.com/avatar/${hash}?s=200`,
        };
        await User.update(obj, { where: { id: req.user.id }});

        return res.redirect('/');
    } catch (err) {
        console.log('ERROR', err);
    }
}

