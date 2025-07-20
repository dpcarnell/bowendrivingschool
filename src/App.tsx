import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import Schedule from "./pages/Schedule";
import { ROUTES } from "./config/constants";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.LESSONS} element={<Lessons />} />
          <Route path={ROUTES.SCHEDULE} element={<Schedule />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
