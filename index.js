import http from "http"


http.createServer(

        (req , res)=>{

            console.log(req.method)


            if(req.method ==="GET")
            {
                 res.statusCode = 200
                 res.setHeader("content-type","application/json")
                 res.end(
                JSON.stringify({    
                        name:"baqar",
                        fname:"sohail"
                    })
                 )

            }
        }


).listen(4000,()=>{  console.log("server is running")})




