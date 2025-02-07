# Stock Trading Web App

## Overview
Developed  a stock trading web app using the MERN stack integrated APIs for real-time stock data, and implemented JWT  
for user authentication. Wrote RESTful APIs for back-end operations, utilizing MongoDB Atlas for data storage  Only authorized users can access the interactive dashboard, where they can place buy orders, and stock data in the watchlist and holdings is visualized in charts. React was used for front-end , Material UI for icons, CSS for custom styling and React 
Routing for navigation to different sections of the platform. 


---

## Key Features

### 1. **Stock Market Charts ( Data Visualization)**
   - **Integrated  Stock Data**: The app is connected to APIs that fetch stock data , ensuring that users can access the most up-to-date  information .
   - **Interactive Charts**: Using charting libraries such as **Chart.js** to visualise the  stock  data and holdings data 
   - **Watchlist & Holdings Visualization**: Users can easily track their stocks with interactive charts that display their current watchlist and holdings. Charts represent historical trends and show gains or losses for each stock, giving users a comprehensive view of their portfolio.

### 2. **User Authentication UI (Login & Signup Flows Inspired by Zerodha)**
   - **Secure Authentication**: Implemented **JWT (JSON Web Token)** for secure user authentication. This ensures that only authorized users can access sensitive areas of the platform, such as placing buy orders or viewing their stock holdings.
   - **Login & Signup**: The user authentication flow includes a **login page** for returning users and a **signup page** for new users to create an account. The interface draws inspiration from popular platforms like **Zerodha** for a user-friendly experience.
   - **Protected Routes**: Using **React Router**, users are redirected to the login page if they try to access the dashboard without being authenticated. After successful login, they are redirected back to the dashboard with access to their portfolio and trading options.

### 3. **Minimal & Clean Design (Focus on User Experience)**
   - **User-Centered Interface**: The UI is designed with simplicity and efficiency in mind, providing a seamless user experience. A minimalistic design approach ensures that the user interface is clean and intuitive.
   - **Smooth Navigation**: The app offers clear navigation to essential sections of the platform such as stock data, user profile, portfolio holdings, and orders.
   - **Custom Styling**: **CSS** is used for custom styling, ensuring the layout is responsive and adaptable to different screen sizes.

### 4. **React Components & Hooks (Efficient State and Component Management)**
   - **React Components**: The application is built with reusable React components that represent different sections of the platform, such as the login form, stock watchlist, buy order form, and charts.
   - **React Hooks**: To efficiently manage component state and lifecycle, **React hooks** like `useState`, `useEffect`, and `useContext` are implemented. This ensures that the app is fast and responsive to user actions, such as adding stocks to the watchlist or placing an order.
   - **State Management**: The app's state is managed using React's context API or libraries like Redux for more complex state management, ensuring that real-time data updates are reflected across the app instantly.

---

## Tech Stack

- **MongoDB Atlas**: Used for data storage, MongoDB Atlas offers a fully managed database that scales seamlessly with the app's needs. It stores user data, stock orders, watchlist items, and portfolio information.
- **Express (Back-End API)**: Handles all back-end logic for stock data, user authentication, and stock order operations. RESTful APIs are written in **Express** to manage the data flow between the front end and MongoDB database.
- **Node.js**: The backend of the application is powered by **Node.js**, which serves the RESTful APIs and communicates with MongoDB. It handles API requests such as retrieving stock data, placing orders, and managing user accounts.
- **React**: **React** is used to build the front-end, providing an interactive and dynamic user interface. Components are modular and reusable, ensuring maintainability and scalability of the app.
- **Material UI**: Material UI is used to enhance the design with pre-built components and icons. The UI components are sleek and modern, offering a consistent user interface across all devices.
- **JWT (JSON Web Token)**: **JWT** is used for handling secure user authentication. It helps manage sessions without the need for storing sessions on the server, improving the scalability and security of the platform.





