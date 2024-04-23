import { useEffect, useState } from "react";
import Button from "../../components/Button";
import axios from "../../api/axios.js";
import useAxios from "../../hooks/useAxios.js";

const AddCandidate = () => {

    const [steps, setSteps] = useState(0);

    const [stepRes1, stepErr1, stepLoad1, stepFetch1] = useAxios();
    const [stepRes3, stepErr3, stepLoad3, stepFetch3] = useAxios();

    const [message, setMessage] = useState("");

    const [cni, setcni] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [party, setParty] = useState<string>("");
    const [slogan, setSlogan] = useState<string>("");
    const [url, setUrl] = useState<string>("");


    const stepSubmit1 = async () => {

        await stepFetch1({
            axiosInstance: axios,
            method: 'GET',
            url: "/parrainage/electeurs/" + cni,
            requestConfig: []
        })
    }

    const stepSubmit3 = async () => {
        
        const data: any = {
            email: email,
            telephone: phone,
            partie_politique: party,
            slogan: slogan,
            programme: url,
            photo: "photo"
        }

        await stepFetch3({
            axiosInstance: axios,
            method: 'POST',
            url: "/parrainage/candidats",
            requestConfig: [
                JSON.stringify(data),
                {
                    headers: {
                    }
                }
            ]
        })
    }

    useEffect(() => {
        if (stepRes1 !== null) {
            if (stepRes1.items.length > 0) {
                setSteps(1);
            } else {
                setMessage("Cet électeur n'existe pas");
            }
        }
    }, [stepRes1])

    useEffect(() => {
        if (stepErr1 !== null) {
            console.log(stepErr1)
            setMessage("Cet électeur n'existe pas");
        }
    }, [stepErr1])

    useEffect(() => {
        if (stepRes3 !== null) {
            console.log(stepRes3)
        }
    }, [stepRes3])

    useEffect(() => {
        if (stepErr3 !== null) {
            console.log(stepErr3)
        }
    }, [stepErr3])
    
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
                        <div className={`flex-1 h-1 ${steps >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={
                            `w-6 h-6 rounded-full ${steps >= 3 ? 'bg-green-500' : 'bg-gray-300'}`
                        }></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        
                    </div>
                </div>
                <hr />
                <div className="text-center text-red-500">
                    {message}
                </div>

                <div>
                    {(stepLoad1 || stepLoad3) && <div className="py-4">
                        <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                    </div>}
                </div>

                <div>
                    {steps === 0 && <div>
                        <h2 className="text-2xl font-bold mb-6">Vérification de l'électeur</h2>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name"> Numéro de la carte d’électeur du candidat </label>
                                <input type="text" id="name" value={cni} onChange={(e) => setcni(e.target.value)} className="border p-2 rounded-md" />
                            </div>
                        </div>
                    </div>}

                    {steps === 1 && <div>
                        <h2 className="text-2xl font-bold mb-6">Informations sur le candidat</h2>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Nom du candidat: {stepRes1 && stepRes1.nom}</label>
                                <input type="text" id="name" disabled className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Prénom du candidat: {stepRes1 && stepRes1.prenom}</label>
                                <input type="text" id="name" disabled className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Date de naissance du candidat: {stepRes1 && stepRes1.date_naissance}</label>
                                <input type="text" id="name" disabled className="border p-2 rounded-md" />
                            </div>
                        </div>
                    </div>}

                    {steps === 2 && <div>
                        <h2 className="text-2xl font-bold mb-6">Complement sur le candidat</h2>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Adresse email du candidat</label>
                                <input type="text" id="name" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Numéro de téléphone du candidat</label>
                                <input type="text" id="name" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Nom du parti politique du candidat</label>
                                <input type="text" id="name" value={party} onChange={(e) => setParty(e.target.value)} className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Slogan du candidat</label>
                                <input type="text" id="name" value={slogan} onChange={(e) => setSlogan(e.target.value)} className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Photo du candidat</label>
                                <input type="file" id="name" className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">URL vers une page pour les informations qu'il souhaite partager avec les citoyens</label>
                                <input type="text" id="name" value={url} onChange={(e) => setUrl(e.target.value)} className="border p-2 rounded-md" />
                            </div>
                        </div>
                    </div>}

                    {steps === 3 && <div>
                        {/* Creation terminer */}
                        <h2 className="text-2xl font-bold mb-6">Candidat créé</h2>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Nom du candidat</label>
                                <input type="text" id="name" value={stepRes3 && stepRes3.nom} disabled className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Prénom du candidat</label>
                                <input type="text" id="name" value={stepRes3 && stepRes3.prenom} disabled className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Date de naissance du candidat</label>
                                <input type="text" id="name" value={stepRes3 && stepRes3.date_naissance} disabled className="border p-2 rounded-md" />
                            </div>
                        </div>
                    </div>}
                </div>

                <div className="flex justify-between">
                    <Button label="Précedent" action={() => setSteps(
                        (prev) => {
                            if (prev > 0) return prev - 1; return prev
                        }
                    )} active={steps > 0} />
                    {steps < 3 && (
                        <Button label={
                            steps === 3 ? "Terminer" : "Suivant"
                        } action={() => {
                            if (steps === 0) {
                                stepSubmit1();
                                setSteps(1);
                            } else if (steps === 2) {
                                stepSubmit3();
                                setSteps(3);
                            } else {
                                setSteps(
                                    (prev) => {
                                        if (prev < 3) return prev + 1; return prev
                                    }
                                )
                            }
                        }} active={steps < 3} />
                    )}
                </div>
            </div>
        </div>
    </>)
}

export default AddCandidate;