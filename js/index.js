const BOX_SEARCH_ACTIVE = 'box__header--searchActive';
const BOX_MENU_ACTIVE = 'box__header--menuActive';

let $boxHeader = $(".box__header");

let selectorVeichle = {
  attachHandler() {
    let $options = this.$el.find("li");

    $options.on("click", function(e) {
      e.preventDefault();
      $options.removeClass("selected");
      $(this).addClass("selected");
    });
  },

  init($el) {
    this.$el = $el;
    this.attachHandler();
  }
};

let search = {
  attachHandler() {
    this.$el.find("button").on(
      "click",
      function(e) {
        $boxHeader.removeClass(BOX_MENU_ACTIVE);
        $boxHeader.toggleClass(BOX_SEARCH_ACTIVE);
      }.bind(this)
    );
  },

  init($el) {
    this.$el = $el;
    this.attachHandler();
  }
};

let menu = {
  attachHandler() {
    this.$el.find("button").on(
      "click",
      function(e) {
        $boxHeader.removeClass(BOX_SEARCH_ACTIVE);
        $boxHeader.toggleClass(BOX_MENU_ACTIVE);
      }.bind(this)
    );
  },

  init($el) {
    this.$el = $el;
    this.attachHandler();
  }
};


selectorVeichle.init($boxHeader.find(".options"));
search.init($boxHeader.find(".search"));
menu.init($boxHeader.find(".menu"));