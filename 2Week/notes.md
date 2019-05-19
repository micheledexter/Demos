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

### What is a candidate key?
- A column which uniquely identies a row/record
  - A primary key is a candidate key, any candidate key may be used as a primary key, but there can only be one primary key.

### What is referential integrity?
- A concept enforced by constraints (such as foreign keys) whereas information that relies on existing relationships cannot be deleted until every other reference to that object has been removed first.
  - Database users are protected under these same constraints

### What are primary keys? Foreign keys?
- A primary key is a column (and depending on which level of normalization you're using, it could be a set of columns) which uniquely identifies a unique row/record.
  - Candidate keys can all be used as primary keys, but it's generally considered good practice to use a numeric ID for the primary key for easy referencing and use
- A foreign key is the a primary key reference to another table.

### What are some of the different constraints?
- Table constraints are:
  - Primary key
    - The column is inherently unique not null
  - Foreign key
    - References the primary key of another table
  - Unique
    - Cannot have a value that exists in another row/record
  - Not null
    - Can't be null
  - Check
    - Checks the value against some condition
  - Default
    - Provides a default value for the column when none is specified
  - Index
    - Used for extremely fast querying
    - This becomes helpful for very large databases

### What is an entity relationship diagram?
- An Entity Relationship Diagram (ERD) is a diagram which shows how the database entities are structured and what their relationships are with each other (either cardinalities or multiplicities, depending on how you want to represent them).

### What are the differences between WHERE vs HAVING?
- WHERE
  - Happens before HAVING
  - Is used to filter row/record details
- HAVING
  - Happens after WHERE
  - Is used to filter grouped results

### What are the differences between GROUP BY and ORDER BY?
- GROUP BY
  - Happens before ORDER BY
  - Is used for reducing records into groups based on a criteria
- ORDER BY
  - Happens after GROUP BY
  - Is used to determine the order of the query results before returning them
- `SELECT team, sum(score) as total from player_list WHERE score > 10 GROUP BY team HAVING total > 100 ORDER BY total DESC;`

### What does LIKE do?
- Allows queries to be made with pattern matching
  - `SELECT * FROM names WHERE first_name LIKE 'lar%';`

### What is the difference between IN and EXISTS?
- IN
  - Can be used with with either a subquery or a set of values
  - Checks for the existence of the value (even within a subquery) and returns `TRUE` if found
  - Examples: (not the most practical, I know)
    - `SELECT * FROM users WHERE type IN ('user');`
    - `SELECT * FROM users WHERE type IN (SELECT type FROM users WHERE type='users');`
- EXISTS
  - Can be used with only subqueries
  - Checks for the existence of the value within the subquery and returns `TRUE` if found
    - Example:
      - `SELECT * FROM users WHERE type EXISTS (SELECT type FROM users WHERE type='user');`
- `IN` is better for using a set of values, but `EXISTS` is better for using a subquery because `IN` was optimized for value checking and `EXISTS` was optimized for checking the existence of records.

### How do I use subqueries?
- See the examples above.
- Subqueries can be used perform a check from one query against a set of values derived from another query. So if I wanted to find the IDs of all of the people who were late on their credit card payments, for instance, I could perform a query to find all of the late credit card payments, return the user IDs, and use those in my query to only return the results of the customers who are late.

### How does BETWEEN work?
- `BETWEEN` is a keyword of convenience and readability.
- These two queries return the same thing:
  - `SELECT * FROM invoice WHERE payment >= 10 AND payment <= 20;`
  - `SELECT * FROM invoice WHERE payment BETWEEN 10 AND 20;`

### What is the order of operations in an SQL statement?
- In order of execution from first to last:
  - `FROM` (including `JOIN`s)
  - `WHERE`
  - `GROUP BY`
  - `HAVING`
  - `WINDOW` functions (like `sum(count(*))`)
  - `SELECT`
  - `DISTINCT`
  - `UNION`
  - `ORDERY BY`
  - `LIMIT` and `OFFSET`

### What are examples of aggregate and scalar functions?
- Aggregate - Collection reduction
  - `AVG()` - Returns the average of a collection
  - `COUNT()` - Returns the number of records in a collection
  - `FIRST()` - Returns the first item of a collection
  - `LAST()` - Returns the last item of a collection
  - `MAX()` - Returns the highest value of a collection
  - `MIN()` - Returns the lowest value of a collection
  - `SUM()` - Returns the sum of a collection
- Scalar - Single field/value
  - `UCASE()` - Converts a field to uppercase
  - `LCASE()` - Converts a field to lowercase
  - `MID()` - Extracts characters in a field
  - `LEN()` - Returns the length of a value
  - `ROUND()` - Rounds a value to the number of decimal places specified
  - `NOW()` - Returns the system date and time
  - `FORMAT()` - Formats display of a field

### What are the different joins in SQL?
- There are 5 main join methods in SQL:
  - `INNER JOIN`
    - Joins tables on some column, only showing records with compared values existing in both tables
  - `OUTER JOIN` / `FULL JOIN` / `FULL OUTER JOIN` (depending on DBMS)
    - Properly joins all data together substituting nulls where data is absent
  - `LEFT JOIN`
    - All data from the left table is paired with the right table, substituting nulls when necessary
  - `RIGHT JOIN`
    - All data from the right table is paired with the left table, substituting nulls when necessary
  - `CROSS JOIN`
    - Cartesian product of records from both tables
      - You get all of the possible permutations
- These joins fall into 3 different categories of join types:
  - Equi Join
    - Any join that uses the "=" operator
  - Theta Join
    - Any join that doesn't use the "=" operator
  - Self Join
    - Join a table with itself

### What are the different set operations in SQL? Which set operations support duplicates?
- `UNION`
  - Combines the results of both queries into larger queries
  - Omits duplicates
- `UNION ALL`
  - Same as `UNION` but supports duplicates
- `INTERSECT`
  - Combines the results of both queries but only returns records that exist in the results of both queries
  - Omits duplicates
- `INTERSECT ALL`
  - Same as `INTERSECT` but supports duplicates
- `EXCEPT`
  - Combines the results of both queries but only returns the records that are exclusive to the first query
  - Omits duplicates
- `EXCEPT ALL`
  - Same as `EXCEPT` but supports duplicates

### What is the difference between join and set operations?
- Join operations combine tables (different columns) based on common data
  - "What kind of data do I need?"
- Set operations combine tables by appending data from one table to another based on common data types
  - "How much data do I need?"

### How can I create an alias in SQL?
- By using the `AS` keyword
  - `SELECT row_name AS alias FROM table_name;`

### What does the AS keyword do in a query?
- It can either make it easier for us to reference things (either while we are querying things, or once we have returned our data) or it can simply improve readability

### What is a transaction?
- A measure of work on the database
  - Whenever you're using DML, for instance, you are doing work on the database

### What are the properties of a transaction?
- **ACID**: *Atomicity*, *Consistency*, *Isolation*, and *Durability*
  - **Atomicity**
    - Transactions should be *all or nothing*
    - Either my transaction is completed or all of my changes are rolled back
  - **Consistency**
    - All of my transactions must abide by the same constraints
    - I cannot have one transaction following certain constraints (like `UNIQUE`) but others not following them
  - **Isolation**
    - The results of one transaction should have no effect on another transaction
    - Each transaction should act as though it's the only transaction in the world (you can do it, little transaction!)
  - **Durability**
    - All odata must persist in the event of a database failure
    - It must be persisted to some form of non-volatile memory, it cannot be persisted to volatile memory

### What are the different types of reads we can get within transactions?
- For a particular transaction:
    - Committed
    - A read has been committed (persisted) to the database
    - Uncommitted/non-committed
    - A read has not been committed (persisted) to the database

### What are the transaction isolation levels and what do they prevent?
- **Read uncommitted**
  - Allows for dirty reads, non-repeatable reads, and phantom reads
  - This level is almost never used because it allows for dirty reads and dirty reads are generally not a good thing
- **Read committed**
  - Allows for non-repeatable reads and phantom reads
  - Generally the default level of most DBMSs
- **Repeatable reads**
  - Allows only for phantom reads
  - More strict about the content of the reads themselves
- **Serialization**
  - Does *NOT* allow for dirty reads, non-repeatable reads, or phantom reads
  - This would be Twitter's worst nightmare

### What are dirty reads, non-repeatable reads, and phantom reads?
- *Dirty reads*
  - Occur when that has not been committed to the database is read during the transaction
  - This is generally a big no-no
- *Non-repeatable reads*
  - Occurs when a user grabs a record during a transaction and, upon grabbing that same record again, that record has changed
  - This is usually fine
- *Phantom reads*
  - Occur when a user grabs some records and upon trying to grab those records again finds that the number of records has changed
  - This is usually fine, especially if you're dealing with large amounts of records

### What is normalization?
- A design pattern which aims to reduce redundancy in our database

### What are the requirements for the different levels of normalization?
- **0NF** - *Zeroeth Normal Form*
  - No normalization
  - No primary keys
  - No foreign keys
- **1NF** - *First Normal Form*
  - All data must be in its atomic form
    - We cannot have multiple values in a single field
    - A field labled `phone` cannot have `(555) 123-4567, (555) 765-4321`, this would have to be either one phone number or have two different fields each containing one phone number
  - Uses primary keys
    - Every table must be represented with a tuple of one or more not null values that uniquely identifies it
  - Uses foreign keys
    - Foreign keys are used to reference data instead of repeating data within the table
- **2NF** - *Second Normal Form*
  - Must satisfy 1NF
  - There can't be any partial dependencies present in the table; all data must be directly related to the primary key
    - if we have a compound primary key of `{title, format}`, we can't have a field `price` be partially dependent on the value of `format` for instance
- **3NF** - *Third Normal Form*
  - Must satisfy 2NF
  - Eliminates all transitive dependencies
    - If we can deduce the primary key of a dependency, then we can put it into another table and reference it with a foreign key
- **BCNF** - *Boyce-Codd Normal Form* (3.5NF)
  - Must satisfy 3NF
  - If you have no overlapping candidate keys, you are guaranteed to be in BCNF
    - A candidate key is any key that uniquely identifies a record
    - This is the highest level any company is likely to ever aim for