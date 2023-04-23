import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Comp from "./components/Comp";

// setup data provider for react-admin
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Admin dataProvider={dataProvider}>
			<Resource name='posts' list={Comp} />
		</Admin>
	</React.StrictMode>
);
