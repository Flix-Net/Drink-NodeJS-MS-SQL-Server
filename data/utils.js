import fs from "fs-extra";
import {join} from "path";


async function loadSqlQueries(folderName)
{
    const filePath = join(process.cwd(), 'data', folderName);
    const files = await fs.readdir(filePath);
    const sqlFiles = files.filter(f => f.endsWith('.sql'));
    let queries = {};
    for (const sqlfile of sqlFiles) {
        queries[sqlfile.replace(".sql", "")] = fs.readFileSync(join(filePath, sqlfile), {encoding: "UTF-8"});
    }
    return queries;
}

export default loadSqlQueries;