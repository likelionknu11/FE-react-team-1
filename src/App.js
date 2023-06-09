import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./Pages/Main";
import NotFound from "./Pages/NotFound";
import Detail from "./Pages/Detail";
import Store from "./Store/Store";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/detail/*" element={<Detail />}></Route>
      <Route path="/store" element={<Store />}></Route>
      {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
