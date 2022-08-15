test("vazio", ()=>{

})

// import { render, fireEvent } from '@testing-library/react-native';
// import App from "../../App";
// jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// describe('Testes de Inicialização e Exibição', () => {
//     it('Teste de Componentes da Tela Cadastro', () => {
//         const { getByTestId } = render(<App />);
//         expect(getByTestId("camponome")).toBeTruthy();
//         expect(getByTestId("campoemail")).toBeTruthy();
//         expect(getByTestId("campoporta")).toBeTruthy();
//         expect(getByTestId("camponumero")).toBeTruthy();
//         expect(getByTestId("camposenha")).toBeTruthy();
//         expect(getByTestId("registrar")).toBeTruthy();
//     })
// })
// describe('Testes do componente Input', () => {
//     it('Teste de input nome tela cadastro', () => {
//         const { getByTestId } = render(<App />);
//         fireEvent.press(getByTestId("camponome"));
//     })
//     it('Teste de input email tela cadastro', () => {
//         const { getByTestId } = render(<App />);
//         fireEvent.press(getByTestId("campoemail"));
//     })
//     it('Teste de input porta tela cadastro', () => {
//         const { getByTestId } = render(<App />);
//         fireEvent.press(getByTestId("campoporta"));
//     })
//     it('Teste de input numero tela cadastro', () => {
//         const { getByTestId } = render(<App />);
//         fireEvent.press(getByTestId("camponumero"));
//     })
//     it('Teste de input Senha tela cadastro', () => {
//         const { getByTestId } = render(<App />);
//         fireEvent.press(getByTestId("camposenha"));
//     })
// })

// describe("Teste de Navegação",  () => {
//     it("Navegação de Cadastro para Task", () => {
//         const { getByText, getByTestId } = render(<App />);
//         const botao = getByTestId("registrar")
//         fireEvent.press(botao)

//         expect(getByText('Bem-vindo')).toBeTruthy()
//     })
// })