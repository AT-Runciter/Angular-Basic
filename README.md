# Angular-Basic

Hi! This repository contains my experiments with Angular.
These tasks go from the simplest to the most complex - from the first steps to creating components to experimenting with a login page.

homework - 
https://angular-basic-test-homework.netlify.app/

What's going on here: my first attempts. The assignments were as follows:
1. Delete the markup in the app.component.html file and create a paragraph with any content. Add a first-level heading with any text in the index.html file.
2. Enter a command or edit the packege.json file in the project, its start field, so that the project opens automatically in the browser after it starts.
3. Create several components through the angular cli by naming them: header, content, footer. Give three components the markup you want and display these components on the visual part of the application page.
4. Write down the general styles that will be set for all components and the styles that will be set for html elements only for a specific component.

homework02r (events and data binding) - 
https://angular-basic-homework02r.netlify.app/

What has been done: a project with simple routing has been created, with three routes. The assignments were as follows:
1. Add an image tag and pass the local or absolute path to the image using data binding.
2. Create a slider without animation. Place an image and two buttons "Back" and "Forward" below it. In the component, create an array with paths (relative or absolute) to different images. Change the path to the image by substituting the values of the array when you press the keys.
3. Implement the ability to switch slides using the keyboard.

homework03 (directives and pipe) - 
https://angular-basic-homework03.netlify.app/

Three components were retained in this task, but they were not used in the assignment. The task itself was as follows:
1. Create an array of text strings and print the contents of the array to a list template (ol or ul). Add a handler for each item that, when clicked on a separate element in the template, will display the content of the last clicked list.
2. Create four input tags of radio type. Each flag is responsible for its own colour, which should be set to a separate element as a background. For example: there is a paragraph and inputs from it, when you click the first one, the colour of the paragraph turns blue, the second one - red, the third - green, the fourth - yellow.
3. Create an example where you use all the existing built-in Angular pipelines.
4. Create any html element(s) and set the logic so that when you click on it, it is removed from the DOM tree.

homework04 (angular modules) - 
https://angular-basic-homework04.netlify.app/

This task is my favourite) What is done here:
1. Create two modules named: clothing and baby products.  
2. Create the modules (as specified in the task above) by specifying them in the imports array of the AppModule module. Create components and bind them to the appropriate module, for example: women's clothing, men's clothing, children's clothing, toys, baby food, school, etc. as desired. In the files app.component.html and app-routing.module.ts, write everything you need for the correct operation of routing and the ability to navigate between pages by links. (AppModule in the declarations array should not contain anything other than AppComponent).  
3. For each module, create an index.ts file and specify "exports * from 'component path' " and correct the import in other files by specifying the location of index.ts.  
4. Create additional components for each section, displaying them like tabs (site tabs) and filling them with headings with a name, for example: women's clothing - dresses, jeans, sweaters, etc. Add content and styles to these components at your discretion. 
  
homework05 (angular components) - 
https://angular-basic-homework05.netlify.app/  
  
1. Create cards-container and card-block components. In the cards-container component, create an array of products by type:  
products = [ {id: 1, name: ‘product 1’, price: 110, description: ‘product1 text description’},  
{id: 2, name: 'product 2', price: 120, description: 'product2 text description'},  
{id: 3, name: 'product 3', price: 130, description: 'product3 text description'}, ],  
with your content and write the <div class="product"></div> element in the template under it the output of child components. Transfer and display data in the card-block without a description field, add a "Read" button. Implement the functionality so that when you click the button, data is transferred to the parent component, displaying all product information in <div class="product"></div>. Write the markup and styles at your discretion.  
2. Add the "I want a discount" button above the task markup above. After clicking the button, the child components should display prices 15 times less than the initial price of the product, without changing the value of the price property. In the console, output an array of references to child components for inspection.  
3. In the products array, create a new color property specifying the different color values as strings. In the content part of the card-block, pass the "b" tag, substituting the value of this property.  
<app-card-block *ngFor="let product of products"> <b>{{product.color}}</b> </app-card-block>.  
Use the ng-content tag in the child component, get a reference to the "b" tag, and use a hook (the component's lifecycle method) to add the element's background with the color specified in it.  
4. Create the unordered-list and list-item components. The unordered-list task will display the list items with text. The data is in the form of an array of lines in the parent component (appunordered-list). The list-item child component displays the data received from the parent in its template. Implement in two ways, through input and ng-content.

    
homework06 (the basics of services and their role in the application) - 
https://angular-basic-homework06.netlify.app/  
  
1. Create and register a service by connecting it to a component. Create an array of strings with the names of products and a method that returns a reference to the array. Display the data in the component as a list.  
2. Add a field to the markup in the application, adding the filter functionality to the task above. By writing in the field the name of the product in the list, only products with this name are displayed.  
3. Create a service that contains an array of integer values, add a method that sorts the array in ascending and descending order, and returns the maximum number from the array. Implement the data retrieval and output in a component.  
4. Implement the functionality of the tasks above by filling the array with objects that describe the product, for example:  
products = [ {id: 1, name: 'product 1', price: 110, description: 'product1 text description'}  
{id: 2, name: 'product 2', price: 120, description: 'product2 text description'}  
{id: 3, name: 'product 3', price: 130, description: 'product3 text description'}, ];  
Use markup at your own discretion, prompt the user when nothing is found according to the filter criteria.  

homework07 (introduction to HttpClient and RxJs)

1. Create a component and a service to display the downloaded data from https://jsonplaceholder.typicode.com/albums. In the service, connect the HttpClient and make a GET request. In the component, display the information in the template and through console.log();
2. Create a separate file album.ts. In it, register the Album class with instances of the "id" and "title" properties. Add the pipe method to the request in the task service above. Use the map function of the RxJs library and convert the data received from the server into an array of Ablum objects that do not have the "userId" property compared to the server array. Print the array to console.log() before the conversion.
3. Step by step, implement the get, post, put delete queries in the application on the topic "fitness exercises done", having previously installed and connected the InMemoryWebApiModule plugin (remember that requests to remote servers will not work with the plugin connected).
4. Use the interval function of the RxJs library in the component, displaying the work counter. Implement the start on the "Start" button and stop on the "Stop" button.

homework08 (forms) - 
https://angular-basic-homework08.netlify.app/

1. Create a form with the E-mail, password, and Submit button fields. Use two-way binding to the fields. After clicking "Submit", output an object with the email and password keys with the values entered from the form in the template via json or console.log() pipeline.
2. Create a form according to the task described above using reactive forms. Add validation and appropriate styles to the fields to reflect their state.
3. Implement using FormGroup and FormBuilder. Add a <input type="checkbox"> form. The button should be active only when the form is filled in correctly and the checkbox is in the selected state. Add optional fields to the form for your hobbies using the FormArray with the ability to create them. Display the output of the generated form object.
4. Add to the form the display of error messages during its filling. After submitting the data, the form should be automatically cleared to its initial state.

homework09 (routing)

1. Create two working routes in which the routes array in app.routing-module.ts, which is passed to RouterModule.forRoot, is empty, use additional modules.
2. Connect lazy boot to one of the routes created in the task above. You can edit the route settings if necessary.
3. Create a site interface, for example, a list of products with a description of your choice, for which create a product filter functionality (displaying only those that match the filter criteria) using the route parameters. For example: the products are phone cases and each has its own colour and with the help of <input type="radio"> the user chooses which colour he is interested in.
4. Create a 'login' route that will contain login and password fields, when entered, the login: Denis, password: 1812 or login: Mikhail, password: 1911 will lead to the 'moderator' path, which contains a greeting: "Hello, [Login name]".
