export const removeProductById = (products, productId) => {
  return products.filter((item) => item.productId !== productId);
}