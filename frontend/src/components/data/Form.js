import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const Form = ({data}) => {
    const dataContext = useContext(DataContext)
    const {getData} = dataContext
    const [state,setState] = useState({"FirstBlood":true,"FirstTower":true,"FirstBaron":true,"FirstDragon":true,"FirstInhibitor":true,"tier":"gm","side":1})
    const onChange = (e) => {
        if (e.target.name === "side"){
            setState({...state,[e.target.name]:e.target.checked});
        } else {
            if (e.target.name === "tier") {
                setState({...state,[e.target.name]:e.target.checked});
            } else {
                setState({...state,[e.target.name]:e.target.checked});
            }
            
        } 
    }

    const onSubmit = (e) => {
        getData(state)
        setState({"FirstBlood":true,"FirstTower":true,"FirstBaron":true,"FirstDragon":true,"FirstInhibitor":true,"tier":"gm","side":"blue"})
    }
    return (
        <div className="card card-body mt-4 mb-4">
            <h5 class="card-title text-center mb-1">
                {data.title}
            </h5>
            <table className="table table-responsive-sm">
                <tbody>
                    {Object.keys(data).map(key => (
                        <tr>
                            <td>{key}</td>
                            <td>{data[key].toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={onSubmit}>
                {Object.keys(state).map(key =>(
                    <div class="form-check form-switch" key={key} name={key}>
                    <input class="form-check-input" name={key} type="checkbox" onChange={onChange} id="flexSwitchCheckDefault" />
                    <label class="form-check-label" name={key} for="flexSwitchCheckDefault">{key}</label>
                  </div>))}
                <div className="form-group">
                    <button type="submit" class="btn btn-primary form-control">Classify</button>
                </div>
            </form>
        </div>
    )
}

export default Form
