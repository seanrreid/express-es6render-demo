const db = require('./conn.js');

class Executives {
    constructor(id, name, year){
        this.id = id;
        this.name = name;
        this.year = year;
    }

    static async getAll() {
        try {
            const response = await db.any(`select * from ceos`);
            return response;
        } catch(err) {
            return err.message;
        }
    }
    /*
    static async add(name, year) {
        const query = `INSERT INTO ceos (name, year) VALUES ('${name}', ${year})`;

        try {
            let response = await db.result(query);
            return response;
        } catch(err) {
            console.log("ERROR", err.message);
            return err;
        };
    }
    */
}

module.exports = Executives;