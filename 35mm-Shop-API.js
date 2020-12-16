// Load external libraries
const express = require("express"); // api
const low = require("lowdb"); // database
const { nanoid } = require('nanoid'); // unique ids

// Setup a new database
const db = low(".data/db.json", {
  storage: require("lowdb/lib/storages/file-async")
});

db.defaults({ films: [], orders: []}).write();

// Set data
const films = [
  {
    ID: 1,
    brand: "Kodak",
    name: "Portra 800",
    price: 12.99
  },
  {
    ID: 2,
    brand: "Kodak",
    name: "UltraMax 400",
    price: 6.99
  },
  {
    ID: 3,
    brand: "Ilford",
    name: "HP5 Plus Black and White",
    price: 5.99
  },
  {
    ID: 4,
    brand: "CineStill",
    name: "800Tungsten Xpro",
    price: 16.99
  },
  {
    ID: 5,
    brand: "FUJIFILM",
    name: "Fujicolor PRO 400H",
    price: 11.99
  }
];

db.set('films', films).write();


// Setup API
const app = express();
app.use(express.json());

// Status endpoint
app.get("/status", function(request, response) {
  response.send("OK");
});

// Films endpoint
app.get("/films", function(request, response) {
  const data = db.get('films').value();
  response.send(data);
});

// Get orders endpoint
app.get("/orders", function(request, response) {
  const data = db.get("orders").value();
  response.send(data);
});

// Place order endpoint. Please follow the template below in Postman in order to place an order.
//{
//    "filmID": filmID,
//    "customer": "CustomerName"
//}


app.post("/orders", function(request, response) {
  
  const customer = request.body.customer;
  
  if (!customer || customer.length <2) {
    response.status(400);
    response.send("Customer name not valid. Please fill out the field and try again.");
    return;
  }
  
  const filmID = request.body.filmID;
  
  if (db.get("films").filter({ ID: filmID}).value().length !== 1) {
    response.status(400);
    response.send("Film ID not valid.");
    return;
  }
  
  const order = {
    orderID: nanoid(),
    filmID: request.body.filmID,
    customer: request.body.customer
  };
  db.get("orders").push(order).write();
  response.send("Order received");
});

// Delete order
//
// Order can be deleted by adding orderID into path variable /orders/:orderID with method DELETE
//
//
app.delete("/orders/:orderID", function(request, response) {
  const orderID = request.params.orderID;
  db.get('orders').remove({ orderID: orderID }).write();
  response.send("Order deleted: " + orderID);
});


// Listed for incomming requests
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});