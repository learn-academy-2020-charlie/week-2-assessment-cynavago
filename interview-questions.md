# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer:
  You use super to pass props from the contructor in the parent class. It is used when defining a class, to get information from the parent class. 

  Researched answer:
  The super keyword is used to access and call functions on an object's parent. When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.


2. What is a virtual DOM?

  Your answer:
  The user interface. It is what the code looks like on the page. A document object model, creates UI, takes HTML and shows it on the page (ReactDOM). The visual representation of our code. we have to update the DOM every time we makde changes. The virtual DOM allows updates to happen in smooth and efficient way, allows React to make updates. 

  Researched answer:
  A DOM is an interface used with Javascript by using JSON data.

  In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.


3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer:
  You will need an HTML tag, a head that includes React scripts, a body that includes a react container, and a script with the content you want. Inside the script, you will have the class which extends from React.Component, a render, return, the text you want ("Hello World"), the domContainer, and ReactDOM.render.

  Researched answer:
  Inside the script tags-

  1. Start out with a class defintion for our component. It should extend from the React.Component class. 
  2. Within this class is a single method, the render method. 
  3. The render method will return a single HTML element. 
  4. Our text will come after the return. 
  5. Include final lines to define a container and tell React to render our component in the container.


4. What is JSX?

  Your answer:
  A language thats half Javascript, half HTML. You can use JSX within a React app. Allows you to use HTML tags within a React app in a Javascript file.

  Researched answer:
  Syntax extension to JavaScript. JSX is a flavored HTML that behaves alsmost like HTML with a couple of exceptions, such as the className syntax rather than class. because class is reserved for HTML.
  
  JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX converts HTML tags into react elements. You are not required to use JSX, but JSX makes it easier to write React applications.

5. What is state in React?

  Your answer:
  Components can either hold states or not hold states. States are objects that store components dynamic data and determine how that component will behave.

  Researched answer:
  React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders. State is managed within the component (similar to variables declared within a function). 


6. STRETCH: What is hoisting in JavaScript?

  Your answer: (I had to Google this one)
  Javascripts default behavior of moving variables/functions at the top of the currents cope. Declaring any variable or function in code is equal to declaring it at the top. 

  Does this mean that the first thing JS does is run the defined variables and functions? Even if they might be at different scopes?


  Researched answer:
  Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods:
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.

Mounting: Mounting means putting elements into the DOM.
Updating: A component is updated whenever there is a change in the component's state or props.
Unmounting: The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

- event.preventDefault()
The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

- DOM events
DOM events allow JavaScript to register different event handlers on elements in an HTML document.

Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

- React props
“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. From parent to child.

- onChange
The onchange event occurs when the value of an element has been changed.

For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.
