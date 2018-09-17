
var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: '5b0e1fde-0d56-4e35-aa84-14269fa216c2',
  password: 'GlsPEYy8dR2a',
  version: '2018-04-05',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/'
});
exports.sendEmail = function(req, res){
    var comentario =    req.body.comentario
    nlu.analyze(
        {
          text: comentario, // Buffer or String 'es como el pico su wea de aplicacion no me gusto'
          features: {
            concepts: {},
            keywords: {},
            sentiment:  {}
          }
        },
        function(err, response) {
          if (err) {
            let scoreDEF = "no se pudo comprender";
             let labelDEF = "no se pudo comprender";;
            res.status(200).send({scoreDEF,labelDEF});
            console.log('error:', err);
          } else {
            // console.log(JSON.stringify(response, null, 2));
            // console.log(JSON.stringify(response.sentiment.document.score));
            // console.log(JSON.stringify(response.sentiment.document.label));
             console.log(response.sentiment.document.score);
             console.log(response.sentiment.document.label);
             let score = response.sentiment.document.score;
             let label = response.sentiment.document.label ;
             res.status(200).send({score,label});
          }
        }
      );
      
};

