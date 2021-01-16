import React, { useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className='sixteen wide column search-bar' >
      <form   className="form" onSubmit={onSubmit} >
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
                placeholder="Please write a chemical formula (eg: 'NH3')"
              />
              <span>
                <button className="btn" >
                    <div class="ui animated button" tabIndex="0">
                      <div class="visible content description ">Search</div>
                      <div class="hidden content">
                        <i class="search icon"></i>
                      </div>
                    </div>
                </button>
              </span>
            </div>

          </div>

        </div>
      </form>
    </div>
  );





};



export default SearchBar;
