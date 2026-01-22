import { useNavigate } from 'react-router-dom'
import Card from './Card'

interface MazeCardProps {
  id: string
  title: string
}

export default function MazeCard({ id, title }: MazeCardProps) {
  const navigate = useNavigate()

  function goToMaze() {
    navigate(`/Maze?id=${id}`)
  }

  return <Card title={title} onClick={goToMaze} />
}
