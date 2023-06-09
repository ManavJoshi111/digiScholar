const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;
const { Eligibility } = require('./Eligibility');
const { Application } = require('./Application');
const { FAQ } = require('./FAQ');
const { Resource } = require('./Resource');
const { Testimonial } = require('./Testimonial');

const scholarshipSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    provided_by: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    deadline: {
        type: Date,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    eligibility: {
        type: Schema.Types.ObjectId,
        ref: 'Eligibility'
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = models.Scholarship || model('Scholarship', scholarshipSchema);

scholarshipSchema.pre('remove', async function (next) {
    try {
        const scholarship = this;
        await Eligibility.findByIdAndDelete(scholarship.eligibility);
        await Application.deleteMany({ scholarship: scholarship._id });
        await FAQ.deleteMany({ scholarship: scholarship._id });
        await Resource.deleteMany({ scholarship: scholarship._id });
        await Testimonial.deleteMany({ scholarship: scholarship._id });
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = models.Scholarship || model('Scholarship', scholarshipSchema);

