import { useState, useEffect} from 'react';
import PubChem from '../apis/PubChem';
import useLoadingPage from './useLoadingPage'
import axios from 'axios';

const useSearchBeta = (defaultSearchFormula) => {
  const [res, setRes] = useState([]);
  const [loader, showLoader, hideLoader] = useLoadingPage();


   useEffect(() =>{
      search(defaultSearchFormula);

    }, [defaultSearchFormula]);


  const search = async (term) => {
    showLoader();
    try {
    const listOfChems = await PubChem.get(`/fastformula/${term}/cids/JSON?MaxRecords=10`);


    console.log(listOfChems);

    const chemData = [];

      if (listOfChems.data.IdentifierList.CID.length === 0) {
        hideLoader();
        setRes(false);
        return
      };

      for   (const chem of listOfChems.data.IdentifierList.CID) {
        let item = {};
        item.cid = chem;
        let commonName = await PubChem.get(`/cid/${chem}/synonyms/JSON?MaxRecords=9`);
        item.commonName =commonName.data.InformationList.Information[0].Synonym;
        item.img = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${chem}/PNG?record_type=2d&image_size=small`;


        try {
          item.description = await PubChem.get(`/cid/${chem}/description/JSON`);
          console.log(item);
          } catch (e) {
            item.description = {"data": {"InformationList" : {"Information" : ""}}};
          }

        chemData.push(item);
        console.log(item);
        }
        setRes(chemData);
        hideLoader();

    }
    catch (e) {
        hideLoader ();
        setRes('error');
        console.log('fug');
      }

  };
  return [res, search, loader];

};




export default useSearchBeta;
