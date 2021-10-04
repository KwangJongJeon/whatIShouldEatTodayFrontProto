class UserForm {
    private _curLatitude: string;
    private _curLongitude: string;
    private _candidateCategory: Set<string> | undefined;
    private _range : string | undefined;


    constructor(curLatitude: string, curLongitude: string, candidateCategory?: Set<string> | undefined, range?: string | undefined) {
        this._curLatitude = curLatitude;
        this._curLongitude = curLongitude;
        this._candidateCategory = candidateCategory;
        this._range = range;
    }


    get curLatitude(): string {
        return this._curLatitude;
    }

    set curLatitude(value: string) {
        this._curLatitude = value;
    }

    get curLongitude(): string {
        return this._curLongitude;
    }

    set curLongitude(value: string) {
        this._curLongitude = value;
    }

    get candidateCategory(): Set<string> | undefined {
        return this._candidateCategory;
    }

    set candidateCategory(value: Set<string> | undefined) {
        this._candidateCategory = value;
    }


    get range(): string | undefined {
        return this._range;
    }

    set range(value: string | undefined) {
        this._range = value;
    }

    checkUndefinedIsNotExist(): boolean {
        if((this._curLongitude === undefined || null) || (this._curLatitude === undefined || null)) {
            console.log("좌표 값은 필수입니다.")
            return false;
        }
        if(this._range === (undefined || null)) {
            console.log("범위 값은 필수입니다.")
            return false;
        }
        if(this._candidateCategory === (undefined || null)) {
            console.log("카테고리 값은 필수입니다.")
            return false;
        }
        return true;


    }
}

export default UserForm;