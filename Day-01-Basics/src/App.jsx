import './App.css'

import ProfileCard from './components/ProfileCard'

export default function App(){
  return(
    <div className="App">
      <h1>Day 1 - Learn React </h1>
      <ProfileCard
        name="Tejas Bhandigare"
        title="Software Engineer"
        avtar="https://wallpapercave.com/w/wp7479006"
/>

    <ProfileCard
        name="Aarav Sharma"
        title="UI/UX Designer"
        avatar="https://wallpapercave.com/w/wp7479006"
      />

    </div>
  )
}
