const express = require('express');
const app = express();
const aws = require('aws-sdk');
const s3 = new aws.S3();

const getParams = {
  Bucket: 'packet-melina-s3-bucket',
  Key: 'packet-melina-s3-buckect.txt'
}

app.get('/', function (req, res) {
  s3.getObject(getParams, function(err, data){
    if(err) return err;

    let objectData = data.Body.toString('utf-8');
    res.send(objectData);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});