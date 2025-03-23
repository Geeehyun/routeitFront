# ROUTE IT FRONT 프로젝트

## 프로젝트 구조
📁 src/
<br>├── 📁 modules/
<br>│   ├── 📁 auth/
<br>│   │   ├── authApi.js              # 로그인, 회원가입, 비번 찾기 등 API
<br>│   │   ├── store.js            # 로그인 상태, 유저 정보 저장 (Pinia)
<br>│   │   ├── composables.js      # useAuth() 등 인증 관련 편의 함수
<br>│   │   └── 📁 views/
<br>│   │       ├── LoginView.vue
<br>│   │       ├── SignUpView.vue
<br>│   │       └── FindPasswordView.vue
<br>├── 📁 views/
<br>│   └── HomeView.vue            # 단순 홈 화면 (추천 루트 등)
<br>├── 📁 components/
<br>│   └── common/                 # 공통 UI (AlertLayer, Modal 등)
<br>├── 📁 composables/
<br>│   └── useAlert.js             # alert/confirm 모달 유틸
<br>├── 📁 router/
<br>│   └── index.js                # 라우터 설정
<br>├── 📁 assets/
<br>│   └── images/                 # 로고, 배경, 마스코트 등
<br>├── 📁 layouts/
<br>│   └── AuthLayout.vue          # 로그인/회원가입 공통 레이아웃
<br>├── 📁 api/
<br>│   └── axios.js                # axios 인스턴스, 인터셉터 설정 등
<br>└── App.vue

✅ 이 구조의 특징:
- 도메인 기준으로 기능(auth 등)을 모듈화
- `views/`는 공통 홈(Home) 같은 단순한 라우트용 페이지만
- 재사용 로직은 composables, 공통 컴포넌트는 components
- 라우트마다 필요한 페이지는 각 모듈 하위 views에 작성

필요한 경우:
- 게시판 → modules/post/
- 마이페이지 → modules/mypage/
- 관리자 → modules/admin/
  이런 식으로 쭉 확장 가능!
