const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Model = require('./models/Model');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Machine_Learning_Models').then(() => {
  console.log('Connected to MongoDB');
  seedDatabase(); // Seed database with initial data
}).catch((err) => {
  console.warn('MongoDB connection error, using fallback data:', err.message);
  console.log('Server will run with static data');
});

// Seed database with initial models
async function seedDatabase() {
  try {
    const count = await Model.countDocuments();
    if (count === 0) {
      const models = [
        {
          name: 'Linear Regression',
          category: 'Supervised Learning',
          description: 'Predicts continuous values like house prices based on features',
          useCase: 'Real estate valuation',
          input: 'House features (sqft, bedrooms, location)',
          output: 'Predicted price',
          accuracy: '85-95%',
          complexity: 'Low',
          popularity: 'High',
          techStack: 'scikit-learn',
          icon: '📈'
        },
        {
          name: 'Logistic Regression',
          category: 'Supervised Learning',
          description: 'Classifies data into binary categories like spam vs not spam',
          useCase: 'Email spam detection',
          input: 'Email features (words, sender, links)',
          output: 'Spam probability',
          accuracy: '90-98%',
          complexity: 'Low',
          popularity: 'High',
          techStack: 'scikit-learn',
          icon: '📧'
        },
        {
          name: 'Decision Tree',
          category: 'Supervised Learning',
          description: 'Makes decisions by splitting data based on feature values',
          useCase: 'Loan approval system',
          input: 'Applicant data (income, credit score)',
          output: 'Approve/Reject decision',
          accuracy: '75-85%',
          complexity: 'Medium',
          popularity: 'High',
          techStack: 'scikit-learn',
          icon: '🌳'
        },
        {
          name: 'Random Forest',
          category: 'Supervised Learning',
          description: 'Ensemble of decision trees for improved accuracy',
          useCase: 'Disease diagnosis',
          input: 'Patient symptoms and test results',
          output: 'Disease prediction',
          accuracy: '85-95%',
          complexity: 'Medium',
          popularity: 'High',
          techStack: 'scikit-learn',
          icon: '🌲'
        },
        {
          name: 'Support Vector Machine (SVM)',
          category: 'Supervised Learning',
          description: 'Finds optimal hyperplane to separate data classes',
          useCase: 'Image classification',
          input: 'Image features (pixels, edges)',
          output: 'Category classification',
          accuracy: '85-95%',
          complexity: 'High',
          popularity: 'Medium',
          techStack: 'scikit-learn',
          icon: '🎯'
        },
        {
          name: 'K-Nearest Neighbors (KNN)',
          category: 'Supervised Learning',
          description: 'Classifies based on nearest neighbors in feature space',
          useCase: 'Movie recommendation',
          input: 'User preferences and ratings',
          output: 'Recommended movies',
          accuracy: '70-85%',
          complexity: 'Low',
          popularity: 'High',
          techStack: 'scikit-learn',
          icon: '👥'
        },
        {
          name: 'Naive Bayes',
          category: 'Supervised Learning',
          description: 'Probabilistic classifier based on Bayes theorem',
          useCase: 'Sentiment analysis',
          input: 'Text reviews and comments',
          output: 'Positive/Negative sentiment',
          accuracy: '80-90%',
          complexity: 'Low',
          popularity: 'Medium',
          techStack: 'scikit-learn',
          icon: '📊'
        },
        {
          name: 'Gradient Boosting (XGBoost)',
          category: 'Supervised Learning',
          description: 'Powerful ensemble method for prediction tasks',
          useCase: 'Stock price prediction',
          input: 'Market data and indicators',
          output: 'Price prediction',
          accuracy: '85-95%',
          complexity: 'High',
          popularity: 'High',
          techStack: 'XGBoost',
          icon: '🚀'
        },
        {
          name: 'Neural Network (MLP)',
          category: 'Supervised Learning',
          description: 'Multi-layer perceptron for complex pattern recognition',
          useCase: 'Handwritten digit recognition',
          input: 'Image pixels (28x28 grid)',
          output: 'Digit classification (0-9)',
          accuracy: '95-99%',
          complexity: 'High',
          popularity: 'High',
          techStack: 'TensorFlow/PyTorch',
          icon: '🧠'
        }
      ];

      await Model.insertMany(models);
      console.log('Database seeded with initial ML models');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Fallback static data
const staticModels = [
  {
    _id: '1',
    name: 'Linear Regression',
    category: 'Supervised Learning',
    description: 'Predicts continuous values like house prices based on features',
    useCase: 'Real estate valuation',
    input: 'House features (sqft, bedrooms, location)',
    output: 'Predicted price',
    accuracy: '85-95%',
    complexity: 'Low',
    popularity: 'High',
    techStack: 'scikit-learn',
    icon: '📈'
  },
  {
    _id: '2',
    name: 'Logistic Regression',
    category: 'Supervised Learning',
    description: 'Classifies data into binary categories like spam vs not spam',
    useCase: 'Email spam detection',
    input: 'Email features (words, sender, links)',
    output: 'Spam probability',
    accuracy: '90-98%',
    complexity: 'Low',
    popularity: 'High',
    techStack: 'scikit-learn',
    icon: '📧'
  },
  {
    _id: '3',
    name: 'Decision Tree',
    category: 'Supervised Learning',
    description: 'Makes decisions by splitting data based on feature values',
    useCase: 'Loan approval system',
    input: 'Applicant data (income, credit score)',
    output: 'Approve/Reject decision',
    accuracy: '75-85%',
    complexity: 'Medium',
    popularity: 'High',
    techStack: 'scikit-learn',
    icon: '🌳'
  },
  {
    _id: '4',
    name: 'Random Forest',
    category: 'Supervised Learning',
    description: 'Ensemble of decision trees for improved accuracy',
    useCase: 'Disease diagnosis',
    input: 'Patient symptoms and test results',
    output: 'Disease prediction',
    accuracy: '85-95%',
    complexity: 'Medium',
    popularity: 'High',
    techStack: 'scikit-learn',
    icon: '🌲'
  },
  {
    _id: '5',
    name: 'Support Vector Machine (SVM)',
    category: 'Supervised Learning',
    description: 'Finds optimal hyperplane to separate data classes',
    useCase: 'Image classification',
    input: 'Image features (pixels, edges)',
    output: 'Category classification',
    accuracy: '85-95%',
    complexity: 'High',
    popularity: 'Medium',
    techStack: 'scikit-learn',
    icon: '🎯'
  },
  {
    _id: '6',
    name: 'K-Nearest Neighbors (KNN)',
    category: 'Supervised Learning',
    description: 'Classifies based on nearest neighbors in feature space',
    useCase: 'Movie recommendation',
    input: 'User preferences and ratings',
    output: 'Recommended movies',
    accuracy: '70-85%',
    complexity: 'Low',
    popularity: 'High',
    techStack: 'scikit-learn',
    icon: '👥'
  },
  {
    _id: '7',
    name: 'Naive Bayes',
    category: 'Supervised Learning',
    description: 'Probabilistic classifier based on Bayes theorem',
    useCase: 'Sentiment analysis',
    input: 'Text reviews and comments',
    output: 'Positive/Negative sentiment',
    accuracy: '80-90%',
    complexity: 'Low',
    popularity: 'Medium',
    techStack: 'scikit-learn',
    icon: '📊'
  },
  {
    _id: '8',
    name: 'Gradient Boosting (XGBoost)',
    category: 'Supervised Learning',
    description: 'Powerful ensemble method for prediction tasks',
    useCase: 'Stock price prediction',
    input: 'Market data and indicators',
    output: 'Price prediction',
    accuracy: '85-95%',
    complexity: 'High',
    popularity: 'High',
    techStack: 'XGBoost',
    icon: '🚀'
  },
  {
    _id: '9',
    name: 'Neural Network (MLP)',
    category: 'Supervised Learning',
    description: 'Multi-layer perceptron for complex pattern recognition',
    useCase: 'Handwritten digit recognition',
    input: 'Image pixels (28x28 grid)',
    output: 'Digit classification (0-9)',
    accuracy: '95-99%',
    complexity: 'High',
    popularity: 'High',
    techStack: 'TensorFlow/PyTorch',
    icon: '🧠'
  }
];

// Routes
// GET all models
app.get('/api/models', async (req, res) => {
  try {
    const { search, sortBy = 'name', category } = req.query;
    let models = staticModels;

    // Try to get from MongoDB if connected
    if (mongoose.connection.readyState === 1) {
      try {
        let query = {};
        
        // Search functionality
        if (search) {
          query.$text = { $search: search };
        }
        
        // Category filter
        if (category) {
          query.category = category;
        }

        let modelsQuery = Model.find(query);
        
        // Sorting
        switch (sortBy) {
          case 'accuracy':
            modelsQuery = modelsQuery.sort({ accuracy: -1 });
            break;
          case 'complexity':
            modelsQuery = modelsQuery.sort({ complexity: 1 });
            break;
          case 'popularity':
            modelsQuery = modelsQuery.sort({ popularity: -1 });
            break;
          case 'name':
          default:
            modelsQuery = modelsQuery.sort({ name: 1 });
            break;
        }

        models = await modelsQuery.exec();
      } catch (dbError) {
        console.warn('Database query failed, using static data:', dbError.message);
        models = staticModels;
      }
    }

    // Apply client-side filtering for static data
    if (mongoose.connection.readyState !== 1) {
      if (search) {
        models = models.filter(model => 
          model.name.toLowerCase().includes(search.toLowerCase()) ||
          model.description.toLowerCase().includes(search.toLowerCase()) ||
          model.useCase.toLowerCase().includes(search.toLowerCase())
        );
      }
      
      if (category) {
        models = models.filter(model => model.category === category);
      }

      // Client-side sorting
      switch (sortBy) {
        case 'accuracy':
          models.sort((a, b) => {
            const aAcc = parseInt(a.accuracy.split('-')[1] || a.accuracy.replace('%', ''));
            const bAcc = parseInt(b.accuracy.split('-')[1] || b.accuracy.replace('%', ''));
            return bAcc - aAcc;
          });
          break;
        case 'complexity':
          const complexityOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
          models.sort((a, b) => complexityOrder[a.complexity] - complexityOrder[b.complexity]);
          break;
        case 'popularity':
          const popularityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
          models.sort((a, b) => popularityOrder[b.popularity] - popularityOrder[a.popularity]);
          break;
        case 'name':
        default:
          models.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
    }
    
    res.json({
      success: true,
      data: models,
      count: models.length,
      source: mongoose.connection.readyState === 1 ? 'database' : 'static'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET single model by ID
app.get('/api/models/:id', async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    
    if (!model) {
      return res.status(404).json({
        success: false,
        error: 'Model not found'
      });
    }

    res.json({
      success: true,
      data: model
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// POST new model
app.post('/api/models', async (req, res) => {
  try {
    const model = new Model(req.body);
    const savedModel = await model.save();
    
    res.status(201).json({
      success: true,
      data: savedModel
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// PUT update model
app.put('/api/models/:id', async (req, res) => {
  try {
    const model = await Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!model) {
      return res.status(404).json({
        success: false,
        error: 'Model not found'
      });
    }

    res.json({
      success: true,
      data: model
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// DELETE model
app.delete('/api/models/:id', async (req, res) => {
  try {
    const model = await Model.findByIdAndDelete(req.params.id);
    
    if (!model) {
      return res.status(404).json({
        success: false,
        error: 'Model not found'
      });
    }

    res.json({
      success: true,
      message: 'Model deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET categories
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await Model.distinct('category');
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
