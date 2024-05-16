import { accesories } from "../../lib/data";

export async function GET({ params, request }) {
  // *** Aquí iria el llamado a la BD ***

  // Hecho por medio de un archivo interno
  const { url } = request
  const urlObject = new URL(url)
  const query = urlObject.searchParams.get('q')
  const filterParam = urlObject.searchParams.get('f')

  const accesoriesFilter = accesories.filter((accesory) => {
    if ((query && !accesory.nombre.includes(query))
      || (filterParam && accesory.tipo !== filterParam)
    ) return

    return accesory
  })
  // https://www.youtube.com/watch?v=wSxIwy6GvT4

  return new Response(JSON.stringify({accesoriesFilter}), {
    headers: { "content-type": "application/json" }
  })
}