import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Hero from './components/Hero'

const App = () => {

  const itemObj = {
    name: "Laptop",
    price: 10200,
    quantity: 12
  }

  const btnClick = () => { 
    alert("Successfully Added to Cart")
  }

  const formSubmit = (e) => { 
    e.preventDefault()
    alert("Form Submitted") 
  }

  return (
    <div>

      <Header />
      <ContactForm />
      <Footer />
      <Hero item={itemObj} btn={btnClick} />
      
      <form onSubmit={formSubmit}> 
        <input type="text" placeholder='username' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
