<h1>I - LAND</h1>
I-Land는 고객들이 좋아하는 굿즈를 쉽고 편리하게 구매할 수 있는 온라인 스토어 플랫폼입니다.
<hr />
<h3>배포 로그</h3>

( 2025/01/22 )
<a href="https://deploy-preview-152--i-land.netlify.app">4차 배포</a>

( 2025/01/20 )
<a href="https://deploy-preview-126--i-land.netlify.app">3차 배포</a>

( 2025/01/15 )
<a href="https://deploy-preview-90--i-land.netlify.app">2차 배포</a>

( 2025/01/02 )
<a href="https://deploy-preview-39--i-land.netlify.app">1차 배포</a>

<hr />
<h3>프로젝트 구성</h3>

```
📂 src
├──📂 components
│   ├──📂 bookmarks 
│   │   └── BookmarksEmpty.jsx
│   ├── 📂 carts
│   │   ├── CartsBox.jsx
│   │   ├── CartsDelete.jsx
│   │   ├── CartsEmpty.jsx
│   │   └── CartsPayment.jsx
│   ├── 📂 common
│   │   ├── CategoryCard.jsx
│   │   ├── CategoryChip.jsx
│   │   ├── CategorySection.jsx
│   │   ├── EmptyPage.jsx
│   │   ├── InputError.jsx
│   │   ├── InputField.jsx
│   │   ├── MoveScroll.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductLikeBtn.jsx
│   │   ├── ProfileDropdown.jsx
│   │   └── Spinner.jsx
│   ├── 📂 create
│   │   ├── ProductCategory.jsx
│   │   ├── ProductContent.jsx
│   │   ├── ProductCreateSuccess.jsx
│   │   └── ProductImageUploader.jsx
│   ├── 📂 detail
│   │   ├── AddReview.jsx
│   │   ├── ProductsDetailInformation.jsx
│   │   ├── ProductsExplanation.jsx
│   │   └── ReviewList.jsx
│   ├── 📂 layout
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── index.jsx
│   ├── 📂 main
│   │   ├── MainBanner.jsx
│   │   ├── MainProductList.jsx
│   │   ├── SellerCard.jsx
│   │   └── TopSellerList.jsx
│   ├── 📂 search
│   │   ├── Search.jsx
│   │   ├── SearchNoResult.jsx
│   │   ├── SearchPopulars.jsx
│   │   └── SearchRecents.jsx
│   └─── 📂 user
│        └── PasswordInput.jsx
├──📂 hooks
│   ├── useAxiosInstance.js
│   └── useLoading.js
├──📂 pages
│   ├──📂 users
│   │   ├── Login.jsx
│   │   ├── LoginKakao.jsx
│   │   ├── MyInfo.jsx
│   │   └── Signup.jsx
│   ├── Bookmarks.jsx
│   ├── Carts.jsx
│   ├── Create.jsx
│   ├── Detail.jsx
│   ├── Main.jsx
│   ├── Payment.jsx
│   ├── Products.jsx
│   └── SearchResults.jsx
└──📂 zustand
    ├── useLoadingStore.js
    ├── userStore.js
    └── useSearchStore.js
app.jsx
index.css
main.jsx
routes.jsx

```


<hr />

<h3>프로그래머 정보</h3>

안지훈
 - 상품 등록 페이지
 - 카테고리별 상품 페이지
 - 검색 페이지
 - 공통 컴포넌트 작업
 - 문서 작업

강지훈 
- 프로젝트 디자인
- 로그인/회원가입 페이지
- 메인 페이지
- 내 정보 페이지
- 공통 컴포넌트 작업

지승현 
- 상품 상세 페이지
- 장바구니 페이지
- 찜한 상품 페이지
- 결제 페이지

윤영채 
- 검색 페이지
- 문서 작업
<hr />
<h3>버그 및 디버그</h3>
<hr />
<h3>참고 자료</h3>

<a href="https://www.notion.so/6-IF-467be3de7ed2405293b00688537b2209">프로젝트 노션</a>

<a href="https://www.figma.com/files/team/768693822664126941/project/314521010?fuid=1398588642415031722">피그마  시안</a>

<a href="https://docs.google.com/spreadsheets/d/1CPnZL0iC6yL4tX7Rrx2fbmH5JNlaXSMbJpf_eY1_gbs/edit?gid=1719041394#gid=1719041394">요구사항 정의서</a>

