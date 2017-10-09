/**
 * Routes for api calls. If this gets too big, split it into
 * separate files under an api/ directory.
 *
 * @author mtownsend
 * @since Oct 2017
 **/
import express from 'express';

const router = express.Router();

router.get('/test', (request, response) => {
  response.json({'data' : 'Butts'});
});

router.post('/test', (request, response) => {
  response.json({'data' : 'Nyan'});
});

router.post('/auth', (request, response) => {
  // TODO: Actually authenticate
  response.json({
    email: 'butts@butts.com'
  });
});

router.use((request, response) => {
  response.status(404).send("{}");
});

export default router;