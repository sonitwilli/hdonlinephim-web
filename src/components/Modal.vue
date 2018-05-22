<template>
  <div id="auth-modal">
    <!-- Modal -->
    <div class="modal fade modal-cuz" id="pop-auth" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-tabs">
          <ul id="md-list" class="nav nav-tabs" role="tablist">
            <li class="active"><a id="tab-login" href="#modal-login" role="tab" data-toggle="tab"><i
              class="icon-perm_identity mr5"></i><strong>Đăng nhập</strong></a></li>
            <li class="pull-right"><a class="close" data-dismiss="modal" aria-label="Close"><i
              class="icon-clear"></i></a></li>
          </ul>
        </div>
        <div class="modal-content tab-content">
          <div id="modal-login" class="tab-pane in fade active">
            <div class="modal-body">
              <div class="cuz-login-social">
                <p class="desc text-center">Xem Phim HD trực tuyến Miễn phí và Tải về các bộ phim mới nhất. Dành cho tất cả mọi người, mọi nơi, mọi thiết bị và mọi thứ :)</p>
                <div class="cls-list mt10">
                  <a href="http://hdonlinephim.com/facebook/redirect" class="btn btn-block btn-facebook">
                    <i class="fa fa-facebook-square mr10"></i>Facebook
                  </a>
                  <a href="http://hdonlinephim.com/google/redirect" class="btn btn-block btn-google">
                    <i class="fa fa-google-plus-square mr10"></i>Google+
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="modal-forgot" class="tab-pane in fade">
            <div class="modal-body">
              <p class="desc">Chúng tôi sẽ gửi mã ủy quyền cho email của bạn. Vui lòng điền vào mẫu dưới đây.</p>
              <form id="forgot-form">
                <div class="block mt10">
                  <input type="email" class="form-control" name="email" id="Email"
                         placeholder="Your email">
                </div>
                <div style="display: none;" id="forgot-success-message" class="alert alert-success"></div>
                <div style="display: none;" id="forgot-error-message" class="alert alert-danger"></div>
                <button id="forgot-submit" type="submit" class="btn btn-block btn-success btn-approve mt20">
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer text-center">
              <a data-toggle="tab" href="#modal-login" title="Back to login">
                <i class="fa fa-chevron-left mr10"></i> Back to login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ modal -->
  </div>
</template>

<script>
  export default {
    name: 'Modal'
  }
</script>
