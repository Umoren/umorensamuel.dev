---
image: /images/uploads/how-to-build-an-image-gall-3-.png
title: How to Connect to an API with JavaScript using Axios
date: 2020-06-27T12:01:55.824Z
published: true
tags:
  - javascript
  - api
  - es6
  - axios
  - frontend
canonical_url: true
description: One of the most underrated concepts in frontend web development
  that most "self-learners" tend to overlook is knowing how to connect to an
  API.
---
One of the most underrated concepts in frontend web development that most "self-learners" tend to overlook is knowing how to connect to an API.
I recently got to work with consuming REST APIs and I had to learn the popular  [HTTP Methods](https://restfulapi.net/http-methods/) and  [status codes](https://restfulapi.net/http-status-codes/). 

> A big part of working with JavaScript is knowing how to connect to APIs. As a fledgling developer, you may have been told at some point to just "play around with some APIs!" to learn what they are and how to work with them. -Tania Rasca

API stands for "**Application Programming Interface**" and if it still sounds like a buzzword, pause here and check out this article on  [freecodecamp](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/).

My first experience connecting to an API with JavaScript was with this Tania Rasca's article -  [How to Connect to an API with JavaScript](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/). She did a great job of introducing what web API is, how to use HTTP requests with JavaScript, and some DOM manipulations. The year was 2017, XMLHttpRequest(XHR) was the more popular way of fetching data with vanilla JS and Ajax was mostly used by jQuery developers.


Since then, we now use JavaScript's [ Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  for fetching resources, and it has brought some sort of simplicity and flexibility to connect with APIs. However, fetch isn't supported fully in most browser versions so you'll have to use Polyfills (which is too much of work).

![fetchresults.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1574378686474/iq8tjQ1bp.png)

In this article, we would be using Axios.

> Axios is an open-source library that allows us to easily make HTTP requests. It’s effectively just Fetch with extra superpowers!

with Axios, you have these features:
- Make XMLHttpRequests from the browser
- Make HTTP requests from node.js
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client-side support for protecting against XSRF

The feature that interests me the most is "Automatic transforms for JSON data".
This means you don't have to do this:
```javascript
let data = JSON.parse(response)
```
> 
The JavaScript function JSON.parse() is used to convert text into a JavaScript object

and you get to avoid absurd errors like this:

![absurd.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1574382317953/Vh5dN0xPJ.png)
 
Let's get started.

**Goal**:
- Replace Tania Rasca's XMLHttpRequest method with Axios

**Pre-requisites**
- Must have read through this - [How to Connect to an API with JavaScript](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/). 
- Built this  [simple app](https://taniarascia.github.io/sandbox/ghibli/)  with XHR
- Basic knowledge of async and await. Check  [here](https://javascript.info/async-await) 

Let's add **Axios** to our HTML project.
```html
<!--index.html-->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
Now let's start our **GET Http request:** 
If you tried this with XHR, you probably had to assign a ```new XMLHttpRequest``` object to a ```request``` variable and then open network connection with the ```open``` method with the **type of request** and **API endpoint** as arguments. 
Something just like this: 
```javascript
// app.js
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
  // Begin accessing JSON data here
}

// Send request
request.send()
```
with Axios, making the same request is so easy:
```javascript
// app.js
axios({
  url: 'https://ghibliapi.herokuapp.com/films',
  method: 'get'
})
```
Very self-explanatory right??
Now let's do some ```async ```-ing and ```await```-ing...

> Async/Await is just a way to play around with Javascript promises in a more comfortable fashion. 


> 
A promise is an object that may produce a single value some time in the future: either a resolved value or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
**src:**:https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

```javascript
;(async () => {
  const response = await axios({
    url: 'https://ghibliapi.herokuapp.com/films',
    method: 'get'
  })

  console.log(response)
})()
```
let's go through what just happened there. 
Firstly, we are using a self-invoking function otherwise called IIFE (Immediately Invoked Function Expression). Basically, it's just a function that calls itself. It starts with an opening curve bracket, ends with one and a complete pair.

```javascript
( () => {
...function logic
})()
```

Next, we have an **async** before the arrow function. Async before a function simply means that the function would always return a promise.
Finally, there's an await before the Axios block. Remember a Promise would always produce a single value right? , **await** here says "hey Axios, you have to wait to confirm if your promise has been fulfilled, rejected or pended". 

Currently, we've succeeded in retrieving the response from the API endpoint.

![data.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1574384312217/2nNfWn29i.png)

Great!

But there's an issue. We can't loop through this response object the way Tania did with ```data.forEach()```. So we have to find a way to get the data array we want to show in our page. 

```javascript
;(async () => {
    const response = await axios({
      url: 'https://ghibliapi.herokuapp.com/films',
      method: 'get'
    })
    .then(response => {
        let data = response.data
        console.log(data)

        data.forEach(movie => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
    
            const h1 = document.createElement('h1')
            h1.textContent = movie.title
    
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 150)
            p.textContent = `${movie.description  }... `
            
    
            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)
            // card.appendChild(button)
        })
    })
    .catch(err => {
       console.log(err)
    })
  })()
``` 
Let's break it down.
Firstly, ```then()``` returns a promise. 
Then, we assigned the ```response.data``` (which returns an array containing the data we want to display) to a variable ```data```. We get what we've been looking for in the console.
![movieArray.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1574385300274/K3ok5n5Qa.png)

Now we can loop through the array by using ```forEach``` which executes the ```movie => {...}``` function **once for each** array element.

Yeah, so that's it! 
We've moved on from XHR to Axios seamlessly!! 

Okay, let's see if our code runs. Run the pen on and click on the 0.5X.

It seems to be working fine.

%[<iframe height="265" style="width: 100%;" scrolling="no" title="XWWQmWG" src="https://codepen.io/samtech23/embed/XWWQmWG?height=265&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/samtech23/pen/XWWQmWG'>XWWQmWG</a> by Samuel Umoren
  (<a href='https://codepen.io/samtech23'>@samtech23</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>]


Thanks for reading. If you like this, please comment or follow me on  [Twitter](https://twitter.com/SamuelUmoren16). 