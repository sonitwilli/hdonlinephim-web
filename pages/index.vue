<template>

<body>
  <div class="wrapper page-home">
    <header-menu></header-menu>

    <slider-home></slider-home>

      <!-- ADS -->
      <div class="adv">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">

                  <link href="Scripts/owl-carousel/owl.carousel.css" rel="stylesheet" />
                  <link href="Scripts/owl-carousel/owl.theme.css" rel="stylesheet" />
                  <script src="Scripts/owl-carousel/owl.carousel.min.js"></script>
                  <script src="app/services/moduleServices.js"></script>
                  <script src="app/controllers/moduleController.js"></script>
                  <!--Begin-->
                  <div class="adv-content row hidden-xs" ng-controller="moduleController" ng-init="initAdvSlideController('AdvSlides')">
                      <div class="owl-carousel">
                          <ul id="adv-content">
                              <li ng-repeat="item in AdvSlides">
                                  <a href="%7b%7bitem.html"><img class="img-responsive" /></a>
                              </li>
                          </ul>
                          <div class="controls boxprevnext">
                              <a class="prev prevlogo"><i class="fa fa-angle-left"></i></a>
                              <a class="next nextlogo"><i class="fa fa-angle-right"></i></a>
                          </div>
                      </div>
                  </div>
                  <script type="text/javascript">
                      $(document).ready(function () {
                          var owladv = $(".adv-content ul");
                          owladv.owlCarousel({
                              autoPlay: true,
                              autoPlay: 5000,
                              items: 3,
                              slideSpeed: 1000,
                              pagination: false,
                              itemsDesktop: [1200, 3],
                              itemsDesktopSmall: [980, 3],
                              itemsTablet: [767, 1],
                              itemsMobile: [480, 1]
                          });
                          $(".adv-content .nextlogo").click(function () {
                              owladv.trigger('owl.next');
                          })
                          $(".adv-content .prevlogo").click(function () {
                              owladv.trigger('owl.prev');
                          })
                      });
                  </script>
                  <!--End-->
              <script type="text/javascript">
                  window.AdvSlides = [{"Id":347,"ShopId":150,"AdvType":2,"AdvTypeName":"Chạy ngang","Name":"4","Image":"Uploads/shop150/images/adv/static-main-top-01.png","ImageThumbnai":"Uploads/shop150/_thumbs/images/adv/static-main-top-01.png","Link":"#","IsVideo":false,"Index":4,"Inactive":false,"Timestamp":"AAAAAAASXAM="},{"Id":348,"ShopId":150,"AdvType":2,"AdvTypeName":"Chạy ngang","Name":"5","Image":"Uploads/shop150/images/adv/static-main-top-02.png","ImageThumbnai":"Uploads/shop150/_thumbs/images/adv/static-main-top-02.png","Link":"#","IsVideo":false,"Index":5,"Inactive":false,"Timestamp":"AAAAAAASXAQ="},{"Id":349,"ShopId":150,"AdvType":2,"AdvTypeName":"Chạy ngang","Name":"6","Image":"Uploads/shop150/images/adv/static-main-top-03.png","ImageThumbnai":"/Uploads/shop150/_thumbs/images/adv/static-main-top-03.png","Link":"#","IsVideo":false,"Index":6,"Inactive":false,"Timestamp":"AAAAAAASXAU="}];
              </script>                        
            </div>
          </div>
        </div>
    </div>
    <!-- End ADS -->

    <div class="main">
        <div class="container">
            <div class="row">
                    <div class="col-md-12">

