# K-Seodang (K-서당) 웹사이트

## 프로젝트 개요

**온고지신(溫故知新)의 지혜로 여는 AI 시대의 인성 르네상스**

2026년 서당문화 현대적 계승 및 글로벌 확산 사업을 소개하는 프리미엄 웹사이트입니다. 
전통 한국 서당 교육의 정신을 AI와 메타버스 기술로 계승하여, 대한민국을 인성 교육의 글로벌 표준 국가로 도약시키는 비전을 담았습니다.

---

## 주요 기능

### 🎨 디자인 특징
- **전통과 현대의 조화**: 한국 전통 오방색(쪽빛, 단청, 송화색 등)과 현대적 그라디언트의 융합
- **프리미엄 타이포그래피**: Gowun Batang, Noto Serif KR 등 한국어 최적화 폰트
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에 최적화
- **부드러운 애니메이션**: 스크롤 애니메이션, 카드 호버 효과, 카운터 애니메이션

### 📱 주요 섹션
1. **Hero Section**: 프로젝트 비전과 핵심 메시지
2. **Vision**: 사업의 필요성과 배경 (인성 교육의 위기, K-헤리티지, 지역 소멸 극복)
3. **3대 핵심 전략**: 공간 혁신, 콘텐츠 혁신, 글로벌 확산
4. **삼희성 프로젝트**: 글 읽는 소리, 다듬이 소리, 아이 울음소리
5. **프로그램**: AI 훈장님, 메타버스 서당, K-에티켓 아카데미, 선비 순례 등
6. **기대효과**: 2030년 목표 통계 및 사회적 영향
7. **CTA & 문의**: 행동 유도 및 연락처

### ⚡ 인터랙티브 기능
- 부드러운 스크롤 네비게이션
- 모바일 햄버거 메뉴
- 스크롤 시 나타나는 애니메이션
- 통계 숫자 카운터 애니메이션
- 패럴랙스 효과
- 반응형 네비게이션 하이라이팅

---

## 파일 구조

```
k-seodang/
├── index.html          # 메인 HTML 파일
├── styles.css          # 전체 스타일시트 (디자인 시스템 포함)
├── script.js           # 인터랙티브 기능 JavaScript
└── README.md           # 프로젝트 문서 (이 파일)
```

---

## 사용 방법

### 1. 로컬에서 바로 실행
웹 브라우저에서 `index.html` 파일을 더블클릭하거나 드래그하여 열기

### 2. 로컬 서버로 실행 (권장)
더 나은 성능과 개발 환경을 위해 로컬 서버 사용:

#### Python을 사용하는 경우:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Node.js를 사용하는 경우:
```bash
# http-server 설치
npm install -g http-server

# 서버 실행
http-server -p 8000
```

#### VS Code Live Server 사용:
1. VS Code에서 프로젝트 폴더 열기
2. Live Server 확장 프로그램 설치
3. `index.html` 우클릭 → "Open with Live Server"

그런 다음 브라우저에서 `http://localhost:8000` 접속

---

## 기술 스택

- **HTML5**: 시맨틱 마크업, SEO 최적화
- **CSS3**: 
  - CSS Variables (Design Tokens)
  - Flexbox & Grid Layout
  - CSS Animations & Transitions
  - Media Queries (반응형)
- **JavaScript (Vanilla)**: 
  - Intersection Observer API (스크롤 애니메이션)
  - Smooth Scrolling
  - Event Delegation
  - Debounce 최적화
- **Google Fonts**: Noto Serif KR, Noto Sans KR, Gowun Batang

---

## 브라우저 호환성

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ 모바일 브라우저 (iOS Safari, Chrome for Android)

---

## 색상 팔레트

### 전통 한국 오방색 (현대화)
- **쪽빛 (Korea Juk)**: `#003D5C` - 전통 남색
- **단청 (Korea Danhong)**: `#C4403A` - 전통 주홍색
- **송화색 (Korea Songhua)**: `#F2CB05` - 전통 황색
- **초록 (Korea Chorok)**: `#0A6847` - 전통 녹색
- **백색 (Korea Baek)**: `#F8F6F1` - 전통 백색

