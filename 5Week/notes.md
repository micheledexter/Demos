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
    ```
    - And that's why "pass by value" is a stupid, misleading description

#### JVM VS JRE VS JDK
- JVM: Java Virtual Machine
  - Executes bytecode and does underlying housekeeping processes
- JRE: Java Runtime Environment
  - Copy of the JVM and other libraries, code and configuration files that actually run the bytecode
- JDK: Java Development Kit
  - Has the JRE as well as tools for writing code and compiling code into bytecode

### Variables
- [How do I declare a variable?](#how-do-i-declare-a-variable)
- [What kinds of variables can I make?](#what-kinds-of-variables-can-i-make)
- [What are the scopes of a variable?](#what-are-the-scopes-of-a-variable)
- [What is Null?](#what-is-Null)

#### How do I declare a variable?
- By using an optional access modifier (or it defaults to `default`), adding static if it's static, adding final if it's final, the type of variable it will be, then a name, followed by an assignment if you want to (must for final)
  - `int x;`
  - `int x = 7`
  - `private int x;`
  - `private int x = 7`
  - `private static int x;`
  - `private static int x = 7`
  - `public static final int X = 7;`

#### What kinds of variables can I make?
- Instance and class
  - Instance are part of an object
  - Class variables are static and are tied to a class

#### What are the scopes of a variable?
- Member (class), method, loop, and local(bracket)
  - Member -- or class -- variables are accessible anywhere within a class
  - Method are accessible within a method
  - Loop are accessible within a loop
  - Local are accessible within a set of curly braces

#### What is Null?
- A special literal that can be of any reference type

### Classes
- [What are the pieces of a class in Java?](#what-are-the-pieces-of-a-class-in-java)
- [What is an object's relation to a class?](#what-is-an-objects-relation-to-a-class)
- [How do I inherit a class in Java?](#how-do-i-inherit-a-class-in-java)
- [Can I inherit more than one class?](#can-i-inherit-more-than-one-class)

#### What are the pieces of a class in Java?
- Fields
  - The values of a Class
- Constructors
  - How an is built
- Methods
  - How the class and objects interact

#### What is an object's relation to a class?
- An object in an instance of a class
  - A class can basically be a blueprint for an object, so if it has constructors, any number of objects can be instantiated from it

#### How do I inherit a class in Java?
- By extending it using the keyword `extends`
  - `class ChildClass extends ParentClass {}`
- Each class can only inherit from at most 1 other class

#### Can I inherit more than one class?
- No

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
- Access modifiers are keywords that define what kind of access different parts of our code should allow:

  | Modifier | Class | Package | Subclass | Everywhere |
  | --- | --- | --- | --- | --- |
  | Public | Yes | Yes | Yes | Yes |
  | Protected | Yes | Yes | Yes | No |
  | Default | Yes | Yes | No | No |
  | Private | Yes | No | No | No |

#### What does the final keyword do? Where can I use it?
- It depends on where it's being used:
  - If it's being used with a variable, it prevents any further changes to the variable
  - If it's being used with a method, it prevents the method from being overridden
  - If it's being used with a class, it prevents it from being inherited

#### What does the static keyword do?
- It makes a variable or method a member of the class rather than a member of an instance
  - Static variables and methods are not instantiated with the creation of each new object, and are accessible from the class name

#### Can static methods access non static methods or variables
- No because a static method is part of the class and is not part of any one instance

### Interfaces and Abstract Classes
- [How do interfaces and abstract classes differ? How are they the same?](#how-do-interfaces-and-abstract-classes-differ-how-are-they-the-same)
- [Why use interfaces or abstract classes?](#why-use-interfaces-or-abstract-classes)
- [How do I use an interface on a class?](#how-do-i-use-an-interface-on-a-class)
- [Can I have more than one interface on a class?](#can-i-have-more-than-one-interface-on-a-class)
- [What are functional interfaces? Marker interfaces?](#what-are-functional-interfaces-marker-interfaces)

#### How do interfaces and abstract classes differ? How are they the same?
  | | Interfaces | Abstract Classes |
  | --- | --- | --- |
  | Instantiation | Cannot be instantiated | Can't be instantiated (mostly) |
  | Use | Implemented by classes | Extended from classes |
  | Quantity | Up to 256 | Only 1 |
  | Uses abstract methods | Yes | Yes |
  | Can have concrete methods | No | Yes |
  | Allowed variables | public static final | Any |
  | Access modifiers | public | Any |

#### Why use interfaces or abstract classes?
- Both are used in abstraction
- Interfaces are great for creating a set of methods for accessing something like databases with a common set of methods regardless of which implementation we are using
- Abstract classes are better for creating development tools

#### How do I use an interface on a class?
- `public class MyClass implements Interfaceable {}`
- Create override methods in the class for any methods from the implemented interface

#### Can I have more than one interface on a class?
- Yes, a class can implement up to 256 interfaces

#### What are functional interfaces? Marker interfaces?
- Functional interfaces are ones that add functionality to a class
  - Like the `Collection` interface, for example
- Marker interfaces are ones that simply mark something as being allowed to do something or having a certain quality
  - Like the `Cloneable` interface

### Strings
- [What are Strings? Are they Objects?](#what-are-strings-are-they-objects)
- [How does the String Pool work?](#how-does-the-string-pool-work)
- [Do I use == or .equals with Strings? Why?](#do-i-use--or-equals-with-strings-why)
- [How do StringBuilder and StringBuffer compare to String? To each other?](#how-do-stringbuilder-and-stringbuffer-compare-to-string-to-each-other)

#### What are Strings? Are they Objects?
- Strings are objects with some very strange qualities
  - Strings have the String Pool, for example, which is all sorts of strange

#### How does the String Pool work?
- The String Pool works in mysterious ways... But basically, GENERALLY, when a string is created, it goes into the pool
  - UNLESS it's already been created, in which case the variable points to the existing string in the pool
    - But if the string is called with `new String();`, then it doesn't go into the pool
      - Although it can go into the pool by using the `.intern()` method
        - That means it will follow the string pool rules and see if it's already in the pool again
- It is a wonderfully confusing process that means if we are comparing strings, ALWAYS use `.equals()`

#### Do I use == or .equals with Strings? Why?
- `.equals()` because even though there's a fairly good chance it will resolve correctly, there's still a small chance that it will resolve incorrectly when using `==`

#### How do StringBuilder and StringBuffer compare to String? To each other?
- StringBuilder and StringBuffer are both ways for us to create strings without constantly creating new strings when we have to concatenate multiple strings together
  - Concatenating strings actually results in a new string for each concatenation
- StringBuilder is multithreaded, and StringBuffer is not, but it's also outdated and shouldn't be used anymore.

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
- The Object super class is the class that is parent to every other object in some way or another
  - If a class doesn't extend to another class, then it by default extends the Object super class

#### What are some methods on the Object super class?
  - `.hashCode()` - provides a sufficiently unique number based on the object
  - `.equals(Object o)` - checks whether or one object is equal to another
    - By default, this is set to check the reference values of two objects rather than the values themselves
  - `toString()` - outputs a string representing the object
    - By default, this is the object's reference value

#### What is method overriding? Overloading?
- Method overriding occurs when extending or implementing a class or interface respectively and a method either already exists or needs to be implemented
  - We do not necessarily need to mark it with the `@Override` annotation, although in my own personal opinion I think it helps to have a marker there to show which methods are not native to the class itself

#### What is the relationship between .hashCode and .equals?
- `.hashCode()` is a sufficiently unique number generated based on the object, and if `.equals()` evaluates to `true` between two objects, their `.hashCode()` should also evaluate to being the same value

### Exceptions
- [What are checked exceptions? Unchecked exceptions? Errors?](#what-are-checked-exceptions-unchecked-exceptions-errors)
- [What is the top level class of exceptions?](#what-is-the-top-level-class-of-exceptions)
- [How do I deal with exceptions?](#how-do-i-deal-with-exceptions)
- [What is finally? How does it compare to final? Finalize?](#what-is-finally-how-does-it-compare-to-final-finalize)

#### What are checked exceptions? Unchecked exceptions? Errors?
- Checked exceptions are exceptions that must be handled before the program can be compiled
  - Generally any kind of database connection will throw a checked exception somewhere that must be handles (for in case something goes wrong)
  - `IOException`, `SQLException`, `InterruptedException` (all extend) `Exception`
- Unchecked exceptions are exceptions that occur during runtime and are usually due to mistakes that the programmer made and generally don't need to be handled
  - Trying to select more items than are in an array
  - `ArithmeticException`, `NullPointerException`, `IndexOutOfBoundsException` (all extend) `RuntimeException`
- Errors are things that should **_NOT BE HANDLED_** because trying to handle them will generally make things way worse than they currently are
  - `StackOverflowError`, `OutOfMemoryError`, `UnknownError` (all extend) `VirtualMachineError`
  - `ThreadDeath` - That's it. Not even "error" in there. That's the only reason I wanted to include it.

#### What is the top level class of exceptions?
- `Exception`

#### How do I deal with exceptions?
- Using `try`/`catch`/`finally` blocks
  - There needs to be either a `catch` for a `finally` or there can be both, but there needs to be at least one of them
    ```java
    try {
      ExClassThrower obj = new ExClassThrower();
    } catch(CheckedException e) {
      e.printStackTrace();
    }
    ```

#### What is finally? How does it compare to final? Finalize?
- `finally` is the last part of a `try`/`catch`/`finally` block, and will run regardless of what happens in `try` or `catch`
- `final` is just an access modifier and has nothing to do with `finally`
- `.finalize()` is just an internal method used by the garbage collector, and also has nothing to do with `finally`

### Reflections
- [What are generics? Why use them?](#what-are-generics-why-use-them)
- [What are wrapper classes? Autoboxing? Autounboxing?](#what-are-wrapper-classes-autoboxing-autounboxing)
- [What is reflections?](#what-is-reflections)
- [What can we do with reflections? Who uses it?](#what-can-we-do-with-reflections-who-uses-it)

#### What are generics? Why use them?
- Generics are used between `<` and `>` to represent a generic class type so that we can program using any class instead of creating different implementations of code for every conceivable class type
  - `public class MyGeneric<T> {}` could be instantiated with `MyGeneric<Integer> myObj = new MyGeneric<>();`
    - In Java 8 we do not need to type `Integer` (or whatever class name) in the second set because it's implied that they are the same.

#### What are wrapper classes? Autoboxing? Autounboxing?
- Wrapper classes are used for primitive types, and give us some extra methods as well as allow us to use primitives with generics (such as the example above) by using autoboxing and autounboxing, both of which are handled by the JVM
- Autoboxing is when a primitive value is automatically turned into its class counterpart
  - `int` becomes `Integer`
- Autounboxing is when a class becomes its primitive counterpart
  - `Integer` becomes `int`

#### What is reflections?
- Reflections is magic in Java that allows the program to look at itself and alter itself while running
  - This still blows my mind

#### What can we do with reflections? Who uses it?
- We can use reflections in conjunction with annotations mark which code should be tested, or use inversion of control to mark what parts of our program should do what for frameworks like Spring

## Garbage Collection, Collections and Comparing
- [Garbage Collection](#garbage-collection)
- [Collections](#collections)
- [Comparing](#comparing)

### Garbage Collection
- [How does garbage collection work in Java?](#how-does-garbage-collection-work-in-java)
- [What does finalize do?](#what-does-finalize-do)
- [Can I force garbage collection?](#can-i-force-garbage-collection)

#### How does garbage collection work in Java?
- It's automatically handled by the JVM
- It automatically runs and collects objects that no longer have references to any significant resource connected to the program

#### What does finalize do?
- It is the last method called before the garbage collector collects the object in question

#### Can I force garbage collection?
- Yep, there are two ways we can do it, but as a general rule shouldn't:
  - `System.gc();`
  - `Runtime.getRuntime().gc();`

### Collections
- [What are all of the pieces of the Collections framework?](#what-are-all-of-the-pieces-of-the-collections-framework)
- [Compare and contrast Sets, Queues, Lists, and Maps](#compare-and-contrast-sets-queues-lists-and-maps)
- [HashMap v Hashtable, HashSet v TreeSet, Set v List](#hashmap-v-hashtable-hashset-v-treeset-set-v-list)
- [Collection v Collections](#collection-v-collections)
- [How does Iterable fit in?](#how-does-Iterable-fit-in)

#### What are all of the pieces of the Collections framework?
- _\*le sigh\*_ Fields:
  - EMPTY_LIST
  - EMPTY_SET
  - EMPTY_MAP
- Methods: _(figure them out)_
  - addAll
  - addLifoQueue
  - binarySearch
  - checkedCollection
  - checkedList
  - checkedMap
  - checkedSet
  - checkedSortedMap
  - checkedSortedSet
  - copy
  - disjoint
  - emptyEnumeration
  - emptyIterator
  - emptyList
  - emptyListIterator
  - emptyMap
  - emptySet
  - enumeration
  - fill
  - frequency
  - indexOfSubList
  - lastIndexOfSubList
  - list
  - max
  - min
  - nCopies
  - newSetFromMap
  - replaceAll
  - reverse
  - reverseOrder
  - rotate
  - shuffle
  - singleton
  - singletonList
  - singletonMap
  - sort
  - swap
  - synchronizedCollection
  - synchronizedList
  - synchronizedMap
  - synchronizedSet
  - synchronizedSortedMap
  - synchronizedSortedSet
  - unmodifiableCollection
  - unmodifiableList
  - unmodifiableMap
  - unmodifiableSet
  - unmodifiableSortedMap
  - unmodifiableSortedSet

#### Compare and contrast Sets, Queues, Lists, and Maps
- Sets
  - Do not allow duplicates
  - Does not allow accessing by index
    - Instead check for existence
- Queues
  - Items are added (pushed) and removed (popped) in the order in which they were added
- Lists
  - Allow duplicates
  - First element has index 0, last has index -1
- Maps
  - Allow duplicates
  - Index elements by key

#### HashMap v Hashtable, HashSet v TreeSet, Set v List
- HashMap v Hashtable
  - HashMap allows nulls
  - HashMap is unsynchronized
- HashSet v TreeSet
  - HashSet doesn't guarantee ordering
  - HashSet uses .equals instead of .compareTo
  - HashSet backed by hash table instead of red-black tree
  - HashSet allows one null
  - HashSet internally implemented using HashMap instead of TreeMap
  - HashSet is faster
- Set v List
  - Set is not indexed
  - Set is unique

#### Collection v Collections
- Collection is an interface and Collections is a library of methods that work on the Collection interface

#### How does Iterable fit in?
- Iterable is an interface that allows things from collections to be iterated through in loops

### Comparing
- [How do I compare two objects in Java?](#how-do-i-compare-two-objects-in-java)
- [Comparable v Comparator?](#comparable-v-comparator)
- [Lambda functions: What are they? When can I use them?](#lambda-functions-what-are-they-when-can-i-use-them)
- [How do they work in the background?](#how-do-they-work-in-the-background)

#### How do I compare two objects in Java?
- In terms of sorting (in which I am assuming this is referring) there are two ways, you could either implement the `Comparable` interface or the `Comparator` interface

#### Comparable v Comparator?
- `Comparable` implements the `.compareTo()` method, which compares the current object to another
- `Comparator` implements the `.compare()` method, which compares two objects to each other

#### Lambda functions: What are they? When can I use them?
- Lambda functions are used mainly in place of `Consumer` implementations, such as in `.forEach()` loops
  - `myArray.forEach(num -> System.out.println(num));`
- They can also be used for other things, but that's arguably the most-used reason they are used

#### How do they work in the background?
- They do all of the work of building a Consumer implementation and running a for loop for us

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
- Multithreading allows us to run more tasks at once
  - I am able to load an enormous file while continuing execution of my program without any blocking the execution, for instance

#### How can I make a thread in Java? Which way should I?
- There are two ways to create a thread in Java:
  - Create a class that implements the `Runnable` interface (correct method)
  - Create a class that extends the `Thread` class (incorrect method) and override the `run()` method

#### What are thread states?
- The states that a thread can have, they are:
  - New
    - A new thread has been created
  - Runnable
    - The thread is running
  - Timed waiting
    - The thread is waiting for a timed period
  - Waiting
    - The thread is waiting for a certain process to be complete
  - Blocked
    - The thread is blocked from continuing execution
  - Terminated
    - The thread is terminated

#### What are some thread methods? .join? .isAlive?
- `.run()` starts the thread
- `.join()` joins the current thread with the main thread
- `.isAlive()` checks to see if the thread is not terminated

#### What are some potential problems I can get with multithreading?

### Packaging
- [What is maven?](#what-is-maven)
- [What is a POM?](#what-is-a-pom)
- [How do I get dependencies?](#how-do-i-get-dependencies)
- [What are the build lifecycle stages?](#what-are-the-build-lifecycle-stages)

#### What is maven?
- Maven is a package dependency manager
- All we do is tell maven which dependencies we need and it'll take care of importing them along with their respective dependencies so that we can use them within our project

#### What is a POM?
- A Project Object Model file
- I don't *think* this is in anything other than XML (although I've been known to be wrong, so don't quote me on that one) but it's a file a lot like package.json that keeps track of all of the project information 
  - The name of the of the project, the version, the dependencies required, etc.

#### How do I get dependencies?
- By putting them in the in the dependencies tag of the POM

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
