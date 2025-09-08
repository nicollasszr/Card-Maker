import './Form.css'

interface props{
    setGetArchive: Function,
    setShowCard: Function,
    setGetName: Function,
    setGetOccupation: Function
}

function Form(props: props){

    return(

        <div className="form-container">
            <input 
                type="file" 
                id="fileInput"
                accept="image/png, image/jpg, image/jpeg" 
                className="file-input-hidden"
                onChange={(event) => {event? props.setGetArchive(event.target.files[0]) : ""}}
            />
            <label htmlFor="fileInput" className="file-label">
                Envie uma imagem
            </label>

            <input 
                type="text" 
                placeholder="Insira seu nome" 
                className="form-input text-input"
                onChange={(event) => {props.setGetName(event.target.value)}}
            />

            <select className="form-input select-input" onChange={(event) => {props.setGetOccupation(event.target.value)}}>
                <option>Desocupado</option>
                <option>Estudante</option>
                <option>Trabalhador</option>
            </select>

            <button 
                onClick={() => { props.setShowCard(true) }} 
                className="form-button"
            >
                Montar card
            </button>
        </div>


    )

}

export default Form;