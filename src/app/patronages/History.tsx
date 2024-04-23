import { Pagination } from "../../components/Pagination";
import { Table } from "../../components/Table";
import { Historique } from "../../models/type";

const History = () => {

    const data: Historique[] = [
        {
            date_debut: "2021-09-01",
            date_fin: "2021-09-30",
            annee_electorale: "2021",
            nombre_candidats: 10,
            nombre_electeurs: 100,
            nombre_parrains: 50
        },
        {
            date_debut: "2021-10-01",
            date_fin: "2021-10-31",
            annee_electorale: "2021",
            nombre_candidats: 15,
            nombre_electeurs: 150,
            nombre_parrains: 75
        }
    ];

    const column: string[] = [
        "Date de début",
        "Date de fin",
        "Année électorale",
        "Nombre de candidats",
        "Nombre d'électeurs",
        "Nombre de parrains"
    ];
    return (<>
        <div className={"flex justify-between items-center mb-6"}>
            <h1 className={"text-2xl font-bold text-green-800"}>Historique des élections</h1>
            <div>
                <input type="text" placeholder={"Rechercher"} className={"border p-2 rounded-md w-96"} />
            </div>
        </div>
        <Table data={data} column={column} />
        <Pagination />
    </>)
}

export default History;