<?php

/* Title */
	add_theme_support( 'title-tag' );

/* Post thumbnail */
	// add_theme_support( 'post-thumbnails' );

/* Post excerpt */
	// custom amount of characters
	add_filter( 'excerpt_length', function() {
		return 15;
	}, 999 );

	// remove hard spaces
	$excerpt = get_the_excerpt();
	add_filter( 'excerpt_hard_space', function( $excerpt ) {
  	return str_replace('&nbsp;', 'hi', $excerpt);
	}, 999, 1 );

	// custom ending text
	add_filter( 'excerpt_more', function() {
    return '...';
	}, 999 );


/* Menus */
function init_menus() {
  register_nav_menus(
    array(
      'menu' => __( 'Menu' ),
      'quick-menu' => __( 'Szybkie Menu' )
    )
  );
}
add_action( 'init', 'init_menus' );


/* Style and Scripts */
	function init_scripts() {

		// style
		wp_enqueue_style('style', get_template_directory_uri() . '/style.css?n=12');

		// jquery
		wp_enqueue_script('jquery', get_template_directory_uri() . '/assets/scripts/scripts_js/_jquery_3.3.1.js');

		// anime and rm
		wp_enqueue_script('anime', get_template_directory_uri() . '/assets/scripts/scripts_js/_anime.min.js', array('jquery'), true);
		wp_enqueue_script('rm', get_template_directory_uri() . '/assets/scripts/scripts_js/rm.js?n=4', array('jquery'), true);
	
		// utilities
		wp_enqueue_script('_util', get_template_directory_uri() . '/assets/scripts/scripts_js/_util.js', array('jquery'), true);
		
		// cookies
		wp_enqueue_script('cookies', get_template_directory_uri() . '/assets/scripts/scripts_js/cookies.js?n=4', array('jquery'), true);

		// [init] preparation for styling wordpress elements
		wp_enqueue_script('init-main', get_template_directory_uri() . '/assets/scripts/scripts_js/init-main.js?n=10', array('jquery'), true);
		wp_enqueue_script('init-post', get_template_directory_uri() . '/assets/scripts/scripts_js/init-post.js?n=2', array('jquery'), true);
		wp_enqueue_script('init-foo-gallery', get_template_directory_uri() . '/assets/scripts/scripts_js/init-foo-gallery.js', array('jquery'), true);
		wp_enqueue_script('init-tables', get_template_directory_uri() . '/assets/scripts/scripts_js/init-tables.js', array('jquery'), true);
		wp_enqueue_script('init-pagination', get_template_directory_uri() . '/assets/scripts/scripts_js/init-pagination.js?n=1', array('jquery'), true);

		// menu
		wp_enqueue_script('menu', get_template_directory_uri() . '/assets/scripts/scripts_js/menu.js?n=5', array('jquery'), true);
		wp_enqueue_script('menu-accordion', get_template_directory_uri() . '/assets/scripts/scripts_js/menu-accordion.js?n=4', array('jquery'), true);
		wp_enqueue_script('menu-switches', get_template_directory_uri() . '/assets/scripts/scripts_js/menu-switches.js?n=6', array('jquery'), true);

		// post
		wp_enqueue_script('post', get_template_directory_uri() . '/assets/scripts/scripts_js/post.js?n=2', array('jquery'), true);

		// pagination
		if(is_single() || is_home() || is_search()) {
			wp_enqueue_script('pagination', get_template_directory_uri() . '/assets/scripts/scripts_js/pagination.js?n=4', array('jquery'), true);
		}

		// main sections
		wp_enqueue_script('main-sections', get_template_directory_uri() . '/assets/scripts/scripts_js/main-sections.js?n=4', array('jquery'), true);

		// footer
		wp_enqueue_script('footer', get_template_directory_uri() . '/assets/scripts/scripts_js/footer.js?n=2', array('jquery'), true);

		// fallback for when content is to short for monitor height
		wp_enqueue_script('too-short-site-fallback', get_template_directory_uri() . '/assets/scripts/scripts_js/too-short-site-fallback.js?n=3', array('jquery'), true);
	}
	add_action( 'wp_enqueue_scripts', 'init_scripts' );


/* Google Fonts */
	function init_google_fonts() {

		wp_register_style('Oswald', 'https://fonts.googleapis.com/css?family=Oswald:700');
		wp_enqueue_style( 'Oswald');


		wp_register_style('Rubik', 'https://fonts.googleapis.com/css?family=Rubik:400,700');
		wp_enqueue_style( 'Rubik');

		wp_register_style('Playfair Display', 'https://fonts.googleapis.com/css?family=Playfair+Display:700');
		wp_enqueue_style( 'Playfair Display');

		/* Prima Aprilis 2019 */
		// wp_register_style('Mali', 'https://fonts.googleapis.com/css?family=Mali:400,700');
		// wp_enqueue_style( 'Mali');
		/* -- */


	}
	add_action('wp_print_styles', 'init_google_fonts');
