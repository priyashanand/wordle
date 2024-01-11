
CREATE TABLE IF NOT EXISTS words (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    word TEXT NOT NULL
);

-- Insert sample words
INSERT INTO words (word) VALUES
    ('apple'),
    ('banana'),
    ('cherry'),
    ('grape'),
    ('orange');
