import React from "react";
import { shallow } from "enzyme";

import App from "../src/app.jsx";

describe("App Component", () => {
  it("should show welcome message", () => {
    const appComponent = shallow(<App />);

    expect(appComponent).toMatchSnapshot();
  });
});
