const express = requre('express');
const  request = require('request-promise');
const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = 'd422e08d65ef57114c358392aad87c0b';
const baseurl = "http://api.scraperapi.com?api_key=${apiKey}&autoparse=true";

app.use(express.json());


app.get('/',(req,res)=>{
    re.send('Welcome to amzoapi.');
});

//Get product details
app.get('/products/:productsId', async (req, res)=>{
    const {productId}= req-URLSearchParams;

    try {
const response= await request("${baseUrl}&url=https://www.amazon.com/dp/$productId");
res.json(response);

    } catch (error) {
        res.json(error);
        
    }
});

//Get product Reviews
app.get('/products/:productsId/reviews', async (req, res)=>{
    const {productId}= req-URLSearchParams;

    try {
const response= await request("${baseUrl}&url=https://www.amazon.com/products-reviews/$productId");
res.json(response);

    } catch (error) {
        res.json(error);
        
    }
});


//Get product offers
app.get('/products/:productsId/offers', async (req, res)=>{
    const {productId}= req-URLSearchParams;

    try {
const response= await request("${baseUrl}&url=https://www.amazon.com/gp/offer-listing/$productId");
res.json(response);

    } catch (error) {
        res.json(error);
        
    }
});

//Get search
app.get('/search/:searchQuery', async (req, res)=>{
    const {searchQuery}= req-URLSearchParams;

    try {
const response= await request("${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}");
res.json(response);

    } catch (error) {
        res.json(error);
        
    }
});


app.listen(PORT, ()=> console.log('Server running on port ${PORT}'));
