/**
 * Email Service
 * @description Server-side logic for Email handle
 */

/**
 * Switch Email Adapter by environment
 */
let sendMail = null;
if (sails.config.environment === 'development') {
    sendMail = require('./GmailService');
} else {
    sendMail = require('./SESService');
}

if (!sendMail) sails.log.error('Not Found Email Adapter for EmailService');

module.exports = {
    /**
     * Send Email verify when user register success
     * @param {string} userEmail
     * @param {string} activeLink
     * @return {Promise}
     */
    sendVerifyEmail: (userEmail, activeLink) => {
        let options = {
            to: userEmail,
            from: sails.config.sesService.ADMIN_EMAIL,
            subject: `[Digital Gold] Verify your email`,
            html: `
            <div class="m_5101819141054156248container" style="font-size:14px;background:#3aa090b5;padding:15px 30px;margin:auto;width:90%;display:block">
                <div class="m_5101819141054156248header">
                    <table class="m_5101819141054156248full-width" style="width:100%" width="100%">
                    <tbody>
                        <tr>
                        <td class="m_5101819141054156248header-left" style="font-size:24px;font-weight:bold;color:#8b2e86b3"><span>DIGITAL GOLD</span></td>
                        <td class="m_5101819141054156248header-right" style="text-align:right;font-weight:bold" align="right"><span>Email verification</span></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="m_5101819141054156248body" style="padding:5px;padding-top:20px;display:block;width:100%">
                <div>Dear user,</div><br>
                <h3 style="font-weight: 400;">Thank you for registering for Digital Gold ICO. Digital Gold ICO 
                    In order to proceed further steps, please kindly verify your email by clicking the link below: 
                    </h3>
                    <h3 style="font-weight: 400;"><a target="_blank" href="${activeLink}">${activeLink}</a></h3>
                    <h3 style="font-weight: 400;">Best regards,</h3>
                    <h3 style="font-weight: 400;">Digital Gold team</h3>
            </div> `
        };
        return sendMail(options);
    },

    /**
     * Send Email referrer when user register success
     */
    sendReferrerEmail: reply => {
        let options = {
            to: reply.emailRef,
            from: sails.config.sesService.ADMIN_EMAIL,
            subject: `[Digital Gold] Referrer your email`,
            html: `
            <div class="m_5101819141054156248container" style="font-size:14px;background:#3aa090b5;padding:15px 30px;margin:auto;width:90%;display:block">
                <div class="m_5101819141054156248header">
                    <table class="m_5101819141054156248full-width" style="width:100%" width="100%">
                    <tbody>
                        <tr>
                        <td class="m_5101819141054156248header-left" style="font-size:24px;font-weight:bold;color:#8b2e86b3"><span>DIGITAL GOLD</span></td>
                        <td class="m_5101819141054156248header-right" style="text-align:right;font-weight:bold" align="right"><span>Email Referrer</span></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="m_5101819141054156248body" style="padding:5px;padding-top:20px;display:block;width:100%">
                <div>Dear ${reply.fullname},</div><br>
                <h3 style="font-weight: 400;">Congratulation, you have introduced user ${
                    reply.email
                } to the system successfully. 
                    </h3>
                    <h3 style="font-weight: 400;">Best regards,</h3>
                    <h3 style="font-weight: 400;">Digital Gold team</h3>
            </div> `
        };
        return sendMail(options);
    },

    /**
     * sendApprovedEmail
     */
    sendApprovedEmail: email => {
        let options = {
            to: email,
            from: sails.config.sesService.ADMIN_EMAIL,
            subject: 'Approved Successfully',
            html: '<h1>Approved Successful!</h1>'
        };
        return sendMail(options);
    },

    sendEmailResetPassword: (userEmail, userName, activeLink) => {
        let options = {
            to: userEmail,
            from: sails.config.sesService.ADMIN_EMAIL,
            subject: '[Digital Gold] Reset your password',
            html: `
            <div class="m_5101819141054156248container" style="font-size:14px;background:#3aa090b5;padding:15px 30px;margin:auto;width:90%;display:block">
                <div class="m_5101819141054156248header">
                    <table class="m_5101819141054156248full-width" style="width:100%" width="100%">
                    <tbody>
                        <tr>
                        <td class="m_5101819141054156248header-left" style="font-size:24px;font-weight:bold;color:#8b2e86b3"><span>DIGITAL GOLD</span></td>
                        <td class="m_5101819141054156248header-right" style="text-align:right;font-weight:bold" align="right"><span>Email Reset Password</span></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="m_5101819141054156248body" style="padding:5px;padding-top:20px;display:block;width:100%">
                <div>Dear email: ${userEmail},</div><br>
                <h3 style="font-weight: 400;">We have received a request to reset your password. If it was you who requested, 
                please follow the link below to reset your password:</h3>
                <h3 style="font-weight: 400;"><a href="${activeLink}" target="_blank">${activeLink}</a></h3>
                <h3 style="font-weight: 400;">If it was not you who sent the request, 
                please report this to our system administrators at info@digitalgold-laboratory.com or reply directly to this email.</h3>
                <h3 style="font-weight: 400;">Best regards,</h3>
                <h3 style="font-weight: 400;">Digital Gold team</h3>
            </div> `
        };
        return sendMail(options);
    },

    sendEmailLoginCode: (userEmail, verifyLoginCode) => {
        let options = {
            to: userEmail,
            from: sails.config.sesService.ADMIN_EMAIL,
            subject: '[Digital Gold] Send Code Login',
            html: `
            <div class="m_5101819141054156248container" style="font-size:14px;background:#3aa090b5;padding:15px 30px;margin:auto;width:90%;display:block">
                <div class="m_5101819141054156248header">
                    <table class="m_5101819141054156248full-width" style="width:100%" width="100%">
                    <tbody>
                        <tr>
                        <td class="m_5101819141054156248header-left" style="font-size:24px;font-weight:bold;color:#8b2e86b3"><span>DIGITAL GOLD</span></td>
                        <td class="m_5101819141054156248header-right" style="text-align:right;font-weight:bold" align="right"><span>Send Code Login</span></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="m_5101819141054156248body" style="padding:5px;padding-top:20px;display:block;width:100%">
                <div>Dear email: ${userEmail},</div><br>
                <h3 style="font-weight: 400;">We have received a request to your login. Code confirm: <a href="#">${verifyLoginCode}</a></h3>
                <h3 style="font-weight: 400;">If it was not you who sent the request, 
                please report this to our system administrators at info@digitalgold-laboratory.com or reply directly to this email.</h3>
                <h3 style="font-weight: 400;">Best regards,</h3>
                <h3 style="font-weight: 400;">Digital Gold team</h3>
            </div> `
        };
        return sendMail(options);
    },

    /** Send mail when user invest success */
    sendInvestSuccessMail: data => {
        let options = {
            to: data.userEmail,
            from: '',
            subject: '',
            html: ``
        };
        return sendMail(options);
    }
};
