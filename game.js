class Game extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {id,title,imageUrl,description,deleteGameBtn} = this.props;
    return (
      <div className="games">
        <h1>{title}</h1>
        <img alt='photo' src ={imageUrl} className="image"/>
        <p>{description}</p>
        <button onClick={()=>{deleteGameBtn(id)}} className="btn-delete">Delete</button>
      </div>
    )
  }
}
  