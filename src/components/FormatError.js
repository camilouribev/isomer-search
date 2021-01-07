import React from 'react';

const FormatError = () => {
  return(
    <div className="ui message">
      <div className="header">
        <h2>FORMAT ERROR</h2>
      </div>
        <p>Please try writing your chemical formula with correct capitalization, avoiding parentheses and blankspaces </p>
    </div>
  );

};

export default FormatError;
