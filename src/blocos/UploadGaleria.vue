<template>

	<div class="card mt-3">
		<div class="card-body">
			<h4 class="card-title">Upload Galeria</h4>
			<p class="card-description">Instrução adicional </p>
			
			<div>
				

				<div class="mb-3">
					<label class="btn-upload">
						<input 
							type="file" 
							multiple 
							ref="fileInput"
							@change="selectFile" 
							accept=".jpg, .png"
							:disabled="selectedFiles"
							hidden
						/>
						<div class="btn-up">Upload</div>
					</label>
				</div>

				<div v-if="message" class="alert alert-light" role="alert">
					<ul>
						<li v-for="(ms, i) in message.split('\n')" :key="i">
							{{ ms }}
						</li>
					</ul>
				</div>

				<div v-if="progressInfos">
					<div class="mb-2"
						v-for="(progressInfo, index) in progressInfos"
						:key="index"
					>
						<span>{{progressInfo.fileName}}</span>
						<div class="progress">
							<div class="progress-bar progress-bar-info"
								role="progressbar"
								:aria-valuenow="progressInfo.percentage"
								aria-valuemin="0"
								aria-valuemax="100"
								:style="{ width: progressInfo.percentage + '%' }"
							>
								{{progressInfo.percentage}}%
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-header">List of Files</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item"
							v-for="(file, index) in fileInfos"
							:key="index"
						>
							<a :href="file.url">{{ file.arquivo }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
										
</template>
  
<script>
import UploadService from "@/services/UploadFilesService";

export default {
  name: "upload-files",
  data() {
    return {
			selectedFiles: undefined,
      progressInfos: [],
      message: "",

      fileInfos: [],
    };
  },
  methods: {
		selectFile(event) {
      this.progressInfos = [];
      this.selectedFiles = event.target.files;
			this.uploadFiles();
    },
		uploadFiles() {
      this.message = "";

      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    },
		upload(idx, file) {
      this.progressInfos[idx] = { percentage: 0, fileName: file.name };

      UploadService.upload(file, (event) => {
        this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
      })
        .then((response) => {
          let prevMessage = this.message ? this.message + "\n" : "";
          this.message = prevMessage + response.data.message;

          this.listArquivos();
          this.clearFile();
					
        })
				/*
        .then((files) => {
          this.fileInfos = files.data;
        });
				
        .catch(() => {
          this.progressInfos[idx].percentage = 0;
          this.message = "Could not upload the file:" + file.name;
        });
				*/
    },
		listArquivos(){
			UploadService.list('exemplo','exemplo').then((response) => {
					this.fileInfos = response.data.data;
				});
		},
		clearFile() {
			this.$refs.fileInput.value = null;
			this.progressInfos = [];
		}

		
  },
	mounted() {
    UploadService.list('exemplo','exemplo').then((response) => {
      this.fileInfos = response.data.data;
    });
  }
};
</script>

<style scoped>

.btn-upload {
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color:rgb(51, 122, 183);
  color: white;
}

</style>
  

  