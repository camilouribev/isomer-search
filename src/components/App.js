import React from 'react';
import SearchBar from './SearchBar';
import useSearch from '../hooks/useSearch';
import ChemList from './ChemList';


const App = () => {

  const [res, search, loader] = useSearch('CH3COOH');

  return (
    <div className='ui container' >
      <SearchBar onFormSubmit={search} />
        <div >
          <div>
           <ChemList foundChems={res} />
          </div>

       </div>
      {loader}
    </div>

  );
};

export default App;
