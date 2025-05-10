import { render } from '@testing-library/react';
import { Navbar } from '../../src/components';

describe('Pruebas en <Navbar />', () => {

    const navHeight = 240;

    test('Debe hacer match con el snapshot', () => {

        const { container } = render( <Navbar navHeight={navHeight} /> );
        expect(container).toMatchSnapshot();
        
    });

});