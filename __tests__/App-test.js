import renderer from 'react-test-renderer';
import App from '../App';
import { fireEvent, render } from '@testing-library/react-native';
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

test('teste de snapshot', () => {
    // const tela = renderer.create(<App />).toJSON();
    // expect(tela).toMatchSnapshot();
});

test('teste de navegação', () => {

});