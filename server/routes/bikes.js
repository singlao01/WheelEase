const router = require('express').Router();
const { getAllBikes, getBikeById, addBike, updateBike, deleteBike } = require('../controllers/bikeController');

router.get('/', getAllBikes);
router.get('/:id', getBikeById);
router.post('/', addBike);
router.put('/:id', updateBike);
router.delete('/:id', deleteBike);

module.exports = router;
