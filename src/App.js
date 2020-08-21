import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
// const nayoks = ['Razzak','Anwar', 'shuvo','Jafor', 'Alomgir', 'Salman']
// const products = [{product:'Photoshop', price:'$90.99'},
//                   {product:'illustrator', price:'$60.99'},
//                   {product:'pdf reader', price:'$6.99'},
//                   {product:'combo', price:'$100.99'}
// ]

// const nayokNames = nayoks.map(nayok => nayok)
// console.log(nayokNames)
// const productName = products.map(product => product.price);
// console.log(productName)
  return (
    <div className="App">
      <header className="App-header">
       <p>My first react app</p>
       <Counter></Counter>
       <Users></Users>
      
      {/* <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
         {
           products.map(product => <li>{product.product}</li>)
         }
         {
           products.map(pd => <Product product={pd}></Product>)
         }
       </ul> */

       /* <Product product={products[0]} price={products[0]}></Product>
       <Product product={products[1]} price={products[1]}></Product>
       <Product product={products[2]} price={products[2]}></Product>



       <Person name="Munna" job="footballer" fActor={nayoks[0]}></Person>
       <Person name="Masum" job="fan" fActor={nayoks[3]}></Person>
       <Person name="Munni" job="cook" fActor={nayoks[2]}></Person>  */}
       
      </header>
    </div>
  );
      }

// function Product(props){
//   const productStyle={
//     border:"1px solid salmon",
//     borderRadius: "5px",
//     backgroundColor:'#002366',
//     height:'300px',
//     width:'400px',
//     float:'left',
//     margin:'5px',
//     color : 'silver'
//   }
  // const {product, price}= props.product;
  // console.log(props);
  // console.log(props.product)
  // return (

  //   <div style={productStyle}>
  //     <h2>Name:{product}</h2>
  //     <h2>Price:{price}</h2>
  //     <button>Buy nows</button>
  //   </div>

  // )

  function Counter(){
    const [count, setCount] = useState(10);
    // const handleIncrease = () => setCount(count + 1);
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    )
  }

  function Users(){
    const [users, setUsers] = useState([0])
    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])
    return(
      <div>
        <h1>Dynamic users</h1>
        <h2>User : {users.length}</h2>
       <ul>{
         console.log(users)}
         {
           users.map( user => <li>{user.email}</li>)
         }
       </ul>
      </div>

    )
  }

  
  

// function Person(props){
//   return(
//   <div style={{border:'2px solid red', width:'400px'}}>
//     <h3>My Name: {props.name}</h3>
//     <h3>My Profession: {props.job}</h3>
//     <h3>My actor: {props.fActor}</h3>
//   </div>
//   )
// }



export default App;
