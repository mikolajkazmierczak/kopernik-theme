<section class="main-section
  <?php
    echo " ";
    echo get_field('main-section_color');
  ?>">

  <div class="main-section__image">
    <?php
      // this is a workaround for inserting a specific video as per request
      $ytVideoIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oGtwPUPzafs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

      $imgSrc = get_field('main-section_img');
      if($imgSrc == 'https://kopernik.kalisz.pl/wp-content/uploads/2020/03/złota-tarcza2.jpg') { // placeholder image set for easy detection
        echo $ytVideoIframe;
      } else {
        echo '<img class="main-section__img" src="'.$imgSrc.'" alt="">';
      }
    ?>
  </div>
  
  <div class="main-section__text">
    <?php if(get_field('main-section_title') != "") : ?>
      <h1 class="main-section__title">
        <?php echo get_field('main-section_title'); ?>
      </h1>
    <?php endif; ?>

    <p class="main-section__content">
      <?php echo get_field('main-section_content'); ?>
    </p>

    <a class="a--ns button main-section__button
      <?php
      switch(get_field('main-section_color')) {

        case "main-section--purple":
          echo "button--light";
          break;

      }
      ?>"
      href="<?php echo get_field('main-section_button_link'); ?>">
      <span class="button__text">
        <?php echo get_field('main-section_button_text'); ?>
      </span>
    </a>
  </div>

</section>