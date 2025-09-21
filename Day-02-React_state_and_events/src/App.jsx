
import './App.css'
import Counter from './components/Counter'
import SimpleForm from './components/SimpleForm'
export default function App() {

  return (
    <div classname="App">
      <h2> Day - 02 React State & Events</h2>

      <div className="project1">
        <h3> Projoect 1- Counter app 🧮</h3>
        <Counter />
      </div>


      <div className="project2">
        <h3> Projoect 2- Simple form app 📝</h3>
        <SimpleForm/>
      </div>

    </div>

  )
}
