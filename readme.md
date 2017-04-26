# SWOG / Graphic Framework v2.1.0

- Bootstrap 4.0.0 [on GitHub](https://github.com/twbs/bootstrap/tree/v4.0.0-alpha.6)
- Sass
- Js
- Nodejs
- npm
- grunt
## Installing SWOG
```bash
composer require --dev swotools/swog
```
Oppure
```json
"require-dev": {
  "swotools/swog": "^2.1"
}
```
## Installing packages
```bash
$ npm install
$ npm update
```

## Comandi SWOG
I comandi di installazione, manutenzione e aggiornamento di swog sono inclusi in Tools (swotools) richiesto ad ogni installazione di swog.
```json
"scripts": {
  "swog:install": "bash vendor/swotools/tools/bin/swog/install.sh"
},
```
Per tutti i comandi disponibili, visita [questa pagina](https://github.com/swotools/tools#comandi)


## Styling with swo.sass using npm grunt

Task                | Description
:------------------ | :-------------------------------------
dev                 | Compila i dev
dist                | Compila i dist
grunt               | (default) Compila dev
grunt dev-jsbs      | Compila babel bootstrap
grunt dist-jsbs     | Esegue dev-jsbs e uglify
grunt dev-jsswog    | Concatena swog
grunt dist-jsswog   | Esegue dev-jsswog e uglify
grunt dev-bscss     | Compila i SASS di bootstrap
grunt dist-bscss    | Esegue il dev-bscss e clean-css
grunt dev-swogcss   | Compila i SASS di swog
grunt dist-swogcss  | Esegue il dev-swogcss e clean-css
grunt watch         | Ascolta i task qui sotto
grunt watch:bscss   | Ascolta solo la cartella SCSS di bs4/
grunt watch:swogcss | Ascolta solo la cartella SCSS di swog/
grunt watch:swogjs  | Ascolta solo la cartella JS di swog/


## Sass
Gli stili del sito li scrivi in SASS nel file `stile.scss`, le variabili le metti nel file `variabili.scss` ovviamente in SASS
### Bootstrap
wip
### Swog
#### variabili.scss

```css
$giallo:    #ffcc00 !default;
$blusmart:  rgb(0, 42, 190) !default;
```
#### stile.scss

```css
* {margin: 0;padding: 0;}
body {padding-top: 50px;overflow-x: hidden;}
.oggi{
    background-color: $giallo;
}
```
## Javascript

### Bootstrap

Per escludere libreria JS da bootstrap commenta riga in file `./grunt/tasks/options/concat.js` del task

### Swog
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
## Note
### Manutenzione verso la RC1 da alpha4
git fetch su bootstrap, carica js e scss in swog e controlla (meld) differenze di gruntfile

### Note
Versione alpha4 di bootstrap ...

### Compilare html con emmet

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

Compilato il dist, trovi i file map in public/static.
Creare upload S3 python dei file bootstrap.min e swog.min in CDN
