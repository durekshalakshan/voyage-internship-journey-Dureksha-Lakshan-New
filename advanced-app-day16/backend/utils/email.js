const sendEmail = async (to, subject, text) => {
  console.log(`Dummy email sent to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${text}`);
  return Promise.resolve(); 
};

module.exports = sendEmail;
