import "./App.css";
import { MainLayoutRoutes, Authentication } from "./Routing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Routes>
        <Route path="/*" element={<MainLayoutRoutes />} />
        <Route path="/user-account/*" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
