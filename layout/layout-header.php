<div class="rm-panel">
  <div class="rm-top search">
    <?php get_search_form(); ?>
  </div>

  <div class="rm-panel__container">
    <div class="menu-switches">
      <div class="menu-switches__button menu-switches__button--pin">
        <img class="menu-switches__icon menu-switches__icon--apply" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/menu/pin.svg" alt="X">
        <img class="menu-switches__icon menu-switches__icon--reverse" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/menu/unpin.svg" alt="X">
        <h4 class="menu-switches__text">Przypnij Menu</h4>

        <!-- <div class="switch-warning">
          <h4>Funkcja eksperymentalna</h4>
          <h5>Jeśli zauważysz nieprawidłowości - zgłoś je naszym informatykom. Pomoże to w usprawnieniu funkcji.</h5>
        </div> -->
      </div>

      <div class="menu-switches__button menu-switches__button--expand">
        <img class="menu-switches__icon menu-switches__icon--apply" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/menu/expand.svg?n=2" alt="X">
        <img class="menu-switches__icon menu-switches__icon--reverse" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/menu/shrink.svg" alt="X">
        <h4 class="menu-switches__text">Rozszerz zakładki</h4>
      </div>
    </div>

    <?php
      wp_nav_menu(
        array( 
        'theme_location' => 'menu', 
        'container_class' => 'rm-panel__menu'
        )
      ); 
    ?>

    <!--<div class="rm-panel__bottom-bar"></div>-->
  </div>
</div>


<div class="rm rm-style--fixed">
  <div class="rm-button rm-button--panel">
    <img class="rm-button__icon" src="<?php echo get_bloginfo('template_directory');?>/assets/rm-icons/menu-black.svg" alt="X">
    <img class="rm-button__icon rm-button__icon--close" src="<?php echo get_bloginfo('template_directory');?>/assets/rm-icons/close-black.svg" alt="X">
  </div>

  <div class="rm-display">

    <div class="rm-more">
      <?php
        wp_nav_menu( array( 
          'theme_location' => 'quick-menu', 
          'container_class' => 'rm-more__menu' ) ); 
      ?>
    </div>

    <div class="rm-title-wrapper">
      <a class="a--ns rm-title" href="<?php echo get_bloginfo( 'wpurl' );?>">
        <img class="rm-title__logo" src="<?php echo get_bloginfo('template_directory');?>/assets/rm-icons/kopernik_mq.png" alt="X">
        <div class="rm-title__text">
          <h3>III Liceum</h3>
          <h1>Kopernik</h1>
        </div>
      </a>
    </div>

  </div>

  <div class="rm-button rm-button--more">
    <img class="rm-button__icon" src="<?php echo get_bloginfo('template_directory');?>/assets/rm-icons/more-black.svg" alt="X">
    <img class="rm-button__icon rm-button__icon--close" src="<?php echo get_bloginfo('template_directory');?>/assets/rm-icons/hide-black.svg" alt="X">
  </div>
</div>