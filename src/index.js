import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Componenets/Layout/Header";
import Footer from "./Componenets/Layout/Footer";
import ContactIndex from "./Componenets/ContactPages/ContactIndex";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContactIndex />);
