# Week 2 Study Questions
Each question will have answers in bullet point format, with possible nested items for more specific examples.

## Questions
- [What is a database management system? A relational database management system?](#what-is-a-database-management-system-a-relational-database-management-system)
- [What is a database?](#what-is-a-databse)
- [What are the sublanguages of SQL?](#what-are-the-sublanguages-of-sql)
- [What is multiplicity?](#what-is-multiplicity)
- [What is cardinality?](#what-is-cardinality)
- [What is a candidate key?](#what-is-a-candidate-key)
- [What is referential integrity?](#what-is-referential-integrity)
- [What are primary keys? Foreign keys?](#what-are-primary-keys-foreign-keys)
- [What are some of the different constraints?](#what-are-some-of-the-different-constraints)
- [What is an entity relationship diagram?](#what-is-an-entity-relationship-diagram)
- [What are the differences between WHERE vs Having?](#what-are-the-differences-between-where-vs-having)
- [What are the differences between GROUP BY and ORDER BY?](#what-are-the-differences-between-group-by-and-order-by)
- [What does LIKE do?](#what-does-like-do)
- [What is the difference between IN and EXISTS?](#what-is-the-difference-between-in-and-exists)
- [How do I use subqueries?](#how-do-i-use-subqueries)
- [How does BETWEEN work](#how-does-between-work)
- [What is the order of operations in an SQL statement?](#what-is-the-order-of-operations-in-an-sql-statement)
- [What are examples of aggregate and scalar functions?](#what-are-examples-of-aggregate-and-scalar-functions)
- [What are the different joins in SQL?](#what-are-the-different-joins-in-sql)
- [What are the different set operations in SQL? Which set operations support duplicates?](#what-are-the-different-set-operations-in-sql-which-set-operations-support-duplicates)
- [What is the difference between join and set operations?](#what-is-the-difference-between-join-and-set-operations)
- [How can I create an alias in SQL?](#how-can-i-create-an-alias-in-sql)
- [What does the AS keyword do in a query?](#what-does-the-as-keyword-do-in-a-query)
- [What is a transaction?](#what-is-a-transaction)
- [What are the properties of a transaction](#what-are-the-properties-of-a-transaction)
- [What are the different types of reads we can get within transactions?](#what-are-the-different-types-of-reads-we-can-get-within-transactions)
- [What are the transaction isolation levels and what do they prevent?](#what-are-the-transaction-isolation-levels-and-what-do-they-prevent)
- [What are dirty reads, non-repeatable reads and phantom reads?](#what-are-dirty-reads-non-repeatable-reads-and-phantom-reads)
- [What is normalization?](#what-is-normalization)
- [What are the requirements for the different levels of normalization?](#what-are-the-requirements-for-the-different-levels-of-normalization)
- [What is PL/pgSQL?](#what-is-plpgsql)
- [What are functions?](#what-are-functions)
- [What are triggers?](#what-are-triggers)
- [What is a view?](#what-is-a-view)
- [What layers do we split our server into?](#what-layers-do-we-split-our-server-into)
- [What is each layer's purpose?](#what-is-each-layers-purpose)
- [What is a DAO?](#what-is-a-dao)
- [What role does a DAO have in our program?](#what-role-does-a-dao-have-in-our-program)
- [What is pg?](#what-is-pg)
- [Why do we use pg?](#why-do-we-use-pg)
- [What is a connection pool? What design patterns does it follow?](#what-is-a-connection-pool-what-design-patterns-does-it-follow)
- [Why use a connection pool?](#why-use-a-connection-pool)
- [How do we write a query in pg?](#how-do-we-write-a-query-in-pg)
- [What is the danger of putting values directly into our queries?](#what-is-the-danger-of-putting-values-directly-into-our-queries)
- [What is a parameterized query? What problem does it solve?](#what-is-a-parameterized-query-what-problem-does-it-solve)
- [How do you write a parameterized query?](#how-do-you-write-a-parameterized-query)
- [What is a promise in JS?](#what-is-a-promise-in-js)
- [What does a function returning a promise signify about when the function is run? What two ways can we deal with promises?](#what-does-a-function-returning-a-promise-signify-about-when-the-function-is-run-what-two-ways-can-we-deal-with-promises)
- [What do we need to include with either way of dealing with promises?](#what-do-we-need-to-include-with-either-way-of-dealing-with-promises)
- [What is testing?](#what-is-testing)
- [What is TDD?](#what-is-tdd)
- [What does Red Green Refactor mean?](#what-does-red-green-refactor-mean)
- [What is Unit testing?](#what-is-unit-testing)
- [What things do we want from a unit testing tool?](#what-things-do-we-want-from-a-unit-testing-tool)
- [What tool do we use for unit testing?](#what-tool-do-we-use-for-unit-testing)
- [How do I make a test suite? A single test?](#how-do-i-make-a-test-suite-a-single-test)
- [How can I mock a function?](#how-can-i-mock-a-function)
- [What kind of file do I put tests in?](#what-kind-of-file-do-i-put-tests-in)
- [Where do I put the tests in my project structure?](#where-do-i-put-the-tests-in-my-project-structure)

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
  - Checks for the existence of a record within the subquery and returns `TRUE` if found
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
- **BCNF** (3.5NF) - *Boyce-Codd Normal Form*
  - Must satisfy 3NF
  - If you have no overlapping candidate keys, you are guaranteed to be in BCNF
    - A candidate key is any key that uniquely identifies a record
    - This is the highest level any company is likely to ever aim for

### What is PL/pgSQL?
- It's the procedural language for PostgreSQL
  - Allows us to create functions, stored procedures, triggers, and sequences that we can use to manipulate our data

### What are functions?
- Functions (just like in any other language) take 0 or more values and can return a value or perform work on a value

### What are triggers?
- A trigger is like a stored procedure that is automatically invoked whenever a specified event is performed
  - An example of this is an auto-increment trigger for primary keys in a table

### What is a view?
- A view is similar to is a representation of data created from one or more tables that might be frequently called upon
  - If I am frequently making queries to my database that require joining multiple tables together, I might create a view instead of constantly using joins for convenience

### What layers do we split our server into?
- One common architectural pattern is called the Model-View-Controller (MVC)
  - Everyone [has their own view](https://www.google.com/search?tbm=isch&q=model+view+controller) on how this is represented, and how it works (don't get me started on my own feelings about it)
  - We represent it as...
    - **View**
      - The end-user, whether it's in a browser or via postman
    - **Controller**
      - Requests are managed by endpoints and responses are sent as they are processed by the business logic layer
      - The business logic (service) does any processing it needs on data before sending it to a database access object
      - Database access objects connect to the database (model) and send queries and get responses
    - **Model**
      - Our persistent layer (usually some form of database)
      - Handles all of the database stuff (CRUD operations)
      - returns anything it needs to to the controller
  - As long as you understand how the MVC works at its foundation, you're golden as Freddie

### What is each layer's purpose?
- See outline above

### What is a DAO?
- A Database Access Object

### What role does a DAO have in our program?
- A DAO serves as an interface between our service layer and our persistence layer
  - In our particular program, we're using the DAO as the actual implementation, but usually we'd use the DAO as an interface and have different implementations of the DAO so that regardless of which database we're using (it makes sense) we could use different implentations of a DAO
  
### What is pg?
- 'pg' (or 'node-postgres') is a non-blocking PostgreSQL client for Node.js.

### Why do we use pg?
- While node has all of the functionality for handling HTTP requests without pg, it would be a pain to actually write all of the functionality by ourselves. Since [someone else](https://www.npmjs.com/~brianc) already wrote a library for it, we don't want to (and shouldn't) write additional code for handling HTTP requests because it would be a waste of our time and we would probably do it worse than them anyway.

### What is a connection pool? What design patterns does it follow?
- A connection pool is a pool where instead of having each client create their own connection, they can essentially "check out" a connection from the pool to avoid instantiating their own costly connection.
  - The pool itself would act as a librarian of sorts, if a connection is available, it would allow the client can use it, if all connections are taken, the client would have to wait for another client to close their connection before "checking" out a connection
- This follows the "object pool" design pattern.

### Why use a connection pool?
- Instantiating a connection is costly, and if there is already a connection available, this saves on time opening and closing connections

### How do we write a query in pg?
- Assuming we already have a connection, we would do it one or more steps, I'll base my crappy examples on an object called `user` being passed in as a parameter.
  - Single-line query approach:
    - `let result = client.query('SELECT * FROM login WHERE user_name=$1 AND user_pass=$2;', [user.username, user.password])`
    - This will get the job done, but as more parameters are used in the query, things are gonna get very messy very quickly, so this is probably only a good option for smaller queries
  - Two-line query approach:
    - `let queryText = 'SELECT * FROM login WHERE user_name=$1 AND user_pass=$2;';`
    - `let result = client.query(queryText, [user.username, user.password]);`
    - This is best for most queries, and is better for readability
  - Multi-line query approach:
    - `let username = user.username;`
    - `let password = user.password;`
    - `let queryText = 'SELECT * FROM login WHERE user_name=$1 AND user_pass=2;';`
    - `let result = client.query(queryText, [username, password]);`
    - Depending on how large your query is getting, this may be easier (and yes, I know deconstructing the object in one line was an option in this case, but I am trying to illustrate a point here that it may not always be an option)

### What is the danger of putting values directly into our queries?
- That little [Bobby Tables](https://xkcd.com/327/) attends your school and you're the DBA...
- All kidding aside, SQL injection or queries that can't handle certain input because it breaks the query
  - pg helps sanitize inputs and we should be grateful for that, because none of us wants to even try to sanitize code.

### What is a parameterized query? What problem does it solve?
- A parameterized query (or "prepared statement") is how we make queries to our database and ensure that the query we send is safe.
- It solves query sanitization (makes sure it's safe) before sending the query to the database

### How do you write a parameterized query?
- `client.query('SELECT * FROM table WHERE param1=$1 AND param2=$2;', [par1, par2]);`
  - `$1` and `$2` are respective placeholders for `par1` and `par2`

### What is a promise in JS?
- The most gigantic headache and simultaneously somehow one of the best parts of JS. Let me explain...
  - A promise is exactly what it sounds like, it's a promise of some future value, but in its present state, is a placeholder for a future value from an asynchronous function
  - The *headache* portion of it is that a promise can hold two simultaneous types, one for if the promise succeeds, and one for if the promise fails, and if you need to nest async functions, you have promises inside of promises resulting in (you guessed it!) MEGA-PROMISES, which can resolve to even MORE types!

### What does a function returning a promise signify about when the function is run? What two ways can we deal with promises?
- It signifies that the function is run asynchronously
- We can either use `.then()` and `.catch()` callbacks or use `async` and `await`
  - The HUGE difference here is that `then()` and `catch()` **_DO NOT_** wait for the promise to be resolved before continuing execution, whereas `async` and `await` **_DO_**
    - Think of `await` as hitting the 'pause' button, it suspends execution until the promise is resolved, so these two different methods **_DO_** have very valid and different applications.

### What do we need to include with either way of dealing with promises?
- Error handling
  - Obviously `.then()` has `.catch()`, but for `async` and `await`, at least the base promise (where the error originates) should be within a `try/catch/finally` block

### What is testing?
- Writing code to verify our other code works

### What is TDD?
- Test Driven Development
  - All tests are written before any part of the code is written.

### What does Red Green Refactor mean?
- Red: Write all tests and they fail
- Green: Write our function until all tests pass
- Refactor: Functionality requirements have changed and we need to start over

### What is Unit testing?
- A method of testing where the smallest component (unit) of a piece of software or application is tested
  - Tests can be written before, during, or after the code is actually written, but the most important thing is that each unit is being tested

### What things do we want from a unit testing tool?
- A test runner: the thing that actually runs the tests
- An assertation library: Provides the necessary components for making statements like "assert that plant(magic_bean) grows beanstalk"
- Mocking: Creating mock functions of our own
- Test coverage reporting: _How much_ code is tested? _What_ code is tested? _How many_ tests are passing?

### What tool do we use for unit testing?
- There are plenty available, but _we_ are using jest

### How do I make a test suite? A single test?
- For a test suite:
    ```javascript
    describe('test suite', () => {
        beforeAll(() => {
            mockFunc.mockImplementation((wasps, hornets) => wasps + hornets * Infinity);
        });

        test('attacks should be 7 for params 7, 0', () => {
            const res = attacks(7, 0);
            expect(res).toEqual(7);
        });

        test('attacks should be Infinity for params 1, 1', () => {
            const res = attacks(1, 1);
            expect(res).toEqual(Infinity);
        });
    });
    ```
- For a single test, see a single test above

### How can I mock a function?
- Depending on what you need to mock about it, you can either use `.mockImplementation(([var]) => {...})` or you can just set the return values using `.mockReturnValueOnce([val])`or `.mockReturnValue([val])` for repeating return values

### What kind of file do I put tests in?
- It's based on the file extension of the original file, so it's dynamic, but `.spec.[ext]` where `ext` is ending of the original file
  - So for a `ts` file it would be `.spec.ts`, for a `js` file it would be `.spec.js`, etc.

### Where do I put the tests in my project structure?
- You would put them in a folder (can be named `test`) in the same directory as the `src` directory with the same filestructure as the src directory