### 그라디언트
- **Primary Gradient**: 쪽빛 → 초록
- **Warm Gradient**: 단청 → 송화색
- **Tech Gradient**: 보라 계열 (AI/메타버스 느낌)

---

## 주요 디자인 원칙

### 1. 한국적 아이덴티티
- 전통 서체와 현대 서체의 조화
- 오방색 기반 색상 시스템
- 서당/선비 문화를 상징하는 시각 언어

### 2. 프리미엄 & 모던
- 고급스러운 타이포그래피
- 세련된 그라디언트와 그림자
- 부드러운 마이크로 애니메이션
- 넉넉한 여백(Whitespace)

### 3. 접근성 & 사용성
- 충분한 색상 대비율 (WCAG AA 기준)
- 키보드 네비게이션 지원
- 반응형 디자인
- 명확한 시각적 계층 구조

### 4. 스토리텔링
- 단계별 정보 제시
- 시각적 리듬감
- 감성적 소구와 이성적 데이터의 균형

---

## 커스터마이징 가이드

### 색상 변경
`styles.css`의 `:root` 섹션에서 CSS 변수를 수정:

```css
:root {
  --korea-juk: #003D5C;      /* 메인 색상 */
  --korea-danhong: #C4403A;  /* 액센트 색상 */
  /* ... */
}
```

### 폰트 변경
`styles.css` 상단의 `@import` 구문 수정 후, 변수를 업데이트:

```css
:root {
  --font-serif: 'YourFont', serif;
  --font-sans: 'YourFont', sans-serif;
}
```

### 섹션 추가/삭제
1. `index.html`에서 섹션 추가/삭제
2. 네비게이션 메뉴에 해당 링크 추가
3. 필요시 `script.js`의 섹션 관련 기능 업데이트

---

## 성능 최적화

### 이미 적용된 최적화
- ✅ CSS 변수를 통한 효율적인 스타일 관리
- ✅ Debounce를 통한 스크롤 이벤트 최적화
- ✅ Intersection Observer로 효율적인 애니메이션
- ✅ 모바일 우선 반응형 디자인

### 추가 최적화 가능 항목
- 이미지 최적화 (WebP 포맷, Lazy Loading)
- CSS/JS 압축 (Minification)
- 번들링 (Webpack, Vite 등)
- CDN 배포

---

## 배포 방법

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

GitHub 저장소 Settings → Pages에서 배포 활성화

### Netlify
1. Netlify에 로그인
2. "New site from Git" 클릭
3. 저장소 연결 후 배포
4. 자동 배포 완료

### Vercel
```bash
npm i -g vercel
vercel
```

---

## 프로젝트 배경

이 웹사이트는 **사단법인 한국전통서당문화진흥회**의 2026년 사업 계획을 디지털 형태로 구현한 것입니다.

### 핵심 메시지
- **온고지신(溫故知新)**: 옛것을 익혀 새것을 안다
- **삼희성(三喜聲)**: 글 읽는 소리, 다듬이 소리, 아이 울음소리
- **AI 시대의 인성 교육**: 기술과 전통의 조화

### 3대 목표
1. 서당 문화의 현대적 재해석 및 대중화
2. 디지털 융합을 통한 미래형 교육 모델 구축
3. 글로벌 K-에티켓 및 정신문화 확산

---

## 라이선스

© 2026 사단법인 한국전통서당문화진흥회. All rights reserved.

---

## 문의

- **이메일**: info@k-seodang.or.kr
- **웹사이트**: www.k-seodang.or.kr
- **주관 기관**: 사단법인 한국전통서당문화진흥회
- **협력 기관**: 문화체육관광부, 국가유산청, 한국유교문화진흥원

---

## 버전 히스토리

### v1.0.0 (2026-02-06)
- ✨ 초기 릴리즈
- 🎨 프리미엄 디자인 시스템 구축
- 📱 완전한 반응형 레이아웃
- ⚡ 부드러운 애니메이션 및 인터랙션
- 🌐 다국어 준비 (한국어 우선)
- ♿ 접근성 최적화

---

**Made with ❤️ for the preservation and modernization of Korean traditional Seodang culture**
