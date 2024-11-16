const express = require('express');
const app = express();
const apiVersion = process.env.API_VERSION || 'v1';
const accountRoutes = require(`./routes/${apiVersion}/accountRoutes`);
const transactionRoutes = require(`./routes/${apiVersion}/transactionRoutes`);
const cardRoutes = require(`./routes/${apiVersion}/cardRoutes`);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/api/${apiVersion}/accounts`, accountRoutes);
app.use(`/api/${apiVersion}/transactions`, transactionRoutes);
app.use(`/api/${apiVersion}/card`, cardRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to automatic cash machine');
});

const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on: ${port}`);
    });
}

module.exports = app;