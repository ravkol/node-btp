import express from "express";

const app = express ();
let PORT = process.env.PORT || 8888;

app.get ("/", (req, res) => {
    console.log("Got request", req.url);
    res.send("Hello This is Your First App in BTP. All the Best");
    });

    app.get ("/env", (req, res) => {
        res.send(process.env);
     
    });

app.listen(PORT, () => {
    console.log('Listening on port ${PORT}' );

});