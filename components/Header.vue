<template>
  <div class="header">
    <script src="scripts/common/login.js" type="text/javascript"></script>
    <section class="top-link clearfix">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <ul class="nav navbar-nav topmenu-contact">
                        <li><i class="fa fa-phone"></i>Hotline:0908 77 00 95</li>
                    </ul>
                        <ul class="nav navbar-nav navbar-right topmenu  hidden-xs">
                            <li class="hotline"><a href="#"><i class="fa fa-phone"></i>Hotline:0908 77 00 95</a></li>
                            <li class="order-check"><a href="kiem-tra-don-hang.html"><i class="fa fa-pencil-square-o"></i>Kiểm tra đơn hàng</a></li>
                            <li class="order-cart"><a href="gio-hang.html"><i class="fa fa-shopping-cart"></i>Giỏ hàng</a></li>
                            <li class="account-login"><a href="dang-nhap.html"><i class="fa fa-sign-in"></i>Đăng nhập </a></li>
                            <li class="account-register"><a href="dang-ky.html"><i class="fa fa-key"></i>Đăng ký </a></li>
                        </ul>
                    <div class="show-mobile hidden-lg hidden-md hidden-sm">
                        <div class="quick-cart">
                            <div class="quickaccess-toggle">
                                <a href="gio-hang.html" title="Giỏ hàng"><i class="fa fa-shopping-cart"></i></a>
                            </div>
                        </div>
                        <div class="quick-tracking">
                            <div class="quickaccess-toggle">
                                <a id="mobile-wishlist-total" href="kiem-tra-don-hang.html" title="Kiểm tra đơn hàng" class="wishlist"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                        </div>
                        <div class="quick-user">
                            <div class="quickaccess-toggle">
                                <i class="fa fa-user"></i>
                            </div>
                            <div class="inner-toggle">
                                    <ul class="login links">
                                        <li>
                                            <a href="dang-ky.html"><i class="fa fa-sign-in"></i> Đăng ký</a>
                                        </li>
                                        <li>
                                            <a href="dang-nhap.html"><i class="fa fa-key"></i>Đăng nhập</a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                        <div class="menu-mobile">
                            <div class="quickaccess-toggle">
                                <span class="ts-mobile-menu-icon-toggle visible-phone fa fa-list" id="menu-icon"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="containter">
      <div class="row">
          <div class="col-xs-12 hidden-lg hidden-md hidden-sm">
              <!-- MENU MAIN -->
              <ul id='nav' class='sf-menu-phone'><li><a class='' href='trang-chu.html'><span>Trang chủ</span></a></li>
              <li><a class='' href='gioi-thieu.html'><span>Giới thiệu</span></a></li>
              <li><a class='' href='san-pham.html'><span>Sản phẩm</span></a></li>
              <li><a class='' href='tin-tuc.html'><span>Tin tức</span></a></li>
              <li><a class='' href='lien-he.html'><span>Liên hệ</span></a></li>
              </ul>
          </div>
      </div>
    </div>

    <script type="text/javascript">
        /********************************** Menu Mobile ********************************************/
        $(document).ready(function() {
            jQuery("#menu-icon").on("click", function() {
                jQuery(".sf-menu-phone").slideToggle();
                jQuery(this).toggleClass("active");
            });

            jQuery('.sf-menu-phone').find('li.parent').append('<i class="fa fa-angle-down"></i>');
            jQuery('.sf-menu-phone li.parent i').on("click", function() {
                if (jQuery(this).hasClass('fa-angle-up')) {
                    jQuery(this).removeClass('fa-angle-up').parent('li.parent').find('> ul').slideToggle();
                } else {
                    jQuery(this).addClass('fa-angle-up').parent('li.parent').find('> ul').slideToggle();
                }
            });
        });
    </script>
    <section class="header-content clearfix">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-12 logo text-center">
                    <a href="index.html" title="">
                        <img alt="" src="Uploads/shop150/images/adv/logo-black-magenta.png" class="img-responsive" />
                    </a>
                </div>
                <div class="col-md-6 col-sm-5 col-xs-12 top-search">
                    <div class="search">
                        <div class="input-cat form-search clearfix">
                            <div class="form-search-controls  input-group">
                                <input type="text" name="search" id="txtsearch" onblur="if(this.value=='')this.value='Tìm kiếm...'"
                                        onfocus="if(this.value=='Tìm kiếm...')this.value=''" value="T&#236;m kiếm..." />
                                <span class="input-group-btn">
                                    <button class="btn btn-search" title="Search" type="submit" id="btnsearch" value="Search">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="social-group">
                    </div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-12 top-cart  hidden-xs">
                    <div class="cart" id="cart">
                        <div class="heading">
                            <a href="gio-hang.html">
                                <span class="icon">icon</span><span id="cart-total">
                                    0
                                    sp - 0đ
                                </span><i class="fa fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script type="text/javascript">
        $("#btnsearch").click(function () {
            SearchProduct();
        });
        $("#txtsearch").keydown(function (event) {
            if (event.keyCode == 13) {
                SearchProduct();
            }
        });
        function SearchProduct() {
            var key = $('#txtsearch').val();
            if (key == '' || key == 'Tìm kiếm...') {
                $('#txtsearch').focus();
                return;
            }
            window.location = 'tim-kiem08e2.html?key=' + key;
        }
    </script>

    <section class="navigation-menu clearfix hidden-xs">
        <div class="container">
            <div class="menu-top">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar nav-menu">
                            <div class="navbar-header">
                                <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <nav id="mobile-menu" class="mobile-menu collapse navbar-collapse">
                                <ul class='menu nav navbar-nav'><li class="level0"><a class='' href='trang-chu.html'><span>Trang chủ</span></a></li>
                                  <li class="level0"><a class='' href='gioi-thieu.html'><span>Giới thiệu</span></a></li>
                                  <li class="level0"><a class='' href='san-pham.html'><span>Sản phẩm</span></a></li>
                                  <li class="level0"><a class='' href='tin-tuc.html'><span>Tin tức</span></a></li>
                                  <li class="level0"><a class='' href='lien-he.html'><span>Liên hệ</span></a></li>
                                </ul>
                            </nav>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="wpb_content_element hidden-sm hidden-md hidden-lg">
            <section class="widget-container ts-menus-widget">
                <div type="button" class="collapsed" data-toggle="collapse" data-target="#menu_mobile" aria-expanded="false">
                    <div class="widget-title-wrapper">
                        <h3 class="widget-title heading-title btn-navbar">Danh mục sản phẩm</h3>
                    </div>
                </div>
                <nav class="vertical-menu ts-mega-menu-wrapper navbar-collapse collapse" aria-expanded="false" id="menu_mobile" role="tablist">
                    <ul class='menu mobilemenu tree dhtml' id='menu-shop-by-category'>
                      <li class="child"><a href='san-pham/thoi-trang-nu-3592.html'><span class='menu-icon'><i class='fa '></i></span> <span class='menu-label'>Thời trang nữ</span></a>
                        <ul><li><a href='san-pham/ao-thun-nu-3593.html'><span class='menu-icon'><i class='fa fa-check'></i></span> <span class='menu-label'>Áo thun nữ</span></a></li>
                        <li><a href='san-pham/ao-so-mi-nu-3594.html'><span class='menu-icon'><i class='fa fa-check'></i></span> <span class='menu-label'>Áo sơ mi nữ</span></a></li>
                        <li><a href='san-pham/vay-nu-3595.html'><span class='menu-icon'><i class='fa fa-check'></i></span> <span class='menu-label'>Váy nữ</span></a></li>
                        <li><a href='san-pham/quan-nu-3596.html'><span class='menu-icon'><i class='fa fa-check'></i></span> <span class='menu-label'>Quần nữ</span></a></li>
                        </ul>
                      </li>
                      <li class="child"><a href='san-pham/thoi-trang-nam-3597.html'><span class='menu-icon'><i class='fa '></i></span> <span class='menu-label'>Thời trang nam</span></a>
                        <ul>
                          <li><a href='san-pham/ao-thun-nam-3598.html'><span class='menu-icon'><i class='fa fa-check'></i></span> <span class='menu-label'>Áo thun nam</span></a></li>
                          <li><a href='san-pham/ao-so-mi-nam-3599.html'><span class='menu-icon'><i class='fa fa-check'></i></span> <span class='menu-label'>Áo sơ mi nam</span></a></li>
                          <li><a href='san-pham/quan-nam-3600.html'><span class='menu-icon'><i class='fa fa-check'></i></span> <span class='menu-label'>Quần nam</span></a></li>
                          <li><a href='san-pham/ao-khoac-nam-3601.html'><span class='menu-icon'><i class='fa fa-check'></i></span> <span class='menu-label'>Áo khoác nam</span></a></li>
                        </ul>
                      </li>
                    </ul>
                </nav>
            </section>
        </div>
    </div>
