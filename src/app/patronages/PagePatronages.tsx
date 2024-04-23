import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import History from "./History";
import NewPatronage from "./NewPatronage";
import StatsPatronage from "./StatsPatronage";


const PagePatronages = () => {

    return(<>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/historique" element={<History/>} />
                <Route path="/nouveau" element={<NewPatronage/>} />
                <Route path="/statistique" element={<StatsPatronage/>} />
            </Route>
        </Routes>
    </>)
}

export default PagePatronages;