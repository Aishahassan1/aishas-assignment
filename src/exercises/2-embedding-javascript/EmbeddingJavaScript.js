function capitaliseFirstLetter(s) {
return s.charAt(0).toUpperCase() + s.slice(1)
}

const EmbeddingJavascript = () => {

  const user = {
    firstName: "linda",
    surname: "spruce",
    image: 'https://picsum.photos/200/300'
  }

  return (
    <div className="exercise second">
      <h2>Embed JavaScript in JSX</h2>
      <h3>Instructions: </h3>
      <ul>
        <li>Using the user object please render user's full name below</li>
        <li>The first letters of first and surnames should be capitalized</li>
        <li>Please don't modify the user object</li>
        <li>Please render img element with src pointing to user's image property</li>
      </ul>

      <a href="https://reactjs.org/docs/introducing-jsx.html">Documentation and examples</a>


      <h2>{capitaliseFirstLetter(user.firstName)} {capitaliseFirstLetter(user.surname)}</h2>
      <h2>Please render user image below </h2>
      <img src={user.image}/>

    </div>
  )
}

export default EmbeddingJavascript