import renderer from 'react-test-renderer';
import App from '../App';
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.useFakeTimers();
describe('Teste de Snapshot', () => {
    it('Snapshot de App', () => {
        const tela = renderer.create(<App/>).toJSON();
        expect(tela).toMatchSnapshot();
    })
})