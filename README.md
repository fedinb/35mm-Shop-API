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


By the way, a couple of photos shot on Kodak Portra 800 during my trip in Florence: film with ID 1 at 35mm-shop.glitch.me/films.


![Cat in the window.](https://cdn.glitch.com/6a152ebb-6dc1-4d41-914c-715435996795%2F000047850029.png?v=1608111824244)

![Florence Cathedral shot from distance.](https://cdn.glitch.com/6a152ebb-6dc1-4d41-914c-715435996795%2F000047850027.png?v=1608111830071)


