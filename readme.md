# SWOG / Graphic Framework

- Bootstrap framework
- Sass
- Js
- Nodejs
- npm
- grunt

## Installing

```bash
$ npm install
$ npm update
```

## Styling with swo.sass using npm grunt

Task            | Description
:-------------- | :--------------------------------------------------------------------------------------------
grunt           | Compila dist
grunt dist      | Compila bootstrap e swog, crea script e style minimizzati - output swog_core.css in publicdir
grunt watch     | Aggiorna automaticamente js e css se modificati dalle cartelle ./scss e ./js
grunt watch:js  | Aggiorna alla modifica js - esegue dist:js
grunt watch:css | Aggiorna alla modifica js - esegue dist:css

## Personalizzare Sass

### Bootstrap

Modifica il file `variables.scss` in `./scss/bs4`

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

Per escludere libreria JS da bootstrap commenta riga in file `concat.js` del task

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

## Clonare gui nei motori SWO

Nella root di _pocket_ o di _swo__ digita viene incluso nel require repo

## Compilare html con emmet

```code
div.row>.col-md-5+.col-md-7
```

Poi premi tab

Docs -> <http://docs.emmet.io>

## ToDO

- test grunt watch swog
- watch swogcss
- watch swogjs

## Note

"glob": "~4.3.1", - serve per includere i task first cm 5-8-16
