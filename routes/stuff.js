const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, stuffCtrl.createThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.get('/', auth, stuffCtrl.getAllThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.delete('/:id', auth, stuffCtrl.deleteThing)

module.exports = router;