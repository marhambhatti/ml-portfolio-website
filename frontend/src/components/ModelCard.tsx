import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, BarChart3, Zap, Award, ExternalLink } from 'lucide-react';

interface ModelCardProps {
  model: {
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
  };
  onTryDemo: (model: any) => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onTryDemo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'text-cyber-green';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-hot-pink';
      default: return 'text-gray-400';
    }
  };

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case 'High': return 'text-electric-blue';
      case 'Medium': return 'text-purple-400';
      case 'Low': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getTechStackColor = (techStack: string) => {
    switch (techStack) {
      case 'scikit-learn': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'TensorFlow/PyTorch': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'XGBoost': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      className="glass-card p-6 h-full flex flex-col neon-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{model.icon}</div>
          <div>
            <h3 className="font-orbitron font-bold text-xl text-white mb-1">
              {model.name}
            </h3>
            <p className="text-xs text-gray-400 font-rajdhani">
              {model.category}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-1">
          <span className={`text-xs font-semibold ${getComplexityColor(model.complexity)}`}>
            {model.complexity}
          </span>
          <span className={`text-xs font-semibold ${getPopularityColor(model.popularity)}`}>
            {model.popularity}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm font-rajdhani mb-4 flex-grow">
        {model.description}
      </p>

      {/* Use Case */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="w-4 h-4 text-electric-blue" />
          <span className="text-xs font-semibold text-electric-blue font-rajdhani">
            Real-World Use Case
          </span>
        </div>
        <p className="text-gray-400 text-xs font-rajdhani">
          {model.useCase}
        </p>
      </div>

      {/* Input/Output */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
          <div className="flex items-center space-x-1 mb-1">
            <BarChart3 className="w-3 h-3 text-cyber-green" />
            <span className="text-xs font-semibold text-cyber-green font-rajdhani">
              Input
            </span>
          </div>
          <p className="text-gray-400 text-xs font-rajdhani">
            {model.input}
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
          <div className="flex items-center space-x-1 mb-1">
            <Zap className="w-3 h-3 text-hot-pink" />
            <span className="text-xs font-semibold text-hot-pink font-rajdhani">
              Output
            </span>
          </div>
          <p className="text-gray-400 text-xs font-rajdhani">
            {model.output}
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Award className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-gray-400 font-rajdhani">Accuracy</span>
          <span className="text-xs font-bold text-yellow-400 font-rajdhani">
            {model.accuracy}
          </span>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-semibold border ${getTechStackColor(model.techStack)}`}>
          {model.techStack}
        </div>
      </div>

      {/* Action Button */}
      <motion.button
        onClick={() => onTryDemo(model)}
        className="w-full bg-gradient-to-r from-electric-blue to-cyber-blue text-navy-dark font-rajdhani font-bold py-3 rounded-lg flex items-center justify-center space-x-2 hover:from-cyber-green hover:to-electric-blue transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Play className="w-4 h-4" />
        <span>Try Demo</span>
        {isHovered && <ExternalLink className="w-4 h-4" />}
      </motion.button>
    </motion.div>
  );
};

export default ModelCard;
