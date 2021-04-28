import React from 'react';
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

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

test("<Formulario/> Validación de formulario", () => {
  const { getByText } = render( 
    <Provider store={store}>
      <AddTodoForm />
    </Provider>
     );

  //   Click en el boton de submit
  const btnSubmit = screen.getByTestId("btn-submit");
  userEvent.click(btnSubmit);

  //   Revisar por la alerta
  const alerta = screen.getByTestId("alerta");
  expect(alerta).toBeInTheDocument();
  expect(alerta.textContent).toBe("Type Something Firstly");
  expect(alerta.tagName).toBe("P");
  expect(alerta.tagName).not.toBe("BUTTON");
}); 



test("<Formulario/> llenar list", () => {
  const { getByText } = render( 
    <Provider store={store}>
      <AddTodoForm />
    </Provider>
     ); 

  userEvent.type(screen.getByTestId("value-input"), "Test successfull")

  //   Click en el boton de submit
  const btnSubmit = screen.getByTestId("btn-submit");
  userEvent.click(btnSubmit);

  //   Revisar por la alerta
  const alerta = screen.queryByTestId("alerta");
  expect(alerta).not.toBeInTheDocument();

});

