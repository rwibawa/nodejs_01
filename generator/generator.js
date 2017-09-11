function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}

const it = count();
it.next();
it.next();
it.next();
