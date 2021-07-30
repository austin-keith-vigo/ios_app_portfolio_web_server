// TODO: Create an index.js for all models
const Experience = require("./Models/Experience")

// Creates a connection to the databse
function get_connection() {
    var con = mysql.createConnection({
        host: "localhost",
        user: "avigo",
        password: "g00dlUck!",
        database: "portfolio"
    });
    
    return con
}

// Get all experiences
function experiences_get_all(connection = null) {

    // Establich connection to database
    let connection = connection
    if (connection == null) {
        connection = get_connection()
    }

    // Make query to database
    try {
        con.query("SELECT * FROM experience", function (err, results, fields) {

            if (err) {
                return { error: err, experiences: []}
            };

            let experiences = []
            results.forEach(experience => {
                experiences.push(new Experience(experience.id, experience.title, experience.description))
            });
            return { error: nil, experiences: experiences}
        });
    } catch (error) {
        return { error: err, experiences: []}
        return
    }
}

module.exports = { experiences_get_all }