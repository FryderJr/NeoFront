import Auth from './components/auth'
import Header from './components/header'
import Teacher from './forms/teacher'
import Landing from './forms/landing'
import { useSelector } from 'react-redux'
import './App.css'

function App() {

  const token = useSelector(state => { console.log(state); return state.auth.token })

  return (
    <div className="App">
      <Auth />
      <Header />
      {
        token ? <Teacher /> : <Landing />
      }
    </div>
  );
}

export default App;
