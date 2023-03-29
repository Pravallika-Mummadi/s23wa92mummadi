var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var p1=Math.random()

    var p2=Math.floor(Math.random()*100)

    var p3=Math.floor(Math.random()*100)

    var pow=Math.pow(p1)

    var atanh=Math.atanh(p2)

    var cbrt=Math.cbrt(p3)

    res.render('computation',

    {

        title:'Pravallika Mummadi Computes Functions',

        p1:p1,

        p2:p2,

        p3:p3,

        p:pow,
        
        q:atanh,

        r:cbrt,

       
    });

     

});

module.exports=router;
