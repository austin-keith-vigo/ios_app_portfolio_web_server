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
function experiences_get_all(connection = null, completionHandler) {

    // Establich connection to database
    let con = connection
    if (con == null) {
        con = get_connection()
    }

    // Make query to database
    try {
        con.query("SELECT * FROM experience", function (err, results, fields) {

            if (err) {
                completionHandler(err, [])
            } else {
                let experiences = []
                results.forEach(experience => {
                    let newExperience = new Experience(experience.id, experience.title, experience.description)
                    experiences.push(newExperience)
                });
                completionHandler(null, experiences)
            }
            
        });
    } catch (error) {
        completionHandler(err, [])
    }
}

module.exports = { experiences_get_all }