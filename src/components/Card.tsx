interface CardProps {
  title: string
  description?: string
  image?: string
  onClick?: () => void
}

export default function Card({ title, description, image, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-card shadow-md dark:shadow-lg rounded-xl p-4 cursor-pointer hover:scale-105 transform transition-all duration-200 flex flex-col items-center"
    >
      {image && <img src={image} alt={title} className="h-32 w-auto object-contain mb-4" />}
      <h2 className="text-lg font-bold text-gray-900 dark:text-card-foreground">{title}</h2>
      {description && <p className="text-sm text-gray-500 dark:text-muted-foreground">{description}</p>}
    </div>
  )
}
