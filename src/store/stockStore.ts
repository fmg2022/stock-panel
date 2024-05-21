import { atom } from "nanostores";
import { accesories, type Accesories, type Accesory } from "../lib/data";

/* tiene como valor por defecto una lista de accesorios (todos en este caso): 
    => obtener los "50" primeros accesorios desde la BD. */
export const currentData = atom<Accesories>(accesories)
