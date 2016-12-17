main() {
  buildNames().forEach(print);
}

Iterable<String> buildNames() sync* {
	var prefixes = ["Super", "Mega", "Ultra"];
	var suffixes = ["man", "woman", "boy", "girl"];
  
  for (var prefix in prefixes) {
    for (var suffix in suffixes) {
      yield "$prefix$suffix";
    }
  }
}