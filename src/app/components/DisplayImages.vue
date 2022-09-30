<template>
    <div>
        <h3 class="center-align">Listado de imagenes</h3>
        <table class="striped centered responsive-table">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Titulo</th>
                    <th>Descripcion</th>                 
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="img in images" :key="img._id">
                    <td>{{img.image.data}}</td>
                    <td>{{img.title}}</td>
                    <td>{{img.description}}</td>
                    <div class="row">
                        <router-link :to="{ name: 'EditImage', params:{id: img._id} }" class="btn waves-effect waves-light green accent-2 col l12 m12 s12">
                            Editar
                            <i class="small material-icons">edit</i>                            
                        </router-link>                                                
                    </div>
                    <div class="row">
                        <button class="btn waves-effect waves-light red accent-4 col l12 m12 s12" v-on:click="deleteImage(img._id)">
                            Eliminar
                            <i class="small material-icons">delete_forever</i>
                        </button>
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
                images: []
            }
        },
        created(){
            this.fetchImages();
        },
        
        methods: {
            
            fetchImages() {
                this.axios.get('/images')
                    .then(res => {
                        this.images = res.data;
                    })
                    .catch(err => console.log(err));                
            },
            deleteImage(id) {                
                const response = confirm('¿Estas seguro de eliminar esta imagen?')
                if(response){              
                    this.axios.delete('/images/' + id)
                    .then(res => {
                        this.fetchImages();                                     
                    }) 
                    .catch (err => console.log(err));                   
                }
                return;                  
            }
        }        
    }

</script>