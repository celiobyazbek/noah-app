# 🌊 NOAH App – Núcleo de Operação e Apoio em Havocs

Aplicativo móvel criado para fornecer recursos essenciais em situações de emergência urbana, como enchentes, desastres naturais e riscos ambientais. O NOAH oferece funcionalidades como rotas seguras, kits de emergência, contatos importantes e mensagens rápidas.

> 🎨 Interface baseada no [Figma original](https://www.figma.com/design/Tg0n80iicrJLOHcWWQrBLA/NOAH?node-id=0-1&t=IUxAMXbHligvbkjy-1)  
> 💻 Código original por [@Biahellens](https://github.com/Biahellens)  
> 💅 Estilização implementada por [@celiobyazbek](https://github.com/celiobyazbek)

---

## 📱 Funcionalidades

- 📞 Contatos de emergência com ligação direta  
- 📝 Mensagem rápida customizável  
- 🧰 Kit de sobrevivência com itens essenciais  
- 🗺️ Mapa com pontos seguros  
- 🚨 Rota de fuga traçada no mapa  
- 💅 Interface responsiva e visual moderno

---

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

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/celiobyazbek/noah-app.git
cd noah-app
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Instale os pacotes obrigatórios
```bash
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-maps @expo/vector-icons
```

### 4. (Opcional) Configure sua API do Google Maps
No arquivo `app.json`:

```json
{
  "expo": {
    "ios": {
      "config": {
        "googleMapsApiKey": "SUA_CHAVE_API_IOS"
      }
    },
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "SUA_CHAVE_API_ANDROID"
        }
      }
    }
  }
}
```

### 5. Rode o app
```bash
npx expo start
```

Abra com Expo Go ou use `--web` para rodar no navegador.

---

## ✨ Estilização Visual

- Cartões com sombra, borda arredondada e padding moderno  
- Paleta de cores alinhada ao tema de emergência (vermelho, azul, cinza)  
- Tipografia legível com contraste adequado  
- Layout mobile first com responsividade real  
- Telas: `Contatos`, `Alertas`, `Kit`, `Mapa` e `Rotas`

---

## 👥 Créditos

- 🎨 **Design (Figma):** [Gabriela Noleto Costa](https://www.linkedin.com/in/gabriela-noleto-costa/)  
- 💻 **Código original:** [@Biahellens](https://github.com/Biahellens)  
- 💅 **Estilização (v1.0):** [@celiobyazbek](https://github.com/celiobyazbek)

---

## 📦 Versão

**v1.0.0** – Estilização final baseada no Figma + melhorias visuais  
🔗 [Ver release completa](https://github.com/celiobyazbek/noah-app/releases/tag/v1.0.0)

---

## 📄 Licença

Distribuído sob a licença VagaKey.
