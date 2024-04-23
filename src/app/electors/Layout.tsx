import { Outlet } from "react-router-dom"
import { Breadcrumb } from "../../components/Breadcrumb"


const Layout = () => {

    const path= "";

    return(<>
        <Breadcrumb link={["electeurs", path]} />
        <div className="mt-8">
            <Outlet />
        </div>
    </>)
}

export default Layout;