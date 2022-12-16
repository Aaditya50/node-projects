import { createConnection } from "mysql";
import bluebird from "bluebird";


async function main(){
    let db = createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '1234',
        database : 'nodebase',
    });


    bluebird.promisifyAll(db);

    await db.connectAsync();
    let result  = await db.queryAsync("select * from student");

    db.endAsync();

    console.log(result);
}

main();