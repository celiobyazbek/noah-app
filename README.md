# NOAH App

Este é o aplicativo móvel **NOAH - Núcleo de Operação e Apoio em Havocs**, desenvolvido para fornecer recursos essenciais em situações de emergência, como kits de emergência, rotas seguras e contatos importantes.

## 🚀 Tecnologias Utilizadas

O projeto NOAH é construído utilizando as seguintes tecnologias e ferramentas:

* **[React.js](https://react.dev/)**: Uma biblioteca JavaScript para construção de interfaces de usuário reativas e eficientes. Utilizado para fundamentar a lógica e o ciclo de vida dos componentes.
* **[React Native](https://reactnative.dev/)**: Um framework de código aberto para desenvolvimento de aplicativos móveis nativos para iOS e Android usando JavaScript e React. Permite a criação de interfaces de usuário com componentes nativos.
* **[npm](https://www.npmjs.com/)**: O maior registro de software do mundo, e o gerenciador de pacotes padrão para JavaScript. Utilizado para gerenciar as dependências do projeto e scripts de execução.
* **[TypeScript](https://www.typescriptlang.org/)**: Um superconjunto tipado do JavaScript que compila para JavaScript puro. Oferece digitação estática opcional, interfaces e outras funcionalidades para melhorar a robustez e a manutenibilidade do código.
* **[Expo](https://docs.expo.dev/)**: Um framework e plataforma para desenvolvimento universal de aplicativos React Native. Facilita o desenvolvimento, o teste e a publicação de aplicativos, fornecendo acesso fácil a APIs nativas e um fluxo de trabalho simplificado.
* **[React Navigation](https://reactnavigation.org/)**: Solução de roteamento popular e extensível para aplicativos React Native. Permite a navegação entre diferentes telas e a criação de estruturas de navegação complexas (como pilhas e abas inferiores).
* **[react-native-maps](https://github.com/react-native-maps/react-native-maps)**: Componente de mapa para React Native, que fornece integração com Google Maps e Apple Maps, essencial para exibir rotas e áreas de risco.
* **[@expo/vector-icons](https://docs.expo.dev/guides/icons/)**: Uma biblioteca abrangente de ícones vetorizados que integra facilmente com projetos Expo e React Native, oferecendo uma vasta gama de ícones para a interface do usuário.

## ⚙️ Como Configurar e Rodar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd NOAH-App
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou se preferir yarn
    # yarn install
    ```
    *Certifique-se de ter as dependências do React Navigation e react-native-maps instaladas conforme as instruções:*
    ```bash
    npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-maps @expo/vector-icons
    ```
3.  **Configurações de Chave de API (Google Maps):**
    Adicione suas chaves de API do Google Maps (para Android e iOS) no arquivo `app.json` conforme as instruções da documentação do `react-native-maps` e do Expo.

    ```json
    {
      "expo": {
        // ... outras configurações
        "ios": {
          "supportsTablet": true,
          "config": {
            "googleMapsApiKey": "SUA_CHAVE_DE_API_DO_Maps_IOS"
          }
        },
        "android": {
          // ...
          "config": {
            "googleMaps": {
              "apiKey": "SUA_CHAVE_DE_API_DO_Maps_ANDROID"
            }
          }
        }
      }
    }
    ```
4.  **Inicie o aplicativo:**
    ```bash
    npm start
    # ou yarn start
    ```
    Isso abrirá o Metro Bundler no seu navegador. Você pode então escanear o código QR com o aplicativo Expo Go no seu celular ou usar os emuladores/simuladores.
