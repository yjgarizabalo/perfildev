'use strict';

class Search {

    constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.list = obj.list;
        this.init();
    }

    init() {
        let input, listContainer;
        this.el.innerHTML = `
			<input placeholder="¿Que profesión eres?" type="text" class="form-control mr-sm-2 w-100 small  input"/>
			<list-group class=" is-visible" id="searchList"></list-group>
		`;
        input = document.querySelector('.input');
        listContainer = document.querySelector('#searchList');
        this.watch(input, this.list, listContainer);
    }

    watch(input, list, search) {
        input.addEventListener('keyup', () => {
            search.innerHTML = '';
            let value = input.value.toLowerCase(),
                listT = list.length,
                existe = 0;

            for (let i = 0; i < listT; i++) {
                let text = list[i].toLowerCase();
                if (value != '') {
                    existe = ~text.indexOf(value);
                    if (existe != 0) {
                        this.updateList(search, list[i]);
                    }
                }
            }
        }, false);
    }

    updateList(el, text) {
        el.innerHTML += `<div class="list-group-item list-group-item-action">${text}</div>`;
    }

    add(item) {
        this.list.push(item);
    }

    remove(item) {
        let position = this.list.indexOf(item);
        this.list.splice(position, 1);
    }

}