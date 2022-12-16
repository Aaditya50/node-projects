import { createConnection } from "mysql";
import bluebird from "bluebird";

let connectionUri = {
  host      : "localhost",
  user      : "root",
  password  : "1234",
  database  : "nodebase",
};

async function main() {
  let connection = createConnection(connectionUri);
  bluebird.promisifyAll(connection);

  await connection.connectAsync();

  let sql = "SELECT * FROM student";
  let results = await connection.queryAsync(sql);

  connection.endAsync();
  console.log(results);
}

main();