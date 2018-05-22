<template>
  <div>
    <!-- layerslider -->
    <SliderHome></SliderHome>
    <!--end slider-->

    <!-- newest video -->
    <section class="content">
        <div class="main-heading">
            <div class="row secBg padding-14">
                <div class="medium-8 small-8 columns">
                    <div class="head-title">
                        <i class="fa fa-film"></i>
                        <h4>Phim nổi bật</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row secBg">
            <div class="large-12 columns">
                <div class="tabs-content">
                    <div class="tab-container tab-content active" data-content="1">
                        <div class="row list-group">
                            <div v-if="features" v-for="feature in features" :key="feature.key" class="item large-3 medium-6 columns group-item-grid-default">
                                <div class="post thumb-border">
                                    <div class="post-thumb">
                                        <img v-bind:src="feature.images_link" alt="new video">
                                        <router-link :to="'/xem-phim/'+feature.slug+'/'+feature.id">
                                          <a class="hover-posts">
                                              <span><i class="fa fa-play"></i>Xem phim</span>
                                          </a>
                                        </router-link>
                                        <div class="video-stats clearfix">
                                            <div class="thumb-stats pull-left">
                                                <h6>{{feature.quality}}</h6>
                                            </div>
                                            <div class="thumb-stats pull-left">
                                                <i class="fa fa-eye"></i>
                                                <span>{{feature.view}}</span>
                                            </div>
                                            <div class="thumb-stats pull-right">
                                                <span>{{feature.duration}} phút</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-des">
                                        <h6><a v-bind:href="url+'xem-phim/'+feature.slug+'-'+feature.id">{{feature.name}}</a></h6>
                                        <div class="post-stats clearfix">
                                            <p class="pull-left">
                                                <i class="fa fa-user"></i>
                                                <span><a href="#">admin</a></span>
                                            </p>
                                            <p class="pull-left">
                                                <i class="fa fa-clock-o"></i>
                                                <span>5 January 16</span>
                                            </p>
                                            <p class="pull-left">
                                                <i class="fa fa-eye"></i>
                                                <span>{{feature.view}}</span>
                                            </p>
                                        </div>
                                        <div class="post-summary">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        </div>
                                        <div class="post-button">
                                            <a v-bind:href="url+'xem-phim/'+feature.slug+'-'+feature.id" class="secondary-button"><i class="fa fa-play-circle"></i>Xem ngay</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="text-center row-btn">
                    <a class="button radius" v-bind:href="url+'noi-bat'">Xem tất cả</a>
                </div>
            </div>
        </div>
    </section>
    <!-- End newest video -->

    <!-- ad Section -->
    <div class="googleAdv">
        <a href="#"><img src="images/goodleadv.png" alt="googel ads"></a>
    </div>
    <!-- End ad Section -->

    <!-- Films New -->
    <section class="content">
        <div class="main-heading">
            <div class="row secBg padding-14">
                <div class="medium-8 small-8 columns">
                    <div class="head-title">
                        <i class="fa fa-star"></i>
                        <h4>Phim lẻ mới cập nhật</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row secBg">
            <div class="large-12 columns">
                <div class="tabs-content" data-tabs-content="popularVideos">
                    <div class="tabs-panel is-active" id="popular-all">
                        <div class="row list-group">
                            <div v-if="films" v-for="film in films" :key="film.key" class="item large-3 medium-6 columns group-item-grid-default">
                                <div class="post thumb-border">
                                    <div class="post-thumb">
                                        <img v-bind:src="film.images_link" alt="new video">
                                        <a v-bind:href="url+'xem-phim/'+film.slug+'-'+film.id" class="hover-posts">
                                            <span><i class="fa fa-play"></i>Xem phim</span>
                                        </a>
                                        <div class="video-stats clearfix">
                                            <div class="thumb-stats pull-left">
                                                <h6>{{film.quality}}</h6>
                                            </div>
                                            <div class="thumb-stats pull-left">
                                                <i class="fa fa-heart"></i>
                                                <span>{{film.view}}</span>
                                            </div>
                                            <div class="thumb-stats pull-right">
                                                <span>{{film.duration}} phút</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-des">
                                        <h6><a v-bind:href="url+'xem-phim/'+film.slug+'-'+film.id">{{film.name}}</a></h6>
                                        <div class="post-stats clearfix">
                                            <p class="pull-left">
                                                <i class="fa fa-user"></i>
                                                <span><a href="#">admin</a></span>
                                            </p>
                                            <p class="pull-left">
                                                <i class="fa fa-clock-o"></i>
                                                <span>5 January 16</span>
                                            </p>
                                            <p class="pull-left">
                                                <i class="fa fa-eye"></i>
                                                <span>{{film.view}}</span>
                                            </p>
                                        </div>
                                        <div class="post-summary">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        </div>
                                        <div class="post-button">
                                            <a href="single-video-v2.html" class="secondary-button"><i class="fa fa-play-circle"></i>watch video</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="text-center row-btn">
                    <a class="button radius" v-bind:href="url+'films'">Xem tất cả</a>
                </div>
            </div>
        </div>
    </section>
    <!-- End Films New -->

    <!-- ad Section -->
    <div class="googleAdv">
        <a href="#"><img src="images/goodleadv.png" alt="googel ads"></a>
    </div>
    <!-- End ad Section -->

    <!-- Series New -->
    <section class="content">
        <div class="main-heading">
            <div class="row secBg padding-14">
                <div class="medium-8 small-8 columns">
                    <div class="head-title">
                        <i class="fa fa-star"></i>
                        <h4>Phim bộ mới cập nhật</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row secBg">
            <div class="large-12 columns">
                <div class="tabs-content" data-tabs-content="popularVideos">
                    <div class="tabs-panel is-active" id="popular-all">
                        <div class="row list-group">
                            <div v-if="series" v-for="serie in series" :key="serie.key" class="item large-3 medium-6 columns group-item-grid-default">
                                <div class="post thumb-border">
                                    <div class="post-thumb">
                                        <img v-bind:src="serie.images_link" alt="new video">
                                        <a v-bind:href="url+'xem-phim/'+serie.slug+'-'+serie.id" class="hover-posts">
                                            <span><i class="fa fa-play"></i>Xem phim</span>
                                        </a>
                                        <div class="video-stats clearfix">
                                            <div class="thumb-stats pull-left">
                                                <h6>{{serie.quality}}</h6>
                                            </div>
                                            <div class="thumb-stats pull-left">
                                                <i class="fa fa-heart"></i>
                                                <span>{{serie.view}}</span>
                                            </div>
                                            <div class="thumb-stats pull-right">
                                                <span>{{serie.duration}} phút</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-des">
                                        <h6><a v-bind:href="url+'xem-phim/'+serie.slug+'-'+serie.id">{{serie.name}}</a></h6>
                                        <div class="post-stats clearfix">
                                            <p class="pull-left">
                                                <i class="fa fa-user"></i>
                                                <span><a href="#">admin</a></span>
                                            </p>
                                            <p class="pull-left">
                                                <i class="fa fa-clock-o"></i>
                                                <span>5 January 16</span>
                                            </p>
                                            <p class="pull-left">
                                                <i class="fa fa-eye"></i>
                                                <span>{{serie.view}}</span>
                                            </p>
                                        </div>
                                        <div class="post-summary">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        </div>
                                        <div class="post-button">
                                            <a href="single-video-v2.html" class="secondary-button"><i class="fa fa-play-circle"></i>watch video</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="text-center row-btn">
                    <a class="button radius" v-bind:href="url+'films'">Xem tất cả</a>
                </div>
            </div>
        </div>
    </section>
    <!-- End Series New -->

  </div>
</template>

<script>
  import SliderHome from "./SliderHome"

  export default {
    name: 'Main',
    data(){
      return{
        features: this.features,
        films: this.films,
        series: this.series
      }
    },
    created() {
      this.getFeatured();
      this.getFilms();
      this.getSeries();
    },
    components: {
      SliderHome
    },
    methods: {
      getFeatured: function () {
          this.$http.get(this.api_url+'api/featured').then(response => {
            if(response.body.status === 200){
              this.features = response.body.data;
            }
          }, response => {
            console.log('error getFeatured')
          });
      },
      getFilms: function () {
          this.$http.get(this.api_url+'api/films').then(response => {
            if(response.body.status === 200){
              this.films = response.body.data;
            }
          }, response => {
            console.log('error getFilms')
          });
      },
      getSeries: function () {
          this.$http.get(this.api_url+'api/series-tv').then(response => {
            if(response.body.status === 200){
              this.series = response.body.data;
            }
          }, response => {
            console.log('error getSeries')
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section.content{
    margin-top: 30px;
  }
  .post-des{
    min-height: 86px;
  }
  .row.secBg{
    padding-top: 20px;
  }
</style>
