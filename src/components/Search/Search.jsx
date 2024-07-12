import { useEffect, useState } from 'react';
import fruits from '../fruits.json'
import "./Search.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
  const [text, setText] = useState('')
  const [data, setData] = useState(fruits)

  useEffect(() => {
    toast.info("Prices are not actual, So don't worry about it...")
  }, [])

  useEffect(() => {
    if (text.length > 1) {
      const filterData = data.filter((fruit) => fruit.name.toLowerCase().includes(text.toLowerCase()))
      setData(filterData)
    } else {
      setData(fruits)
    }
  }, [text])

  return (
    <div className="container">
      <ToastContainer
        style={{ width: "max-content", marginTop: "20px" }}
        position='top-center'
        theme="dark"
      />
      <div className='search-div'>
        <input value={text} type="search" placeholder='Search here' className='search-bar' onChange={(e) => setText(e.target.value)} autoFocus={true} />
      </div>
      <div className='items-box' id='item-box'>
        {
          data.map((fruit) => {
            return (
              <div key={fruit.id} className='image-div'>
                <img src={fruit.image} alt={fruit.name} className='image' />
                <div className='item-name'>
                  <h3>{fruit.name}</h3>
                  <h4>{fruit.price}</h4>
                </div>
                <div className='item-description'>{fruit.description}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Search