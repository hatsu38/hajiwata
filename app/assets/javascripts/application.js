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
      front_skill = $('#front_skill').offset().top-window_height+350+605,
      back_skill = $('#back_skill').offset().top-window_height+250+605,
      server_skill = $('#server_skill').offset().top-window_height+300+605,

      project_title = $("#project_title").offset().top,
      skill_title = $("#skill_title").offset().top+605,
      act_title = $("#act_title").offset().top+605,

      tedradio = window_height - project_title,
      metagallery = tedradio+200,
      cafepedia = metagallery+200;

    front_skill_desplay(now_scroll_pos,front_skill);
    back_skill_desplay(now_scroll_pos,back_skill);
    server_skill_desplay(now_scroll_pos,server_skill);

    project_title_desplay(now_scroll_pos,project_title,skill_title);
    skill_title_desplay(now_scroll_pos,skill_title,act_title);
    act_title_desplay(now_scroll_pos,act_title);

    tedradio_desplay(now_scroll_pos,tedradio);
    metagallery_desplay(now_scroll_pos,metagallery);
    cafepedia_desplay(now_scroll_pos,cafepedia);

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
  });

});

function front_skill_desplay(now_scroll_pos,front_skill){
  if(now_scroll_pos >= front_skill){
    $("#html_progress").addClass("lv_five");
    $("#css_progress").addClass("lv_five");
    $("#js_progress").addClass("lv_four");
    $("#jquery_progress").addClass("lv_four");
    $("#vue_progress").addClass("lv_three");
  }
}
function back_skill_desplay(now_scroll_pos,back_skill){
  if(now_scroll_pos >= back_skill){
    $("#ruby_progress").addClass("lv_four");
    $("#ror_progress").addClass("lv_four");
  }
}

function server_skill_desplay(now_scroll_pos,server_skill){
  if(now_scroll_pos >= server_skill){
    $("#heroku_progress").addClass("lv_three");
    $("#aws_progress").addClass("lv_two");
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
    $("#tedradio_project").fadeIn("slow");
  }
}
function metagallery_desplay(now_scroll_pos,metagallery){
  if(now_scroll_pos >= metagallery){
    $("#metagallery_project").fadeIn("slow");
  }
}
function cafepedia_desplay(now_scroll_pos,cafepedia){
  if(now_scroll_pos >= cafepedia){
    $("#cafepedia_project").fadeIn("slow");
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
    var text = '<li class="bookImage"><a href="' + elem["url"] + '" target="_blank"><img src="' + elem["image"] + '"alt="'+elem["title"]+'" /></a></li>';
    html += text;
  }
  document.getElementById("recent_books").innerHTML = html;
}

