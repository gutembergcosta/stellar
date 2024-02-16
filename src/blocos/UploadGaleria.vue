<template>
	<div class="card mt-3">
		<div class="card-body">
			<h4 class="card-title">Upload Galeria</h4>
			<p class="card-description">Instrução adicional </p>

			<div>
				<div class="mb-3">
					<label class="btn-upload">
						<input type="file" multiple ref="fileInput" @change="selectFile" accept=".jpg, .png"
							:disabled="selectedFiles" hidden />
						<div class="btn-up">Upload</div>
					</label>
				</div>

				<div v-if="errorMessages">
					<div v-for="(item, i) in errorMessages" :key="i" ref="message" class="alert alert-danger fade show"
						role="alert">
						{{ item.texto }}
						<button type="button" class="close" data-dismiss="alert" aria-label="Close" @click=remove(item)>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</div>

				<div class="mb-3" v-if="progressInfos">
					<div class="mb-2" v-for="(progressInfo, index) in progressInfos" :key="index">
						<span>{{ progressInfo.fileName }}</span>
						<div class="progress">
							<div class="progress-bar progress-bar-info" role="progressbar"
								:aria-valuenow="progressInfo.percentage" aria-valuemin="0" aria-valuemax="100"
								:style="{ width: progressInfo.percentage + '%' }">
								{{ progressInfo.percentage }}%
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-header">List of Files</div>
					<div class="row " :options="optionsFancyBox">
						<div class="col-md-3 card-img mb-3" v-for="(item, index) in fileInfos" :key="index">
							<div>
								<a :href="item.url_max" data-fancybox="gallery">
									<img :src="item.url_square" alt="" class="w-100">
								</a>
							</div>
							<div class="d-flex justify-content-center">
								<button class="btn text-danger" @click.prevent=deletarImg(item)>
									<i class="fa-solid fa-circle-xmark"></i>
								</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
  
<script>

import { uniqid } from '@/helpers/uniqid.js';

import UploadService from "@/services/UploadFilesService";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";




export default {
	name: "upload-files",
	data() {
		return {
			selectedFiles: undefined,
			progressInfos: [],
			message: "",
			errorMessages: [],
			arquivoNome: "",
			qteImages: 0,
			uploaded: 0,
			fileInfos: [],
			uploadFolder: process.env.VUE_APP_UPLOADS,
			optionsFancyBox: {
				Carousel: {
					infinite: true,
				},
				Thumbs: {
					type: "classic",
				},
			},
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
			this.qteImages = this.selectedFiles.length;

			for (let i = 0; i < this.qteImages; i++) {
				this.upload(i, this.selectedFiles[i]);
			}
		},
		upload(idx, file) {
			this.arquivoNome = "";
			this.progressInfos[idx] = { percentage: 0, fileName: file.name };
			this.arquivoNome = file.name;

			UploadService.upload(file, (event) => {
				this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
			})
				.then(() => {
					let uploaded = ++this.uploaded
					if (uploaded == this.qteImages) {
						this.listArquivos();
						this.clearFile();
					}
				})
				.catch((error) => {

					//let prevMessage = this.message ? this.message + "\n" : "";
					let errorMsg = error.response.data.fileName + ' - ' + error.response.data.errors.arquivo;

					let id = uniqid()
					let erro = {
						id: id,
						texto: errorMsg
					};

					this.errorMessages.push(erro);

				})
				.finally(() => {
					this.listArquivos();
					this.clearFile();
				})
		},
		listArquivos() {
			UploadService.list('exemplo', 'exemplo').then((response) => {
				this.fileInfos = response.data.data;
			});
		},
		clearFile() {
			this.$refs.fileInput.value = null;
			this.progressInfos = [];
			this.selectedFiles = undefined;
			this.uploaded = 0;
		},
		remove(erro) {
			let index = this.getIndex(erro);
			this.errorMessages.splice(index, 1);
		},
		deletarImg(item) {
			let id = item.id;
			alert(id);
		},
		getIndex(erro) {
			//..recebe o todo como parâmetro, procura ele e retorna o seu index
			let index = this.errorMessages.findIndex(item => item.id === erro.id);
			console.log(index);
			return index;
		},
		initFancybox() {
			Fancybox.bind('[data-fancybox]', this.optionsFancyBox);
		},

	},
	mounted() {
		UploadService.list('exemplo', 'exemplo').then((response) => {
			this.fileInfos = response.data.data;
		});
		this.initFancybox();

	},



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
	background-color: rgb(51, 122, 183);
	color: white;
}

.fade-out {
	opacity: 0;
	transition: opacity 1s ease-out;
	/* Adjust duration and timing function as needed */
}
</style>
  

  