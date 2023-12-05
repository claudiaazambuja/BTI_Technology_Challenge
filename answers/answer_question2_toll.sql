-- Table 
CREATE TABLE TollBooth (
    id SERIAL PRIMARY KEY,
    vehicle_id VARCHAR(20),
    passage_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    passage_fee DECIMAL(5,2) DEFAULT 7.90,
    accumulated_passages INT,
    discount_applied BOOLEAN DEFAULT FALSE
);

-- Command to insert 
INSERT INTO TollBooth (vehicle_id, passage_date, passage_fee, accumulated_passages, discount_applied) 
VALUES 
    (1, '2023-12-01', 7.90, 1, FALSE),
    (1, '2023-12-02', 7.90, 2, FALSE),
    -- ... (inserir mais dados conforme necessário)
    (1, '2023-12-11', 7.90, 11,  TRUE),
    (1, '2023-12-16', 7.90, 16, TRUE),
    (1, '2023-12-21', 7.90, 21, TRUE),
    (1, '2023-12-30', 7.90, 30, TRUE);

-- Comando para verificar as passagens de um veículo
SELECT *
FROM TollBooth
WHERE vehicle_id = 1;

-- Comando para atualizar o estado se o desconto foi aplicado

UPDATE TollBooth 
SET discount_applied = true 
WHERE id = $1;

URL = postgres://barxvapl:ryZ-pu5OnhVXr5hRgc_85nuizQjwDDRH@bubble.db.elephantsql.com/barxvapl



