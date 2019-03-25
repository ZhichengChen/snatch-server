const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sharp = require('sharp');

app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}))
app.use(bodyParser.json({limit:'50mb'}))

const boostSize = {
	'pic_wheel': [353, 353, 'png'],
	'pic_arrow': [45, 60, 'png'],
	'btn_luckydraw': [292, 77, 'png'],
	'bg_blue': [360, 640, 'jpg']
}

app.post('/', function(req, res) {
	const size = boostSize[req.body.name];
	if (!size) {
		return res.send('Name invalid!');
	}
	let buff = new Buffer(req.body.image, 'base64');
	let resize = sharp(buff)
					.resize(size[0], size[1]);
	if (size[2]=='jpg') {
		resize = resize.jpeg();
	} else {
		resize = resize.png({adaptiveFiltering: true})
	}
	resize.toFile(req.body.name+'.'+size[2], (err) => { 
		if (err) {
			return res.send(err);
		} else {
			return res.send('Upload Success!');
		}
	});
});

app.listen(3000, function(){
	console.log('ok.');
});
