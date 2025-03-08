'use client';

import { FiDatabase, FiAward, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

export default function Kaggle() {
  return (
    <section id="kaggle" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Science Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Exploring and learning data science through competitions and projects on Kaggle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="mr-4 text-blue-600">
                <FiDatabase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Current Focus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active learning and participation</p>
              </div>
            </div>

            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Participating in beginner-friendly competitions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Working with datasets to improve analysis skills</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Learning from community notebooks and discussions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Building a portfolio of data science projects</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="mr-4 text-blue-600">
                <FiTrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Learning Path</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Skills and technologies I'm focusing on</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Data Analysis</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Pandas</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">NumPy</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Matplotlib</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Neural Networks</span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Deep Learning</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <motion.a
                href="https://www.kaggle.com/atulyarai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Kaggle Profile
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 