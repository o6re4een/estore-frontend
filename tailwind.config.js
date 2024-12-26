/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F97316', // Основной (оранжевый)
        secondary: '#10B981', // Второстепенный (зелёный)
        background: '#F3F4F6', // Фон (светло-серый)
        surface: '#FFFFFF', // Поверхность (белый)
        text: '#1F2937', // Основной текст (тёмно-серый)
        muted: '#6B7280', // Приглушённый текст (серый)
        danger: '#EF4444', // Ошибки (красный)
        warning: '#FACC15' // Предупреждения (жёлтый)
      },
      animation: {
        'scale-up': 'scale-up linear 0.5s'
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' }
        }
      }
    }
  },
  plugins: []
}
