# Week 6 Study Questions
These questions relate to the following topics:
- [Hibernate, Annotations, Database Management and CRUD Methods](#hibernate-annotations-database-management-and-crud-methods)
- [Fetching, Caching and Queries](#fetching-caching-and-queries)
- [Spring, Spring Boot/Web MVC/Data, Validation and Exceptions](#spring-spring-bootweb-mvcdata-validation-and-exceptions)

Each question will have answers in bullet point format, with possible nested items for more specific examples.

## Hibernate, Annotations, Database Management and CRUD Methods
- [Hibernate](#hibernate)
- [Annotations](#annotations)
- [Database Management](#database-management)
- [Crud Methods](#crud-methods)

### Hibernate
- [What is an ORM? Why use them?](#what-is-an-orm-why-use-them)
- [What is Hibernate?](#what-is-hibernate)
- [What is JPA?](#what-is-jpa)
- [What are the interfaces of Hibernate?](#what-are-interfaces-of-hibernate)
- [How do I configure Hibernate?](#how-do-I-configure-hibernate)
- [How can I register an object with Hibernate? (two ways)](#how-can-i-register-an-object-with-hibernate-two-ways)

#### What is an ORM? Why use them?
- An ORM is an Object-Relational Mapper (or "Mapping" as a concept rather than an implementation), such as Hibernate
- It allows us to use programming as an alternative for creating queries to our database, and provides features like i18n (internationalization) support and will automatically sanitize our queries for us right out of the box (based on which ORM we use)
  - Additionally, depending on the level of skill a developer has, they _tend_ to be better at creating SQL queries than the average developer because let's be honest: most developers probably don't put that much of their time into learning SQL

#### What is Hibernate?
- [Hibernate](https://hibernate.org/) is an ORM
- It was originally created by Gavin King, who hated how much SQL he had to write, so he single-handedly wrote Hibernate to start doing the work for himself as well as other developers who would appreciate it

#### What is JPA?
- JPA stands for Java Persistence API
- It is the standard for ORMs to follow
  - If we explain this in programming terms, then a JPA is an interface (because it doesn't actually have any concrete implementations), and Hibernate would be an implementation of that interface
  - Hibernate is called a "JPA Provider"

#### What are the interfaces of Hibernate?
  | Annotation | Description |
  | --- | --- |
  | [**`@Criteria`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Criteria.html) | `Criteria` is a simplified API for retrieving entities by composing `Criterion` objects |
  | [**`@EntityNameResolver`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/EntityNameResolver.html) | Contract for resolving an entity-name from a given entity instance |
  | [**`@Filter`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Filter.html) | Type definition of Filter
  | [**`@Interceptor`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Interceptor.html) | Allows user code to inspect and/or change property values. |
  | [**`@Query`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Query.html) | An object-oriented representation of a Hibernate query. |
  | [**`@ScrollableResults`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/ScrollableResults.html) | A result iterator that allows moving around within the results by arbitrary increments. |
  | [**`@Session`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Session.html) | The main runtime interface between a Java application and Hibernate. |
  | [**`@SessionFactory`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/SessionFactory.html) | Creates `Session`s. |
  | [**`@SQLQuery`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/SQLQuery.html) | Allows the user to declare the types and select list injection points of all entities returned by the query. |
  | [**`@StatelessSession`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/StatelessSession.html) | A command-oriented API for performing bulk operations against a database. A stateless session does not implement a first-level cache nor interact with any second-level cache, nor does it implement transactional write-behind or automatic dirty checking, nor do operations cascade to associated instances. |
  | [**`@Transaction`**](https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Transaction.html) | Allows the application to define units of work, while maintaining abstraction from the underlying transaction implementation. |

#### How do I configure Hibernate?
- Using the "hibernate.cfg.xml" file
  - Root tag is called `hibernate-configuration`
    - Only contains a tag `session-factory` which contains `property` tags
  - Each `property` tag tells hibernate how a Session should be built
- Using the Configuration class

#### How can I register an object with Hibernate? (two ways)
- Using either the Configuration class to add a class to the configuration directly, or
- By using annotations above the class (which is probably the more "correct" way of doing things) that you want to register

### Annotations
- [What are the required annotations for a model in Hibernate?](#what-are-the-required-annotations-for-a-model-in-hibernate)
- [What are some other annotations you've seen? What do they do?](#what-are-some-other-annotations-youve-seen-what-do-they-do)
- [How do I specify multiplicity with Hibernate?](#how-do-i-specify-multiplicity-with-hibernate)
- [What does @Transient do? ----- Look it up yourself](#what-does-transient-do-------look-it-up-yourself)

#### What are the required annotations for a model in Hibernate?
- First and foremost: **`@Entity`**, which tells Hibernate that this is a model
  - Other than that, I think the only other truly required one is `@Id`, which tells Hibernate which field is the primary key

#### What are some other annotations you've seen? What do they do?
  | Annotation | Description |
  | --- | --- |
  | `@GeneratedValue` | Generally used with `@Id` to generate a value using something like `strategy = GenerationType.IDENTITY` |
  | `@OneToOne` | Specifies a one to one relationship between two entities |
  | `@OneToMany` | Specifies a one to many relationship between two entities |
  | `@ManyToOne` | Specifies a many to one relationship between two entities |
  | `@ManyToMany` | Specifies a many to many relationship between two entities |
  | `@Column` | Specific instructions for how to handle a column |
  | `@JoinColumn` | Specific instructions for how to handle a column that is also has a multiplicity annotation |

#### How do I specify multiplicity with Hibernate?
- By using the `@OneToOne`, `@OneToMany`, `@ManyToOne` or `ManyToMany` annotations

#### What does @Transient do? ----- Look it up yourself
- @Transient allows certain data to not be serialized
  - If I have certain data that needs to be kept private, such as SSNs, I may not want that data to be written to be transferrable to any other system, so by using the @Transient annotation, I tell Hibernate that if any serialization of this entity occurs to ignore this attribute/field and it will be as though it never existed (won't even show the attribute as null)

### Database Management
- [What is a SessionFactory? What is connection pooling? Does Hibernate use connection pooling?](#what-is-a-session-factory-what-is-connection-pooling-does-hibernate-use-connection-pooling)
- [What is a Session? What are some things it provides?](#what-is-a-session-what-are-some-things-it-provides)
- [What is a Transaction? How do I get one, how do I use it?](#what-is-a-transaction-how-do-I-get-one-how-do-i-use-it)
- [What is a Query? How do I get one, how do I use it?](#what-is-a-query-how-do-i-get-one-how-do-i-use-it)
- [What is Criteria? How do I get one, how do I use it?](#what-is-criteria-how-do-i-get-one-how-do-i-use-it)

#### What is a SessionFactory? What is connection pooling? Does Hibernate use connection pooling?
- A SessionFactory implementation uses a Configuration in order to build Session objects for connecting to the database
- Connection pooling is used by Hibernate and is chosen in the hibernate.cfg.xml file
  - If none is chosen, then the default connection pool is used

#### What is a Session? What are some things it provides?
- A Session used to get a connection to the database
- Some things it provides are:
  - `Transaction beginTransaction()` - for building a transaction, and it will return the `Transaction`
  - `void clear()` - clear the session
  - `Connection close()` - end the JDBC session and clean up
  - `Criteria createCriteria(String entityName)` - create a new Criteria instance for the entity name
  - `Criteria createCriteria(Class persistentClass)` - create a new Criteria for the entity class
  - `Query createQuery(String queryString)` - create a Query instance from an HQL query string
  - `SQLQuery createSQLQuery(String queryString)` - create an SQLQuery instance from an SQL query string
  - `Session get(String entityName, Serializable id)` return the persistent instance of the entity with the given id or null
  - `Serializable save(Object object)` - persist a transient object
  - `void update(Object object)` - update the persistent object
  - `void delete(Object object)` - delete the persistent object

#### What is a Transaction? How do I get one, how do I use it?
- A Transaction is a unit of work that follows the ACID principles
- You can get one at your local Session by using `beginTransaction()` to initiate one
- With that Transaction object, you can:
  - `begin()` to start a new transaction (feels redundant )
  - `rollback()` to rollback if something goes wrong
  - `commit()` to end unit of work
- This is used during a Session

#### What is a Query? How do I get one, how do I use it?
- A Query is HQL and can be attained using `createQuery()`

#### What is Criteria? How do I get one, how do I use it?

### CRUD Methods
- [What are all the CRUD methods provided by Session?](#what-are-all-the-crud-methods-provided-by-session)
- [Create-?](#create-)
- [Read-?](#read-)
- [Update-?](#update-)
- [Delete-?](#delete-)

#### What are all the CRUD methods provided by Session?
- See list below

#### Create-?
- `save()` - save a new object
- `saveOrUpdate()` - save a new object or update if already exists

#### Read-?
- `get()` get an entity by name and serializable id

#### Update-?
- `saveOrUpdate()` - save a new object or update if already exists
- `update()` - update an entity, throw an exception if it already exists
- `merge()` - update an entity regardless of whether or not the entity exists

#### Delete-?
- `delete()` - delete an object

## Fetching, Caching and Queries
- [Fetching](#fetching)
- [Caching](#caching)
- [Queries](#queries)

### Fetching
- [What is a proxy? Why do I want them? What are some problems?](#what-is-a-proxy-why-do-i-want-them-what-are-some-problems)
- [What is lazy initialization? Why do I want it? What are some problems?](#what-is-lazy-initialization-why-do-i-want-it-what-are-some-problems)
- [What is the difference between lazy and eager fetching?](#what-is-the-difference-between-lazy-and-eager-fetching)
- [What are circular relationships? How can we fix them?](#what-are-circular-relationships-how-can-we-fix-them)

#### What is a proxy? Why do I want them? What are some problems?
- A proxy is basically a placeholder for data from the database, like a Promise in JavaScript
- By using proxies, we minimize the cost of our connection to the database, and increase the speed of our web app overall
- The problem is that as a placeholder, it doesn't have any kind of actual data bound to it, so in order to resolve a proxy, we still need to query the database if we find that we need that data later on

#### What is lazy initialization? Why do I want it? What are some problems?
- Lazy initialization relies on proxies, and allows us to only get some of the data we need, and any nested data is replaced with proxies, which has the problems outlined above

#### What is the difference between lazy and eager fetching?
- Eager fetching goes as deep into nested fields as it can, which can result in problems of its own

#### What are circular relationships? How can we fix them?
- With eager fetching, we can get into circular relationships, where one object references another, which down the line has a nested object that was the original object, causing the whole fetching process to circle back around
  - To fix this, we create a filter and reference it in our web configuration file

### Caching
- [What are the states of an object in Hibernate?](#what-are-the-states-of-an-object-in-hibernate)
- [What is a cache? Does Hibernate have caches?](#what-is-a-cache-does-hibernate-have-caches)
- [How do L1 caches work? L2?](#how-do-l1-caches-work-l2)

#### What are the states of an object in Hibernate?
- Transient - The data is not associated with a hibernate session
- Persistent - The data is associated with a hibernate session
- Detached - The object is not connected to the database anymore, and anything that was not persistent is garbage collected

#### What is a cache? Does Hibernate have caches?
- A cache is a store of data for frequent use
- Hibernate has 2 caches: L1 and L2 caches

#### How do L1 caches work? L2?
- L1 caches are used by individual sessions for keeping track of data
- The L2 cache (singular) is for all of the most frequent data used by all of the L1 caches

### Queries
- [How can I make a query in Hibernate?](#how-can-i-make-a-query-in-hibernate)
- [What is HQL? How does it differ from SQL?](#what-is-hql-how-does-it-differ-from-sql)
- [Can I make SQL queries in Hibernate?](#can-i-make-sql-queries-in-hibernate)
- [What are some of the benefits/restrictions of Criterias?](#what-are-some-of-the-benefitsrestrictions-of-criterias)

#### How can I make a query in Hibernate?
- By using the `@Query` annotation
  - `@Query("FROM MyObject WHERE myobject_id = :id;`)

#### What is HQL? How does it differ from SQL?
- HQL stands for Hibernate Query Language, and it uses what looks like SQL to run queries, but having it go through Hibernate instead, which means that the query listed above actually runs the query `SELECT * FROM myobject WHERE myobject_id = [insert_id_here];`
  - It will also get any additional things it needs from nested items

#### Can I make SQL queries in Hibernate?
- By using a session and [creating an **SQLQuery**](https://www.tutorialspoint.com/hibernate/hibernate_native_sql.htm) object using `pubcic SQLQuery createSQLQuery(String sqlQuery)`

#### What are some of the benefits/restrictions of Criterias?
- They are good for creating a set of criteria where there are a variable number of conditions placed on the result set
  - You can go into as much or as little detail as you want to, specifying the tiniest details
- Because you can specify tiny details, that means that they are specific to only one thing, and each Criteria can only be used for one thing
  - Many more have to be made for different things, which can result in a lot of extra coding

## Spring, Spring Boot/Web MVC/Data, Validation and Exceptions
- [Spring](#spring)
- [Spring Boot](#spring-boot)
- [Spring Web MVC](#spring-web-mvc)
- [Spring Data](#spring-data)
- [Validation and Exceptions](#validation-and-exceptions)

### Spring
- [What is Spring? Why use it?](#what-is-spring-why-use-it)
- [What is IoC? Its upsides and downsides?](#what-is-ioc-its-upsides-and-downsides)
- [What is DI? What is its purpose?](#what-is-DI-what-is-its-purpose)
- [What is a Spring Bean? How can I define one?](#what-is-a-spring-bean-how-can-i-define-one)
- [Can I use Spring for non-web applications?](#can-i-use-spring-for-non-web-applications)

#### What is Spring? Why use it?
- Spring is a framework that provides inversion of control through dependency injection to give easily built structure of enterprise-level applications.

#### What is IoC? Its upsides and downsides?
- We give up control to Spring so Spring can manage our application
- We do this for...
  - Easier development
  - Loosely coupled code
- Downsides are...
  - We have less control
  - More complicated debugging
  - A lot more interfaces
  - It's more complicated

#### What is DI? What is its purpose?
- DI stands for Dependency Injection
  - Some thing that Spring (in this case) gives to objects to manage
- It's there so that we can have Spring manage our code for us

#### What is a Spring Bean? How can I define one?
- A spring bean is any object we give to Spring to manage
- We can define one with (among others)...
  - @Entity
  - @Component
  - @Service
  - @Repository
  - @Controller
  - @RestController

#### Can I use Spring for non-web applications?
- Yes

### Spring Boot
- [What is the BeanFactory? ApplicationContext? How do they relate?](#what-is-the-beanfactory-applicationcontext-how-do-they-relate)
- [WHAT IS THE SPRING BEAN LIFECYCLE???](#what-is-the-spring-bean-lifecycle)
- [What is Spring Boot? Why do we use it?](#what-is-spring-boot-why-do-we-use-it)
- [What are the stereotype annotations of Spring?](#what-are-the-stereotype-annotations-of-spring)
- [What does @Autowired do?](#what-does-autowired-do)

#### What is the BeanFactory? ApplicationContext? How do they relate?
- The BeanFactory is the root interface for accessing a Spring Bean container, and is where beans are made
- ApplicationContext is what provides configuration for the application
- Both are part of the Spring Bean lifecycle

#### WHAT IS THE SPRING BEAN LIFECYCLE???
- The bean is made
- Wiring and initial info
- (Set Bean name aware)
- (Set BeanFactory aware)
- (Set ApplicationContext aware)
- BeforeInitializationBeanPostProcessor
- InitializingBeans
- CustomInit @PostConstruct or in XML
- AfterInitializationBeanPostProcessor
- inUse...
- DisposableBeans
- CustomDestroy @PreDestroy or in XML
- ... Then the bean is destroyed

#### What is Spring Boot? Why do we use it?
- Spring boot is an opinionated configuration of Spring
- It has certain opinions on how we want to use Spring (that are usually correct)
  - I never want to use XML, I will use annotations for everything
  - I provide an embedded Tomcat server
  - Provides a YML file for configuring Spring Boot

#### What are the stereotype annotations of Spring?
- @Component
- @Service
- @Repository
- @Controller
- @RestController
- All are components in one form or another

#### What does @Autowired do?
- Tells Spring that I want to use a service in my code and to figure out how to please figure out how to get it wired in

### Spring Web MVC
- [How does the Java EE architecture with servlets work?](#how-does-the-java-ee-architecture-with-servlets-work)
- [How does Web MVC's architecture work? How does it compare to the traditional Java EE?](#how-does-web-mvcs-architecture-work-how-does-it-compare-to-the-traditional-java-ee)
- [How does Web MVC know which controllers to use?](#how-does-web-mvc-know-which-controllers-to-use)
- [How do I set up endpoints using Spring?](#how-do-i-set-up-endpoints-using-spring)

#### How does the Java EE architecture with servlets work?
- Tomcat attached to web container
- Web container has servlets
- Tomcat talks to each servlet
- Each servlet talks to deployment_dispatcher.xml

#### How does Web MVC's architecture work? How does it compare to the traditional Java EE?
- Tomcat attached to web container
- Web container has dispatcher services
- 

#### How does Web MVC know which controllers to use?
- Initially, because of HandlerMapping
  - Anything that has the @Controller or @RestController annotation is internally stored and marked as a controller for Web MVC to use
  - Mapping methods are used to say which type of request and which URI should be handled by which method using annotations
  - @RequestMapping - catch-all or specified using `method = [method]` at a URI
  - @GetMapping - GET request at a URI
  - @PostMapping - POST request at a URI
  - etc.

#### How do I set up endpoints using Spring?
- Using mapping annotations as listed above

### Spring Data
- [How does Spring Data work? What do I have to do to implement my DAOs?](#how-does-spring-data-work-what-do-i-have-to-do-to-implement-my-daos)
- [What methods are provided for me using Spring Data?](#what-methods-are-provided-for-me-using-spring-data)
- [How can I write new methods for Spring Data queries?](#how-can-i-write-new-methods-for-spring-data-queries)
- [How do I use Transactions with Spring Data?](#how-do-i-use-transactions-with-spring-data)

#### How does Spring Data work? What do I have to do to implement my DAOs?
- By building queries for us (probably better than we could do ourselves) using repositories (DAOs), services and implementations
- In order to use a DAO, it's as easy as writing an interface that extends `JpaRepository<MyObject, Integer>`

#### What methods are provided for me using Spring Data?
- `save()`
- `delete()`
- `findAll()`
- `get()`
- `findById()`

#### How can I write new methods for Spring Data queries?
- Using the `@Query` annotation above a method

#### How do I use Transactions with Spring Data?
- By using a transaction created from a session using `session.beginTransaction()` or
- By using the `@Transactional` annotation above either a class or a method
  - The difference here is that if the annotation is above a class that it has a cascading effect and applies it to every subsequent method within the class whereas if you want to use only certain methods within the class, you can use the `@Transactional` annotation to mark that they should be used as transactions

### Validation and Exceptions
- [How can I validate data sent to me? What are some annotations for validation?](#how-can-i-validate-data-sent-to-me-what-are-some-annotations-for-validation)
- [How do I do exception handling in Web MVC?](#how-do-i-do-exception-handling-in-web-mvc)
- [What kinds of exceptions should my custom exceptions be?](#what-kinds-of-exceptions-should-my-custom-exceptions-be)
- [What is Swagger? Why use it? Is it for testing?](#what-is-swagger-why-use-it-is-it-for-testing)

#### How can I validate data sent to me? What are some annotations for validation?
- By using annotations (this is getting redundant)
- `@NotNull` - the property cannot be null (duh)
- `@AssertTrue` - asserts that the property is true
- `@Min` - set minimum value
- `@Max` - set maximum value
- `@Email` - validates that the property is in email format
- `@NotEmpty` - validates that the property isn't empty or null

#### How do I do exception handling in Web MVC?
- By using a class with the annotation `@ControllerAdvice` to mark the class of the exception handler class itself (api exception handler), then by using `@ExceptionHandler` for each individual exception handler
  - Each exception handler has a value for a throwable class, and the method outlines what to do in the instance that the exception is actually thrown

#### What kinds of exceptions should my custom exceptions be?
- They _should_ be RuntimeExceptions, although there's technically nothing that prevents you from doing any kind of exception you wish

#### What is Swagger? Why use it? Is it for testing?
- Swagger is freaking amazing is what it is.
- Swagger is an awesome UI tool for documenting, visualizing and testing*** out an API
  - NOTE: THIS IS NOT UNIT TESTING
- We use it mainly so we have a convenient interface for the reasons listed above
- We do NOT use it for true testing, because the "testing" listed above is not unit testing.
