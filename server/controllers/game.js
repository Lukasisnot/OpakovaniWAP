const Game = require("../models/game");

exports.getAllGame = async (req, res, next) => {
    try {
        const result = await Game.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                message: "Game found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Game nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.getGame = async (req, res, next) => {
    try {
        const result = await Game.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Game found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Game nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.makeGame = async (req, res, next) => {
    try {
        const data = new Game({
            name: req.body.name,
            releaseDate: req.body.releaseDate,
            sales: req.body.sales,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Game created!",
                payload: result,
            });
        }
        res.status(404).send({message: "Game was not created!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.updateGame = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            releaseDate: req.body.releaseDate,
            sales: req.body.sales,
        };
        const result = await Game.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Game updated!",
                payload: result,
            });
        }
        res.status(404).send({message: "Game was not updated!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.deleteGame = async (req, res, next) => {
    try {
        const result = await Game.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Game deleted!",
                payload: result,
            });
        }
        res.status(404).send({message: "Game was not deleted!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}