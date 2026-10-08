# Study | 전민규의 개발 학습 기록

Java와 Spring 기반 백엔드 개발을 중심으로, SQL·웹 클라이언트·딥러닝·개발 환경까지 연결해 학습한 코드와 실습 자료를 정리한 저장소입니다.

개념을 코드로 확인하고 프로젝트에서 활용할 수 있도록 분야별 목차를 제공합니다. 수업 예제, 과제, 개인 실험과 팀 실습이 함께 포함되어 있으며, 팀 프로젝트의 전체 기능과 본인 기여는 구분해 기록합니다.

## 학습 자료

| 분야 | 주요 내용 | 자료 |
| --- | --- | --- |
| Java · Java Web | 객체지향, 컬렉션, IO, 스레드, 네트워크, Servlet/JSP | [Java 목차](java/README.md) |
| Spring · Spring Boot | IoC/DI, AOP, MVC, 인증·권한, 데이터 접근, WebSocket 실습 | [Spring 목차](spring/README.md) |
| Database | SQL, 서브쿼리, DML, 모델링, JDBC, 트랜잭션 | [DB 목차](database/README.md) |
| AI · NLP/LLM | Python, PyTorch, CNN, RNN/LSTM, Transformers, Gemini CLI | [AI 학습 목차](ai-llm/README.md) |
| Frontend | HTML/CSS, JavaScript, jQuery, React, 라우팅·차트 | [Frontend 목차](frontend/README.md) |
| DevOps | Dockerfile, Docker Compose, 멀티스테이지 빌드, Linux | [DevOps 목차](devops/README.md) |

## 주요 프로젝트

### Chain LAB — 봉사시간 기반 암호화폐 보상 시스템

봉사활동 증빙과 TimeCoin 보상, 서비스 내 상점 사용을 연결한 학술제 팀 프로젝트입니다.

- **본인 역할**: 팀장, 기획·역할 분담, Python 기반 블록체인 기초 구조, Solidity 스마트 컨트랙트, Web3.js·MetaMask·Ganache 연동, 증빙 업로드·보상 기능. 역할은 원본 README를 기준으로 정리했습니다.
- **공개 코드**: HTML·JavaScript 화면, Node.js/Express API, 컨트랙트 ABI를 이용한 웹 호출. Python·Solidity 원본 및 배포 스크립트는 현재 공개 저장소에 포함되지 않았습니다.
- **학습 연결**: 웹 API, 지갑 연동, ABI·주소·네트워크 설정, 온체인 거래와 서버 기록의 일관성.
- [프로젝트 코드와 상세 설명](https://github.com/min-gyu-jeon/lab-project)

### Company Groupware — 사내 메신저를 포함한 업무 협업 시스템

직원 관리, 일정, 메신저, 전자결재, 게시판, 근태를 통합한 팀 프로젝트입니다.

- **본인 역할**: 인증·권한, 직원 관리, 캘린더·일정, 홈 대시보드 UI/UX, 팀 기능 통합.
- **기술**: Java, Spring Boot, Spring Security, Spring Data JPA, MariaDB, Thymeleaf, JavaScript.
- **문제 해결**: 일정 중복 검증과 동시 저장 충돌, 관리자와 부서 직원의 일정 권한 규칙 통합.
- **기여 구분**: WebSocket/STOMP 메신저는 팀 전체 기능입니다. 본인 기여는 메신저 정보를 대시보드에 연결하는 기능 통합과 구분합니다.
- [프로젝트 코드와 상세 설명](https://github.com/min-gyu-jeon/company-groupware)

## 저장소 구조

```text
study/
  java/        Java 기본 · Java Web
  spring/      Legacy Spring · Spring Boot
  database/    SQL · JDBC · 모델링
  ai-llm/      Python · 딥러닝 · NLP · Gemini CLI
  frontend/    Web Client · React
  devops/      Docker · Linux
  docs/        반영 기준 · 원본 경로 대응표 · 학습 문서 템플릿
```

분야별 하위 폴더에는 원래 프로젝트 이름과 내부 구조를 유지했습니다. `docjer-basic`은 탐색 편의를 위해 공개 사본에서 `devops/docker-basic`으로 분류했습니다.

## 실행 안내

이 저장소는 여러 독립적인 실습을 모은 자료집이며 하나의 앱으로 실행하지 않습니다. 원하는 실습의 폴더로 이동해 소스와 빌드 설정을 확인하세요.

- Java: JDK와 예제별 의존성 준비
- Spring: 프로젝트별 Maven/Gradle 설정과 JDK 확인
- SQL/JDBC: 학습용 DB와 접속 정보 준비
- Python/AI: 노트북별 패키지·데이터·모델 준비
- React: 프로젝트별 `package.json`의 실행 스크립트 확인
- Docker: Compose 설정·환경 변수·볼륨 확인

공개용 사본의 API 키·비밀번호는 `CHANGE_ME`, `REDACTED_*` 또는 환경 변수로 치환했습니다. 실행 전에 개인 설정이 필요합니다. `.env`, IDE 작업 이력, 빌드 산출물, 설치된 의존성, 모델 체크포인트와 대용량 데이터는 공개 대상에서 제외했습니다. 노트북 출력은 제거했습니다.

## 기록 원칙

1. 원본 학습 파일은 보존하고 공개용 사본의 변경을 기록합니다.
2. 구현·실험·검증 결과와 앞으로의 개선 과제를 구분합니다.
3. 수업 예제와 팀원의 기여를 본인 독립 성과로 표현하지 않습니다.
4. 문제 해결 기록은 **문제 → 원인 → 해결 → 검증 → 배운 점**으로 작성합니다.

[원본 경로와 파일 대응표](docs/source-manifest.json) · [반영 및 검증 기준](docs/import-report.md) · [학습 노트 템플릿](docs/learning-note-template.md)
