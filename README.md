# Helsinki City Bike App

This is a pre-assignment project for the Solita Dev Academy Finland 2023. The goal is to create a web application that displays data from journeys made with city bikes in the Helsinki Capital area. The application consists of a backend service and a user interface.

## Getting Started

These instructions will guide you on how to build and run the project on your local machine for development and testing purposes.

### Prerequisites

To run the project, you need to have the following software installed:

- [Java](https://www.java.com/en/) (for backend)
- [Node.js](https://nodejs.org/) (for frontend)
- [MySQL](https://www.mysql.com/) or any other relational database (for data storage)

### Installation

1. Clone the repository from GitHub.

```bash
git clone https://github.com/Bjorn-Eric/city_bike
```

2. Set up the backend:

- Navigate to the `server` directory.
- Open the project in your preferred IDE.
- Configure the database connection in the `application.properties` file.
- Build and run the backend application.

3. Set up the frontend:

- Navigate to the `client` directory.
- Install the dependencies by running the following command:

```bash
npm install
```

4. Start the frontend development server:

```bash
npm start
```

5. Open your browser and access the application at `http://localhost:3000`.

## Features

The project focuses on the following features:

- Journey list view displaying departure and return stations, covered distance, and duration.
- Station list view showing all the stations, their addresses, and journey statistics.
- Single station view with detailed information about a specific station, including a map view and additional calculations.
- Paginating, sorting, and filtering the journey and station lists.

## Testing

The project emphasizes proper testing practices. Unit tests, integration tests, and end-to-end tests are recommended to ensure the application's functionality and reliability. To run the tests, follow the instructions provided in the testing documentation.