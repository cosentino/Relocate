# Relocate

### Relocate is a jQuery plugin to move elements around the DOM and bring them back.


## Simple usage example

	//move the element '#my_el' after the target '.b' element
	$('#my_el').relocate('after', '.target_element');

	//whenever you want you can bring the element back to its original position
	$('#my_el').relocate('origin');



## Responsive Web Design: 
#   Usage with jRespond to move elements whenever the window width cross a predefined breakpoint.

	#Js dependencies
	<script type="text/javascript" src="js/jrespond/js/jRespond.js"></script>

	#Html
	<p class="a">A</p>
	<div id="my_el">DOM ELEMENT</div>
	<p class="b">B</p>
	<p class="c">C</p>
	<p class="d">D</p>


	#Javascript
	$(function(){

	    /* Responsive Breakpoints definition */
		var jRes = jRespond([
	        {
	            label: 'handheld_portrait',
	            enter: 0,
	            exit: 479
	        }, {
	            label: 'handheld_landscape',
	            enter: 480,
	            exit: 767
	        }, {
	            label: 'tablet',
	            enter: 768,
	            exit: 959
	        }, {
	            label: 'laptop',
	            enter: 960,
	            exit: 1336
	        }, {
	            label: 'desktop',
	            enter: 1337,
	            exit: 10000
	        }
		]);

		/* Dom Element Relocation */
		var $my_el = $('#my_el');
		
		jRes.addFunc({
		    breakpoint: ['destop', 'laptop'],
		    enter: function () {
		    	$my_el.relocate('origin');
		    }
		});

		jRes.addFunc({
		    breakpoint: ['tablet'],
		    enter: function () {
		    	$my_el.relocate('after', '.b');
		    }
		});

		jRes.addFunc({
		    breakpoint: ['handheld_landscape'],
		    enter: function () {
		    	$my_el.relocate('after', '.c');
		    }
		});

		jRes.addFunc({
		    breakpoint: ['handheld_portrait'],
		    enter: function () {
				$my_el.relocate('after', '.d');
		    }
		});
	});