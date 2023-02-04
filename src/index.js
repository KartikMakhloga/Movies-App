import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Customers from "./Customers";
import Navbar from "./Navbar";
import Rentals from "./Rentals";
import Login from "./Login";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ReactDOM.render(
//   <Router>
//     <Navbar />
//     <Switch>
//       <Route path="/customers">
//         <Customers />
//       </Route>

//       <Route path="/rentals">
//         <Rentals />
//       </Route>

//       <Route path="/login">
//         <Login />
//       </Route>

//       <Route path="/">
//         <App />
//       </Route>
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

ReactDOM.render(<MainPage />,document.querySelector('#root'));