/* eslint-disable react/prop-types */
import starImg from '../imgs/star.svg'

const Question = ({rate, setRate, setSubmited, submited, btns}) => {
    return(
        <div className='container'>
            <div className="star-img-div">
                <img src={starImg} alt="Star"/>
            </div>
            <div className="question">
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className="rate-buttons">
                {btns.map(btn => {
                    return(
                        <button key={btn} 
                        className={rate === btn ? 'active rate-button' : 'rate-button'}
                        onClick={() => {
                            rate === btn ? setRate(0) : setRate(btn)
                        }}
                        >
                        {btn}
                        </button>
                    )   
                })}
            </div>
            <button
            disabled={rate === 0} 
            className={rate !==0 ? "active submit-btn" : "submit-btn"}
            onClick={() => setSubmited(!submited)}
            >
                Submit
            </button>
    </div>
    )
}

export default Question