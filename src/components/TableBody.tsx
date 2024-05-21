import { currentData } from "../store/stockStore"
import { AccesoryRow } from "./AccesoryRow"

interface Props {
  classNameTB?: string
}

const accesories = currentData.get()

export const TableBody = ({ classNameTB }:Props) => {

  return (
    <tbody className={classNameTB} >
      {
        accesories.map((e, i) => (
        <AccesoryRow key={e.id} accesory={e} index={i} />
      ))
      }
    </tbody>
  )
}
