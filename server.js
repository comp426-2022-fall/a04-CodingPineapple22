#!/usr/bin/env node
import minimist from 'minimist';
import express from 'express';
import { roll } from "./lib/roll.js";

const arg = minimist(process.argv.slice(2));
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

const port = arg.port || 5000; 

app.get('/app/', (req,res)=> {res.status(200).send('200 OK'); }); 

let sides = 6;
let dice = 2;
let rolls = 1; 

app.get('/app/roll/', (req,res) => {res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(sides, dice, rolls)).end(); });

app.get('/app/roll/', (req,res) => { 
	sides = parseInt(req.params.sides);
	dice = parseInt(req.params.dice);
	rolls = parseInt(req.params.rolls);
	res.setStatus('Content-Type', 'application/json');
	res.status(200).send(roll(sides, dice, rolls)).end(); });

app.get('/app/roll/:sides/', (req, res) => { 
	sides = parseInt(req.params.sides);
	res.setHeader('Content-Type','application/json');
	res.status(200).send(roll(sides,2,1)).end(); });

app.get('/app/roll/:sides/:dice/', (req,res) => {
       sides = parseInt(req.params.sides);
       dice = parseInt(req.params.dice);
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(sides,dice,1)).end(); });

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
	sides = parseInt(req.params.sides);
        dice = parseInt(req.params.dice);
	rolls = parseInt(req.params.dice);
	res.setHeader('Content-Type', 'application/json'); 
	res.status(200).send(roll(sides, dice, rolls)).end(); });

app.get('*', (req,res) => { res.status(404).send('404 NOT FOUND').end(); }); 

app.listen(port); 
