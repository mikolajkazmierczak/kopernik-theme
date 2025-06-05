<?php
/*
 * This is an Almanac of the website administration panel.
 */
require_once __DIR__ . '/admin.php';
require_once ABSPATH . '/wp-admin/admin-header.php';
$a = 'https://kopernik.kalisz.pl/wp-admin/_almanac/';
?>

  <div class="almanac">
    <nav>
      <div class="nav__indicator"></div>
      <ul>
        <li><a href="#preludium">Preludium</a></li>
        <li><a href="#wpisy">Wpisy</a></li>
        <li><a href="#strony">Strony</a></li>
        <li><a href="#shortcode">Shortcode</a></li>
        <li><a href="#slider">Slider</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#media">Media</a></li>
        <li><a href="#galerie">Galerie</a></li>
        <li><a href="#tabele">Tabele</a></li>
        <li><a href="#admin">Admin</a></li>
        <li><a href="#postludium">Postludium</a></li>
      </ul>
    </nav>

    <main>
      <div class="title">
        <div class="symbol title__img"></div>
        <div class="title__bg"></div>
        <h1>Almanach</h1>
        <span>albo kompendium wiedzy</span>
      </div>

      <section id="preludium">
        <h2>Preludium</h2>
        <p><i>Instrumentalna forma muzyczna, będąca wstępem do większego dzieła muzycznego.</i></p>
        <p>Czyli zaczynamy dość poetycko, a to tak naprawdę tylko zbiór informacji o panelu administracyjnym.</p>
        <h3>Co zawiera to kompedium</h3>
        <p>Ten spis zawiera wiedzę elementarną o Wordpressie oraz jego blokach budulcowych, uszczegółowioną pod zaimplementowane na tej witrynie mechanizmy.</p>
        <p>To zabrzmiało dość groźnie, ale sprowadza się to do wyjaśnienia jak działają Artykuły, Galerie, Slider i inne elementy, które można tworzyć, edytować i zmieniać. Ma to służyć obecnym i przyszłym administratorom strony w ich skromnych podbojach.</p>
        <h3>Cele witryny Kopernika</h3>
        <p>Założenia były jasne: strona miała być nowoczesna i jak najprostsza w zarządaniu.</p>
        <p>Nowoczesność jest trudna do zdefiniowania i ciągle zmienia postać. Z tego względu ten element będzie na przestrzeni czasu tracić dawny blask. Na prostotę zarządania ma natomiast wpływ wiele parametrów. Będę starał się, żeby ta wartość pozostawała na stałym, akceptowalnym poziomie.</p>
        <h3>Wdrożenie</h3>
        <p>Aby cele zostały zrealizowane, ograniczone zostały możliwości dostosowywania witryny pod swoje gusta i guściki.</p>
        <p>Mowa tu o takich kwestiach jak przestawianie bloków budujących stronę, czy nawet dostosowywaniu justyfikacji tekstu i wielkości zdjęć. Dzięki takim pozornie ograniczającym zabiegom na stronie pojawi się mniej niezgodności graficznych oraz zmniejszy zawroty głowy przy formatowaniu tekstu.</p>
        <blockquote>
          <p>"Prostota jest szczytem wysublimowania."</p>
          <p class="author">Leonardo da Vinci</p>
        </blockquote>
      </section>

      <section id="wpisy">
        <h2>Wpisy</h2>
        <p>To Artykuły oraz Sekcje i Grafiki na stronie głównej.</p>
        <img src="<?php echo $a.'sekcja1_wpisy.jpg'?>">
        <h3>Kategorie</h3>
        <p>Rodzaj wpisu opiera się na jego <b>Kategorii</b>.</p>
        <img src="<?php echo $a.'sekcja1_nowy_wpis.jpg'?>">
        <p>Właściwości odpowiednie dla danej kategorii będzie można edytować w dodatkowym panelu, który pokaże się po jej wybraniu. Opcji <b>Bez kategorii</b> nie trzeba zaznaczać - jest domyślna.</p>
        <ul>
          <li>
            <p>Wpis <b>Bez kategorii</b> jest artykułem.</p>
            <img src="<?php echo $a.'najnowsze_artykuly.jpg'?>">
            <img src="<?php echo $a.'artykul.jpg'?>">
          </li>
          <li>
            <p><b>Przedmiot sekcji z grafikami</b> wyświetli się na stronie głównej w sekcji <b>Z czego jesteśmy dumni</b>.</p>
            <img src="<?php echo $a.'z_czego_jestesmy_dumni.jpg'?>">
          </li>
          <li>
            <p><b>Sekcja strony głownej</b> wyświetli się na stronie głównej w formie (zadziwiająco) sekcji o wybranych parametrach.</p>
            <img src="<?php echo $a.'sekcja_strony_glownej.jpg'?>">
          </li>
        </ul>
        <p>Wpisy można filtrować według <b>Kategorii</b> używając odpowiednich przycisków w menu.</p>
        <h3>Edycja</h3>
        <p>Do edycji służy edytor Gutenberg. Przykładowy post z użyciem typowych bloków i proponowanym formatowaniem: <a href="https://kopernik.kalisz.pl/wp-admin/post.php?post=6871&action=edit" target="_blank">Korzystanie z Edytora Blokowego Gutenberg</a>.</p>
      </section>

      <section id="strony">
        <h2>Strony</h2>
        <p>Strony działają bardzo podobnie do <a href="#wpisy">Artykułów</a>, ale oprócz oczywistej innej idei, różnią się też wyglądem - żóły pas pod tytułem oraz brak "gazet" po bokach na dużych ekranach.</p>
        <img src="<?php echo $a.'strona.jpg'?>">
        <h3>Edycja</h3>
        <p>Do edycji służy edytor Gutenberg. Przykładowy post z użyciem typowych bloków i proponowanym formatowaniem: <a href="https://kopernik.kalisz.pl/wp-admin/post.php?post=6871&action=edit" target="_blank">Korzystanie z Edytora Blokowego Gutenberg</a>.</p>
      </section>

      <section id="shortcode">
        <h2>Shortcode</h2>
        <p>Shortcodes służą do linkowania zasobów.</p>
        <p>W <a href="https://kopernik.kalisz.pl/wp-admin/post.php?post=6871&action=edit" target="_blank">edytorze Gutenberg</a> istnieje blok w którym można taki shortcode wstawić. Sprawi to, że na przykład Tabela, Galeria czy Album pojawią się w treści danego Artykułu czy Strony. Jest to o tyle przydatne, że zasób możemy wstawiać w wielu miejscach, a edytować tylko w jednym.</p>
        <img src="<?php echo $a.'shortcode.jpg'?>">
      </section>

      <section id="slider">
        <h2>Slider</h2>
        <p>Edycja slidera polega na zwykłym dodawniu lub usuwaniu zdjęć korzystając z <a href="#media">Mediów</a>. Należy jedynie pamiętać by wykorzystywane zdjęcia nie były zbyt duże, gdyż może to znaczie spowolnić ładownie strony. Najlepiej by rozmiar każdej grafiki trzymał się w granicach około <b>100kb</b>.</p>
        <img src="<?php echo $a.'slider.jpg'?>">
      </section>

      <section id="menu">
        <h2>Menu</h2>
        <p>Na stronie są dwa menu: <b>Menu</b> i <b>Szybkie Menu</b>.</p>
        <ul>
          <li>
            <p><b>Menu</b> wysuwa się po lewej po kliknięciu na przycisk.</p>
            <img src="<?php echo $a.'menu.jpg'?>">
          </li>
          <li>
            <p><b>Szybkie Menu</b> widoczne jest w prawym górnym rogu strony.</p>
            <img src="<?php echo $a.'szybkie_menu.jpg'?>">
          </li>
        </ul>
        <p>Oba edytuje się w panelu Menu wybierając to które nas interesuje, a następnie dodając elementy z listy po lewej. Mogą to być Strona, Artykuł lub Własny odnośnik, czyli link, który prowadzi na przykład do wgranego do <a href="#media">Mediów</a> PDFa.</p>
        <img src="<?php echo $a.'menu_edycja.jpg'?>">
      </section>

      <section id="media">
        <h2>Media</h2>
        <p>To wszelkie zdjęcia, filmy, PDFy, dokumenty - generalnie pliki, które wgrywamy na serwer. Można je wklejać do Artykułów, Stron albo linkować za pomocą ich adresu URL - na przykład w Menu.</p>
        <img src="<?php echo $a.'media_grafika_edit.jpg'?>">
      </section>
      
      <section id="galerie">
        <h2>Galerie</h2>
        <p>Na wstępie warto zaznaczyć, że wykorzystywana do galerii wtyczka nazywa się <b>FooGallery</b>. Nazwa ta może się miejscami przewijać, na przykład w edytorze Gutenberg.</p>
        <h3>Galeria a Album</h3>
        <p>Galerie są zbiorami zdjęć. Albumy natomiast zbiorami galerii.</p>
        <p>Może to być o tyle problematyczne w rozróżnieniu, że w świecie rzeczywistym to raczej album oznacza zbiór zdjęć, a galerie budynki w których podziwiać można sztukę... albo ciuchy. Niemniej tutaj sytuacja jest trochę inna.<br><b>Galeria Wordpressowa</b> jest odpowiednikiem <b>albumu</b> w formie księgi, a <b>Album Wordpressowy</b> działa trochę tak jak <b>regał</b>, na którym w świecie rzeczywistym trzyma się kilka albumów ze zdjęciami.</p>
        <p>W dzisiejszych czasach te różnice powinny sprawiać coraz mniej problemów, gdyż jako społeczeństwo coraz bardziej przyzwyczajamy się do digitalizacji. To powiedziawszy, jeśli było to dla kogoś niejasne, mam nadzieję, że powyższa analogia w jakiś sposób pomogła.</p>
        <h3>Galerie</h3>
        <p>W panelu Galerie można tworzyć nowe galerie i dodawać do nich zdjęcia pobrane z <a href="#media">Mediów</a>. Galerie można osadzać za pomocą <a href="#shortcode">shortcodeów</a>.</p>
        <h3>Album główny</h3>
        <p>Można tworzyć wiele albumów, natomiast najważniejszy jest Album główny, który reprezentuje <a href="https://kopernik.kalisz.pl/galeria/" target="_blank">galerię</a> na stronie głównej.</p>
        <p>Aby nowo utworzona Galeria pojawiła się w galerii na stronie głównej należy ją najpierw dodać do Albumu głównego. By to zrobić, <b>trzeba ją zaznaczyć na liście Galerii w Albumie głównym</b> (pojawi się na samym dole listy).</p>
      </section>

      <section id="tabele">
        <h2>Tabele</h2>
        <p>Są dwa rodzaje tabel. Jeden z nich to blok tabeli w <a href="https://kopernik.kalisz.pl/wp-admin/post.php?post=6871&action=edit" target="_blank">edytorze Gutenberg</a>. Drugi to tabele tworzone za pomocą wtyczki <b>TablePress</b>. Pierwszy służy do tabel prostych, jednorazowych. Drugi jest znacznie potężniejszy i bardziej elastyczny.</p>
        <p>Z tabelami TablePress należy się zapoznać metodą prób i błędów. Są to typowe tabele, ale ich ważnym aspektem jest możliwość korzystania z nich w formie <a href="#shortcode">shortcodeów</a>. Dzięki temu praca na wielu tabelach w jednym wpisie staje się nieco prostsza.</p>
      </section>

      <section id="admin">
        <h2>Admin</h2>
        <p>Sekcja niskopoziomowych narzędzi administracyjnych.</p>
        <p>Użytkownicy, Ustawienia, Wtyczki. Tutaj można zarządzać użytkownikami, zmieniać ustawienia, zarządzać ukrytymi elementami, instalować i aktualizować wtyczki. Mówiąc ogólnie - ta sekcja daje poszerzoną kontrolę nad wieloma elementami strony. Przed jakimikolwiek zmianami najlepiej wpierw zrobić backup bazy danych w phpMyAdmin oraz wszystkich plików z FTP. Jeśli brzmi to jak czarna magia to lepiej tych opcji nie ruszać.</p>
      </section>

      <section id="postludium">
        <h2>Postludium</h2>
        <p>Dla kompletności.</p>
        <p>Mam nadzieję, że to kompedium w jakiś sposób się przyda i będzie stanowić dokument do którego można wracać w razie potrzeby.</p>
        <p>Jeśli pewne sekcje okażą się niejasne, bądź pojawi się jakiś problem, postaram się pomóc. W przypadku spraw drobnych można mnie złapać pod mailem <a href="mailto:mikolaj@kazmierczak.pl">mikolaj@kazmierczak.pl</a>, a takich nie cierpiących zwłoki pod numerem telefonu <a href="tel:728-266-518">728 266 518</a>.</p>
        <p>Czuwający twórca,<br>Mikołaj Kaźmierczak</p>
      </section>

      <div class="closing">
        <div class="symbol"></div>
      </div>

    </main>
  </div>

  <style>
  @import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@600&family=Poppins&display=swap');

  a, a:hover, a:active { color: #e42e15; }
  a:hover { text-decoration: none; }

  .almanac ul, .almanac li {
    margin: 0;
    padding: 0;
  }

  h1, h2, .almanac li, .title {
    margin: 0;
    font-family: "Newsreader", serif;
  }
  h2 {
    margin: 60px 0 30px 0;
    font-size: 2rem;
  }

  h3, p, blockquote {
    margin: 0;
    font-family: "Poppins", sans-serif;
  }
  h3 {
    margin: 30px 0 10px 0;
    font-size: 1.1rem;
  }
  p, blockquote {
    margin: 10px 0;
    font-size: 1rem;
  }
  p {/* text-align: justify; */}
  blockquote {
    padding-right: 4em;
    text-align: end;
    font-style: italic;
  }
    blockquote p { margin: 0; }
    blockquote p.author {
      padding-right: 2em;
    }


  .almanac {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-right: 10px;
  }
  @media (min-width: 783px) {
    .almanac {
      padding-right: 20px;
    }
  }
  nav {
    position: sticky;
    top: 32px;
    margin: 30vh 90px 0 0;
    padding: 20px 0;
  }
    .nav__indicator {
      position: absolute;
      top: 40px;
      transform: translate(calc(-100% - 10px), -100%);
      height: 3px;
      width: 15px;
      background-color: #444;
      transition: top 100ms;
    }
    .almanac nav li {
      margin: 15px 0;
      font-size: 1.1rem;
    }
    nav a, nav a:hover, nav a:active {
      text-decoration: none;
      color: inherit;
    }
  main { max-width: 550px; }
  .closing {
    position: relative;
    width: 100%;
    height: 35vh;
  }

  .symbol, .symbol:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .symbol {
    z-index: -1;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    background-color: #e42e15;
  }
    .symbol:before {
      content: '';
      border-radius: 50%;
      height: 110px;
      width: 110px;
      background-color: #f1f1f1;
    }

  .title {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 15vh 0 10vh 0;
  }
    .title__img {
      top: 0;
      left: 0;
    }
    .title__bg {
      z-index: -1;
      position: absolute;
      height: 100%;
      width: 100%;
      background-image: url('https://kopernik.kalisz.pl/wp-admin/_almanac/grid.png')
    }
    .title h1 {
      margin-top: 10vh;
      font-size: 4rem;
    }
    .title span {
      margin: 20px 0 5vh 0;
      max-width: 400px;
      color: #5f5f5f;
      font-size: 1.1rem;
    }

  .almanac section ul {
    margin: 0 0 0 20px;
    list-style-type: circle;
  }
  .almanac section ul > li {
    margin: 10px 0;
    padding-left: 10px;
  }
  section img {
    box-sizing: border-box;
    display: block;
    border: 5px solid #b0bbbf;
    width: 100%;
  }
  </style>

  <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>
  <script>
    // smooth scrolling after clicking a link
    let scroll = new SmoothScroll('.almanac a[href*="#"]', {
      speed: 300,
      speedAsDuration: true,
      offset: 80
    });
    // indicating which section the user is reading
    let nav = document.querySelector('nav');
    let navIndicator = nav.querySelector('.nav__indicator');
    let sections = document.querySelectorAll('section');
    window.onscroll = ()=>{
      for (el of sections) {
        let elRect = el.getBoundingClientRect();
        let scanner = window.innerHeight / 2;
        if (elRect.top < scanner && elRect.bottom > scanner) {
          let navItem = nav.querySelector('a[href="#'+el.id+'"]').parentElement;
          let offset = navItem.offsetTop + (navItem.clientHeight/2);
          navIndicator.style.top = offset+'px';
          break;
        }
      }
    }
  </script>

  <!-- nav indicator testing -->
  <!-- <div class='scanner'></div>
  <style>
    .scanner {
      position:fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      height: 2px;
      width: 1000px;
      background-color: red;
    }
    section {
      outline: solid 2px pink;
    }
  </style> -->

<?php
require_once ABSPATH . '/wp-admin/admin-footer.php';
?>