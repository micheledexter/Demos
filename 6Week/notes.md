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
- [Hibernate](#https://hibernate.org/) is an ORM
- It was originally created by Gavin King, who hated how much SQL he had to write, so he single-handedly wrote Hibernate to start doing the work for himself as well as other developers who would appreciate it

#### What is JPA?
- JPA stands for Java Persistence API
- It is the standard for ORMs to follow
  - If we explain this in programming terms, then a JPA is an interface (because it doesn't actually have any concrete implementations), and Hibernate would be an implementation of that interface
  - Hibernate is called a "JPA Provider"

#### What are the interfaces of Hibernate?
- [@Criteria](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Criteria.html)
  - `Criteria` is a simplified API for retrieving entities by composing `Criterion` objects
- [@EntityNameResolver](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/EntityNameResolver.html)
  - Contract for resolving an entity-name from a given entity instance
- [@Filter](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Filter.html)
  - Type definition of Filter
- [@Interceptor](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Interceptor.html)
  - Allows user code to inspect and/or change property values.
- [@Query](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Query.html)
  - An object-oriented representation of a Hibernate query.
- [@ScrollableResults](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/ScrollableResults.html)
  - A result iterator that allows moving around within the results by arbitrary increments.
- [@Session](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Session.html)
  - The main runtime interface between a Java application and Hibernate.
- [@SessionFactory](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/SessionFactory.html)
  - Creates `Session`s.
- [@SQLQuery](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/SQLQuery.html)
  - Allows the user to declare the types and select list injection points of all entities returned by the query.
- [@StatelessSession](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/StatelessSession.html)
  - A command-oriented API for performing bulk operations against a database.
  - A stateless session does not implement a first-level cache nor interact with any second-level cache, nor does it implement transactional write-behind or automatic dirty checking, nor do operations cascade to associated instances.
- [@Transaction](#https://docs.jboss.org/hibernate/orm/3.2/api/org/hibernate/Transaction.html)
  - Allows the application to define units of work, while maintaining abstraction from the underlying transaction implementation.

#### How do I configure Hibernate?

#### How can I register an object with Hibernate? (two ways)

### Annotations
- [What are the required annotations for a model in Hibernate?](#what-are-the-required-annotations-for-a-model-in-hibernate)
- [What are some other annotations you've seen? What do they do?](#what-are-some-other-annotations-youve-seen-what-do-they-do)
- [How do I specify multiplicity with Hibernate?](#how-do-i-specify-multiplicity-with-hibernate)
- [What does @Transient do? ----- Look it up yourself](#what-does-transient-do-------look-it-up-yourself)

#### What are the required annotations for a model in Hibernate?

#### What are some other annotations you've seen? What do they do?

#### How do I specify multiplicity with Hibernate?

#### What does @Transient do? ----- Look it up yourself

### Database Management
- [What is a SessionFactory? What is connection pooling? Does Hibernate use connection pooling?](#what-is-a-session-factory-what-is-connection-pooling-does-hibernate-use-connection-pooling)
- [What is a Session? What are some things it provides?](#what-is-a-session-what-are-some-things-it-provides)
- [What is a Transaction? How do I get one, how do I use it?](#what-is-a-transaction-how-do-I-get-one-how-do-i-use-it)
- [What is a Query? How do I get one, how do I use it?](#what-is-a-query-how-do-i-get-one-how-do-i-use-it)
- [What is Criteria? How do I get one, how do I use it?](#what-is-criteria-how-do-i-get-one-how-do-i-use-it)

#### What is a SessionFactory? What is connection pooling? Does Hibernate use connection pooling?

#### What is a Session? What are some things it provides?

#### What is a Transaction? How do I get one, how do I use it?

#### What is a Query? How do I get one, how do I use it?

#### What is Criteria? How do I get one, how do I use it?

### CRUD Methods
- [What are all the CRUD methods provided by Session?](#what-are-all-the-crud-methods-provided-by-session)
- [Create-?](#create-)
- [Read-?](#read-)
- [Update-?](#update-)
- [Delete-?](#delete-)

#### What are all the CRUD methods provided by Session?

#### Create-?

#### Read-?

#### Update-?

#### Delete-?

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

#### What is lazy initialization? Why do I want it? What are some problems?

#### What is the difference between lazy and eager fetching?

#### What are circular relationships? How can we fix them?

### Caching
- [What are the states of an object in Hibernate?](#what-are-the-states-of-an-object-in-hibernate)
- [What is a cache? Does Hibernate have caches?](#what-is-a-cache-does-hibernate-have-caches)
- [How do L1 caches work? L2?](#how-do-l1-caches-work-l2)

#### What are the states of an object in Hibernate?

#### What is a cache? Does Hibernate have caches?

#### How do L1 caches work? L2?

### Queries
- [How can I make a query in Hibernate?](#how-can-i-make-a-query-in-hibernate)
- [What is HQL? How does it differ from SQL?](#what-is-hql-how-does-it-differ-from-sql)
- [Can I make SQL queries in Hibernate?](#can-i-make-sql-queries-in-hibernate)
- [What are some of the benefits/restrictions of Criterias?](#what-are-some-of-the-benefitsrestrictions-of-criterias)

#### How can I make a query in Hibernate?

#### What is HQL? How does it differ from SQL?

#### Can I make SQL queries in Hibernate?

#### What are some of the benefits/restrictions of Criterias?

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

#### What is IoC? Its upsides and downsides?

#### What is DI? What is its purpose?

#### What is a Spring Bean? How can I define one?

#### Can I use Spring for non-web applications?

### Spring Boot
- [What is the BeanFactory? ApplicationContext? How do they relate?](#what-is-the-beanfactory-applicationcontext-how-do-they-relate)
- [WHAT IS THE SPRING BEAN LIFECYCLE???](#what-is-the-spring-bean-lifecycle)
- [What is Spring Boot? Why do we use it?](#what-is-spring-boot-why-do-we-use-it)
- [What are the stereotype annotations of Spring?](#what-are-the-stereotype-annotations-of-spring)
- [What does @Autowired do?](#what-does-autowired-do)

#### What is the BeanFactory? ApplicationContext? How do they relate?

#### WHAT IS THE SPRING BEAN LIFECYCLE???

#### What is Spring Boot? Why do we use it?

#### What are the stereotype annotations of Spring?

#### What does @Autowired do?

### Spring Web MVC
- [How does the Java EE architecture with servlets work?](#how-does-the-java-ee-architecture-with-servlets-work)
- [How does Web MVC's architecture work? How does it compare to the traditional Java EE?](#how-does-web-mvcs-architecture-work-how-does-it-compare-to-the-traditional-java-ee)
- [How does Web MVC know which controllers to use?](#how-does-web-mvc-know-which-controllers-to-use)
- [How do I set up endpoints using Spring?](#how-do-i-set-up-endpoints-using-spring)

#### How does the Java EE architecture with servlets work?

#### How does Web MVC's architecture work? How does it compare to the traditional Java EE?

#### How does Web MVC know which controllers to use?

#### How do I set up endpoints using Spring?

### Spring Data
- [How does Spring Data work? What do I have to do to implement my DAOs?](#how-does-spring-data-work-what-do-i-have-to-do-to-implement-my-daos)
- [What methods are provided for me using Spring Data?](#what-methods-are-provided-for-me-using-spring-data)
- [How can I write new methods for Spring Data queries?](#how-can-i-write-new-methods-for-spring-data-queries)
- [How do I use Transactions with Spring Data?](#how-do-i-use-transactions-with-spring-data)

#### How does Spring Data work? What do I have to do to implement my DAOs?

#### What methods are provided for me using Spring Data?

#### How can I write new methods for Spring Data queries?

#### How do I use Transactions with Spring Data?

### Validation and Exceptions
- [How can I validate data sent to me? What are some annotations for validation?](#how-can-i-validate-data-sent-to-me-what-are-some-annotations-for-validation)
- [How do I do exception handling in Web MVC?](#how-do-i-do-exception-handling-in-web-mvc)
- [What kinds of exceptions should my custom exceptions be?](#what-kinds-of-exceptions-should-my-custom-exceptions-be)
- [What is Swagger? Why use it? Is it for testing?](#what-is-swagger-why-use-it-is-it-for-testing)

#### How can I validate data sent to me? What are some annotations for validation?

#### How do I do exception handling in Web MVC?

#### What kinds of exceptions should my custom exceptions be?

#### What is Swagger? Why use it? Is it for testing?