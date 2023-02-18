import mysql from "mysql";


export const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'anhnv123',
    database:'social'
})