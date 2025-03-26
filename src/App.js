import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import Faqs from "./containers/achievement/Achievement"; // Importa la nueva sección de FAQs
import Talks from "./containers/talks/Talks"; // Importa la nueva sección de FAQs

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/faqs" component={Faqs} />
                <Route path="/telecitas" component={Talks} />
            </Switch>
        </Router>
    );
}

export default App;