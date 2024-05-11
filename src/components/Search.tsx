import { useEffect, useState } from "react"
import { useStockStore } from "../store/stockStore"

export const Search = () => {
  const [search, setSearch] = useState<string>(() => {
    const searchParams = new URLSearchParams(window.location.search)
    return searchParams.get('q') ?? ''
  })
  const { setCurrentAccesory } = useStockStore(state => state)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  // actualizar el link del navegador
  useEffect(() => {
    const newPathName = search === ''
      ? window.location.pathname
      : `?q=${search}`

    window.history.replaceState({}, '', newPathName)

    // LLamar a la api para filtrar los resultados
    if (!search){
      setCurrentAccesory([])
      return
    }

    fetch(`/api/get-info-accesory.json?q=${search}`)
      .then(res => res.json())
      .then(data => {
        const { accesoriesFilter } = data
        setCurrentAccesory(accesoriesFilter)
      })
  }, [search])


  return (
    <div className="relative flex items-center">
      <span className="absolute left-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
      </span>
      <form className="flex p-3 justify-center gap-2">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Buscar..."
          name="query"
          id="search"
          className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </form>
    </div>
  )
}