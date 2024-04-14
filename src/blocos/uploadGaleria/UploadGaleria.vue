<template>
	<VaCard>
		<VaCardTitle>Upload Galeria</VaCardTitle>
		<VaCardContent>
				<p class="card-description">Instrução adicional </p>
				<p>Data from Child: {{ receivedData }}</p>
				<div>
					<div class="mb-3">
						<label class="btn-upload">
							<input type="file" multiple ref="fileInput" @change="selectFile" accept=".jpg, .png, .pdf" :disabled="selectedFiles" hidden />
							<div class="va-button__content">Upload</div>
						</label>
					</div>
					<div v-if="errorMessages">
						<div v-for="(item, i) in errorMessages" :key="i" ref="message" class="alert alert-danger fade show" role="alert">
						{{ item.texto }}
						<button type="button" class="btn-upload-close" data-dismiss="alert" aria-label="Close" @click=removeErrorMsg(item)>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</div>
				<div class="mb-3" v-if="progressInfos">
					<div class="mb-2" v-for="(progressInfo, index) in progressInfos" :key="index">
						<span>{{ progressInfo.fileName }}</span>
					<div class="progress">
						<div class="progress-bar progress-bar-info" role="progressbar" :aria-valuenow="progressInfo.percentage" aria-valuemin="0" aria-valuemax="100" :style="{ width: progressInfo.percentage + '%' }">
							{{ progressInfo.percentage }}%
						</div>
					</div>
				</div>
				</div>
				<GaleriaUploads 
				@send-file-to-parent="getFileUpload"
				:messagez="parentMessage" 
				:fileInfos="fileInfos"
				/>
				</div>
		</VaCardContent>
	</VaCard>	
</template>
  
<script>

import { uniqid } from '@/helpers/uniqid.js';
import UploadService from "@/services/UploadFilesService";
import GaleriaUploads from "./GaleriaUploads.vue";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
	name: "upload-files",
	components: {
		GaleriaUploads 
	},
	props: ['tkn','tipo'],
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
		getFileUpload(arquivo) {
			console.log('arquivo')
			console.log(arquivo)
			this.removeArquivo(arquivo)
		},
		removeArquivo(arquivo) {
			var result = confirm("Deseja excluir este item?");
			if (result) {
				let index = this.getArquivoIndex(arquivo);
				this.fileInfos.splice(index, 1);
			} 
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

			UploadService.upload(file, this.tipo, this.tkn, (event) => {
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
			UploadService.list(this.tipo, this.tkn).then((response) => {
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
		this.listArquivos();
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
	background-color: #154EC1;
	font-weight: var(--va-button-font-weight);
	color: white;
	font-size: var(--va-button-font-size);
	padding: var(--va-button-content-py) var(--va-button-content-px);
	line-height: var(--va-button-line-height);
	border-radius: 4px;
}

.fade-out {
	opacity: 0;
	transition: opacity 1s ease-out;
	/* Adjust duration and timing function as needed */
}

.progress{
	background-color: rgb(233, 236, 239);
	border-radius: 4px;
	box-sizing: border-box;
	color :rgb(33, 37, 41);
	display: flex;
	font-size :12px;
	font-weight: 400;
	height: 16px;
	line-height: 18px;
	overflow :hidden;
	text-align: left;
}

.progress-bar{
	background-color: rgb(0, 123, 255);
	box-sizing: border-box;
	color: rgb(255, 255, 255);
	display: flex;
	flex-direction: column;
	font-size: 12px;
	font-weight: 400;
	height: 16px;
	justify-content: center;
	line-height: 18px;
	text-align: center;
	transition-behavior: normal;
	transition-delay: 0s;
	transition-duration :0.6s;
	transition-property :width;
	transition-timing-function: ease;
	width:200px;

}

</style>
  

  