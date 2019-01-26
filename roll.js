#!/usr/bin/env node

const WordTable = require("word-table");

const sign = require("./sign.json");

const { description, title, level, content } = sign[
  Math.floor(Math.random() * sign.length)
];

const arr = [];
Object.keys(description).forEach(val => {
  arr.push([val, description[val]]);
});

const wt = new WordTable(["-", "-"], arr);

console.log(wt.string() + "\n");

console.log(title);
console.log(level);
console.log(content);
