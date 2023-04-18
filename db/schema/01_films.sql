DROP TABLE IF EXISTS films CASCADE;

CREATE TABLE films (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL,
  release_date VARCHAR(255) NOT NULL,
  imdb_url VARCHAR(255) NOT NULL
);
