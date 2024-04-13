let productData = [
  {
    id: 1,
    name: 'Name1',
    description: 'Lorem ipsum text',
    price: 8000,
    img: 'https://fs0.secunda.com.ua/photo/goods/card/1/202630/202630_20230626_656_912_GA_110_1BER.jpg',
    curency: '€',
  },
  {
    id: 2,
    name: 'Name2',
    description: 'Lorem ipsum text',
    price: 14000,
    img: 'https://fs0.secunda.com.ua/photo/goods/card/1/202630/202630_20230626_656_912_GA_110_1BER.jpg',
    curency: '€',
  },
  {
    id: 3,
    name: 'Name3',
    description: 'Lorem ipsum text',
    price: 3000,
    img: 'https://fs0.secunda.com.ua/photo/goods/card/1/202630/202630_20230626_656_912_GA_110_1BER.jpg',
    curency: '$',
  },
  {
    id: 4,
    name: 'Name4',
    description: 'Lorem ipsum text',
    price: 98000,
    img: 'https://fs0.secunda.com.ua/photo/goods/card/1/202630/202630_20230626_656_912_GA_110_1BER.jpg',
    curency: '$',
  },
  {
    id: 5,
    name: 'Name5',
    description: 'Lorem ipsum text',
    price: 2000,
    img: 'https://fs0.secunda.com.ua/photo/goods/card/1/202630/202630_20230626_656_912_GA_110_1BER.jpg',
    curency: '$',
  },
];

const addProductItemFromList = () => {
  let list = document.querySelector('.catalog-list');
  for (let index = 0; index < productData.length; index++) {
    let card = `
    <li class="catalog-list-item">
        <div class="product-card product-id-${productData[index].id}">
            <h3 class="product-card-title">${productData[index].name}</h3>
            <p class="product-card-description">${productData[index].description}</p>
            <img class="product-card-img" src="${productData[index].img}" alt="${productData[index].name}">
            <p class="product-card-price">${productData[index].curency}${productData[index].price}</p>
            <p class="product-card-compare">Compare</p>
            <button class="product-card-btn" type="button">Order</button>
        </div>
    </li>
    `;
    list.insertAdjacentHTML('afterbegin', card);
  }
};
addProductItemFromList();
