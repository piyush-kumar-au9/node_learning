// const httpSetup = require('http');

// const PORT = 9000;
// let req = null;
// let res = null;
// const server = httpSetup.createServer((reqOri, resOri)=>{
//     req = reqOri;
//     res = resOri;
//     get('/api/v1', (req, res)=>{
//         console.log(req.body)
//         return res.write("req");
//     })
//     // if(req.url=="/api/v1/facebook"){

//     //     let facebook = {
//     //         username: "piyushHttp",
//     //         follower: 31,
//     //         follows: 21,
//     //         date: new Date().toUTCString()
//     //     }
//     //     res.writeHead(200, {"Content-Type": "application/json"});
//     //     res.write(JSON.stringify({"data": facebook}));

//     //     res.end();
//     // }
//     // else if(req.url=="/api/v1?name=piyush"){
//     //     res.writeHead(200, {"Content-Type":"application/json"})
//     //     console.log(req);
//     //     req.query = {name:"sdfds"}
//     //     // res.write(JSON.stringify({"params": ""}));
//     //     // res.end();
//     // }
//     // console.log(req.url);
// });

function get(url, callback){
    let urlArray = req.url.split("?");
    let baseUrl = urlArray[0];
    let queryParamStr = urlArray[1];
    console.log(baseUrl);
    // console.log(in);
    if(url==baseUrl){
        let paramArray = []
        if(queryParamStr!=undefined){
            paramArray = queryParamStr.split("&");
        }
        req.param = {};
        for(let param of paramArray){
            let [key, value] = param.split("=");
            console.log(param)
            console.log(key, value, 'test')
            req.param[key] = value;
        }
        callback(req, res);
     } else {
        res.writeHead(404);
        res.write("not found");
    }
    res.end();
}

// server.listen(PORT, ()=>{
//     console.log(`Server started at ${PORT}`);
// })

const https = require("https");

https.get(
  "https://coderbyte.com/api/challenges/json/rest-get-simple",
  (res) => {
    let data = "";
    let final_data = ""
    res.on("data", function (chunk) {
      
      data += chunk;
      console.log("chunk", chunk);
    });

    

    res.on("end", async() => {
      final_data = await JSON.stringify(data);
      // console.log("data", final_data);
    });
   
  }
);
