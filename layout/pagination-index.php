<div class="rm-bottom pagination">
  <?php
    the_posts_pagination( array(

      'mid_size' => 3,

      'prev_text' => __(
        '<img class="pagination__img pagination__img--left" src="'.get_bloginfo('template_directory').'/assets/icons/article/prev.svg" alt="X">',
        'textdomain'
      ),

      'next_text' => __(
        '<img class="pagination__img pagination__img--right" src="'.get_bloginfo('template_directory').'/assets/icons/article/next.svg" alt="X">',
        'textdomain'
      ),

    ) );
  ?>
</div>