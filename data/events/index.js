import utils from "../utils.js";
import sql from "mssql";
import config from "../../config.js";












export const GetHistorySaleProducts = async () => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Views');

        const result = await request.query(sqlQueries.GetHistorySaleProducts);

        return result.recordset;
    }
    catch (err)
    {
        console.log(`Не удалось получить историю покупок, ${err}`);
    }
}

export const GetHistoryProductionProducts = async () => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Views');

        const result = await request.query(sqlQueries.GetHistoryProductionProduct);

        return result.recordset;
    }
    catch (err)
    {
        console.log(`Не удалось получить историю покупок, ${err}`);
    }
}