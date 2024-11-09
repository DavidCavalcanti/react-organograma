import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    const valorSelecionado = (evento) => {
        props.valorAlterado(evento.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={valorSelecionado} required={props.obrigatorio} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;