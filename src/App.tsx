import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import RecommendProcessRoute from "./router/RecommendProcessRoute";

const mapStyles = {
    width: '100%',
    height: '100%'
}



class App extends Component<any, any> {

    private latitude: number | undefined;
    private longitude: number | undefined;

    constructor(props: any) {
        super(props);
        this.state = {
            name: "React",
        }
    }

    componentDidMount() {
    if(navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            console.log("Latitude is : " + position.coords.latitude);
            console.log("Longitude is : ", position.coords.longitude);
        })
    }
  }

  render() {
    return (
        <div>
            <RecommendProcessRoute/>
        </div>
    )
  }
}
export default App;