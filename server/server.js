const express = require('express');
const path = require('path');
const fs = require('fs');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../src/App');

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('^/$', (req, res, next) => {
	fs.readFile(path.join(__dirname, '../build/index.html'), 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send('500 - Internal Server Error');
		}

		return res.send(
			data.replace(
				'<div id="root"></div>',
				`<div id="root">${ReactDOMServer.renderToPipeableStream(<App />)}</div>`,
			),
		);
	});
});

app.listen(PORT, () => console.log(`Build running at localhost:${PORT}`));
