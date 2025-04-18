import SearchBar from "../../ui/SearchBar";

type HeaderProps = {
  onSearch: (value: string) => void;
}

export default function index( { onSearch }: HeaderProps ) {
  return (
    <div className="flex-col bg-stone-900 py-12">
        <div className="flex justify-center text-3xl">
          <h1 className="text-red-400">Code</h1>
          <h1 className="text-neutral-200">Lab</h1>
        </div>
        <div className="mx-14 mt-12">
          <SearchBar
            onChange={onSearch}
          />
        </div>
    </div>
  )
}
