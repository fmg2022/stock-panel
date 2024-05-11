export const typesAccesory = {
  AGUA: 'agua',
  GAS: 'gas',
  DESAGUE: 'desague',
  HERRAMIENTA: 'herramienta'
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

export const accesories: Accesory[] = [
  {
    id: '1',
    nombre: 'codo',
    tipo: typesAccesory.AGUA,
    categoria: ['rojo', 'rosca', '45°', 'h-h'],
    tamanio: '1/2',
    cantidad: 7,
    estado: 'ok',
    imagen: '',
    isDeleted: false
  },
  {
    id: '2',
    nombre: 'cupla',
    tipo: typesAccesory.AGUA,
    categoria: ['rojo', 'fusion', 'h-h'],
    tamanio: '3/4',
    cantidad: 3,
    estado: 'ok',
    imagen: '',
    isDeleted: false
  },
  {
    id: '3',
    nombre: 'cupla',
    tipo: typesAccesory.GAS,
    categoria: ['fusion', 'injerto metalico', 'h-m'],
    tamanio: '25 x 1/2',
    cantidad: 1,
    estado: 'acondicionar',
    imagen: '',
    isDeleted: false
  },
  {
    id: '4',
    nombre: 'curva',
    tipo: typesAccesory.AGUA,
    categoria: ['verde', 'fusion', 'h-h'],
    tamanio: '20',
    cantidad: 7,
    estado: 'ok',
    imagen: '',
    isDeleted: false
  },
  {
    id: '5',
    nombre: 'sobrepaso',
    tipo: typesAccesory.AGUA,
    categoria: ['verde', 'fusion', 'h-h'],
    tamanio: '1°',
    cantidad: 3,
    estado: 'ok',
    imagen: '',
    isDeleted: false
  },
  {
    id: '6',
    nombre: 'sobrepaso',
    tipo: typesAccesory.AGUA,
    categoria: ['rojo', 'fusion', 'h-h'],
    tamanio: '1°',
    cantidad: 3,
    estado: 'ok',
    imagen: '',
    isDeleted: false
  },
  {
    id: '7',
    nombre: 'llave de paso',
    tipo: typesAccesory.AGUA,
    categoria: ['rojo', 'esferica', 'fusion', 'h-h'],
    tamanio: '1/2',
    cantidad: 3,
    estado: 'ok',
    imagen: '',
    isDeleted: false
  },
  {
    id: '8',
    nombre: 'codo',
    tipo: typesAccesory.AGUA,
    categoria: ['rojo', 'rosca', 'h-h'],
    tamanio: '1/2',
    cantidad: 0,
    estado: 'acondicionar',
    imagen: '',
    isDeleted: true
  },
  {
    id: '9',
    nombre: 'curva',
    tipo: typesAccesory.DESAGUE,
    categoria: ['h-h'],
    tamanio: '110',
    cantidad: 6,
    estado: 'ok',
    imagen: '',
    isDeleted: false
  },
]
