const axios = require('axios');

const getAirCrafts = async (manufacturer,model) => {
    const apiKey = 'sFqQ8nUjQGOmqCqY1NqUlQ==XycsoRYDFVs8ZIKi';
    const url = `https://api.api-ninjas.com/v1/aircraft?manufacturer=${manufacturer}&model=${model}`;
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
        return {};
    }
}

module.exports = {
    getAirCrafts
};