import React from 'react';

interface YirmibirProps {
  className?: string;
}

const Yirmibir: React.FC<YirmibirProps> = ({ className }) => {
  return (
    <img
      src="/images/yirmibir_logo.png"
      alt="Yirmibir Logo"
      className={className}
      style={{ width: '300px', height: '50px' }}
    />
  );
};

export default Yirmibir;
