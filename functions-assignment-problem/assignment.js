/* 1st Exercise */
const sayHello = name => console.log('Hi ' + name);

sayHello('Max');

/* 2nd Exercise */
const sayHello2 = name => console.log('Hi ' + name);
const sayHello3 = name => console.log('Hi ' + name);
const sayHello4 = name => console.log('Hi ' + name);


sayGreeting('Hello', 'John');

/* 2nd Exercise */
const sayHi = () => {
  const greeting = 'Hi';
  const name = 'Jane';
  console.log('${greeting} ${name}');
}

sayHello();

/* 2nd Exercise */
const getGreeting = (name3) => {
  const greeting2 = 'Hey';
  return '${greeting2} ${name3}';
}

console.log(getGreeting('Alice'));

/* 3rd Exercise */
const sayGreetingAgain = (name4, phrase2 = 'Hello') => {
  console.log('${phrase2} ${name4}');
}

sayGreetingAgain('John');
sayGreetingAgain('Alice', 'Hey');

/* 4th Exercise */
const checkInput = (...args) => {
  const isEmpty = args.some(arg => arg === '');

  if (!isEmpty) {
    console.log("Executing callback function...");
    console.log("All inputs are non-empty strings.");
  } else {
    console.log("At least one input is an empty string.");
  }
};

checkInput('Hello', 'World', '!');
checkInput('Hello', '', 'World');






