<div class="rm-bottom pagination">
  <?php next_post_link(
    '%link',
    '<img class="pagination__img pagination__img--left" src="'.get_bloginfo('template_directory').'/assets/icons/article/prev.svg" alt="X">
    <h5 style="padding-left: 10px;">Poprzedni</h5>',
    TRUE
  ); ?>

  <a class="a--ns button button--pagination" href="<?php echo get_bloginfo('wpurl');?>/artykuly/">
    <span class="button__text">Wszystkie artykuły</span>
  </a>

  <?php previous_post_link(
    '%link',
    '<h5 style="padding-right: 10px;">Następny</h5>
    <img class="pagination__img pagination__img--right" src="'.get_bloginfo('template_directory').'/assets/icons/article/next.svg" alt="X">',
    TRUE
  ); ?>
</div>