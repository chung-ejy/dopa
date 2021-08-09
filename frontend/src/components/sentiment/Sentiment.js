import React from 'react'

const Sentiment = ({data}) => {
    let color = data.prediction != 0 ? "success" : "danger"
    return (
        <div className="container justify-content-center mt-2">
            <h3 className="text-center">
                <i className={`fas fa-${data.prediction !=0 ? "dragon": "ghost"
                } text-${color} fa-7x`} />
            </h3>
            <h3 className={`text-center mt-3`}>
                {"data: "}
                <span className={`text-${color}`}>
                    {data.prediction != 0 ? "YEET": "REKT"}
                </span>
            </h3>
        </div>
    )
}

export default Sentiment
