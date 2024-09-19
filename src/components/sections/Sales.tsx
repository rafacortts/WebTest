import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { label: 'Total Sales', value: '$4.8m' },
  { label: 'Official Addons', value: '24' },
  { label: 'Total Addons', value: '86' },
  { label: 'Downloads', value: '86k' },
];

const Hero2: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Unlock your potential with our latest gaming add-ons
        </h2>
        <p className="mt-4 text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <dt className="order-last text-lg font-medium text-gray-500">{stat.label}</dt>
            <dd className="text-4xl font-extrabold  md:text-5xl">
              <CountUp start={0} end={parseInt(stat.value.replace(/[^0-9]/g, ''), 10)} duration={2.5} separator="," />
              {stat.label === 'Total Sales' || stat.label === 'Downloads' ? stat.value.replace(/[^a-zA-Z]/g, '') : ''}
            </dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
};

export default Hero2;
