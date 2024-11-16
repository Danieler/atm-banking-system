const express = require('express');
const app = express();
const apiVersion = process.env.API_VERSION || 'v1';
const accountRoutes = require(`./routes/${apiVersion}/accountRoutes`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/api/${apiVersion}/accounts`, accountRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido al cajero automático');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
