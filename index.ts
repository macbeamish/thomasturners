const express = require("express");
const env = require("dotenv");
const server = express();
server.get('/', (req, res) =>res.send("hello express") );
server.listen(3000)
env.config();
import {findRating, check} from "./findRating"
server.use(express.json());
const PORT = process.env.PORT || 3002;

server.listen(PORT, () => {
    console.log("listening on", PORT);
} )

// let history = JSON.stringify({"claimHistory": "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes."});

server.get("/car", (req: any, res: any) => {
    res.send("welcome to Car API")
})

const getRating = (req: {body: {claimHistory: string}}, 
    res: any) =>{ 
// let inputText: string;
try{res.json((findRating(req.body.claimHistory)))
}
catch{
    res.json(("Error"))
}
}
server.post("/car/rate", getRating);