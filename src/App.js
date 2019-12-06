import React from 'react';
import axios from 'axios';
import Joke from './Joke';

class App extends React.Component {
  constructor() {
    super()
    this.state={jokes: []}
  }

   generateJoke (jokeJSON) {
    return jokeJSON.type === "twopart" ? <Joke question={jokeJSON.setup} punchline={jokeJSON.delivery} />
                                           : <Joke key={jokeJSON.id} punchline={jokeJSON.joke} />
  }
  
  async componentDidMount () {
    let res;
    for (let i=0; i<5; i++) {
      res = await axios.get("https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw&religious&political")
      this.setState({jokes: [...this.state.jokes, res.data]})
    }
  }

  render() {
    return this.state.jokes.map(joke =>{
        return <div className="App" key={joke.id}>{ this.generateJoke(joke)}</div>
    })
  }
}

export default App
