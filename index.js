/* eslint-disable no-undef */
const express = require('express');
const path = require('path');

const app = express();



app.listen(3003, (err) => {
    if (err) {
        console.log('Server cant start', err);
        process.exit(1);
    }
    console.log('Server has been started');
});