const HistoricalEvent = require("../models/historical-event");

exports.getAllHistoricalEvent = async (req, res, next) => {
    try {
        const result = await HistoricalEvent.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                message: "historicalEvent found!",
                payload: result,
            });
        }
        res.status(404).send({message: "historicalEvent nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.getHistoricalEvent = async (req, res, next) => {
    try {
        const result = await HistoricalEvent.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "historicalEvent found!",
                payload: result,
            });
        }
        res.status(404).send({message: "historicalEvent nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.makeHistoricalEvent = async (req, res, next) => {
    try {
        const data = new HistoricalEvent({
            name: req.body.name,
            date: req.body.date,
            place: req.body.place,
        });
        const result = await data.save();
        if (result) {
            return res.status(200).send({
                message: "historicalEvent created!",
                payload: result,
            });
        }
        res.status(404).send({message: "historicalEvent was not created!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.updateHistoricalEvent = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            date: req.body.date,
            place: req.body.place,
        };
        const result = await HistoricalEvent.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "historicalEvent updated!",
                payload: result,
            });
        }
        res.status(404).send({message: "historicalEvent was not updated!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.deleteHistoricalEvent = async (req, res, next) => {
    try {
        const result = await HistoricalEvent.findByIdAndDelete(req.body.id);
        if (result) {
            return res.status(200).send({
                message: "historicalEvent deleted!",
                payload: result,
            });
        }
        res.status(404).send({message: "historicalEvent was not deleted!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}