module.exports = (req, res) => {
    res.status(200);
    res.render('about', {
        layout: 'main',
    });
};