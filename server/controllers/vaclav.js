const Vaclav = require("../models/vaclav");

exports.getAllVaclav = async (req, res, next) => {
    try {
        const result = await Vaclav.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                message: "Vaclav found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Vaclav nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.getVaclav = async (req, res, next) => {
    try {
        const result = await Vaclav.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Vaclav found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Vaclav nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.makeVaclav = async (req, res, next) => {
    try {
        const data = new Vaclav({
            name: req.body.name,
            wifiZasuvky: req.body.wifiZasuvky,
            kolenoOffset: req.body.kolenoOffset,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Vaclav created!",
                payload: result,
            });
        }
        res.status(404).send({message: "Vaclav was not created!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.updateVaclav = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            wifiZasuvky: req.body.wifiZasuvky,
            kolenoOffset: req.body.kolenoOffset,
        };
        const result = await Vaclav.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Vaclav updated!",
                payload: result,
            });
        }
        res.status(404).send({message: "Vaclav was not updated!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.deleteVaclav = async (req, res, next) => {
    try {
        const result = await Vaclav.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Vaclav deleted!",
                payload: result,
            });
        }
        res.status(404).send({message: "Vaclav was not deleted!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}