import { useEffect, useState } from "react"
import { typesAccesory, accesories, type Accesory } from "../lib/data";
import { useDebounce } from "@uidotdev/usehooks";
import { currentData } from "../store/stockStore";

const typesList = Object.values(typesAccesory);
const DEBOUNCE_TIME = 300

export const FormSearch = () => {
  const [search, setSearch] = useState<string>(() => {
    const searchParams = new URLSearchParams(window.location.search)
    return searchParams.get('q') ?? ''
  })
  const [filterParam, setFilterParam] = useState("all")

  const debounceSeach = useDebounce(search, DEBOUNCE_TIME)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterParam(event.target.value)
  }

  // actualizar el link del navegador
  useEffect(() => {
    // Mejorable
    const newPathName = debounceSeach !== '' ? `?q=${debounceSeach}` : window.location.pathname

    window.history.replaceState({}, '', newPathName)

    // LLamar a la api para filtrar los resultados
    if (!debounceSeach){
      currentData.set(accesories)
      return
    }

    fetch(`/api/get-info-accesory.json?q=${debounceSeach}&f=${filterParam}`)
      .then(res => res.json())
      .then(data => {
        const { accesoriesFilter } = data
        currentData.set(accesoriesFilter)
      })
  }, [debounceSeach, filterParam])

  const classSelect = "bg-slate-300/20 text-zinc-800 checked:text-gray-800 checked:bg-slate-300/60"

  return (
    <form className="flex p-3 justify-center gap-2">
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Buscar..."
        name="query"
        id="search"
        className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      <label htmlFor="select"></label>
      <select
        id="select"
        className="bg-zinc-50 border border-slate-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-opacity-40 focus:ring-blue-300 focus:border-blue-400 focus:outline-none block w-full p-2.5"
        onChange={handleSelect}
        value={filterParam}
      >
        <option value='all' className={classSelect}>Todos</option>
        {
          typesList.map((tipo, index) => (
            <option value={tipo} className={classSelect} key={index}>
              {tipo.replace(/^./, (char) => char.toUpperCase())}
            </option>
          ))
        }
      </select>
    </form>
  )
}
