import { Route, Routes } from "react-router-dom";
import { router } from "./router";

const Router = ({setOpen}) => {
  return (
    <Routes>
      {router.map(({ path, component: Component }) => {
        return <Route key={path} path={path} element={<Component setOpen={setOpen}/>} />;
      })}
    </Routes>
  );
};

export default Router;
