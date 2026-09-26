import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Cada página é um HTML próprio: funciona em qualquer hospedagem estática, sem regra de rota.
    rolldownOptions: {
      input: {
        inicio: 'index.html',
        estudoDeCaso: 'estudo-de-caso/spa-casa-bali/index.html',
      },
    },
  },
});
