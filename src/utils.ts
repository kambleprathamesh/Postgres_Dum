// import { Client } from 'pg';

// export async function getClient() {
//     const client = new Client("postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapkOq2ch672-o9UQe@trumpet.db.elephantsql.com/wzsxsnxg");
//     await client.connect();
//     return client;
// }


import { Client } from "pg";

export const newClient=async()=>{
    const client=new Client({connectionString:"postgresql://neondb_owner:VElnqL9bcYp2@ep-solitary-shadow-a8rik5ku.eastus2.azure.neon.tech/prathmesh%20kamble?sslmode=require"});

    await client.connect();
    return client;
}