const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    props.onAuth({ username: value, secret: value });
  };
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome to my chat 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
            <div className="auth-label">Username</div>
            <input type="text" />
        </div>
      </form>
    </div>
  );
};
