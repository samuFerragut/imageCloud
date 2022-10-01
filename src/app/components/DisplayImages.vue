<template>
  <div class="container center-align">
    <h3 class="center-align">Listado de imagenes</h3>
    <table class="striped centered responsive-table">
      <thead>
        <tr>
          <th class="col s4">Imagen</th>
          <th class="col s3">Titulo</th>
          <th class="col s3">Descripcion</th>
          <th class="col s2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="img in images" :key="img._id">
          <td class="col s4">
            <img class="responsive-img" :src="img.image" alt="" />
          </td>
          <td class="col s3 ">{{ img.title }}</td>
          <td class="col s3">{{ img.description }}</td>
          <div class="row col s2">
            <router-link
              :to="{ name: 'EditImage', params: { id: img._id } }"
              class="btn-floating btn-large waves-effect waves-light green"
            >
              <i class="small material-icons">edit</i>
            </router-link>
            <a
              class="btn-floating btn-large waves-effect waves-light red"
              v-on:click="deleteImage(img._id)"
            >
              <i class="small material-icons">delete_forever</i>
            </a>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  async created() {
    await this.fetchImages();
    console.log(this.images);
  },

  methods: {
    async fetchImages() {
      const res = await this.axios.get("/images");
      this.images = res.data;
    },
    deleteImage(id) {
      const response = confirm("¿Estas seguro de eliminar esta imagen?");
      if (response) {
        this.axios
          .delete("/images/" + id)
          .then((res) => {
            this.fetchImages();
          })
          .catch((err) => console.log(err));
      }
      return;
    },
  },
};
</script>
