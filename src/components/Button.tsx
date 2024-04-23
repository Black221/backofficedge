

const Button = ({ label, action, active, color = "bg-green-500" } : any) => {

    return(<>
        <button  onClick={action} className={`px-4 py-2 m-2 rounded-md ${active ? color : 'bg-gray-300'}`}>
            <span className={`font-semibold text-lg ${active ? "text-white" : "text-black"}`}>{label}</span>
        </button>
    </>)
}

export default Button;