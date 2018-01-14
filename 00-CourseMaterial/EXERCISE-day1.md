# Exercises Angular

## Exercise 1: Creating an Angular App with Angular CLI

### 1.1 Creating the App

Install Angular CLI as a global npm package:

	npm install -g @angular/cli
	
Create a new Angular application:

	ng new awesome-app
	
Inspect the project that has been created. Try to understand the setup (where is the actual source code, where are the artifacts for deployment ...)

### 1.2 Running the App

Serving the app:

	cd awesome-app
	npm start
	
Navigate a Chrome or Firefox to `http://localhost:4200/`. Inspect the app. Open the browser developer tools and inspect the resources the browser actually loads over the network.


### 1.3 Debugging the App

Debug the app in Chrome:

- Open developer tools
- Open the sources tab
- Open the component sources: Hit Ctrl-P and type 'app.component.ts'
- Set a breakpoint in the constructor

Can you change the title of the component through the debugger?  
Optional: Can you debug in another browser?


### 1.4 Running the App in Internet Explorer

Navigate a Internet Explorer to `http://localhost:4200/`. Inspect the app.  
What is the Problem? Can you fix it?


### 1.5 Creating a Production Build

Create the production artifacts:

	npm run build --prod --build-optimizer --vendor-chunck
	
Inspect the contents of `dist`.  
The content of `dist` can be served with any webserver.  
We can use `lite-server` as a simple webserver:

	lite-server --baseDir="dist"
	
Open the browser developer tools and inspect the resources the browser actually loads over the network.  
What are the differences to the development build?


Note you can also serve a production build like this:

	ng serve -prod
	
 


### 1.6 Running the Tests

Execute the tests:

	npm run test
	
Inspect the tests in `src/app/app.component.spec.ts`.  
Modify a test so that it fails.  
Can you debug the tests?  
Can you run a single test?



## Exercise 2: Creating your first Component

In the project directory from exercise 1:

	ng generate component hello
	
- Inspect the generated sources/changes.  
- Modify the component to display "Hello World" in the browser.  
- Write a test that checks for this behaviour.  
- Extend the app so that this new "hello"-component is used.
- Run the tests again ...  
- Optional: Extend the test in `app.component.spec.ts` so that it checks that the new component is rendered as a child component.

- Change the `hello`-Component: It should have a input where you can type your name and below the input a "Greeting" with your name should be displayed.
- Try to debug by stepping into the "Augury" chrome extension
- Extend the test for the `hello`-Component so that this behaviour is checked.
- Optional: Write a end-to-end test that checks this behaviour. (Hint: `npm run e2e`, `./e2e/app.e2e-spec.ts`


## Exercise 3: Creating an application with routing

Create and run a new project with routing:
	
	ng new fantastic-ng --routing
	cd fantastic-ng
	ng g c first
	ng g c second
	npm start
	
Inspect the generated sources.  
Start the app with `npm start`
Add the routes in `src/app/app-routing.module.ts`:


	const routes: Routes = [
		{ path: 'first', component: FirstComponent  },
  		{ path: 'second', component: SecondComponent  }
  	];
  	
Test the app in the browser.  
Add a default route:

	{ path: '', pathMatch: 'full', redirectTo: 'first'  },
	
Add two links in the `app.component` which enable navigation between `first` and `second` component:  

	<a href="/first">First</a>
	<a href="/second">Second</a>

Test the navigation in the browser. Is it working?  
Inspect the network requests in the browser developer tools ...  
Rewrite to use the `routerLink` directive:

	<a routerLink="/first" routerLinkActive="active">First</a>
	<a routerLink="/second" routerLinkActive="active">Second</a>
	
Inspect the difference ...
Optional: add css to highlight the active state

Create a production build and serve it with a simple webserver:

	npm run build
	http-server dist -p 5679
	
Open `http://localhost:5679/` in the browser. Navigate to the second screen. 
Refresh the browser ... what went wrong?

Change to `hash-routing` by adding the following line in the `app.module.ts`:

	providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],


## Exercise 4: Angular ToDo App
Begin with the project `40-ToDoApp/01-SimpleToDo`.  
Start the application:

	npm install
	npm start

The project gives you a skeleton for a simple ToDo application with a single component. The component contains all the needed functionality in the TypeScript class, but the functionality is not yet connected to the template.

### 4.1 Bind the Template to the Component
It is your task to connect the template to the TypeScript class so that ToDo items can be created and deleted and the corresponding data is displayed in the UI.

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

### 4.4 Add a component library (PrimeNG)

Replace the '+'-button with a button from the PrimeNG component library.

Install the PrimeNg library and Font Awesome:

	npm install primeng font-awesome
	
Include the stylesheets in `.angular-cli.json`:

	"styles": [
        "../node_modules/primeng/resources/primeng.min.css",
        "../node_modules/primeng/resources/themes/omega/theme.css",
        "../node_modules/font-awesome/css/font-awesome.min.css",
        "styles.css"
      ],	
	
Import the `ButtonModule` in `app.module.ts`.	
Use the button directive from PrimeNG in the template:

	<button pButton icon="fa-plus-circle" class="ui-button-info" id="add-button"></button>
	
The added value of the button component might be questionable ... but it gets more obvious when you need a `SplitButton`. See https://www.primefaces.org/primeng/#/splitbutton.
