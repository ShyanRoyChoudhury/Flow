# Flow Project Setup

Welcome to the Flow project! This guide will walk you through setting up the frontend and backend of the application.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18.x or later)
- [Yarn](https://yarnpkg.com/) 

## Frontend Setup

1. **Navigate to the frontend directory:**
    ```bash
    cd flow
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

3. **Start the development server:**
    ```bash
    yarn dev
    ```

Your frontend development server should now be running. You can access it at `http://localhost:5173`.

## Backend Setup

1. **Navigate to the backend directory:**
    ```bash
    cd flow/backend
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

3. **Create a .env file:**
    ```bash
    cp .env.example .env
    ```
     - create a mongodb database for prisma.
     - Get the connection string and use it in .env 
     - A separate db  for agenda or you can set up a local db running in docker for agenda.
           ```bash
           docker run --name agenda-db -d -p 27017:27017 mongo
           ```.
     - set ``basDB_URL=`mongodb:://127.0.0.1/agenda`` in .env

4. **Build the project:**
    ```bash
    yarn build
    ```

5. **Start the backend server:**
    ```bash
    yarn start
    ```

Your backend server should now be running. You can access it at `http://localhost:3000`.

## Additional Information

- Make sure to run the frontend and backend servers simultaneously to have a fully functional application.

## Contributing

contributions are welcomed! 



Happy coding! If you encounter any issues, feel free to open an issue or submit a pull request.
