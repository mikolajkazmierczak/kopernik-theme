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
    'cat' => '-5,-6'
  )
);

if(have_posts()) :?>
  <section class="articles">
    <h1 class="articles__title">Najnowsze artykuły</h1>
    <div class="articles__wrapper articles__wrapper--small-row">

      <!-- article loop -->
      <?php for( $i = 0; have_posts() && $i < 6; $i++ ) : the_post(); ?>
        <a class="a--ns card-article" href="<?php echo get_permalink(); ?>">

          <!-- number -->
          <span class="card-article__number">
            <?php echo $i + 1 ?>
          </span>

          <!-- title -->
          <h2 class="card-article__title">
            <?php the_title(); ?>
          </h2>

          <!-- meta -->
          <div class="card-article__meta meta--boxed">
            <?php get_template_part('layout/post-meta', get_post_format() ); ?>
          </div>
          
          <!-- excerpt -->
          <div class="card-article__excerpt">
            <?php the_excerpt(); ?>
          </div>

        </a>
      <?php endfor; ?>

      <div class="articles__ending-bar"></div>
    </div>
    
    <div class="articles__button">
      <a class="a--ns button button--big" href="<?php echo get_bloginfo('wpurl');?>/artykuly/">
        <span class="button__text">Wszystkie artykuły</span>
      </a>
    </div>
  </section>
<?php endif; ?>