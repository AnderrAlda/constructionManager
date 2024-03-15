import "./App.css";
import { Tasks } from "./pages/Tasks";
import { ViewPost } from "./pages/ViewPost";
import { Blueprint } from "./pages/Blueprints";
import { CreatePost } from "./pages/CreatePost";
import { Projects } from "./pages/Projects";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RoutesType } from "./types";
import SvgViewer from "./components/svgViewer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={RoutesType.PROJECTS} element={<Projects />} />
          <Route path={RoutesType.TASKS} element={<Tasks />} />
          <Route path={RoutesType.VIEWPOST} element={<ViewPost />} />
          <Route path={RoutesType.BLUEPRINT} element={<Blueprint />} />
          <Route path={RoutesType.CREATEPOST} element={<CreatePost />} />
          <Route path={RoutesType.TEST} element={<SvgViewer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
