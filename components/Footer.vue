<template>
  <div class="footer">

    <div class="footer-content clearfix">
        <div class="container">
            <div class="row">
                    <div class="footer-box col-md-3 col-sm-12 col-xs-12">
                        <div class="item">
                            <h3>
                                <span>Giới thiệu</span>
                            </h3>
                            <div class="toggle-footer">
                                    <ul>
                                                        <li>
                                                            <a href="gioi-thieu.html">
                                                                Về ch&#250;ng t&#244;i
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="gioi-thieu.html">
                                                                Lĩnh vực hoạt động
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="content/hoi-dap.html">
                                                                Hỏi đ&#225;p
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="gioi-thieu.html">
                                                                Quy chế hoạt động
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="content/tuyen-dung.html">
                                                                Tuyển dụng
                                                            </a>
                                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-box col-md-3 col-sm-12 col-xs-12">
                        <div class="item">
                            <h3>
                                <span>Trợ gi&#250;p</span>
                            </h3>
                            <div class="toggle-footer">
                                    <ul>
                                                        <li>
                                                            <a href="content/huong-dan-thanh-toan.html">
                                                                Hướng dẫn thanh to&#225;n
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="content/quy-dinh-doi-tra.html">
                                                                Quy định đổi trả
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="content/qui-dinh-thao-luan.html">
                                                                Qui định thảo luận
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="content/chinh-sach-bao-mat.html">
                                                                Ch&#237;nh s&#225;ch bảo mật
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="content/chinh-sach-ban-hang.html">
                                                                Ch&#237;nh s&#225;ch b&#225;n h&#224;ng
                                                            </a>
                                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                <div class="footer-box box-address col-md-3 col-sm-12 col-xs-12">
                    <div class="item">
                        <h3>
                            Thông tin công ty
                        </h3>
                        <div class="box-address-content toggle-footer">
                            <b>C&#212;NG TY TNHH PH&#193;T TRIỂN C&#212;NG NGHỆ RUNTIME</b>
                            <p><i class="fa fa-map-marker"></i> 5/12A Quang Trung, P.14, Q.G&#242; Vấp, Tp.HCM</p>
                            <p>
                                <i class="fa fa-envelope"></i>
                                <a href="mailto:info@runtime.vn">info@runtime.vn</a>
                            </p>
                            <p>
                                <i class="fa fa-phone"></i>
                                Phone: (08) 66 85 85 38
                            </p>
                        </div>
                    </div>
                </div>
                <div class="footer-box box-social col-md-3 col-sm-12 col-xs-12">
                    <div class="item">
                        <h3>
                            Facebook
                        </h3>
                        <div class="toggle-footer">
                            <div class="fb-like-box" data-href="https://www.facebook.com/runtime.vn" data-width="289"
                                 data-height="190" data-colorscheme="dark" data-show-faces="true" data-header="false"
                                 data-stream="false" data-show-border="false">
                            </div>
                            <div class="social-icon">
                                <ul>
                                    <li><a target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="https://www.facebook.com/runtime.vn" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li><a target="_blank"><i class="fa fa-youtube"></i></a></li>
                                    <li><a target="_blank"><i class="fa fa-twitter "></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-box box-letter col-md-3 col-sm-12 col-xs-12 hide">
                    <div class="item">
                        <h3>
                            Đăng ký nhận tin
                        </h3>
                        <div class="letter-title">
                            <span>Hộp thư</span><i class="icon-title"></i>
                        </div>
                        <div class="letter-content">
                            <div class="new-paper">
                                <div class="input-box">
                                    <input type="text" name="email" id="txtNewsletter" class="input-text form-control" value="" placeholder="Your Emain Address" />
                                </div>
                                <div class="button text-center">
                                    <a class="btn btn-primary">Nhận tin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script type="text/javascript">
    var responsiveflag = false;
    $(document).ready(function(){
        responsiveResize();
        $(window).resize(responsiveResize);
    });
    function responsiveResize()
    {
        if ($(window).width() <= 767 && responsiveflag == false)
        {
            accordion('enable');
            accordionFooter('enable');
            responsiveflag = true;
        }
        else if ($(window).width() >= 768)
        {
            accordion('disable');
            accordionFooter('disable');
            responsiveflag = false;
        }

    }

    function accordionFooter(status)
    {
        if(status == 'enable')
        {
            $('.footer .footer-box h3').on('click', function(){
                $(this).toggleClass('active').parent().find('.toggle-footer').stop().slideToggle('medium');
            })
            $('.footer').addClass('accordion').find('.toggle-footer').slideUp('fast');
        }
        else
        {

            $('.footer .footer-box h3').removeClass('active').off().parent().find('.toggle-footer').removeAttr('style').slideDown('fast');
            $('.footer').removeClass('accordion');
        }
    }

    function accordion(status)
    {
        //leftColumnBlocks = $('#left_column');
        //if(status == 'enable')
        //{
        //    var accordion_selector = '.footer .footer-box h3';
        //    $(accordion_selector).on('click', function(e){
        //        $(this).toggleClass('active').parent().find('.block_content').stop().slideToggle('medium');
        //    });
        //    $('#right_column, #left_column').addClass('accordion').find('.block .block_content').slideUp('fast');
        //    if (typeof(ajaxCart) !== 'undefined')
        //        ajaxCart.collapse();
        //}
        //else
        //{
        //    $('#right_column .block .title_block, #left_column .block .title_block, #left_column #newsletter_block_left h4').removeClass('active').off().parent().find('.block_content').removeAttr('style').slideDown('fast');
        //    $('#left_column, #right_column').removeClass('accordion');
        //}
    }

</script>        
</div>
</template>
