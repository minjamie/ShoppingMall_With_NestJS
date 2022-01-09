# ShoppingMall_WITH_PLAKS

---

## ORM - TypeORM

- Prisma와 TypeORM 중 TypeORM을 선택한 이유?
  TypeORM의 장점인 데이터 엔터티를 형식 저장 코드 (Typescript)로 모델링하고 모델을 테이블 구조에 적용 및 동기화가 가능하기에

#### 판단한 근거

1. TypeORM은 타입스크립트 기반의 ORM이기에 Nest.js, Typescript와 상성이 좋다고 판단

- 일전에 Prisma를 ORM으로 썼을 땐 REST 방식이 아닌 GraphQL로 통신했기에 좀 더 이점이 있었지만 REST 방식은 TypeORM이

2. Prisma Fluent API의 성능에 대한 의문

- Fluent API로 쿼리를 날리면 쿼리문이 Join되지 않고 여러 쿼리로 분리되서 호출됨 (DB 요청 비용 증가)
- 10000개의 데이터를 기준으로 TypeORM 이 월등히 빠른속도를 보여준다.

#### 아쉬웠던 점

---

## DB - MySQL

- PostgreSQL과 MySQL 중 MySQL을 선택한 이유?

#### 판단한 근거

- PostgreSQL은 읽기, 쓰기 속도가 중요하며 데이터를 검증해야 하는 대규모 시스템에서 널리 사용되므로 복잡한 쿼리를 요구하거나 insert 위주의 대규모 서비스는 아니라고 판단했다.
- 또한 PostgreSQL은 Update 위주에 서비스에는 다소 성능이 불안정한 부분이 있어 선택하지 않았다.
- 반면 MySQL은 간단한 데이터 트랜잭션을 위한 데이터베이스가 필요한 웹 기반 서비스에 널리 사용되므로 특히 update 성능이 특히 뛰어나 속도, 성능도 무난하기에 선택하였다.

---

## ORM의 구현 방식 - Data Mapper Pattern

#### 판단한 근거

- 어떤 앱을 만들것이며 어떤 환경에서 실행될 것인지 2가지를 고려하여 선택하였다.
- Active Record Pattern 대신 Data Mapper Pattern을 선택한 이유는 유지 관리를 고려할지 않을 수 없었기 때문이다.
- 유지 관리와 확장가능성을 생각했을 때 모델과 DB사이에 의존성이 적고 서로가 독립적으로 유지될 수 있는 Data Mapper Pattern이 더 적합해보였다.

---

## API 문서화 - Swagger 활용

#### Swagger를 활용해 문서화를 한 이유

- API 문서 자동화 도구로서 코드를 수정하면서 API 문서를 같이 수정할 수 있는 것이 팀으로서 작업하는 데 'API 문서 최신화 반영' 이라는 장점이 가장 큰 툴 선택의 기준이었다.
- 또한 Swagger는 API를 테스트할 수 있는 UI을 제공한다.

## UserEntity

- id
- createdAt
- updatedAt

- email
- password
- name
- phoneNumber
- role (client/owner)

## User CRUD

- Create Account
- Log in
- Delete Account

## Shop

- id
- createdAt
- updatedAt

- name
- logo

## Product

- id
- createdAt
- updatedAt

- price
- rate
- description
- image
- discountPrice

## Category

- id
- createdAt
- updatedAt

- t ype
