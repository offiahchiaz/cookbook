const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    summary: {
        type: String,
        default: null
    },
    cookingSteps: {
        type: String,
        default: null
    },
    ingredients: [{
        name: {
            type: String,
            default: null
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    }]
});

// Virtual for recipe's URL
RecipeSchema.virtual('url').get(function () {
    return `/cookbook/recipe/${this._id}`;
});


module.exports = mongoose.model('Recipe', RecipeSchema);