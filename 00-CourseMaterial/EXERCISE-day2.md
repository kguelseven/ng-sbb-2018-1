# Exercises Angular

## Exercise 4: Angular ToDo App

### 4.2 Component Architecture
Split the single `overview` component into several components:

- `new-todo` component for the entry
- `todo-list` for the list
- `todo-item` for the display of a single item

The logic for managing should remain in the `overview` component. The new components should be simple presentation components.

### 4.3 Routing
Introduce a second screen which shows the completed items:

- Create a new component for the second screen.
- Introduce a new url route `./done` which shows the second screen.
- Reuse components: `todo-list` and `todo-item`
- On the new screen completed items can be deleted
- Introduce navigation links to navigate between the screens



## Exercise 5: Forms

In the ToDo Application implement a proper form for the entry of a new todo.

Duplicate the component and implement it once with a template driven form and a second time with a reactive form.  
Add a validation that the text should be at least 3 characters.  
As a reference study the examples in `10-basic-constructs/src/app/02-forms/`.

*Optional:* Find out how to implement a custom validation: The text should begin with a capital letter. Try to implement that rule for the reactive and for the template driven approach.



## Exercise 6: Backend Access

The directory `01-ToDoApp/_server` contains a simple API-Server implementing basic CRUD functionality for our ToDo application.
Start the server with the following commands:

	npm install #just once
	npm start
	
You should now get an array with one rating at the url: `http://localhost:3456/todos`.

Your task is now to access this backend API from the ToDo application:
- When the application is loaded, all the ratings should be loaded from the server
- When a rating is added, it should be saved to the server
- When a rating is completed it should be updated on the server
- When a rating is deleted, it should be deleted from the server.

Start from `40-ToDoApp/03-Simple-ToDo-backend-skeleton`.
This project already loads the ratings from the server when the application is loaded.


The API implemented by the REST-Endpoint is described in the table below:


HTTP-Method   | URL (example) 			      	| Request-Body
------------- | ------------- 			      	|-------------
GET	    	  | http://localhost:3456/todos   	|
GET	    	  | http://localhost:3456/todos/1 	|
POST		  | http://localhost:3456/todos		| { "title": "Test", "completed": false}
PUT		 	  | http://localhost:3456/todos/1	| { "title": "Test 2", "completed": true}
DELETE		  | http://localhost:3456/todos/1	| 

Note that all responses are wrapped in a response object with a `data` property.
This is a typical security measure of JSON endpoints. See: http://stackoverflow.com/questions/3503102/what-are-top-level-json-arrays-and-why-are-they-a-security-risk



## Exercise 7: Modularization

Extract the "done"-Screen in the ToDo App in its own module.  

As a reference study the forms examples:

- The module in `10-basic-constructs/src/app/02-forms` defines its own routes.
- You should implement the same "pattern".
- Extract a module i.e : `src/app/todos/components/done-todos/done.module.ts` This module should declare the components for the "done screen"
- Extract its own routes i.e. into: `src/app/todos/components/done-todos/done.routing.ts`
- Import the `done.module`in the `app.module`



### 7.1 Lazy Loading (Optional) 
The module should be lazy loaded.

As reference study the backend access example.

- The module in `10-basic-constructs/src/app/03-BackendAccess` defines its own routes. What is the difference to the forms examples above.
- Study how the backen module is referenced in `src/app/app-routing.module.ts`



## Exercise 8: Routing

Create a third screen that shows the details of a single todo. The screen should be bookmarkable i.e. the id of the ToDo should be part of the URL.

- As a reference study the components in `src/app/04-routing`
- create a new component for the `todo-details`
- This component should access the current route via the `ActivatedRoute` service
- retrieve the id of the current todo from the URL, then get the todo from the service



## Exercise 9: ngrx

Inspect the app in `40-ToDoApp/06-ToDo-ngrx`.  
Try to understand the flow of component -> action -> store and also the effects.  
In the app you can't delete todo items. Implement this missing functionality by extending the store and the effects.


## Exercise 10: mobx

Inspect the app in `40-ToDoApp/07-ToDo-mobx`.  
Try to understand the angular components react to data changes.  
In the app you can't delete todo items. Implement this missing functionality by extending the store.

