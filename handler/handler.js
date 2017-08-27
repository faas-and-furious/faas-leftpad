"use strict"
let leftpad = require('left-pad');

module.exports = (req, done) => {
    let padding = 20;

    if(process.env["Http_X_Padding"]) {
        padding = parseInt(process.env["Http_X_Padding"]);
    }

    done("\'" + leftpad(req, padding) + "\'");
}
