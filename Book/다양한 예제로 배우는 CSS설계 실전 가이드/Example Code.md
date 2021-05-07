## Header Layout
  ```html
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" type="text/css" href="header-ly.css">
</head>
<body>

  <header class="header">
    <div class="header__inner">
      <div class="header-utilities">
        <a class="header-utilities__logo" href="#"><img src="/assets/img/logo.svg" alt=""></a>
        <a class="header-utilities__btn btn" href="#">문의하기</a>
      </div>
      <!-- /.header-utilities -->
      <nav>
        <ul class="header-nav">
          <li class="header-nav__item">
            <a class="header-nav__link" href="#">특징</a>
          </li>
          <li class="header-nav__item">
            <a class="header-nav__link" href="#">서비스</a>
          </li>
          <li class="header-nav__item">
            <a class="header-nav__link" href="#">포트폴리오</a>
          </li>
          <li class="header-nav__item">
            <a class="header-nav__link" href="#">기업정보</a>
          </li>
          <li class="header-nav__item">
            <a class="header-nav__link" href="#">채용정보</a>
          </li>
          <li class="header-nav__item">
            <a class="header-nav__link" href="#">블로그</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /.header__inner -->
  
</body>
</html>
  ```
  ```css
  /* header-ly.css */
  .btn {
  display: inline-block;
  width: 300px;
  max-width: 100%;
  padding: 20px 10px;
  background-color: #e25c00;
  border: 2px solid transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  color: #fff;
  font-size: 1.125rem;
  text-align: center;
  text-decoration: none;
  transition: .25s;
}

.btn:focus, .btn:hover {
  background-color: #fff;
  border-color: currentColor;
  color: #e25c00;
}

.header {
  padding-top: 20px;
  border-bottom: 1px solid #ddd;
}

.header__inner {
  max-width: 1230px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.header-utilities {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.header-utilities__logo {
  width: 150px;
}

.header-utilities__btn {
  width: auto;
  padding: 10px 20px;
  box-shadow: none;
}

.header-nav {
  display: flex;
  justify-content: space-around;
}

.header-nav__item {
  flex-grow: 1;
  text-align: center;
}

.header-nav__item:last-child .header-nav__link::after {
  content: none;
}

.header-nav__link {
  position: relative;
  display: block;
  padding: 15px 5px;
  border-bottom: 4px solid transparent;
  color: #222;
  text-decoration: none;
  transition: .25s;
}

.header-nav__link:focus, .header-nav__link:hover {
  border-bottom-color: #e25c00;
}

.header-nav__link::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 1px;
  height: 20px;
  background-color: #ddd;
  transform: translateY(-50%);
}
  ```

## Footer Layout
  ```html
  <header class="header">
  <div class="header__inner">
    <div class="header-utilities">
      <a class="header-utilities__logo" href="#"><img src="/assets/img/logo.svg" alt=""></a>
      <a class="header-utilities__btn btn" href="#">문의하기</a>
    </div>
    <!-- /.header-utilities -->
    <nav>
      <ul class="header-nav">
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">자사 특징</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">서비스</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">포트폴리오</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">기업 정보</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">채용 정보</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">블로그</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- /.header__inner -->
</header>
<footer>
  <div class="footer">
    <div class="footer__inner">
      <nav>
        <ul class="footer-nav">
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">자사 특징</a>
            <ul class="footer-child-nav">
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">강점</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">정책</a>
              </li>
            </ul>
          </li>
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">서비스</a>
            <ul class="footer-child-nav">
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">웹사이트 구축</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">웹사이트 개선</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">분석/레포팅</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">다국어 웹사이트 구축</a>
              </li>
            </ul>
          </li>
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">포트폴리오</a>
          </li>
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">기업 정보</a>
            <ul class="footer-child-nav">
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">메시지</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">기업 소개</a>
              </li>
            </ul>
          </li>
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">채용 정보</a>
            <ul class="footer-child-nav">
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">신입 사원</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">경력 사원</a>
              </li>
            </ul>
          </li>
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">블로그</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /.footer__inner -->
  </div>
  <!-- /.footer -->
  <div class="footer footer--border-top-gray">
    <div class="footer__inner">
      <small class="footer-copyright">© 2020 Triad Inc.</small>
    </div>
    <!-- /.footer__inner -->
  </div>
  <!-- /.footer footer--border-top-gray -->
</footer>
  ```
  ```css
  /* footer-ly.css */
  .footer {
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #222;
}

.footer--border-top-gray {
  border-top: 1px solid #777;
}

.footer__inner {
  max-width: 1230px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.footer-nav {
  display: flex;
  justify-content: space-around;
}

.footer-nav__item {
  flex: 1;
  text-align: center;
}

.footer-nav__item>*:last-child {
  margin-bottom: 0;
}

.footer-nav__item:last-child .footer-nav__link::after {
  content: none;
}

.footer-nav__link {
  position: relative;
  display: block;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  color: #fff;
  text-decoration: none;
}

.footer-nav__link:focus, .footer-nav__link:hover {
  text-decoration: underline;
}

.footer-nav__link::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 1px;
  height: 15px;
  background-color: currentColor;
  transform: translateY(-50%);
}

.footer-child-nav {
  /* css-wipe에서는 스타일링 없음 */
}

.footer-child-nav__item {
  margin-bottom: 10px;
}

.footer-child-nav__link {
  color: #ddd;
  font-size: 15px;
  text-decoration: none;
}

.footer-child-nav__link:focus, .footer-child-nav__link:hover {
  text-decoration: underline;
}

.footer-copyright {
  display: block;
  color: #ddd;
  font-size: 12px;
  text-align: center;
}
  ```

