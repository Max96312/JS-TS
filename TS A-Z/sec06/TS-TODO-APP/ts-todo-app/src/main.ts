import List from "./models/List.ts";
import ListTemplate from "./templates/ListTemplate.ts";
import ListItem from "./models/ListItem.ts";

const initApp = (): void => {
    console.log('init');

    const listInstance = List.instance;
    const listTemplateInstance = ListTemplate.instance;


    const itemForm = document.getElementById("form") as HTMLFormElement;

    itemForm.addEventListener('submit', (event: SubmitEvent): void => {
        event.preventDefault();

        // 새 item Text
        const inputEl = document.getElementById('item-input') as HTMLInputElement;
        const newText = inputEl.value.trim();
        if(!newText.length) return;
        inputEl.value = '';

        // 새로운 item ID
        const itemId: number =
            listInstance.list.length
                ? parseInt(listInstance.list[listInstance.list.length - 1].id) + 1
                : 1

        // new Item 생성하기
        const newItem = new ListItem(itemId.toString(), newText);

        // list에 new item 넣기
        listInstance.addItem(newItem);

        listTemplateInstance.render(listInstance);
    })

    const clearItemEL = document.getElementById('clear-items-btn') as HTMLButtonElement;

    clearItemEL.addEventListener('click', () => {
        listInstance.clearList();
        listTemplateInstance.clear();
    })

    // 초기 데이터를 load 하기
    listInstance.load();

    // 생성된 데이터를 이용해서 화면에 보여주기
    listTemplateInstance.render(listInstance);
}

initApp();