const Answer = require('./../../models/index').Answer;
const User = require('./../../models/index').User;
const Op = require('./../../models/index').Sequelize.Op;

module.exports = async (req, res) => {

    try {
        const user = await User.findOne( { where: {
            username: req.params.username
        }});

        const answers = await Answer.findAll({
            include: [{
                model: User,
                as: 'questionUser'
            }, {
                model: User,
                as: 'answerUser'
            }],
            where: {
                answer_user_id: user.id,
                answer: { [Op.ne]: '' }
            }
        });

        return res.render('home/index', { user: req.user, answers, answerUser: user });
    } catch (err) {
        console.log('ERROR', err);
    }

}
