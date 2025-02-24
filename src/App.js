import './App.css';
import {Component} from "react";
import {CardList} from "./components/Card-list";
import {SearchBox} from "./components/search-box/search-box";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentWillUnmount() {
        console.log("Componenet will unmount");
        this.setState({ searchField : 'Test'});
    }

    componentDidMount() {
        console.log("Componenet did mount");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({monsters: user}));
    }

    render() {
        console.log("Render method ");
        const {monsters, searchField} = this.state;
        const fileteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeHolder={'search monsters'}
                    handleChange={e => {
                        this.setState({searchField: e.target.value})
                    }}
                />
                <CardList monsters={fileteredMonsters}/>
            </div>
        );
    }
}

export default App;
