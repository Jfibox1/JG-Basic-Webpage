import express from 'express';
import fs from 'fs';
const app = express();
const PORT = 4000;

function loadPage(res, page) {
    fs.readFile("./Webpages/" +  page + ".html", function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        
        return res.end();
     });
}

app.get('/home-page', (req,res) => {
    loadPage(res, 'home-page')
});

app.get('/store-page', (req,res) => {
    loadPage(res, 'store-page')
});

app.get('/info-page', (req,res) => {
    loadPage(res, 'info-page')
});

app.get('/support-page', (req,res) => {
    loadPage(res, 'support-page')
});

app.get('/secret-page', (req,res) => {
    loadPage(res, 'secret-page')
});

app.use((req,res) => {
    res.redirect('/home-page');
});

app.listen(PORT, () => {
    console.log('Server is running at http://localhost:' + PORT);
})