class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: []
    }
  }
  componentDidMount() {
    fetch('https://games-app-siit.herokuapp.com/games')
      .then(response => response.json())
      .then(games => this.setState({ gameList: games }))
  }
  deleteGame = (_id) => {
    let gamesApp = this.state.gameList.filter(game => game._id !== _id)
    this.setState({ gameList: gamesApp })
    fetch(`https://games-app-siit.herokuapp.com/games/${_id}`, { method: 'DELETE' })
      .then(response => response.text())
      .then(games => games)
  }
  render() {
    const listGames = this.state.gameList.map((game) => {
      return (
        <Game
          key={game._id}
          id={game._id}
          title={game.title}
          imageUrl={game.imageUrl}
          description={game.description}
          deleteGameBtn={this.deleteGame}
        />
      )
    })
    return (
      <div>
        {listGames}
      </div>
    )
  }
}