<link href="Scripts/owl-carousel/owl.carousel.css" rel="stylesheet" />
<link href="Scripts/owl-carousel/owl.theme.css" rel="stylesheet" />
<script src="Scripts/owl-carousel/owl.carousel.min.js"></script>
    <section class="tab-category-container clearfix">
        <div class="tabs-category clearfix">
            <div class="tab-content clearfix">
                <div class="tabs-title">
                    <div id="" class="tab-title">
                        <h3>
                            <span>Thời trang nữ</span>
                        </h3>
                    </div>
                </div>
                <ul class="tab-cates">
                        <li data-title="" rel="" class=""><a href="san-pham/ao-thun-nu-3593.html">&#193;o thun nữ</a></li>
                        <li data-title="" rel="" class=""><a href="san-pham/ao-so-mi-nu-3594.html">&#193;o sơ mi nữ</a></li>
                        <li data-title="" rel="" class=""><a href="san-pham/vay-nu-3595.html">V&#225;y nữ</a></li>
                        <li data-title="" rel="" class=""><a href="san-pham/quan-nu-3596.html">Quần nữ</a></li>
                </ul>
            </div>
        </div>
        <div class="product-content owl-carousel">
            <div id="product-tab-slide-3592" class="product-tab-slide row">
                <div class="product-block product-grid clearfix">
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/ao-so-mi-nu-cong-so.html" title="&#193;o Sơ Mi Nữ C&#244;ng Sở">
                                        <img src="Uploads/shop150/images/product/18_2_1.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/ao-so-mi-nu-cong-so.html" title="&#193;o Sơ Mi Nữ C&#244;ng Sở" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-10%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/ao-so-mi-nu-cong-so.html" title="&#193;o Sơ Mi Nữ C&#244;ng Sở">&#193;o Sơ Mi Nữ C&#244;ng Sở</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">157.500&nbsp;₫</span>
                                            <span class="price-old">175.000&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3295,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/combo-2-ao-yem-xuan-he.html" title="Combo 2 &#193;o Yếm Xu&#226;n H&#232;">
                                        <img src="Uploads/shop150/images/product/22.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/combo-2-ao-yem-xuan-he.html" title="Combo 2 &#193;o Yếm Xu&#226;n H&#232;" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-10%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/combo-2-ao-yem-xuan-he.html" title="Combo 2 &#193;o Yếm Xu&#226;n H&#232;">Combo 2 &#193;o Yếm Xu&#226;n H&#232;</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">202.500&nbsp;₫</span>
                                            <span class="price-old">225.000&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3297,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/dam-theu-hoa-thanh-lich.html" title="Đầm Th&#234;u Hoa Thanh Lịch">
                                        <img src="Uploads/shop150/images/product/13_2.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/dam-theu-hoa-thanh-lich.html" title="Đầm Th&#234;u Hoa Thanh Lịch" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-10%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/dam-theu-hoa-thanh-lich.html" title="Đầm Th&#234;u Hoa Thanh Lịch">Đầm Th&#234;u Hoa Thanh Lịch</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">247.500&nbsp;₫</span>
                                            <span class="price-old">275.000&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3303,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/ao-so-mi-celio-emabaton-xanh-den-.html" title="&#193;o sơ mi Celio EMABATON (Xanh đen)">
                                        <img src="Uploads/shop150/images/product/dress7_6aa158b4-6164-42e4-bf2f-d10ba3d00016_large.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/ao-so-mi-celio-emabaton-xanh-den-.html" title="&#193;o sơ mi Celio EMABATON (Xanh đen)" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-10%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/ao-so-mi-celio-emabaton-xanh-den-.html" title="&#193;o sơ mi Celio EMABATON (Xanh đen)">&#193;o sơ mi Celio EMABATON (Xanh đen)</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">252.000&nbsp;₫</span>
                                            <span class="price-old">280.000&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3311,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="controls boxprevnext">
                    <a class="prev prevlogo"><i class="fa fa-angle-left"></i></a>
                    <a class="next nextlogo"><i class="fa fa-angle-right"></i></a>
                </div>
            </div>
        </div>
    </section>
    <section class="tab-category-container clearfix">
        <div class="tabs-category clearfix">
            <div class="tab-content clearfix">
                <div class="tabs-title">
                    <div id="" class="tab-title">
                        <h3>
                            <span>Thời trang nam</span>
                        </h3>
                    </div>
                </div>
                <ul class="tab-cates">
                        <li data-title="" rel="" class=""><a href="san-pham/ao-thun-nam-3598.html">&#193;o thun nam</a></li>
                        <li data-title="" rel="" class=""><a href="san-pham/ao-so-mi-nam-3599.html">&#193;o sơ mi nam</a></li>
                        <li data-title="" rel="" class=""><a href="san-pham/quan-nam-3600.html">Quần nam</a></li>
                        <li data-title="" rel="" class=""><a href="san-pham/ao-khoac-nam-3601.html">&#193;o kho&#225;c nam</a></li>
                </ul>
            </div>
        </div>
        <div class="product-content owl-carousel">
            <div id="product-tab-slide-3597" class="product-tab-slide row">
                <div class="product-block product-grid clearfix">
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/quan-legging-phoi-chan-vay-day-keo.html" title="Quần Legging Phối Ch&#226;n V&#225;y D&#226;y K&#233;o">
                                        <img src="Uploads/shop150/images/product/girl_6_4.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/quan-legging-phoi-chan-vay-day-keo.html" title="Quần Legging Phối Ch&#226;n V&#225;y D&#226;y K&#233;o" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-15%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/quan-legging-phoi-chan-vay-day-keo.html" title="Quần Legging Phối Ch&#226;n V&#225;y D&#226;y K&#233;o">Quần Legging Phối Ch&#226;n V&#225;y D&#226;y K&#233;o</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">233.750&nbsp;₫</span>
                                            <span class="price-old">275.000&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3301,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/combo-2-ao-thun-nu-sac-mau-he-ld001.html" title="Combo 2 &#193;o Thun Nữ Sắc M&#224;u H&#232; LD001">
                                        <img src="Uploads/shop150/images/product/girl_7_3.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/combo-2-ao-thun-nu-sac-mau-he-ld001.html" title="Combo 2 &#193;o Thun Nữ Sắc M&#224;u H&#232; LD001" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-0%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/combo-2-ao-thun-nu-sac-mau-he-ld001.html" title="Combo 2 &#193;o Thun Nữ Sắc M&#224;u H&#232; LD001">Combo 2 &#193;o Thun Nữ Sắc M&#224;u H&#232; LD001</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">0&nbsp;₫</span>
                                            <span class="price-old">0&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3320,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/bo-the-thao-co-gian-tot-summer-hot.html" title="Bộ Thể Thao Co Gi&#227;n Tốt Summer Hot">
                                        <img src="Uploads/shop150/images/product/image1xxl.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/bo-the-thao-co-gian-tot-summer-hot.html" title="Bộ Thể Thao Co Gi&#227;n Tốt Summer Hot" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-10%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/bo-the-thao-co-gian-tot-summer-hot.html" title="Bộ Thể Thao Co Gi&#227;n Tốt Summer Hot">Bộ Thể Thao Co Gi&#227;n Tốt Summer Hot</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">175.500&nbsp;₫</span>
                                            <span class="price-old">195.000&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3298,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/ao-khoac-nam-nu-dao-pho-spy.html" title="&#193;o Kho&#225;c Nam/Nữ Dạo Phố Spy">
                                        <img src="Uploads/shop150/images/product/5_1__2.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/ao-khoac-nam-nu-dao-pho-spy.html" title="&#193;o Kho&#225;c Nam/Nữ Dạo Phố Spy" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-20%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/ao-khoac-nam-nu-dao-pho-spy.html" title="&#193;o Kho&#225;c Nam/Nữ Dạo Phố Spy">&#193;o Kho&#225;c Nam/Nữ Dạo Phố Spy</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">156.000&nbsp;₫</span>
                                            <span class="price-old">195.000&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3306,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/ao-khoac-da-cao-cap.html" title="&#193;o Kho&#225;c Da Cao Cấp">
                                        <img src="Uploads/shop150/images/product/dress1_3de0e61c-e9d2-411e-952e-7eb8ee3a4cc3_large.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/ao-khoac-da-cao-cap.html" title="&#193;o Kho&#225;c Da Cao Cấp" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-10%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/ao-khoac-da-cao-cap.html" title="&#193;o Kho&#225;c Da Cao Cấp">&#193;o Kho&#225;c Da Cao Cấp</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">252.000&nbsp;₫</span>
                                            <span class="price-old">280.000&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3307,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/ao-so-mi-zara-slim-fit-zsm651.html" title="&#193;o sơ mi ZARA Slim Fit ZSM651">
                                        <img src="Uploads/shop150/images/product/dress5_large.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/ao-so-mi-zara-slim-fit-zsm651.html" title="&#193;o sơ mi ZARA Slim Fit ZSM651" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-10%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/ao-so-mi-zara-slim-fit-zsm651.html" title="&#193;o sơ mi ZARA Slim Fit ZSM651">&#193;o sơ mi ZARA Slim Fit ZSM651</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">247.500&nbsp;₫</span>
                                            <span class="price-old">275.000&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3309,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-resize product-item-box">
                            <div class="product-item">
                                <div class="image image-resize">
                                    <a href="san-pham/bo-the-thao-co-gian-tot-summer-hot-36d.html" title="Bộ Thể Thao Co Gi&#227;n Tốt Summer Hot 36D">
                                        <img src="Uploads/shop150/images/product/girl_3_2.jpg" class="img-responsive" />
                                    </a>
                                    <a href="san-pham/bo-the-thao-co-gian-tot-summer-hot-36d.html" title="Bộ Thể Thao Co Gi&#227;n Tốt Summer Hot 36D" class="box-inner">
                                        <ul class="add-to-links">
                                            <li><span class="add-view">Xem thêm</span></li>

                                        </ul>
                                    </a>
                                        <span class="promotion">-0%</span>
                                </div>
                                <div class="right-block">
                                    <h2 class="name">
                                        <a href="san-pham/bo-the-thao-co-gian-tot-summer-hot-36d.html" title="Bộ Thể Thao Co Gi&#227;n Tốt Summer Hot 36D">Bộ Thể Thao Co Gi&#227;n Tốt Summer Hot 36D</a>
                                    </h2>
                                    <h2 class="name"></h2>
                                    <div class="ratings clearfix hidden">
                                        <div class="rating-box">
                                            <div class="rating">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                            <span class="price-new">125.000&nbsp;₫</span>
                                            <span class="price-old">125.000&nbsp;₫</span>
                                    </div>
                                    <div class="addtocart-button clearfix">
                                        <a class="add-to-cart" href="javascript:void(0)" onclick="AddToCard(3319,1)">Mua</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="controls boxprevnext">
                    <a class="prev prevlogo"><i class="fa fa-angle-left"></i></a>
                    <a class="next nextlogo"><i class="fa fa-angle-right"></i></a>
                </div>
            </div>
        </div>
    </section>
