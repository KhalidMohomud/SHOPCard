import React from 'react'
import Product from './Product'

const  Data  =  [
	{
		id: 1,
		name: 'COCONUT',
		price: 7.11,
		image:
			'https://media.istockphoto.com/id/2160610403/photo/fresh-green-coconuts-stacked-in-rows-at-market-stall-ready-for-drinking-selling-coconat-water.webp?a=1&b=1&s=612x612&w=0&k=20&c=sHUwZKgLwomAm1H3oCCPug2fsef9XAc3B5HmJR-Uwf8='
	},
	{
		id: 2,
		name: 'GOUND',
		price: 14.29,
		image:
			'https://plus.unsplash.com/premium_photo-1669905375098-e4fbab627b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29jb25hdHxlbnwwfHwwfHx8MA%3D%3D'
	},
	{
		id: 3,
		name: 'Tomato',
		price: 10.98,
		image:
			'https://images.unsplash.com/photo-1502236876560-243e78f715f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
    {
		id: 4,
		name: 'Orange',
		price: 1.98,
		image:
			'https://media.istockphoto.com/id/172665473/photo/oranges-wallpaper.jpg?s=1024x1024&w=is&k=20&c=jkHJDRYhCmUFgeLu095R1O1lx60epRLllq9Y9Ei4Eag='
	},
    {
		id: 5,
		name: 'Peppar',
		price: 10.98,
		image:
			'https://images.unsplash.com/photo-1632446087139-e93c41c11f56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D'
	},
    {
		id: 6,
		name: 'Tomato',
		price: 10.98,
		image:
			'https://images.unsplash.com/photo-1502236876560-243e78f715f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
]




const Products = () => {
  return (
    <div className="grids">
     { Data.map((product)=>(

       
           <Product  product =  { product}/>
  

      ))}
      </div>
   
  )
}

export default Products