import version from '../package.json';
import { Router } from 'express';
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: `Node.js Express App in Docker ${version}` });
});

export default router;
