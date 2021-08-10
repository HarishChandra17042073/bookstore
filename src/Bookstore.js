import React from 'react'
import "./index.css"

function Bookstore() {
    return (
        <section className="booklist">
           <Book />
           <Book />
           <Book />
        </section>
    )
}
const Book= () => {
    return <article>
         <Title />
           <Img />
           <Author/>
    </article>

}
const Img=() => <img src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" alt="" ></img>
const Title=() => <h1 style={{color:'#67d98', fontSize:'0.75rem', marginTop:"0.25rem", letterSpacing: '3px'}}>Ikigai: The Japanese secret to a long and happy life</h1>
const Author=() => <h3 style={{color:'#67d98', fontSize:'0.75rem', marginTop:"0.25rem", letterSpacing: '5px'}}>Héctor García</h3>

export default Bookstore
