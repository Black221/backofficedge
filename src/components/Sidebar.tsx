import {useState} from "react";
import DropLink from "../components/DropLink.tsx";


export interface ISidebar {

    app: {
        title: string,
        link: HTMLElement,
        logo: any,
    };
    droplist : [{
        group: string,
        link: [{
            to: string,
            name: string,
            icon: any,
        }]
    }];
    foot: {
        link: HTMLElement,
        icon: any,
    }
}
export const Sidebar = (props: ISidebar) => {

    const [dropAction, setDropAction] = useState(true);
    const [dropDashboard, setDropDashboard] = useState(true);

    return (<>

        <div className={`w-64 bg-white`}>
            <div className={`w-64 bg-main-bg h-screen drop-shadow-2xl shadow fixed z-10 text-center  space-y-10  top-0`}>

                <div className={"flex flex-col h-full overflow-y-scroll pt-10 pb-8 "}>

                    <img src={"../flag.png"} alt="" className={`w-2/3 mx-auto rounded`}/>


                    <div className={`w-full  text-start space-y-4 flex-1 pt-8`}>
                        {props.droplist.map((item, index) => <div key={index}>
                            <DropLink label={item.group} links={item.link} />
                        </div>)}
                    </div>

                    <div className={`w-full text-xl px-4 pb-4 flex justify-between items-center`}>
                    </div>
                </div>
            </div>
        </div>

    </>)
}