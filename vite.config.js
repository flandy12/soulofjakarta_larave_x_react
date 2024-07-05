import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/css/App.min.css",
                "resources/css/error.css",
                "resources/css/frontend.css",
                "resources/css/frontend.min.css",
                "resources/js/app.jsx",
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
            "@asset": "/public/images",
        },
    },
});
