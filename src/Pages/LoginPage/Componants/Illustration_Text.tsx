import React from 'react';

interface IllustrationTextProps {
  imageUrl: string;
  title: string;
  textLines: string[];
}

const Illustration_Text: React.FC<IllustrationTextProps> = ({ imageUrl, title, textLines }) => {
  return (
    <div className="Illustration_Text d-flex justify-content-center text-center flex-column">
      <img src={imageUrl} alt="illustration" className="illustration ms-3" />
      <h1 className="fw-bold">{title}</h1>
      {textLines.map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </div>
  );
};

export default Illustration_Text;
