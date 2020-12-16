# 35mm Shop API

This code provides an example of simple API for an online shop selling 35mm films.

Full list of films is available at 35mm-shop.glitch.me/films via **GET** request.

New order can be created by creating an **POST** request at 35mm-shop.glitch.me/orders. For creating an order, the following text should be added into body:

    {
        "filmID": filmID,
        "customer": "CustomerName" # Currently random names are added via "{{$randomFirstName}} {{$randomLastName}}"
    }

Full list of orders is available at 35mm-shop.glitch.me/orders via **GET** request.

Any order can be deleted via **DELETE** request by adding a path variable *:orderID* to 35mm-shop.glitch.me/orders/[here].

Screenshot of Postman with all four requests added to collection is added below:
![Postman screenshot](https://github.com/fedinb/35mm-Shop-API/blob/main/Postman_Screenshot.png)

