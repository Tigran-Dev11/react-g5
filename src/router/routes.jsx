import { router } from "./router";
import { Route, Routes } from "react-router-dom";


const Router = () => {
    return(
        <Routes>
            {
                router.map(({path, component: Component}) => {
                    return <Route key={path} path={path} element={<Component/>}/>
                })
            }
        </Routes>
    )
}
export default Router