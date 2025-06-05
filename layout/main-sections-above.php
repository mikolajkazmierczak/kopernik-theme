<?php

  if ( get_query_var('paged') ) {
    $paged = get_query_var('paged');
  } elseif ( get_query_var('page') ) {
    $paged = get_query_var('page');
  } else {
    $paged = 1;
  }

  query_posts(
    array(
      'post_type' => 'post',
      'paged' => $paged,
      'cat' => 5
    )
  );

  if(have_posts()) :
    while(have_posts()) : the_post();
        if( get_field('main-section_position') == "main-section--above" ) {
            get_template_part('layout/main-section', get_post_format() );
        }
    endwhile;
  endif;
  wp_reset_query();

?>