<script type="text/javascript">
    var arr = $.parseJSON('[3592,3597]');
    $(document).ready(function () {
        $.each(arr, function (index, it) {
            var owlproductslide2 = $("#product-tab-slide-" + it + " .product-block");
            owlproductslide2.owlCarousel({
                autoPlay: true,
                autoPlay: 5000,
                items: 4,
                slideSpeed: 1000,
                pagination: false,
                itemsDesktop: [1200, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [767, 2],
                itemsMobile: [480, 2]
            });
            $("#product-tab-slide-" + it + " .nextlogo").click(function () {
                owlproductslide2.trigger('owl.next');
            })
            $("#product-tab-slide-" + it + " .prevlogo").click(function () {
                owlproductslide2.trigger('owl.prev');
            })
        });

    });
</script>    <div class="box-html">
        <div class="policy-content clearfix">
                    <div class="col-md-3  clearfix">
                        <div class="sale-policy-block">
                            <i class="fa fa-refresh"></i>
                            <span>Hoàn trả trong<br>30 ngày</span>
                        </div>
                    </div>
                    <div class="col-md-3 clearfix">
                        <div class="sale-policy-block">
                            <i class="fa fa-truck"></i>
                           <span>Giao hàng<br>miễn phí</span>
                        </div>
                    </div>
                    <div class="col-md-3 clearfix">
                        <div class="sale-policy-block">
                            <i class="fa fa-life-saver"></i>
                            <span>Thanh toán<br>linh hoạt</span>
                        </div>
                    </div>
                    <div class="col-md-3 clearfix">
                        <div class="sale-policy-block">
                            <i class="fa fa-users"></i>
                            <span>Hỗ trợ<br>khách hàng</span>
                        </div>
                    </div>
                </div>
    </div>
                    </div>
            </div>
        </div>
    </div>


            <div class="partner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

<link href="Scripts/owl-carousel/owl.carousel.css" rel="stylesheet" />
<link href="Scripts/owl-carousel/owl.theme.css" rel="stylesheet" />
<script src="Scripts/owl-carousel/owl.carousel.min.js"></script>
<script src="app/services/moduleServices.js"></script>
<script src="app/controllers/moduleController.js"></script>
    <!--Begin-->
    <div class="partner-content owl-carousel" ng-controller="moduleController" ng-init="initPartnerController('Partners')">
        <div class="partner-block">
            <div class="partner-item" ng-repeat="item in Partners">
                <a href="%7b%7bitem.html" target="_blank" title="">
                    <img class="img-responsive" />
                </a>
            </div>
        </div>
        <div class="controls boxprevnext">
            <a class="prev prevlogo"><i class="fa fa-angle-left"></i></a>
            <a class="next nextlogo"><i class="fa fa-angle-right"></i></a>
        </div>
    </div>
    <script type="text/javascript">
        $(document).ready(function () {
            var owl = $(".partner-block");
            owl.owlCarousel({
                autoPlay: true,
                autoPlay: 5000,
                items: 6,
                slideSpeed: 1000,
                pagination: false,
                itemsDesktop: [1200, 6],
                itemsDesktopSmall: [980, 5],
                itemsTablet: [767, 4],
                itemsMobile: [480, 2]
            });
            $(".partner-content .nextlogo").click(function () {
                owl.trigger('owl.next');
            });
            $(".partner-content .prevlogo").click(function () {
                owl.trigger('owl.prev');
            });
        });
    </script>
    <!--End-->
<script type="text/javascript">
    window.Partners = [{"Id":236,"ShopId":150,"Name":"1","Link":"#","Logo":"Uploads/shop150/images/adv/partner07.png","Index":1,"Inactive":false},{"Id":237,"ShopId":150,"Name":"2","Link":"#","Logo":"Uploads/shop150/images/adv/partner08.png","Index":2,"Inactive":false},{"Id":238,"ShopId":150,"Name":"3","Link":"#","Logo":"Uploads/shop150/images/adv/partner09.png","Index":3,"Inactive":false},{"Id":239,"ShopId":150,"Name":"4","Link":"#","Logo":"Uploads/shop150/images/adv/partner10.png","Index":4,"Inactive":false},{"Id":240,"ShopId":150,"Name":"5","Link":"#","Logo":"Uploads/shop150/images/adv/partner11.png","Index":5,"Inactive":false},{"Id":250,"ShopId":150,"Name":"6","Link":"#","Logo":"Uploads/shop150/images/adv/partner12.png","Index":6,"Inactive":false}];
</script>                        </div>
                    </div>
                </div>
            </div>


        <footer-component></footer-component>

</div>



    <div style="display: none;" id="loading-mask">
        <div id="loading_mask_loader" class="loader">
            <img alt="Loading..." src="Images/ajax-loader-main.gif" />
            <div>
                Please wait...
            </div>
        </div>
    </div>
    <a class="back-to-top" href="#" style="display: inline;">
        <i class="fa fa-angle-up">
        </i>
    </a>


</body>



</template>

<script>
import HeaderMenu from '~/components/Header.vue'
import FooterComponent from '~/components/Footer.vue'
import SliderHome from '~/components/SliderHome.vue'

export default {
  components: {
    HeaderMenu,
    FooterComponent,
    SliderHome
  }
}
</script>

<style>

</style>
