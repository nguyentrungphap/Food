import instance from ".."

export const getProductsAPI = () => {
  return instance.get("/products")
}