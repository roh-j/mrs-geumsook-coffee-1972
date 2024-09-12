/**
 * 가비아 클라우드 환경에서는 외부 통신이 차단되어 외부 URL 사용 시 빌드 오류가 발생함
 * CREATE, UPDATE, DELETE 요청 시에는 외부 URL을 사용
 * 서버 컴포넌트에서 데이터를 가져올 때는 내부 URL을 사용해야 함
 */

const POCKET_BASE_INTERNAL_URL = "http://127.0.0.1:9090";
const POCKET_BASE_EXTERNAL_URL = "https://gsc1972.com:8090";

export { POCKET_BASE_INTERNAL_URL, POCKET_BASE_EXTERNAL_URL };
