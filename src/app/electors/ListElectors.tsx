import { Table } from "../../components/Table";
import { Pagination } from "../../components/Pagination";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import useAxios from "../../hooks/useAxios.js";


const ListElectors = () => {

    const [data, setData] = useState([]);
    const COLUMNS = [
        "cni", "numero_electeur", "nom", "prenom", "sexe"
    ];

    const [response, error, load, fetch] = useAxios();

    useEffect(() => {
        fetch({
            axiosInstance: axios,
            method: 'GET',
            url: "/electeurs",
            requestConfig: [
                {
                    headers: {
                        'Accept': '*/*',
                    }
                }
            ]
        })
    }, []);

    useEffect(() => {
        if (response) {
            console.log(response);
            setData(response.items);
        }
    }, [response]);

    useEffect(() => {
        
    }, [load]);



    return (<>
        <div className={"flex justify-between items-center mb-4"}>
            <h1 className={"text-2xl font-bold text-green-800"}>Liste des électeurs</h1>
            <div>
                <input type="text" placeholder={"Rechercher un électeur"} className={"border p-2 rounded-md w-96"} />
            </div>
        </div>
        <Table data={data} column={COLUMNS} action={{
            ref: [],
        }} />
        <Pagination />
    </>);
}

export default ListElectors;