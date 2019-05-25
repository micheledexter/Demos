# Week 3 Study Questions
Each question will have answers in bullet point format, with possible nested items for more specific examples.

### What is HTML? Is it a programming language?
- HTML stands for Hypertext Markup Language
  - _Hypertext: a software system that links topics on the screen to related information and graphics, which are typically accessed by a point-and-click method._
- [HTML is not a programming language](https://ischool.syr.edu/infospace/2012/04/05/why-html-is-not-a-programming-language/), it's a [descriptive markup language](https://en.wikipedia.org/wiki/Markup_language#Types_of_markup_language).

### What are some tags in HTML? What tags are required?
- [w3schools.com](https://w3schools.com) has an [HTML element reference section](https://www.w3schools.com/tags/) for quick reference on any tags and many include a _"Try it now!"_ section, but a few are:
  - [`<p>` or "paragraph" tag](https://www.w3schools.com/tags/tag_p.asp)
    - Requires a closing `</p>` tag
  - [`<h1>` to `<h6>` header tags](https://www.w3schools.com/tags/tag_hn.asp)
    - Require respective closing `</h#>` tags
  - [`<br>` or "line break" tag](https://www.w3schools.com/tags/tag_br.asp)
    - No closing tag required
- Among HTML tags required for every page the requirements, we are going with the following:
  - [`<!DOCTYPE>`](https://www.w3schools.com/tags/tag_doctype.asp) to declare the doctype
    - No closing tag required
  - [`<html>`](https://www.w3schools.com/tags/tag_html.asp) to mark the root of the HTML document
    - Requires a closing `</html>`
  - [`<head>`](https://www.w3schools.com/tags/tag_head.asp) for loading information before the body of the page loads
    - This tag [is optional](https://www.w3schools.com/html/html_basic.asp), but is considered good practice to have along with a [`<title>`](http://www.w3schools.com/tags/title.asp) tag
    - Requires a closing `</head>` tag
  - [`<body>`](https://www.w3schools.com/tags/tag_body.asp) for loading the actual body content
    - Requires a closing `</body>` tag

### What is the syntax for making a tag?
- [Depending on the tag](https://www.w3.org/community/webed/wiki/HTML/Training/Tag_syntax), there will be either a start (or opening) and end (or closing) tag format, or a single-tag format
  - With a start and end tag format, such as an `<a>` tag, for example, you would have a respective closing `</a>` tag, with the content being contained between the tags.
    - IMPORTANT: While overlapping tags can [technically be handled in HTML5](https://html.spec.whatwg.org/multipage/parsing.html#adoption-agency-algorithm) it's considered bad practice because [not all browsers may not be able to handle it](https://html.spec.whatwg.org/multipage/syntax.html#parse-error)
  - With the single-tag format (used with [void elements](https://www.w3.org/TR/html5/syntax.html#void-elements)), no closing tag is necessary, so tags like `<br>` or `<meta>` [can be used without any closing tag or `/` at all](https://www.w3.org/TR/html5/syntax.html#start-tags)