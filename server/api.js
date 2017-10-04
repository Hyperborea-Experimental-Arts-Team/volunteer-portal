/**
 * Routes for api calls. If this gets too big, split it into
 * separate files under an api/ directory.
 *
 * @author mtownsend
 * @since Oct 2017
 **/

const router = require('express').Router();

router.get('/test', (request, response) => {
  response.json({'data' : 'Nyan'});
});

router.post('/test', (request, response) => {
  response.json({'data' : 'Butts'});
});

module.exports = router;