// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){
  var window_height = $(window).height();
  var front_skill = $('#front_skill').offset().top-window_height+350;
  var back_skill = $('#back_skill').offset().top-window_height+250;
  var server_skill = $('#server_skill').offset().top-window_height+300;

  $(window).scroll(function() {
    var now_scroll_pos = $(this).scrollTop();
    if(now_scroll_pos >= front_skill){
      console.log("from");
      $("#html_progress").addClass("lv_five");
      $("#css_progress").addClass("lv_five");
      $("#js_progress").addClass("lv_four");
      $("#jquery_progress").addClass("lv_four");
      $("#vue_progress").addClass("lv_three");
    }

    if(now_scroll_pos >= back_skill){
      $("#ruby_progress").addClass("lv_four");
      $("#ror_progress").addClass("lv_four");
    }

    if(now_scroll_pos >= server_skill){
      $("#heroku_progress").addClass("lv_three");
      $("#aws_progress").addClass("lv_two");
    }
  });

});

function booklog_minishelf(json) {
  var items = json["books"];
  var html = "";

  for(var i = 0; i < items.length; i++) {
    var elem = items[i];
    var text = '<ul class="bookshelf"><li class="bookImage"><a href="' + elem["url"] + '" target="_blank"><img src="' + elem["image"] + '" title="' + elem["title"] + '"width="52" height="75" alt="No Image" /></a></li><li class="bookTitle"><a href="' + elem["url"] + '" target="_blank">' + elem["title"] + '</a><div class="bookAuthor">' + elem["author"] + '</div></li></ul>';
    html += text;
  }
  document.getElementById("recent_books").innerHTML = html;
}

