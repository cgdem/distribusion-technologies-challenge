import {test} from '@playwright/test';
const axios = require('axios');
const config = require('../playwright.config.js');
const globals = require('../globals.js');

test('DeleteGist', async ({page}) => {


  const accessToken = config.accessToken;
  const gistId = config.gistId;

  // Define the API endpoint
  const deleteGistEndpoint = `https://api.github.com/gists/${gistId}`;

  // Set the Authorization header
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };  

  try {
    // Make the API request to delete the gist
    const response = await axios.delete(deleteGistEndpoint, { headers });

    if (response.status === 204) {
      console.log('Gist deleted successfully.');
    } else {
      console.log('Unexpected response:', response.status, response.data);
    }
  } catch (error) {
    // currently this error is thrown in at least two scenarios, if a endpoint would be broken, or in case gist doesn't exist
    console.error(apiRequestErrorMessage, error.message);
    throw error; // not the cleanest way, but better than passing in case of error
  }

});