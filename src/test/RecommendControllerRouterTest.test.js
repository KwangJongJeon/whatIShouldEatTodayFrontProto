import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import RecommendProcessController from "../controller/RecommendProcessController";

let container = null

const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

