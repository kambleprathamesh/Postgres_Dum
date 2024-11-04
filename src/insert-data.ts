// import { newClient } from "./utils";

// async function createEntries() {
//     const client = await newClient();
//     const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
//     const userValues = ['john.do11e@gmail2.com', 'hashed_password_here'];

//     let response = await client.query(insertUserText, userValues);
//     const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
//     const todoValues = ['Buy groceries', 'Milk, bread, and eggs', response.rows[0].id, false];
//     await client.query(insertTodoText, todoValues);

//     console.log("Entries created!");
// }



// createEntries();


const {newClient} =require("./utils");


export const createEntries=async()=>{

    //call the cleint
    const client=await newClient();

    //create
    const insertuserText=`INSERT INTO users(email,password)VALUES($1,$2) RETURNING id`
    const values=['prathmeshk1990@gmail.com','1234599'];

    //make a query call
    const response=await client.query(insertuserText,values)




    const insertTodoText=`INSERT INTO todos(title,description,user_id)VALUES($1,$2,$3)`
    const todoValue=['ABCD','DESC1',response.rows[0].id]

    await client.query(insertTodoText,todoValue);
    console.log("DATA INSERTED SUCCESFULLY!")
}

createEntries()