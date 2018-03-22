this["JST"] = this["JST"] || {};

this["JST"]["combined"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"canvas\"></div>\n<div id=\"selector\"></div>";
},"useData":true});

this["JST"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>BYOB</p>";
},"useData":true});

this["JST"]["main_canvas"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n<img class=\"arrowHead\" src=\"images/leftArrow.png\" style=\"width:60px;opacity:0.5;display:inline-block;margin-right:60px;position:fixed;top:25%;left:20px;\" value=\"previous\"/>\n<img class=\"arrowHead\" src=\"images/rightArrow.png\" style=\"width: 60px;opacity: 0.5;display:inline-block;position:fixed;top:25%;right:20px;\" value=\"next\"/>\n\n<img class=\"arrowBody\" src=\"images/leftArrow.png\" style=\"width: 60px;opacity: 0.5;display:inline-block;margin-right:60px;position:fixed;top:65%;left:20px;\" value=\"previous\"/>\n<img class=\"arrowBody\" src=\"images/rightArrow.png\" style=\"width: 60px;opacity: 0.5;display:inline-block;position:fixed;top:65%;right:20px;\" value=\"next\"/>\n\n<button class=\"downloadFiles\">Download Print Files</button>\n</div>";
},"useData":true});

this["JST"]["part_viewer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["JST"]["root"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"todoapp\">\n<div id=\"header\"></div>\n<div id=\"main\"></div>\n<div id=\"canvas-area\"></div>\n<div id=\"footer\"></div>\n</div>";
},"useData":true});

this["JST"]["selection"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"selection-container\">\n<div class=\"selection-title\">THIS IS A TITLE</div>\n<button class=\"button part-selection-button\"></button>\n</div>";
},"useData":true});