function happy() {
  const foo = "bar";
  return ":)";
}

function mood(emoji) {
  return emoji;
}

function currentStatus() {
  console.log("howdy!");
  return mood(happy());
}

currentStatus();
