# E-Commerce Back End

## Description

An Express server implementation that exposes an API for managing a MySQL database using the Sequelize ORM. The project includes the following features in accordance with the challenge guidelines:
- Proper setup of the `.gitignore` file to prevent `node_modules` and other extraneous system files from being tracked.
- Use of the **dotenv** package to read database credentials into the environment from a `.env` file.
- Use of the **MySQL 2** and **Sequelize** packages to establish a connection to a local MySQL database and perform operations.
- Use of Sequelize **models** and **associations** to structure the MySQL database:
  - Models for product categories, product tags, and products.
  - **one-to-many** associations between product categories and products.
  - **many-to-many** associations between products and product tags.
- Use of Sequelize model methods to perform **CRUD operations** on categories, tags, and projects.

## Usage

### Package Installation

Use of the tool requires **Node.js** and relies on the **Express**, **MySQL 2**, **Sequelize**, and **dotenv** packages as additional dependencies. After cloning the repo, run `npm i` in the project root directory to install all dependencies. 

### Database/Connection Setup

In order for the tool to run properly, you must have a MySQL server installed and running locally, and the server must provide access to a database called `ecommerce_db` as specified in `db/schema.sql`. In order to set this up, enter your MySQL shell and run
```
source db/schema.sql
```
to create the database. Then, exit the MySQL shell and run
```
npm run seed
```
to populate the database with sample data, if desired.

You must also specify your MySQL user credentials in a `.env` file, which should be located in the root directory of the repo. Use the provided `.env.EXAMPLE` file as a template.

### Using the API

After all prior setup steps are complete, run
```
npm run start
```
to start the Express server. The following API endpoints are be available on the server once it's running:
- Categories:
  - (GET all, POST) - <span style="font-family:monospace">/api/categories/</span>
  - (GET one, PUT, DELETE) - <span style="font-family:monospace">/api/categories/<span style="color:orange">id</span></span>
- Tags:
  - (GET all, POST) - <span style="font-family:monospace">/api/tags/</span>
  - (GET one, PUT, DELETE) - <span style="font-family:monospace">/api/tags/<span style="color:orange">id</span></span>
- Products:
  - (GET all, POST) - <span style="font-family:monospace">/api/products/</span>
  - (GET one, PUT, DELETE) - <span style="font-family:monospace">/api/products/<span style="color:orange">id</span></span>


### Walkthrough

🎥 A video walkthrough of the application can be viewed [here](https://drive.google.com/file/d/18G0SMTMYb7X6ztFVIw5YjsPOvMqTrjrq/view).

## Credits

For this challenge, project structure and some basic scaffolding within the code files was provided by the UofM Coding Bootcamp (Trilogy Education Services); code for the API routes, Sequelize models, and Sequelize associations was either written or significantly refactored by the developer.

## License

Please refer to the LICENSE in the repo.
