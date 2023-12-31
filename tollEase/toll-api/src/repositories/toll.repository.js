import { db } from "../database/database.connection.js"

async function create(plate, discount, accumulated_passages) {
    const result = await db.query(
        `INSERT INTO TollBooth (vehicle_id, passage_fee, accumulated_passages)
        VALUES ($1, $2, $3)
        RETURNING id;`,
        [plate, discount, accumulated_passages]
    );

    if (result.rows && result.rows.length > 0) {
        const operationId = result.rows[0].id;
        return operationId;
    }
}

async function verify(plate) {
    return await db.query(
        `SELECT accumulated_passages, passage_fee
         FROM TollBooth 
         WHERE vehicle_id = $1
         ORDER BY passage_date DESC
         LIMIT 1;`,
        [plate]
    );
}

async function getAll() {
    return await db.query(
    `SELECT
        vehicle_id,
        jsonb_agg(jsonb_build_object('passage_date', passage_date, 'passage_fee', passage_fee)) as passages
    FROM
        TollBooth
    GROUP BY
        vehicle_id
    LIMIT 20;`
    );
}

async function getById(id) {
    return await db.query('SELECT * FROM TollBooth WHERE id = $1', [id]);
}

async function getByPlate(plate) {
    return await db.query(
        `SELECT
            jsonb_build_object('passage_date', passage_date, 'passage_fee', passage_fee) as passage
         FROM
            TollBooth
         WHERE
            vehicle_id = $1
         ORDER BY
            passage_date;
        `,
        [plate]
    );
}

async function getLatestPassageInfoByPlate(plate) {
    const result = await db.query(
        'SELECT accumulated_passages, passage_fee FROM TollBooth WHERE vehicle_id = $1 ORDER BY passage_date DESC LIMIT 1',
        [plate]
    );
    return result.rows[0];
}

async function updatePassageData(id, plate, discount, accumulated_passages) {
    await db.query(
        'UPDATE TollBooth SET vehicle_id = $1, passage_fee = $2, accumulated_passages = $3 WHERE id = $4',
        [plate, discount, accumulated_passages, id]);
}

async function updateDiscountApplied(operationId) {
    await db.query(
        `UPDATE TollBooth SET discount_applied = true WHERE id = $1;`,
        [operationId]);
}

export const tollRepository = { create, verify, getAll, getById, getByPlate, updatePassageData, updateDiscountApplied, getLatestPassageInfoByPlate }