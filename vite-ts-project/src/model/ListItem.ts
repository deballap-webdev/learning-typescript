interface Item {
    _id: string,
    _item: string,
    _checked: boolean,
}

export default class LisItem implements Item {
    constructor(private id: string, private item: string, private checked: boolean) {
        this._id = id,
            this._item = item,
            this._checked = checked
    }

    getId(): string {
        return this.id,
    }

    getItem(): string {
        return this.item
    }

    getChecked(): boolean {
        return this.checked
    }

    setId(id): void {

    }



}