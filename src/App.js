import Auth from './components/auth'
import Header from './components/header'
import Teacher from './forms/teacher'
import './App.css'

function App() {
  return (
    <div className="App">
      <Auth />
      <Header />
      <Teacher />
    </div>
  );
}

export default App;
