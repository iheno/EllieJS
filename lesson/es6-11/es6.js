'use strict';

{
  const heno1 = {
    name: 'Heno',
    age: ' 40',
  };

  const name = 'Heno';
  const age = '40';

  const heno2 = {
    name: name,
    age: age,
  };

  // small code
  const heno3 = {
    name,
    age,
  };

  console.log(heno1, heno2, heno3);
}
