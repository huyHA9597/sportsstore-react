import { DataTypes } from "./Types"

const protocol = "http"
const hostname = "localhost"
const port = 3000

export const RestUrls = {
	[DataTypes.PRODUCTS]: `${protocol}:://${hostname}:${port}/api/products`,
	[DataTypes.CATEGORIES]: `${protocol}:://${hostname}:${port}/api/categories`,
}
