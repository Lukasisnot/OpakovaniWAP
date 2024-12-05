const Athlete = require("../models/athlete");

exports.getAllAthlete = async (req, res, next) => {
    try {
        const result = await Athlete.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                message: "Athlete found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Athlete nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.getAthlete = async (req, res, next) => {
    try {
        const result = await Athlete.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Athlete found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Athlete nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.makeAthlete = async (req, res, next) => {
    try {
        const data = new Athlete({
            name: req.body.name,
            nationality: req.body.nationality,
            sport: req.body.sport,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Athlete created!",
                payload: result,
            });
        }
        res.status(404).send({message: "Athlete was not created!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.updateAthlete = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            nationality: req.body.nationality,
            sport: req.body.sport,
        };
        const result = await Athlete.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Athlete updated!",
                payload: result,
            });
        }
        res.status(404).send({message: "Athlete was not updated!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.deleteAthlete = async (req, res, next) => {
    try {
        const result = await Athlete.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Athlete deleted!",
                payload: result,
            });
        }
        res.status(404).send({message: "Athlete was not deleted!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}