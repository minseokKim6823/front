// 사용자의 인증 상태를 관리하는 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 컴포넌트 마운트 시 사용자 인증 상태 확인
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('memberData');
    if (loggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);
  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 로컬스토리지에서 사용자 데이터 삭제
    localStorage.removeItem('isLoggedIn');
    // 서버 ID와 닉네임을 로컬스토리지에서 삭제하는 추가 코드
    setIsLoggedIn(false);
  };
