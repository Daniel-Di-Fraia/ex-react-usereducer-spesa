import { useState } from "react";

function ProductList() {
  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (prod) => {
    setAddedProducts(prev => {
      const exists = prev.some(item => item.name === prod.name);
      if (exists) {
        return prev.map(item =>
          item.name === prod.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...prod, quantity: 1 }];
    });
  };

  const removeItem = (nome) => {
    setAddedProducts(prev => prev.filter(item => item.name !== nome));
  };

  const totalPrice = addedProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <h1>Lista Prodotti</h1>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            <strong>{prod.name}</strong> Prezzo: {prod.price}€
            <button id='bottone' onClick={() => addToCart(prod)}>Aggiungi al Carrello</button>
          </li>
        ))}
      </ul>
      
      <h2>Carrello ({addedProducts.length})</h2>
      <ul>
        {addedProducts.map((prod, index) => (
          <li key={index}>
            <strong>{prod.name}</strong> Prezzo: {prod.price}€ 
            Quantità: {prod.quantity}
            <button id='bottone' onClick={() => removeItem(prod.name)}>X</button>
          </li>
        ))}
      </ul>
      <div>
        TOTALE: {totalPrice.toFixed(2)}€
      </div>
    </>
  );
}

export default ProductList;
