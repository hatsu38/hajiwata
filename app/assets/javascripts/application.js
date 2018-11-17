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

  var window_height = $(window).height(),
      now_scroll_pos = $(this).scrollTop(),
      front_skill = $('#front_skill').offset().top-window_height,
      back_skill = $('#back_skill').offset().top-window_height,
      server_skill = $('#server_skill').offset().top-window_height,

      project_title = $("#project_title").offset().top,
      skill_title = $("#skill_title").offset().top,
      act_title = $("#act_title").offset().top,

      tedradio = $("#tedradio_project").offset().top-window_height,
      metagallery = $("#metagallery_project").offset().top-window_height,
      cafepedia = $("#cafepedia_project").offset().top-window_height,

      github = $(".github_contribution").offset().top-window_height,

      book_1 = $(".book_1").offset().top-window_height;
      book_2 = $(".book_2").offset().top-window_height;
      book_3 = $(".book_3").offset().top-window_height;
      book_4 = $(".book_4").offset().top-window_height;
      book_5 = $(".book_5").offset().top-window_height;
      book_6 = $(".book_6").offset().top-window_height;

  front_skill_desplay(now_scroll_pos,front_skill);
  back_skill_desplay(now_scroll_pos,back_skill);
  server_skill_desplay(now_scroll_pos,server_skill);

  project_title_desplay(now_scroll_pos,project_title,skill_title);
  skill_title_desplay(now_scroll_pos,skill_title,act_title);
  act_title_desplay(now_scroll_pos,act_title);

  tedradio_desplay(now_scroll_pos,tedradio);
  metagallery_desplay(now_scroll_pos,metagallery);
  cafepedia_desplay(now_scroll_pos,cafepedia);

  github_desplay(now_scroll_pos,github);

  book_1_desplay(now_scroll_pos,book_1);
  book_2_desplay(now_scroll_pos,book_2);
  book_3_desplay(now_scroll_pos,book_3);
  book_4_desplay(now_scroll_pos,book_4);
  book_5_desplay(now_scroll_pos,book_5);
  book_6_desplay(now_scroll_pos,book_6);
  $(window).scroll(function() {
    var now_scroll_pos = $(this).scrollTop();

    front_skill_desplay(now_scroll_pos,front_skill);
    back_skill_desplay(now_scroll_pos,back_skill);
    server_skill_desplay(now_scroll_pos,server_skill);

    project_title_desplay(now_scroll_pos,project_title,skill_title);
    skill_title_desplay(now_scroll_pos,skill_title,act_title);
    act_title_desplay(now_scroll_pos,act_title);

    tedradio_desplay(now_scroll_pos,tedradio);
    metagallery_desplay(now_scroll_pos,metagallery);
    cafepedia_desplay(now_scroll_pos,cafepedia);

    github_desplay(now_scroll_pos,github);

    book_1_desplay(now_scroll_pos,book_1);
    book_2_desplay(now_scroll_pos,book_2);
    book_3_desplay(now_scroll_pos,book_3);
    book_4_desplay(now_scroll_pos,book_4);
    book_5_desplay(now_scroll_pos,book_5);
    book_6_desplay(now_scroll_pos,book_6);
  });

});

function front_skill_desplay(now_scroll_pos,front_skill){
  if(now_scroll_pos >= front_skill){
    $("#html_progress").addClass("lv_five");
    $("#css_progress").addClass("lv_five");
    $("#js_progress").addClass("lv_four");
    $("#jquery_progress").addClass("lv_four");
    $("#vue_progress").addClass("lv_three");
  }else{
    $("#html_progress").removeClass("lv_five");
    $("#css_progress").removeClass("lv_five");
    $("#js_progress").removeClass("lv_four");
    $("#jquery_progress").removeClass("lv_four");
    $("#vue_progress").removeClass("lv_three");
  }
}
function back_skill_desplay(now_scroll_pos,back_skill){
  if(now_scroll_pos >= back_skill){
    $("#ruby_progress").addClass("lv_four");
    $("#ror_progress").addClass("lv_four");
  }else{
    $("#ruby_progress").removeClass("lv_four");
    $("#ror_progress").removeClass("lv_four");
  }
}

function server_skill_desplay(now_scroll_pos,server_skill){
  if(now_scroll_pos >= server_skill){
    $("#heroku_progress").addClass("lv_three");
    $("#aws_progress").addClass("lv_two");
  }else{
    $("#heroku_progress").removeClass("lv_three");
    $("#aws_progress").removeClass("lv_two");
  }
}

