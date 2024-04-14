import http from "@/http-common";

class UploadFilesService {
  upload(file, tipo, tkn, onUploadProgress) {
    let formData = new FormData();

    console.log('typeof');
    console.log(typeof file);
    console.log('tipo ' + tipo);
    console.log('tkn ' + tkn);

    formData.append("arquivo", file);
    formData.append("tipo", tipo);
    formData.append("ref", tkn);

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