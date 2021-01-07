import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rsc.org/compounds/v1',
  headers: {
    apikey: '9U7ux5Miy2i2InmthiiK6kcJfNQ6Efic'
  }
});
