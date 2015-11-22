var mainModule = (function() {
	// приватные св-ва и методы

	// прослушка событий
	var _setUpListners = function() {
		$('.nav-menu__item').on('click', _menuDrop)
	},
		_menuDrop = function(e) {
			$this = $(this),
			container = $this.closest('.nav-menu__list'),
			items = container.find('.nav-menu__item'),
			drops = $('.nav-menu-drop__list'),
			back = drops.find('.nav-menu-drop__item:first');

			items.fadeOut(function() {
				drops.fadeIn();

			});

			back.on('click', function() {
				drops.fadeOut(function() {
					items.fadeIn();

			});
		});
	};

	
	// публичные св-ва и методы
	return {
		init : function() {
			_setUpListners();
		}
	};
})();

$(document).ready(function($) {

 if ($('.nav-menu__list').length) {
 		mainModule.init();
 	}

}); // --> end
 