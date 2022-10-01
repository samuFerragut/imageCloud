<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card">
        <form v-on:submit.prevent="updatedImage">
          <div class="card-content">
            <h4 class="center-align">Editar datos de imagen</h4>
            <div width="400" heigth="200">
              <img class="responsive-img" :src="img.image" alt="" />
            </div>
            <div class="row">
              <div>
                <input type="file" @change="handleImage" accept="image/*" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m6 l6">
                <input
                  type="text"
                  v-model="img.title"
                  placeholder="Titulo"
                  class="validate"
                  required
                />
              </div>

              <div class="input-field col s12 m6 l6">
                <input
                  type="text"
                  v-model="img.description"
                  placeholder="Descripcion"
                  class="validate"
                  required
                />
              </div>
            </div>
          </div>
          <div class="card-action">
            <div class="row">
              <div class="col s12">
                <button
                  class="btn waves-effect waves-light  deep-purple darken-4"
                  type="submit"
                >
                  Actualizar imagenes
                  <i class="material-icons right">sync</i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: {
        title: "",
        description: "",
        image: "",
      },
      file: "",
    };
  },

  created() {
    this.getImage();
  },

  methods: {
    handleImage(e) {
      const selectedImage = e.target.files[0];
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.file = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },

    async getImage() {
      const res = await this.axios.get("/images/" + this.$route.params.id);
      this.img = res.data;
      console.log(this.img);
    },
    updatedImage() {
      if (this.file !== "") {
        const { file } = this;
        console.log(file);
        this.img.image = file;
      }
      console.log(this.img);
      this.axios
        .put("/images/" + this.$route.params.id, this.img)
        .then((res) => {
          console.log(res);
          this.$router.replace({ name: "DisplayImages" });
        });
    },
  },
};
</script>
