;(function ( $, window, undefined ) {
  var pluginName = 'simpleTabs',
      document = window.document,
      defaults = {
        propertyName: "value"
      };

  function Plugin( element, options ) {
    this.element = element;
    this.options = $.extend( {}, defaults, options) ;
    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype.init = function () {
    $(this.element).find("li").each(function(){
      var firstClass = $(this).attr("class").split(' ')[0];
      if (!$(this).hasClass("active")) {
        $("#"+firstClass).hide();
      }
      $(this).bind('click', Plugin.prototype.tabClick);
    });
  };
  
  Plugin.prototype.tabClick = function(e) {
    $(this).addClass("active");
    var firstClass = $(this).attr("class").split(' ')[0];
    $("#"+firstClass).show();
    $(this).siblings().each(function(){
      var firstClass = $(this).attr("class").split(' ')[0];
      $(this).removeClass("active");
      $("#"+firstClass).hide();
    });
    return e.preventDefault();
  }
  
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  }

}(jQuery, window));
