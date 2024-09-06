import pool from '../config/config.js'

const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM bfxprsrsz3hdrcp7b87q.users')
    return data
}
const getUserDb = async(userID)=>{
    let [[data]] = await pool.query('SELECT * FROM bfxprsrsz3hdrcp7b87q.users WHERE userID = ?',[userID])
    return data
}
// console.log(await getUserDb(1))

const insertUserDb = async(firstName,lastName,userAge,Gender,userRole,emailAdd,userProfile,userPass)=>{
    let [data] = await pool.query(`
        INSERT INTO bfxprsrsz3hdrcp7b87q.users(firstName,lastName,userAge,Gender,userRole,emailAdd,userProfile,userPass) VALUES(?,?,?,?,?,?,?,?)
        `,[firstName,lastName,userAge,Gender,userRole,emailAdd,userProfile,userPass])
    return data
}
const deleteUserDb = async(userID)=>{
    await pool.query('DELETE FROM bfxprsrsz3hdrcp7b87q.users WHERE userID=?',[userID])
}
const updateUserDb = async(firstName,lastName,userAge,Gender,userRole,emailAdd,userID)=>{
    console.log(userID);
    
    let [data] = await pool.query(`
        UPDATE bfxprsrsz3hdrcp7b87q.users SET firstName=?,lastName=?, userAge=?, Gender=?, userRole=?, emailAdd=?, userProfile=?, userPass=?
        WHERE userID=?
        `,
        [firstName,lastName,userAge,Gender,userRole,emailAdd,userID])
    return data
}
export {getUsersDb,getUserDb,insertUserDb,deleteUserDb,updateUserDb}
