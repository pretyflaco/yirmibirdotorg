import React from 'react';
import Image from 'next/image';

interface YirmibirProps {
  className?: string;
}

const Yirmibir: React.FC<YirmibirProps> = ({ className }) => {
  return (
    <Image
      src="/images/yirmibir_logo.png"
      alt="YirmiBir"
      width={349} // Set the width of the image
      height={58} // Set the height of the image
      className={className}
    />
  );
};

export default Yirmibir;

