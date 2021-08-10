import React from 'react'
import "./index.css"  //we need to import index.css with this syntax to use it here in this component to style it

const FirstBook={
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    img: "https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg"
}
const SecondBook={
    title: "Ikigai",
    author: "Héctor García",
    img:"https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"
} //creating objects with different values but same variables title, author and img

const ThirdBook={
    title: "Atomic Habits",
    author: "James Clear ",
    img:"https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg"
}
function Bookstore() {
    return (
        <section className="booklist"> 
           <Book img={FirstBook.img} title={FirstBook.title} author={FirstBook.author} />
           <Book img={SecondBook.img} title={SecondBook.title} author={SecondBook.author} />
           <Book img={ThirdBook.img} title={ThirdBook.title} author={ThirdBook.author} />
        </section>
    )
}

// use any of the below methods as per your convinience
/* const Book= ({img, title, author}) => { 
        return <article className='Book'>
         <img src={img}></img>
         <h1>{title}</h1>
         <h3>{author}</h3>  
        } //this can also be used apart from used method */

 /* const Book= (props) => {
    const {img, title, author}= props; 
     return <article className='Book'>
         <img src={img}></img>
         <h1>{title}</h1>
         <h3>{author}</h3>  
        }

    */

const Book= (props) => {
    return <article className='Book'>
         
         <img src={props.img}></img>
         <h1>{props.title}</h1>
         <h3>{props.author}</h3>
    </article>

} /* this is how we use "props" to reuse the component that we made earlier 
   and now we are just changing title and author pass props in parameter list*/

export default Bookstore //write this line so that other files can import this part of code i.e Bookstore
