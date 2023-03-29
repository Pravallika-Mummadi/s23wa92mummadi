var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var a1=Math.floor((Math.random())*100)

    var a2=Math.floor((Math.random())*100)

    var a3=Math.random()

    var a4=Math.floor((Math.random())*100)

    var pow=Math.pow(a1)

    var sign=Math.sign(a2)

    var tanh=Math.tanh(a3)

    var trunc=Math.trunc(a4)



    res.render('computation',

    {

        title:'Pravallika Mummadi Computes Functions',

        a1:a1,

        a2:a2,

        a3:a3,

        a4:a4,

        f:pow,
        
        r:sign,

        t:tanh,

        s:trunc,



    });

     

});

module.exports=router;