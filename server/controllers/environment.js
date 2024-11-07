const Environment = require("../models/environment");

exports.getAllEnvironment = async (req, res, next) => {
    try {
        const result = await Environment.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                message: "Environment found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Environment nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.getEnvironment = async (req, res, next) => {
    try {
        const result = await Environment.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Environment found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Environment nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.makeEnvironment = async (req, res, next) => {
    try {
        const data = new Environment({
            biom: req.body.biom,
            species: req.body.species,
        });
        const result = await data.save();
        if (result) {
            return res.status(200).send({
                message: "Environment created!",
                payload: result,
            });
        }
        res.status(404).send({message: "Environment was not created!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.updateEnvironment = async (req, res, next) => {
    try {
        const data = {
            biom: req.body.biom,
            species: req.body.species,
        };
        const result = await Environment.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Environment updated!",
                payload: result,
            });
        }
        res.status(404).send({message: "Environment was not updated!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.deleteEnvironment = async (req, res, next) => {
    try {
        const result = await Environment.findByIdAndDelete(req.body.id);
        if (result) {
            return res.status(200).send({
                message: "Environment deleted!",
                payload: result,
            });
        }
        res.status(404).send({message: "Environment was not deleted!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}