const RC = require("@ringcentral/sdk").SDK;
const {
  testCredentials,
  userCredentials,
  serverCredentials,
} = require("../../../helpers/testCredentials");

export default function handler(req, res) {
  const RECIPIENT = testCredentials.SMS_RECIPIENT;

  var rcsdk = new RC(serverCredentials);
  var platform = rcsdk.platform();
  platform.login(userCredentials);

  platform.on(platform.events.loginSuccess, function (e) {
    send_sms();
  });

  async function send_sms() {
    try {
      var resp = await platform.post(
        "/restapi/v1.0/account/~/extension/~/sms",
        {
          from: { phoneNumber: +14245020615 },
          to: [{ phoneNumber: RECIPIENT }],
          text: "Hello World from JavaScript - new text",
        }
      );
      var jsonObj = await resp.json();
      res
        .status(200)
        .json("SMS sent. Message status: " + jsonObj.messageStatus);
    } catch (e) {
      res.status(404).json(e.message);
      process.exit(1);
    }
  }
}
