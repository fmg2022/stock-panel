import AccesoryRow from "./AccesoryRow.astro";
import { accesories, type Accesory } from "../lib/data";
import { useStockStore } from "../store/stockStore";

const { currentAccesory } = useStockStore(state => state);

console.log(currentAccesory)
// const newAccesories: Accesory[] = currentAccesory ?? accesories;

export const AccesoryTable = () => {
  return (
    <div className="px-4 flex justify-center items-center">
  <table
    className="min-w-full bg-zinc-100 shadow-md rounded-md table-fixed divide-y-2"
  >
    <thead className="bg-slate-50">
      <tr className="text-gray-700">
        <th className="py-3 px-4 text-left">#</th>
        <th className="py-3 px-4 text-left">Nombre</th>
        <th className="py-3 px-4 text-left">Tipo</th>
        <th className="py-3 px-4 text-left">Categorías</th>
        <th className="py-3 px-4 text-left">Tamaño</th>
        <th className="py-3 px-4 text-left">Cantidad</th>
        <th className="py-3 px-4 text-center">Estado</th>
        <th className="py-3 px-4 text-center">Imagen</th>
        <th className="py-3 px-4 text-center">Acciones</th>
      </tr>
    </thead>
    <tbody className="text-slate-800 divide-y">
      {
        // newAccesories.map((accesoryItem, index) => (
        //   <AccesoryRow accesory={accesoryItem} index={index + 1} />
        // ))
        accesories.map((item) => <tr key={item.id}>{item.nombre}</tr>)
      }
      {/* {currentAccesory.map((item) => <tr>{item}</tr>)} */}
    </tbody>
  </table>
</div>

  )
}
