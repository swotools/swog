SWOG / Graphic Framework v1.2.2
====================

SWOG utilizza i seguenti componenti
* Bootstrap 3.3.7 [on GitHub](https://github.com/twbs/bootstrap/tree/v3.3.7)
* Sass
* Js
* Nodejs
* npm
* grunt
* Nuovi mixin swog sass
* Nuovi file bin di configurazione e sotto versione

v1 major 2
-----------
Tutti i task in `gruntfile.js`, postcss senza maps. Definiti bene i dest e dist.<br>
I file saranno:
* app.css | .min in produzione
* bootstrap.js | .min in produzione
* swog.js | .min in produzione

SWOG
-----------

```bash
composer require --dev swotools/swog 1.2
```
Oppure
```json
"require-dev": {
  "swotools/swog": "^1.2"
}
```
#### Installing packages
```bash
$ npm install
$ npm update
```

#### Comandi
I comandi di installazione, manutenzione e aggiornamento di swog sono inclusi in Tools (swotools) richiesto ad ogni installazione di swog.
```json
"scripts": {
  "swog:install": "bash vendor/swotools/tools/bin/swog/install.sh"
},
```
Per tutti i comandi disponibili, visita [questa pagina](https://github.com/swotools/tools#comandi)

#### Bootstrap

Per escludere libreria JS da bootstrap commenta riga in file `./gruntfile.js` del task `concat:bootstrap`

#### Swog.js

Utilizza il file `general.js` in `./js/swog` .

#### Sass

Gli stili personalizzati sono nel file `scss/swog/_stile.scss`, le variabili le metti nel file `scss/swog/variabili.scss` ovviamente in SASS. Nel file `scss/swog/bootstrap.scss` scegli i componenti sass da includere.

#### Switching Sass compilers
Puoi usare 2 compilatori. Libsass è migliore, non dipende da ruby ed è mantenuto
Bootstrap will be compiled with [libsass][libsass] by default, but you can opt into traditional Ruby Sass by setting the `SWO_SASS` environment variable. Two options are supported:

* `libsass` (default) to use [libsass][libsass] via [grunt-sass][grunt-sass].
* `sass` to use [Ruby Sass][ruby-sass] via [grunt-contrib-sass][grunt-contrib-sass].

For example, run `SWO_SASS=sass grunt` to test and build Bootstrap with Ruby Sass.


GRUNT
-----------

Task                | Description
:------------------ | :-------------------------------------
grunt               | Compila tutti task dev-** (qui sotto)
grunt dev-jsbs      | Compila js bootstrap
grunt dev-jsswog    | Compila js swog
grunt dev-style     | Compila i SASS
grunt watch         | Ascolta i task qui sotto
grunt watch:style   | Ascolta solo la cartella SCSS
grunt watch:swogjs  | Ascolta solo la cartella JS di swog/


NOTE
-----------


TODO
-----------

- [ ] Implementa Webpack js
- [ ] Gestione moduli js con nodejs
- [ ] Ottenere come per css un unico file app.js (.min in produzione)
