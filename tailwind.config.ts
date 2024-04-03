import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: 'hsl(0, 0%, 100%)',
        accent: 'hsl(0, 0%, 0%)',
        alt: 'hsl(220, 14%, 96%)',
        error: 'hsl(354, 84%, 57%)',
        success: 'hsl(147, 86%, 57%)',
      },
      keyframes: {
        in: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
        out: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      animation: {
        fade: 'fade .6s forwards',
        in: 'in .6s forwards',
        in2: 'in .8s forwards',
        in3: 'in 1s forwards',
        in4: 'in 1.2s forwards',
        in5: 'in 1.4s forwards',
        out: 'out .6s forwards',
      },
      screens: {
        // xsm: '23.4375em',
        // sm: '26.5625em',
        // md: '48em',
        // lg: '64em',
        // xl: '80em',
        // xxl: '90em',
        // 'max-md': { max: '47.98em' },
        // 'max-sm': { max: '26.5em' },
      },
    },
  },
  plugins: [],
};
export default config;
