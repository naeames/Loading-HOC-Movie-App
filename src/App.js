
import React, { Component } from 'react'
import "./App.css";
import MoviePage from "./page/movie-page";
import Spinner from "./components/spinner"


 class App extends Component {

  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          isLoading: !this.state.isLoading
        })
      }, 2500
    )
    
  }


  render() {
    return (
      <div className="App" >
        {
          this.state.isLoading ? <Spinner /> : <MoviePage />
        }
      </div>
    )
  }
}


export default App 
