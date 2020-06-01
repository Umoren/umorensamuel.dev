---
image: /images/uploads/creating-your-own-custom-events-in-javascript.png
title: Create custom events in JavaScript
date: 2020-05-27T12:28:52.449Z
published: true
tags:
  - javascript
  - dom
  - react
  - redux
  - vue
canonical_url: true
description: Learn how to create and trigger your own JavaScript Events in 5minutes.
---
I was going through Redux docs, learning Actions and i was wondering what "dispatch" meant in JavaScript. In the process, i stumbled on JavaScript dispatchEvent from [javascript.info](javascript.info) and them boom! you can create your own JavaScript events? Let's try this thing!

Every JavaScript developer with knowledge of the Document Object Model (DOM) knows of popular events such as: `click`, `change`, `focus`, `submit` and so on. These events are called Browser Events.  However, a developer can decide to create their own events using the `Events` or `CustomEvents` constructor. These sort of events are called Synthetic Events. **(React Developers would be familiar with the term Synthetic Events and Vue Developers with Custom Events)**.

### Creating an Event

#### Using the Event constructor

The syntax:  
``` event = new Event(type [, eventInitDict]) ``` 

Arguments: 

* type: This argument is a string that defines the type of event you are creating. 

* eventInitDict: This argument is has two optional attributes:

  * bubbles: returns a boolean value (false by default). if true, the event is directed to it's intended target.****
    
    **Note**: You must set bubbles to true for your custom event to work properly, when it's set to false, the event is directed to the parent object not the target. If you're still confused, check this [code sandbox](https://plnkr.co/edit/?p=preview&preview).    
    
  * cancelable: returns a boolean value (false by default). if true, it cancels the event's default action. Custom Events do not have default actions but when you dispatch an event it might add some default action, using ``` event.preventDefault() ``` prevents any default action. 
  
     **Note**: To use ``` event.preventDefault() ``` in a new custom event, you must set cancelable to true.





```javascript
 let event = new Event('binder', {
            bubbles: false, 
            cancelable: false
        });
```

#### Dispatching an Event

After creating the event, the next step is to dispatch it to the EventTarget or element.

```javascript
  <h2 id="defaultText"> Hey check this out </h2>
    <script> 
        const headerText = document.getElementById('defaultText');
        document.addEventListener('setToRed', (e) => {
            headerText.style.color = 'red';
        });

        let event = new Event('setToRed', {
            bubbles: true
        });

        headerText.dispatchEvent(event)
    </script>
```

The setToRed event, would just the h2 tag to red (very useless event!). You should pay attention to the ```headerText.dispatchEvent(event)``` and you can also set bubbles to false and see what would happen.

##### old method of creating custom events

![Custom Events ](/images/uploads/carbon.png "Old way of creating custom events")

#### Using CustomEvent Interface

This interface inherited from the Event class gives you the ability to add data properties to the event object. 

Let's see how this works by adding a property to our `setToRed` event.

```javascript
  <h2 id="defaultText"> Hey check this out </h2>
   
    
    <script> 
        const headerText = document.getElementById('defaultText');
        document.addEventListener('checkout', (e) => {
            headerText.style.color = 'red';
            headerText.textContent = e.detail.text
        });

        let event = new CustomEvent('checkout', {
            bubbles: true,
            detail: {
                text: 'new stuff is here'
            }
        });

        headerText.dispatchEvent(event)
    </script>
```

The CustomEvent gives us a \`detail\` field that can accept any property. In our code we added a text property that would override the headerText content.

We just created and dispatched custom events. Now we can try something more interesting. Let's play around something that works similarly to two way data binding. JavaScript frameworks like React and Vue, have made implementing two way data binding very easy and readable but we can try something close to that with custom events.

**Two way data binding in React**

The handleChange() method targets the value of the input and when rendering we say get and update the input state onChange event.   

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div id="app">
        <input onChange={this.handleChange} value={this.state.input} />
        <p>My Name is: {this.state.input}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Check the result here: [React two way data binding](https://04o46x03q0.csb.app/)

**Two way data binding with Vue**

Vue makes this very easy with it's v-model directive.

```javascript
<template>
  <div id="app"> 
    <input v-model="message" placeholder="My name">
    <p>My name is : {{ message }}</p>
  </div>

</template>

<script>

export default {
  name: "App",
  data(){
    return{
      message: ''
    }
  }
};
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
```

Check the result here: [Vue two way data binding](https://78dm4.csb.app/)

**Now something that's not two way binding but is similar with CustomEvents** To implement two way binding with JavaScript, we would have to introduce getters and setters, that's out of the scope of this article.
Let's play around with custom events by setting the value of the input to a text property we would add in the details field. Then we would access that property in our handler function and viola!!

```javascript
        <input type="text" placeholder="type a message" class="inputText">
        <pre>  </pre>
       
      </form>

      <script>
          const form = document.querySelector('form');
          const inputText = document.querySelector('.inputText');
          let pre = document.querySelector('pre');
          
        form.addEventListener('awesome', (e) => {
            pre.textContent = `My Name is: ${e.detail.text()}`
           
        });

        inputText.addEventListener('input', function() {
                   this.dispatchEvent(new CustomEvent('awesome', { 
                       bubbles: false, 
                       detail: { 
                           text: () => inputText.value
                        } 
                    }
                ))
        });
  
      </script>
```

### Summary

* We can create our own events from code by using an Event object: `new Event('title' [, eventInitDict])`. 
* eventInitDict has two properties: `bubbles:false`, `cancelable: false`.
* For custom events with data properties, we use the `CustomEvent` interface that provides us with a detail field where we can assign event data. 
* event.detail is used to access the detail object in our handler function.

### Read more:

* [Creating and Triggering Events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)

* [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

* [dispatchEvent](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)

* [Dispatching Custom Events] (https://javascript.info/dispatch-events)

* [Custom Events - DOM Spec] (https://dom.spec.whatwg.org/#interface-customevent)

* [Events - DOM Spec] (https://dom.spec.whatwg.org/#interface-customevent) 