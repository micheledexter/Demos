# Review & Interview Questions
These questions relate to the following topics:

- [Project Explanation](#project-explanation)
- [Java](#java)
- [SQL & pg](#sql--pg)
- [Node & HTTP](#node--http)
- [HTML, CSS & JavaScript](#html-css--javascript)
- [Hibernate, JPA & Spring Data](#hibernate-jpa--spring-data)
- [Spring](#spring)
- [REST](#rest)
- [React](#react)

Each question will have answers in bullet point format, with possible nested items for more specific examples.

## Project Explanation
- [Tell me about your last project](#tell-me-about-your-last-project)
- [What was your role?](#what-was-your-role)
- [Did you use a software development methodology?](#did-you-use-a-software-development-methodology)

### Tell me about your last project
- **NOTE: You should _ALWAYS_ include the technology stack in your explanation**

### What was your role?
- Talk about things that make you stand out
- Not "I was just another developer/programmer"

### Did you use a software development methodology?
- The answer had better be "yes"

## Java
- [JVM vs JRE vs JDK?](#jvm-vs-jre-vs-jdk)
- [What is the difference between Final, Finalize and Finally?](#what-is-the-difference-between-final-finalize-and-finally)
- [What is autoboxing, boxing and unboxing? When were they introduced in Java?](#what-is-autoboxing-boxing-and-unboxing-when-were-they-introduced-in-java)
- [What does the static keyword do?](#what-does-the-static-keyword-do)
- [What is a local variable's default value?](#what-is-a-local-variables-default-value)
- [Difference between String, StringBuilder and StringBuffer?](#difference-between-string-stringbuilder-and-strindbuffer)
- [What is a Java Collection Framework? Name 5 methods found.](#what-is-a-java-collection-framework-name-5-methods-found)
- [What are Generics?](#what-are-generics)
- [What is the difference between Error and Exception?](#what-is-the-difference-between-error-and-exception)
- [Checked and Unchecked?](#checked-and-unchecked)
- [What is the root class or interface of exceptions?](#what-is-the-root-class-or-interface-of-exceptions)
- [What is Serialization?](#what-is-serialization)
- [What is multithreading?](#what-is-multithreading)
- [How can we spin up a new thread?](#how-can-we-spin-up-a-new-thread)
- [What are wrapper classes? Why are they needed?](#what-are-wrapper-classes-why-are-they-needed)
- [Why are strings immutable?](#why-are-strings-immutable)
- [What's the difference between the equals method and the hashcode method?](#whats-the-difference-between-the-equals-method-and-the-hashcode-method)

### JVM vs JRE vs JDK?
- JVM: Java Virtual Machine
  - Executes bytecode and does underlying housekeeping processes such as garbage collection
- JRE: Java Runtime Environment
  - Copy of the JVM and other libraries, code and configuration files that actually run the bytecode
- JDK: Java Development Kit
  - Has the JRE as well as tools for writing code and compiling code into bytecode

### What is the difference between Final, Finalize and Finally?
- Final
  - Makes a variable constant
  - Makes a method unable to be overridden
  - Makes a class unable to be inherited
- Finalize
  - Method called by the garbage collector just before destroying an object
- Finally
  - Part of a `try/catch/finally`, or `try/finally` block set and runs regardless of the outcome of the `try` block

### What is autoboxing, boxing and unboxing? When were they introduced in Java?
- Autoboxing is a feature introduced in Java 1.5 that allows for conversion between primitive values and wrapper classes
  - Boxing is the conversion of an `int` primitive to an `Integer` wrapper class
  - Unboxing is the conversion of an `Integer` wrapper class to an `int` primitive
- Autoboxing is **_not_** the same as boxing: autoboxing is **_how_** it's done, boxing is **_what_** is done

### What does the static keyword do?
- Something with the `static` key word belongs to the class as opposed to a single instance
  - A static variable or method would belong to the class instead of a single instance of an object
  - Instance variables and methods may access static variables and methods, but static variables and methods may not access instance variables and methods which have no object instance attached to them

### What is a local variable's default value?
- They do not have default values, and would need to be assigned one if you wanted to operate on it
  - For instance, the following would result in an exception:
  ```java
  int myNum;
  myNum = myNum + 1;
  ```

### Difference between String, StringBuilder and StringBuffer?
- A string is a literal string of characters
- StringBuilder is a class for manipulating strings without needing to create new strings constantly
  - Unsynchronized
- StringBuffer is an earlier version of a class for manipulating strings without needing to create new strings constantly
  - Synchronized

### What is a Java Collection Framework? Name 5 methods found.
- A collection of interfaces and classes for creating collections
- These methods are in every `Collection`:
  - `contains(Object o)` - Returns `true` if this collection contains the specified element.
  - `isEmpty()` - Returns `true` if this collection contains no elements.
  - `iterator()` - Returns an iterator over the elements in this collection.
  - `size()` - Returns the number of elements in this collection.
  - `toArray()` - Returns an array containing all of the elements in this collection.

### What are Generics?
- Generics are used with angle brackets to say that a class name should be passed (similar to the way a variable gets passed)
- Generics allow us to pass a class to another class without needing to create a separate implementation for each class type that would need to be passed
  - `List<T> myList = new ArrayList<>();` can be a list of any type, such as:
    - `List<Integer> myList = new ArrayList<>();`
    - `List<MyOwnClass> MyList = new ArrayList<>();`

### What is the difference between Error and Exception?
- An Exception is something we may or may not want to handle within our program, whereas an Error is something we definitely do not want to handle
  - An error occurs when something has gone wrong, and the best thing we can do is allow things to break and not try to fix them or we risk breaking things in much, _much_ worse ways

### Checked and Unchecked?
- Checked errors are things that we need to handle before compiling our program, and belong to the `Exception` class, such as:
  - `SQLException`
  - `IOException`
  - `ServerNotActiveException`
- Unchecked errors are things that shouldn't need handling and are generally a result of poor coding and input handling on the part of the developer
  - These exceptions belong to the `RuntimeException` class, and (among many others) includes:
    - `NullPointerException`
    - `ArrayIndexOutOfBoundsException`
    - `ArithmeticException`

### What is the root class or interface of exceptions?
- A class called `Throwable`, which is also the root class of `Error`s

### What is Serialization?
- Serialization is the mechanism for how Java converts an object to bytecode so that it may be transferred to another Java system and deserialized back into objects
  - Serialization _does_ have practical applications, but only for Java-to-Java communication

### What is multithreading?
- Multithreading is what allows us to run multiple processes at the same time
  - Each thread represents a congruent process

### How can we spin up a new thread?
- There are technically two ways of creating threads, but one way is definitely better than the other:
  - Worse: Extend the `Thread` class and override the `run()` method
  - Better: Implement the `Runnable` interface and override the `run()` method

### What are wrapper classes? Why are they needed?
- Wrapper classes are the classes that match the primitive value types:

  | Primitive Data Type | Wrapper Class |
  | ------------------- | ------------- |
  | char                | Character     |
  | byte                | Byte          |
  | short               | Short         |
  | int                 | Integer       |
  | long                | Long          |
  | float               | Float         |
  | double              | Double        |
  | boolean             | Boolean       |

### Why are strings immutable?
- Strings need to be immutable because they all go into the String Pool, and if there happen to be two references to a string in the string pool and someone were to change the string (because in this scenario the strings are mutable), then the string would be changed for both of the variables referencing it.

### What's the difference between the equals method and the hashCode method?
- This question would almost be better asked "what do they have in common?" because the answer would be shorter, so that's how I'll answer it
  - The only thing that these two functions have in common is that the equals function depends on the hashCode function to verify that two objects are equal or not
  - The hashCode function generates a unique-enough value to represent an object

## SQL & pg
- [What is SQL?](#what-is-sql)
- [DML?](#dml)
- [DDL?](#ddl)
- [TCL?](#tcl)
- [Constraints?](#constraints)
- [Referential Integrity?](#referential-integrity)
- [What's the advantage of a view?](#whats-the-advantage-of-a-view)
- [Database Normalization and the NFs you know?](#database-normalization-and-the-nfs-you-know)
- [How would you see common data between 2 tables?](#how-would-you-see-common-data-between-2-tables)
- [What is a self join?](#what-is-a-self-join)
- [What is pg?](#what-is-pg)
- [How to connect to db using pg?](#how-to-connect-to-db-using-pg)
- [What kinds of queries can be sent?](#what-kinds-of-queries-can-be-sent)
- [Describe ACID properties](#describe-acid-properties)

### What is SQL?
- Structured Query Language
- It's the foundation for every other dialect of query langauge
  - SQL is made up of a number of sub-languages as well
    - DML - Data Manipulation Language
    - DDL - Data Definition Language
    - DCL - Data Control Language
    - TCL - Transaction Control Language
    - DQL - Data Query Language

### DML?
- Data Manipulation Language (DML) is for manipulating the records, so the following are examples of DML:
  - `INSERT` - inserts a record
  - `UPDATE` - updates a record
  - `DELETE` - deletes a record

### DDL?
- Data Definition Language (DDL) is for working with structures like tables and schemas, so these are examples of DDL:
  - `CREATE` - Create a table or schema
  - `ALTER` - Change a table or schema
  - `DROP` - Delete an existing table or schema

### TCL?
- Transaction Control Language (TCL) is for working with transactions, so the following are examples of TCL:
  - `SAVEPOINT` - Create a savepoint
  - `ROLLBACK` - Roll back to a savepoint
  - `COMMIT` - Commit changes to the database

### Constraints?
- Constraints are rules and parameters that a database must abide by, so examples of some constraints would be:
  - `NOT NULL` - The value cannot be null
  - `DEFAULT` - Use the following value as the default
  - `UNIQUE` - The value must be unique
  - `PRIMARY KEY` - The value uniquely identifies a row/record in the table

### Referential Integrity?
- Referential Integrity guarantees that a value that we reference in one table will be in the referenced table via a `FOREIGN KEY` constraint
- SQL databases will not allow a value to reference nothing
  - The value would either have to be changed to reference another row/record in the same table, or would have to be changed to `NULL` as long as there was no `NOT NULL` constraint.

### What's the advantage of a view?
- We can have a virtual table of requently-referenced data without needing to constantly write lengthy queries with multiple joins or sub-queries

### Database Normalization and the NFs you know?
- Database normalization helps with reducing data redundancy and improving data integrity by restructuring the database
- Common normal forms:
  - Zeoeth Normal Form (0NF):
    - No repeating groups (which results in a candidate key)
  - First Normal Form (1NF):
    - There's a primary key
    - No repeating groups
    - All data is in its atomic form (no tuples in cells)
  - Second Normal Form (2NF):
    - Satisfies 1NF
    - No partial dependencies (such as the price-based-on-format example)
  - Third Normal Form (3NF):
    - Satisfies 2NF
    - No transitive dependencies (such as the genre-genre_id example)
  - Boyce-Codd Normal Form (BCNF):
    - Satisfies 3NF
    - No redundancy from any functional dependency

### How would you see common data between 2 tables?
- By using the `INTERSECT` keyword
  - This requires column types to match from both tables, and only matching rows will be returned

### What is a self join?
- Any time you join a table with itself
  ```SQL
  SELECT *
  FROM
      employee ea
  INNER JOIN employee eb ON ua.emp_id = ub.emp_id
  ORDER BY
      salary;
  ```

### What is pg?
- "node-postgres"
- It's a collection of modules for interfacing with a PostgreSQL database

### How to connect to db using pg?
- Have a PostgreSQL database set up
- Create a configuration object with the necessary information for where to connect and credentials (probably using environment variables to keep sensitive data private):
  ```javascript
  let config = {}
  if (env.RDS_USE === 'true') {
      console.log('Using RDS...');
      config = {
          user: env.RDS_USERNAME,
          host: env.RDS_HOSTNAME,
          database: env.RDS_DATABASE,
          password: env.RDS_PASSWORD,
          port: 5432,
          max: 5
      };
  } else {
      console.log('Using Development...');
      config = {
          user: env.DEVEL_USERNAME,
          host: env.DEVEL_HOSTNAME,
          database: env.DEVEL_DATABASE,
          password: env.DEVEL_PASSWORD,
          port: 5432,
          max: 5
      }
  }
  ```
- Create a connection pool using `export const connectionPool = new Pool(config);`

### What kinds of queries can be sent?
- I can't find anything in the documentation saying there are any restrictions, so I have to assume that everything is allowed

### Describe ACID properties
- _ACID_ is an acronym which stands for...
  - **Atomicity** - Everything either works or it doesn't
    - There is no in-between area, if something works, it works, but there cannot be something partially updating or deleting, if it does, then it's not following this constraint
  - **Consistency** - All transactions must follow the same set of constraints
    - Every transaction follows the same constraints and no transaction gets any kind of preferrential treatment
  - **Isolation** - Every transaction should operate as though it is the only transaction
    - No transaction should need to rely on any other transaction, and no transactions after it should need to rely on this transaction's occurrence
  - **Durability** - Once the transaction is committed, it's safe
    - If the system goes down, there should be no loss of data, which means that it should not be committed to any sort of volatile memory (such as RAM)

## Node & HTTP
- [List the process of communication between a client and server application](#list-the-process-of-communication-between-a-client-and-server-application)
- [What are some of the HTTP methods?](#what-are-some-of-the-http-methods)
- [What are some of the HTTP status codes?](#what-are-some-of-the-http-status-codes)
- [What is Node.js?](#what-is-nodejs)
- [What is Express?](#what-is-express)
- [Why use middleware?](#why-use-middleware)
- [How do you allow parameters in the url and how do you get those parameters from the url?](#how-do-you-allow-parameters-in-the-url-and-how-do-you-get-those-parameters-from-the-url)
- [How does .use differ from .get?](#how-does-use-differ-from-get)

### List the process of communication between a client and server application
- Client sends and HTTP request to the server
- Server receives the HTTP and redirects it to the proper router
- The router calls any service it needs
- The service does any necessary logic and then calls the corresponding DAO
- The DAO makes a call using pg to the database
- The DAO returns the data and disconnects from the database
- The service does any additional logic and returns data to the router
- The router does any additional logic and returns data to the cient
- The client does stuff using data

### What are some of the HTTP methods?
- `GET` - Requests data
- `POST` - Creates one or more new records
- `PUT` - Updates one or more records completely
- `PATCH` - Changes one or more records partially
- `DELETE` - Deletes one or more recoreds

### What are some of the HTTP status codes?
- `100` - Continue
- `200` - OK
- `201` - Created
- `202` - Accepted
- `202` - No Content
- `300` - Multiple Choice
- `301` - Moved Permanently
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `418` - I'm a teapot
- `500` - Internal Server Error
- `501` - Not Implemented
- `502` - Bad Gateway
- `503` - Service Unavailable
- `504` - Gateway Timeout

### What is Node.js?
- Node.js is an open-source cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser

### What is Express?
- Express is a web application framework for Node.js designed for building web applications and APIs

### Why use middleware?
- It allows us to address cross-cutting concerns within our code
  - Authentication & authorization, for instance

### How do you allow parameters in the url and how do you get those parameters from the url?
- By using either the req.params or req.query objects along with the name of the parameter or query being passed in
  - For instance, for a parameter:
  ```javascript
  // to '/4' would make req.params.id = 4
  router.get('/:id', async (req, res) => {
    res.json(await getByIdService(req.params.id));
  });
  ```
  - For instance, for a query:
  ```javascript
  // to '/getid?id=4' would make req.query.id = 4
  router.get('/getid', async (req, res) => {
    res.json(await getByIdService(req.query.id));
  });
  ```

### How does .use differ from .get?
- `.use()` is a catch-all for all HTTP methods, whereas `.get()` is specific to only the `GET` HTTP method
  - `.use()` is best used for redirection to a router, or as a catch-all at the end of a router to send back an error

## HTML, CSS & JavaScript
- [Difference between HTML, CSS, JavaScript and JSP](#difference-between-html-css-javascript-and-jsp)
- [Difference between == and ===](#difference-between--and-)
- [What is ECMAScript?](#what-is-ecmascript)
- [Describe how you would debug an application](#describe-how-you-would-debug-an-application)
- [Where have you used AJAX?](#where-have-you-used-ajax)
- [How can we manipulate the DOM?](#how-can-we-manipulate-the-dom)
- [What is the arguments object in JavaScript?](#what-is-the-arguments-object-in-javascript)
- [What is semicolon injection?](#what-is-semicolon-injection)
- [Differences between Java & JavaScript?](#differences-between-java--javascript)

### Difference between HTML, CSS, JavaScript and JSP
- ... They are entirely different constructs in absolutely every possible way
- HTML is for document structure
- CSS is for styling
- JavaScript is for function
- JSP is for generating views in Java

### Difference between == and ===
- `==` is for comparing using type coercion
- `===` is for comparing without type coercion

### What is ECMAScript?
- The standard for JavaScipt as set by the European Computer Manufacturers Association

### Describe how you would debug an application
- Using the debug tools
  - Set break points
  - Step in, over, continue, etc.

### Where have you used AJAX?
- In making HTTP requests using either `fetch` or Axios

### How can we manipulate the DOM?
- By using JavaScript
  - We can create elements using `.createElement()` and `.appendChild()`
  - We can change elements using `.innerText()` and `.innerHTML()`
  - We can remove elements using `.removeChild()`

### What is the arguments object in JavaScript?
- `arguments` is an Array-like object accessible inside functions that contains the values of the arguments passed to that function

### What is semicolon injection?
- I'm assuming that this question is referring to [automatic semicolon insertion](https://2ality.com/2011/05/semicolon-insertion.html), in which JavaScript tries to help by automatically inserting semicolons at the end of lines to close them
- PERSONAL OPINION: Personally I hate the idea of automatic semicolon insertion for anything that isn't actually the REPL _console_ itself, I think it encourages bad programming practices, difficult readability, and makes debugging a nightmare

### Differences between Java & JavaScript?
- JavaScript is loosely typed, is functional, generally runs in a browser or in a web application context, and uses truthy/falsy values in addition to type coercion
- Java is type strict, is strictly object oriented, must run in a virtual machine, strictly true/false, and does not allow for type coercion
- This question is akin to asking for the differences between a moose and an ant farm, it really doesn't make sense to ask this question because the list of differences far outweighs the list of similarities

## Hibernate, JPA & Spring Data
- [What is Spring Data?](#what-is-spring-data)
- [Benefits of Spring Data?](#benefits-of-spring-data)
- [How do you map a table to a class?](#how-do-you-map-a-table-to-a-class)
- [States of an object in Hibernate?](#states-of-an-object-in-hibernate)
- [What kind of hibernate exception have you had and how did you fix it?](#what-kind-of-hibernate-exception-have-you-had-and-how-did-you-fix-it)
- [Why use JDBC over Hibernate?](#why-use-jdbc-over-hibernate)

### What is Spring Data?
- Spring Data is a framework for working with an JPA provider like Hibernate to interface with our database

### Benefits of Spring Data?
- It allows us to programmatically interact with our database instead of writing queries to interact with it
  - For instance, I can create a repository with something like this:
  ```java
  package com.myproject.repos
  
  import org.springframework.data.jpa.repository.JpaRepository;
  
  import com.myproject.models.MyObject
  
  public interface MyObjectRepo extends JpaRepository<MyObject, Integer> {
      
  }
  ```
  - And with just that code, a full CRUD repository has been created

### How do you map a table to a class?
- Using the `@Entity` and `@Table` annotations from either Hibernate or the Java Persistence API
  - `@Table` is what actually ties the model to the table
  - `@Entity` is what gives the model a name and defines it as a Spring Bean

### States of an object in Hibernate?
- There are 3 object states in Hibernate:
  - **Transient** - An object that has no connection to any session and has no representation in the database
  - **Persistent** - An object that is associated to a session and has representation in the database
  - **Detached** - An object that is just removed from a hibernate session is detached
    - Any operations done on it at this point can only be done within the program and cannot be persistence-based operations such as saving or updating information in the database

### What kind of hibernate exception have you had and how did you fix it?
- I had an "Unknown Entity" exception because I referenced a table the wrong way, once I fixed that, the error went away

### Why use JDBC over Hibernate?
- If we need greater control of what we're querying, then we would probably want to use JDBC over Hibernate

## Spring
- [What is IoC?](#what-is-ioc)
- [What is DI?](#what-is-di)
- [Why use Spring?](#why-use-spring)
- [Differences between applicationContext & beanFactory?](#differences-between-applicationcontext--bean-factory)
- [Lifecycle of a bean?](#lifecycle-of-a-bean)
- [What is the flow of Flow of MVC?](#what-is-the-flow-of-flow-of-mvc)
- [What are some annotations of Spring?](#what-are-some-annotations-of-spring)
- [Annotations of MVC?](#annotations-of-mvc)
- [Difference between @Controller and @RestController?](#differences-between-controller-and-restcontroller)
- [What is AOP?](#what-is-aop)
- [What is a Pointcut Expression?](#what-is-a-pointcut-expression)
- [Instantiate a bean container, 3 ways?](#instantiate-a-bean-container-3-ways)

### What is IoC?
- Inversion of Control
- We hand over our code to Spring for it to work on instead of having using code provided from Spring

### What is DI?
- Dependency Injection
- In Spring we use the `@Autowired` or `@Wired` annotations for dependency injection
  - These allow us to use loosely coupled dependencies throughout our code

### Why use Spring?
- Spring allows us to quickly create enterprise-level applications through dependency injection and inversion of control

### Differences between applicationContext & beanFactory?
- `beanFactory`
  - Makes & manages all beans
  - Lazy instantiation
  - No annotation support
- `applicationContext`
  - Extends `beanFactory`
  - Adds support for annotations
  - Eager instantiation of beans
  - i18n support
  - Automatic post-processor registration

### Lifecycle of a bean?
- instantiate
- populate properties
- `setBeanName`
- `setBeanFactory`
- pre-init `PostProcessor`
- `afterPropertiesSet`
- custom init
- post-init `PostProcessor`
- in use
- destroy
- custom destroy

### What is the flow of Flow of MVC?
- In spring, it works like this:
  - Get controller mapping from handler mapping
  - To controller
  - To service (implementation)
  - To DAO (repository)
  - Back to service (implementation)
  - Back to controller
  - OPTIONALLY go to and from view resolver

### What are some annotations of Spring?
- `@SpringBootApplication` - defines the application as a Spring application and sets in place configurations with assumptions
- `@Configuration` - Defines the class as a configuration class
- `@EnableWebMvc` - Goes in the configuration class, self explanitory
- `@Component` - Defines a component for Spring to use

### Annotations of MVC?
- `@RequestMapping` - Maps all requests to either a class or a method
- `@GetMapping`, `@PostMapping`, `@PatchMapping`, `@PutMapping` & `@DeleteMapping` - Maps specific requests to either a class or method
- `@RestController` - Defines a class as a REST controller
- `@PathVariable` - Defines a path variable from a mapping
- `@RequestBody` - Defines the object model of the request body
- `@ResponseBody` - Automatically serializes the response into JSON

### Difference between @Controller and @RestController?
- Both are used for controllers in Spring, but `@RestController` is the equivalent of using the `@Controller` and `@ResponseBody` annotations

### What is AOP?
- Aspect Oriented Programming
  - AOP is what's used in Java to address cross-cutting concerns

### What is a Pointcut Expression?
- An expression used in AOP for matching potential join points
  - For example: `@Pointcut("execution(public Employee org.myproject.dao.EmployeeDao.findById(..))")` would return specifically the method in the DAO for `findById`, but if the method was overloaded, then it would work on all of the different imlementations

### Instantiate a bean container, 3 ways?
- BeanFactory:
  ```java
  Resource res = new FileSystemResource("beans.xml");
  BeanFactory factory = new XmlBeanFactory(res);
  ```
- ApplicationContext:
  ```java
  ApplicationContext context = new ClassPathXmlApplicationContext(
        new String[] {"services.xml", "daos.xml"});
  ```
- Let Spring do it:
  ```java
  @SpringBootApplication
  ```

## REST
- [What is REST?](#what-is-rest)
- [What gets returned with REST?](#what-gets-returned-with-rest)
- [Have you heard of safe methods? If so which ones?](#have-you-ever-heard-of-safe-methods-if-so-which-ones)
- [Is REST a protocol?](#is-rest-a-protocol)
- [What RESTful web services have you consumed and exposed?](#what-restful-web-services-have-you-consumed-and-exposed)
- [How would you protect a REST endpoint?](#how-would-you-protect-a-rest-endpoint)

### What is REST?
- Representational State Transfer
- It's a a software architectural style that defines a set of constraints to be used for creating web services

### What gets returned with REST?
- A status code
- An optional message
- An optional payload

### Have you heard of safe methods? If so which ones?
- `GET`, `HEAD` and `OPTIONS` are all safe methods because they don't have any actual effect on any data other than data retrieval or checking for data permissions
- These are also known as "idempodent" methods

### Is REST a protocol?
- No, it's a software architectural style

### What RESTful web services have you consumed and exposed?
- I've created and exposed an Employee Reimbursement System API
- I've consumed IMDb's API

### How would you protect a REST endpoint?
- Using AOP or middleware to either create or implement some form of authentication and/or authorization system

## React
- [What is React?](#what-is-react)
- [What is NPM? Name some commands](#what-is-npm-name-some-commands)
- [Can you have multiple constructors in TypeScript?](#can-you-have-multiple-constructors-in-typescript)
- [What are the lifecycle hooks of a React component?](#what-are-the-lifecycle-hooks-of-a-react-component)
- [What does it mean to build your React project?](#what-does-it-mean-to-build-your-react-project)
- [How do you render one component from inside another component?](#how-do-you-render-one-component-from-inside-another-component)
- [What is the purpose of including Redux with React?](#what-is-the-purpose-of-including-redux-with-react)
- [How do you include JavaScript from within a JSX template?](#how-do-you-include-javascript-from-within-a-jsx-template)
- [How would you create a table from an array containing the data with React?](#how-would-you-create-a-table-from-an-array-containing-the-data-with-react)
- [React.Component<one, two> takes two types in the generics, what does the first parameter of the generic represent and what does the second parameter represent?](#reactcomponentone-two-takes-two-types-in-the-generics-what-does-the-first-parameter-of-the-generic-represent-and-what-does-the-second-parameter-represent)

### What is React?
- React is a library (oddly enough) for creating reactive single-page web applications

### What is NPM? Name some commands
- Node Package Manager
- `npm i [-g] [<package>]` -  install a package (either locally or globally) or an application
- `npm <command> -h'` - get help on a command
- `npm start` - start the application

### Can you have multiple constructors in TypeScript?
- No, you can only have one

### What are the lifecycle hooks of a React component?
| Hook                        | Function                                      |
| --------------------------- | --------------------------------------------- |
| `componentDidCatch`         | Something went wrong                          |
| `componentDidMount`         | The component mounted                         |
| `componentDidUpdate`        | The component updated                         |
| `componentWillMount`        | The component is about to be mounted          |
| `componentWillReceiveProps` | The component is about to receive props       |
| `componentWillUnmount`      | The component is about to unmount             |
| `componentWillUpdate`       | The component is about to update              |

### What does it mean to build your React project?
- It means that it's ready for production
- The code is transpiled into a single page view and all components are minified into a single .js file

### How do you render one component from inside another component?
- You import it as a component and use it the same way you would use any HTML element

### What is the purpose of including Redux with React?
- To allow us to have a global state and passing in props using wrapper classes instead of keeping track of state in each individual component and passing everything through props from one component to the next

### How do you include JavaScript from within a JSX template?
- Using curly braces
  - `<div>My name is {this.state.myName}</div>`

### How would you create a table from an array containing the data with React?
- Using the `.map` function

### React.Component<one, two> takes two types in the generics, what does the first parameter of the generic represent and what does the second parameter represent?
- The first parameter represents the props being passed into the component while the second parameter represents the structure of the state of the component