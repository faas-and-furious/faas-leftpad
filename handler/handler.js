"use strict"
let leftpad=require('left-pad');

module.exports = (req, done) => {
    done("\'" + leftpad(req, 20) + "\'");
}
