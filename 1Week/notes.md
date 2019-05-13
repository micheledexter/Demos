# Week 1 Study Questions
These questions relate to the following topics:
- [Core JS](#core-js)
- [TypeScript](#typescript)
- [Web Design](#web-design)
- [Express](#express)

Each question will have answers in bullet point format, with possible nested items for more specific examples.

## Core JS
[Why should we use JavaScript? (What it good/bad at?)](#why-should-we-use-javascript-what-is-it-goodbad-at)
[How do we run JavaScript? Is it compiled?](#how-do-we-run-javascript-is-it-compiled)
[What is ES6?](#what-is-es6)
[What does it stand for?](#what-does-it-stand-for)
[What does it mean for JavaScript?](#what-does-it-mean-for-javascript)
[What is OOP?](#what-is-oop)
[What are the 4 pillars?](#what-are-the-4-pillars)
[Examples in JavaScript/Typescript](#examples-in-javascripttypescript)
[What is Node.js? What is it used for?](#what-is-nodejs-what-is-it-used-for)
[What are the pieces of Node.js?](#what-are-the-pieces-of-nodejs)
[What is REPL?](#what-is-repl)
[What is a garbage collector?](#what-is-a-garbage-collector)
[What is its role?](#what-is-its-role)
[How do we know what to collect?](#how-do-we-know-what-to-collect)
[What are naming conventions?](#what-are-naming-conventions)
[How do we name variables/functions/classes/interfaces?](#how-do-we-name-variablesfunctionsclassesinterfaces)
[How do we make a variable in JavaScript?](#how-do-we-make-a-variable-in-javascript)
[What are the scopes of variables?](#what-are-the-scopes-of-variables)
[Which variables have which scopes?](#which-variables-have-which-scopes)
[What are the types of JavaScript?](#what-are-the-types-of-javascript)
[What are the differences between types for no value?](#what-are-the-differences-between-types-for-no-value)
[How do we make strings in JavaScript?](#how-do-we-make-strings-in-javascript)
[Which way should we generally use?](#which-way-should-we-generally-use)
[How do we declare a function in JavaScript?](#how-do-we-declare-a-function-in-javascript)
[How do function params work?](#how-do-function-params-work)
[What is pass by value? How does it work?](#what-is-pass-by-value-how-does-it-work)
[What is a callback function?](#what-is-a-callback-function)
[Difference between synchronous and asynchronous?](#difference-between-synchronous-and-asynchronous)
[What is functional programming?](#what-is-functional-programming)
[What are first class functions, pure functions?](#what-are-first-class-functions-pure-functions)
[Why do we want immutable data?](#why-do-we-want-immutable-data)
[How do we do flow control in JavaScript?](#how-do-we-do-flow-control-in-javascript)
[What operators do our expressions have?](#what-operators-do-our-expressions-have)
[==vs===](#-vs-)
[What are truthy falsy values?](#what-are-truthy-falsy-values)
[What are short circuit operators?](#what-are-short-circuit-operators)
[What are the guard and default operators?](#what-are-the-guard-and-default-operators)
[How can we make objects in JavaScript?](#how-can-we-make-objects-in-javascript)
[How to add fields after they exist?](#how-to-add-fields-after-they-exist)
[What is prototypical inheritance?](#what-is-prototypical-inheritance)
[How do arrays work in JavaScript?](#how-do-arrays-work-in-javascript)
[What are methods we use with arrays?](#what-are-methods-we-use-with-arrays)
[How does array sizing work?](#how-does-array-sizing-work)
[What is the spread operator? Why use it?](#what-is-the-spread-operator-why-use-it)
[What is destructuring? Why use it?](#what-is-destructuring-why-use-it)
[What is a closure in JavaScript?](#what-is-a-closure-in-javascript)
[What are the 4 steps to get a closure?](#what-are-the-4-steps-to-get-a-closure)
[How do we make a new error in JavaScript?](#how-do-we-make-a-new-error-in-javascript)
[How do we handle an error in JavaScript?](#how-do-we-handle-an-error-in-javascript)
[Do we need a catch? A finally?](#do-we-need-a-catch-a-finally)
[What are the pieces that give JavaScript its asynchronous nature?](#what-are-the-pieces-that-give-javascript-its-asynchronous-nature)
[How do those pieces work together?](#how-do-those-pieces-work-together)
[Do we have multithreading in JavaScript?](#do-we-have-multithreading-in-javascript)

### Why should we use JavaScript? (What is it good/bad at?)
- JS is good at event-based programming
  - Think of the stack/heap, C++ API/Web API, callback queue, and event loop 
- Live development of libraries and frameworks
  - Development goes into effect immediately and doesn't require compilation
- Conisistent front-end and back-end languages
  - JS can be used from front- to back-end (including servers with node.js)
- Convert projects and transpile projects to JS
  - Using things like TypeScript
- Supersets of JS are powerful and specific
  - Again, like TS
- It's good at handling any number of small tasks
  - Small functional programs and memory-light tasks are where JS excels
- It's bad with dealing with long running tasks
  - Long running tasks (like image processing) will bring JS to a halt

### How do we run JavaScript? Is it compiled?
- JavaScript is not compiled, it is interpreted right from the browser or from node.js using either Web APIs or C++ APIs.
  - We can transpile it, run it as a script, or run it directly from a supporting console

### What is ES6?
- The most supported "latest" release of JavaScript
  - ES6 feature highlights (for what we have learned):
    - `let` and `const` to replace `var`
    - Block scoping in addition to global and function scoping
    - Arrow functions (`() => {...}`)
    - String interpolation (backtick strings)
    - Classes
    - Destructuring

### What does it stand for?
- ECMAScript 6 (AKA ECMAScript 2015, AKA ECMA-262 6th Edition)
  - ECMA is the European Computer Manufacturing Association, and is one of the major standards setting associations in the world

### What does it mean for JavaScript?
- JS is much easier to use as an OOP language
  - Classes are now a built-in feature, for example
- It also is not supported by all browsers which means that ES5 is still important to know because of one browser (IE, of course)
  - Personal note: I wish that Microsoft would forcefully remove IE from every device.

### What is OOP?
- Object Oriented Programming

### What are the 4 pillars?
- Abstraction
  - Implementing a complex process in a simple manner
    - I don't need to know the inner workings of how my car works to use my car, I only want to know the how to do what I nead to
    - If I hit my gas pedal, it moves, if I hit my brake pedal, it slows down.
- Polymorphism
  - Allows one thing to be implemented in many ways
    - JS functions allow for any number of parameters to be inserted into their function calls, as well as default parameters to be set for missing parameters
    - Technically variables are polymorphic in their own right since they can take on any type at any time
- Inheritance
  - Inherit from general to specific
    - In classes, this can be done by using the `extends` keyword
    - This can also be done at any time using the `setPrototypeOf()` method available to all objects
- Encapsulation
  - Restricted control of data
    - A little more rare in JS
    - Possible to do using closures as long as there is an outer function with an inner function and inner variable that makes the inner function available after the outer function has expired

### Examples in JavaScript/TypeScript
- Variables
  - JS: `let var1 = 'variable';`
  - TS: `let var1: string = 'variable';`
- Functions
  - JS: `function repeatCharacter(count, char) {...};`
  - TS: `function repeatCharacter(count: number, char: string) {...};`

### What is Node.js? What is it used for?
- Node.js is a JavaScript runtime environment built on Google's V8 JS engine
- Node.js uses an event-driven, non-blocking I/O model, meaning that it can handle multiple events without having a single event stop the flow of other events
- It's used for real-time communications between the client and the servers
- It also allows fewer languages to be necessary in the tech stack, making it easier for programmers to program front or back

### What are the pieces of Node.js?
- Chrome's V8 engine
  - This contains the stack and the heap among other things
- C++ APIs
  - Event management
- Callback queue
  - Functions that run once the stack is empty
- Event loop
  - Runs once the stack is empty, pulling instructions from the callback queue

### What is a REPL?
- REPL is an acronym standing for "Read Evaluate Print Loop"
- REPL is a programming environment where user input is taken, read, evaluated, printed, then the process is repeated until the infinite loop is left
  - The event loop is a REPL, for instance, but in the browser, the devtools are also a REPL

### What is a garbage collector?
- A garbage collector is a memory management system

### What is its role?
- To remove objects (in the abstract sense, not literal) from memory

### How do we know what to collect?
- If there is no reference to it from any part of the *running* system, then it's garbage

### What are naming conventions?
- A way for us to standardize the way we name things across the software engineering industry for a greater understanding among professionals

### How do we name variables/functions/classes/interfaces?
- The naming conventions for JavaScript are as follows:
  - Variable and function names: camelCase
  - Constants: UNDERSCORED_UPPERCASE
  - Classes: PascalCase
  - Interfaces: IPascalCase
  - File names: lowercase-hyphens.plugin-ver.sion.filetype.js

### How do we make a variable in JavaScript?
- There are technically 4 ways, but really only two ways that should be followed anymore
  - Bad ways:
    - `x = 'hello world'; // it hurts to write this... this should never be done ever for any reason`
    - `var x = 'hello world'; // old way`
  - Good ways:
    - `let x = 'hello world'; // 'let' allows reassigning`
    - `const x = 'hello world'; // 'const' does not allow reassigning`

### What are the scopes of variables?
- Global - Any variable created outside of a function is considered a global variable
- Function - Any variable declared within a function, and is only accessible within that function
- Block - Any variable declared within curly braces (`{` and `}`) and is only accessible within that block

### Which variables have which scopes?
- `var` has global and function scopes
- `let` and `const` have global, function and block scopes

### What are the types of JavaScript?
- Object
- Boolean
- Function
- Number
- String
- Undefined
- Symbol (but we haven't learned this one yet)

### What are the differences between types for no value?
- Assuming we're talking about the truthy-falsiness of them, the onle ones that evaluate to `false` are:
  - `false`
  - `null`
  - `undefined`
  - `0`
  - `''`
  - `NaN`
- Everything else will be truthy (including `[]` and `{}`)

### How do we make strings in JavaScript?
- There are 3 different ways of making strings in JS:
  - `'single quotes'`
  - `"double quotes"`
  - `` `template literals` ``

### Which way should we generally use?
- For simple strings, single quotes are most preferred because we'll more likely need to escape double quotes than single quotes
- For dynamic strings, template literals because they allow us to insert our own code using `${...}`

### How do we declare a function in JavaScript?
- There are two ways to declare functions:
  - For global scope and `Object.prototype` properties: `function func1(param) {...}`
  - Everywhere else: `const func1 = (param) => {...}`

### Where can we declare a function in JavaScript?
- Almost literally anywhere.

### How do function params work?
- Function parameters can have a default set
  - Set defaults from right to left for missing parameters
  - If a parameter wasn't given, the default parameter is used
- If too many parameters are given, the additional parameters are ignored

### What is pass by value? How does it work?
- Pass by value means that the actual value located in memory is read and copied instead of the reference
  - This is how primitive types are read in JavaScript

### What is a callback function?
- A function that is waiting for an event before processing
  - We might use a callback function if we need to get a resource from a remote server

### Difference between synchronous and asynchronous?
- Synchronous means processes happen once at a time
  - JavaScript is, oddly enough, a synchronous language
- Asynchronous means multiple processes can happen concurrently
  - Node.js allows JS to be asynchronous by outsourcing some of the heavier processes to different servers that might handle the processing load better
  - Once a heavy process is complete, Node.js's API sends a callback to the callback queue and then the event loop takes care of it

### What is functional programming?
- Another programming paradigm that (like OOP) with certain pillars that hold it up, the ones we went over are:
  - First class functions
  - Pure functions

### What are first class functions, pure functions?
- First class functions are functions that can exist by themselves
  - That means they do not need to be a part of any class, interface or other structure
  - They are also allowed to be variables, parameters or return values of other functions
- Pure functions always give the same output for the same input
  - They have no side effects outside of their functions
  - Immutable data - "just give them a new copy"
    - Instead of mutating any data passed into them, they create a copy of the data and return the new copy (if that was the goal)

### Why do we want immutable data?
- Immutable data not only makes testing easier, but also makes troubleshooting easier
  - If something goes wrong with functional programming and data is immutable, then you can generally pinpoint the problem very quickly

### How do we do flow control in JavaScript?
- Using control flow statements
  - `if`, `for`, `while`, etc.

### What operators do our expressions have?
- `==`
- `===`
- `!=`
- `!==`
- `!`
- `>`
- `>=`
- `<`
- `<=`
- `&&`
- `||`

### `==` vs `===`
- `==` uses type coercion to see if the two operands are equal
  - `0 == '0'` evaluates to `true`
- `===` is strict equality and checks both value and type
  - `0 === '0'` evaluates to `false`

### What are truthy falsy values?
- "Truthy" values are any values that are not listed previously regarding this topic
  - *NOT* `false`, `0`, `''`, `undefined`, `NaN` and `null`

### What are short circuit operators?
- The `&&` and `||` operators, because once they find a value that determines their outcome, they stop further evaluation
  - For `&&`, once it finds a false value, it stops evaluation
  - For `||`, once it finds a true value, it stops evaluation

### What are the guard and default operators?
- The `&&` and `||` operators once again
  - The `&&` operator will will return the right-most operand that evaluates to `true` first
  - The `||` operator will skip the left operand if it evaluate to `false` and go to the right operand to return that value

### How can we make objects in JavaScript?
- There are 3 ways to make objects in JS:
  - Object literal
    - `let obja = {...};`
  - Function:
    - `function obja(name) {this.name = name}`
  - Class:
    - `Class Obja { constructor(name) {this.name = name} }`

### How to add fields after they exist?
- After an object exists, we can add fields by using a dot then the field name of our choice.
  - Example:
    - `let obj1 = {name: 'Penelope'};`
    - `obj1.age = 7; // Now, Penelope has a field called 'age' set to 7`

### What is prototypical inheritance?
- Everything in JavaScript is an object
- All objects have a prototype (the blueprint for the object)
- All objects can inherit from other objects
  - This is called the "prototype chain", with the top of the chain being the "super object", the one object that all objects inherit from
- An object can inherit from another object at any time by setting the prototype itself, or by using the `Object.setPrototypeOf()` method

### How do arrays work in JavaScript?
- Arrays are an object in JS, and are not restricted to a singular data type
- Arrays also do not have a defined length as they do in other languages, and can have values added and removed from the front, end and middle using push, pop, unshift, shift and splice
- Arrays can consist of any form of data type, including functions and arrays
  - Matrices aren't uncommon in programming, but further than a 3-dimensional array would be extremely rare

### What are methods we use with arrays?
- Some common methods that mutate the array are:
  - `.push(element)` - pushes the element onto the end of the array, returns `undefined`
  - `.pop()` - pops the last from the end of the array off, returning its value
  - `.unshift(element)` - unshifts the element onto the beginning of the array, returns `undefined`
  - `.shift()` - shifts the first element from the beginning of the array off, returning its value
  - `.splice(start, [deleteCount, [, item1[, item2[, ...]]]])` - Where to begin the change, how much to delete/replace/insert (more complicated than that, but that's the jist)

### How does array sizing work?
- Arrays in JS are dynamically sized
  - They can be changed at-will and have no set size when they are declared, like in other languages

### What is the spread operator? Why use it?
- It's this: `...`
- It's extremely useful because if we want to, for example, use an ambiguous amount of parameters stored in an object, we can use the spread operator instead of passing the object itself, then processing the object within the function
- We can also use it to set a large number of values from a template, and change only the values that we need to change depending on circumstances
  - This works well with React, something we'll be covering later

### What is destructuring? Why use it?
- It's a fast and easy way to extract one or more values from an object into variables
  - For example, assuming we have an object `obj1 = {name: 'Greg', age: 25, ateMyYogurt: true}` we could use destructuring to do the following: `let { name, age, ateMyYogurt } = obj1`
    - `name` would evaluate to `'Greg'`
    - `age` would evaluate to `25`
    - `ateMyYogurt` would evaluate to `true`

### What is a closure in JavaScript?
- It's how we can use encapsulation in JavaScript to protect access to a variable

### What are the 4 steps to get a closure?
- Start with a function
  - `function func1() {}`
- Create a variable in the function (you'll need this for later)
  - `function func1() {let var1 = 10;}`
- Return a function that accesses that variable in whatever way you need to (whether it's to set it or return it or anything else)
  - `function func1() {let var1 = 10; return () => var1}`
- Outside of all of the functions, reference the first function (the 'outer' function) in however you need to
  - `let get1 = func1();` then `get1();`

### How do we make a new error in JavaScript?
- Using the `throw` keyword
  - `throw 'Error: Please try again.';`

### How do we handle an error in JavaScript?
- Using `try`, `catch` and/or `finally`
  - `try {9 / 'a moose'} catch(e) {console.log(e)} finally {console.log('Process complete whether it worked or not')}`

### Do we need a catch? A finally?
- We don't need both, but we need at least one we can use any of the following:
  - A `try` and a `catch`
  - A `try` and a `finally`
  - A `try`, `catch` and a `finally`

### What are the pieces that give JaveScript its asynchronous nature?
- The APIs, callback queue and the event loop.

### How do those pieces work together?
- The APIs direct events to their appropriate locations, handle larger processes, and will place a callback in the callback queue if necessary
- The callback queue goes after the stack is complete, and is processed FIFO (first in first out)
- The event loop processes callbacks intermittently between other events on the page so that I/O is never blocked from the client

### Do we have multithreading in JavaScript?
- No. JavaScript is a single-threaded, synchronous language
  - The above pieces only mimic asynchronous qualities, and do not actually make it an asynchronous language


## TypeScript
[What is TypeScript? How does it relate to JavaScript?](#what-is-typescript-how-does-it-relate-to-javascript)
[How do we run TypeScript?](#how-do-we-run-typescript)
[What does TypeScript give us?](#what-does-typescript-give-us)
[What are the types in TypeScript? Why do we want them?](#what-are-the-types-in-typescript-why-do-we-want-them)
[Can variables have multiple types?](#can-variables-have-multiple-types)
[How do we make an interface?](#how-do-we-make-an-interface)
[How do we have a class use an interface?](#how-do-we-have-a-class-use-an-interface)
[What do interfaces give us? Why use them?](#what-do-interfaces-give-us-why-use-them)
[How do function params work in TypeScript?](#how-do-function-params-work-in-typescript)
[What are optional params? Default params?](#what-are-optional-params-default-params)
[What are the ES6 imports and exports?](#what-are-the-es6-imports-and-exports)
[What is the syntax?](#what-is-the-syntax)
[What is a default export?](#what-is-a-default-export)

### What is TypeScript? How does it relate to JavaScript?
- TypeScript is a superset of JavaScript developed by Microsoft that allows for developers to have more control over the structure, input, and output of their JavaScript code

### How do we run TypeScript?
- In our case, using node package manager
  - First we run `npm i typescript`
  - Then we run `npm i ts-node`
  - Finally, we run `ts-node [file-name].ts`

### What does TypeScript give us?
- Explicit types
  - We can use built-in or define our own using `enum`
- Type checking
  - Such as in `function(amount: number | string) {...}`
- Interfaces and abstract classes
  - We would rarely use abstract classes, but interfaces are a fantastic addition
- ES6 imports and exports
  - Because why weren't these there before?
- Access modifiers
  - Encapsulation

### What are the types in TypeScript? Why do we want them?
- The types are:
  - Object
  - Boolean
  - Number
  - String
  - Undefined
  - Void
  - Null
  - Never
  - Any
- Having defined types gives us greater control over what we are programming
  - There are almost never going to be times when you want to be changing your variable types, and this increases the integrity of your code

### Can variables have multiple types?
- Yes, by using the pipe (`|`) key between the types
  - `let var1: number | string = '1';`

### How do we make an interface?
- Everything within the interface is abstract, and doesn't need to be defined, that's for implementations of the interface to do
  - `interface IFace { name: string; }`

### How do we have a class use an interface?
- For an implementation of an interface, we *must* make sure that everything in the interface is defined, and that nothing remains abstract
  - `class ObjClass implements IFace { constructor(name: string) {this.name = name}}`

### What do interfaces give us? Why use them?
- Interfaces give us the abstraction pillar of OOP
- We use them to create a simple sets of instructions that have more complicated sets of code (and possibly different implementations) buried underneath
  - If we want to access a database, for instance, we may use one interface but different implementations based on which type of database we're working with (MySQL, PostgreSQL, MSSQL, etc.)

### How do function params work in TypeScript?
- Function parameters in TypeScript are type-specific and must be filled with the correct number of parameters
  - Exceptions to this include parameters denoted with a `?`, and at the end, a final array as a catch-all for any additional parameters

### What are optional params? Default params?
- Optional params are denoted by a `?`
  - `function name(first: string, last?: string) {...}`
- Default params are set using the `= [value]` directly in the function declaration
  - `function name(first: string = 'John', last: string = 'Doe') {...}`

### What are the ES6 imports and exports?
- The import and export statements for ES6

### What is the syntax?
- It's so basic that it's nearly English if you replace the syntax with packages and items
  - `import [default item] from '[package]';`
    - `import express from 'express';`
  - `import { [item] } from '[package]';`
    - `import { PI } from 'Math';`
  - `export [item];`
    - `export Connection;`
  - `export default [item];`
    - `export default ConnectionManager;`

### What is a default export?
- A default export is a package that will be the default exported item when an import statement is run without destructuring
  - `express` is a default export, for example


## Web Design
[What is the fullstack?](#what-is-the-fullstack)
[What does MVC stand for?](#what-does-mvc-stand-for)
[What does the design pattern look like?](#what-does-the-design-pattern-look-like)
[What is SOA? Why use it?](#what-is-soa-why-use-it)
[What are Web Services?](#what-are-web-services)
[What are the reasons we use Web Services?](#what-are-the-reasons-we-use-web-services)
[What ways do we implement Web Services?](#what-ways-do-we-implement-web-services)
[What is Rest?](#what-is-rest)
[What are its principles?](#what-are-its-principles)
[What is HTTP? What are the pieces of an HTTP request?](#what-is-http-what-are-the-pieces-of-an-http-request)
[What are the HTTP methods? Status codes?](#what-are-the-http-methods-status-codes)

### What is the fullstack?
- Every technology from the front to the back
  - A stack that is becoming more and more popular is React-Express-Node-PostgreSQL

### What does MVC stand for?
- Model View Controller

### What does the design pattern look like?
- The controller is really the important thing, it talks to both the view and the model to find out what models the view needs, then it sticks the models to the view and sends the view to the client
  - The MVC is a vague concept and everyone has their own understanding and way they see it (seriously, just google it), as long as you understand the ideas behind it, you're golden as Freddie

### What is SOA? Why use it?
- Service Oriented Architecture
- Without SOA technology would be so remarkably inconvenient that people would be reluctant to use it at all
  - Imagine you had to literally download and install new drivers before your cell phone could connect to a new cell tower, or worse: a different wifi hotspot. THAT is why we love SOA, SOA prevents us from cell phone hell (side note: I realize at this point I am getting sleepy)

### What are Web Services?
- SOA over the internet (roughly)

### What are the reasons we use Web Services?
- To standardize protocols to be technology independent
  - Basically, so that we can use things more conveniently from more places more easily

### What ways do we implement Web Services?
- The most common way lately is REST which uses HTTP (port 80) and HTTPS(port 443)
- SOAP (Simple Object Access Protocol) is another popular, but older method of implementing WS

### What is Rest?
- Representational State Transfer

### What are its principles?
- Error information has to be done with status codes
  - Errors cannot be handled with error objects, but instead are handled using standardized status codes
- Identify unique resources by URL
- Stateless: Server keeps track of no infromation about clients
  - Send all info over HTTP headers
    - JWT (Java Web Token)
- Client and server are separate entities
- Resources can be cacheable
  - This means less of a strain on the network for data

### What is HTTP? What are the pieces of an HTTP request?
- Request URL
- Request Method
- Request Body (sometimes)

### What are the HTTP Methods? Status codes?
- Methods (that we covered)
  - `GET`
  - `POST`
  - `PUT`
  - `PATCH`
  - `DELETE`
- Status codes (basics)
  - `100` - Continue
  - `200` - OK
  - `201` - Created
  - `202` - Accepted
  - `204` - No Content
  - `300` - Multiple Choice
  - `301` - Moved Permanently
  - `400` - Bad Request
  - `401` - Unauthorized
  - `403` - Forbidden
  - `404` - Not Found
  - `405` - Method Not Allowed
  - `408` - Request Timeout
  - `500` - Internal Server Error
  - `501` - Not Implemented
  - `502` - Bad Gateway
  - `503` - Service Unavailable
  - `504` - Gateway Timeout


## Express
[What is Express? Why do we use it?](#what-is-express-why-do-we-use-it)
[How do we make an endpoint?](#how-do-we-make-an-endpoint)
[How do we have Express get web traffic?](#how-do-we-have-express-get-web-traffic)
[What are Express routers? Why use them?](#what-are-express-routers-why-use-them)
[What is middleware?](#what-is-middleware)
[How do we turn JSON into JavaScript objects?](#how-do-we-turn-json-into-javascript-objects)
[How do we store data about a client connection?](#how-do-we-store-data-about-a-client-connection)
[Is this Restful?](#is-this-restful)
[What can we use to be Restful?](#what-can-we-use-to-be-restful)
[What does it mean to consume a Restful API?](#what-does-it-mean-to-consume-a-restful-api)
[How can we expose our Restful API?](#how-can-we-expose-our-restful-api)

### What is Express? Why do we use it?
- Express is a web application framework for Node.js
  - We could program everything for handling HTTP requests and responses, but Express makes it so much easier, and it's best to not reinvent the wheel

### How do we make an endpoint?
- Assuming we've already set up express as `app` or have a router set up as `router`
  - `app.use([path], (req, res) => {...});`
  - `router.use([path], (req, res) => {...});`
  - `app.get([path], (req, res) => {...});`
  - `router.get([path], (req, res) => {...});`
  - Or a ton of other variations, but I won't list them all

### How do we have Express get web traffic?
- By having it listen for traffic on a port higher than 1024
  - `app.listen(3000, () => {console.log("Express is listening...")});`

### What are Express routers? Why use them?
- They are a way of managing code and separating it into distinct sections
  - They help with separation of concerns (keep what we want going where we want)
  - Facilitate multiple people working on the same project (no git merge conflicts)
  - Code is cleaner and easier to understand
  - It offers us reusable code that addresses cross cutting concerns
    - Same problem that happens in many places

### What is middleware?
- Any piece of software that runs between two others

### How do we turn JSON into JavaScript objects?
- By using the `.parse()` method
  - `JSON.parse('{"name": "John", "age": "25"}');`

### How do we store data about a client connection?
- Using the `express-session` package
  - We would use `npm i express-session` to install it

### Is this Restful?
- No because we are keeping track on the server side of a client's connection, which means we are stateful, and therefore not Restful
  - On smaller systems this is okay, but this becomes a problem on larger systems

### What can we use to be Restful
- We can use either JWTs or something like Passport.js
  - Sessions by definition are stateful, but we can use JWTs or Passport.js, which pass information in the HTTP headers instead of maintaining the state of a session on a server

### What does it mean to consume a Restful API?
- Basically it means to use a Rest API
  - When we retrieve information from a Rest API, we are consuming a Rest API, for instance

### How can we expose our Restful API?
- Just like in English, to expose it to the Internet
  - If I expose my Rest API, I am giving access to my API
  - A nice list of publicly exposed APIs can be found [here](https://github.com/toddmotto/public-apis)