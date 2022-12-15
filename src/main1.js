import { readFile } from "node:fs/promises";

async function main(){
    let filepath = "C:\\Users\\ssj30\\Desktop\\CDAC_Assignments\\WPT\\Assignments\\Assignment1\\portfolios.html"
    let op = await readFile(filepath,{encoding: "utf8" });
    console.log(op);
}

main();