import {test} from '@playwright/test';
const axios = require('axios');
const config = require('../playwright.config.js');
const globals = require('../globals.js');

test('GetaGist', async ({page}) => {

  const accessToken = config.accessToken;
  const gistId = config.gistId;

  // Define the API endpoint
  const getGistEndpoint = `https://api.github.com/gists/${gistId}`;

  // Set the Authorization header
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };  

  try {
    // Make the API request to get the gist
    const response = await axios.get(getGistEndpoint, { headers });
    const gistDetails = response.data;

    console.log('Gist Details:', gistDetails);
  } catch (error) {
    console.error(apiRequestErrorMessage, error.message);
    throw error; // not the cleanest way, but better than passing in case of error
  }
});

