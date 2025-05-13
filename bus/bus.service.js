

class BusService {
    async getAllBuses(source, destination){
        return Bus.findAll({
            where: {
                source,
                destination
            }
        })
    }
}