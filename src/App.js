import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
    constructor() {
        super()
        this.state = {
            monsters: []
        }
    }

    // https://jsonplaceholder.typicode.com/users
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ monsters: users }))
    }

    render() {
        return (
            <div className="App">
                <CardList monsters={this.state.monsters} />
            </div>
        )
    }
}

export default App;
