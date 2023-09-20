import React , { ReactNode } from 'react';

interface ParallaxProps {
  backgroundImage: string;
  children?: ReactNode
  extra ? :string;
}

const Parallax: React.FC<ParallaxProps> = ({ backgroundImage, children,extra }) => {
  const background = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className={`h-[40vh] w-full  bg-cover bg-fixed bg-center bg-no-repeat ${extra}`}  
      style={background}
    >
      {children}
    </div>
  );
};

export default Parallax;