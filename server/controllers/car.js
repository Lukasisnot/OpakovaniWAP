const Car = require("../models/car");

exports.getAllCar = async (req, res, next) => {
    try {
        const result = await Car.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                message: "Car found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Car nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.getCar = async (req, res, next) => {
    try {
        const result = await Car.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Car found!",
                payload: result,
            });
        }
        res.status(404).send({message: "Car nowhere to be found!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.makeCar = async (req, res, next) => {
    try {
        const data = new Car({
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            motor: req.body.motor,
        });
        const result = await data.save();
        if (result) {
            return res.status(200).send({
                message: "Car created!",
                payload: result,
            });
        }
        res.status(404).send({message: "Car was not created!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.updateCar = async (req, res, next) => {
    try {
        const data = {
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            motor: req.body.motor,
        };
        const result = await Car.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Car updated!",
                payload: result,
            });
        }
        res.status(404).send({message: "Car was not updated!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}

exports.deleteCar = async (req, res, next) => {
    try {
        const result = await Car.findByIdAndDelete(req.body.id);
        if (result) {
            return res.status(200).send({
                message: "Car deleted!",
                payload: result,
            });
        }
        res.status(404).send({message: "Car was not deleted!"});
    } catch (error) {
        res.status(500).send(error);
    }
;}