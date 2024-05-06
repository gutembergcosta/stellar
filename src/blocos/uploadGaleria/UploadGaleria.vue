<template>
	<CardBase titulo="Upload Galeria">
		<p if="infoTxt" class="card-description">{{ infoTxt }} </p>
		<div>
			<div class="mb-3">
				<label class="btn btn-primary rounded-0">
					<input type="file" multiple ref="fileInput" @change="selectFile" accept=".jpg, .png, .pdf"
						:disabled="selectedFiles" hidden />
					<div class="va-button__content"><i class="fa-solid fa-cloud-arrow-up"></i> Upload</div>
				</label>
			</div>
			<div v-if="errorMessages">
				<div v-for="(item, i) in errorMessages" :key="i" ref="message" class="alert alert-danger fade show"
					role="alert">
					{{ item.texto }}
					<button type="button" class="btn-upload-close" data-dismiss="alert" aria-label="Close"
						@click=removeErrorMsg(item)>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
			<div class="mb-3" v-if="progressInfos">
				<div class="progress mb-2" v-for="(progressInfo, index) in progressInfos" :key="index">
					<div class="progress-bar" :style="{ width: progressInfo.percentage + '%' }">{{progressInfo.percentage }}%</div>
				</div>
			</div>
			<GaleriaUploads @send-file-to-parent="getFileUpload" :messagez="parentMessage" :fileInfos="fileInfos" />
		</div>
	</CardBase>
</template>

<script setup >
	import { ref, onMounted , defineProps} from 'vue';

	import { uniqid } from '@/helpers/uniqid.js';
	import UploadService from "@/services/UploadFilesService";
	import GaleriaUploads from "./GaleriaUploads.vue";
	import "@fancyapps/ui/dist/fancybox/fancybox.css";

	const fileInfos = ref([]);
	const selectedFiles = ref(null);
	const fileInput = ref(null);
	const progressInfos = ref([]);
	const parentMessage = ref('Hello from parent!');
	const message = ref("");
	const errorMessages = ref([]);
	const arquivoNome = ref("");
	const qteImages = ref(0);
	const uploaded = ref(0);

	const props = defineProps({
		tkn: {
			type: String,
			required: true
		},
		tipo: {
			type: String,
			required: true
		},
		infoTxt: {
			type: String,
			required: false
		},
	});

	const selectFile = (event) => {
		progressInfos.value = [];
		selectedFiles.value = event.target.files;
		console.log('event.target.files');
		console.log(event.target.files);

		uploadFiles();
	};

	const uploadFiles = () => {
		message.value = "";
		let qteImages = selectedFiles.value.length;
		for (let i = 0; i < qteImages; i++) {
			upload(i, selectedFiles.value[i]);
		}
	};

	const upload = (idx, file) => {
		arquivoNome.value = "";
		progressInfos.value[idx] = { percentage: 0, fileName: file.name };
		arquivoNome.value = file.name;

		UploadService.upload(file, props.tipo, props.tkn, (event) => {
			progressInfos.value[idx].percentage = Math.round(100 * event.loaded / event.total);
		})
			.then(() => {
				let totaluploaded = ++uploaded.value
				if (totaluploaded == qteImages.value) {
					listArquivos();
					clearFile();
				}
			})
			.catch((error) => {

				alert('erro');
				console.log('error');
				console.log(error);
				let errorMsg = error.response.data.fileName + ' - ' + error.response.data.errors.arquivo;

				let id = uniqid()
				let erro = {
					id: id,
					texto: errorMsg
				};

				errorMessages.value.push(erro);

			})
			.finally(() => {
				selectFile.value = null;
				listArquivos();
				clearFile();

			})
	};

	const listArquivos = () => {
		UploadService.list(props.tipo, props.tkn).then((response) => {
				fileInfos.value = response?.data;
		});
	};

	const clearFile = () => {
		fileInput.value = null;
		progressInfos.value = [];
		selectedFiles.value = undefined;
		uploaded.value = 0;
	};

	const getFileUpload = (arquivo) => {
		console.log('arquivo')
		console.log(arquivo)
		removeArquivo(arquivo)
	};

	const removeArquivo = (arquivo) => {
		var result = confirm("Deseja excluir este item?");
		if (result) {
			let index = getArquivoIndex(arquivo);
			fileInfos.value.splice(index, 1);
		}
	};

	const getArquivoIndex = (arquivo) => {
		//..recebe o todo como parâmetro, procura ele e retorna o seu index
		let index = fileInfos.value.findIndex(item => item.id === arquivo.id);
		return index;
	};

	const removeErrorMsg = (msg) =>{
		let index = getErrorIndex(msg);
		errorMessages.value.splice(index, 1);
	};

	const getErrorIndex = (msg) => {
		//..recebe o todo como parâmetro, procura ele e retorna o seu index
		let index = errorMessages.value.findIndex(item => item.id === msg.id);
		return index;
	};

	onMounted(() => {
      listArquivos();
    });

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

.progress {
	background-color: rgb(233, 236, 239);
	border-radius: 4px;
	box-sizing: border-box;
	color: rgb(33, 37, 41);
	display: flex;
	font-size: 12px;
	font-weight: 400;
	height: 16px;
	line-height: 18px;
	overflow: hidden;
	text-align: left;
}

.progress-bar {
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
	transition-duration: 0.6s;
	transition-property: width;
	transition-timing-function: ease;
	width: 200px;

}
</style>