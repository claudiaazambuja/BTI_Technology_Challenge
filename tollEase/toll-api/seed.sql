DO $$ 
DECLARE
    i INT := 1;
    placas VARCHAR[] := ARRAY['ABC-1234', 'XYZ-5678', 'DEF-9876', 'GHI-5432', 'JKL-1098', 'MNO-7654', 'PQR-3210', 'STU-6543', 'VWX-2109', 'YZA-8765', 'BCD-4321', 'EFG-1098', 'HIJ-7654', 'KLM-3210', 'NOP-6543'];
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO TollBooth (vehicle_id, passage_date, accumulated_passages)
        VALUES 
            (i % 15 + 1, CURRENT_TIMESTAMP - (i * INTERVAL '1 day'), i);
    END LOOP;
END $$;
