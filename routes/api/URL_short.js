//This links to my generation model
const gen = require('../models/URL_Short');
const url = require('../models/url');

//This accepts express as a parameter of express
module.exports = (express) => {
  //This is an express router function
  const router = express.Router();

  //  create
  router.post('/urls', (req, res) => {
    const rb = req.body;
    // generates shorturl
    rb.shortURL = url.shortURL(url);
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // get
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // get by id
  router.get('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // update
  router.post('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // delete
  router.delete('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // returns correct data
  return router;
};
