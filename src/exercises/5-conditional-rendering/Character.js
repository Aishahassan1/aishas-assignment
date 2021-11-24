const Character = (props) => {

  // function Mordor() {
  //   if (props.hasBeenToMordor === true){
  //     return( <p>Has been to Mordor</p>)
  //   } return (<p>Has not been to Mordor</p>)
  // }

  return(
    <div className="Character">

      <h3>Name: {props.character.name}</h3>

      <img src={props.character.image} alt=""/>

      {/* Please render only one of these values based on 
      hasBeenToMordor value coming from character prop */}

    
      <p>{props.character.hasBeenToMordor === true ? "has been to Mordor" : "has not been to Mordor"}</p>
    </div>
  )
}

export default Character