## Content Layout
  ```html
  <header class="header">
  <div class="header__inner">
    <div class="header-utilities">
      <a class="header-utilities__logo" href="#"><img src="/assets/img/logo.svg" alt=""></a>
      <a class="header-utilities__btn btn" href="#">문의하기</a>
    </div>
    <!-- /.header-utilities -->
    <nav>
      <ul class="header-nav">
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">자사 특징</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">서비스</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">포트폴리오</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">기업 정보</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">채용 정보</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="#">블로그</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- /.header__inner -->
</header>

<main>
  <article>
    <section class="content">
      <h2 class="level2-heading small-space">
        마케팅 전략 수립
      </h2>
      <div class="media">
        <figure class="media__img-wrapper">
          <img class="media__img" alt="사진: 손에 든 스마트폰" src="/assets/img/elements/persona.jpg">
        </figure>
        <div class="media__body">
          <h3 class="media__title">
            사용자를 고려한 설계로 만족스러운 체험을
          </h3>
          <p class="media__text">
            웹사이트 설계는 제공하는 서비스나 퍼소나에 따라 달라집니다. 서비스와 퍼소나에 맞춘 설계를 통해 방문자에게 스트레스를 주지 않는 보다 나은 체험을 만들어 만족감을 높입니다.<br>
            우리는 고객의 사이트에 맞는 사용성을 고려하기 때문에 세심한 분석과 의견 청취를 실시함으로써, 만족을 체험할 수 있는 크리에이티브 및 테크놀로지를 설계하고 구현함으로써 지금까지는 없던 기대를
            뛰어넘는 사용자 체험을 제공합니다.
          </p>
        </div>
        <!-- /.media__body -->
      </div>
      <!-- /.media -->
    </section>
    <section class="background-color-base">
      <div class="content">
        <h2 class="level2-heading small-space">
          마케팅 전략 수립
        </h2>
        <div class="media media--reverse">
          <figure class="media__img-wrapper">
            <img class="media__img" alt="사진: 손에 든 스마트폰" src="/assets/img/elements/persona.jpg">
          </figure>
          <div class="media__body">
            <h3 class="media__title">
              사용자를 고려한 설계로 만족스러운 체험을
            </h3>
            <p class="media__text">
              웹사이트 설계는 제공하는 서비스나 퍼소나에 따라 달라집니다. 서비스와 퍼소나에 맞춘 설계를 통해 방문자에게 스트레스를 주지 않는 보다 나은 체험을 만들어 만족감을 높입니다.<br>
              우리는 고객의 사이트에 맞는 사용성을 고려하기 때문에 세심한 분석과 의견 청취를 실시함으로써, 만족을 체험할 수 있는 크리에이티브 및 테크놀로지를 설계하고 구현함으로써 지금까지는 없던 기대를
              뛰어넘는 사용자 체험을 제공합니다.
            </p>
          </div>
          <!-- /.media__body -->
        </div>
        <!-- /.media media--reverse -->
      </div>
      <!-- /.content -->
    </section>
  </article>
</main>

<footer>
  <div class="footer">
    <div class="footer__inner">
      <nav>
        <ul class="footer-nav">
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">자사 특징</a>
            <ul class="footer-child-nav">
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">강점</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">정책</a>
              </li>
            </ul>
          </li>
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">서비스</a>
            <ul class="footer-child-nav">
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">웹사이트 구축</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">웹사이트 개선</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">분석/레포팅</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">다국어 웹사이트 구축</a>
              </li>
            </ul>
          </li>
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">포트폴리오</a>
          </li>
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">기업 정보</a>
            <ul class="footer-child-nav">
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">메시지</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">기업 소개</a>
              </li>
            </ul>
          </li>
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">채용 정보</a>
            <ul class="footer-child-nav">
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">신입 사원</a>
              </li>
              <li class="footer-child-nav__item">
                <a class="footer-child-nav__link" href="#">경력 사원</a>
              </li>
            </ul>
          </li>
          <li class="footer-nav__item">
            <a class="footer-nav__link" href="#">블로그</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /.footer__inner -->
  </div>
  <!-- /.footer -->
  <div class="footer footer--border-top-gray">
    <div class="footer__inner">
      <small class="footer-copyright">© 2020 Triad Inc.</small>
    </div>
    <!-- /.footer__inner -->
  </div>
  <!-- /.footer footer--border-top-gray -->
</footer>
  ```
  ```css
  /* Content-ly.css */
  .content--has-column {
  display: flex;
  justify-content: space-between;
}

.content__main {
  flex: 1;
  margin-right: 3.25203%;
}

.content__side {
  flex: 0 0 260px;
}

@media screen and (max-width: 768px) {
  .content--has-column {
    flex-direction: column;
  }
  .content__main {
    margin-right: 0;
    margin-bottom: 60px;
  }
}

.level2-heading {
  margin-bottom: 30px
}

.level3-heading {
  margin-top: 40px;
  margin-bottom: 30px
}

.level4-heading {
  margin-bottom: 20px
}

.level3-heading {
  padding-bottom: 6px;
  border-bottom: 2px solid #e25c00;
  font-size: 1.5rem;
  font-weight: bold;
}

.level4-heading {
  padding-left: 6px;
  border-left: 2px solid #e25c00;
  font-size: 1.25rem;
  font-weight: bold;
}

.vertical-posts {
  /* css-wipe에서는 스타일링 없음 */
}

.vertical-posts__item {
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
}

.vertical-posts__item:first-child {
  padding-top: 0;
}

.vertical-posts__header {
  margin-bottom: 10px;
}

.vertical-posts__date {
  font-size: .875rem;
}

.vertical-posts__title {
  text-decoration: none;
}

.vertical-posts__title:focus, .vertical-posts__title:hover {
  text-decoration: underline;
}
  ```