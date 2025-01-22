const mongoose = require('mongoose');
const DbName = process.env.DbName
const mongodbUri = process.env.mongodbUri

const dbCon = async ()=>{
        try{
            await mongoose.connect(`${mongodbUri}/${DbName}`)
            console.log(`DataBase has been connected.`)
        }catch(error){
            throw error
        }
}

module.exports = dbCon