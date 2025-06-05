<?php get_header(); ?>

<?php if(have_posts()) : ?>
  <div class="articles">
    <h1 class="articles__title">Znalezione artykuły i strony</h1>
    <div class="articles__wrapper">

      <!-- article loop -->
      <?php for($i = 0; have_posts(); $i++) : the_post(); ?>
        <a class="a--ns card-article
            <?php if(get_post_type() == 'page'): ?>
              card-article--page
            <?php endif ?>"
          href="<?php echo get_permalink(); ?>">

          <!-- number -->
          <span class="card-article__number">
            <?php echo $i + 1 ?>
          </span>

          <!-- title -->
          <h2 class="card-article__title">
            <?php the_title(); ?>
          </h2>

          <?php if( !(get_post_type() == 'page') ): ?>

            <!-- meta -->
            <div class="card-article__meta">
              <?php get_template_part('layout/post-meta', get_post_format() ); ?>
            </div>

          <?php endif ?>
          
          <!-- excerpt -->
          <div class="card-article__excerpt">
            <?php the_excerpt(); ?>
          </div>

        </a>   
      <?php endfor; ?>

    </div>
  </div>

  <?php get_template_part('layout/pagination-index'); ?>
<?php else : ?>
  <div class="text--page-not-found">
    <h1>Nie znaleziono<br>
      artykułów<br>
      zawierających<br>
      podanej frazy.</h1>
  </div>
<?php endif; ?>

<?php get_footer(); ?>