// "use strict";

// const twilio = require('twilio');
// const client = new twilio(sails.config.twilio.accountSid, sails.config.twilio.authToken);

// module.exports = {
//     client: client,

//     send: (phone, code) => {
//         console.log(phone, code)
//         return client.messages.create({
//             to: phone,
//             from: sails.config.twilio.phoneNumber,
//             body: "Digital Gold - verify code is " + code + ". Welcome to DG World!",
//         }).then(message => sails.log.info(`Sent sms id: ${message.sid}`))
//           .catch(err  => sails.log.error(err));
//     }
// };
