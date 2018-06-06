<template>
  <header>
    <div class="header-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 logo-block">
            <!-- Header Logo -->
            <div class="logo"> <a title="Magento Commerce" href="http://htmldemo.themessoft.com/crocus/version5/index.html"><img alt="Magento Commerce" src="http://htmldemo.themessoft.com/crocus/version5/images/logo.png"> </a> </div>
            <!-- End Header Logo -->
          </div>
          <div class="col-lg-5 col-md-4 col-sm-4 col-xs-12 hidden-xs">
            <div class="search-box">
              <form action="http://htmldemo.themessoft.com/crocus/version5/cat" method="POST" id="search_mini_form" name="Categories">
                <input type="text" placeholder="Search entire store here..." value="Search" maxlength="70" name="search" id="search">
                <button type="button" class="search-btn-bg"><span class="glyphicon glyphicon-search"></span>&nbsp;</button>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12"> <a href="#" class="top-link-compare hidden-xs"><i class="compare"><div class="wish">Compare</div></i></a> <a href="#" title="My Wishlist" class="top-link-wishlist hidden-xs"><i class="fa fa-heart"><div class="wish">Wishlist</div></i></a>
            <div class="top-cart-contain pull-right">
              <!-- Top Cart -->
              <div class="mini-cart">
                <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle"> <a href="http://htmldemo.themessoft.com/crocus/version5/shopping_cart.html"> <div class="wish">Cart</div><span class="cart_count">0</span><span class="price hidden-xs"></span> </a> </div>
                <input id="cart-txt-heading" type="hidden" name="cart-txt-heading" value="My Cart ">
                <ul class="dropdown-menu pull-right top-cart-content arrow_box" style="display: none;">
                <li>
                 <p class="text-center noitem">Your shopping cart is empty!</p>
                </li>
                </ul>

                </div>

              <!-- Top Cart -->
              <div id="ajaxconfig_info" style="display:none"> <a href="#/"></a>
                <input value="" type="hidden">
                <input id="enable_module" value="1" type="hidden">
                <input class="effect_to_cart" value="1" type="hidden">
                <input class="title_shopping_cart" value="Go to shopping cart" type="hidden">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end header -->

    <!-- Navigation -->
    <nav>
      <div class="container">
        <div class="mm-toggle-wrap">
          <div class="mm-toggle"><i class="fa fa-bars"></i><span class="mm-label">Menu</span> </div>
        </div>
        <div class="nav-inner">
          <!-- BEGIN NAV -->
          <ul id="nav" class="hidden-xs">
            <li class="level0 parent drop-menu" id="nav-home"><a href="http://htmldemo.themessoft.com/crocus/version5/index.html" class="level-top"><span>Home</span></a> </li>
            <li class="level0 nav-6 level-top drop-menu"> <a class="level-top" href="#" > <span>Pages</span> </a>
              <ul class="level1">
                <li class="level2 first"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Grid</span></a> </li>
                <li class="level2 nav-10-2"> <a href="http://htmldemo.themessoft.com/crocus/version5/list.html"> <span>List</span> </a> </li>
                <li class="level2 nav-10-3"> <a href="http://htmldemo.themessoft.com/crocus/version5/product_detail.html"> <span>Product Detail</span> </a> </li>
                <li class="level2 nav-10-4"> <a href="http://htmldemo.themessoft.com/crocus/version5/shopping_cart.html"> <span>Shopping Cart</span> </a> </li>
                <li class="level2 parent"><a href="http://htmldemo.themessoft.com/crocus/version5/checkout.html"><span>Checkout</span></a> </li>
                <li class="level1 nav-10-4"> <a href="http://htmldemo.themessoft.com/crocus/version5/wishlist.html"> <span>Wishlist</span> </a> </li>
                <li class="level1"> <a href="http://htmldemo.themessoft.com/crocus/version5/dashboard.html"> <span>Dashboard</span> </a> </li>
                <li class="level1"> <a href="http://htmldemo.themessoft.com/crocus/version5/multiple_addresses.html"> <span>Multiple Addresses</span> </a> </li>
                              <li class="level1"><a href="http://htmldemo.themessoft.com/crocus/version5/quick_view.html"><span>Quick view</span></a> </li>
                <li class="level1"><a href="http://htmldemo.themessoft.com/crocus/version5/newsletter.html"><span>Newsletter</span></a> </li>
                <li class="level1"><a href="http://htmldemo.themessoft.com/crocus/version5/404error.html"><span>404 Error Page</span></a> </li>
                  <li class="level1"><a href="http://htmldemo.themessoft.com/crocus/version5/about_us.html"><span>About us</span></a> </li>
                   <li class="level1"><a href="http://htmldemo.themessoft.com/crocus/version5/contact_us.html"><span>Contact us</span></a> </li>
              </ul>
            </li>
            <li class="mega-menu"> <a class="level-top" href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Women</span></a>
              <div class="level0-wrapper dropdown-6col">
                <div class="container">
                  <div class="level0-wrapper2">
                    <div class="nav-add"> <a href="#"><img src="http://htmldemo.themessoft.com/crocus/version5/images/menu-banner.jpg" alt="download"> </a> </div>
                    <div class="nav-block nav-block-center">
                      <!--mega menu-->
                      <ul class="level0">
                        <li class="level3 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Stylish bag</span></a>
                          <ul class="level1">

                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Clutch Handbags</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Diaper Bags</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Bags</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Hobo handbags</span></a></li>
                            </ul>
                        </li>
                        <li class="level3 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>material bag</span></a>
                          <ul class="level1">

                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Beaded Handbags</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Fabric Handbags</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Leather Shoes</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Leather Handbags</span></a></li>
                            </ul>
                        </li>
                        <li class="level3 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>shoes</span></a>
                          <ul class="level1">
                            <li class="level2 nav-6-1-1"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Flat Shoes</span></a> </li>
                            <li class="level2 nav-6-1-1"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Flat Sandals</span></a> </li>
                            <li class="level2 nav-6-1-1"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Boots</span></a> </li>
                            <li class="level2 nav-6-1-1"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Crocs Shoes</span></a> </li>
                          </ul>
                        </li>
                        <li class="level3 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>jwellery</span></a>
                          <ul class="level1">

                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Pins &amp; Brooches</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Bracelets</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Necklaces &amp; Pendent</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Pendants</span></a></li>
                            </ul>
                        </li>
                        <li class="level3 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>dresses</span></a>
                          <ul class="level1">

                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Casual Dresses</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Evening</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Designer</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Party</span></a></li>
                            </ul>
                        </li>
                        <li class="level3 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>swimwear</span></a>
                          <ul class="level1">

                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Swimsuits</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Beach Clothing</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Clothing</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Bikinis</span></a></li>
                            </ul>
                        </li>
                      </ul>
                      <!--level0-->
                    </div>
                    <!--nav-block nav-block-center-->
                    <!--nav-block nav-block-center-->

                  </div>
                  <!--level0-wrapper2-->
                </div>
                <!--container-->
              </div>
              <!--level0-wrapper dropdown-6col-->
              <!--mega menu-->
            </li>
            <li class="mega-menu"> <a class="level-top" href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Men</span></a>
              <div class="level0-wrapper dropdown-6col">
                <div class="container">
                  <div class="level0-wrapper2">
                    <div class="nav-block nav-block-center">
                      <div class="col-2">
                        <div class="menu_image1"> <a title="" href="#"><img alt="menu_image" src="http://htmldemo.themessoft.com/crocus/version5/images/watch.png"> </a> </div>
                      </div>

                      <!--mega menu-->
                      <div class="col-1">
                        <ul class="level0">
                          <li class="level1 nav-6-1 parent item"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Shoes</span></a>
                            <ul class="level1">
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Sport Shoes</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Casual Shoes</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Canvas Shoes</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Heels</span></a></li>
                            </ul>
                        <li class="level1 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Dresses</span></a>
                            <ul class="level1">
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Casual Dresse</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Evening</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Designer</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Party</span></a></li>
                            </ul>
                        </li>
                          <li class="level1 nav-6-1 parent item"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Jackets</span></a>
                            <ul class="level1">
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Coats</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Formal Jackets</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Leather Jackets</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Blazers</span></a></li>
                            </ul>
                          </li>
                          <li class="level1 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Watches</span></a>
                            <ul class="level1">
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Fasttrack</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Casio</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Titan</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Tommy-Hilfiger</span></a></li>
                            </ul>
                         </li>
                          <li class="level1 nav-6-1 parent item"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Sunglasses</span></a>
                            <ul class="level1">
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Ray Ban</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Fasttrack</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Police</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Oakley</span></a></li>
                            </ul>
                          </li>
                          <li class="level1 nav-6-1 parent item"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Accesories</span></a>
                            <ul class="level1">
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Backpacks</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Wallets</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Laptops Bags</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Belts</span></a></li>
                            </ul>
                        </li>
                        </ul>
                        <!--level0-->
                      </div>
                    </div>
                    <!--nav-block nav-block-center-->

                  </div>
                  <!--level0-wrapper2-->
                </div>
                <!--container-->
              </div>
              <!--level0-wrapper dropdown-6col-->
              <!--mega menu-->
            </li>
            <li class="mega-menu"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html" class="level-top"> <span>Electronics</span> </a>
               <div class="level0-wrapper dropdown-6col" style="left: 0px; display: none;">
                 <div class="container">
                    <div class="level0-wrapper2">

           <!-- top Menu images -->

          <div class="nav-block nav-block-center grid12-8 itemgrid itemgrid-4col">

           <!-- left Menu images -->
                 <div class="">
                  <ul class="level0">
                    <li class="level1 nav-6-1 parent item"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Mobiles</span></a>
                            <ul class="level1">
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Samsung</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Nokia</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Pendrives</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>IPhone</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Sony</span></a></li>
                            </ul>
                    </li>
                    <li class="level1 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Accesories</span></a>
                            <ul class="level1">
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>External Hard Disk</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Mobile Memory Cards</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Cases &amp; Covers</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Mobile Headphones</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Bluetooth Headsets</span></a></li>
                            </ul>
                    </li>
                    <li class="level1 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Cameras</span></a>
                            <ul class="level1">
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Camcorders</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Point &amp; Shoot</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Digital SLR</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Camera Accesories</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>PC Components</span></a></li>
                            </ul>
                    </li>
                    <li class="level1 nav-6-1 parent item"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Audio &amp; Video</span></a>
                            <ul class="level1">
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>MP3 Players</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>IPods</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Headphones</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Speakers</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Video Players</span></a></li>
                            </ul>
                    </li>
           </ul>
         </div><!-- level -->

           <!-- bottom Menu images -->
        </div> <!--nav-block nav-block-center-->

        <!-- Right Menu images -->
           <div class="nav-block nav-block-right std grid12-4">
            <div class="menu_image1">
            <a title="" href="#"><img alt="menu_image" src="http://htmldemo.themessoft.com/crocus/version5/images/laptop.jpg"> </a>
            </div>
           </div>

      </div>  <!-- level0-wrapper2 -->
    </div><!-- container -->
   </div>
 </li>
            <li class="mega-menu"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html" class="level-top"><span>Furniture</span></a>
              <div class="level0-wrapper dropdown-6col" style="left: 0px; display: none;">
                <div class="container">
                  <div class="level0-wrapper2">

           <!-- top Menu images -->

          <div class="nav-block nav-block-center grid12-8 itemgrid itemgrid-4col">

           <!-- left Menu images -->

          <div class="">

              <ul class="level0">
               <li class="level1 nav-6-1 parent item"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Living Room</span></a>
                  <ul class="level1">
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Racks &amp; Cabinets</span></a></li>
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Sofas</span></a></li>
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Chairs</span></a></li>
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Tables</span></a></li>
                   </ul>
               </li>
               <li class="level1 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Dining &amp; Bar</span></a>
                  <ul class="level1">
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Dining Table Sets</span></a></li>
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Serving Trolleys</span></a></li>
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Bar Counters</span></a></li>
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Dining Cabinets</span></a></li>
                  </ul>
               </li>
               <li class="level1 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Kitchen</span></a>
                  <ul class="level1">
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Kitchen Racks</span></a></li>
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Kitchen Fillings</span></a></li>
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Wall Units</span></a></li>
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Benches &amp; Stools</span></a></li>
                  </ul>
               </li>
                 <li class="level1 nav-6-1 parent item"> <a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Appliances</span></a>
                  <ul class="level1">
                     <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Vaccum Cleaners</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Indoor Lighting</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Kitchen Tools</span></a></li>
                            <li class="level2 nav-6-1-1"><a href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Water Purifier</span></a></li>
                  </ul>
                 </li>
                  </ul>
          </div><!-- level -->

           <!-- bottom Menu images -->

        </div> <!--nav-block nav-block-center-->

        <!-- Right Menu images -->

      </div>  <!-- level0-wrapper2 -->
    </div><!-- container -->
  </div>
 </li>
            <li class="mega-menu"> <a class="level-top" href="http://htmldemo.themessoft.com/crocus/version5/grid.html"><span>Kids </span></a> </li>
            <li class="nav-custom-link mega-menu"> <a href="#" class="level-top"> <span>Jwellery</span> </a></li>
          </ul>
          <!--nav-->
        </div>
      </div>
    </nav>

    <!-- end nav -->
  </header>
</template>

<script>
export default {
  asyncData ({ params }) {
    return axios.get('http://api.hdonlinephim.com/api/setting')
    .then((res) => {
      console.log(res);
    })
  }
}
</script>
