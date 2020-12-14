'use strict';

// Synchronous callback (즉각 동기)
function printImmediately(print) {
  print();
}

// Asynchronous callback (나중에 예측 불가능한 동기)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

// JavaScript is synchronous.
// Execute the code block by orger after hoisting,
// hositing: var, function declaration

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

printImmediately(() => console.log('hello'));
printWithDelay(() => console.log('anytimes!'), 2000);

// 콜백 지옥 체험!!!!!!!!!!!!!!!!!!!!!
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'heno' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'heno') {
        onSuccess({ name: 'heno', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

// 1) id, password를 받아오기
// 2) login
// 3) Role
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
