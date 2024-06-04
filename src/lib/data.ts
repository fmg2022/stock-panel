export const typesAccesory = {
  AGUA: 'agua',
  GAS: 'gas',
  DESAGUE: 'desague',
  HERRAMIENTA: 'herramienta'
}

export const categoriesAccesory = {
  45: '45°',
  FUSION: 'fusion',
  HH: 'h-h',
  INJERTO: 'injerto metalico',
  MH: 'm-h',
  ROJO: 'rojo',
  ROSCA: 'rosca',
  VERDE: 'verde'
}

const stateAccesory = {
  OK: 'ok',
  REPARAR: 'reparar'
}

// type typeAccesory = keyof typeof typesAccesory

export interface Accesory {
  id: string,
  nombre: string,
  tipo: string,
  categoria: string[],
  tamanio: string,
  cantidad: number,
  estado: string,
  imagen: string,
  isDeleted: boolean
}

export type Accesories = Array<Accesory>

export const accesories: Accesories = [
  {
    id: '1',
    nombre: 'codo',
    tipo: typesAccesory.AGUA,
    categoria: [categoriesAccesory.ROJO, categoriesAccesory.ROSCA, categoriesAccesory[45], categoriesAccesory.HH],
    tamanio: '1/2',
    cantidad: 7,
    estado: stateAccesory.OK,
    imagen: '',
    isDeleted: false
  },
  {
    id: '2',
    nombre: 'cupla',
    tipo: typesAccesory.AGUA,
    categoria: [categoriesAccesory.ROJO, categoriesAccesory.FUSION, categoriesAccesory.HH],
    tamanio: '3/4',
    cantidad: 3,
    estado: stateAccesory.OK,
    imagen: '',
    isDeleted: false
  },
  {
    id: '3',
    nombre: 'cupla',
    tipo: typesAccesory.GAS,
    categoria: [categoriesAccesory.FUSION, categoriesAccesory.INJERTO, categoriesAccesory.MH],
    tamanio: '25 x 1/2',
    cantidad: 1,
    estado: stateAccesory.REPARAR,
    imagen: '',
    isDeleted: false
  },
  {
    id: '4',
    nombre: 'curva',
    tipo: typesAccesory.AGUA,
    categoria: [categoriesAccesory.VERDE, categoriesAccesory.FUSION, categoriesAccesory.HH],
    tamanio: '20',
    cantidad: 7,
    estado: stateAccesory.OK,
    imagen: '',
    isDeleted: false
  },
  {
    id: '5',
    nombre: 'llave de paso',
    tipo: typesAccesory.AGUA,
    categoria: [categoriesAccesory.VERDE, categoriesAccesory.FUSION, categoriesAccesory.HH],
    tamanio: '1°',
    cantidad: 3,
    estado: stateAccesory.OK,
    imagen: '',
    isDeleted: false
  },
  {
    id: '6',
    nombre: 'sobrepaso',
    tipo: typesAccesory.AGUA,
    categoria: [categoriesAccesory.ROJO, categoriesAccesory.FUSION, categoriesAccesory.HH],
    tamanio: '1°',
    cantidad: 3,
    estado: stateAccesory.OK,
    imagen: '',
    isDeleted: false
  },
  {
    id: '7',
    nombre: 'llave de paso',
    tipo: typesAccesory.AGUA,
    categoria: [categoriesAccesory.ROJO, categoriesAccesory.FUSION, categoriesAccesory.HH],
    tamanio: '1/2',
    cantidad: 3,
    estado: stateAccesory.OK,
    imagen: '',
    isDeleted: false
  },
  {
    id: '8',
    nombre: 'codo',
    tipo: typesAccesory.AGUA,
    categoria: [categoriesAccesory.VERDE, categoriesAccesory.FUSION, categoriesAccesory.HH],
    tamanio: '1/2',
    cantidad: 0,
    estado: stateAccesory.REPARAR,
    imagen: '',
    isDeleted: true
  },
  {
    id: '9',
    nombre: 'curva',
    tipo: typesAccesory.DESAGUE,
    categoria: [categoriesAccesory.HH],
    tamanio: '110',
    cantidad: 6,
    estado: stateAccesory.OK,
    imagen: '',
    isDeleted: false
  },
  {
    id: '10',
    nombre: 'sobrepaso',
    tipo: typesAccesory.GAS,
    categoria: [categoriesAccesory.HH],
    tamanio: '25',
    cantidad: 2,
    estado: stateAccesory.OK,
    imagen: '',
    isDeleted: false
  },
  {
    id: '11',
    nombre: 'briba',
    tipo: typesAccesory.DESAGUE,
    categoria: [categoriesAccesory.HH],
    tamanio: '90',
    cantidad: 2,
    estado: stateAccesory.OK,
    imagen: '',
    isDeleted: false
  },
  {
    id: '12',
    nombre: 'pico de loro',
    tipo: typesAccesory.HERRAMIENTA,
    categoria: [''],
    tamanio: '',
    cantidad: 1,
    estado: stateAccesory.REPARAR,
    imagen: '',
    isDeleted: false
  },
]
