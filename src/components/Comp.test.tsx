// write test for Comp component
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Comp from "./Comp";
import { Admin, Resource } from "react-admin";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import jsonServerProvider from "ra-data-json-server";

describe("Comp", () => {
	it("renders Comp component", async () => {
		const queryClient = new QueryClient();
		const component = render(
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<Admin
						dataProvider={jsonServerProvider(
							"https://jsonplaceholder.typicode.com"
						)}>
						<Comp />
						{/* <Resource name='posts' list={<Comp />} /> */}
					</Admin>
				</QueryClientProvider>
			</BrowserRouter>
		);
		await waitFor(() => {
			// expect(screen.getByText("Comp")).toBeInTheDocument();
			expect(component).toMatchSnapshot();
		});
	});
});
