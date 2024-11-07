import React from 'react';
import './Content.css';

function Content(props) {
  const contentStyle = {
    color: props.color,
    fontSize: '18px',
    lineHeight: '1.6',
  };

  return <p style={contentStyle}>{props.text}</p>;
}

export default Content;
