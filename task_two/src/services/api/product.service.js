import { baseUrl, getProduct, postProduct } from "../core/service.config";
import HTTP from "../core/http.sservice";

export class ProductService {
  static async getAllProduct({ limit, skip }) {
    try {
      const result = await HTTP.get(
        `${baseUrl}${getProduct}?limit=${limit}&skip=${skip}`
      );
      if (result.status === 200) {
        return result.data;
      }
      return undefined;
    } catch (error) {
      return error;
    }
  }

  static async postProduct(newPost) {
    try {
      const result = await HTTP.post(`${baseUrl}${postProduct}`, {
        ...newPost,
      });
      if (result.status === 200) {
        return result.data;
      }
      return undefined;
    } catch (error) {
      return error;
    }
  }
}
