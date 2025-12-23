function ProductList() {
    
    const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

  return (
    <>
    <h1>Lista Prodotti</h1>
    <ul>
      {products.map((prod, index) => (
        <li key={index}><strong>{prod.name}</strong> Prezzo: {prod.price}€</li>
      )
    )}
    </ul>
    </>
  )
}

export default ProductList