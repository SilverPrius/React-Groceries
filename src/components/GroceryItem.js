const GroceryItem = ({ ele }) => {
  return (
    <div className='each'>
      <br />
      <h3>Item: {ele.item}</h3>
      <h4>Brand: {ele.brand}</h4>
      <h4>Units: {ele.units}</h4>
      <h4>Quantity: {ele.quantity}</h4>
      <h4>Purchased?:</h4>
      {ele.isPurchased === true ?
        (<input type="checkbox" checked></input>) : (<input type="checkbox"></input>)}
    </div>
  )
}

export default GroceryItem