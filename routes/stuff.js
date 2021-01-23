const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');

router.post('/', auth, stuffCtrl.createThing);
router.get('/', auth, stuffCtrl.getAllThing)
router.get('/:id', auth, stuffCtrl.getOneThing)
router.put('/:id', auth, stuffCtrl.modifyThing)
router.delete('/:id', auth, stuffCtrl.deleteThing)

module.exports = router;