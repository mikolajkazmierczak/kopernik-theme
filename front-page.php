<?php get_header(); ?>

  <section class="slider">
    <?php echo do_shortcode('[smartslider3 slider=1]'); ?>
  </section>
  
  <main>
    
    <?php get_template_part('layout/main-sections-above', get_post_format() ); ?>

    <?php get_template_part('layout/main-articles', get_post_format() ); ?>

    <?php get_template_part('layout/main-sections-below', get_post_format() ); ?>

    <?php get_template_part('layout/main-graphics') ?>

  </main>

<?php get_footer(); ?>