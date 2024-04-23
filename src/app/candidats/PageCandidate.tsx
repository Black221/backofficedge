import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ListCandidates from "./ListCandidats";
import StatsCandidates from "./StatsCandidats";
import ViewCandidat from "./ViewCandidat";
import AddCandidate from "./AddCandidat";


const PageCandidate = () => {

    return(<>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/nouveau" element={<AddCandidate/>} />
                <Route path="/liste" element={<ListCandidates/>} />
                <Route path="/statistiques" element={<StatsCandidates/>} />
                <Route path="/:id" element={<ViewCandidat/>} />
            </Route>
        </Routes>
    </>)
}

export default PageCandidate;