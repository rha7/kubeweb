import React, {
    Component
} from 'react';

import axios from 'axios';

import './App.css';

class App extends Component {
    constructor(params) {
        super(params)
        this.state = {
            data: null
        }
        this.reloadData = this.reloadData.bind(this)
    }

    reloadData() {
        console.log("Starting call to " + window.appEnv.api_host + ":" + window.appEnv.api_port)
        axios
            .get('http://' + window.appEnv.api_host + ':' + window.appEnv.api_port + '/')
            .then((resp) => {
                this.setState({
                    data: resp.data,
                })
                console.log("Data API call completed.")
            })
            .catch((error) => {
                console.error("Data API call failed.")
                alert("Error ocurred while loading data:\n" + error + "\n")
            })
    }

    componentDidMount() {
        console.log("window.appEnv.api_host:", window.appEnv.api_host)
        console.log("window.appEnv.api_port:", window.appEnv.api_port)
        console.log("Starting initial call to data API...")
        this.reloadData()
    }

    render() {
        return (
            <div>
                <h1>App Client</h1>
                <pre>
                    {JSON.stringify(process.env, 0, 2)}
                </pre>
                <div>
                    <button onClick={this.reloadData}>Reload</button>
                </div>
                <pre>
                    {JSON.stringify(this.state.data, 0, 2)}
                </pre>
            </div>
        );
    }
}

export default App;
