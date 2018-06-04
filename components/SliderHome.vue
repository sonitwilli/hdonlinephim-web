<template>
  <div class="container">
            <div class="row">
                    <div class="col-md-9">

                    <script src="app/services/moduleServices.js"></script>
                    <script src="app/controllers/moduleController.js"></script>
                <!--Begin-->
                <link href="Scripts/flexSlider/flexslider.css" rel="stylesheet" type="text/css" />
                <script src="Scripts/flexSlider/jquery.flexslider-min.js" type="text/javascript"></script>
                <div class="flexslider slideshow-content" id="bannerheaderhome" ng-controller="moduleController" ng-init="initSlideshowController('Slideshows')">
                    <ul class="slides">
                        <li ng-repeat="item in Slideshows">
                            <a title="" href="%7b%7bitem.html">
                                <img alt="" ng-src="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <script type="text/javascript">
                    $(document).ready(function () {
                        $('#bannerheaderhome').flexslider({
                            directionNav: true,
                            controlNav: false,
                            animation: "slide",
                            itemHeigh: 270,
                            itemMargin: 0,
                            animationSpeed: 700,
                            slideshowSpeed: 3000
                        });
                    });
                </script>
                <!--End-->
              <script type="text/javascript">
                  window.Slideshows = [{"Id":710,"ShopId":150,"Name":"1","Image":"file:///C:/Users/SB/Desktop/themes/Shop%20Online/runecom26.runtime.vn/Uploads/shop150/images/slider/banner1.jpg","Link":"#","Index":1,"Inactive":false,"Timestamp":"AAAAAAASXtA="},{"Id":711,"ShopId":150,"Name":"2","Image":"file:///C:/Users/SB/Desktop/themes/Shop%20Online/runecom26.runtime.vn/Uploads/shop150/images/slider/bg1-slider-home1.jpg","Link":"#","Index":2,"Inactive":false,"Timestamp":"AAAAAAASXtE="},{"Id":712,"ShopId":150,"Name":"3","Image":"file:///C:/Users/SB/Desktop/themes/Shop%20Online/runecom26.runtime.vn/Uploads/shop150/images/slider/home1_slider1.png","Link":"#","Index":3,"Inactive":false,"Timestamp":"AAAAAAASXs4="}];
              </script>                    
    </div>
    <div class="col-md-3">
      <div class="box-html">
          <div class="clearfix slideshow-block3 ">
            <div class="">
                <a class=""><img class="img-responsive" src="Uploads/shop150/images/adv/static-main-slide-01.png"></a>
                <a class=""><img class="img-responsive" src="Uploads/shop150/images/adv/static-main-slide-02.png"></a>
                <a class=""><img class="img-responsive" src="Uploads/shop150/images/adv/static-main-slide-03.png"></a>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>
