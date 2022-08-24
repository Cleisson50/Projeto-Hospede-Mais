import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from "../../App";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela Task', async() => {
        const { getByTestId } = await render(<App />);
        fireEvent.changeText(getByTestId("email"), "cleissondemathus@gmail.com");
        fireEvent.changeText(getByTestId("senha"), "99323592");
        await waitFor(() =>  fireEvent.press(getByTestId("Login")))
        /*expect(getByTestId("ligar")).toBeTruthy();
        expect(getByTestId("desligar")).toBeTruthy();
        expect(getByTestId("logout")).toBeTruthy();
        expect(getByTestId("abrir")).toBeTruthy();
        expect(getByTestId("fechar")).toBeTruthy();
        expect(getByTestId("welcome")).toBeTruthy();*/
    })
})