function project_title_desplay(now_scroll_pos,project_title,skill_title){
  if(now_scroll_pos >= project_title && now_scroll_pos <= skill_title){
    $("#project_title").addClass("section_title_top");
    $("#skill_title").removeClass("section_title_top");
    $("#act_title").removeClass("section_title_top");
  }else{
    $("#project_title").removeClass("section_title_top");
  }
}
function skill_title_desplay(now_scroll_pos,skill_title,act_title){
  if(now_scroll_pos >= skill_title && now_scroll_pos <= act_title){
    $("#skill_title").addClass("section_title_top");
    $("#project_title").removeClass("section_title_top");
    $("#act_title").removeClass("section_title_top");
  }
}

function act_title_desplay(now_scroll_pos,act_title){
  if(now_scroll_pos >= act_title){
    $("#act_title").addClass("section_title_top");
    $("#skill_title").removeClass("section_title_top");
    $("#project_title").removeClass("section_title_top");
  }
}

function tedradio_desplay(now_scroll_pos,tedradio){
  if(now_scroll_pos >= tedradio){
    $("#tedradio_project").addClass("fadein_anime");
  }else{
    $("#tedradio_project").removeClass("fadein_anime");
  }
}
function metagallery_desplay(now_scroll_pos,metagallery){
  if(now_scroll_pos >= metagallery){
    $("#metagallery_project").addClass("fadein_anime");
  }else{
    $("#metagallery_project").removeClass("fadein_anime");
  }
}
function cafepedia_desplay(now_scroll_pos,cafepedia){
  if(now_scroll_pos >= cafepedia){
    $("#cafepedia_project").addClass("fadein_anime");
  }else{
    $("#cafepedia_project").removeClass("fadein_anime");
  }
}

function github_desplay(now_scroll_pos,github){
  if(now_scroll_pos >= github){
    $(".github_contribution").addClass("fadein_anime");
  }else{
    $(".github_contribution").removeClass("fadein_anime");
  }
}

function book_1_desplay(now_scroll_pos,book_1){
  if(now_scroll_pos >= book_1){
    $(".book_1").addClass("fadein_anime");
  }else{
    $(".book_1").removeClass("fadein_anime");
  }
}

function book_2_desplay(now_scroll_pos,book_2){
  if(now_scroll_pos >= book_2){
    $(".book_2").addClass("fadein_anime");
  }else{
    $(".book_2").removeClass("fadein_anime");
  }
}
function book_3_desplay(now_scroll_pos,book_3){
  if(now_scroll_pos >= book_3){
    $(".book_3").addClass("fadein_anime");
  }else{
    $(".book_3").removeClass("fadein_anime");
  }
}
function book_4_desplay(now_scroll_pos,book_4){
  if(now_scroll_pos >= book_4){
    $(".book_4").addClass("fadein_anime");
  }else{
    $(".book_4").removeClass("fadein_anime");
  }
}
function book_5_desplay(now_scroll_pos,book_5){
  if(now_scroll_pos >= book_5){
    $(".book_5").addClass("fadein_anime");
  }else{
    $(".book_5").removeClass("fadein_anime");
  }
}
function book_6_desplay(now_scroll_pos,book_6){
  if(now_scroll_pos >= book_6){
    $(".book_6").addClass("fadein_anime");
  }else{
    $(".book_6").removeClass("fadein_anime");
  }
}

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

function booklog_minishelf_img(json) {
  var items = json["books"];
  var html = "";

  for(var i = 0; i < items.length; i++) {
    var elem = items[i];
    if(i <= 4){
      var text = '<li class="bookImage hidden_anime book_1"><a href="' + elem["url"] + '" target="_blank"><img src="' + elem["image"] + '"alt="'+elem["title"]+'" /></a></li>';
    }else if(i > 4 && i <= 9){
      var text = '<li class="bookImage hidden_anime book_2"><a href="' + elem["url"] + '" target="_blank"><img src="' + elem["image"] + '"alt="'+elem["title"]+'" /></a></li>';
    }else if(i > 9 && i <= 14){
      var text = '<li class="bookImage hidden_anime book_3"><a href="' + elem["url"] + '" target="_blank"><img src="' + elem["image"] + '"alt="'+elem["title"]+'" /></a></li>';
    }else if(i > 14 && i <= 19){
      var text = '<li class="bookImage hidden_anime book_4"><a href="' + elem["url"] + '" target="_blank"><img src="' + elem["image"] + '"alt="'+elem["title"]+'" /></a></li>';
    }else if(i > 19 && i <= 24){
      var text = '<li class="bookImage hidden_anime book_5"><a href="' + elem["url"] + '" target="_blank"><img src="' + elem["image"] + '"alt="'+elem["title"]+'" /></a></li>';
    }else if(i > 24 && i <= 29){
      var text = '<li class="bookImage hidden_anime book_6"><a href="' + elem["url"] + '" target="_blank"><img src="' + elem["image"] + '"alt="'+elem["title"]+'" /></a></li>';
    }
    html += text;
  }
  document.getElementById("recent_books").innerHTML = html;
}

