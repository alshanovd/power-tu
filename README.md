# Power TU - Powerful Analytical Software

Power TU is a robust and feature-rich analytical software designed to empower users with advanced data analysis capabilities. This README.md file provides an overview of the project and instructions for pulling and launching the project locally.

## Getting Started

To get started with Power TU, follow the steps below:

### Prerequisites

- Node.js

### Installation and launching the Project

1. Clone the repository:

    ```shell
    git clone git@github.com:alshanovd/power-tu.git
    ```

2. Navigate to the project directory:

    ```shell
    cd power-tu
    ```

3. Install the dependencies:

    ```shell
    npm install
    ```

4. Launching the Project:

    ```shell
    npm run dev
    ```

This will start the development server and you can access the application at `http://localhost:3000`.

## Features

Power TU offers a wide range of powerful features, including:

- Advanced data visualization tools
- Statistical analysis capabilities
- Interactive dashboards for data exploration
- Machine learning algorithms for predictive modeling
- Data import and export functionality
- User-friendly interface for easy navigation
- Customizable charts and graphs
- Collaborative workspace for team collaboration

Please refer to the official documentation for detailed information on how to utilize these features effectively.

We hope you find Power TU to be a valuable tool for your analytical needs. Happy analyzing!

## CI / CD - frontend

The frontend is operating with [Vercel](https://vercel.com/). When new changes are pushed in main branch, the deployment process starts.

### Production Frontend
Production URL - [Power TU](https://power-tu.vercel.app/)

## Backend

There are two AWS EC2 instances that keep our backend and database.
Backend is operating with Python + Django and can be reached by the following url:

```
https://ec2-3-27-170-95.ap-southeast-2.compute.amazonaws.com:8000/
```
The database chosen is MySQL and it is running on a separate EC2 instance.

The code of the backend can be reached by [the link](https://github.com/alshanovd/power-tu-api).

### APIs available

Returns all the products of the online store
```
/products
```

Returns all the countries presented in the system
```
/countries
```

Returns all orders in the system
```
/orders
```

Returns the data for Annual Revenue Report
```
/annual-revenue
```

Returns the data for Annual Revenue By Gender Report
```
/annual-revenue-by-gender
```

Returns the data for Total Items Sold Report
```
/total-items-sold
```

Returns the data for Statuses By Month Report
```
/statuses-by-month
```