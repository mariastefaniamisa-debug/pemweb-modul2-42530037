const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Wajib untuk menangkap form berjenis application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/', pageRoutes);

app.use((req, res) => { res.status(404).send('404 Not Found'); });

app.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server MVC Aktif!');
});