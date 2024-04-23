import {InputForm} from "../components/InputForm.js";
import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import useAxios from "../hooks/useAxios.js";
import DATA from "../data/login.data.js";

export const Login = () => {

    const LoginData = DATA.fr.login;

    const [response, error, loading, axiosFetch] = useAxios()

    const LOGIN_REGEX = /(?=.*)/;
    const PASSWORD_REGEX = /(?=.*)/;

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [viewPassword, setViewPassword] = useState(false);


    const navigate = useNavigate();
    const from = useLocation().state?.from?.pathname || "/";


    const isValid = () => {
        return  LOGIN_REGEX.test(login) && login !== "" && PASSWORD_REGEX.test(password) && password !== "";
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!isValid()) {
            setErrMessage(LoginData.error)
            return null;
        }
    }
    
    useEffect(() => {
        if (response !== null) {}
        // eslint-disable-next-line
    },[response])

    useEffect(() => {
        console.log(error)
        if (error) {
            console.log(error)
            setErrMessage(LoginData.error)
        } else {
            setErrMessage("")
        }
    }, [error])

    return (<>
        <div className={`h-screen w-full flex items-center justify-center text-main`}>
            <form className={`bottom-20 relative space-y-8`} onSubmit={handleSubmit}>
                <div className={`md:text-3xl text-2xl text-main text-center`}>
                    <div>{LoginData.title}</div>
                    <div className={"md:text-xl text-sm font-light"}>
                        {LoginData.noAccount} <Link to={"/register"}>{LoginData.createAccount}</Link>
                    </div>
                </div>
                <div className={`space-y-2 md:w-96 w-80`}>
                    <div className={"text-sm text-red-400 text-center"}>{errMessage}</div>

                    <InputForm className={""}
                               label={LoginData.email}
                               type={"text"}
                               getValue={setLogin}
                               regex={LOGIN_REGEX}
                               required={true} />

                    <InputForm className={""}
                               label={LoginData.password}
                               type={viewPassword ? "text" : "password"}
                               getValue={setPassword}
                               regex={PASSWORD_REGEX}
                               required={true} />

                    <div className={"space-x-2 flex items-center justify-end"}>
                        <button className={""} type={"button"} onClick={() => setViewPassword(!viewPassword)}>
                            {viewPassword ? "Hide" : "Show"}
                        </button>
                        <span>
                            {LoginData.forgotPassword}
                        </span>
                    </div>
                </div>
                {!loading ? <div className={"text-center"}>
                    <button type={"submit"} disabled={!isValid()}
                            className={`px-6 py-1 rounded ${isValid() ? "bg-green-500" : "bg-gray-400"} text-xl font-semibold text-white`}

                    >{LoginData.submit}
                    </button>
                </div> : <div>
                    <div className={"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-main"}></div>
                </div>}
            </form>

        </div>
    </>)
}