const express = require('express');
const router = express.Router();

// Import controller
const pageController = require('../controllers/page.controller.js');

// Petakan HTTP Method & URL Path ke fungsi controller
router.get('/', pageController.getBeranda);
router.get('/katalog', pageController.getKatalog);
router.post('/katalog/tambah', pageController.postTambahProduk);

module.exports = router;