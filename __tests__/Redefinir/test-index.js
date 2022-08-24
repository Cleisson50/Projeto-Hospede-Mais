import { render, fireEvent } from '@testing-library/react-native';
import App from "../../App";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela de Redefinir', () => {
        const { getByTestId, getByText } = render(<App />);
        fireEvent.press(getByTestId("novasenha"))
        expect(getByText("Redefinir sua senha")).toBeTruthy();
        expect(getByTestId("redefinirsenha")).toBeTruthy();
        expect(getByTestId("enviar")).toBeTruthy();
    })
})
describe('Testes do componente Input', () => {
    it('Teste de input nome tela cadastro', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("novasenha"))
        fireEvent.changeText(getByTestId("redefinirsenha"), "cleissondemathus@gmail.com");
        expect(getByTestId("enviar")).toBeTruthy();
    })
})