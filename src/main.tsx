import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { BoardProvider } from "./components/board-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BoardProvider>
        <App />
      </BoardProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
