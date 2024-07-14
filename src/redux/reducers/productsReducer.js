// src/redux/reducers/productsReducer.js
const initialState = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/tenis-dunk-low-retro-mhrtZC.png' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/calzado-dunk-high-retro-1PhQRw.png' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7b6fffc1-ab60-4e91-bff9-3281a3f30d72/tenis-air-max-ap-scCr93.png' }
  ];
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default productsReducer;
  