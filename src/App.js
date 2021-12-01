import React, { Component } from 'react'
import Movies from './components/movies';

class App extends Component {
    render() { 
        return <React.Fragment>
            <main className="container">
                <Movies></Movies>
            </main>
        </React.Fragment>;
    }
}
 
export default App;