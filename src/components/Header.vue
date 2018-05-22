<template>
  <header>
      <!-- Top -->
      <!-- <section id="top" class="topBar show-for-large">
          <div class="row">
              <div class="medium-6 columns">
                  <div class="socialLinks">
                      <a href="#"><i class="fa fa-facebook-f"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-google-plus"></i></a>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                      <a href="#"><i class="fa fa-vimeo"></i></a>
                      <a href="#"><i class="fa fa-youtube"></i></a>
                  </div>
              </div>
              <div class="medium-6 columns">
                  <div class="top-button">
                      <ul class="menu float-right">
                          <li>
                              <a href="submit-post.html">upload Video</a>
                          </li>
                          <li class="dropdown-login">
                              <a class="loginReg" data-toggle="example-dropdown" href="#">login/Register</a>
                              <div class="login-form">
                                  <h6 class="text-center">Great to have you back!</h6>
                                  <form method="post">
                                      <div class="input-group">
                                          <span class="input-group-label"><i class="fa fa-user"></i></span>
                                          <input class="input-group-field" type="text" placeholder="Enter username">
                                      </div>
                                      <div class="input-group">
                                          <span class="input-group-label"><i class="fa fa-lock"></i></span>
                                          <input class="input-group-field" type="text" placeholder="Enter password">
                                      </div>
                                      <div class="checkbox">
                                          <input id="check1" type="checkbox" name="check" value="check">
                                          <label class="customLabel" for="check1">Remember me</label>
                                      </div>
                                      <input type="submit" name="submit" value="Login Now">
                                  </form>
                                  <p class="text-center">New here? <a class="newaccount" href="login-register.html">Create a new Account</a></p>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      <!--Navber-->
      <section id="navBar">
          <nav class="sticky-container" data-sticky-container>
              <div class="sticky topnav" data-sticky data-top-anchor="navBar" data-btm-anchor="footer-bottom:bottom" data-margin-top="0" data-margin-bottom="0" style="width: 100%; background: #fff;" data-sticky-on="large">
                  <div class="row">
                      <div class="large-12 columns">
                      <div class="title-bar" data-responsive-toggle="beNav" data-hide-for="large">
                          <button @click="menuClick()" class="menu-icon" type="button" data-toggle="offCanvas-responsive"></button>
                          <div class="title-bar-title"><img v-if="setting" v-bind:src="api_url+setting.images.replace('public','storage')" alt="logo" style="max-height: 40px"></div>
                      </div>

                      <div class="top-bar show-for-large" id="beNav" style="width: 100%;">
                          <div class="top-bar-left">
                              <ul class="menu">
                                  <li class="menu-text">
                                    <router-link to="/">
                                      <a><img v-if="setting" v-bind:src="api_url+setting.images.replace('public','storage')" alt="logo" style="max-height: 40px"></a>
                                    </router-link>
                                  </li>
                              </ul>
                          </div>
                          <div class="top-bar-right search-btn">
                              <ul class="menu">
                                  <li class="search" @click="statusSearch()">
                                      <i class="fa fa-search"></i>
                                  </li>
                              </ul>
                          </div>
                          <div class="top-bar-right">
                              <ul class="menu vertical medium-horizontal" data-responsive-menu="drilldown medium-dropdown">
                                  <li class="has-submenu active">
                                      <a href="/"><i class="fa fa-home"></i>Trang chủ</a>
                                  </li>
                                  <li class="has-submenu" data-dropdown-menu="example1">
                                      <a href="#" @mouseover="hoverMenu('genres')"><i class="fa fa-film"></i>Thể loại</a>
                                      <ul class="submenu menu vertical is-dropdown-submenu first-sub js-dropdown-active" data-submenu="" data-animate="slide-in-down slide-out-up" aria-hidden="false" role="menu" style="">
                                        <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item"><a href="home-v1.html"><i class="fa fa-home"></i>Home page v1</a></li>
                                        <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item"><a href="home-v2.html"><i class="fa fa-home"></i>Home page v2</a></li>
                                        <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item"><a href="home-v3.html"><i class="fa fa-home"></i>Home page v3</a></li>
                                        <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item"><a href="home-v4.html"><i class="fa fa-home"></i>Home page v4</a></li>
                                        <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item"><a href="home-v5.html"><i class="fa fa-home"></i>Home page v5</a></li>
                                        <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item"><a href="home-v6.html"><i class="fa fa-home"></i>Home page v6</a></li>
                                        <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item"><a href="home-v7.html"><i class="fa fa-home"></i>Home page v7</a></li>
                                        <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item"><a href="home-v8.html"><i class="fa fa-home"></i>Home page v8</a></li>
                                        <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item"><a href="home-v9.html"><i class="fa fa-home"></i>Home page v9</a></li>
                                        <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item"><a href="home-v10.html"><i class="fa fa-home"></i>Home page v10</a></li>
                                    </ul>




                                      <!-- <ul v-bind:class="{ 'js-dropdown-active': menuShow=='genres' }" v-if="genres" class="submenu menu vertical" data-submenu data-animate="slide-in-down slide-out-up">
                                          <li v-for="genre in genres" :key="genre.key">
                                            <a v-bind:href="url+'the-loai/'+genre.slug"><i class="fa fa-film"></i>{{genre.name}}</a>
                                          </li>
                                      </ul> -->
                                  </li>
                                  <li>
                                      <a href="#" @mouseover="hoverMenu('countries')"><i class="fa fa-edit"></i>Quốc gia</a>
                                      <ul class="submenu menu vertical" data-submenu data-animate="slide-in-down slide-out-up">
                                          <li><a href="blog-single-post.html"><i class="fa fa-edit"></i>blog single post</a></li>
                                      </ul>
                                  </li>
                                  <li>
                                      <a href="#"><i class="fa fa-magic"></i>features</a>
                                      <ul class="submenu menu vertical" data-submenu data-animate="slide-in-down slide-out-up">
                                          <li><a href="404.html"><i class="fa fa-magic"></i>404 Page</a></li>
                                          <li><a href="archives.html"><i class="fa fa-magic"></i>Archives</a></li>
                                          <li><a href="login.html"><i class="fa fa-magic"></i>login</a></li>
                                          <li><a href="login-forgot-pass.html"><i class="fa fa-magic"></i>Forgot Password</a></li>
                                          <li><a href="login-register.html"><i class="fa fa-magic"></i>Register</a></li>
                                          <li>
                                              <a href="#"><i class="fa fa-magic"></i>profile</a>
                                              <ul class="submenu menu vertical" data-submenu data-animate="slide-in-down slide-out-up">
                                                  <li><a href="profile-page-v1.html"><i class="fa fa-magic"></i>profile v1</a></li>
                                                  <li><a href="profile-page-v2.html"><i class="fa fa-magic"></i>profile v2</a></li>
                                                  <li><a href="profile-about-me.html"><i class="fa fa-magic"></i>Profile About Me</a></li>
                                                  <li><a href="profile-comments.html"><i class="fa fa-magic"></i>profile comments</a></li>
                                                  <li><a href="profile-favorite.html"><i class="fa fa-magic"></i>profile favorites</a></li>
                                                  <li><a href="profile-followers.html"><i class="fa fa-magic"></i>profile followers</a></li>
                                                  <li><a href="profile-settings.html"><i class="fa fa-magic"></i>profile settings</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="profile-video.html"><i class="fa fa-magic"></i>Author Page</a></li>
                                          <li><a href="search-results.html"><i class="fa fa-magic"></i>search results</a></li>
                                          <li><a href="terms-condition.html"><i class="fa fa-magic"></i>Terms &amp; Condition</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="about-us.html"><i class="fa fa-user"></i>about</a></li>
                                  <li><a href="contact-us.html"><i class="fa fa-envelope"></i>contact</a></li>
                              </ul>
                          </div>
                      </div>
                      </div>
                  </div>
                  <div id="search-bar" class="clearfix search-bar-light" v-bind:class="{ active: activeSearch }">
                      <form method="post">
                          <div class="search-input float-left">
                              <input type="search" name="search" placeholder="Seach Here your video">
                          </div>
                          <div class="search-btn float-right text-right">
                              <button class="button" name="search" type="submit">search now</button>
                          </div>
                      </form>
                  </div>
              </div>
          </nav>
      </section>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return{
        setting: this.setting,
        types: this.types,
        genres: this.genres,
        countries: this.countries,
        api_url: this.api_url,
        url: this.url,
        menuShow: false,
        activeSearch: false
      }
    },
    created(){
      this.getSetting();
      this.getGenres();
      this.getCountry();
    },
    methods: {
      getSetting: function () {
          this.$http.get(this.api_url+'api/setting').then(response => {
            var data = response.body;
            if(data.status === 200){
              this.setting = data.data;
              console.log(this.setting);
            }
          }, response => {
            this.setting = null;
          });
      },
      getGenres: function () {
          this.$http.get(this.api_url+'api/genres').then(response => {
            var data = response.body;
            if(data.status === 200){
              this.genres = data.data;
            }
          }, response => {
            this.genres = null;
          });
      },
      getCountry: function(){
        this.$http.get(this.api_url+'api/countries').then(response => {
          var data = response.body;
          if(data.status === 200){
            this.countries = data.data;
          }
        }, response => {
          this.countries = null;
        });
      },
      menuClick: function(){
        this.menuStatus = !this.menuStatus
        this.$emit('menuStatusUpdated', this.menuStatus)      
      },
      hoverMenu: function(type){
        this.menuShow = type;
      },
      statusSearch: function(){
        this.activeSearch = !this.activeSearch
      }
    }
  }
</script>

<style>
  @media (min-width: 1024px) {
    .title-bar{
      display: none;
    }
  }
  ul.submenu.js-dropdown-active{
    display: block;
  }
  #search-bar{
    display: none;
  }
  #search-bar.active{
    display: block;
  }
</style>
