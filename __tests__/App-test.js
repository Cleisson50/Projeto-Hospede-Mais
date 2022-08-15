//import renderer from 'react-test-renderer';
import App from '../App';
import { fireEvent, render } from '@testing-library/react-native';
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Teste de Navegação",  () => {
    it("Navegação de Login para Task", async () => {
        const { getByText, getByTestId } = await render(<App />);

        //const botao = getByTestId("Login")
        //fireEvent.press(botao)

        //expect(getByText('Bem-vindo')).toBeTruthy()
    })
})