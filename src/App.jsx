import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {

  return (
    <>
    <div className="bg-zinc-900 h-screen flex flex-col justify-center items-center text-zinc-50">
      <Header />
      <Content />
      <Footer />
    </div>
    </>
  )
}

export default App
