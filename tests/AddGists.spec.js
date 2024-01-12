import {test} from '@playwright/test';
const axios = require('axios');
const config = require('../playwright.config.js');
const globals = require('../globals.js');

test('AddGists', async ({page}) => {

    const username = config.username;
    const accessToken = config.accessToken;
    const fileName1 = 'file1.txt'
    const fileName2 = 'file2.txt'

    // Define the API endpoint
    const createGistEndpoint = `https://api.github.com/gists`;

    // Set the Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const gistData = {
        description: 'My API-created Gist',
        public: false,
        files: {
          [fileName1]: {
            content: 'Hello, this is the content of ' + [fileName1] + '!',
          },
          [fileName2]: {
            content: 'And this is the content of ' + [fileName2] + '!',
          },
        },
      };

    try {
        // Make the API request to add a gist
        const response = await axios.post(createGistEndpoint, gistData, { headers });

        // Check if the request was successful (status code 2xx)
        const responseBody = response.data;
        console.log('API Response:', responseBody);
        // Add additional assertions or logic based on the API response
      } catch (error) {
        console.error(apiRequestErrorMessage, error.message);
        throw error; // not the cleanest way, but better than passing in case of error
      }

});