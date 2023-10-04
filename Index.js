const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require('cors');

const coursesRoutes = require('./route/coursesRoute.js');
const tutorRoutes = require('./route/tutorRoute.js');
const faqRoutes = require('./route/faqRoute.js');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//berfungsi mengizinkan request berupa json
app.use(express.json());

app.use(cors());


app.get('/', (request, response) => {
    response.send("Selamat Datang 🤗 Saat ini anda sedang berada di server EDUKIDS");
});

app.use('/api/v1/courses', coursesRoutes);

app.use('/api/v1/tutor', tutorRoutes);

app.use('/api/v1/faq', faqRoutes);

app.get('/status', (request, response) => {
   const status = {
       
      "Status": "Running on port " + port,
   };
    response.send(status);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});