<!DOCTYPE html>
<html lang="pl">

  <!--
  Designed and written by Mikołaj Kaźmierczak.
  Be nice, don't steal code.
  -->

  <head>
    <!-- Meta -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Oficjalna strona internetowa III Liceum im. Miko�aja Kopernika w Kaliszu. Sprawd� aktualne wiadomo�ci, przegl�daj galeri�, dowiedz si� wi�cej.">

    <script>
      templateUrl = '<?php echo get_bloginfo('template_directory'); ?>';
    </script>

    <!-- WP Footer -->
    <?php wp_head();?>
  </head>


  <body>
    <div class="cookies-consent">
      <div class="cookies-consent__text">
        <h4>Cookies</h4>
        <h5>Używając naszej strony zgadzasz się na ich użycie, zwiększając tym samym komfort jej użytkowania. <a style="color: #888888" href="https://kopernik.kalisz.pl/pliki-cookies/">Więcej informacji</a></h5>
      </div>
      <a class="a--ns button cookies-consent__button" href="#">
        <span class="button__text">Rozumiem</span>
      </a>
    </div>

    <?php get_template_part('layout/layout-header'); ?>
		
    <div class="site-wrapper">

      <div class="site-content">