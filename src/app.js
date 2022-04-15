const { response } = require("express");
const express = require("express");
require("./db/conn");



const app = express();
const port = process.env.PORT || 3000;

app.get("", () => {

})

//create a new students


app.post("/students",(req,res) => {

    res.send("hello ");


})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})