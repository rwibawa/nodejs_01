# nodejs_01
Some exercises to use node js.

## 1. Setup a project.
```bash
$ nvm list
->      v5.10.1
         v6.9.5
         v7.7.2
         system
default -> 5.10.1 (-> v5.10.1)
node -> stable (-> v7.7.2) (default)
stable -> 7.7 (-> v7.7.2) (default)
iojs -> N/A (default)
lts/* -> lts/argon (-> N/A)
lts/argon -> v4.8.0 (-> N/A)
lts/boron -> v6.10.0 (-> N/A)

$ nvm use v7.7.2
Now using node v7.7.2 (npm v4.1.2)

$ mkdir nodejs_01
$ cd nodejs_01
$ npm init

```

### It will generate `package.json`
```json
{
  "name": "exercise_01",
  "version": "1.0.0",
  "description": "learn how the nodejs works",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "debug": "node debug app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Ryan Wibawa <ryan.wibawa@gmail.com> (https://github.com/rwibawa)",
  "license": "ISC"
}
```

### Run it:
```bash
$ vi app.js
$ npm start
```
