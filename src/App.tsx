import './App.css'

function App() {

  return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
  )
}

function Header() {
  return (
    <header className="App-header">
        <p>Header</p>
    </header>
    )
}

function Main() {
  return (
    <main className="App-main">
        <p>Main</p>
    </main>
    )
}

function Footer() {
  return (
    <footer className="App-footer">
        <p>Footer</p>
    </footer>
    )
}

export default App
