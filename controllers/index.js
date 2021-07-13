const router = require('express').Router();

const apiRoutes = require('./api/');
const wrapperRoutes = require('./wrapper-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', wrapperRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;