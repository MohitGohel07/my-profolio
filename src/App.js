import "./assets/bootstrap.min.css";
// import "./assets/js/main";
// import "./assets/lib/animate/animate.css";
// import "./assets/lib/animate/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Index/index';
import NoPage from './component/noPage/noPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
