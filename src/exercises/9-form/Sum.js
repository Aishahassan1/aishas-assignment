import { useState } from "react"

const Sum = () => {

  const [firstNumber, setFirstNumber] = (useState = 3)
  const [secondNumber, setSecondNumber] = (useState = 2)

  return(
    <div className="flex">
      
      <div className="inputs">
        <input placeholder="first number"/>
        <input placeholder="second number"/>
      </div>
{/*       
      Instead of the word SUM we should render 
      the sum of the numbers from the two input fields
      As the user changes number so should we see the update
      immedediately
       */}
      <div className="sum">SUM</div>
    </div>
  )
}

export default Sum
