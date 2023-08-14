# Web Formatters & Web Snippets

As a FrontEnd Engineer, one of my primary responsibilities is to **develop** and **maintain** Web apps in more human-readable formats, which necessitates the use of various tools and indentation approaches. I'm hoping that `Web Formatters` will help bridge that gap.

`Web Snippets` to speed up you're routine work and to improve your productivity.

## Thanks
This extension is combination of [clean-css](https://github.com/clean-css/clean-css) for **CSS** files and [js-beautify](https://github.com/beautify-web/js-beautify) for **HTML** files, Thanks for wonderful contributions.

# Web Formatters Usage
- This extension will work for either `selected content` or `an entire page`.
- Do press `shift+alt+f` shortcut and make sure the current file type is either `CSS` or `HTML`.

# Web Snippets Usage
## Shortcuts in **`[.html]`** file:

:html - HTML Boilerplate code
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
  <main></main>
</body>
</html>
```
:l - Create Main layout.
```html
<main>
  <header></header>
  <aside></aside>
  <article></article>
  <footer></footer>
</main>
```
:pl - Create Page layout
```html
<section class="page-content">
  <div class="page-header"></div>
  <div class="page-body"></div>
  <div class="page-footer"></div>
</section>
```
:bp - Primary button in with BS4 class names
```html
<button type="button" class="btn btn-primary" id="btnSubmit">Submit</button>
```
:bs - Secondary button in with BS4 class names
```html
<button type="button" class="btn btn-secondary" id="btnCancel">Cancel</button>
```
:im - Create image tag
```html
<img src="image source" alt="alt text">
```
:a - Create Anchor tag with js href
```html
<a href="javascript:;">link</a>
```
:it - Create Form 'text' field
```html
<label for="firstName">First Name</label>
<input type="text" id="firstName" placeholder="Enter your Name">
```
:ie - Create Form 'email' field
```html
<label for="email">Email</label>
<input type="email" id="email" placeholder="email">
```
:ip - Create Form 'password' field
```html
<label for="password">Password</label>
<input type="password" id="password" placeholder="password">
```
:i - Create Icon in HTML document
```html
<i class="icon"></i>
```

## Shortcuts in **`[.css]`** file:
:bn - Remove border
```css
border: none;
```
:px - To apply padding LEFT and RIGHT sides of an element
```css
padding: 0 1rem;
```
:mx - To apply margin LEFT and RIGHT sides of an element
```css
margin: 0 1rem;
```
:py - To apply padding TOP and BOTTOM sides of an element
```css
padding: 1rem 0;
```
:my - To apply margin TOP and BOTTOM sides of an element
```css
margin: 1rem 0;
```
:ma - To center the element(margin auto)
```css
margin: 0 auto;
```
:bx - Apply border for LEFT and RIGHT
```css
border-left: 1px solid #000;
border-right: 1px solid #000;
```
:by - Apply border for TOP and BOTTOM
```css
border-top: 1px solid inherit;
border-bottom: 1px solid inherit;
```
:fn - Float none
```css
float: none;
```
:on - Outline none
```css
outline: none;
```
:bs - Apply box shadow
```css
box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
```
:bsn - To unset/remove box shadow
```css
box-shadow: none;
```
:ms - Create mask-size property
```css
mask-size: contain;
-webkit-mask-size: contain;
```
:mi - Create mask-image property
```css
mask-image: url();
-webkit-mask-image: url();
```
:mp - Create mask-position property
```css
mask-position: center;
-webkit-mask-position: center;
```
:mr - Create mask-repeat property
```css
mask-repeat: no-repeat;
-webkit-mask-repeat: no-repeat;
```
:m - Create Mask shorthand property
```css
mask: url() no-repeat center;
-webkit-mask: url() no-repeat center/contain;
```
:bg - Create Background shorthand property
```css
background: url() no-repeat center/contain;
```
:f - Create font short hand property
```css
font: 1rem/1.5 "regular";
```
:sb - Create Custom scroll bar
```css
::-webkit-scrollbar{width: .25rem}
::-webkit-scrollbar-track{background: #0000}
::-webkit-scrollbar-thumb{background: #666}
```

## Shortcuts in **`[.js]`** file:
:f - Create named function
```js
function name(params) {}
```
:af - Create anonymous function
```js
function(params) {}
```
:qs - Query selector
```js
document.querySelector();
```
:cl - Console log
```js
console.log();
```
:ce - Create an Element.
```js
document.createElement('element');
```
:de - Debugger;
```js
debugger;
```
:ae - Add Event Listener
```js
document.addEventListener('click', () => {});
```
:ac - Add Class
```js
document.classList.add('class');
```
:rc - Remove Class
```js
document.classList.remove('class');
```
:ga - Get Attribute
```js
document.getAttribute('attr');
```
:sa - Set Attribute
```js
document.setAttribute('attr', value);
```
:ra - Remove Attribute
```js
document.removeAttribute('attr');
```
:ih - Inner HTML Element
```js
document.innerHTML = 'elem';
```
:tc - Text Content
```js
document.textContent = 'content';
```
:qsa - Query Selector All
```js
document.querySelectorAll('selector');
```
:fe - For Each
```js
array.forEach((item) => { body });
```
:fo - For of Loop
```js
for (let i of array) { body };
```
:m - Map method
```js
array.map((i) => { body });
```
:fl - Filter method
```js
array.filter((i) => { body });
```
:fc - Call method
```js
method.call(context, arguments);
```
:fa - Apply method
```js
method.apply(context, arguments);
```
:jp - JSON parse
```js
JSON.parse(obj);
```
:js - JSON Stringify
```js
JSON.stringify(obj)
```
:si - Set Interval
```js
setInterval(() =>{ body }, 1000);
```
:st - Set Timeout
```js
setTimeout(() =>{ body }, 1000);
```
:us - Use Strict
```js
'use strict';
```