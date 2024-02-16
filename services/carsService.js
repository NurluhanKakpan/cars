const axios = require('axios');


const getCars = async (search) => {
    const apiKey = 'sFqQ8nUjQGOmqCqY1NqUlQ==XycsoRYDFVs8ZIKi';
    const url = 'https://api.api-ninjas.com/v1/cars?model=' + search;
   try {
      const response = await axios.get(url,{
          headers: {
              'X-Api-Key': apiKey
          }
      });
       return response.data;
   }
   catch (error) {
       console.error(error);
   }
}

module.exports = {
    getCars
};