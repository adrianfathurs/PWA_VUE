import {api} from "../plugins/axios"

export const getApp = async () => {
  try {
    var response=await api.get("/products")
    return response;
  } catch (error) {
    return error;
  }
}