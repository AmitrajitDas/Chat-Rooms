import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'

import users from './data/users.js'
import User from './models/userModel.js'
import ConnectDB from './config/db.js'

dotenv.config()

ConnectDB()

const importData = async () => {

    try {
        
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        console.log('Data Transmitted!'.green.inverse)
        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }   
}

const destroyData = async () => {

    try {
        
        await User.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }   
}

if(process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}