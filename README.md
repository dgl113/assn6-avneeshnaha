[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Ut56MPnQ)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=14083925)
# DGL 113 2024WI Assignment #6

This assignment continually uses the drink order processing webpage for you to demonstrate programming skills in object oriented programming and DOM operations. You will reuse the class created in the last assignment, and create a new class to support the functionality of the drink order processing web application.

#### Preparation

Preview the docs/index.html file with a web browser to get a
general idea about the webpage layout and its functionality,
then complete the following tasks.

Create a new file in the `docs` folder called `app.js`.

At the top of the `docs/app.js` file, add the `use strict` directive:

```javascript
'use strict';
```

Add a `<script>` element to the `index.html` file to include the `app.js` script.
Place the `<script>` element just before the closing `</body>` tag just like
the script element that is used to include the `main.js` script.

#### Part I - Copy and enhance the existing class, OrderItem

1. Make a copy of the `OrderItem` class from Assignment #5.
2. Add a new method `tr(doc)` to the class which returns a `tr` DOM element
   for document `doc`. The `tr` element returned must have 4 cells:

   - the quantitity
   - the size
   - the description
   - a "Delete" button

NOTE: the quantity, size, and description are data fields of the OrderItem class. The tr returned by this method will be used to build the web table.

#### Part II - Create a new class `Order` with the follow components:

1. a data member orderedItems - an array of `OrderItem` objects.
2. `add(item)` method that adds an item to the order.
   Here, `item` is expected to be an `OrderItem` object. Verification is optional.
3. `delete(index)` method that deletes an item from the order at index position `index`.
4. `tbody(doc)` method that returns a `tbody` DOM element for document `doc`. The `tbody` element returned must have a `tr` DOM element for each of the items in the order. You may use the `tr(doc)` method of the `OrderItem` class described above to help with this.
5. `cost()` method that returns the total cost of the entire order. You can use the existing `cost()` method of `OrderItem` class developed in Assignment #5 to get the cost of the individual `OrderItem` objects.
   **Remember that:**
   - Short, Tall, Grande, and Venti coffees cost 2.99, 3.19, 3.49 and 3.99 respectively, and
   - Short, Tall, Grande, and Venti teas cost 2.85, 3.05, 3.25, and 3.50 respectively.

NOTE: Only modify the `docs/app.js` and `docs/index.html` files.
Do not make changes to any other files.
