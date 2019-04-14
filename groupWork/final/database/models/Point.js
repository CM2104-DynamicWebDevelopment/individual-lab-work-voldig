const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({

    title: String,
    description: String,
    latitude: Number,
    longitude: Number,
    createdAt: {
      type: Date,
      default: new Date()
    }
});


const Point = mongoose.model('Point', PointSchema);

module.exports = Point;
