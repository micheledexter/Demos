# Week 5 Study Questions
These questions relate to the following topics:
- [Java Basics, Variables and Classes](#java-basics-variables-and-classes)
- [Access Modifiers, Interfaces, Abstract Classes and Strings](#access-modifiers-interfaces-abstract-classes-and-strings)
- [Object Super Class, Exceptions, and Reflections](#object-super-class,exceptions-and-reflections)
- [Garbage Collection, Collections and Comparing](#garbage-collection-collections-and-comparing)
- [Threads, Packaging and Testing](#threads-packaging-and-testing)

Each question will have answers in bullet point format, with possible nested items for more specific examples.

## Java Basics, Variables and Classes
- [Java Basics](#java-basics)
- [Variables](#variables)
- [Classes](#classes)

### Java Basics
- [What is Java? Is it compiled? Is it high level?](#what-is-java-is-it-compiled-is-it-high-level)
- [Why do we use Java?](#why-do-we-use-java)
- [What are the 4 pillars? Examples of each in Java](#what-are-the-4-pillars-examples-of-each-in-java)
- [Is Java functional? Is it OOP?](#is-java-functional-is-it-oop)
- [Is Java pass by value or reference?](#is-java-pass-by-value-or-reference)
- [JVM VS JRE VS JDK](jvm-vs-jre-vs-jdk)


#### What is Java? Is it compiled? Is it high level?
- Java is a high-level compiled programming language that is incredibly portable
  - It is compiled into bytecode, which is able to be run on any device that has a Java Runtime Environment

#### Why do we use Java?
- It lets us have multithreading and static typing
- It's the most used language in business
- It has a long history, and thanks to that history, there are tons of libraries and there is documentation for virtually everything from tools to how to deal with errors and problems in code

#### What are the 4 pillars? Examples of each in Java
- Abstraction
  - Interfaces are a perfect example, an interface is a contract stating that a certain set of methods will be in any implementation, and if the interface is implemented, it doesn't matter _how_ they are implemented, they will be implemented
- Polymorphism
  - Method overriding and overloading; with overriding a previously defined method from an extended class is overridden by a newly defined method, and with overloading, a method or constructor can have numerous different call signatures
- Inheritance
  - A class can extend another class or an interface can extend another interface to have all of the methods and attributes of parent and add on additional methods and/or fields as well
- Encapsulation
  - Access modifiers allow us to prevent data from being accessed and modified in ways they shouldn't be, so if we want to modify a variable in a class, we may need to use `obj.setVar(newVal);` instead of `obj.val = newVal;`

#### Is Java functional? Is it OOP?
- If the question is whether or not Java is a functional language, then the answer is no: Java is a purely OOP language
  - Everything in Java must be in a class
  - Functions cannot be parameters
  - Functions cannot be return values

#### Is Java pass by value or reference?
- Java is "pass by value", which is a stupid term, because it's deceptive. Allow me to explain...
  - It's "pass by value" because it copies the **_PRIMITIVE_** values
  - It **_DOES NOT_** pass the pass the values of anything that's not a primitive value _(with weird String exceptions)_
    - Consider the following code:
    ```java
    public class TestObject {

      private int test;

      public TestObject(int test) {
        this.test = test;
      }

      public int getTest() {
        return this.test;
      }

      public void setTest(int test) {
        this.test = test;
      }
    }

    public class TestLauncher {

      private static void main(String[] args) {

        TestObject obj1 = new TestObject(10); // obj1 is set to `10`
        TestObject obj2 = obj1; // obj2 references obj1
        obj2.setTest(20); // change obj2 to 20
        System.out.println(obj1.getTest()); // This will return 20 since obj2 is only a reference to the same thing
      }
    }

#### JVM VS JRE VS JDK
- 

### Variables
- [How do I declare a variable?](#how-do-i-declare-a-variable)
- [What kinds of variables can I make?](#what-kinds-of-variables-can-i-make)
- [What are the scopes of a variable?](#what-are-the-scopes-of-a-variable)
- [What is Null?](#what-is-Null)

#### How do I declare a variable?

#### What kinds of variables can I make?

#### What are the scopes of a variable?

#### What is Null?

### Classes
- [What are the pieces of a class in Java?](#what-are-the-pieces-of-a-class-in-java)
- [What is an object's relation to a class?](#what-is-an-objects-relation-to-a-class)
- [How do I inherit a class in Java?](#how-do-i-inherit-a-class-in-java)
- [Can I inherit more than one class?](#can-i-inherit-more-than-one-class)

#### What are the pieces of a class in Java?

#### What is an object's relation to a class?

#### How do I inherit a class in Java?

#### Can I inherit more than one class?

## Access Modifiers, Interfaces, Abstract Classes and Strings
- [Access Modifiers](#access-modifiers)
- [Interfaces and Abstract Classes](#interfaces-and-abstract-classes)
- [Strings](#strings)

### Access Modifiers
- [What are access modifiers? How many do I have and what do they do?](#what-are-access-modifiers-how-many-do-i-have-and-what-do-they-do)
- [What does the final keyword do? Where can I use it?](#what-does-the-final-keyword-do-where-can-i-use-it)
- [What does the static keyword do?](#what-does-the-static-keyword-do)
- [Can static methods access non static methods or variables](#can-static-methods-access-non-static-methods-or-variables)

#### What are access modifiers? How many do I have and what do they do?

#### What does the final keyword do? Where can I use it?

#### What does the static keyword do?

#### Can static methods access non static methods or variables

### Interfaces and Abstract Classes
- [How do interfaces and abstract classes differ? How are they the same?](#how-do-interfaces-and-abstract-classes-differ-how-are-they-the-same)
- [Why use interfaces or abstract classes?](#why-use-interfaces-or-abstract-classes)
- [How do I use an interface on a class?](#how-do-i-use-an-interface-on-a-class)
- [Can I have more than one interface on a class?](#can-i-have-more-than-one-interface-on-a-class)
- [What are functional interfaces? Marker interfaces?](#what-are-functional-interfaces-marker-interfaces)

#### How do interfaces and abstract classes differ? How are they the same?

#### Why use interfaces or abstract classes?

#### How do I use an interface on a class?

#### Can I have more than one interface on a class?

#### What are functional interfaces? Marker interfaces?

### Strings
- [What are Strings? Are they Objects?](#what-are-strings-are-they-objects)
- [How does the String Pool work?](#how-does-the-string-pool-work)
- [Do I use == or .equals with Strings? Why?](#do-i-use--or-equals-with-strings-why)
- [How do StringBuilder and StringBuffer compare to String? To each other?](#how-do-stringbuilder-and-stringbuffer-compare-to-string-to-each-other)

#### What are Strings? Are they Objects?

#### How does the String Pool work?

#### Do I use == or .equals with Strings? Why?

#### How do StringBuilder and StringBuffer compare to String? To each other?

## Object Super Class, Exceptions, and Reflections
- [Object Super Class](#object-super-class)
- [Exceptions](#exceptions)
- [Reflections](#reflections)

### Object Super Class
- [What is the Object super class?](#what-is-the-object-super-class)
- [What are some methods on the Object super class?](#what-are-some-methods-on-the-object-super-class)
- [What is method overriding? Overloading?](#what-is-method-overriding-overloading)
- [What is the relationship between .hashCode and .equals?](#what-is-the-relationship-between-hashcode-and-equals)

#### What is the Object super class?

#### What are some methods on the Object super class?

#### What is method overriding? Overloading?

#### What is the relationship between .hashCode and .equals?

### Exceptions
- [What are checked exceptions? Unchecked exceptions? Errors?](#what-are-checked-exceptions-unchecked-exceptions-errors)
- [What is the top level class of exceptions?](#what-is-the-top-level-class-of-exceptions)
- [How do I deal with exceptions?](#how-do-i-deal-with-exceptions)
- [What is finally? How does it compare to final? Finalize?](#what-is-finally-how-does-it-compare-to-final-finalize)

#### What are checked exceptions? Unchecked exceptions? Errors?

#### What is the top level class of exceptions?

#### How do I deal with exceptions?

#### What is finally? How does it compare to final? Finalize?

### Reflections
- [What are generics? Why use them?](#what-are-generics-why-use-them)
- [What are wrapper classes? Autoboxing? Autounboxing?](#what-are-wrapper-classes-autoboxing-autounboxing)
- [What is reflections?](#what-is-reflections)
- [What can we do with reflections? Who uses it?](#what-can-we-do-with-reflections-who-uses-it)

#### What are generics? Why use them?

#### What are wrapper classes? Autoboxing? Autounboxing?

#### What is reflections?

#### What can we do with reflections? Who uses it?

## Garbage Collection, Collections and Comparing
- [Garbage Collection](#garbage-collection)
- [Collections](#collections)
- [Comparing](#comparing)

### Garbage Collection
- [How does garbage collection work in Java?](#how-does-garbage-collection-work-in-java)
- [What does finalize do?](#what-does-finalize-do)
- [Can I force garbage collection?](#can-i-force-garbage-collection)

#### How does garbage collection work in Java?

#### What does finalize do?

#### Can I force garbage collection?

### Collections
- [What are all of the pieces of the Collections framework?](#what-are-all-of-the-pieces-of-the-collections-framework)
- [Compare and contrast Sets, Queues, Lists, and Maps](#compare-and-contrast-sets-queues-lists-and-maps)
- [Hashmap v Hashtable, HashSet v TreeSet, Set v List](#hashmap-v-hashtable-hashset-v-treeset-set-v-list)
- [Collection v Collections](#collection-v-collections)
- [How does Iterable fit in?](#how-does-Iterable-fit-in)

#### What are all of the pieces of the Collections framework?

#### Compare and contrast Sets, Queues, Lists, and Maps

#### Hashmap v Hashtable, HashSet v TreeSet, Set v List

#### Collection v Collections

#### How does Iterable fit in?

### Comparing
- [How do I compare two objects in Java?](#how-do-i-compare-two-objects-in-java)
- [Comparable v Comparator?](#comparable-v-comparator)
- [Lambda functions: What are they? When can I use them?](#lambda-functions-what-are-they-when-can-i-use-them)
- [How do they work in the background?](#how-do-they-work-in-the-background)

#### How do I compare two objects in Java?

#### Comparable v Comparator?

#### Lambda functions: What are they? When can I use them?

#### How do they work in the background?

## Threads, Packaging and Testing
- [Threads](#threads)
- [Packaging](#packaging)
- [Testing](#testing)

### Threads
- [What is multithreading? Why do we want to do it?](#what-is-multithreading-why-do-we-want-to-do-it)
- [How can I make a thread in Java? Which way should I?](#how-can-i-make-a-thread-in-java-which-way-should-i)
- [What are thread states?](#what-are-thread-states)
- [What are some thread methods? .join? .isAlive?](#what-are-some-thread-methods-join-isalive)
- [What are some potential problems I can get with multithreading?](#what-are-some-potential-problems-i-can-get-multithreading)

#### What is multithreading? Why do we want to do it?

#### How can I make a thread in Java? Which way should I?

#### What are thread states?

#### What are some thread methods? .join? .isAlive?

#### What are some potential problems I can get with multithreading?

### Packaging
- [What is maven?](#what-is-maven)
- [What is a POM?](#what-is-a-pom)
- [How do I get dependencies?](#how-do-i-get-dependencies)
- [What are the build lifecycle stages?](#what-are-the-build-lifecycle-stages)

#### What is maven?

#### What is a POM?

#### How do I get dependencies?

#### What are the build lifecycle stages?

### Testing
- [What is JUnit? What testing tools does it provide us?](#what-is-junit-what-testing-tools-does-it-provide-us)
- [What are some annotations of JUnit?](#what-are-some-annotations-of-junit)
- [What are the Hamcrest matchers?](#what-are-the-hamcrest-matchers)
- [Why use them and assertThat?](#why-use-them-and-assertthat)

#### What is JUnit? What testing tools does it provide us?

#### What are some annotations of JUnit?

#### What are the Hamcrest matchers?

#### Why use them and assertThat?
