# Chitty Chitty Bang Bang Rental Agency ("CCBBRA")

## Summary

[CCBBRA](https://ckinleydavis.github.io/ccbbra/) was developed by Nicholas Herold, Ahmad Kane and Carla Kinley-Davis in 2021 during the global COVID-19 pandemic. The application is meant to address the needs of the traveler who is looking for a rental car during the current vehicle shortage due to months of economic shutdown. 

## Run the Application

* [GitHub](https://ckinleydavis.github.io/ccbbra/)

* [Heroku](https://placeholder)

* Local Machine

Open a terminal and run the following command to create a MySQL connection:  

    $ mysql -u <username> -p

Once you have logged in with your mysql credentials, run the following command to create the ccbbra_db database.

    mysql > source db/schema.sql

Open a second terminal window and run the following commands to install dependencies and to populate the database with mock data.

    $ npm install

    $ node seeds/index.js

To run the application locally, execute the following on the command-line:

    $ node server.js

## Development Workflow

### _ER Diagram_
<blockquote>
<p align="center">
  <img alt="VS Code in action" src="./db/ccbbra_model.png" height="60%" width="60%">
</p>
</blockquote> 

## Feedback

There are many ways in which you can participate in this project, for example:

* [Submit an Issue](https://github.com/ckinleydavis/ccbbra/issues)

* [Roadmap / Request New Features](https://github.com/ckinleydavis/ccbbra/wiki)

* Ask a question . . .

## License

Copyright &nbsp;(c)&nbsp; 2021 &nbsp;| &nbsp;CCBBRA&nbsp; | &nbsp;All Rights Reserved
