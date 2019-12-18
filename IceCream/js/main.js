
const base = {
    сhocolate: [
        {
            name: 'Магнат Шоколад 130гр',
            img: 'file:///C:/Users/Matvienko/Desktop/IceCream/assets/img/tovar/chokolat%20magnat.png'
        }
    ],
    plombir: [
        {
            name: 'Пломбир эскимо в глазуре 80гр',
            img: 'file:///C:/Users/Matvienko/Desktop/IceCream/assets/img/tovar/plombir-palka.jpg'
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('сhocolate-button')
    const list = document.getElementById('catalog-list')

    function listField(baseName) {
        for (const item of base[baseName]) {
            const block = document.createElement("div")
            block.className = 'square сhocolate'
            block.innerHTML = `<div class="square-info">
               <div class="square-img">
                  <img src="${item.img}" alt="">
               </div>
               <div class="square-text">
                   <h3>${item.name}</h3>
               </div>
               <div class="buy">Купить</div>
             </div>`
    
            list.appendChild(block)
        }
    }

    listField('сhocolate')
    button.addEventListener("click", listField('сhocolate'))
})
