// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 使用 body-parser 解析 POST 请求
app.use(bodyParser.urlencoded({ extended: false }));

// 模拟用户数据库
const users = [
  { username: 'user', password: '1' } // 示例用户，实际应用中需替换为数据库或其他存储
];

// 登录路由
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 简单验证用户名和密码
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // 登录成功，重定向到 /interview 页面
    res.redirect('/interview-tips');
  } else {
    // 登录失败，返回登录页面或错误信息
    res.send('登录失败，请检查用户名和密码');
  }
});

// Interview 页面路由
app.get('/interview', (req, res) => {
  res.send('这是面试页面');
});

// 启动服务器
app.listen(3000, () => {
  console.log('服务器运行在 http://localhost:4321');
});
