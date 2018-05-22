<template>
  <section id="slider">
      <div id="full-slider-wrapper">
          <div id="layerslider" style="width:100%;height:500px;">
            <agile v-if="sliders" :arrows="false" :speed="1000" :timing="'linear'" :fade="true" :autoplay="true" :pauseOnHover="false">
                <div class="slide" v-for="slider in sliders">
                    <router-link :to="'/xem-phim/'+slider.slug+'/'+slider.id">
                      <a class="hover">
                        <img v-bind:title="slider.name" class="image-bg" v-bind:src="slider.background_link" />
                        <span class="play"><i class="fa fa-play"></i></span>
                      </a>
                    </router-link>
                </div>
            </agile>
          </div>
      </div>
    </section>
</template>

<script>
  import { Agile } from 'vue-agile';

  export default {
    name: 'SliderHome',
    components: {
      Agile
    },
    created() {
      this.getSlides();
    },
    data () {
      return {
          sliders: this.sliders
      }
    },
    methods: {
      getSlides: function () {
          this.$http.get(this.api_url+'api/slides').then(response => {
            var data = response.body;
            if(data.status === 200){
              this.sliders = data.data
            }else{
              console.log(data.status);
            }
          }, response => {
            this.sliders = null;
            console.log('error')
          });
      }
    }
  }
</script>

<style scoped>
  .image-bg{
    height: 500px;
    object-fit: cover;
    width: 100%;
    overflow: hidden;
  }
  #slider{
    padding-top: 80px;
  }
  a.hover span.play{
    display: none;
  }
  a.hover:hover img{
    opacity: 0.8
  }
  a.hover:hover span.play{
    display: block;
    position: absolute;
    z-index: 1000;
    background-color: rgba(0,0,0,.35);
    color: #fff;
    top: 50%;
    left: 50%;
    right: 0;
    font-size: 65px;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    margin-top: -75px;
    margin-left: -75px;
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear .2s,opacity .2s linear;
  }
  a.hover span.play i{
    top: 40px;
    position: absolute;
    left: 57px;
  }
</style>
