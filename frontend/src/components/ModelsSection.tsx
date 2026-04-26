import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Brain, Grid, List } from 'lucide-react';
import ModelCard from './ModelCard';
import DemoModal from './DemoModal';

interface Model {
  id: number;
  name: string;
  category: string;
  description: string;
  useCase: string;
  input: string;
  output: string;
  accuracy: string;
  complexity: string;
  popularity: string;
  techStack: string;
  icon: string;
}

const ModelsSection: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [filteredModels, setFilteredModels] = useState<Model[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'accuracy' | 'complexity' | 'popularity'>('accuracy');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchModels();
  }, []);

  useEffect(() => {
    filterAndSortModels();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [models, searchTerm, sortBy]);

  const fetchModels = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/api/models');
      const data = await response.json();
      if (data.success) {
        setModels(data.data);
      }
    } catch (error) {
      console.error('Error fetching models:', error);
      // Fallback data if backend is not available
      setModels([
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
          id: 7,
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
          id: 8,
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
          id: 9,
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
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const filterAndSortModels = () => {
    let filtered = models.filter(model =>
      model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.useCase.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort models
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'accuracy':
          const aAccuracy = parseInt(a.accuracy.split('-')[1] || a.accuracy.replace('%', ''));
          const bAccuracy = parseInt(b.accuracy.split('-')[1] || b.accuracy.replace('%', ''));
          return bAccuracy - aAccuracy;
        case 'complexity':
          const complexityOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
          return complexityOrder[a.complexity as keyof typeof complexityOrder] - complexityOrder[b.complexity as keyof typeof complexityOrder];
        case 'popularity':
          const popularityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
          return popularityOrder[b.popularity as keyof typeof popularityOrder] - popularityOrder[a.popularity as keyof typeof popularityOrder];
        default:
          return 0;
      }
    });

    setFilteredModels(filtered);
  };

  const handleTryDemo = (model: Model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedModel(null);
  };

  if (isLoading) {
    return (
      <section id="models" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="loading-spinner mx-auto mb-4"></div>
            <p className="text-gray-400 font-rajdhani">Loading ML models...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="models" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Brain className="w-8 h-8 text-electric-blue glow-text" />
            <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white">
              ML Models
            </h2>
          </div>
          <p className="text-xl text-gray-300 font-rajdhani max-w-2xl mx-auto">
            Explore our collection of real-world machine learning models with interactive demos
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          className="glass-card p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search models by name, description, or use case..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white font-rajdhani focus:border-electric-blue focus:outline-none"
                />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="lg:w-48">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full pl-10 pr-4 py-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white font-rajdhani focus:border-electric-blue focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="accuracy">Sort by Accuracy</option>
                  <option value="complexity">Sort by Complexity</option>
                  <option value="popularity">Sort by Popularity</option>
                </select>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-navy-dark/50 border border-white/20 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-electric-blue text-navy-dark' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-electric-blue text-navy-dark' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-400 font-rajdhani">
            Showing {filteredModels.length} of {models.length} models
          </div>
        </motion.div>

        {/* Models Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
        }`}>
          {filteredModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ModelCard model={model} onTryDemo={handleTryDemo} />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredModels.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-400 font-rajdhani text-lg">
              No models found matching "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-electric-blue hover:text-cyber-green font-rajdhani font-semibold transition-colors"
            >
              Clear search
            </button>
          </motion.div>
        )}

        {/* Demo Modal */}
        <DemoModal
          model={selectedModel}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default ModelsSection;
