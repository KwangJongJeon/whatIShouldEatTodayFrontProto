import React, {Component, FormEvent} from "react";
import UserForm from "../dto/UserForm";
import axios from 'axios';

type State = {
    userForm: UserForm;
}

class RecommendProcessController extends Component<UserForm, State> {

    constructor(props: UserForm) {
        super(props);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    userForm: new UserForm(position.coords.latitude, position.coords.longitude),
                })
                console.log("User Latitude: " + this.state.userForm.curLatitude);
                console.log("User Longitude: " + this.state.userForm.curLongitude);
            },
             (error) => {
                /** 에러 처리 로직이 들어가야함 */
                console.error("Error code: " + error.code + " - " + error.message);
            }
        )
    }

    handleRangeChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget;
        this.state.userForm.range = value;

        console.log(this.state.userForm.range);
    }

    handleCategoryChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget;

        if(this.state.userForm.candidateCategory == undefined) {
            this.state.userForm.candidateCategory = new Set<string>();
        }

        if(e.currentTarget.checked == false) {

            this.state.userForm.candidateCategory.delete(value);
        }
        else {
            this.state.userForm.candidateCategory.add(value);
        }

        console.log(this.state.userForm.candidateCategory);

    }

    handleCheckButton = () => {
        console.log(this.state)
    }


    onSubmit = async () => {
        if(this.state.userForm.checkUndefinedIsNotExist()) {
            axios({
                url: '/api/recommend',
                method: 'post',
                headers: {"Access-Control-Allow-Origin": "*"},
                baseURL: 'http://localhost:8080',
                withCredentials: false,
                data: this.state.userForm
            }).then((res) => {
                alert("res: " + res)
                console.log({res});
            }, (err) => {
                alert("err: " + err)
                console.log({err});
            });
        }
        else {
            alert("입력 값을 확인해주세요!(console 확인)");
        }



    }




    render() {
        return (
            <div className = "RecommendProcessController">
                <form>
                    <fieldset>
                        <legend>거리 선택</legend>
                        <input type = "range" id = "range" name = "range" min="0" max="5000" width={500} defaultValue={1000}
                               onChange={this.handleRangeChange} list="tickmarks" />
                        <datalist id={"tickmarks"}>
                            <option value={"100"} label={"100m"}></option>
                            <option value={"500"} label={"500m"}></option>
                            <option value={"1000"} label={"1000m"}></option>
                            <option value={"2000"} label={"2000m"}></option>
                            <option value={"5000"} label={"5000m"}></option>
                        </datalist>
                    </fieldset>
                    <fieldset >
                        <legend>메뉴 카테고리 선택</legend>
                        <div>
                            <input type={"checkbox"} id={"koreanFood"} name={"menuCategory"} value={"koreanFood"} onChange={this.handleCategoryChange}/>
                                <label htmlFor={"koreanFood"}>한식</label>
                        </div>
                        <div>
                            <input type={"checkbox"} id={"JapaneseFood"} name={"menuCategory"} value={"JapaneseFood"} onChange={this.handleCategoryChange}/>
                            <label htmlFor={"koreanFood"}>일식</label>
                        </div>
                        <div>
                            <input type={"checkbox"} id={"ChineseFood"} name={"menuCategory"} value={"ChineseFood"} onChange={this.handleCategoryChange}/>
                            <label htmlFor={"koreanFood"}>중식</label>
                        </div>
                    </fieldset>
                    <button className={"checkTest"} type={"button"} onClick={this.handleCheckButton}>상태 확인!</button>
                    <button className={"submit"} type={"button"} onClick={this.onSubmit}>식사 추첨!</button>
                </form>


            </div>
        );
    }
}

export default RecommendProcessController;
