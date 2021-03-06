const Userdata = require("../models/user");
const bcrypt = require('bcrypt');
const multer = require("multer");
const jwt = require('jsonwebtoken');
const config = require('../config');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const sendgridTransport = require('nodemailer-sendgrid-transport');
{/*const storage = multer.diskStorage({
    destination: ((req, res, cb) => {
        cb(null, './profilepic');
    }),
    filename: ((req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    })
})

const upload = multer({ storage: storage });
*/}
const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: "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"
  }
}))
module.exports = (app) => {
  app.post('/signup', (req, res) => {
    Userdata.find({ email: req.body.email })
      .exec().then((user) => {
        if (user.length >= 1) {
          return res.status(422).send({
            message: "email already exists"
          })
        } else {
          bcrypt.hash(req.body.password, 10, ((err, hash) => {
            if (err) {
              return res.status(400).send({
                message: err
              })
            } else {
              const userdata = new Userdata({
                email: req.body.email,
                password: hash,
                username: req.body.username,
                age: req.body.age,
                //   userphoto: req.file.path
              })
              userdata.save().then((data) => {
                transporter.sendMail({
                  to: data.email,
                  from: "raghavyuva@gmail.com",
                  subject: "SIGNUP SUCCESS",
                  html: `
                                    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<style type="text/css">
body {width: 600px;margin: 0 auto;}
table {border-collapse: collapse;}
table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
body, p, div {
font-family: verdana,geneva,sans-serif;
font-size: 16px;
}
body {
color: #516775;
}
body a {
color: #993300;
text-decoration: none;
}
p { margin: 0; padding: 0; }
table.wrapper {
width:100% !important;
table-layout: fixed;
-webkit-font-smoothing: antialiased;
-webkit-text-size-adjust: 100%;
-moz-text-size-adjust: 100%;
-ms-text-size-adjust: 100%;
}
img.max-width {
max-width: 100% !important;
}
.column.of-2 {
width: 50%;
}
.column.of-3 {
width: 33.333%;
}
.column.of-4 {
width: 25%;
}
@media screen and (max-width:480px) {
.preheader .rightColumnContent,
.footer .rightColumnContent {
  text-align: left !important;
}
.preheader .rightColumnContent div,
.preheader .rightColumnContent span,
.footer .rightColumnContent div,
.footer .rightColumnContent span {
  text-align: left !important;
}
.preheader .rightColumnContent,
.preheader .leftColumnContent {
  font-size: 80% !important;
  padding: 5px 0;
}
table.wrapper-mobile {
  width: 100% !important;
  table-layout: fixed;
}
img.max-width {
  height: auto !important;
  max-width: 100% !important;
}
a.bulletproof-button {
  display: block !important;
  width: auto !important;
  font-size: 80%;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.columns {
  width: 100% !important;
}
.column {
  display: block !important;
  width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
}
</style>
<!--user entered Head Start-->

<!--End Head user entered-->
</head>
<body>
<center class="wrapper" data-link-color="#993300" data-body-style="font-size:16px; font-family:verdana,geneva,sans-serif; color:#516775; background-color:#F9F5F2;">
  <div class="webkit">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#F9F5F2">
      <tbody><tr>
        <td valign="top" bgcolor="#F9F5F2" width="100%">
          <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
            <tbody><tr>
              <td width="100%">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tbody><tr>
                    <td>
                      <!--[if mso]>
<center>
<table><tr><td width="600">
<![endif]-->
                              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                <tbody><tr>
                                  <td role="modules-container" style="padding:0px 0px 0px 0px; color:#516775; text-align:left;" bgcolor="#F9F5F2" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
<tbody><tr>
<td role="module-content">
  <p>Signup Success</p>
</td>
</tr>
</tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4UqFsRLozLcypAAv4CeoFS">
<tbody><tr>
  <td style="font-size:6px; line-height:10px; padding:30px 0px 0px 0px;" valign="top" align="center">
    <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:50% !important; width:50%; height:auto !important;" src="https://guidemic.in/wp-content/uploads/2020/10/cropped-guidemic-transperant-3.png" alt="Ingrid & Anders" width="300" data-responsive="true" data-proportionally-constrained="false">
  </td>
</tr>
</tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="iqe7juSSgLbdm3gXWExpsY">
<tbody><tr>
  <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
  </td>
</tr>
</tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="eUYR8ZuwyTirQCAuyEc98X">
<tbody><tr>
  <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
    <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.motivationalliance.org%2Fwp-content%2Fuploads%2F2016%2F01%2FSuccess-graphic.jpg&f=1&nofb=1" alt="" width="600" data-responsive="true" data-proportionally-constrained="false">
  </td>
</tr>
</tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8VquPM2ZMj7RJRhAUE6wmF">
<tbody><tr>
  <td style="background-color:#ffffff; padding:50px 0px 10px 0px; line-height:30px; text-align:inherit;" height="100%" valign="top" bgcolor="#ffffff"><div><div style="font-family: inherit; text-align: center"><span style="color: #516775; font-size: 28px; font-family: georgia,serif"><strong>Welcome to Guidemic</strong></span></div><div></div></div></td>
</tr>
</tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="keQHYG1b1ztewxwhDtuCpS">
<tbody><tr>
  <td style="background-color:#ffffff; padding:10px 40px 20px 40px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="#ffffff"><div><div style="font-family: inherit; text-align: center"><span style="font-family: verdana,geneva,sans-serif">Login  to your Account and explore products </span></div>
<ul>
<li style="text-align: inherit">Categorized products</li>
<li style="text-align: inherit"><span style="font-family: verdana,geneva,sans-serif">Reporting Technology</span></li>
<li style="text-align: inherit"><span style="font-family: verdana,geneva,sans-serif">Unlimited technology</span></li>
<li style="text-align: inherit"><span style="font-family: verdana,geneva,sans-serif"></span></li>
<li style="text-align: inherit"><span style="font-family: verdana,geneva,sans-serif">Refer your friends</span></li>
</ul><div></div></div></td>
</tr>
</tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-muid="hthYAt191yTdg6FPWYKodF"><tbody><tr><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:0px 0px 40px 0px; background-color:#ffffff;"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#993300" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a style="background-color:#993300; border:1px solid #993300; border-color:#993300; border-radius:0px; border-width:1px; color:#ffffff; display:inline-block; font-family:verdana,geneva,sans-serif; font-size:16px; font-weight:normal; letter-spacing:1px; line-height:30px; padding:12px 20px 12px 20px; text-align:center; text-decoration:none; border-style:solid;" href="" target="_blank">Join VIP</a></td></tr></tbody></table></td></tr></tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="h5Act64miE4yjzNnz1YMGs">
<tbody><tr>
  <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
  </td>
</tr>
</tbody></table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="jw3c3eYnz3qZ2aqby3rNPX">
<tbody><tr>
  <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
      <tbody><tr>
        <td style="padding:0px 0px 10px 0px;" bgcolor="#ffffff"></td>
      </tr>
    </tbody></table>
  </td>
</tr>
</tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="noXVUxSTfKbdSVM2Xrua2t">
<tbody><tr>
  <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
  </td>
</tr>
</tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="vh6t2nbGK2ApVEk1CB3r5A">
<tbody><tr>
  <td style="padding:18px 0px 18px 0px; line-height:30px; text-align:inherit;" height="100%" valign="top" bgcolor=""><div><div style="font-family: inherit; text-align: center"><span style="color: #993300; font-size: 28px; font-family: georgia,serif"><strong>Hungry for style inspiration?</strong></span></div><div></div></div></td>
</tr>
</tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-muid="fpvvts1C82XMqQzTjscA1Z"><tbody><tr><td align="center" class="outer-td" style="padding:20px 0px 0px 0px;" bgcolor=""><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#993300" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a style="background-color:#993300; border:1px solid #993300; border-color:#993300; border-radius:0px; border-width:1px; color:#ffffff; display:inline-block; font-family:verdana,geneva,sans-serif; font-size:16px; font-weight:normal; letter-spacing:1px; line-height:30px; padding:12px 20px 12px 20px; text-align:center; text-decoration:none; border-style:solid;" href="" target="_blank">Start Shopping!</a></td></tr></tbody></table></td></tr></tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="51LxsNyTDYV3Xp5k5vET2o">
<tbody><tr>
  <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
  </td>
</tr>
</tbody></table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="noLZCGp2Fg6viPoP15ufF1">
<tbody><tr>
  <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
      <tbody><tr>
        <td style="padding:0px 0px 10px 0px;" bgcolor="#ffffff"></td>
      </tr>
    </tbody></table>
  </td>
</tr>
</tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="aQTmVGoZvs6GLJLWsiastG">
<tbody><tr>
  <td style="padding:0px 0px 40px 0px;" role="module-content" bgcolor="">
  </td>
</tr>
</tbody></table><table class="module" role="module" data-type="social" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="sLpvVMcymGiSrXMXabUBds">
<tbody>
  <tr>
    <td valign="top" style="padding:0px 0px 0px 0px; font-size:6px; line-height:10px; background-color:#f9f5f2;" align="center">
      <table align="center">
        <tbody>
          <tr><td style="padding: 0px 5px;">
<a role="social-icon-link" href="https://www.facebook.com/" target="_blank" alt="Facebook" title="Facebook" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
  <img role="social-icon" alt="Facebook" title="Facebook" src="https://marketing-image-production.s3.amazonaws.com/social/white/facebook.png" style="height:30px; width:30px;" height="30" width="30">
</a>
</td><td style="padding: 0px 5px;">
<a role="social-icon-link" href="https://twitter.com/" target="_blank" alt="Twitter" title="Twitter" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
  <img role="social-icon" alt="Twitter" title="Twitter" src="https://marketing-image-production.s3.amazonaws.com/social/white/twitter.png" style="height:30px; width:30px;" height="30" width="30">
</a>
</td><td style="padding: 0px 5px;">
<a role="social-icon-link" href="https://www.instagram.com/" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
  <img role="social-icon" alt="Instagram" title="Instagram" src="https://marketing-image-production.s3.amazonaws.com/social/white/instagram.png" style="height:30px; width:30px;" height="30" width="30">
</a>
</td><td style="padding: 0px 5px;">
<a role="social-icon-link" href="https://www.pinterest.com/sendgrid/" target="_blank" alt="Pinterest" title="Pinterest" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
  <img role="social-icon" alt="Pinterest" title="Pinterest" src="https://marketing-image-production.s3.amazonaws.com/social/white/pinterest.png" style="height:30px; width:30px;" height="30" width="30">
</a>
</td></tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table><div data-role="module-unsubscribe" class="module unsubscribe-css__unsubscribe___2CDlR" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:center;" data-muid="mQ1u1Awkou7szvSGChCGcV">
<div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-family:arial,helvetica,sans-serif; font-size:12px; line-height:20px;">{{Sender_Name}}</p><p style="font-family:arial,helvetica,sans-serif; font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div>
<p style="font-family:arial,helvetica,sans-serif; font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" style="">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="">Unsubscribe Preferences</a></p></div><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="eAq5DwvRYWV4D7T3oBCXhH">
<tbody><tr>
  <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
  </td>
</tr>
</tbody></table></td>
                                </tr>
                              </tbody></table>
                              <!--[if mso]>
                            </td>
                          </tr>
                        </table>
                      </center>
                      <![endif]-->
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table>
        </td>
      </tr>
    </tbody></table>
  </div>
</center>


</body></html> 
                                    `
                })
                res.send(data);
                console.log(data);
              }).catch((error) => {
                return res.status(420).send({
                  message: error
                });
              });
            }
          }));
        }
      })
  });



  app.delete('/:userId', (req, res) => {
    User.remove({ _id: req.params.userId }).exec().then((data) => {
      res.status(200).send({
        message: "user deleted successfully"
      })
    }).catch((err) => {
      return res.status(500).send({
        message: err || "something went wrong while deleting user"
      })
    })
  })
  app.post('/login', (req, res, next) => {
    Userdata.find({ email: req.body.email }).exec().then(user => {
      if (user.length < 1) {
        return res.status(404).send({
          message: "Email Does not exists"
        })
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(500).send({
            message: "Authentication Failed"
          })
        }
        if (result) {
          const token = jwt.sign(
            { email: user[0].email, id: user[0]._id },
            config.jwt_token,
            { expiresIn: "1h" }
          )
          console.log('auth success', token)
          transporter.sendMail({
            to: user[0].email,
            from: "raghavyuva@gmail.com",
            subject: "SIGNUP SUCCESS",
            html: `
                        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<style type="text/css">
body {width: 600px;margin: 0 auto;}
table {border-collapse: collapse;}
table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
body, p, div {
font-family: verdana,geneva,sans-serif;
font-size: 16px;
}
body {
color: #516775;
}
body a {
color: #993300;
text-decoration: none;
}
p { margin: 0; padding: 0; }
table.wrapper {
width:100% !important;
table-layout: fixed;
-webkit-font-smoothing: antialiased;
-webkit-text-size-adjust: 100%;
-moz-text-size-adjust: 100%;
-ms-text-size-adjust: 100%;
}
img.max-width {
max-width: 100% !important;
}
.column.of-2 {
width: 50%;
}
.column.of-3 {
width: 33.333%;
}
.column.of-4 {
width: 25%;
}
@media screen and (max-width:480px) {
.preheader .rightColumnContent,
.footer .rightColumnContent {
text-align: left !important;
}
.preheader .rightColumnContent div,
.preheader .rightColumnContent span,
.footer .rightColumnContent div,
.footer .rightColumnContent span {
text-align: left !important;
}
.preheader .rightColumnContent,
.preheader .leftColumnContent {
font-size: 80% !important;
padding: 5px 0;
}
table.wrapper-mobile {
width: 100% !important;
table-layout: fixed;
}
img.max-width {
height: auto !important;
max-width: 100% !important;
}
a.bulletproof-button {
display: block !important;
width: auto !important;
font-size: 80%;
padding-left: 0 !important;
padding-right: 0 !important;
}
.columns {
width: 100% !important;
}
.column {
display: block !important;
width: 100% !important;
padding-left: 0 !important;
padding-right: 0 !important;
margin-left: 0 !important;
margin-right: 0 !important;
}
}
</style>
<!--user entered Head Start-->

<!--End Head user entered-->
</head>
<body>
<center class="wrapper" data-link-color="#993300" data-body-style="font-size:16px; font-family:verdana,geneva,sans-serif; color:#516775; background-color:#F9F5F2;">
<div class="webkit">
<table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#F9F5F2">
<tbody><tr>
<td valign="top" bgcolor="#F9F5F2" width="100%">
<table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
<tbody><tr>
  <td width="100%">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tbody><tr>
        <td>
          <!--[if mso]>
<center>
<table><tr><td width="600">
<![endif]-->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                    <tbody><tr>
                      <td role="modules-container" style="padding:0px 0px 0px 0px; color:#516775; text-align:left;" bgcolor="#F9F5F2" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
<tbody><tr>
<td role="module-content">
<p>Login Success</p>
</td>
</tr>
</tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4UqFsRLozLcypAAv4CeoFS">
<tbody><tr>
<td style="font-size:6px; line-height:10px; padding:30px 0px 0px 0px;" valign="top" align="center">
<img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:50% !important; width:50%; height:auto !important;" src="https://guidemic.in/wp-content/uploads/2020/10/cropped-guidemic-transperant-3.png" alt="Ingrid & Anders" width="300" data-responsive="true" data-proportionally-constrained="false">
</td>
</tr>
</tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="iqe7juSSgLbdm3gXWExpsY">
<tbody><tr>
<td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
</td>
</tr>
</tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="eUYR8ZuwyTirQCAuyEc98X">
<tbody><tr>
<td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
<img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.motivationalliance.org%2Fwp-content%2Fuploads%2F2016%2F01%2FSuccess-graphic.jpg&f=1&nofb=1" alt="" width="600" data-responsive="true" data-proportionally-constrained="false">
</td>
</tr>
</tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8VquPM2ZMj7RJRhAUE6wmF">
<tbody><tr>
<td style="background-color:#ffffff; padding:50px 0px 10px 0px; line-height:30px; text-align:inherit;" height="100%" valign="top" bgcolor="#ffffff"><div><div style="font-family: inherit; text-align: center"><span style="color: #516775; font-size: 28px; font-family: georgia,serif"><strong>Welcome to Guidemic</strong></span></div><div></div></div></td>
</tr>
</tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="keQHYG1b1ztewxwhDtuCpS">
<tbody><tr>
<td style="background-color:#ffffff; padding:10px 40px 20px 40px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="#ffffff"><div><div style="font-family: inherit; text-align: center"><span style="font-family: verdana,geneva,sans-serif">Login  to your Account and explore products </span></div>
<ul>
<li style="text-align: inherit">Categorized products</li>
<li style="text-align: inherit"><span style="font-family: verdana,geneva,sans-serif">Reporting Technology</span></li>
<li style="text-align: inherit"><span style="font-family: verdana,geneva,sans-serif">Unlimited technology</span></li>
<li style="text-align: inherit"><span style="font-family: verdana,geneva,sans-serif"></span></li>
<li style="text-align: inherit"><span style="font-family: verdana,geneva,sans-serif">Refer your friends</span></li>
</ul><div></div></div></td>
</tr>
</tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-muid="hthYAt191yTdg6FPWYKodF"><tbody><tr><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:0px 0px 40px 0px; background-color:#ffffff;"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#993300" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a style="background-color:#993300; border:1px solid #993300; border-color:#993300; border-radius:0px; border-width:1px; color:#ffffff; display:inline-block; font-family:verdana,geneva,sans-serif; font-size:16px; font-weight:normal; letter-spacing:1px; line-height:30px; padding:12px 20px 12px 20px; text-align:center; text-decoration:none; border-style:solid;" href="" target="_blank">Join VIP</a></td></tr></tbody></table></td></tr></tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="h5Act64miE4yjzNnz1YMGs">
<tbody><tr>
<td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
</td>
</tr>
</tbody></table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="jw3c3eYnz3qZ2aqby3rNPX">
<tbody><tr>
<td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
<table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
<tbody><tr>
<td style="padding:0px 0px 10px 0px;" bgcolor="#ffffff"></td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="noXVUxSTfKbdSVM2Xrua2t">
<tbody><tr>
<td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
</td>
</tr>
</tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="vh6t2nbGK2ApVEk1CB3r5A">
<tbody><tr>
<td style="padding:18px 0px 18px 0px; line-height:30px; text-align:inherit;" height="100%" valign="top" bgcolor=""><div><div style="font-family: inherit; text-align: center"><span style="color: #993300; font-size: 28px; font-family: georgia,serif"><strong>Hungry for style inspiration?</strong></span></div><div></div></div></td>
</tr>
</tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-muid="fpvvts1C82XMqQzTjscA1Z"><tbody><tr><td align="center" class="outer-td" style="padding:20px 0px 0px 0px;" bgcolor=""><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#993300" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a style="background-color:#993300; border:1px solid #993300; border-color:#993300; border-radius:0px; border-width:1px; color:#ffffff; display:inline-block; font-family:verdana,geneva,sans-serif; font-size:16px; font-weight:normal; letter-spacing:1px; line-height:30px; padding:12px 20px 12px 20px; text-align:center; text-decoration:none; border-style:solid;" href="" target="_blank">Start Shopping!</a></td></tr></tbody></table></td></tr></tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="51LxsNyTDYV3Xp5k5vET2o">
<tbody><tr>
<td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
</td>
</tr>
</tbody></table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="noLZCGp2Fg6viPoP15ufF1">
<tbody><tr>
<td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
<table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
<tbody><tr>
<td style="padding:0px 0px 10px 0px;" bgcolor="#ffffff"></td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="aQTmVGoZvs6GLJLWsiastG">
<tbody><tr>
<td style="padding:0px 0px 40px 0px;" role="module-content" bgcolor="">
</td>
</tr>
</tbody></table><table class="module" role="module" data-type="social" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="sLpvVMcymGiSrXMXabUBds">
<tbody>
<tr>
<td valign="top" style="padding:0px 0px 0px 0px; font-size:6px; line-height:10px; background-color:#f9f5f2;" align="center">
<table align="center">
<tbody>
<tr><td style="padding: 0px 5px;">
<a role="social-icon-link" href="https://www.facebook.com/" target="_blank" alt="Facebook" title="Facebook" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
<img role="social-icon" alt="Facebook" title="Facebook" src="https://marketing-image-production.s3.amazonaws.com/social/white/facebook.png" style="height:30px; width:30px;" height="30" width="30">
</a>
</td><td style="padding: 0px 5px;">
<a role="social-icon-link" href="https://twitter.com/" target="_blank" alt="Twitter" title="Twitter" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
<img role="social-icon" alt="Twitter" title="Twitter" src="https://marketing-image-production.s3.amazonaws.com/social/white/twitter.png" style="height:30px; width:30px;" height="30" width="30">
</a>
</td><td style="padding: 0px 5px;">
<a role="social-icon-link" href="https://www.instagram.com/" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
<img role="social-icon" alt="Instagram" title="Instagram" src="https://marketing-image-production.s3.amazonaws.com/social/white/instagram.png" style="height:30px; width:30px;" height="30" width="30">
</a>
</td><td style="padding: 0px 5px;">
<a role="social-icon-link" href="https://www.pinterest.com/sendgrid/" target="_blank" alt="Pinterest" title="Pinterest" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
<img role="social-icon" alt="Pinterest" title="Pinterest" src="https://marketing-image-production.s3.amazonaws.com/social/white/pinterest.png" style="height:30px; width:30px;" height="30" width="30">
</a>
</td></tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><div data-role="module-unsubscribe" class="module unsubscribe-css__unsubscribe___2CDlR" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:center;" data-muid="mQ1u1Awkou7szvSGChCGcV">
<div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-family:arial,helvetica,sans-serif; font-size:12px; line-height:20px;">{{Sender_Name}}</p><p style="font-family:arial,helvetica,sans-serif; font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div>
<p style="font-family:arial,helvetica,sans-serif; font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" style="">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="">Unsubscribe Preferences</a></p></div><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="eAq5DwvRYWV4D7T3oBCXhH">
<tbody><tr>
<td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
</td>
</tr>
</tbody></table></td>
                    </tr>
                  </tbody></table>
                  <!--[if mso]>
                </td>
              </tr>
            </table>
          </center>
          <![endif]-->
        </td>
      </tr>
    </tbody></table>
  </td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
</div>
</center>


</body></html> 
`

          })
          return res.status(200).send({
            message: "Auth successfull",
            token: token
          })
        }
        return res.status(500).send({
          message: "Authentication Failed"
        })

      })
    }).catch()
  })

  app.post('/reset-password', (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
      if (err) {
        return res.status(500).send({
          err: "error sending reset password link"
        })
      }
      const token = buffer.toString('hex')
      Userdata.findOne({ email: req.body.email }).then((data) => {
        if (!data) {
          return res.status(422).send({
            err: "user does not exist"
          })
        } else {
          data.resetToken = token;
          data.expireToken = Date.now() + 3600000
          data.save().then((result) => {
            transporter.sendMail({
              to: data.email,
              from: "raghavyuva@gmail.com",
              subject: "password reset request",
              html: `
                 <p>you have requested for password reset</p>
                 <h5>click this link to reset your password <a href='http://localhost:3000/reset${token}></a></h5>'
                 `
            }).then((es) => {
              console.log(token)
              res.send({
                message: "check your email",
              })
            })
          })
        }
      })
    })
  })

  app.post('/new-password', (req, res) => {
    console.log(req.body)
    const senToken = req.body.token
    Userdata.findOne({ resetToken: senToken, expireToken: { $gt: Date.now() } }).then((ress) => {
      if (!ress) {
        return res.status(422).send({
          err: "session expired"
        })
      } else {
        const newpassword = req.body.password
        bcrypt.hash(newpassword, 12, ((err, hash) => {
          if (err) {
            return res.status(500).send({
              message: "error updating password"
            })
          } else {
            ress.password = hash;
            ress.resetToken = undefined;
            ress.expireToken = undefined;
            ress.save().then((saved) => {
              res.status(200).send({
                message: "password updated successfully"
              })
            })
          }
        }))
      }
    })
  })
};
