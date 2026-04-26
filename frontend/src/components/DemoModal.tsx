import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, RefreshCw, TrendingUp, BarChart3, Zap, Award } from 'lucide-react';

interface DemoModalProps {
  model: any;
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ model, isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [demoData, setDemoData] = useState<any>(null);

  useEffect(() => {
    if (isOpen) {
      setDemoData(getDemoData(model.name));
      setInput('');
      setOutput('');
    }
  }, [isOpen, model]);

  const getDemoData = (modelName: string) => {
    const demos: { [key: string]: any } = {
      'Linear Regression': {
        inputs: ['1500 sqft, 3 bedrooms, downtown', '2500 sqft, 4 bedrooms, suburbs', '800 sqft, 1 bedroom, city center'],
        outputs: ['$450,000', '$680,000', '$320,000'],
        description: 'Enter house features to predict price'
      },
      'Logistic Regression': {
        inputs: ['Free money!!! Click here now!!!', 'Meeting tomorrow at 2pm', 'Limited offer - buy now!'],
        outputs: ['SPAM (98% confidence)', 'NOT SPAM (99% confidence)', 'SPAM (95% confidence)'],
        description: 'Enter email text to classify as spam or not'
      },
      'Decision Tree': {
        inputs: ['Income: $80k, Credit: 750, Debt: $10k', 'Income: $30k, Credit: 600, Debt: $50k', 'Income: $120k, Credit: 800, Debt: $5k'],
        outputs: ['APPROVED', 'REJECTED', 'APPROVED'],
        description: 'Enter applicant financial information'
      },
      'Random Forest': {
        inputs: ['Fever, cough, fatigue, age 45', 'Headache, nausea, age 30', 'Chest pain, shortness of breath, age 65'],
        outputs: ['Flu (92% probability)', 'Migraine (88% probability)', 'Heart condition (95% probability)'],
        description: 'Enter symptoms and patient information'
      },
      'Support Vector Machine (SVM)': {
        inputs: ['Cat image: whiskers, pointy ears, small size', 'Dog image: floppy ears, medium size, tail', 'Bird image: wings, beak, small size'],
        outputs: ['CAT', 'DOG', 'BIRD'],
        description: 'Enter image features to classify'
      },
      'K-Nearest Neighbors (KNN)': {
        inputs: ['User likes: Action, Sci-Fi, Thriller', 'User likes: Romance, Comedy, Drama', 'User likes: Horror, Mystery, Thriller'],
        outputs: ['Recommended: Matrix, Inception, Interstellar', 'Recommended: The Notebook, La La Land, Titanic', 'Recommended: The Conjuring, Get Out, A Quiet Place'],
        description: 'Enter user preferences'
      },
      'Naive Bayes': {
        inputs: ['This product is amazing! Love it!', 'Terrible service, very disappointed', 'Good value for money, would recommend'],
        outputs: ['POSITIVE (96% confidence)', 'NEGATIVE (94% confidence)', 'POSITIVE (91% confidence)'],
        description: 'Enter text for sentiment analysis'
      },
      'Gradient Boosting (XGBoost)': {
        inputs: ['AAPL, Volume: 10M, RSI: 65, MA: 150', 'GOOGL, Volume: 5M, RSI: 45, MA: 2800', 'TSLA, Volume: 20M, RSI: 75, MA: 800'],
        outputs: ['Predicted price: $175 (+2.3%)', 'Predicted price: $2850 (-0.8%)', 'Predicted price: $820 (+3.1%)'],
        description: 'Enter stock market indicators'
      },
      'Neural Network (MLP)': {
        inputs: ['Handwritten digit image 28x28 pixels', 'Handwritten digit image 28x28 pixels', 'Handwritten digit image 28x28 pixels'],
        outputs: ['PREDICTED: 7 (99.2% confidence)', 'PREDICTED: 3 (98.7% confidence)', 'PREDICTED: 8 (97.9% confidence)'],
        description: 'Upload or describe handwritten digit'
      }
    };
    return demos[modelName] || {
      inputs: ['Sample input 1', 'Sample input 2', 'Sample input 3'],
      outputs: ['Sample output 1', 'Sample output 2', 'Sample output 3'],
      description: 'Enter your input to see the model prediction'
    };
  };

  const handleRunDemo = () => {
    if (!input.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * demoData.outputs.length);
      setOutput(demoData.outputs[randomIndex]);
      setIsProcessing(false);
    }, 1500);
  };

  const handleExampleClick = (exampleInput: string) => {
    setInput(exampleInput);
    setOutput('');
  };

  const handleReset = () => {
    setInput('');
    setOutput('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay active" onClick={onClose}>
        <motion.div
          className="modal-content w-full max-w-2xl mx-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{model.icon}</div>
              <div>
                <h2 className="font-orbitron font-bold text-2xl text-white">
                  {model.name} Demo
                </h2>
                <p className="text-gray-400 text-sm font-rajdhani">
                  {model.category}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-300 font-rajdhani mb-2">
              {model.description}
            </p>
            <p className="text-electric-blue text-sm font-rajdhani">
              {demoData?.description}
            </p>
          </div>

          {/* Model Info */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="glass-card p-3 text-center">
              <TrendingUp className="w-5 h-5 text-cyber-green mx-auto mb-1" />
              <div className="text-xs text-gray-400 font-rajdhani">Use Case</div>
              <div className="text-sm text-white font-rajdhani font-semibold">
                {model.useCase}
              </div>
            </div>
            <div className="glass-card p-3 text-center">
              <Award className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
              <div className="text-xs text-gray-400 font-rajdhani">Accuracy</div>
              <div className="text-sm text-white font-rajdhani font-semibold">
                {model.accuracy}
              </div>
            </div>
            <div className="glass-card p-3 text-center">
              <Zap className="w-5 h-5 text-hot-pink mx-auto mb-1" />
              <div className="text-xs text-gray-400 font-rajdhani">Tech Stack</div>
              <div className="text-sm text-white font-rajdhani font-semibold">
                {model.techStack}
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-cyber-green font-rajdhani mb-2">
              Try these examples:
            </label>
            <div className="space-y-2">
              {demoData?.inputs.map((example: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="w-full text-left p-3 glass-card hover:bg-white/10 transition-colors text-sm text-gray-300 font-rajdhani"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* Input Section */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-electric-blue font-rajdhani mb-2">
              Input:
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your input here..."
              className="w-full p-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white font-rajdhani focus:border-electric-blue focus:outline-none resize-none"
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mb-4">
            <button
              onClick={handleRunDemo}
              disabled={!input.trim() || isProcessing}
              className="flex-1 bg-gradient-to-r from-electric-blue to-cyber-green text-navy-dark font-rajdhani font-bold py-3 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:from-cyber-green hover:to-electric-blue transition-all duration-300"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-navy-dark border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Run Prediction</span>
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 border border-white/20 text-white font-rajdhani font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>

          {/* Output Section */}
          {output && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-4 border border-cyber-green/30"
            >
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="w-5 h-5 text-cyber-green" />
                <span className="text-sm font-semibold text-cyber-green font-rajdhani">
                  Prediction Result:
                </span>
              </div>
              <div className="text-white font-rajdhani text-lg font-semibold">
                {output}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DemoModal;
