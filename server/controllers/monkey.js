const Monkey = require("../models/monkey");

exports.getAllMonkey = async (req, res, next) => {
    try {
        const result = await Monkey.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                message: "monkey found!",
                payload: result,
            });
        }
        res.status(404).send({message: "monkey nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.getMonkey = async (req, res, next) => {
    try {
        const result = await Monkey.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "monkey found!",
                payload: result,
            });
        }
        res.status(404).send({message: "monkey nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.createMonkey = async (req, res, next) => {
    try {
        const data = new Monkey({
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "monkey created!",
                payload: result,
            });
        }
        res.status(404).send({message: "monkey was not created!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.updateMonkey = async (req, res, next) => {
    try {
        const data = {
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name,
        };
        const result = await Monkey.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "monkey updated!",
                payload: result,
            });
        }
        res.status(404).send({message: "monkey was not updated!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.deleteMonkey = async (req, res, next) => {
    try {
        const result = await Monkey.findByIdAndDelete(req.body.id);
        if (result) {
            return res.status(200).send({
                message: "monkey deleted!",
                payload: result,
            });
        }
        res.status(404).send({message: "monkey was not deleted!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}