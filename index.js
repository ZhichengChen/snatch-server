const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', function(req, res) {
  res.json([
    {
      pic_upload_photos_notice_page_popup_png:
        'https://static.snaptube.in/campaigns/pic_upload_photos_notice_page_popup_pngcjuzltaba0000ey234qkktckr.png',
      poster_png: 'https://intranet.snappea.com/cjsuer8ia0016yy23w9qdm1vm',
      pic_my_vote_homepage_prize_2_png:
        'https://static.snaptube.in/campaigns/pic_my_vote_homepage_prize_2_pngcjuo1u9y5000d4s23m1updw0g.png',
      bg_new_users_page_png:
        'https://static.snaptube.in/campaigns/bg_new_users_page_pngcjvw878va0000oo23wfcuzfv0.jpg',
      rules_voto_png: 'https://intranet.snappea.com/cjsufnjde001qyy23sko093jw'
    }
  ]);
});

app.post('/', function(req, res) {
  const size = [353, 353, 'png'];
  if (!size) {
    return res.send('Name invalid!');
  }
  let buff = new Buffer(req.body.image, 'base64');

  fs.writeFile(
    req.body.name + '.' + size[2],
    buff,
    {
      flags: 'wb'
    },
    function(err) {}
  );
  res.send('OK');
});

app.listen(3000, function() {
  console.log('ok.');
});
