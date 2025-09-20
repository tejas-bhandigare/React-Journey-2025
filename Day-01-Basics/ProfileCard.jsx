export default function ProfileCard({ name, title, avatar }) {
  return (
    <div className="card">
      <img className="avatar" src={avatar} alt={`${name} avatar`} />
      <h2>{name}</h2>
      <p>{title}</p>
      <button onClick={() => alert(`Hello ${name}! 👋`)}>Say hi</button>
    </div>
  )
}
