//this sets up to link my url generator model
const est = require('../models/url');

//has you use express as a parameter of express
module.exports = (express) => {

  const router = express.Router();

  //this is my post method
  router.post('/url', (req, res) =>{
    //this is to respond with links
    res.json(est.genURL(req.body.link));
  });
  //this is to return the data
  return router;
};
