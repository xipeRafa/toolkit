import React from 'react';
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import "@testing-library/jest-dom/extend-expect";
import AddTodoForm from './AddTodoForm';


test('<AddTodoForm/> Cargar el formulario y revisar que todo sea correcto', () => {
  const { getByText } = render( 
    <Provider store={store}>
      <AddTodoForm />
    </Provider>
     );
 
   /*  expect(screen.getByText("Hola jest!!")).toBeInTheDocument();
    console.log(screen.getByTestId('titulo').tagName); 
    expect(screen.getByTestId('titulo').tagName).toBe('H2')
    expect(screen.getByTestId('titulo').textContent).toBe("Hola jest!!") */

     const id = screen.getByTestId("titulo");
     expect(id.tagName).toBe("H2");
     expect(id.tagName).not.toBe("H1");
     expect(id.textContent).toBe("Hola jest!!"); 

    expect(screen.getByTestId("btn-submit").tagName).toBe("BUTTON");
    expect(screen.getByTestId("btn-submit").textContent).toBe("Submit");
    expect(screen.getByTestId("btn-submit").textContent).not.toBe("Agregar");
});


