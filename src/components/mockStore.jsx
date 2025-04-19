import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "../screens/Home";

const mockStore = configureStore([]);

describe("Home Screen", () => {
    let store;
    let navigationMock;

    beforeEach(() => {
        store = mockStore({
            cart: [{ id: 1, name: "Pizza", price: 1450, quantity: 1 }],
        });

        navigationMock = {
            navigate: jest.fn(),
        };
    });

    it("renders the header with the correct cart count", () => {
        const { getByText } = render(
            <Provider store={store}>
                <Home navigation={navigationMock} />
            </Provider>
        );

        expect(getByText("Home")).toBeTruthy();
        expect(getByText("1")).toBeTruthy(); // Cart count
    });

    it("navigates to the Cart screen when the cart icon is clicked", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Home navigation={navigationMock} />
            </Provider>
        );

        const cartIcon = getByTestId("header-right-icon");
        fireEvent.press(cartIcon);

        expect(navigationMock.navigate).toHaveBeenCalledWith("Cart");
    });

    it("navigates to the Detail screen when an item is clicked", () => {
        const { getByText } = render(
            <Provider store={store}>
                <Home navigation={navigationMock} />
            </Provider>
        );

        const item = getByText("Pizza");
        fireEvent.press(item);

        expect(navigationMock.navigate).toHaveBeenCalledWith("Detail", { id: 1 });
    });
});