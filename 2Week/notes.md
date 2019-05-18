# Week 2 Study Questions
Each question will have answers in bullet point format, with possible nested items for more specific examples.

## Questions

### What is a database management system? A relational database management system?
- A Database Management System (DBMS) is a system that provides software for systematically managing and updating databases
  - Examples
    - NoSQL (Not only SQL)
    - MongoDB
    - Redis
- A Relational Database Management System (RDBMS) is a DBMS that follows the relational model -- all data is grouped by relations.
  - Examples
     - PostgreSQL
     - Oracle
     - MySQL
     - SQL Server

### What is a database?
- A database is a collection of data that represents some aspect of the real world.
- Schemas can be used to separate a database into smaller, more manageable chunks that hold their tables, functions, etc.
  - A schema can define a set of rules that govern your database
  - Contains tables, or entities.
    - Tables contain rows/records
    - Tables also have restrictions and constraints which enforcerelationships with each other
  - Think of schemas as being folders within the database: if there's only one schema, then it's the whole database, however, if there are multiple schemas, then it's only part of the database.

### What are the sublanguages of SQL?
- **Data Definition Language** - *DDL*
  - Sublanguage for the creation and modification of table structures in our database.
    - Typically includes commands such as:
      - CREATE
        - `CREATE TABLE table_name;`
      - DROP
        - `DROP TABLE table_name;`
      - TRUNCATE
        - `TRUNCATE TABLE table_name;`
      - ALTER
        - `ALTER TABLE table_name action;`
- **Data Manipulation Language** - *DML*
  - Sublanguage used to manipulate/modify our table structures, etc.
    - Includes:
      - INSERT
        - `INSERT INTO table_name VALUES (values)[,(values),...];`
      - UPDATE
        - `UPDATE table SET column_name=value[ WEHRE column_name=value];`
      - DELETE
        - `DELETE FROM table WHERE column_name=value;`
      - SELECT
        - `SELECT ( * | column_name ) FROM table_name[ WHERE colomn_name=value];`
- **Data Control Language** - *DCL*
  - Sublanguage that is used to control who can access our database, schemas, tables, ect.
    - Includes:
      - GRANT
        - `GRANT CONNECT ON DATABASE database_name TO user_name;`
      - REVOKE
        - `REVOKE ALL PRIVILEGES ON SCHEMA schema_name FROM user_name;`
      - CREATE
        - `CREATE USER user_name WITH PASSWORD 'user_password';`
      - DROP
        - `DROP USER user_name;`
- **Data Query Language** - *DQL*
  - Sublanguage that we use to query our database
    - Includes (nothing but):
      - SELECT
        - `SELECT ( * | column_name ) FROM table_name[ WHERE column_name=value];`
- **Transaction Control Language** - *TCL*
  - Sublanguage which allows us to finalize and revert changes to our database
  - "Transaction" refers to a measure of work on our database.
    - Includes:
      - BEGIN
        - `BEGIN;`
      - COMMIT
        - `COMMIT;`
      - SAVEPOINT
        - `SAVEPOINT savepoint_name;`
      - ROLLBACK
        - `ROLLBACK TO SAVEPOINT savepoint_name;`

### What is multiplicity?
- The cardinality + participation, so there are 10 possible multiplicities:
  - 0..1 -- 0..1
  - 0..1 -- 1..1
  - 1..1 -- 1..1
  - 0..1 -- 0..*
  - 0..1 -- 1..*
  - 1..1 -- 0..*
  - 1..1 -- 1..*
  - 0..* -- 0..*
  - 0..* -- 1..*
  - 1..* -- 1..*

### What is cardinality?
- Cardinality defines the relationships that we have in our database:
  - One-to-one
  - One-to-many
  - Many-to-many
    - This relationship requires a bridge table to exist
