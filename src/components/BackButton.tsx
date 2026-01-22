import arrowBack from '../assets/back_arrow.svg'


function BackButton() {
    // por defecto va a volver a Dashboard
    return (
        <button>
            <img
                src={arrowBack}
                alt="Back"
                className="w-8 h-8 mb-4 cursor-pointer"
                onClick={() => window.history.back()}
                />
        </button>
    )
}

export default BackButton