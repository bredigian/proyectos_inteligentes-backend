export type TContact = {
  name: string
  email: string
  phone: string
  message: string
}

export type TQuote = {
  name: string
  email: string
  phone: string
  date: Date
  message: string
  services: string[]
}

export type TPerforation = {
  whickness: string
  size: string
}

export type TCustomQuote = {
  name: string
  email: string
  phone: string
  position: "vertical" | "horizontal" | "sin-especificar"
  location: string
  perforations: TPerforation[]
}
