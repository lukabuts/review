/* eslint-disable react/prop-types */
import thanksImg from '../imgs/thanks.svg'

const Thanks = ({rate, btns, setSubmited, submited}) => {
    return(
        <div className='thanks-div'>
            <img src={thanksImg} alt="Mobile" /> 
            <p className="how-much-p">You Selected {rate} out of {btns[btns.length - 1]}</p>
            <h1 className="thanks-h1">
                Thank you!
            </h1>
            <p className="desc-p">
                We appreciate you taking the time to give a rating. If you ever need more support, do not hesitate to get in touch!
            </p>
            <button
            disabled={rate === 0} 
            className="change-submit-btn"
            onClick={() => setSubmited(!submited)}
            >
                ahange answer
            </button>
        </div>
    )
}

export default Thanks