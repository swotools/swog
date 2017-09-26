# SWOG / Graphic Framework v2.2.0

- Bootstrap 4.beta [on GitHub](https://github.com/twbs/bootstrap/tree/v4.0.0-beta)
- Sass
- Js
- Nodejs
- npm

## Novità
26-09-2017 - termino tentativo. versione beta. NOn riesco a compleate per errori nel minifyjs, trova "const Util = (() " al posto di "const Util = funciton() "
DA RIVEDERE
Grunt NON esiste più. Usa solo comandi Nodejs

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
dist                | Compila i dist
watch               |
watch-css           |
watch-js            |


### Bootstrap

### Swog

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
Versione 4 beta di bootstrap ...

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

- [ ] Creare upload S3 python dei file bootstrap.min e swog.min in CDN
