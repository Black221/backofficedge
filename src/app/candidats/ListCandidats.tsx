import { Table } from "../../components/Table";
import { Pagination } from "../../components/Pagination";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import useAxios from "../../hooks/useAxios.js";

const ListCandidates = () => {

    const [data, setData] = useState([]);

    const [response, error, load, fetch] = useAxios();

    useEffect(() => {
        fetch({
            axiosInstance: axios,
            method: 'GET',
            url: "/parrainage/electeurs",
            requestConfig: []
        })
    }, []);

    useEffect(() => {
        if (response) {
            console.log(response);
            setData(response.items);
        }
    }, [response]);

    const extract =(data: any[], colums: string[]): any => {
        const arr: string[] = []
        data.map(row => {
            const obj: any = {}
            colums.map(cols => {
                const c = cols.split('.');
                if (c.length > 1) {
                    if (c[1] === 'lenght') 
                        obj[c[0]] = row[c[0]].length
                    else
                        obj[c[1]] = row[c[0]][c[1]]
                } else {
                    obj[cols] = row[cols]
                }
            })
            arr.push(obj)
        })
        return arr;
    }

    const COLUMNS = [
        "compte", "nom", "prenom", "length"
    ];


    return (<>
        <div className={"flex justify-between items-center mb-4"}>
            <h1 className={"text-2xl font-bold text-green-800"}>Liste des candidats</h1>
            <div>
                <input type="text" placeholder={"Rechercher un candidat"} className={"border p-2 rounded-md w-96"} />
            </div>
        </div>
        <Table data={extract(data, ["compte", "profil_electeur.nom", "profil_electeur.prenom", "parrains.length"])} column={COLUMNS} action={{
            ref: ['test', 'test2', 'test3'],
        }} />
        <Pagination />
    
    </>);   
}

export default ListCandidates;