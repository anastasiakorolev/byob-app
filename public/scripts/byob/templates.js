this["JST"] = this["JST"] || {};

this["JST"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<span id=\"todo-count\">\n<strong><%= activeCount %></strong> <%= activeCountLabel() %>\n</span>\n<ul id=\"filters\">\n<li class=\"all\">\n<a href=\"#/\">All</a>\n</li>\n<li class=\"active\">\n<a href=\"#/active\">Active</a>\n</li>\n<li class=\"completed\">\n<a href=\"#/completed\">Completed</a>\n</li>\n</ul>\n<button id=\"clear-completed\" <% if (!completedCount) { %>class=\"hidden\"<% } %>>Clear completed</button>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>BYOB</h1>";
},"useData":true});

this["JST"]["main_canvas"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\nMAIN CANVAS VIEW\n<img class=\"arrowHead\" src=\"images/leftArrow.png\" style=\"width:60px;opacity:0.5;display:inline-block;margin-right:60px;position:fixed;top:25%;left:20px;\" value=\"previous\"/>\n<img class=\"arrowHead\" src=\"images/rightArrow.png\" style=\"width: 60px;opacity: 0.5;display:inline-block;position:fixed;top:25%;right:20px;\" value=\"next\"/>\n\n<img class=\"arrowBody\" src=\"images/leftArrow.png\" style=\"width: 60px;opacity: 0.5;display:inline-block;margin-right:60px;position:fixed;top:65%;left:20px;\" value=\"previous\"/>\n<img class=\"arrowBody\" src=\"images/rightArrow.png\" style=\"width: 60px;opacity: 0.5;display:inline-block;position:fixed;top:65%;right:20px;\" value=\"next\"/>\n\n<button class=\"downloadFiles\">Download Print Files</button>\n</div>";
},"useData":true});

this["JST"]["root"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"todoapp\">\n<div id=\"header\"></div>\n<div id=\"main\"></div>\n<div id=\"canvas-area\"></div>\n<div id=\"canvas\"></div>\n<div id=\"footer\"></div>\n</div>";
},"useData":true});

this["JST"]["todo_item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"view\">\n<input class=\"toggle\" type=\"checkbox\" <% if (completed) { %>checked<% } %>>\n<label><%- title %></label>\n<button class=\"destroy\"></button>\n</div>\n<input class=\"edit\" value=\"<%- title %>\">";
},"useData":true});

this["JST"]["todo_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul></ul>";
},"useData":true});