<script type="text/javascript">
    $(document).ready(function () {
        var str = location.href.toLowerCase();
        $("ul.menu li a").each(function () {
            if (str.indexOf(this.href.toLowerCase()) >= 0) {
                $("ul.menu li").removeClass("active");
                $(this).parent().addClass("active");
            }
        });

        $('ul.tree.dhtml').hide();

        //to do not execute this script as much as it's called...
        if (!$('ul.tree.dhtml').hasClass('dynamized')) {
            //add growers to each ul.tree elements
            $('ul.tree.dhtml ul').prev().before("<span class='grower OPEN'> </span>");

            //dynamically add the '.last' class on each last item of a branch
            $('ul.tree.dhtml ul li:last-child, ul.tree.dhtml li:last-child').addClass('last');

            //collapse every expanded branch
            $('ul.tree.dhtml span.grower.OPEN').addClass('CLOSE').removeClass('OPEN').parent().find('ul:first').hide();
            $('ul.tree.dhtml').show();

            //open the tree for the selected branch
            $('ul.tree.dhtml .selected').parents().each(function () {
                if ($(this).is('ul'))
                    toggleBranch($(this).prev().prev(), true);
            });
            toggleBranch($('ul.tree.dhtml .selected').prev(), true);

            //add a fonction on clicks on growers
            $('ul.tree.dhtml span.grower').click(function () {
                toggleBranch($(this));
            });
            //mark this 'ul.tree' elements as already 'dynamized'
            $('ul.tree.dhtml').addClass('dynamized');

            $('ul.tree.dhtml').removeClass('dhtml');
        }
    });

    //animate the opening of the branch (span.grower jQueryElement)
    function openBranch(jQueryElement, noAnimation) {
        jQueryElement.addClass('OPEN').removeClass('CLOSE');
        if (noAnimation)
            jQueryElement.parent().find('ul:first').show();
        else
            jQueryElement.parent().find('ul:first').slideDown();
    }
    //animate the closing of the branch (span.grower jQueryElement)
    function closeBranch(jQueryElement, noAnimation) {
        jQueryElement.addClass('CLOSE').removeClass('OPEN');
        if (noAnimation)
            jQueryElement.parent().find('ul:first').hide();
        else
            jQueryElement.parent().find('ul:first').slideUp();
    }

    //animate the closing or opening of the branch (ul jQueryElement)
    function toggleBranch(jQueryElement, noAnimation) {
        if (jQueryElement.hasClass('OPEN'))
            closeBranch(jQueryElement, noAnimation);
        else
            openBranch(jQueryElement, noAnimation);
    }
</script>

        </div>
</template>

<script>
  
</script>
