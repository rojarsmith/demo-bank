-- V1.0__create_user_table.sql
CREATE TABLE "user" (
  "id" bigserial NOT NULL PRIMARY KEY, 
  "name" character varying(255) NOT NULL UNIQUE, 
  "password" text NOT NULL
);