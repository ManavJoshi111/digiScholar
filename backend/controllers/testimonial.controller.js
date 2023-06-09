const { Testimonial } = require('../models');

exports.createTestimonial = async (req, res) => {
    try {
        req.body.created_by = req.user.id;
        const testimonial = await Testimonial.create(req.body);
        return res.status(201).json({ testimonial });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        return res.status(200).json({ testimonials });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        return res.status(200).json({ testimonial });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getTestimonialsByScholarship = async (req, res) => {
    try {
        const testimonials = await Testimonial.find({
            scholarship: req.params.id
        });
        return res.status(200).json({ testimonials });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.updateTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ testimonial });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.deleteTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
        return res.status(200).json({ testimonial });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
