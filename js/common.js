const $hd = document.querySelector(".top_nav");
const $foot = document.querySelector(".foot");
const HD = `
<h1 class="logo">
          <a href="./index.html"
            ><img src="./img/sooldamhwa_logo.png" alt="술담화로고"
          /></a>
        </h1>
        <div class="gnb">
          <a href="./index.html">담화소개</a>
          <a href="./subscribe.html">담화구독</a>
          <a href="#">담화마켓</a>
        </div>
        <div class="func">
          <button href="#" class="btn_login">로그인</button>
          <button href="#" class="btn_mypg">마이페이지</button>
          <button href="#" class="btn_search">검색</button>
        </div>
        <div class="ham">
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-xmark"></i>
        </div>
`;
const FT = `
<div><img src="./img/logo_footer.png" alt="logo" /></div>
        <div>
          <p>고객센터:<span>070-5014-1282</span></p>
          <p>평일 10:00 - 18:00,<span> 주말 휴무</span></p>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
          <p>입점문의</p>
        </div>
        <div>
          <p>
            <span>대표 : 이재욱</span><span>사업자등록번호 : 231-85-03914</span
            ><span>사업자확인</span
            ><span>통신판매 신고번호: 2021-서울서초-2084</span>
          </p>
          <p>
            <span
              >주소 : 경기도 용인시 수지구 상현동 508 광교우미뉴브 A동
              525-3호</span
            >
            <span>정보보호 책임자 : 담화컴퍼니 주식회사</span>
            <span>대표 전화 : 070-5014-1282</span>
            <span>이메일 : info@sooldamhwa.com</span>
          </p>
          <p>
            술담화는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가
            등록한 상품정보 및 거래에 대해 술담화는 책임을 지지 않습니다.
          </p>
          <p>
            고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한
            NICE구매안전 (에스크로) 서비스를 이용하실 수 있습니다.
          </p>
          <p>서비스 가입 사실 확인</p>
        </div>
        <div class="sns">
          <img src="./img/insta.png" alt="인스타" class="insta" />
          <img src="./img/youtube.png" alt="youtube" class="youtube" />
          <img src="./img/kakaotalk.png" alt="kakaotalk" class="kakaotalk" />
          <img src="./img/facebook.png" alt="facebook" class="facebook" />
          <img src="./img/naver.png" alt="naver" class="naver" />
        </div>
`;
$hd.innerHTML = HD;
$foot.innerHTML = FT;
