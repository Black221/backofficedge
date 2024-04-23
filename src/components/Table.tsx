import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import useConvertToFrench from "../hooks/useConvertToFrench";

export const Table = ({column, data, action} : any) => {

    const [sens, setSens] = useState(false);
    const [current, setCurrent] = useState("patientId");
    const [convert] = useConvertToFrench();

    const sortTable = (column: any) => {
        let s = sens;
        if (current === column)
            s = !s
        else s = true;
        console.log(s, sens)

        // let nd = data.sort((a: any, b: any) => {
        //     if (a[column] > b[column])
        //         return s ? 1 : -1;
        //     else
        //         return s ? -1 : 1;
        // })
        setSens(sens)
        setCurrent(column)
    }

    useEffect(() => {
        console.log(sens)
    }, [sens])

    return (<>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">

                <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        {column && column.map((c: any, index: number) => (
                            <th key={index} scope="col" className="px-3 py-3">
                                <button className={"uppercase"} onClick={() => sortTable(c)}>{convert(c)}</button>
                            </th>
                        ))}
                        {action && action.ref.lenth > 0 && <th colSpan={action.ref.length} scope="col" className="px-3 py-3">
                            Actions
                        </th>}
                    </tr>
                </thead>

                <tbody>
                    {data ? data.map((d: any, index: number) => (
                        <tr key={index} className="bg-white border-b">
                            {column && column.map((c: any, index: number) => (
                                <th key={index} scope="col" className="px-3 py-3">
                                    {d[c]}
                                </th>
                            ))}
                            {action && action.ref.lenght > 0 && action.ref.map((a: any, index: number) => (
                                <th key={index} scope="col" className="px-3 py-3 text-light text-blue-400 border-l underline">
                                    <NavLink to={`/${action.position}/${a}/${d[action.id]}`}>{a}</NavLink>
                                </th>
                            ))}
                        </tr>
                    )) : <div>
                        none
                    </div>}
                </tbody>
            </table>
        </div>
    </>)
}


