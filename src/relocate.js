/*

jQuery Plugin Boilerplate

Using examples:

$('#my_el').relocate('after', 'footer .sometarget');

$('#my_el').relocate('origin');

*/

(function ($) {

		// PLUGIN NAME

		var pluginName = 'relocate'; 


		// PRIVATE VARIABLES
        
   		var data_id = 'relocate_data';
		var data_target_id = 'relocate_data_target';
		var s_ph = '<span style="display:none;" />';

		// PUBLIC METHODS
        
		var methods = {
			init: function (options) { },

			after: function(target) {
				return this.each(function(){
					var $this = $(this),
						data = getElementData($this),
						target_data = getTargetData(target);
					
					if (target_data.target_after_ph.size() > 0) {
						//move the element after the target
				    	target_data.target_after_ph.after($this.detach());
					}

				});
			},

			before: function (target) {
			    return this.each(function () {
			        var $this = $(this),
						data = getElementData($this),
						target_data = getTargetData(target);

			        if (target_data.target_before_ph.size() > 0) {
			            //move the element before the target
			            target_data.target_before_ph.after($this.detach());
			        }

			    });
			},

			origin: function() {
				return this.each(function(){
					var $this = $(this),
						data = getElementData($this);

					if (data.original_ph.size() > 0) {
						//move the element after the original placeholder
				    	data.original_ph.after($this.detach());
					}
				});
			}

		};


		//PRIVATE FUNCTIONS

		var getElementData = function(el) {
			var data = el.data(data_id);
			if (!data) {

				var original_ph = $(s_ph);
				el.after(original_ph);

				data = {
					original_ph: original_ph
				};

				el.data(data_id, data);
			}
			return data;
		};
		
		
		var getTargetData = function(target) {
			var $target = $(target);
			var data = $target.data(data_target_id);
			if (!data) {

				var target_after_ph = $(s_ph);
				$target.after(target_after_ph);

				var target_before_ph = $(s_ph);
				$target.before(target_before_ph);

				data = {
				    target_after_ph: target_after_ph,
				    target_before_ph: target_before_ph
				};

				$target.data(data_target_id, data);
			}
			return data;
		};



		// Method calling logic
		$.fn.relocate = function (method) {
			if (methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.' + pluginName);
			}
		};

})(jQuery);	


  
