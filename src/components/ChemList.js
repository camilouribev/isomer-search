import React from 'react';
import ChemItem from './ChemItem';
import NotFound from './NotFound';
import FormatError from './FormatError';

  const ChemList = (foundChems) => {

    if (foundChems.foundChems === "error") {
      return(<FormatError />);
    }
    else {
      return (
        foundChems.foundChems === false ?  <NotFound /> : <ChemItem res={foundChems}/>
      );
    }

  };

export default ChemList;
