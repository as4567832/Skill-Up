// utils/mailTemplates.js

// OTP Email template
const otpTemplate = (otp) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skill Up OTP</title>
    <style>
        body{
            background-color: rgb(255, 255, 255);
            display: flex;
            justify-content: center;
            align-items: center; /* vertical centering */
            height: 100vh; /* full viewport height */
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .main{
            text-align: center;
            background-color: rgb(255, 222, 150);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(0,0,0,0.2);
            max-width: 400px;
        }
        .heading{
            font-size: 40px;
            margin-bottom: 5px;
        }
        .title{
            font-size: 16px;
            margin-top: 0;
            margin-bottom: 20px;
        }
        p{
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 20px;
        }
        .otp{
            display: flex;
            justify-content: center; /* center OTP horizontally */
            align-items: center;
            background-color: #f0f0f0;
            width: 120px;
            margin: 0 auto 20px auto;
            padding: 10px;
            border-radius: 8px;
        }
        .otp h2{
            margin: 0;
            font-size: 24px;
            color: #ff4b5c;
        }
        .trouble{
            font-size: 14px;
            margin-bottom: 5px;
        }
        .contact{
            font-size: 12px;
            margin-bottom: 20px;
        }
        .best{
            font-size: 18px;
            margin-bottom: 5px;
        }
        .reply{
            font-size: 16px;
            margin-top: 0;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="main">
        <h2 class="heading">Skill Up</h2>
        <h5 class="title">Let's get you signed in</h5>
        <p class="paragraph">
            Hello,  
             We received a request to verify your account. Use the following One-Time Password to complete your verification process. This OTP is valid for the next 10 minutes. Please make sure to use it before it expires. For your security, do not share this OTP with anyone.<br><br>
            If you did not request this OTP, please ignore this email. No action is required from your side.
        </p>
        <h6 class="otps">Your login code is:</h6>
        <div class="otp"><h2>${otp}</h2></div>

        <h5 class="trouble">Have questions or trouble logging in?</h5>
        <p class="contact">Just reply to this mail or contact us.</p>
        <h3 class="best">All the Best</h3>    
        <h2 class="reply">by Team SkillUp</h2>
    </div>
</body>
</html>

  `;
};

module.exports = { otpTemplate };
