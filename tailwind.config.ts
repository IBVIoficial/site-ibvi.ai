import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
    darkMode: ['class', 'class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],

    theme: {
    	extend: {
    		colors: {
    			verde: 'rgb(var(--verde) / <alpha-value>)',
    			'verde-claro': 'rgb(var(--verde-claro) / <alpha-value>)',
    			'verde-escuro': 'rgb(var(--verde-escuro) / <alpha-value>)',
    			'cinza-claro': 'rgb(var(--cinza-claro) / <alpha-value>)',
    			'cinza-medio': 'rgb(var(--cinza-medio) / <alpha-value>)',
    			'cinza-escuro': 'rgb(var(--cinza-escuro) / <alpha-value>)',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				claro: 'rgb(var(--verde-claro) / <alpha-value>)',
    				escuro: 'rgb(var(--verde-escuro) / <alpha-value>)',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				claro: 'rgb(var(--cinza-claro) / <alpha-value>)',
    				medio: 'rgb(var(--cinza-medio) / <alpha-value>)',
    				escuro: 'rgb(var(--cinza-escuro) / <alpha-value>)',
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },

    plugins: [tailwindcssAnimate, require("tailwindcss-animate")]
};

export default config;
