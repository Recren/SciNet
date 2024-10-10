import axios from "axios";
require("dotenv").config();

//Used to get the token for the igdb api
const tokenHttp = axios.create({
  baseURL: "https://id.twitch.tv/oauth2/token",
});

//Used to store our token in local storage to retrieve for api calls
let cachedToken = "";
let tokenExpirationTimeInMs = 0;
//Function to allow us to get our token
const getToken = async () => {
  //If we have a token already and if the time it was requested plus its lifetime is greater then current time, it hasnt expired yet
  if (cachedToken != "" && tokenExpirationTimeInMs > Date.now()) {
    //Provide the token
    return cachedToken;
  }
  //If we dont have a token or it expired already:
  try {
    const response = await tokenHttp.post(``, null, {
      params: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "client_credentials",
      },
    });
    //Save our new token and the time at which it expires
    cachedToken = response.data.access_token;
    tokenExpirationTimeInMs = response.data.expires_in * 1000 + Date.now();

    //Provide the token
    return cachedToken;
  } catch (error) {
    console.error("Error retrieving the token", error);
  }
};

module.exports = getToken;
