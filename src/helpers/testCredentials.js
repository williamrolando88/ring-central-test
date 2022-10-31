export const testCredentials = {
  RC_SERVER_URL: "https://platform.devtest.ringcentral.com",
  RC_CLIENT_ID: "6w3-pybpRx28PWrfbqUR1Q",
  RC_CLIENT_SECRET: "6UQNNXvHTjaxlng5Pq8NLgTVCJ0mVTQ6a5yXcGcfBTow",

  RC_USERNAME: "+14245020615",
  RC_PASSWORD: "J3hSxbbr@82@zBG",
  RC_EXTENSION: "101",

  RC_JWT: "",

  SMS_RECIPIENT: "+12014222730",

  RINGOUT_RECIPIENT: "+13172222222",

  RC_REDIRECT_URL: "http://localhost:5000/oauth2callback",

  RC_FORWARDING_NUMBER: "",
};

export const serverCredentials = {
  server: testCredentials.RC_SERVER_URL,
  clientId: testCredentials.RC_CLIENT_ID,
  clientSecret: testCredentials.RC_CLIENT_SECRET,
};

export const userCredentials = {
  username: testCredentials.RC_USERNAME,
  password: testCredentials.RC_PASSWORD,
  extension: testCredentials.RC_EXTENSION,
};
