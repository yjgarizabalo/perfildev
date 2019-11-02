const Stats = require('./stats')
const Images = require('./images')
const Comments = require('./comments')

module.exports = async viewModel => {

    const result = await  Promise.all([
        Images.popular(),
        Stats(),
        Comments.newest()
    ])

    viewModel.sidebar = {
       stat: result[0],
       popular: result[1],
       Comments: result[2]
    }

    return viewModel
}