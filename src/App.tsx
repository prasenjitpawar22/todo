import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import WorkItems from "./pages/Items";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/items" element={<WorkItems />} />
      </Route>
    </Routes>
  );
}

export default App;
