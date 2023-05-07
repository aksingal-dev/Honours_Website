module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme:{
        extends: {},
    },
    variants: {},
    plugins: [
        require('flowbite/plugin')
    ],
};