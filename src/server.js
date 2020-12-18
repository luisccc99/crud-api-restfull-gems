const express = require('express');
const app = require('./app')
app.listen(app.get('port'), () => {
	console.log('server on app.get', app.get('port'))
});
