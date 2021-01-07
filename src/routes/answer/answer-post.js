const Answer = require('./../../models/index').Answer;

module.exports = async (req, res) => {
    try{
        req.body.is_annon = req.body.is_annon ? true : false;

        const answer = await Answer.create(req.body);
        if(!answer) {
            return res.redirect('/404');
        }

        return res.redirect(`/t/${req.user.username}`);
    } catch (err) {
        console.log('ERROR', err);
    }
}
