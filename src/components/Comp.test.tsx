// write test for Comp component
import React from "react";
import { render, screen } from "@testing-library/react";
import Comp from "./Comp";

describe("Comp", () => {
	it("renders Comp component", () => {
		const component = render(<Comp />);
		expect(component).toMatchSnapshot();
	});
});
