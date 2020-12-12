const formidable = require('formidable');
const db = require('../model')

const uploadImage = (req, res) => {
    let caption
    let category
    let fileName 

    new formidable.IncomingForm().parse(req)
        .on('fileBegin', (name, file) => {
            // file.path = __dirname + '/uploads/' + file.name
            file.path = 'uploads/' + file.name
        })
        .on('file', (name, file) => {
            console.log('Uploaded file', name, file)
            fileName = file.name
        })
        .on('field', (name, field) => {
            console.log('Field', name, field)
            if (name==="caption") {
                caption = field
            } else if (name==="category") {
                category = field
            }
        })
        .on('aborted', () => {
            console.error('Request aborted by the user')
        })
        .on('error', (err) => {
            console.error('Error', err)
            res.json({success: false})
        })
        .on('end', async () => {
            const result = await db.Post.create({ category, caption, author: req.user._id, postPicture: fileName})
            await db.User.findByIdAndUpdate(req.user._id, { $push: { posts: result._id }})
            const postResult = await db.Post.findById(result._id).populate('author', 'username')
            res.json(postResult);
        })
}

module.exports = {
    uploadImage: uploadImage
}