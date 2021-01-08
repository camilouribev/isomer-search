import React from 'react';
import SearchBar from './SearchBar';
import useSearch from '../hooks/useSearch';
import useSearchBeta from '../hooks/useSearchBeta';
import ChemList from './ChemList';


const App = () => {

  const [res, search, loader] = useSearchBeta('C6H10O5');

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
