import http from "@/http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("arquivo", file);
    formData.append("tipo", 'exemplo');
    formData.append("ref", 'exemplo');

    return http.post("/arquivo", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  list(tipo,tkn) {
    return http.get(`/arquivos/${tipo}/${tkn}`);
  }
}

export default new UploadFilesService();