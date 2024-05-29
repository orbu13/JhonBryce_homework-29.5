const users = [
  { userName: 'Jerad.Witting', password: 'yuWsz7nsNFOyTyF' },
  { userName: 'Zack6', password: 'mI7sefIyI9iSjLu' },
  { userName: 'Amya_Jast', password: 'oAP78AZDqUGYhRW' },
  { userName: 'Jodie_Wisoky', password: 'VKxVNcm83G7kmdx' },
  { userName: 'Kelsie59', password: '7WYYa_vQD4qcGlA' },
  { userName: 'Enola29', password: 'uXMSLtnizuCp3rD' },
  { userName: 'Aliyah_Kuphal77', password: 'pgeXiTSAwu2RmZB' },
  { userName: 'Martina.Olson44', password: 'r2ohyVnmQ5NH1i1' },
  { userName: 'Hassan.Kozey', password: 'woFRqN0DtAxFTdC' },
  { userName: 'Jadon77', password: 'NPes5MFAv3NZcV8' },
  { userName: 'Harel_id_should_work', password: 'harel_be_positive' },
];

function loginUserOn(username, password) {
  const userToFind = users.find(
    (u) => u.password === password && u.userName === username
  );
  if (userToFind) {
    const session =
      new Date().getTime() + '_' + Math.ceil(Math.random() * 9999);

    userToFind.logedInAt = new Date().toISOString();
    userToFind.session = session;
  } else {
    console.log('***user unauthorized***');
  }
  return userToFind;
}

console.log(loginUserOn('Jerad.Witting', 'yuWsz7nsNFOyTyF'));
console.log(users);

function doSomthing(user) {
  const loginUser = users.find(function (u) {
    console.log(u.session);
    return u.session === user.session;
  });
  let isExpired = isMoreThenOneMin(user.logedInAt);
  console.log(loginUser);
  console.log(isExpired);
  if (isExpired === true) {
    delete loginUser.session;
    return 'session is expired';
  } else {
    return 'successfully update user';
  }
}

function isMoreThenOneMin(logedInTime) {
  let logedInAt = new Date(logedInTime);
  let now = new Date();
  let diff = now - logedInAt;
  let diffTime = diff / (1000 * 60);
  if (diffTime <= 1) {
    return false;
  } else {
    return true;
  }
  console.log(diffTime);
}
