/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {},
        container: {
            // you can configure the container to be centered
            center: true,

            // or have default horizontal padding
            padding: "1rem",

            // default breakpoints but with 40px removed
            // screens: {
            //   sm (640px)	max-width: 640px;
            //   md (768px)	max-width: 768px;
            //   lg (1024px)	max-width: 1024px;
            //   xl (1280px)	max-width: 1280px;
            //   2xl (1536px)
            // },
        },
    },
    plugins: [],
};
