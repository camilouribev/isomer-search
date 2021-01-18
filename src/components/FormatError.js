import React from 'react';

const FormatError = () => {
  return(
    <div className="ui message typing-error">
      <div className="header error">
        <h2 className="title">NOT FOUND</h2>
      </div>

        <ul>
          <li style={{paddingBottom: "2%"}}><p className="description">The compound you are looking for was not found. It may not exist.</p></li>

          <li><p className="description">If you are sure It does, please try  writing the formula again, with correct capitalization, avoiding parentheses and blank spaces.</p></li>
        </ul>
    </div>
  );

};

export default FormatError;
