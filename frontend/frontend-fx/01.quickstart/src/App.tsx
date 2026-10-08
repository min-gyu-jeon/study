import './App.css'

function App() {
   const name = '홍길동';
  const intro = 'React를 처음 배우는 프론트엔드 개발자입니다. 잘 부탁드립니다!';
  const hobbies = ['독서', '러닝', '코딩 테스트 풀기', '영화 감상'];
  const isPresent = true; // 출석 여부

  return (
    <div className="container">
      <div className="profile-photo">사진</div>

      <h1>{name}</h1>

      <p>
        오늘의 상태:{' '}
        {isPresent ? (
          <span className="status present">출석</span>
        ) : (
          <span className="status absent">결석</span>
        )}
      </p>

      <h2>소개</h2>
      <p>{intro}</p>

      <h2>좋아하는 것</h2>
      <ul className="hobby-list">
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
