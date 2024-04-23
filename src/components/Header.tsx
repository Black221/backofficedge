import userSvg from "../assets/profile.svg";
import {NavLink} from "react-router-dom";
import logout from "../assets/door-open.svg";

const Header = () => {

    const user = {
        firstname: "John",
        lastname: "Doe",
        email: ""
    }
    return (<>

        <div className={`md:h-20 h-full flex items-center justify-between shadow w-full md:px-8 sticky top-0 bg-white z-50`}>
            <div className={`font-bold text-main text-center`}>
                <div className={""}>
                    <span className="text-green-500">Un peuple </span>
                    <span className="text-yellow-500">- Un but - </span>
                    <span className="text-red-500">Une foi</span>
                </div>
                <div className={"text-xs font-light"}>
                    Direction Générale des Elections
                </div>
            </div>
            <div className={`flex items-center space-x-4 text-main text-xl`}>

                <NavLink to={"/login"} className={"font-semibold flex items-center space-x-2"}><img className={"w-5"} src={logout} alt=""/></NavLink>
                {/*<img className={"w-6"}  src={notification} alt=""/>*/}
                <div className={"hidden md:block"}>{user.lastname}</div>
                <div className={` flex rounded-full`}>
                    <img className={"w-6"}  src={userSvg} alt=""/>
                    {/*<img className={"w-5"} src={down} alt=""/>*/}
                </div>

            </div>
        </div>
    </>)
}

export default Header;