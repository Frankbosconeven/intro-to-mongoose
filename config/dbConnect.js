const { connect} = require("mongoose")

async function dbConnect() {
    try {
        await connect("mongodb://localhost:27017/", {
            dbName: "shop",
        })
        console.log("database is connected successful");
    } catch (error) {
        console.error(err);
        process.exit(1)
    }
};

module.exports ={dbConnect };