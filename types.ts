export type Car = {
  id: number,
  readonly title: string,
  readonly category: string,
  releaseYear: number,
  readonly brand: string,
  doors: number,
  price?: number,
  fuelType: string[],
  nationality: string,
  model: string,
  horsepower?: number,
  topSpeed?: number,
  trasmissione: "Automatico" | "Manuale"
  video?: string,
  logo?: string,
  description?: string,
  image?: string
}