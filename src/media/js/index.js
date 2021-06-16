import { TweenMax } from 'gsap';
import { Draggable } from 'gsap/Draggable';
global.TweenMax = TweenMax;
global.$ = global.jQuery = require('jquery');
global.Draggable = Draggable;
require('./utils/jqExtensions');
require('slick-carousel');
import Inputmask from 'inputmask';

// prettier-ignore
global.ProjectName = new function ProjectName() { // eslint-disable-line
	this.env = require('./utils/ENV');
	this.dom = require('./utils/DOM');
	this.utils = require('./utils/Utils');

	this.classes = {
		Callback: require('./classes/Callback')
	};

	this.helpers = {};
	this.modules = {
		Popups: require('./modules/Popups'),
		SlickSliders: require('./modules/SlickSlider'),
	};

	// Startup
	$(() => {
		// Remove _loading modificator
		this.dom.$html.removeClass('_loading');
	

		var selector = document.getElementsByClassName("footer-form__input");
		var im = new Inputmask({
			mask: "+9(999) 999-99-99",
			showMaskOnHover: false
		});
		im.mask(selector);
		
	});
}();

if (module.hot) {
	module.hot.accept();
}
