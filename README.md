# Chitty Chitty Bang Bang Rental Agency ("CCBBRA")

## Summary

[CCBBRA](https://ckinleydavis.github.io/ccbbra/) was developed by Nicholas Herold, Ahmad Kane and Carla Kinley-Davis in 2021 during the global COVID-19 pandemic. The application is meant to address the needs of the traveler who is looking for a rental car during the current vehicle shortage due to months of economic shutdown. 
<br/>
<br/>

## Run the Application

* [GitHub](https://ckinleydavis.github.io/ccbbra/)

* [Heroku](https://placeholder)

* Local Machine &nbsp; <g-emoji class="g-emoji" alias="desktop_computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f5a5.png">🖥️</g-emoji>&nbsp;<g-emoji class="g-emoji" alias="point_down" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f447.png">👇</g-emoji>
<br/>
<br/>

Open a terminal and run the following command to create a MySQL connection:  

    $ mysql -u <username> -p

Once you have logged in with your mysql credentials, run the following command to create the ccbbra_db database.

    mysql > source db/schema.sql

Open a second terminal window and run the following commands to install dependencies and to populate the database with mock data.

    $ npm install
    $ node seeds/index.js

To run the application locally, execute the following on the command-line:

    $ node server.js
<br/>

## Development Workflow
<br/>

### _User Stories_
As a Customer I want to . . . | So that I may . . .
----------------------------- | -----------------------------
rent a car                    | take a trip
select a city                 | see what vehicles are available
view my current rental        | modify my current reservation
view my past rentals          | retrieve my archived receipts
<br/>

### _APIs_
 * [ PLACEHOLDER ]
<br/>
<br/>

### _Libraries_
 * [ PLACEHOLDER ]
<br/>
<br/>

### _Packages_
 * passport : Used for authentication.
 * bcrypt : Used for password encryption.
 * mysql2 : Used as database connection driver.
 * dotenv : Used for securing database connection.
 * express : Used as the application server.
 * sequelize : Used for SQL.
<br/>
<br/>

### _RESTful Services_
homeRoutes.js | HTTP Verb | Action | [HTTP Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) | [ERR](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
--- | --------- | ------ | --------- | ----
'./index' | GET | READ | 200 (OK), 'homepage' with list of rental agencies | 404 (Not Found)
'./signup' | GET | READ | 200 (OK), 'signup' page | 404 (Not Found)
'./login' | GET | READ | 200 (OK), 'login' page | 404 (Not Found)
'./profile' | GET | READ | 200 (OK), 'profile' page with user info | 404 (Not Found)
'./reservation' | GET | READ | 200 (OK), 'reservation' page | 500 (Internal Server Error)
'./carlist' | GET | READ | 200 (OK), 'carlist' page with list of vehicles | 404 (Not Found)
<br/>

api/index.js | HTTP Verb | Action | [Used For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) | [ERR](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
--- | --------- | ------ | --------- | ----
'./reservation/:id' | POST | CREATE | 201 (CREATED), 'reservation' page | 500 (Internal Server Error)
'./myres/:id' | POST | CREATE | 200 (OK) | 400 (Bad Request) 
'./myres/:id' | GET | READ | 200 (OK) | 500 (Internal Server Error) 
'./agency' | GET | READ | 200 (OK) | 500 (Internal Server Error) 
<br/>

### _UI/UX Wireframe_
<blockquote align="center">
<img src="https://www.lipsum.com/images/banners/white_250x250.gif" alt="placeholder">
</blockquote>
<br/>
<br/>

### _ER Diagram_
<blockquote align="center">
  <img alt="VS Code in action" src="./db/ccbbra_model.png">
</blockquote> 
<br/>
<br/>

## Feedback

There are many ways in which you can participate in this project, for example:

* [Submit an Issue](https://github.com/ckinleydavis/ccbbra/issues)

* [Roadmap / Request New Features](https://github.com/ckinleydavis/ccbbra/wiki)

* Ask a question . . .
<br/>
<br/>

## License

Copyright &nbsp;(c)&nbsp; 2021 &nbsp;| &nbsp;CCBBRA&nbsp; | &nbsp;All Rights Reserved
