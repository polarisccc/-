import React, { useState } from 'react';

function Navigation() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // 模拟登录函数，实际中需根据实际情况进行修改
  const handleLogin = () => {
    // 这里可以模拟登录的逻辑，例如发送请求到后端验证登录
    // 假设登录成功，设置loggedIn为true，并设置用户信息
    setLoggedIn(true);
    setUser({ username: '用户名' }); // 设置用户信息
  };

  // 模拟登出函数
  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null); // 清空用户信息
  };

  return (
    <div>
      {!loggedIn ? (
        <button onClick={handleLogin}>登录</button>
      ) : (
        <nav style={{ backgroundColor: '#f0f0f0', width: '100%', display: 'flex' }}>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', width: '100%' }}>
            <li style={{ flex: 1, textAlign: 'center' }}><a href="/" style={{ display: 'block', padding: '10px 0', textDecoration: 'none', color: '#333' }}>首页</a></li>
            <li style={{ flex: 1, textAlign: 'center' }}><a href="/resume-center" style={{ display: 'block', padding: '10px 0', textDecoration: 'none', color: '#333' }}>简历中心</a></li>
            <li style={{ flex: 1, textAlign: 'center' }}><a href="/interview-tips" style={{ display: 'block', padding: '10px 0', textDecoration: 'none', color: '#333' }}>面试技巧</a></li>
            <li style={{ flex: 1, textAlign: 'center' }}>欢迎, {user && user.username}</li>
            <li style={{ flex: 1, textAlign: 'center' }}><button onClick={handleLogout}>登出</button></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
