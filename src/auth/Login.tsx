import {InputForm} from "../components/InputForm.js";
import {useState} from "react";
import {Link} from "react-router-dom";
import DATA from "../data/login.data.js";

export const Login = () => {

    const LoginData = DATA.fr.login;


    const LOGIN_REGEX = /(?=.*)/;
    const PASSWORD_REGEX = /(?=.*)/;

    const [viewPassword, setViewPassword] = useState(false);

    const handleSubmit = () => {}

    const valid = true;

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

                    <InputForm type={"text"} label={LoginData.login} placeholder={LoginData.login} regex={LOGIN_REGEX} getValue={() => {}} />
                    <InputForm type={"password"} label={LoginData.password} placeholder={LoginData.password} regex={PASSWORD_REGEX} getValue={() => {}}  />

                    <div className={"space-x-2 flex items-center justify-end"}>
                        <button className={""} type={"button"} onClick={() => setViewPassword(!viewPassword)}>
                            {viewPassword ? "Hide" : "Show"}
                        </button>
                        <span>
                            {LoginData.forgotPassword}
                        </span>
                    </div>
                </div>
                {<div className={"text-center"}>
                    <button type={"submit"} 
                            className={`px-6 py-1 rounded ${(valid) ? "bg-green-500" : "bg-gray-400"} text-xl font-semibold text-white`}

                    >{LoginData.submit}
                    </button>
                </div>}
            </form>

        </div>
    </>)
}