import React, { Component } from "react";
import UserForm from "../dto/UserForm";

type userForm = UserForm;

class RecommendProcessController extends Component<UserForm> {
    private userForm : UserForm;

    constructor(props: UserForm) {
        super(props);
        this.userForm = props;
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.userForm.curLatitude = position.coords.latitude;
                this.userForm.curLongitude = position.coords.longitude;
            },
            (error) => {
                /** 에러 처리 로직이 들어가야함 */
                console.error("Error code: " + error.code + " - " + error.message);
            }
        )
    }

    render() {
        return (
            <div className = "RecommendProcessController">

            </div>
        );
    }
}

export default RecommendProcessController;
