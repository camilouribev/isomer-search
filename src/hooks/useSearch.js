import { useState, useEffect} from 'react';
import PubChem from '../apis/PubChem';
import useLoadingPage from './useLoadingPage'

const useSearch = (defaultSearchFormula) => {
  const [res, setRes] = useState([]);
  const [loader, showLoader, hideLoader] = useLoadingPage();


   useEffect(() =>{
      search(defaultSearchFormula);

    }, [defaultSearchFormula]);


  const search = async (term) => {
    showLoader();
    try {
    const listOfChems = await PubChem.get(`/fastformula/${term}/cids/JSON?MaxRecords=10`);

    const chemData = [];

      if (listOfChems.data.IdentifierList.CID.length === 0) {
        hideLoader();
        setRes(false);
        return
      };

      for   (const chem of listOfChems.data.IdentifierList.CID) {
        let item = {};
        item.cid = chem;

        try {
          let commonName = await PubChem.get(`/cid/${chem}/synonyms/JSON?MaxRecords=6`);
          item.commonName =commonName.data.InformationList.Information[0].Synonym;

        } catch (e) {
          item.commonName = "";
        }

        item.img = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${chem}/PNG?record_type=2d&image_size=large`;

        try {
          let props = await PubChem.get(`/cid/${chem}/property/MolecularWeight,Charge,IUPACName/csv`);

          props = props.data.split(',');
          item.molWeight = props[4];
          item.charge = props[5];

          if (props.length < 7) {
            item.IUPACName = props[6];
          } else {
            item.IUPACName = props.slice( 6, props.length - 1).join(',');
          }

        } catch (e) {
          item.props = "error"
        }

        try {
          item.description = await PubChem.get(`/cid/${chem}/description/JSON`);
          } catch (e) {
            item.description = {"data": {"InformationList" : {"Information" : ""}}};
          }
        if (item.commonName == "") {

        }
        else {
          chemData.push(item);
        }


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




export default useSearch;
