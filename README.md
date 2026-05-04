# Gerador de Paletas de Cores 🎨

Um gerador simples e elegante de paletas de cores aleatórias feito com **HTML, CSS e JavaScript puro**.

## 🚀 Como Usar

1. Abra o arquivo `index.html` no seu navegador
2. Pressione **Espaço** ou clique em "Gerar Nova Paleta" para gerar cores
3. Clique em qualquer cor ou código para copiar para a área de transferência

## 📁 Estrutura do Projeto

```
color-palette-generator-vanilla/
├── index.html      # Estrutura HTML da página
├── styles.css      # Todos os estilos (CSS puro)
├── script.js       # Toda a lógica (JavaScript puro)
└── README.md       # Este arquivo
```

## 🎯 Funcionalidades

- ✅ Gera 5 cores aleatórias que combinam
- ✅ Pressione **Espaço** ou clique no botão para gerar novas paletas
- ✅ Clique em qualquer cor ou código para copiar (HEX, RGB, HSL)
- ✅ Feedback visual ao copiar (notificação toast)
- ✅ Hover effects elegantes nas cores
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Tipografia moderna com Poppins

## 📚 Explicação do Código

### `index.html` - Estrutura

O HTML é bem simples e semântico:

```html
<header>...</header>          <!-- Título e instruções -->
<main>
  <div id="colorGrid">...</div>  <!-- Cores geradas aqui -->
  <button id="generateBtn">...</button>  <!-- Botão para gerar -->
</main>
<footer>...</footer>
```

**Pontos importantes:**
- O `id="colorGrid"` é onde as cores serão renderizadas
- O `id="generateBtn"` é o botão para gerar novas paletas
- Todos os elementos têm `class` para estilização

### `styles.css` - Estilos

O CSS é organizado em seções:

1. **Reset e Base** - Remove estilos padrão do navegador
2. **Tipografia** - Define fontes Poppins e IBM Plex Mono
3. **Layout** - Grid responsivo para as cores
4. **Componentes** - Estilos para botões, cards, etc.
5. **Animações** - Transições suaves
6. **Responsividade** - Media queries para mobile/tablet/desktop

**Conceitos CSS importantes:**
- `grid` - Layout responsivo das cores
- `flex` - Alinhamento de elementos
- `transition` - Animações suaves
- `@media` - Responsividade
- `::before` e `::after` - Pseudo-elementos

### `script.js` - Lógica

O JavaScript é dividido em funções bem organizadas:

#### 1. **Funções Utilitárias**
```javascript
getRandomNumber()    // Gera número 0-255
toHex(num)          // Converte para hexadecimal
rgbToHsl(r, g, b)   // Converte RGB para HSL
```

#### 2. **Funções de Geração**
```javascript
generateRandomColor()  // Gera 1 cor (HEX, RGB, HSL)
generatePalette()      // Gera 5 cores
```

#### 3. **Funções de Renderização**
```javascript
createColorCardHTML()  // Cria HTML de um card
renderPalette()        // Renderiza todas as cores
showToast()           // Mostra notificação
```

#### 4. **Funções de Interação**
```javascript
copyToClipboard()     // Copia texto
addEventListeners()   // Adiciona cliques
handleGeneratePalette() // Gera nova paleta
handleKeyPress()      // Gerencia tecla Espaço
```

#### 5. **Inicialização**
```javascript
init()  // Função chamada quando a página carrega
```

## 🔄 Como Funciona o Fluxo

```
1. Página carrega → DOMContentLoaded
   ↓
2. Função init() é chamada
   ↓
3. handleGeneratePalette() é executada
   ↓
4. generatePalette() cria 5 cores aleatórias
   ↓
5. renderPalette() desenha as cores na página
   ↓
6. addEventListeners() adiciona cliques
   ↓
7. Usuário interage (clica ou pressiona Espaço)
   ↓
8. Volta ao passo 3
```

## 🎨 Conversão de Cores Explicada

### HEX (Hexadecimal)
```
#RRGGBB onde RR, GG, BB são valores em hexadecimal (0-F)
Exemplo: #FF5733
```

### RGB (Red, Green, Blue)
```
rgb(R, G, B) onde R, G, B são valores 0-255
Exemplo: rgb(255, 87, 51)
```

### HSL (Hue, Saturation, Lightness)
```
hsl(H, S%, L%) onde:
- H (Hue): 0-360° (cor)
- S (Saturation): 0-100% (intensidade)
- L (Lightness): 0-100% (claridade)
Exemplo: hsl(9, 100%, 60%)
```

## 🚀 Como Subir no GitHub

1. **Crie um repositório no GitHub**
   - Vá para https://github.com/new
   - Nome: `color-palette-generator`
   - Descrição: "Gerador de Paletas de Cores com HTML, CSS e JavaScript"
   - Escolha "Public"
   - Clique "Create repository"

2. **Clone o repositório na sua máquina**
   ```bash
   git clone https://github.com/seu-usuario/color-palette-generator.git
   cd color-palette-generator
   ```

3. **Copie os arquivos para o diretório**
   ```bash
   cp index.html styles.css script.js README.md /caminho/para/seu/repositorio/
   ```

4. **Faça o commit e push**
   ```bash
   git add .
   git commit -m "Adiciona Gerador de Paletas de Cores"
   git push origin main
   ```

5. **Ative GitHub Pages (opcional)**
   - Vá para Settings → Pages
   - Escolha "Deploy from a branch"
   - Selecione "main" e "/root"
   - Seu site estará em: `https://seu-usuario.github.io/color-palette-generator`

## 📖 Recursos para Aprender

### React
- **YouTube:** [React em 100 Segundos](https://www.youtube.com/watch?v=Tn6-PIqc4UM) - Fireship
- **YouTube:** [React Completo](https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QSCjEjMP_NN) - Matheus Battisti
- **Artigo:** [Documentação Oficial React](https://react.dev)

### Tailwind CSS
- **YouTube:** [Tailwind CSS em 100 Segundos](https://www.youtube.com/watch?v=mr15Xzb1Ook) - Fireship
- **YouTube:** [Tailwind CSS Completo](https://www.youtube.com/watch?v=pfaSUYaSgRo) - Traversy Media
- **Artigo:** [Documentação Oficial Tailwind](https://tailwindcss.com/docs)

### Vite
- **YouTube:** [Vite em 100 Segundos](https://www.youtube.com/watch?v=KCrXgy8qtjM) - Fireship
- **YouTube:** [Vite Setup](https://www.youtube.com/watch?v=wqzjsJGELFI) - Traversy Media
- **Artigo:** [Documentação Oficial Vite](https://vitejs.dev)

### JavaScript Puro (Vanilla)
- **YouTube:** [JavaScript Completo](https://www.youtube.com/playlist?list=PLnDvRpP8Bney0_5HEKwVqj8GfPHw1GPPI) - Matheus Battisti
- **YouTube:** [DOM Manipulation](https://www.youtube.com/watch?v=y17RuWkWdn8) - Traversy Media
- **Artigo:** [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 💡 Próximos Passos para Melhorar

1. **Modo Lock de Cores**: Permita congelar cores individuais
2. **Exportar Paleta**: Botão para exportar como JSON, CSS ou PNG
3. **Histórico**: Guarde as últimas 10 paletas geradas
4. **Temas**: Adicione modo escuro
5. **Compartilhar**: Botão para compartilhar a paleta em redes sociais

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente.

---

**Feito com ❤️ para designers e desenvolvedores**
