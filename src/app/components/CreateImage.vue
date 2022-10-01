<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card">
        <form v-on:submit.prevent="addImage">
          <div class="card-content">
            <h4 class="center-align">Subir imagen</h4>

            <div class="row">
              <div>
                <input type="file" @change="handleImage" accept="image/*" />
              </div>
            </div>
            <div class="input-field col s12 m6 l6">
              <input
                type="text"
                v-model="img.title"
                class="validate"
                required
              />
              <label>Titulo</label>
            </div>

            <div class="row">
              <div class="input-field col s12 m6 l6">
                <input
                  type="text"
                  v-model="img.description"
                  class="validate"
                  required
                />
                <label>Descripcion</label>
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
                  Guardar imagen
                  <i class="material-icons right">send</i>
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
    addImage() {
      const { file } = this;
      console.log(file);
      this.img.image = file;
      console.log(this.img);
      this.axios
        .post("/images", this.img)
        .then((res) => {
          this.$router.replace({ name: "DisplayImages" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
