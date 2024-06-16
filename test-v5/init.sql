CREATE TABLE cars (
  car_id SERIAL PRIMARY KEY,
  make VARCHAR(50),
  model VARCHAR(50),
  car_year INT
);

INSERT INTO cars (make, model, car_year) VALUES
('make_1', 'model_1', 1),
('make_2', 'model_2', 2),
('make_3', 'model_3', 3),
('make_4', 'model_4', 4),
('make_5', 'model_5', 5);