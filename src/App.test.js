import React from 'react';
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import "@testing-library/jest-dom/extend-expect";


import App from './App'

test('<App/> load', () => {
      const { getByText } = render( 
            <Provider store={store}>
              <App />
            </Provider>
             )

      expect(screen.getByText("Hola jest!!")).toBeInTheDocument();
      expect(screen.getByTestId("titulo").textContent).toBe("Hola jest!!");
      expect(screen.getByTestId("titulo").tagName).toBe("H2");


      expect(screen.getByText("Total Complete Items: 0")).toBeInTheDocument(); 
      expect(screen.getByTestId("completed").textContent).toBe("Total Complete Items: 0");
      expect(screen.getByTestId("completed").tagName).toBe("H4");
    
}) 