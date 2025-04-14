const router = require('express').Router();
const { bookBike, getUserBookings } = require('../controllers/bookingController');

router.post('/', bookBike);
router.get('/:userId', getUserBookings);

module.exports = router;
