export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="mr-4 h-12 w-12 rounded-full" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
