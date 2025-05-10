import { render } from '@testing-library/react';
import { BoxImages } from '../../src/components';

describe('Pruebas en <BoxImages />', () => {

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<BoxImages />);
        expect(container).toMatchSnapshot();

    });

});