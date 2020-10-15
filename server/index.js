const PORT = process.env.PORT || 4000;

// Express
const express = require('express');
const app = express()

// Routes
const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => {
    console.log(`
    <--- Express server live on port ${PORT} --->
`)
})