import { useState } from "react";
import Button from "../../components/Button";
import { Table } from "../../components/Table";
import { ElecteurP } from "../../models/type";
import { Pagination } from "../../components/Pagination";


const NewPatronage = () => {


    const [steps, setSteps] = useState(0);

    const data: ElecteurP[] = [
        {
            tentative: 1,
            cni : "123456789",
            identifiant: 1,
            probleme: "problem 1"
        },
        {
            tentative: 2,
            cni : "123456789",
            identifiant: 2,
            probleme: "problem 2"
        },
        {
            tentative: 3,
            cni : "123456789",
            identifiant: 3,
            probleme: "problem 3"
        },
        {
            tentative: 4,
            cni : "123456789",
            identifiant: 4,
            probleme: "problem 4"
        },
        {
            tentative: 5,
            cni : "123456789",
            identifiant: 5,
            probleme: "problem 5"
        },
        {
            tentative: 6,
            cni : "123456789",
            identifiant: 6,
            probleme: "problem 6"
        },
        {
            tentative: 7,
            cni : "123456789",
            identifiant: 7,
            probleme: "problem 7"
        },
        {
            tentative: 8,
            cni : "123456789",
            identifiant: 8,
            probleme: "problem 8"
        },
        {
            tentative: 9,
            cni : "123456789",
            identifiant: 9,
            probleme: "problem 9"
        },
        {
            tentative: 10,
            cni : "123456789",
            identifiant: 10,
            probleme: "problem 10"
        },
    ]

    const colums = [
        "cni", "identifiant", "probleme", "tentative"
    ] 
    
    return (<>


        <div className="flex flex-col space-y-4 items-center justify-center">
            
            <div className="border rounded-md p-6 min-w-[60vw] space-y-6">
                <div>
                    <div className="flex w-full justify-between items-center">
                        <div className={
                            `w-6 h-6 rounded-full ${steps >= 0 ? 'bg-green-500' : 'bg-gray-300'}`
                        }></div>
                        <div className={`flex-1 h-1 ${steps >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={
                            `w-6 h-6 rounded-full ${steps >= 1 ? 'bg-green-500' : 'bg-gray-300'}`
                        }></div>
                        <div className={`flex-1 h-1 ${steps >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={
                            `w-6 h-6 rounded-full ${steps >= 2 ? 'bg-green-500' : 'bg-gray-300'}`
                        }></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="w-1/3 text-start">Upload</div>
                        <div className="w-1/3 text-center">Vérification</div>
                        <div className="w-1/3 text-end">Validation</div>
                    </div>
                </div>
                
                <hr />

                <div>
                    {steps === 0 && <div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Checksum</label>
                                <input type="text" id="name" className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Fichier électorals</label>
                                <input type="file" id="name" className="border p-2 rounded-md" />
                            </div>
                        </div>
                    </div>}

                    {steps === 1 && <div>
                        <Table data={data} column={colums} action={{
                            ref: []
                        }} />
                        <Pagination />
                    </div>}

                    {steps === 2 && <div>
                        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                            <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24">
                                <path
                                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900">
                                </path>
                            </svg>
                            <div>Traitement en cours...</div>
                        </div>
                    </div>}
                </div>

                <div className="flex justify-between">
                    <Button label="Précedent" action={() => setSteps(
                        (prev) => {
                            if (prev > 0) return prev - 1; return prev
                        }
                    )} active={steps > 0} />
                    <Button label={
                        steps === 2 ? "Terminer" : "Suivant"
                    } action={() => setSteps(
                        (prev) => {
                            if (prev < 2) return prev + 1; return prev
                        }
                    )} active={steps < 2} />
                </div>
            </div>
        </div>
    </>)
}

export default NewPatronage;