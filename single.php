<?php get_header(); ?>

<?php 
if(have_posts()) :
  while(have_posts()) : the_post(); 
  if(in_category('sekcja_strony_glownej')) {
    ?> <script>
      window.location.href = "http://localhost/wordpress";
    </script> <?php

  } ?>

    <article class="post">

      <h1 class="post__title post__title--article">
        <?php the_title(); ?>
      </h1>

      <div class="post__meta meta--centered">
        <?php get_template_part('layout/post-meta', get_post_format() ); ?>
      </div>

      <div class="post__content">
        <?php the_content(); ?>
      </div>

    </article>
    
  <?php endwhile;
endif; ?>

<?php get_template_part('layout/pagination-single'); ?>

<?php get_footer(); ?>