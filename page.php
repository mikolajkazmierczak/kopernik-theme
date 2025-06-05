<?php get_header(); ?>

<?php if(have_posts()) :
  while(have_posts()) : the_post(); ?>

    <div class="post page">

      <div class="post__title-wrapper">
        <h1 class="post__title">
          <?php the_title(); ?>
        </h1>
      </div>
      
      <div class="post__content">
        <?php the_content(); ?>
      </div>

    </div>
  
  <?php endwhile;
endif; ?>
  
<?php get_footer(); ?>