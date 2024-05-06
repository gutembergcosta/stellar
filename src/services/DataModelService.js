import http from "@/http-common";


export class DataModelService {

  async get(url) {
    const response = await http.get(url);
    return response.data;
  }

  async post(url,data) {
    try {
      const response = await http.post(url, data);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  async put(url,data) {
    try {
      const response = await http.put(url, data);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  async delete(url) {
    try {
      const response = await http.delete(url);
      return response;
    } catch (error) {
      return error;
    }
  }

}