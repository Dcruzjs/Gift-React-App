import React, { useState, Component } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const handleAdd = () =>{
      // setCategories([...categories].concat(categories[categories.length-1] + 1))
      // setCategories(cats => [...cats].concat(categories[categories.length-1] + 1))
    }
  return (
  <>
    <h2>GiftExpertApp</h2>
    <AddCategory setCategories={ setCategories } />
    <hr/>
    
    <button onClick={ handleAdd }>agregar</button>
    <ol>
      {categories.map( c => (
        <GifGrid key={c} category={c} />
      ))}
    </ol>
  </>)
}

export default GiftExpertApp;