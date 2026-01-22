import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import MazeCard from '../components/MazeCard'
import Mazes from '../lib/demo/mazes.json'

const mockMazes = Mazes.decks

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-foreground mb-6">Dashboard</h1>

        {/* Inventario Card */}
        <div className="mb-8">
          <Card
            title="Inventario"
            description="Revisa tus cartas y colecciones"
            onClick={() => navigate('/Inventory')}
          />
        </div>

        {/* Mazes */}
        <h2 className="text-2xl font-semibold text-foreground mb-4">Mazes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMazes.map(maze => (
            <MazeCard key={maze.id} id={maze.id} title={maze.name} />
          ))}
        </div>

        {/* Floating Button */}
        <button
          className="fixed bottom-8 right-8 bg-primary hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg"
          onClick={() => alert('Añadir nuevo')}
        >
          +
        </button>
      </div>
    </div>
  )
}
