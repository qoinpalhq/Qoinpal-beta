import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h2 className="font-medium text-lg">{title}</h2>;
};

export default Title;
