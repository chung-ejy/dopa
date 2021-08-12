import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const Form = ({data}) => {
    const dataContext = useContext(DataContext)
    const {getData} = dataContext
    const [state,setState] = useState({"FirstBlood":false,"FirstTower":false,"FirstBaron":false,"FirstDragon":false,"FirstInhibitor":false,"tier":"gm","side":1})
    const onChange = (e) => {
            setState({...state,[e.target.name]:e.target.checked});
        } 

    const onSubmit = (e) => {
        e.preventDefault()
        getData(state)
        setState({"FirstBlood":false,"FirstTower":false,"FirstBaron":false,"FirstDragon":false,"FirstInhibitor":false,"tier":"gm","side":"blue"})
    }
    return (
        <div className="card card-body mt-4 mb-4">
            <h5 class="card-title text-center mb-1">
                {data.title}
            </h5>
            <div className="row">
            <table className="table table-responsive-sm col">
                <tbody>
                    {Object.keys(data).map(key => (
                        <tr>
                            <td>{key}</td>
                            <td>{data[key].toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <form className="col"onSubmit={onSubmit}>
                    {Object.keys(state).map(key =>(
                        <div class="form-check form-switch content-center" key={key} name={key}>
                        <input class="form-check-input" name={key} type="checkbox" onChange={onChange} id="flexSwitchCheckDefault" />
                        <label class="form-check-label" name={key} for="flexSwitchCheckDefault">{key}</label>
                    </div>))}
                    <div className="form-group">
                        <button type="submit" class="btn btn-primary form-control">Classify</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
