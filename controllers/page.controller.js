// Mengekspor fungsi untuk dipanggil oleh Router
exports.getBeranda = (req, res) => {
    res.render('pages/home', {
        userName: 'Administrator TI',
        fiturList: ['Routing Terisolasi', 'Controller Terpisah', 'Skalabilitas Monolith']
    });
};

exports.getKatalog = (req, res) => {
    res.render('pages/katalog', { pageTitle: 'Katalog Produk' });
};

exports.postTambahProduk = (req, res) => {
    console.log("\n[BACK-END] Menerima Payload POST:");
    console.log(req.body);
    res.redirect('/katalog');
};