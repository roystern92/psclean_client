import React, {Component} from 'react';
import Layout from './containers/Layout/Layout';
import Routes from './shared/Routes/Routes';




class App extends Component {

    render() {
        let routes = <Routes /> ;

        return (
            <div className="App">
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    };

};

export default App;
