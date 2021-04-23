import React from 'react'
import Enzyme,{ configure, shallow, mount, render } from 'enzyme'
//formas de montar o renderizar nuestros componentes dentro de la memoria:

//shallow : Renderizaso Superficial Independiente para componentes como una unidad y no a secundarios.
//mount : interactuar con APIOS de el DOM, HOC. contexto global con el DOM
//render : transforma el arbol de react en HTML para cheerio.js
//
import Adapter from 'enzyme-adapter-react-17-updated'
import App2 from './App2'


Enzyme.configure({ adapter: new Adapter() });


describe('Probando componente <App2 />', () => {
  test('Probando renderizado de componente', () => {
    const wrapper = shallow(<App2 />)

  /*   expect(wrapper.find('h1').html()).toBe('<h1>Introduccion a Unit Testing</h1>')
    expect(wrapper.find('h1')).toHaveLength(1) */

      expect(wrapper.html()).toBe('<div><h1>Introduccion a Unit Testing</h1></div>') 
    /* console.log(wrapper.html()); */
  })
})