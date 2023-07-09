const validateURL = (req, res, next) => {
    console.log(
      "This function checks the validity of the URL entered by the user"
    );
    next();
  };
  
  module.exports = { validateURL };