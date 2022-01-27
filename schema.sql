-- create the db and table

DROP DATABASE IF EXISTS music;
CREATE DATABASE music;
\c music;
DROP TABLE IF EXISTS lyricHelper;


CREATE TABLE lyricHelper (
  id SERIAL PRIMARY KEY,
  video_id VARCHAR(20) NOT NULL ,
  language VARCHAR(255) NOT NULL,
  favorite BOOLEAN NOT NULL,
);