import React, { useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className='sixteen wide column search-bar' >
      <form   className="form-field" onSubmit={onSubmit} >
        <div >
          <div  >
            <div className="title-white">
              <label >Isomer Search  </label>
            </div>
            <div >

              <input
                className="input-mod"
                type="text"
                value={term}
                onChange={(event) => setTerm(event.target.value)}
                placeholder="Please write a chemical formula (ex: 'NH3')"
              />

              <button >
                      <i className="search icon"></i>
              </button>

            </div>

          </div>

        </div>
      </form>
    </div>
  );





};



export default SearchBar;
