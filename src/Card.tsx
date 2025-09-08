import './Card.css'

interface CardProps {
  arquivo: File | null
  name: string | null,
  occupation: string | null,
  setShowCard: Function
}

function Card({ arquivo, name, occupation, setShowCard }: CardProps) {
  if (!arquivo) return null;

  const imageUrl = URL.createObjectURL(arquivo)

  return (
    <div className="card">
      <img src={imageUrl} alt="Preview" className="card-image" />
      <h1>{name}</h1>
      <h2>{occupation}</h2>
      <button onClick={() => setShowCard(false)}>🗑️</button>
    </div>
  )
}

export default Card
