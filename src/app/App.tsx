import { ModalProvider } from "../providers/ModalProvider"
import { Route, Routes } from "react-router-dom"
import AppLayout from "./Layout"
import Page from "./Page"
import PageCandidate from "./candidats/PageCandidate"
import PageElectors from "./electors/PageElectors"
import PagePatronages from "./patronages/PagePatronages"

function App() {

  return (<>
    <ModalProvider>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="/" element={ <Page />} />
          <Route path="/candidats/*" element={<PageCandidate />} />
          <Route path="/electeurs/*" element={<PageElectors/>} />
          <Route path="/parrainages/*" element={<PagePatronages/>} />
        </Route>
      </Routes>
    </ModalProvider>
  </>)
}

export default App