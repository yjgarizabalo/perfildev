const Stats = require('./stats')
const Images = require('./images')
const Comments = require('./comments')

module.exports = async viewModel => {

    const results = await  Promise.all([
        Images.popular(),
        Stats(),
        Comments.newest()
    ])

    viewModel.sidebar = {
       stat: results[0],
       popular: results[1],
       comments: results[2]
    }

    return viewModel
}