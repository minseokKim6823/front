//AuthProvider 컴포넌트를 만들어서 Context의 값을 제공합니다.
const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 전역적으로 사용할 상태
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
