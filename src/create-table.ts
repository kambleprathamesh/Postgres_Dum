

//call the client connection

import {newClient} from "./utils";

const createTables=async()=>{
    const client=await newClient();
    const createUser=`
    CREATE TABLE IF NOT EXISTS  users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
    )`;

   await client.query(createUser);


//create todo
   const createTodos=`
   CREATE TABLE IF NOT EXISTS  todos(
   id SERIAL PRIMARY KEY,
   title TEXT NOT NULL,
   description TEXT ,
    user_id INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE
   )`;

   await client.query(createTodos);



   const createAddress=`CREATE TABLE IF NOT EXISTS  Address(
   id SERIAL PRIMARY KEY,
   line1 TEXT NOT NULL,
   line2 TEXT ,
   City VARCHAR(255) NOT NULL,
   pincode INTEGER NOT NULL,
   country VARCHAR(255) NOT NULL,
   addid INTEGER REFERENCES users(id)
   )`;

   await client.query(createAddress);
   console.log("Tables Created Succesfully");
   await client.end();
};
createTables();