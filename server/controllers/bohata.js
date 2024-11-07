const RichMan = require("../models/bohata");

exports.getAllRichMan = async (req, res, next) => {
    try {
        const result = await RichMan.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                message: "Rich man found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Rich man nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.getRichMan = async (req, res, next) => {
    try {
        const result = await RichMan.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Rich man found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Rich man nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.makeRichMan = async (req, res, next) => {
    try {
        const data = new RichMan({
            name: req.body.name,
            salary: req.body.salary
        });
        const result = await data.save();
        if (result) {
            return res.status(200).send({
                message: "Rich man created!",
                payload: result,
            });
        }
        res.status(404).send({message: "Rich man was not created!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.updateRichMan = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            salary: req.body.salary
        };
        const result = await RichMan.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Rich man updated!",
                payload: result,
            });
        }
        res.status(404).send({message: "Rich man was not updated!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.deleteRichMan = async (req, res, next) => {
    try {
        const result = await RichMan.findByIdAndDelete(req.body.id);
        if (result) {
            return res.status(200).send({
                message: "Rich man deleted!",
                payload: result,
            });
        }
        res.status(404).send({message: "Rich man was not deleted!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}