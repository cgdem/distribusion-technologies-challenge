import {test} from '@playwright/test';
const axios = require('axios');
const config = require('../playwright.config.js');

test('ListGists', async ({page}) => {

    const username = config.username;
    const accessToken = config.accessToken;

    // Define the API endpoint
    const apiEndpoint = `https://api.github.com/users/${username}/gists`;

    // Set the Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      // Make the API request using axios
      const response = await axios.get(apiEndpoint, { headers });

      // Check if the request was successful (status code 2xx)
      const responseBody = response.data;
      console.log('API Response:', responseBody);
      // Add additional assertions or logic based on the API response
    } catch (error) {
      console.error('Error occurred:', error.message);
    }
});

