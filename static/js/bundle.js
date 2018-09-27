'use strict';

/**
 * Make an array from any list with length and indexed elements
 * @return {NodeListOf|Array|any} list 
 */
function from(list)
{
	if ('from' in Array)
	{
		return Array.from(list);
	}
	else
	{
		var arr = new Array(list.length);
		if (typeof list.length === 'number')
		{
			for (var i = 0; i < list.length; i++)
			{
				arr.push(list[i]);
			}
		}
		return arr;
	}
}

// Menu module
var Menu = function () {
	var
	/**
  * This classname opens menu on click
  * @type {String}
  */
	OPENED_CLASSNAME = "aside-opened";
	/**
  * Main function-constructor to create menu
  * @param {Object} object Object with props
  */
	function Menu(object) {
		var menuSelector = object.menu || null;
		var buttonSelector = object.trigger || null;

		if (menuSelector && buttonSelector) {
			this.menu = document.querySelector(menuSelector);
			this.trigger = document.querySelectorAll(buttonSelector);

			if (this.trigger.length > 0) {
				// var triggerLength = this.trigger.length;
				var arrayFromTriggers = from(this.trigger);
				var self = this;
				arrayFromTriggers.map(function (trigger) {
					trigger.addEventListener('click', function () {

						self.toggle();
					});
				});
			}
		}

		/*
   * Toggle menu by className
   * @return {undefined}
   */
		this.toggle = function () {
			console.log(this.menu.classList.contains(OPENED_CLASSNAME));
			if (this.menu.classList.contains(OPENED_CLASSNAME)) {
				this.menu.classList.remove(OPENED_CLASSNAME);
			} else {
				this.menu.classList.add(OPENED_CLASSNAME);
			}
		};

		/**
   * Change OPENED_CLASSNAME
   * @param {String} className
   */
		this.setOpenedClassName = function (className) {
			if (typeof className === 'string') OPENED_CLASSNAME = className;
		};
	}

	return Menu;
}();

document.addEventListener('DOMContentLoaded', function () 
{
	var m = new Menu({
		menu: '.js-menu',
		trigger: '.js-trigger'
	});
});