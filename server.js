#!/usr/bin/env node
import parseArgs from 'minimist';
import express from 'express';
import { roll } from "./lib/roll.js";

const arg = parseArgs(process.argv);
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

var port = null;
if(arg.port){port = arg.port;}
else{port = 5000;}

app.get('/app/', (req,res)=> {res.status(200).send('200 OK'); }); 

app.get('/app/roll/', (req,res,next) => {res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(6,2,1)); });

app.get('/app/roll/', (req,res,next) => { 
	if(req.body.sides){ let sides = parseInt(req.body.sides);}
	else{ let sides = 6;}
	if(req.body.dice) {let dice = parseInt(req.body.sides);}
	else{let dice = 2;}
	if(req.body.rolls){ let rolls = parseInt(req.body.rolls);}
	else{let rolls = 1;}
	res.status(200).send(roll(sides, dice, rolls)); });

app.get('/app/roll/:sides/', (req, res) => { 
	if(req.params.sides){ let sides = parseInt(req.params.sides);}
	else{let sides = 6;}
	res.setHeader('Content-Type','application/json');
	res.status(200).send(roll(sides,2,1)); });

app.get('/app/roll/:sides/:dice/', (req,res) => {
	if(req.params.sides){ let sides = parseInt(req.params.sides);}
	else{let sides = 6;}
	if(req.params.dice){ let dice = parseInt(req.params.dice);}
	else{let dice = 2;}
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(sides,dice,1)); });

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
	if(req.params.sides) { let sides = parseInt(req.params.sides);}
	else{ let sides = 6;}
	if(req.params.dice){ let dice = parseInt(req.params.dice); }
	else{ let dice = 2;}
	if(req.params.rolls){let rolls = parseInt(req.params.dice);}
	else{let rolls = 1;}
	res.setHeader('Content-Type', 'application/json'); 
	res.status(200).send(roll(sides, dice, rolls)); });

app.get('*', (req,res) => { res.status(404).send('404 NOT FOUND'); }); 

app.listen(port); 
