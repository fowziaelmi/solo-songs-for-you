
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "genres"(
"id" SERIAL PRIMARY KEY,
"genre" VARCHAR );

CREATE TABLE "playlist"(
"id" SERIAL PRIMARY KEY,
"playlist_id" VARCHAR,
"name" VARCHAR,
"user_id" INT REFERENCES "user" NOT NULL );

CREATE TABLE "genre_user" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user" NOT NULL, 
"genre_id" INT REFERENCES "genres" NOT NULL );

