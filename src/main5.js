import { createConnection } from "mysql";

function main(){
    let db = createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '1234',
        database : 'nodebase',
    })

    db.connect();

    //let qu = "create table emp( id int, name varchar(255))";
    //let qu = "insert into emp values(1,'Aaditya')";
    let qu = "select * from emp";
    
    db.query(qu,(error,results,fields)=>{
        console.log(results);
    });
    db.end();
}

main();