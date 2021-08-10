import React from 'react'
import "./index.css"  //we need to import index.css with this syntax to use it here in this component to style it

function Bookstore() {
    return (
        <section className="booklist"> 
           <Book />
           <Book />
           <Book />
        </section>
    )
} //type "rfce" in this file when it was blank initialy for function component
 // className="booklist" imports booklist class from index.css to style the page here
const Book= () => {
    return <article>
         <Title />
           <Img />
           <Author/>
    </article>

} //this is a book component comprising other 3 components defined below as Img, Title and author
const Img=() => <img src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" alt="" ></img>  //This is how we use CSS inside tags which overrides any property defined by external index.css file
const Title=() => <h1 style={{color:'#67d98', fontSize:'0.75rem', marginTop:"0.25rem", letterSpacing: '3px'}}>Ikigai: The Japanese secret to a long and happy life</h1> //same as above comment
const Author=() => <h3 style={{color:'#67d98', fontSize:'0.75rem', marginTop:"0.25rem", letterSpacing: '5px'}}>Héctor García</h3> // same as above comment


export default Bookstore //write this line so that other files can import this part of code i.e Bookstore
