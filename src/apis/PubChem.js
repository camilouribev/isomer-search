import axios from 'axios';

export default axios.create({
  baseURL: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound'

});
