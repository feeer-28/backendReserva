const express = require("express");
const app = express();
const dotenv = require('dotenv');
const reservaRouter = require("./router/reservaRouter")
const cors = require('cors');


dotenv.config();
app.use(express.json());
app.use("/api",reservaRouter);

app.use(cors());

app.get('/api/reservas', (req, res) => {
    try {
      res.json({ message: 'Datos de reserva' });
    } catch (error) {
      res.json({ error: 'Error en el servidor' });
    }
  });
  

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto`);
});

