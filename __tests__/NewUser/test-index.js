import { render, fireEvent } from '@testing-library/react-native';
import App from "../../App";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela Cadastro', () => {
        const { getByTestId, getByText } = render(<App />);
        fireEvent.press(getByTestId("novousuario"))
        expect(getByText("Criar uma nova conta")).toBeTruthy();
        expect(getByTestId("camponome")).toBeTruthy();
        expect(getByTestId("campoemail")).toBeTruthy();
        expect(getByTestId("campoporta")).toBeTruthy();
        expect(getByTestId("camponumero")).toBeTruthy();
        expect(getByTestId("camposenha")).toBeTruthy();
        //expect(getByTestId("registrarAtivado")).not.toBeTruthy();
        expect(getByTestId("registrarDesativado")).toBeTruthy();
    })
})
describe('Testes do componente Input', () => {
    it('Teste de input nome tela cadastro', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("novousuario"))
        fireEvent.changeText(getByTestId("camponome"), "cleisson");
        fireEvent.changeText(getByTestId("campoemail"), "cleissondemathus@gmail.com");
        fireEvent.changeText(getByTestId("campoporta"), "Porta-IoT_01");
        fireEvent.changeText(getByTestId("camponumero"), "(84) 99445-9796");
        fireEvent.changeText(getByTestId("camposenha"), "99323592");
        expect(getByTestId("registrarAtivado")).toBeTruthy();
    })
})

// describe("Teste de Navegação",  () => {
//     it("Navegação de Cadastro para Task", () => {
//         fireEvent.press(getByTestId("registrarAtivado"))
//         const { getByText, getByTestId } = render(<App />);
//         // const botao = getByTestId("registrarAtivado")
//         // fireEvent.press(botao)

//         expect(getByText('Bem-vindo')).toBeTruthy()
//     })
// })