interface SearchBarProps {
  onChange: (value: string) => void;
}

export default function index({ onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      className="w-full color-slate-300 bg-stone-800 rounded-md text-white h-12 px-4 border-1 border-stone-700 focus:border-stone-400 placeholder:text-gray-300 placeholder:italic outline-0" placeholder="Pesquisar no blog"
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
