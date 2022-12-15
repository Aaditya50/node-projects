import * as mysql from "mysql";

import { createConnection } from "mysql";

function main(){
    console.log(createConnection);
    var db = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '1234',
        database : 'nodebase',
    });
    db.connect();
    

    //let String = "create table student(id int,name varchar(10))";    
    //db.query(String);

    // let inserting = "insert into student values(1,'Aaditya')";
    // db.query(inserting);


    let display = "SELECT * FROM student";
    db.query(display,(error,results,fields)=>{
        console.log(results);
    });
    db.end();
}
main();