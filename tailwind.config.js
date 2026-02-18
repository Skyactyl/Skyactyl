const colors = require('tailwindcss/colors');

function skyactyl(variable) {
  return ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgb(var(${variable}) / ${opacityValue})`
      : `rgb(var(${variable}))`;
}

const gray = {
    50: skyactyl('--color-50'),
    100: skyactyl('--color-100'),
    200: skyactyl('--color-200'),
    300: skyactyl('--color-300'),
    400: skyactyl('--color-400'),
    500: skyactyl('--color-500'),
    600: skyactyl('--color-600'),
    700: skyactyl('--color-700'),
    800: skyactyl('--color-800'),
    900: skyactyl('--color-900'),
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
                sans: ["var(--font-family)"], 
            },
            colors: {
                black: '#131a20',
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: colors.blue,
                gray: gray,
                neutral: gray,
                cyan: colors.cyan,
                skyactyl: skyactyl('--color-primary'),
                success: skyactyl('--color-success'),
                danger: skyactyl('--color-danger'),
                secondary: skyactyl('--color-secondary'),
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
            borderRadius: {
                ui: 'var(--radius)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};