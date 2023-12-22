import ActionButton from '../ActionButton'
import Face from '../Face'

const SuccessPopUp = () => {
  return (
    <div className='success-box'>
        <Face mood='happy' />
        <div className="text-wrapper">
        <h1>Success!</h1>
        <p>yay, everything is working.</p>
      </div>
      <ActionButton placeholder='Continue' type='success' />
    </div>
  )
}

export default SuccessPopUp