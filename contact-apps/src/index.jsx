import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";

const element = <ContactApp />;

const root = createRoot(document.getElementById("root"));
root.render(element);
