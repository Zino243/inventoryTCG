import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Finder from '../components/Finder'
import CardDisplay from '../components/CardDisplay'
import Card from '../components/Card'
// import MazeCard from '../components/MazeCard'
// import Mazes from '../lib/demo/mazes.json'
// import { loadInventoryFromStorage } from '../lib/inventoryManager'
import type { ScryfallCard } from '../types/ScryfallCard'
import { txtToCards } from '../lib/converter/clientTXTtoCards'
import type { ManaBoxExport } from '../lib/demo/types'
import getFind from '../lib/requests/finder'
import { urlScryfall } from '../lib/workCard'

// const mockMazes = Mazes.decks

export default function Dashboard() {
  const navigate = useNavigate()
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Cargar inventario desde localStorage al montar el componente
  useEffect(() => {
  }, [])

  const [manaCards, setManaCards] = useState<ManaBoxExport[]>([])
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const file = e.target.files?.[0];
    if (!file) return

    try {
      const cards = await txtToCards(file)
      setManaCards(cards)
    } catch (error) {
      console.error("Error leyendo txt, ", error)
    }
  }

  useEffect(() => {
  if (manaCards.length === 0) return
  if (manaCards.every(c => c.image_url)) return

  const loadImages = async () => {
    const updatedCards = await Promise.all(
      manaCards.map(async (card) => {
        if (card.image_url) return card
        const image_url = await getFind.getSpecific(card)
        return { ...card, image_url }
      })
    )

    setManaCards(updatedCards)
  }

  loadImages()
}, [manaCards])
  function cleanManaCards() {
    setManaCards([])
  }
  // Texto del buscador
  const [query, setQuery] = useState('')

  // Resultados de Scryfall
  const [cards, setCards] = useState<ScryfallCard[]>([])


  // funcion para ir a scryfall
  function getToScryfall(card: ManaBoxExport) {
    const url = urlScryfall(card)
    window.open(url, '_blank');
  }
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">

        {/* Finder */}
        <Finder
          value={query}
          onChange={setQuery}
          onResults={setCards}
          ref={searchInputRef}
        />

        <div className='flex flex-col w-30 '>
          <input className='bg-primary px-4 py-2 rounded-lg'
          type="file" name="fileInput" id="fileInput" accept='.txt' onChange={(e) => handleFileChange(e)}/>
          <button
          className='bg-destructive px-4 py-2 rounded-lg my-2'
          onClick={cleanManaCards}
          >
            vaciar
          </button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-foreground">
            Dashboard
          </h1>
          
        </div>

        {/* Botón volver SOLO si hay resultados */}
        {cards.length > 0 && (
          <button
            onClick={() => {
              setCards([])
              setQuery('')
            }}
            className="mb-6 px-4 py-2 rounded bg-secondary text-foreground"
          >
            Volver
          </button>
        )}

        {/* Vista normal */}
        {cards.length === 0 && (
          <>
            <div className="mb-8">
              <Card
                title="Inventario"
                description="Revisa tus cartas y colecciones"
                onClick={() => navigate('/Inventory')}
              />
            </div>

          {
            manaCards.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6">
                {manaCards.map((card, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={card.image_url}
                      className="w-full"
                    />

                    <button className="
                    text-center
                      absolute inset-0
                      bg-black/70
                      flex items-center justify-center
                      text-white text-lg font-semibold
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                    "
                    onClick={() => getToScryfall(card)}>
                      {card.name}
                      
                    </button>
                  </div>
                ))}
              </div>
            )
          }
          {/* lista de mazos */}
            {/* <h2 className="text-2xl font-semibold text-foreground mb-4">
              Mazes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockMazes.map(maze => (
                <MazeCard
                  key={maze.id}
                  id={maze.id}
                  title={maze.name}
                />
              ))}
            </div> */}
          </>
        )}

        {/* Resultados de búsqueda */}
        {cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map(card => (
              <CardDisplay key={card.id} card={card} />
            ))}
          </div>
        )}

        {/* Floating Button */}
        <button
          className="fixed bottom-8 right-8 bg-primary hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg"
          onClick={() => searchInputRef.current?.focus()}
        >
          +
        </button>

      </div>
    </div>
  )
}
