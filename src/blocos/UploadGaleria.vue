<template>
	<div class="card mt-3">
		<div class="card-body">
			<h4 class="card-title">Upload Galeria</h4>
			<p class="card-description">Instrução adicional </p>
			<p>Data from Child: {{ receivedData }}</p>
			<div>
				<div class="mb-3">
					<label class="btn-upload">
						<input type="file" multiple ref="fileInput" @change="selectFile" accept=".jpg, .png, .pdf"
							:disabled="selectedFiles" hidden />
						<div class="btn-up">Upload</div>
					</label>
				</div>

				<div v-if="errorMessages">
					<div v-for="(item, i) in errorMessages" :key="i" ref="message" class="alert alert-danger fade show"
						role="alert">
						{{ item.texto }}
						<button type="button" class="close" data-dismiss="alert" aria-label="Close" @click=removeErrorMsg(item)>
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
				

				<GaleriaUploads 
					@mensagem-para-pai="receberMensagemDoFilho"
					:messagez="parentMessage" 
					:fileInfos="fileInfos"
				/>
			</div>
		</div>
	</div>
</template>
  
<script>

import { uniqid } from '@/helpers/uniqid.js';

import UploadService from "@/services/UploadFilesService";
import GaleriaUploads from "@/blocos/GaleriaUploads.vue";

import "@fancyapps/ui/dist/fancybox/fancybox.css";




export default {
	name: "upload-files",
	components: {
		GaleriaUploads 
	},
	data() {
		return {
			selectedFiles: undefined,
			progressInfos: [],
			parentMessage: 'Hello from parent!',
			message: "",
			mensagemRecebida: '',
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
		removeErrorMsg(msg) {
			let index = this.getErrorIndex(msg);
			this.errorMessages.splice(index, 1);
		},
		getErrorIndex(msg) {
			//..recebe o todo como parâmetro, procura ele e retorna o seu index
			let index = this.errorMessages.findIndex( item => item.id === msg.id );
			return index;      
		},
		receberMensagemDoFilho(mensagem) {
			console.log('mensagem')
			console.log(mensagem)
			this.removeArquivo(mensagem)
		},
		removeArquivo(arquivo) {
			let index = this.getArquivoIndex(arquivo);
			this.fileInfos.splice(index, 1);
		},
		getArquivoIndex(arquivo) {
			//..recebe o todo como parâmetro, procura ele e retorna o seu index
			let index = this.fileInfos.findIndex( item => item.id === arquivo.id );
			return index;      
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
	},
	mounted() {
		UploadService.list('exemplo', 'exemplo').then((response) => {
			this.fileInfos = response.data.data;
		});
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
  

  