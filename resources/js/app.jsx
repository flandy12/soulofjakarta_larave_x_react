import "./bootstrap";

import React from "react";
import { render } from "react-dom";
// import { createInertiaApp, App} from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App, createInertiaApp } from "@inertiajs/inertia-react";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    id: "app",
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        root.render(
            <StrictMode>
                <App {...props} />
            </StrictMode>
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });
