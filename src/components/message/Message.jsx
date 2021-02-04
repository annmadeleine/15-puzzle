import React from 'react';
import './message.scss';

const Message = ({ content }) => {
  return (
    <div className="message">
      <span>{content}</span>
    </div>
  );
};

export default Message;
