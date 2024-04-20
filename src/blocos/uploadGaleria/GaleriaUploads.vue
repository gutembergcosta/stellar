<template>
		<div v-if="fileInfos.length >0" class="row " :options="optionsFancyBox">
			<div class="col-md-3  mb-3" v-for="(item, index) in fileInfos" :key="index">
				<div>
					<a :href="item?.url_max" data-fancybox="gallery">
						<img :src="item?.url_square" alt="" class="w-100">
					</a>
				</div>
				<div class="d-flex justify-content-center">
					<button class="btn-upload-close" @click.prevent=deletarImg(item)>
						<i class="fa-solid fa-circle-xmark"></i>
					</button>
				</div>
			</div>
		</div>
</template>
  
<script>

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
	name: "galeria-uploads",
	props: {
		messagez: {
			type: String,
			required: true
		},
		fileInfos: {
			type: Object,
			required: true
		},
	},
	data() {
		return {
			selectedFiles: undefined,
			progressInfos: [],
			message: "",
			errorMessages: [],
			arquivoNome: "",
			qteImages: 0,
			uploaded: 0,
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
		
		
		clearFile() {
			this.$refs.fileInput.value = null;
			this.progressInfos = [];
			this.selectedFiles = undefined;
			this.uploaded = 0;
		},
		//enviarMensagemParaPai() {
		deletarImg(item) {
			// Emite um evento personalizado chamado 'send-file-to-parent'
			this.$emit('send-file-to-parent', item);
		},
	
		initFancybox() {
			Fancybox.bind('[data-fancybox]', this.optionsFancyBox);
		},

	},
	mounted() {
		
		this.initFancybox();

	},



};
</script>

<style scoped>

.fade-out {
	opacity: 0;
	transition: opacity 1s ease-out;
	/* Adjust duration and timing function as needed */
}


.btn-upload-close{
	background: none;
	border: none;
	font-size: 22px;
    color: orangered;
    cursor: pointer;
}
.wx-20{
	max-width: 20%;
	}
</style>
  

  