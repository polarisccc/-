const bcrypt = require('bcrypt');

const users = [
  { id: 1, username: 'user1', passwordHash: bcrypt.hashSync('password1', 10) },
  // 你可以添加更多用户
];

function authenticate(username, password) {
  const user = users.find(u => u.username === username);
  if (user && bcrypt.compareSync(password, user.passwordHash)) {
    return user;
  }
  return null;
}

module.exports = { authenticate };
