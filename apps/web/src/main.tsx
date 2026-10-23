import "katex/dist/katex.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {locale} from "./i18n";
document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
import "./style.css";
import "./series.css";
import "./frontier.css";
import "./immersive.css";
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

import "./unified.css";

import "./bookshelf.css";

import "./i18n/international.css";
