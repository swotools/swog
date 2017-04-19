# SWOG / Graphic Framework v1.1.0
- Bootstrap framework v.3.3.7
- Sass
- Js
- Nodejs
- npm
- grunt

## Major
Bootstrap in composer, autoinstall sass, migliorati i comandi grunt


## Installing

```bash
$ npm install
$ npm update
```

#### Includi in composer
```json
"repositories": [
  {
      "type": "git",
      "url": "https://github.com/swotools/swog"
  }
],
"require": {
  "swotools/swog": "^1.0"
}
```

#### Aggiungi i comandi script a composer
I comandi di installazione, manutenzione e aggiornamento di swog sono inclusi in Tools (swotools) richiesto ad ogni installazione di swog.
```json
"scripts": {
  "swog:install": "bash vendor/swotools/tools/bin/swog/install.sh"
},
```
**ATT!!** Ti ricordo che SWOG include anche Tools di default

## Styling with swo.sass using npm grunt

Task                | Description
:------------------ | :-------------------------------------
grunt               | Compila tutti task dev-** (qui sotto)
grunt dev-jsbs      | Compila js bootstrap
grunt dev-jsswog    | Compila js swog
grunt dev-bscss     | Compila i SASS di bootstrap
grunt dev-swogcss   | Compila i SASS di swog
grunt watch         | Ascolta i task qui sotto
grunt watch:bscss   | Ascolta solo la cartella SCSS di bs4/
grunt watch:swogcss | Ascolta solo la cartella SCSS di swog/
grunt watch:swogjs  | Ascolta solo la cartella JS di swog/

## Personalizzare Sass

### Bootstrap

Modifica il file `variables.scss` in `./scss/bs3/bootstrap/`

### SWOG


Gli stili del sito li scrivi in SASS nel file `stile.scss` , le variabili le metti nel file `variabili.scss` ovviamente in SASS

#### stile.scss

```css
* {margin: 0;padding: 0;}
body {padding-top: 50px;overflow-x: hidden;}
.oggi{
    background-color: $giallo;
}
```

#### variabili.scss

```css
$giallo:    #ffcc00 !default;
$blusmart: #rgb(0, 42, 190);
```

## Personalizzare Js

### Bootstrap

Per escludere libreria JS da bootstrap commenta riga in file `./grunt/tasks/options/concat.js` del task

## Switching Sass compilers

Puoi usare 2 compilatori. Libsass è migliore, non dipende da ruby ed è mantenuto
Bootstrap will be compiled with [libsass][libsass] by default, but you can opt into traditional Ruby Sass by setting the `SWO_SASS` environment variable. Two options are supported:

* `libsass` (default) to use [libsass][libsass] via [grunt-sass][grunt-sass].
* `sass` to use [Ruby Sass][ruby-sass] via [grunt-contrib-sass][grunt-contrib-sass].

For example, run `SWO_SASS=sass grunt` to test and build Bootstrap with Ruby Sass.

### SWOG

#### general.js

Utilizza il file `general.js` in `./js/swog` .

```javascript
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  );
  document.querySelector('head').appendChild(msViewportStyle);
}

var logoutLink = $('#logoutLink'),
  logoutForm = $('#logout');
//thetoken = $('meta[name=csrf-token]').attr("content");
logoutLink.click(function() {
  logoutForm.submit();
  return false;
});

function prova(al) {
  alert('ehi come va ' + al);
}
```

## Compilare html con emmet

```code
div.row>.col-md-5+.col-md-7
```
Poi premi tab
```code
<div class="row">
  <div class="col-md-5"></div>
  <div class="col-md-7"></div>
</div>
```

Docs -> <http://docs.emmet.io>

## ToDO

-- scss lint da terminale, jscs, eslint

## Note

Quando importi da TWBS SASS, rinomina i file
* _bootstrap.scss
* _bootstrap-sprockets.scss
* _bootstrap-mincer.scss
* _bootstrap-compass.scss

SENZA UNDERSCORE!

"glob": "~4.3.1", - serve per includere i task first cm 5-8-16
