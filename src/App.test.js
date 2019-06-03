import React from "react";
import { mount } from "enzyme";

import App from "./App";

it("should hello world", () => {
  const wrapper = mount(<App />);

  expect(wrapper.contains(<h1>Hello world</h1>)).toBe(true);
});
