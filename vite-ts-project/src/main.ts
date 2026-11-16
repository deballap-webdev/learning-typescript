import './css/style.css'
import FullList from './model/FullList'
import LisItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement

  itemEntryForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault()

    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryText: string = input.value.trim()
    if (!newEntryText) return

    const newEntryId = fullList.list.length ? Number(fullList.list[fullList.list.length - 1].id) + 1 : 0

    const newEntry = new LisItem(newEntryId.toString(), newEntryText, false)

    fullList.addItem(newEntry)
    template.render(fullList)
  })

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
  clearItems.addEventListener("click", () => {
    fullList.clearList()
    template.clear()
  })

  fullList.load()
  template.render(fullList)

}

document.addEventListener("DOMContentLoaded", initApp)