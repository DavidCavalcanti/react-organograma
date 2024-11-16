import './CampoTexto.css'
const CampoTexto = (props) => {

    const valorDigitado = (evento) => {
        props.valorAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={valorDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto;