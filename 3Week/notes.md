# Week 3 Study Questions
These questions relate to the following topics:
- [HTML, CSS, JavaScript and the DOM](#html-css-javascript-and-the-dom)
- [Software Development Life Cycles (SDLCs)](#software-development-life-cycles-sdlcs)
- [Development Operations (DevOps)](#development-operations-devops)
- [The "Cloud", Linux and services](#the-cloud-linux-and-services)

Each question will have answers in bullet point format, with possible nested items for more specific examples.

## HTML, CSS, JavaScript and the DOM
- [What is HTML? Is it a programming language?](#what-is-html-is-it-a-programming-language)
- [What are some tags in HTML? What tags are required?](#what-are-some-tags-in-html-what-tags-are-required)
- [What is the syntax for making a tag?](#what-is-the-syntax-for-making-a-tag)
- [What are some attributes tags can have?](#what-are-some-attributes-tags-can-have)
- [What are events? Some examples?](#what-are-events-some-examples)
- [What is bubbling? Capturing?](#what-is-bubbling-capturing)
- [How do we take user input with HTML?](#how-do-we-take-user-input-with-html)
- [What ways can I send that info to a URL?](#what-ways-can-i-send-that-info-to-a-url)
- [What is CSS? What is its role in the browser?](#what-is-css-what-is-its-role-in-the-browser)
- [What ways can we apply style to a document?](#what-ways-can-we-apply-style-to-a-document)
- [How can we select elements to be styled?](#how-can-we-select-elements-to-be-styled)
- [What are some examples of CSS attributes?](#what-are-some-examples-of-css-attributes)
- [What is the box model?](#what-is-the-box-model)
- [What is flex?](#what-is-flex)
- [What is JavaScript's role in the browser?](#what-is-javascripts-role-in-the-browser)
- [What is the DOM? Its structure?](#what-is-the-dom-its-structure)
- [How can we find HTML elements in JS?](#how-can-we-find-html-elements-in-js)
- [Will find by ID always return a single node?](#will-find-by-id-always-return-a-single-node)
- [How do I use JS to respond to events?](#how-do-i-use-js-to-respond-to-events)
- [How can I sent an HTTP request to a URL?](#how-can-i-send-an-http-request-to-a-url)
- [How can we change an event's default functionality?](#how-can-we-change-an-events-default-functionality)
- [How can we make a new element? Add it to the tree?](#how-can-we-make-a-new-element-add-it-to-the-tree)
- [innerText vs innerHTML](#innertext-vs-innerhtml)
- [What is CORS?](#what-is-cors)
- [Why is CORS important?](#why-is-cors-important)
- [What do we need to accommodate CORS?](#what-do-we-need-to-accommodate-cors)

### What is HTML? Is it a programming language?
- HTML stands for Hypertext Markup Language
  - _Hypertext: a software system that links topics on the screen to related information and graphics, which are typically accessed by a point-and-click method._
- [HTML is not a programming language](https://ischool.syr.edu/infospace/2012/04/05/why-html-is-not-a-programming-language/), it's a [descriptive markup language](https://en.wikipedia.org/wiki/Markup_language#Types_of_markup_language).

### What are some tags in HTML? What tags are required?
- [w3schools.com](https://www.w3schools.com) has an [HTML element reference section](https://www.w3schools.com/tags/) for quick reference on any tags and many include a _"Try it now!"_ section, but a few are:
  - [`<p>`](https://www.w3schools.com/tags/tag_p.asp) - paragraph tag (requires a closing `</p>` tag)
  - [`<h1>` to `<h6>`](https://www.w3schools.com/tags/tag_hn.asp) - header tags (Require respective closing `</h#>` tags)
  - [`<br>`](https://www.w3schools.com/tags/tag_br.asp) - line break tag (no closing tag)
- Among HTML tags required for every page the requirements, we are going with the following:
  - [`<!DOCTYPE>`](https://www.w3schools.com/tags/tag_doctype.asp) to declare the doctype (no closing tag)
  - [`<html>`](https://www.w3schools.com/tags/tag_html.asp) to mark the root of the HTML document (requires a closing `</html>` tag)
  - [`<head>`](https://www.w3schools.com/tags/tag_head.asp) for loading information before the body of the page loads (requires a closing `</head>` tag)
    - This tag [is optional](https://www.w3schools.com/html/html_basic.asp), but is considered good practice to have along with a [`<title>`](http://www.w3schools.com/tags/title.asp) tag
  - [`<body>`](https://www.w3schools.com/tags/tag_body.asp) for loading the actual body content (requires a closing `</body>` tag)

### What is the syntax for making a tag?
- [Depending on the tag](https://www.w3.org/community/webed/wiki/HTML/Training/Tag_syntax), there will be either a start (or opening) and end (or closing) tag format, or a single-tag format
  - With a start and end tag format, such as an `<a>` tag, for example, you would have a respective closing `</a>` tag, with the content being contained between the tags.
    - IMPORTANT: While overlapping tags [can technically be handled in HTML5](https://html.spec.whatwg.org/multipage/parsing.html#adoption-agency-algorithm) it's considered bad practice because [not all browsers may be able to handle it](https://html.spec.whatwg.org/multipage/syntax.html#parse-error)
  - With the single-tag format (used with [void elements](https://www.w3.org/TR/html5/syntax.html#void-elements)), no closing tag is necessary, so tags like `<br>` or `<meta>` [can be used without any closing tag or `/` at all](https://www.w3.org/TR/html5/syntax.html#start-tags)
- Within the start tag, after the tag are the options, which are [a list of attributes and their values separated by spaces](https://www.w3.org/TR/html5/syntax.html#attributes)

### What are some attributes tags can have?
- [w3schools.com](https://www.w3schools.com) has a pretty [comprehensive list of HTML5 attributes](https://www.w3schools.com/tags/ref_attributes.asp), if you're ever looking for an easy reference, but a few are:
  - [`style`](https://www.w3schools.com/tags/att_style.asp) - allows CSS styles to be used on the element
  - [`id`](https://www.w3schools.com/tags/att_id.asp) - specifies the ID of the element
    - NOTE: This should be unique in practice, although it isn't enforced
  - [`class`](https://www.w3schools.com/tags/att_class.asp) - specifies the class of an element
  - [`href`](https://www.w3schools.com/tags/att_href.asp) - specifies a hypertext reference for the content between the tags

### What are events? Some examples?
- An event in the context of a web application is a ["thing" that happens to our HTML document](https://www.w3schools.com/js/js_events.asp)
- An event consists of the action and event properties and methods, and there are a [ton of them](https://www.w3schools.com/jsref/dom_obj_event.asp)
- A few of possible events are (excluding "on" prefixes):
  - [`click`](https://www.w3schools.com/jsref/event_onclick.asp) - happens when a full mouse click occurs on the object
  - [`keypress`](https://www.w3schools.com/jsref/event_onkeypress.asp) - happens when a full keypress occurs within the object
  - [`drag`](https://www.w3schools.com/jsref/event_ondrag.asp) - happens when the object is being dragged

### What is bubbling? Capturing?
- Bubbling is when an event occurs on a document, and [the event "bubbles up" from child to parent](https://javascript.info/bubbling-and-capturing#bubbling) all the way up the chain until the root of the document is reached, activating any events that had an event listener.
  - We can prevent bubbling of nested events by using the [`event.stopPropagation()`](https://javascript.info/bubbling-and-capturing#stopping-bubbling) method
- Capturing is the opposite, where [an event cascades down from parent to child](https://javascript.info/bubbling-and-capturing#capturing), activating any events that had and event listener
  - The big difference between these two is that bubbling can be done accidentally, whereas capturing is a purposeful decision, and must be actively implemented in the code

### How do we take user input with HTML?
- Using the [`<form>`](https://www.w3schools.com/tags/tag_form.asp) element to create a form for user input
  - We can decide where the information should go, and what kind of HTTP request to make
- Within the `<form>` element, we would have one or more inputs (I use this term generally) which could consist of [`<input>`](https://www.w3schools.com/tags/tag_input.asp), [`<radio>`](https://www.w3schools.com/tags/tag_radio.asp), [`<textarea>`](https://www.w3schools.com/tags/tag_textarea.asp) and [`<button>`](https://www.w3schools.com/tags/tag_button.asp) elements among others

### What ways can I send that info to a URL?
- The most simple way is by using the [`action`](https://www.w3schools.com/tags/att_form_action.asp) and [`method`](https://www.w3schools.com/tags/att_form_method.asp) attributes
  - The `action` attribute specifies where to send the data
  - The `method` attribute specifies how to send the data
  - The "what to send" is implied by what input-style elements are between the form tags
- The other method is we could have it handled by an event handler to handle a [`submit`](https://www.w3schools.com/jsref/event_onsubmit.asp) event for the form or a [`click`](https://www.w3schools.com/jsref/event_onclick.asp) event for the form button

### What is CSS? What is its role in the browser?
- CSS stands for [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS), and exists to style the document

### What ways can we apply style to a document?
- There are [3 different ways](https://www.w3schools.com/css/css_howto.asp):
  - Inline styling (using the [`style`](https://www.w3schools.com/tags/att_style.asp) attribute)
    - With inline styling, styling is done on a specific element, and only affects that element and any child elements
  - Internal (or embedded) styling (using the [`<style>`](https://www.w3schools.com/tags/tag_style.asp) element)
    - Styles are declared between style tags (typically in the head of a document) and any styles are applied to that document only
  - External styling (using the `<style>` element as well)
    - A style sheet is referenced in the opening `style` tag using the [`rel`](https://www.w3schools.com/tags/att_rel.asp) and [`href`](https://www.w3schools.com/tags/att_href.asp) attributes

### How can we select elements to be styled?
- There are [a number of different methods](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) (and I am not going to go through all of them) but three of the common methods are:
  - By id
  - By class
  - By element

### What are some examples of CSS attributes?
- Again, [w3schools.com](https://www.w3schools.com/) has a [huge reference list of CSS properties/attributes](https://www.w3schools.com/cssref/default.asp), and some examples are:
  - [`background-color`](https://www.w3schools.com/cssref/pr_background-color.asp) - sets the background color of the element
    - Colors in CSS can have a [name](https://www.w3schools.com/cssref/css_colors.asp), or they can be chosen using their hex values (`#RRGGBB`) or `rgb(R, G, B)` with R, G and B being values between 0-255
    - `background-color: green;`
    - `background-color: #00ff00;`
    - `background-color: rgb(0, 255, 0);`
  - [`border`](https://www.w3schools.com/cssref/pr_border.asp) - sets border width, style and color
    - `border: 3px solid black;`
  - [`dispay`](https://www.w3schools.com/cssref/pr_class_display.asp) - specifies how an element should be displayed
    - `display: inline-block;`

### What is the box model?
- The components that make up an element, each element has a margin, border, padding, and the content itself, all put together they make up this model:
  > ![Box model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

### What is flex?
- [Flex (or flex-box)](https://www.w3schools.com/css/css3_flexbox.asp) is a layout module for creating responsive HTML layout structures without needing to use floats or positions

### What is JavaScript's role in the browser?
- JavaScript's role in the browser is to manipulate the DOM and facilitate information between the client and the server (side note: no more sources, I realized it's taking too long for what kind of time limit we're working with here...)

### What is the DOM? Its structure?
- The DOM (or Document Object Model) is a representation of the structure of an HTML document
- Every DOM has a `document` object as the root object, everything (including the `<html>` element) is a child of this object
- It is a tree structure, with each object being a node, whether it's a parent or a child
  - If it's a child with no children, then it's called a "leaf"

### How can we find HTML elements in JS?
- There are several different ways, but a few of the most common methods of finding them are by using the following methods:
  - `.getElementById(id);`
  - `.getElementsByName(name);`
  - `.getElementsByClassName(className);`
  - These methods can be used on the `document` object, but can also be used on any other node in the DOM, although this is used significantly less often

### Will find by ID always return a single node?
- If we operate under the assumption that "find by ID" is referring to the `.getElementById()` method, then the answer is this: if we have at least one element with the ID we are searching for, then it will always return a single node, otherwise it will return `null`

### How do I use JS to respond to events?
- It can be done by setting up event listeners, or having event listeners on the elements themselves
  - `node.onclick = [cb]`
  - `node.addEventListener('click', [cb]);`

### How can I send an HTTP request to a URL?
- One of 3 ways:
  - Using the `fetch()` command
  - Using a third-party library
  - Googling "[how to write an xml http request from scratch](http://lmgtfy.com/?q=how+to+write+an+xml+http+request+from+scratch)" (because let's be honest, it's not worth remembering)

### How can we change an event's default functionality?
- By using `event.preventDefault();` That's it.

### How can we make a new element? Add it to the tree?
- By using the `.createElement()` and adding them into the tree by using `.appendChild(ele);`

### innerText vs innerHTML
- `innerText` retrieves and sets the text between the opening and closing tags of an element
  - This method is much more secure, but much less convenient
- `innerHTML` retrieves and sets the html between the opening and closing tags of an element
  - This method is much less secure, but much more convenient

### What is CORS?
- Cross-Origin Resource Sharing, and it apparently works like this:
  > ![Cross-Origin Resource Sharing diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flowchart_showing_Simple_and_Preflight_XHR.svg/512px-Flowchart_showing_Simple_and_Preflight_XHR.svg.png)

### Why is CORS important?
- Because it protects the user from making requests from one location to another if they do not have the proper header permissions as a result of cross-site scripting (XSS)

### What do we need to do to accommodate CORS?
- We need to have a CORS filter middleware in our server to check the options headers of incoming requests, and if they follow the rules outlined in the filter, then allow the request to be fulfilled, otherwise send back a CORS error.

## Software Development Life Cycles (SDLCs)
- [What is Waterfall? Its defining characteristics?](#what-is-waterfall-its-defining-characteristics)
- [When is Waterfall good? When is it bad?](#when-is-waterfall-good-when-is-it-bad)
- [Who uses Waterfall?](#who-uses-waterfall)
- [What is Agile? What problems is it trying to solve?](#what-is-agile-what-problems-is-it-trying-to-solve)
- [What is Scrum? What are some pieces of Scrum?](#what-is-scrum-what-are-some-pieces-of-scrum)
- [What are user stories? How do we value them?](#what-are-user-stories-how-do-we-value-them)
- [What does "velocity" mean?](#what-does-velocity-mean)

### What is Waterfall? Its defining characteristics?
- Waterfall is a software development life cycle model
- In the Waterfall model, we have a number of phases:
  - **Requirements gathering and analysis**
    - Go through and get a list of all of the requirements that the project needs
    - All of the requirements are put into a document
  - **System design**
    - A database ERD is designed, every class, function, and property is outlined
    - Everything, absolutely everything is designed in this phase, even tests can be designed in this phase for our different components if we wish
  - **Implementation**
    - This is the actual coding of the system design portion
    - Because everything has been so meticulously planned out, this step should in theory go relatively quickly in comparison to other SDLC models
  - **Integration and Testing**
    - Making sure that the different components actually function
    - If they function, they will be put into the final implementation
  - **Deployment**
    - Success! Everything works and the product is put into production
    - This happens all at once, and cannot happen before every step before it
  - **Maintenance**
    - General maintenance as bugs occur (because a project is never over until it's dead)
    - Maintenance is micro-Waterfalls to fix bugs

### When is Waterfall good? When is it bad?
- **Good**
  - For small projects
  - When the technology stack is static
  - When requirements are unlikely to change
  - The product needs to have as few bugs as humanly possible
- **Bad** 
  - For large products
  - For changing technology
  - When requirements are likely to change
  - When the product needs to be out as fast as possible

### Who uses Waterfall?
- The federal government, NASA, and I would hope and pray that the banking industry does as well, because regardless of how large a project is in the banking industry, you don't want that final product to have bugs in it and accidentally have billions of dollars to go missing or have security be less than ideal because you wanted a product to get out faster instead of covering all of your bases.

### What is Agile? What problems is it trying to solve?
- Taken from the Agile Manifesto:
  - Individuals and interactions over processes and tools
  - Working software over comprehensive documentation
  - Customer collaboration over contract negotiation
  - Responding to change over following a plan
  - _That is, while there is value in the items on the right, we value the items on the left more._

### What is Scrum? What are some pieces of Scrum?
- Scrum is (as best as I understand it) a superset of the Agile model, taking the Agile methodology, and adding in new roles and processes, some of which include:
  - **A Scrum Master**
    - The Scrum Master is generally a senior-level software engineer/developer and is the one that would be in charge of a scrum team
  - **Scrum Board**
    - A scrum board is where user stories are tracked, as well as product backlogs
  - **User Stories**
    - User stories are features which need to be implemented into the project
    - Each user story has a score based on how long it will take to complete
  - **Sprints**
    - A sprint is a period of time typically between 1-3 weeks where a selection of user stories chosen by a Scrum Master should be completed
  - **Velocity**
    - A scrum team's velocity is based on how many user stories it can get through in a sprint

### What are user stories? How do we value them?
- User stories are basically features that will be included in the project
- Values for user stories can be decided in a couple of different ways:
  - Scrum masters can get together and vote on what they believe to be the scores of the user stories (based on their own scoring methodology) and if they don't all vote on the same thing, they will talk about why they chose what they chose, and scores aren't assigned until everyone unanimously agrees on what a score for a particular user story should be
  - Scrum teams can decide on what a score for a user story should be following the same system as outlined above
  - A combination of the two systems listed above, although I don't know how that would work out

### What does "velocity" mean?
- Velocity is how many user stories a particular scrum team can accomplish in a sprint, and is calculated based on the sum of the values of the user stories over the course of a sprint
  - If I have user stories with the values 1, 2, 3, 5 and 7 for a sprint and we accomplished them all right on time, then our velocity for this sprint would be 1 + 2 + 3 + 5 + 7 = 18

## Development Operations (DevOps)
- [What is DevOps? What problem is it trying to solve](#what-is-devops-what-problem-is-it-trying-to-solve)
- [What are some of the behaviors we develop to follow DevOps?](#what-are-some-of-the-behaviors-we-develop-to-follow-devops)
- [What is a pipeline?](#what-is-a-pipeline)
- [What is continuous integration?](#what-is-continuous-integration)
- [What is continuous delivery?](#what-is-continuous-delivery)
- [What is continuous development?](#what-is-continuous-development)

### What is DevOps? What problem is it trying to solve?
- DevOps is short for "Development Operations" and was created to try to bridge the gap between development and operations, two different entities that need to have more communication and partnership between each other
- Basically, this was the problem:
  - Developer: "Here's my code, you can put it up on the servers now."
  - Operations: "Uh... thanks, but this isn't working because of X, Y and Z."
  - Developer: "Not my problem, I did my end."
  - Operations: "..."

### What are some of the behaviors we develop to follow DevOps?
- Dynamic configuration
- Using an SCM like GitHub (or something similar)
- Automatic testing of our code
- Package managers (like NPM)
- Work in an environment close to production
- Use pipelines

### What is a pipeline?
- At its core, a pipeline is an automated system of processes that accomplishes some task for us

### What is continuous integration?
- Continuous integration is a pipeline that allows for developers to produce code, push it to an SCM, a test server sees the changes to the SCM and pulls the changes, tests them, and then if the changes pass testing, they are integrated into the build
  - Development -> SCM -> Tests -> Build

### What is continuous delivery?
- Continuous delivery is a continuous integration pipeline that also automates the build into User Acceptance Testing (UAT), where a user is able to look at the changes in a production-like environment and then send them to production
  - Development -> SCM -> Tests -> Build -> UAT (manual)

### What is continuous development?
- Continuous development is continuous delivery but the UAT phase is automated so that basically once a change is made by the developer, it is pipelined all the way from development to production
  - Development -> SCM -> Tests -> Build -> UAT -> Production

## The "Cloud", Linux and services
- [What is the "cloud"? Cloud infrastructure?](#what-is-the-cloud-cloud-infrastructure)
- [What are some of the services you know?](#what-are-some-of-the-services-you-know)
- [What are some important steps for configuring an EC2?](#what-are-some-important-steps-for-configuring-an-ec2)
- [What are some Linux commands?](#what-are-some-linux-commands)
- [What is a PEM file?](#what-is-a-pem-file)
- [What is Jenkins?](#what-is-jenkins)
- [What do we need to do to set up Jenkins?](#what-do-we-need-to-do-to-set-up-jenkins)
- [What is a job?](#what-is-a-job)
- [How do we set up an environment variable with Jenkins?](#how-do-we-set-up-an-environment-variable-with-jenkins)
- [What is a webhook?](#what-is-a-webhook)
- [How does Jenkins fit into DevOps?](#how-does-jenkins-fit-into-devops)

### What is the "cloud"? Cloud infrastructure?
- The "cloud" is a network of other peoples' computers
  - A single server doing work for you on the internet does not make it a "cloud" server just because it's someone else's computer, that makes it an online server. "Cloud computing" is specifically defined as "the practice of using **_a network of remote servers hosted on the Internet_** to store, manage, and process data, rather than a local server or a personal computer."
    - This means the barrier for entry into cloud computing is high
  - Cloud infrastructure is specifically a network of hardware offered as a service (Infrastructure as a Service) such as EC2 (which is CPU + RAM)

### What are some of the services you know?
- **RDS** - Relational Database Service
  - Used for relational databases (duh)
- **EC2** - Elastic Cloud Computing
  - Used for running servers
- **EBS** - Elastic Block Store
  - Can only be used in conjunction with EC2
  - Isn't publicly accessible via the web
  - Great for logging applications or use cases where there's going to be a lot of reading/writing to the system
    - Like a live RDS for instance
- **ELB** - Elastic Load Balancing
  - Handles EC2s that we ask it to manage by giving traffic to different EC2s based on a set of rules
- **AWS Auto-scaling**
  - Set of rules for creating copies of our server
  - Horizontal scaling
    - Add lots of servers that are not that powerful
    - Less expensive
  - Vertical scaling
    - Increase power to currently existing servers or add few powerful servers
    - More expensive
- **EBS** - Elastic Beanstalk
  - Handles all of our elastic and auto-scaling for us

### What are important steps for configuring an EC2?
- Under the assumption that we have an AWS account already:
  - Create an EC2 instance
    - Choose an OS/kernel
    - Choose a size for CPU and RAM
    - Beg the AWS gods that you didn't forget something that'll cost you extra
    - Run the instance
  - Create login credentials
  - Download the `credentials.pem` key
  - SSH into the server
    - `ssh -i /directory/to/credentials.pem ec2-user@ec2-[ip-address].[region].compute.amazonaws.com`

### What are some Linux commands?
- This list could be LONG, so I'm gonna go with "google it" for any that aren't included, but here are couple:
  - `cd` - change directory
  - `ls` - list
  - `cat` - concatenate (show the contents of a file)
  - `mkdir` - make directory
  - `touch` - create a file if it doesn't exist otherwise update its timestamp (this comes in handy if a professor doesn't realize you know its true power)

### What is a PEM file?
- A PEM (or Privacy Enhanced Mail) file is a public key file for creating a trusted, secure connection between a client and a server

### What is Jenkins?
- Jenkins is software for continuous integration and continuous delivery for code development

### What do we need to do to set up Jenkins?
- Assuming we have all of the dependencies installed:
  - Get the public key for Jenkins
  - Add it to our trusted sources list (location varies based on kernel) if we want to use a repository build
  - Update the repository
  - Install Jenkins from the repository (or if you're feeling particularly adventurous, compile it from scratch)
  - Go to `ec2-[ip-address].[region].compute.amazonaws.com:8080`
  - Configure it the way we want it to operate
  - Done

### What is a job?
- A job is a set of rules that Jenkins implements for continuous integration and/or delivery
  - A job is started by hitting the `New Item` button from the Jenkins menu from our main server page

### How do we set an environment variable with Jenkins?
- By using the "This project is parameterized" option when setting up a new job

### What is a webhook?
- Simply put, a webhook is an automatic push of data from one data source to another as changes occur
  - Also called a "web callback" or "HTTP push API"
  - The basic concept is that when some event regarding the data in one source occurs, that data source sends a request to another API saying "hey! I have some new stuff! What do?" And then the corresponding endpoint responds accordingly with whether to push the data or not

### How does Jenkins fit into DevOps?
- Jenkins is the continuous integration and/or continuous delivery side of DevOps, and allows us to pipeline our code quickly through to whichever stage we want.