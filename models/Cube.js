const mongoose = require('mongoose');
const Accessory = require('./Accessory');

const cubeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true, maxlength: 400}, 
    imageUrl: {type: String, required: true, validate: {
        validator: function(valid) {
            return /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/.test(valid);
        },
        message: props => `${props.value} is not a valid Url!`
    },},
    difficultyLevel: { type: Number, required: true, min: 1, max: 6},
    accessories:[{type: mongoose.Schema.Types.ObjectId, ref: 'Accessory'}]
});

module.exports = mongoose.model('Cube', cubeSchema);