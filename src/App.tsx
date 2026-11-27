import {HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TrackListPage from "./pages/TaskListPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tasks" element={<TrackListPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;