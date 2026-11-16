import FullList from "../model/FullList";
import LisItem from "../model/ListItem";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void
    render(fullList: FullList): void
}

export default class ListTemplate implements DOMList {
    static instance: ListTemplate = new ListTemplate()
    ul: HTMLUListElement
    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }
    clear(): void {
        while (this.ul.lastChild) {
            this.ul.lastChild.remove()
        }
    }

    render(fullList: FullList): void {
        this.clear()
        fullList.list.forEach(itemObj => {
            this.ul.append(buildListItem(itemObj, fullList))
        })
    }
}

const buildListItem = (itemObj: LisItem, fullList: FullList): HTMLLIElement => {
    const li = document.createElement('li')
    const check = document.createElement('input')
    const label = document.createElement('label')
    const button = document.createElement('button')
    li.className = "item"
    check.type = "checkbox"
    check.id = itemObj.id
    check.checked = itemObj.checked
    label.htmlFor = check.id
    label.textContent = itemObj.item
    button.className = "button"
    button.textContent = "X"
    li.append(check, label, button)

    check.addEventListener('change', () => {
        itemObj.checked = !itemObj.checked
        fullList.save()
    })
    button.addEventListener("click", () => {
        fullList.removeItem(itemObj.id)
        ListTemplate.instance.render(fullList)
    })
    return li
}