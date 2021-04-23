const express = require("express");
const router = express.Router();
const chargebee = require("chargebee");

router.post('/', async (req,res)=>{
    chargebee.configure({site : "aravindh-test",api_key : "test_Eah8bC7Nh5BcuusFliIp5n6HK2y0JNDin"});
    console.log(req.body);
    var speech = req.body.speech;

    console.log(speech);

    chargebee.customer.list({
        "limit" : 100,
        "sort_by[desc]" : "created_at",
        "created_at[after]": new Date().setHours(0,0,0,0)/1000
    }).request(function(error,result) {
        if(error){
            //handle error
            console.log(error);
        }else{
            for(var i = 0; i < result.list.length;i++){
                var entry=result.list[i]
                console.log(entry);
                var customer = entry.customer;
                var card = entry.card;
            }
        }
        res.write(JSON.stringify(result));
        res.end();
    });
});

module.exports = router;