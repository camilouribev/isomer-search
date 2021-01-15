import React from 'react';
import SearchBar from './SearchBar';
import useSearch from '../hooks/useSearch';
import ChemList from './ChemList';


const App = () => {

  const [res, search, loader] = useSearch('CH3COOH');

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
        <div className='ui items'>
        {loader}

         <ChemList foundChems={res} />
       </div>
    </div>

  );
};

export default App;
