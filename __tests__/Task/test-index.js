import { render, fireEvent } from '@testing-library/react-native';
import App from "../../App";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela Task', async () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("login"))
        expect(getByTestId("ligar")).toBeTruthy();
        expect(getByTestId("desligar")).toBeTruthy();
        expect(getByTestId("logout")).toBeTruthy();
        expect(getByTestId("abrir")).toBeTruthy();
        expect(getByTestId("fechar")).toBeTruthy();
        expect(getByTestId("welcome")).toBeTruthy();
    })
})