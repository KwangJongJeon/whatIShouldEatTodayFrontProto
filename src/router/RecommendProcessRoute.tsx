import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import RecommendProcessController from "../controller/RecommendProcessController";

class RecommendProcessRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path = '/' component={ RecommendProcessController}/>
                </Switch>
            </Router>
        )
    }
}

export default RecommendProcessRoute;