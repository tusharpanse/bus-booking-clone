const busService = require('./bus.service');

class BusController {
    async getAllBuses(req, res) {
        const source = req.body.source;
        const destination = req.body.destination;

        const bus = await busService.getAllBuses(source, destination);
        res.send(bus);
    }
}