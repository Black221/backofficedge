import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ListElectors from "./ListElectors";
import StatsElectors from "./StatsElectors";


const PageElectors = () => {

    return(<>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/liste" element={<ListElectors/>} />
                <Route path="/statistique" element={<StatsElectors/>} />
            </Route>
        </Routes>
    </>)
}

export default PageElectors;