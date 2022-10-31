const { testCredentials } = require("../../../helpers/testCredentials");
const RC = require("@ringcentral/sdk").SDK;

export default function handler(req, res) {
  const RECIPIENT = testCredentials.RINGOUT_RECIPIENT;

  var rcsdk = new RC({
    server: testCredentials.RC_SERVER_URL,
    clientId: testCredentials.RC_CLIENT_ID,
    clientSecret: testCredentials.RC_CLIENT_SECRET,
  });
  var platform = rcsdk.platform();
  platform.login({
    username: testCredentials.RC_USERNAME,
    password: testCredentials.RC_PASSWORD,
    extension: testCredentials.RC_EXTENSION,
  });

  platform.on(platform.events.loginSuccess, () => {
    call_ringout();
  });

  async function call_ringout() {
    try {
      var resp = await platform.post(
        "/restapi/v1.0/account/~/extension/~/ring-out",
        {
          from: { phoneNumber: testCredentials.RC_USERNAME },
          to: { phoneNumber: RECIPIENT },
          playPrompt: false,
        }
      );
      var jsonObj = await resp.json();
      res.status(200).json(jsonObj);
    } catch (e) {
      res.status(404).json(e.message);
    }
  }
}
