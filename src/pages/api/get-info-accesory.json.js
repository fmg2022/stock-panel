import { accesories } from "../../lib/data";

export async function GET({ params, request }) {
  // *** Aquí iria el llamado a la BD ***

  // Hecho por medio de un archivo interno
  const { url } = request
  const urlObject = new URL(url)
  const query = urlObject.searchParams.get('q')

  const accesoriesFilter = accesories.filter((accesory) => accesory.nombre.includes(query))

  return new Response(JSON.stringify({accesoriesFilter}), {
    headers: { "content-type": "application/json" }
  })
}