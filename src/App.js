import './App.css';
import { useState } from 'react';
import GroceryItem from './components/GroceryItem';
import groceries from './groceries'

function App() {

  // setting up and using state, state's initial value is the array of groceries
  const [grList, setGrList] = useState(groceries)

  const addItem = e => {
    e.preventDefault()
    setGrList(grList.concat([
      {
        item: document.querySelector('input[name="item"]').value,
        brand: document.querySelector('input[name="brand"]').value,
        units: document.querySelector('input[name="units"]').value,
        quantity: document.querySelector('input[name="quantity"]').value,
        isPurchased: false

      }
    ])
    )
    console.log(grList)
  }

  return (

    <div className="App">
      <h1 className='header'> Farmer Tan's Market</h1>
      <div className='main'>
        <div className='products-container'>
          <h1 className=''>Products</h1>
          <div className='items'>
          {grList.map((ele, idx) => {
            return (!ele.isPurchased && <GroceryItem ele={ele} key={idx} />)
          })}
          </div>
        </div>

        <form onSubmit={addItem}>
          <h1>Create</h1>
          <h3>Add a new item to the Products list</h3>
          <h4>Item:</h4> <input type='text' name="item"></input> <br />
          <h4>Brand:</h4> <input type='text' name="brand"></input><br />
          <h4>Units:</h4> <input type='text' name="units"></input><br />
          <h4>Quantity:</h4> <input type='number' name="quantity"></input><br />
          <input type='submit' value='submit'></input>
        </form>
      </div>
    </div>
  );
}

export default App
