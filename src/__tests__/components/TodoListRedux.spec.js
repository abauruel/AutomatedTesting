import React from "react";
import { mount } from "enzyme";

import TodoList from "../../TodoListRedux";

import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import { Creators as TodoActions } from "../../store/ducks/todos";

const mockstore = createStore();

const INITIAL_STATE = {
  todos: { data: ["Fazer café", "Estudar React"] }
};

const store = mockstore(INITIAL_STATE);

it("should render the list and button", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(wrapper.find("li").length).toBe(2);
});

it("", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(wrapper.find("TodoList").setState({ newTodo: "Novo todo" }));
  expect(wrapper.find("button").simulate("click"));

  expect(store.getActions()).toContainEqual(TodoActions.addTodo("Novo todo"));
});
