<?php get_header(); ?>

<?php
query_posts(
  array(
    'post_type' => 'post',
    'paged' => $paged,
    'cat' => '-5,-6'
  )
);

if(have_posts()) : ?>
  <div class="articles">
    <h1 class="articles__title">Artykuły</h1>
    <div class="articles__wrapper">

      <!-- article loop -->
      <?php for($i = 0; have_posts(); $i++) : the_post(); ?>
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

    </div>
  </div>

  <?php get_template_part('layout/pagination-index'); ?>
<?php endif; ?>

<?php get_footer(); ?>