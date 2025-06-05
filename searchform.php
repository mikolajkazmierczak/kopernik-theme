<?php
// random text in serach filed everytime user refreshes the page
// max of 26 letters
$grr = array(
  "Wpisz szukaną frazę."=>"",
  "Szukaj..."=>"",
  "Szukaj stron i artykułów."=>"",
);
?>

<form role="search" method="get" class="search-box" action="<?php echo home_url('/'); ?>">

  <input type="search" class="search-box__input"
    placeholder="<?php
      echo esc_attr_x(array_rand($grr,1), 'placeholder')
    ?>"
    value="<?php echo get_search_query() ?>" name="s"
    title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>"
    />

  <input type="submit" class="search-box__submit"
    value="<?php echo esc_attr_x('', 'submit button' ) ?>"
    />
  
</form>