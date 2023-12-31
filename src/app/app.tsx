import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { AppGeneral } from "./app-general/organelles/app-general";
import {
  updateProjects,
  updateSearchProject,
} from "@stores/projects/actions";
import { ProjectBar } from "@pages/project-bar/organelles/project-bar";
import { Project } from "@pages/project/organelles/project";
import { Settings } from "@pages/settings/organelles/settings";
import { localStorageName } from "@stores/store";
import { pathName } from "@stores/path-name";
import { StyleApp } from "./app.styles";

export const EXTERNAL_DATE = "2023-10-09"; //Date of specific interface change (required to delete data)

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const updateDate = new Date(EXTERNAL_DATE);

    const currentDate = new Date().getTime();
    const targetTime = updateDate.getTime();

    if (currentDate < targetTime) {
      localStorage.removeItem(localStorageName);
      return;
    }

    const savedProjects = localStorage.getItem(localStorageName);

    if (savedProjects) {
      const parsedProjects = JSON.parse(savedProjects);
      dispatch(updateSearchProject(parsedProjects));
      dispatch(updateProjects(parsedProjects));
    }
  }, [dispatch]);
  return (
    <StyleApp>
      <Routes>
        <Route path="/" element={<AppGeneral />}>
          {/* <Route
            path="*"
            element={<Navigate to={`/${pathName.project.title}`} />}
          /> */}
          <Route path={`${pathName.project.title}`} element={<ProjectBar />}>
            <Route
              path={`:${pathName.project.item.title}`}
              element={<Project />}
            />
          </Route>
          <Route path={`${pathName.settings.title}`} element={<Settings />} />
          <Route path={`${pathName.group.title}`} element={<Settings />} />
          <Route path={`${pathName.calendar.title}`} element={<Settings />} />
          <Route path={`${pathName.time.title}`} element={<Settings />} />
          <Route path={`${pathName.statistics.title}`} element={<Settings />} />
        </Route>
      </Routes>
    </StyleApp>
  );
}

export { App };
