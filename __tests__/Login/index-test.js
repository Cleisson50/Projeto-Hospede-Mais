import { render, fireEvent } from '@testing-library/react-native';
import App from "../../App";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela Login', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("Logogoogle")).toBeTruthy();
        expect(getByTestId("email")).toBeTruthy();
        expect(getByTestId("senha")).toBeTruthy();
        expect(getByTestId("novasenha")).toBeTruthy();
        expect(getByTestId("novousuario")).toBeTruthy();
    })
})
describe('Testes do componente Input', () => {
    it('Teste de input email tela Login', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("email"));
    })
    it('Teste de input Senha tela Login', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("senha"));
    })
})