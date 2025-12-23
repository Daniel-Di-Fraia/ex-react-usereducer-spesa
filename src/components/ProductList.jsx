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
        const exists = addedProducts.some(item => item.name === prod.name);

        if (exists) {
            updateProductQuantity(prod);
        } else{
        setAddedProducts(prev => [...prev, { ...prod, quantity: 1 }]);
        }
    };

    const updateProductQuantity = (prod) => {
    setAddedProducts(prev =>
      prev.map(item =>
        item.name === prod.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const removeItem = (nome) => {
    const removed = addedProducts.filter(item => item.name !== nome);
    setAddedProducts(removed);
  }

    return (
        <>
            <h1>Lista Prodotti</h1>
            <ul>
                {products.map((prod, index) => (
                    <li key={index}>
                        <strong>{prod.name}</strong>
                        Prezzo: {prod.price}€
                        <button id="bottone" onClick={() => addToCart(prod)}>Aggiungi al Carrello</button>
                    </li>
                )
                )}
            </ul>
            <h2>Carrello</h2>
            <ul>
                {addedProducts.map((prod, index) => (
                    <li key={index}>
                        <strong>{prod.name} </strong>
                        Prezzo: {prod.price}€
                        Quantità: {prod.quantity}
                        <button id="bottone" onClick={() => removeItem(prod.name)}> X </button>
                    </li>
                )
                )}
            </ul>

        </>
    )
}

export default ProductList