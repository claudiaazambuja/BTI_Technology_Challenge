import { db } from "../database/database.connection.js"

async function create(plaque, discount, accumulated_passages) {
    await db.query(
        `INSERT INTO TollBooth (vehicle_id, passage_fee, accumulated_passages)
        VALUES ($1, $2, $3);`,
        [plaque, discount, accumulated_passages]

    )
}

async function verify(plaque) {
    return await db.query(
        `SELECT accumulated_passages, passage_fee
         FROM TollBooth 
         WHERE vehicle_id = $1
         ORDER BY passage_date DESC
         LIMIT 1;`,
        [plaque]
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
        vehicle_id;
    `
    );
}

async function getById(id) {
    return await db.query('SELECT * FROM TollBooth WHERE id = $1', [id]);
}

async function getByPlaque(plaque) {
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
        [plaque]
    );
}

async function updatePassageData(id, newPlaque, discount, accumulated_passages) {
    await db.query(
        'UPDATE TollBooth SET vehicle_id = $1, passage_fee = $2, accumulated_passages = $3 WHERE id = $4',
        [newPlaque, discount, accumulated_passages, id]);
}

export const tollRepository = { create, verify, getAll, getById, getByPlaque, updatePassageData }