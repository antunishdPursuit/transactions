const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");
const { validateURL } = require("../models/validations.js");

transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// SHOW
transactions.get("/:indexArray", (req, res) => {
  for (let index = 0; index < transactionsArray.length; index++) {
    const element = transactionsArray[index];
    let indexOfArray = Number(req.params.indexArray) ? Number(req.params.indexArray) : req.params.indexArray
    if (element.id === indexOfArray) {
      res.json(element);
    }
  }
  // res.status(404).redirect("/transactions");
  });

  // CREATE
transactions.post("/", validateURL, (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
  });

    // DELETE
transactions.delete("/:indexArray", (req, res) => {
  console.log(req.params.indexArray)
  let indexofTransaction = 0
  for (let index = 0; index < transactionsArray.length; index++) {
    const element = transactionsArray[index];
    let indexOfArray = Number(req.params.indexArray) ? Number(req.params.indexArray) : req.params.indexArray
    if (element.id === indexOfArray) {
      indexofTransaction = index
    }
  }
  console.log(indexofTransaction)
  const deletedtransaction = transactionsArray.splice(indexofTransaction, 1);
  res.status(200).json(deletedtransaction);
});

// UPDATE
transactions.put("/:indexArray", validateURL, async (req, res) => {
  for (let index = 0; index < transactionsArray.length; index++) {
    let element = transactionsArray[index];
    let indexOfArray = Number(req.params.indexArray) ? Number(req.params.indexArray) : req.params.indexArray
    if (element.id === indexOfArray) {
      transactionsArray[index] = req.body;
      res.status(200).json(element);
    } 
  }
});
  
module.exports = transactions;