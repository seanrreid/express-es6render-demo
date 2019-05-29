const db = require('./conn.js');

class Executives {
    constructor(id, name, year){
        this.id = id;
        this.name = name;
        this.year = year;
    }

    static getAll(){
        return db.any(`select * from ceos`)
            .catch(() => {
                return null; // signal an invalid value
            });
    }
}

module.exports = Executives;