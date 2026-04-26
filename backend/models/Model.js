const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  useCase: {
    type: String,
    required: true
  },
  input: {
    type: String,
    required: true
  },
  output: {
    type: String,
    required: true
  },
  accuracy: {
    type: String,
    required: true
  },
  complexity: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true
  },
  popularity: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true
  },
  techStack: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Add text search index for search functionality
modelSchema.index({
  name: 'text',
  description: 'text',
  useCase: 'text'
});

module.exports = mongoose.model('Model', modelSchema);
