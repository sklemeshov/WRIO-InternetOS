﻿(function () {

    var tour = new Tour({
        storage: false,
        template: '<div class="popover tour"><div class="arrow"></div><h3 class="popover-title"></h3><img src="img/profile-ia.png" class="profile-ia"><div class="popover-content"></div><div class="popover-navigation col-xs-12"><div class="btn-group"><button class="btn btn-sm btn-default go-to" data-go-to-step="0" data-role="prev">Repeat</button></div><div class="btn-group pull-right"><button class="btn btn-sm btn-default" data-role="end">End conversation</button></div></div></div>'
    });

    tour.addSteps([
      {
          //0
          element: ".step0",
          placement: "bottom",
          title: 'Create Facebook post',
          content: 'После того как вы откроете Facebook, найдите в правом верхнем углу заинтересовавшего вас поста иконку и кликнете по ней.<div class="col-xs-12"><img src="img/conversations/conversation-create-facebook-1.png" /></div><div class="col-xs-12">После чего выберите "Embed post", откроется окно где вы сможете скопировать необходимый код</div><div class="col-xs-12"><img src="img/conversations/conversation-create-facebook-2.png" /></div><div class="col-xs-12">Затем вставьте его в указанное поле и нажмите кнопку "Submit"</div><ul class="nav nav-pills nav-stacked"><li><a href="#">IA, пожалуйста, вставь любой пост для примера</a></li><li><a href="#">Все понятно! [назад]</a></li></ul>'
      }
    ]);

    // Initialize the tour
    tour.init();

    // Start the tour
    tour.start();

    $(document).on("click", ".go-to", function (e) {
        var step = parseInt($(this).data("go-to-step"));
        tour.goTo(step);
    });

}());