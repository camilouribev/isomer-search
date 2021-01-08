import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rsc.org/compounds/v1',
  headers: {
    apikey: 'YiRFus0VzbXG4tc2zOcB9EVlAGMWShkQ'
  }
});
