import react from "react";
import reactDom from "react-dom";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom"


reactDom.render(
    <BrowserRouter>
<App/>
</BrowserRouter>
,document.getElementById("root"))