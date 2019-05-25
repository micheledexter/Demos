# Week 3 Study Questions
Each question will have answers in bullet point format, with possible nested items for more specific examples.

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
- The components that make up an element, each element has a margin, border, padding, and the content itself, all of which together look like this:
  > ![Box model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

