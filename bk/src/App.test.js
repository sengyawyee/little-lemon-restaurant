import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';

test("Adds one", () => {
  // render the App component
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  

});

