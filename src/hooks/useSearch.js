import { useState, useEffect} from 'react';
import rsc from '../apis/rsc';
import useLoadingPage from './useLoadingPage'
import axios from 'axios';

const useSearch = (defaultSearchFormula) => {
  const [res, setRes] = useState([]);
  const [loader, showLoader, hideLoader] = useLoadingPage();


   useEffect(() =>{
      search(defaultSearchFormula);

    }, [defaultSearchFormula]);


  const search = async (term) => {
    showLoader();

    try {
      const id = await rsc.post('/filter/formula',{
          "formula": term,
          "orderBy": "referenceCount"
        }, );

        const listOfChems = await rsc.get(`/filter/${id.data.queryId}/results`,{
          params:{
            "start": 0,
            "count": 7
          }
        });

        if (listOfChems.data.results.length === 0) {
          hideLoader();
          setRes(false);
          return
        }

        const chemData = [];

        for   (const chem of listOfChems.data.results) {
          let chemProps = await rsc.get(`/records/${chem}/details`,{
            params:{
              "fields" : "commonname,nominalmass,averagemass,referencecount,smiles"
              }
          });

          let chemImg = await rsc.get(`/records/${chem}/image`);
          chemProps.data.img = chemImg.data.image;
          chemProps.data.cid= await axios.get(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${chemProps.data.smiles}/cids/TXT`);

          try {
            chemProps.data.description = await axios.get(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${chemProps.data.smiles}/description/json`);
          } catch (e) {
            chemProps.data.description =false;
          }

          chemData.push(chemProps.data);
          console.log(chemProps);

        }
        chemData.sort((a, b) => parseFloat(b.referenceCount) - parseFloat(a.referenceCount)); // orden descendente de referencias
        setRes(chemData);
        hideLoader();

    } catch (e) {
        hideLoader ();
        setRes('error');
      }

  };
  return [res, search, loader];

};


export default useSearch;
