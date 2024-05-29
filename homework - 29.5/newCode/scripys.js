const users = [
  {
    username: 'jdoe1',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    username: 'asmith2',
    password: 'securepass456',
    firstName: 'Anna',
    lastName: 'Smith',
  },
  {
    username: 'bjones3',
    password: 'mypassword789',
    firstName: 'Bill',
    lastName: 'Jones',
  },
  {
    username: 'cmiller4',
    password: 'passcode321',
    firstName: 'Cathy',
    lastName: 'Miller',
  },
  {
    username: 'djohnson5',
    password: 'lockandkey654',
    firstName: 'David',
    lastName: 'Johnson',
  },
  {
    username: 'eflores6',
    password: 'openme987',
    firstName: 'Eva',
    lastName: 'Flores',
  },
  {
    username: 'fgarcia7',
    password: 'letmein111',
    firstName: 'Frank',
    lastName: 'Garcia',
  },
  {
    username: 'gharris8',
    password: 'secretkey222',
    firstName: 'Grace',
    lastName: 'Harris',
  },
  {
    username: 'hlewis9',
    password: 'unlockme333',
    firstName: 'Henry',
    lastName: 'Lewis',
  },
  {
    username: 'ijones10',
    password: 'accesspass444',
    firstName: 'Irene',
    lastName: 'Jones',
  },
];

let userSessions = [];
function loginUser(username, password) {
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
      break;
    }
  }
  if (foundUser === null) {
    return 'Something went wrong';
  } else {
    let session = new Date().getTime() + '_' + Math.ceil(Math.random() * 9999);
    userSessions.push(session);
    foundUser.session = session;
    foundUser.loginAt = new Date().toISOString();
    return foundUser;
  }
  console.log(foundUser);
}

console.log(loginUser('jdoe1', 'password123'));
console.log(loginUser('asmith2', 'securepass456'));
console.log(userSessions);

setTimeout(() => {
  console.log(doSomthing(userSessions[0]));
}, 13000);

console.log(users);
console.log(users);

function doSomthing(session) {
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].session === session) {
      foundUser = users[i];
    }
  }
  if (foundUser === null) {
    return 'Something went wrong';
  } else {
    let isExpired = isMoreThenOneMinute(foundUser);
    if (isExpired === true) {
      userSessions.splice(userSessions.indexOf(foundUser.session), 1);
      delete foundUser.session;
      console.log(foundUser);
      console.log(users);

      return foundUser.username + 'Is Logged Out Of Session';
    } else {
      return 'User Is Logged In';
    }
  }
}

function isMoreThenOneMinute(user) {
  let now = new Date();
  let loginAt = new Date(user.loginAt);
  let diff = now - loginAt;
  let diffInMin = diff / (1000 * 60);

  console.log(diffInMin);
  if (diffInMin >= 0.2) {
    return true;
  } else {
    return false;
  }
}
