let prompt = (message) => console.log(message);

prompt(true);
prompt(!!"hello"); // => true
prompt(!!-1); // => true
prompt(!![]); // => true
prompt(!!{}); // => true

prompt(false);
prompt(!!null); // => false
prompt(!!undefined); // => false
prompt(!!0); // => false
prompt(!!""); // => false
