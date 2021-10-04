class UserForm {
    private _curLatitude: number | undefined;
    private _curLongitude: number | undefined;
    private _candidateCategory: object | undefined;

    get curLatitude(): number | undefined {
        return this._curLatitude;
    }

    set curLatitude(value: number | undefined) {
        this._curLatitude = value;
    }

    get curLongitude(): number | undefined {
        return this._curLongitude;
    }

    set curLongitude(value: number | undefined) {
        this._curLongitude = value;
    }

    get candidateCategory(): object | undefined {
        return this._candidateCategory;
    }

    set candidateCategory(value: object | undefined) {
        this._candidateCategory = value;
    }
}

export default UserForm;