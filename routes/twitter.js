/**
 * Created by fear on 19-02-17.
 */
import express from 'express';
import twitterService from '../services/twitter';

const router = express.Router();

router.get('/', (req, res) => {
  twitterService.searchByTag('node')
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
