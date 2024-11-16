const express = require('express');
const app = express();
const apiVersion = process.env.API_VERSION || 'v1';
const accountRoutes = require(`./routes/${apiVersion}/accountRoutes`);
const transactionRoutes = require(`./routes/${apiVersion}/transactionRoutes`);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/api/${apiVersion}/accounts`, accountRoutes);
app.use(`/api/${apiVersion}/transactions`, transactionRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to automatic cash machine');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on: ${port}`);
});
