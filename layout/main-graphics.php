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
    'cat' => 6
  )
);

if(have_posts()) :?>
  <section class="main-graphics">
      
    <h1 class="main-graphics__title">Z czego jesteśmy dumni</h1>
    <div class="main-graphics__wrapper
      columns columns--5 main-graphics__columns">
      
      <!-- the graphic -->
      <?php while(have_posts()) : the_post();?>

        <div class="card-graphic columns__item">
          <a class="a--ns card-graphic__graphic" href="<?php echo get_field('card-graphic_link'); ?>">

            <?php if(get_field('card-graphic_img') != "") : ?>
              <img class="card-graphic__img" src="<?php echo get_field('card-graphic_img');?>" alt="graphic">
            <?php endif;

            if(get_field('card-graphic_text') != "") : ?>
              <h2 class="card-graphic__text">
                <?php echo get_field('card-graphic_text');?>
              </h2>
              <!-- <div class="card-graphic__bottom-bar"></div> -->
            <?php endif; ?>

          </a>
        </div>
        
      <?php endwhile; ?>
    </div>

  </section>
<?php endif;

?>