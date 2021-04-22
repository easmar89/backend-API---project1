# JENSEN YH - Backend course // Project 1 //

## E-Commerce API:

-   **/api/products** >> retrieve all items from the inventory
-   **/api/cart** >> retrieve all items added to the cart
-   **/api/cart/:id** >> _POST_ -- add an item to the cart
-   **/api/cart/:id** >> _DELETE_ -- delete an item from the cart

### **NB:** It is commonly thought by many that its better to pass the data for a POST method via the body (req.body), **_but in this specific case_**, since we are not actually creating any new item (which is why passing the data via the body is considered better), i believe that passing the id via the url parameters is equally possible. So i maintain the **_/api/cart/:id_** route for consistency purposes since its the same for the DELETE method.

&nbsp;

## Technogologies used

-   Node.js
-   Express
-   Lowdb

&nbsp;

## Process implemented:

-   Routes based on REST API architecture
-   Controllers stored in separate files and imported to app.js
-   Database configuration in a separate file and imported
-   Testing done with Postman
