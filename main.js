const keyboard = {
    topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    middleRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
    bottomRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
   
     createList: function(arr){
        const ul = document.createElement('ul');
        for(let i = 0; i < arr.length; i++){
            const li = document.createElement('li');
            li.innerHTML = arr[i];
            ul.appendChild(li);
        };
        return ul;
     },
    createLayout: function(parent){
        parent.appendChild(this.createList(this.topRow));
        parent.appendChild(this.createList(this.middleRow));
        parent.appendChild(this.createList(this.bottomRow));
     }
    }
    const doc = document.querySelector('#container');
    keyboard.createLayout(doc)