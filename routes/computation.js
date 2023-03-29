var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {


    var p1=Math.random();

    var p2=Math.floor((Math.random())*100);

    var tanh=Math.tanh(p1)

    var trunc=Math.trunc(p2)



    res.render('computation',

    {

        title:'Pravallika Mummadi Computes Functions',


        p1:p1,

        p2:p2,

        t:tanh,

        s:trunc,



    });

     

});

module.exports=router;