const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.json({ message:'Hello World!', info: 'this is a simple rest API using nodejs and express framework' }));

module.exports = router;


