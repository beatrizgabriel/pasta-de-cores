/**
 * GERADOR DE PALETAS DE CORES - JAVASCRIPT PURO
 * Layout: Horizontal Compacto
 */

let currentPalette = [];

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

function toHex(num) {
    return num.toString(16).padStart(2, '0').toUpperCase();
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r:
                h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                break;
            case g:
                h = ((b - r) / d + 2) / 6;
                break;
            case b:
                h = ((r - g) / d + 4) / 6;
                break;
        }
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

// ============================================
// GERAÇÃO DE CORES
// ============================================

function generateRandomColor() {
    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();

    const hex = '#' + toHex(r) + toHex(g) + toHex(b);
    const rgb = `rgb(${r}, ${g}, ${b})`;

    const hsl_obj = rgbToHsl(r, g, b);
    const hsl = `hsl(${hsl_obj.h}, ${hsl_obj.s}%, ${hsl_obj.l}%)`;

    return { hex, rgb, hsl };
}

function generatePalette() {
    const palette = [];
    for (let i = 0; i < 5; i++) {
        palette.push(generateRandomColor());
    }
    return palette;
}

// ============================================
// RENDERIZAÇÃO
// ============================================

function createColorItemHTML(color, index) {
    return `
        <div class="color-item">
            <div class="color-block" style="background-color: ${color.hex}" data-hex="${color.hex}">
                <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
            </div>
            <div class="color-info">
                <button class="color-hex" data-copy="${color.hex}">${color.hex}</button>
                <button class="color-rgb" data-copy="${color.rgb}">${color.rgb}</button>
            </div>
        </div>
    `;
}

function renderPalette(palette) {
    const paletteContainer = document.getElementById('palette');
    paletteContainer.innerHTML = palette.map((color, index) => 
        createColorItemHTML(color, index)
    ).join('');

    addEventListeners();
}

function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 1500);
}

// ============================================
// INTERAÇÃO
// ============================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`✓ ${text}`);
    }).catch(() => {
        showToast('Erro ao copiar');
    });
}

function addEventListeners() {
    // Blocos de cor
    document.querySelectorAll('.color-block').forEach(block => {
        block.addEventListener('click', (e) => {
            const hex = e.currentTarget.dataset.hex;
            copyToClipboard(hex);
        });
    });

    // Códigos de cor
    document.querySelectorAll('.color-hex, .color-rgb').forEach(code => {
        code.addEventListener('click', (e) => {
            e.preventDefault();
            const text = e.currentTarget.dataset.copy;
            copyToClipboard(text);
        });
    });
}

function handleGeneratePalette() {
    currentPalette = generatePalette();
    renderPalette(currentPalette);
}

function handleKeyPress(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        handleGeneratePalette();
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

function init() {
    handleGeneratePalette();

    const generateBtn = document.getElementById('generateBtn');
    generateBtn.addEventListener('click', handleGeneratePalette);

    window.addEventListener('keydown', handleKeyPress);

    console.log('✓ Gerador de Paletas iniciado!');
}

document.addEventListener('DOMContentLoaded', init);
