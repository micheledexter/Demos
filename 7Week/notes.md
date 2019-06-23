# Week 7 Study Questions
These questions relate to the following topics:
- [Aspect Oriented Programming and Aspects](#aspect-oriented-programming-and-aspects)
- [Microservices, Spring Cloud and Interservice Communication](#microservices-spring-cloud-and-interservice-communication)
- [BASE, Docker and Container Orchestration](#base-docker-and-container-orchestration)

## Aspect Oriented Programming and Aspects
- [Aspect Oriented Programming](#aspect-oriented-programming)
- [Aspects](#aspects)

### Aspect Oriented Programming

- [What is AOP? Why would we want to use it?](#what-is-aop-why-would-we-want-to-use-it)
- [What is an Aspect?](#what-is-an-aspect)
- [What is a pointcut?](#what-is-a-pointcut)
- [What is a Join Point?](#what-is-a-join-point)
- [What is Advice?](#what-is-advice)
- [Types of Advice?](#types-of-advice)

#### What is AOP? Why would we want to use it?
- AOP stands for **_Aspect Oriented Programming_** and is used for separating cross-cutting concerns into more modular and manageable pieces
  - If I have something like authorization/authentication which will be used all over the app, then AOP is what I would do to address those concerns, the same goes for other things like caches or logging
  - Anything that's used significantly throughout my application and will be needing some kind of "middleware" would fall into this category

#### What is an Aspect?
- An aspect is a cross-cutting concern
- This class uses the `@Aspect` and `@Component` annotations
- The Aspect would be the class in its entirety
  - Authentication/authorization
  - Caching
  - Logging

#### What is a pointcut?
- An expression that matches potential join points
  - You're (join) point cutting, I honestly can't think of any other reason why it would be called a "pointcut" other than you're cutting out the join points you want to use
  - Example: `"execution(com.test.sample.targetService.save(..))"`

#### What is a Join Point?
- Any location we can weave in code
  - Methods are all potential join points, so any method
  - Example: `public void myMethod() {}` is a join point
    - The method is in some random file, no necessarily in an Aspect, although technically those could be join points too

#### What is Advice?
- Advice is the solution to the problem
  - By "solution", we mean the literal code we are going to weave in
  - Example:
    ```java
    @Before("execution(com.test.sample.targetService.save(..))")
    public void logBefore(JoinPoint jPoint) {
        System.out.println("about to call method");
    }
    ```

#### Types of Advice?
- `@Before`
  - Advice that executes before a join point, but which does not have the ability to prevent execution flow proceeding to the join point
- `@AfterReturning`
  - Advice to be executed after a join point completes normally: for example, if a method returns without throwing an exception
- `@AfterThrowing`
  - Advice to be executed if a method exits by throwing an exception
- `@After`
  - Advice to be executed regardless of the means by which a join point exits (normal or exceptional return)
- `@Around`
  - Advice that surrounds a join point such as a method invocation

### Aspects

- [What is the required parameter of Around Advice?](#what-is-the-required-parameter-of-around-advice)
- [What is code weaving? A proxy?](#what-is-code-weaving-a-proxy)
- [What is the proceed method? How can we use it?](#what-is-the-proceed-method-how-can-we-use-it)
- [What does a pointcut expression look like?](#what-does-a-pointcut-expression-look-like)

#### What is the required parameter of Around Advice?
- It requires a `ProceedingJoinPoint` instead of a `JoinPoint` because it decides whether or not to even proceed or not
  - Example:
    ```java
    @Around("execution(com.test.sample.TargetService.save(..))")
    public void logAround(ProceedingJoinPoint jPoint) throws Throwable {
        System.out.println("about to call method");
        jPoint.proceed();
        System.out.println("method completed");
    }
    ```

#### What is code weaving? A proxy?

#### What is the proceed method? How can we use it?

#### What does a pointcut expression look like?

## Microservices, Spring Cloud and Interservice Communication
- [Microservices](#microservices)
- [Spring Cloud](#spring-cloud)
- [Interservice Communication](#interservice-communication)

### Microservices

- [What is Microservices? How does it compare to Web services?](#what-is-microservices-how-deos-it-compare-to-web-services)
- [What are the benefits of Microservices, the downsides?](#what-are-the-benefits-of-microservices-the-downsides)
- [What is service registry? Why does it matter?](#what-is-service-registry-why-does-it-matter)
- [What is a gateway service? Why does it matter?](#what-is-a-gateway-service-why-does-it-matter)
- [What is cloud config?  Why use it?](#what-is-cloud-config-why-use-it)
- [What are spring boot actuators? Some examples?](#what-are-spring-boot-actuators-some-examples)

#### What is Microservices? How does it compare to Web services?
- Microservices is an architecture where you break down your larger components into smaller more manageable ones (ie. not monolithic)

#### What are the benefits of Microservices, the downsides?
- Benefits
  - No single point of failure
  - More maintainable
  - Testing/debugging is easier
  - Fewer scaling problems
- Downsides
  - We lose referential integrity
  - Initial cost is higher

#### What is service registry? Why does it matter?
- The service registry keeps track of services
- We want to know which services are part of our system, and having one location to keep track of them we are able to know which services we have

#### What is a gateway service? Why does it matter?
- The gateway service keeps track of where to go (kinda like it sounds)
- We want to tell traffic exactly where it needs to go to reach our services if they need to have incoming traffic

#### What is cloud config?  Why use it?
- Spring Cloud Config (-_-)
- Spring Cloud Config provides server and client-side support for externalized configuration in a distributed system. With the Config Server you have a central place to manage external properties for applications across all environments
- We are able to have all of our configuration managed using a git repository

#### What are spring boot actuators? Some examples?
- An actuator is an endpoint that provides some built-in function just by accessing it
  - Mainly they [expose operational information about the running application](https://www.baeldung.com/spring-boot-actuators)
- Examples
  - /health – Shows application health information (a simple ‘status’ when accessed over an unauthenticated connection or full message details when authenticated); it’s not sensitive by default
  - /info – Displays arbitrary application info; not sensitive by default
  - /metrics – Shows ‘metrics’ information for the current application; it’s also sensitive by default
  - /trace – Displays trace information (by default the last few HTTP requests)


### Spring Cloud

- [How can we make a Eureka Server? What sort of config do we need?](#how-can-we-make-a-eureka-server-what-sort-of-config-do-we-need)
- [How can we make a Zuul Gateway Server? What sort of config do we need to do?](#how-can-we-make-a-zuul-gateway-server-what-sort-of-config-do-we-need-to-do)
- [What is ribbon? How does it fit in to our ecosystem?](#what-is-ribbon-how-does-it-fit-in-our-ecosystem)
- [How can we make a cloud config server? How do we cofigure it?](#how-can-we-make-a-cloud-config-server-how-do-we-configure-it)

#### How can we make a Eureka Server? What sort of config do we need?
- Add it as a dependency
- Use the `@EnableEurekaServer` annotation
- Set up "properties.yml" file
  ```yml
  server:
  port: 8088
  
  eureka:
    client:
      register-with-eureka: false
      fetch-registry: false
      service-url:
        defaultZone: http://localhost:8088/eureka
  ```
- Google anything you don't know

#### How can we make a Zuul Gateway Server? What sort of config do we need to do?
- Add it as a dependency
- Use the `@EnableZuulProxy` annotation
- Set up "properties.yml" file
  ```yml
  server:
  port: 8085
  
  spring:
    application:
      name: gateway-service
      
      
  eureka:
    client:
      service-url:
        defaultZone: http://mypublicdns.com:8088/eureka
        
    instance:
      lease-expiration-duration-in-seconds: 90
      lease-renewal-interval-in-seconds: 30
      
  zuul:
    routes:
      users:
        path: /name/**
        service-id: name-service
        strip-prefix: false
  ```

#### What is ribbon? How does it fit in to our ecosystem?
- Ribbon is a load balancer
- It decides where traffic should go so that no one server/service goes down, or so that if a server/service goes down, it can redirect traffic to working servers and services

#### How can we make a cloud config server? How do we cofigure it?
- Set up a git repository for all of the configuration files
- Tell services to connect to cloud config to download all of their configuration rules
- Convert the "properties.yml" file to "bootstrap.yml" because it runs sooner
- Google the rest (because lets be honest, if you need to do _anything_ and you don't know how, you google it.)

### Interservice Communication

- [How can I have my services talk to each other?](#how-can-i-have-my-services-talk-to-each-other)
- [What tools do we use to facilitate that communication?](#what-tools-do-we-use-to-facilitate-that-communication)
- [How can I break communication dependencies?](#how-can-i-break-communication-dependencies)
- [What annotations do I need for these things?](#what-annotations-do-i-need-for-these-things)

## BASE, Docker and Container Orchestration
- [BASE](#base)
- [Docker and Container Orchestration](#docker-and-container-orchestration)

### BASE

- [What is BASE? Do we still have ACID?](#what-is-base-do-we-still-have-acid)
- [How can we go about implementing BASE?](#how-can-we-go-about-implementing-base)
- [How can I use Messaging Queues to set up eventual consistancy?](#how-can-i-use-messaging-queues-to-set-up-eventual-consistency)

#### What is BASE? Do we still have ACID?
- Basic Availability
  - No guarantees on complete data or most up-to-date data, you will get some data though
- Soft State
  - Even if no transactions are taking place, DB might still be changing
- Eventual Consistency
  - Database might not be consistent currently, but always moving toward consistency
-No, with BASE you can't have ACID, just like in chemistry (programmers... seriously...)

#### How can we go about implementing BASE?
- By using some sort of queueing system so we can keep track of data in a more "I'll get to it when I have the time" way

#### How can I use Messaging Queues to set up eventual consistancy?
- By having a queue for each service with a deadletter queue for any messages that would otherwise crash a service or bring it to a halt by repeatedly trying to work them out
- After having a queue for each one, each service can work on its queue and process requests as they come
- We used SNS (Simple Notification Service) and SQS (Simple Queue Service) as an AWS example of this

### Docker and Container Orchestration

- [What is Docker? Why use it?](#what-is-docker-why-use-it)
- [What is an Image? How do I make one?](#what-is-an-image-how-do-i-make-one)
- [What is a container? How do I make one?](#what-is-a-container-how-do-i-make-one)
- [What goes in a Dockerfile?](#what-goes-in-a-dockerfile)
- [What are some commands used with docker?](#what-are-some-commands-used-with-docker)
- [What is orchestration?](#what-is-orchestration)

#### What is Docker? Why use it?
- Docker is containerization of services
- We use it so that we can set up a service virtually anywhere (as long as it runs Docker) and we can set up rules and configuration files quickly and easily

#### What is an Image? How do I make one?
- Images are akin to virtual machines in that they are unaware of the world around them and they consume the parent OS's resources
- They also actually run a partial OS themselves, which is that image file
- The Dockerfile is used to configure and build image files, and only needs to be run once in order to create an image

#### What is a container? How do I make one?
- By "spinning up" (running) an image
  - Such as by running `docker run -p 8080:8080 --name my-app`
    - This will run it and assign internal port 8080 to external port 8080 and name the container "my-app"

#### What goes in a Dockerfile?
- At the minimum, there needs to be a `FROM` command
- Basically, you use different commands to tell Docker how you want the image to be built and configured, and how it will be run when you spin it up.

#### What are some commands used with docker?
- `FROM` - give the base image file
- `COPY` - to copy in files
- `EXPOSE` - to open up ports on the docker network
- `ARG` - to get build arguments
- `ENV` - environment variables when container is running
- `ENTRY POINT/CMD` - what the image does when the container is started

#### What is orchestration?
- Container orchestration (-_-)
- It's how we manage containers and which containers run where
  - It's like load balancing but for containers, basically
- There are some tools we can use to help us with this
  - Docker Swarm
  - Kubernetes
  - Amazon ECS (Elastic Container Service)