import React, { useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Isomer Search :  </label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="Please write a chemical formula (eg: 'NH3')"
          />
        </div>
      </form>
    </div>
  );
};



export default SearchBar;
