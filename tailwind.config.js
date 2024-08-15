import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                primary     : "#181820",
                secondary   : "#21212b",
                ternary     : "#fbe6a2",
                accent      : "#9c82f7",
                secondary2  : "#2d2d3b"
            },
            fontFamily: {
                light:      ["CriqueGrotesk Light"],
                regular:    ["CriqueGrotesk Regular"],
                medium:     ["CriqueGrotesk Medium"],
                semibold:   ["CriqueGrotesk SemiBold"],
                bold:       ["CriqueGrotesk Bold"],
            }
        },
    },

    plugins: [forms],
};
