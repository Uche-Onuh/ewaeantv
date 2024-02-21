import "./App.css";
import { MainLayoutRoutes } from "./Routing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Routes>
        <Route path="/*" element={<MainLayoutRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
