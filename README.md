# Portage Bay Solutions - DataTables Demo

# Original Kit

_JS Dev Kit courtesy of Jeremy Brown's [js-dev-environment](https://github.com/integrating-magic/js-dev-environment)_

# Kit - Template

## What it does

This environment uses the same js-dev-environment as the original kit. For this environment we provided the basic template needed to produce a DataTables integration. You can use this as a starter to customize your DataTable implementation building upon the existing code base.

## Consists of

- A repository template on Github
- A basic html / JS set up.
- package.json file for install
- A FileMaker file to show the widget rendered
- Scripts to build and upload the inlined code to FileMaker

## Getting Started

_This widget requires the associated FMP.12 Demo file to function correctly._

1. `npm install`
2. `npm start`
3. Open the DataTables-Demo_PBS.fmp12 file.
4. JSDev Example - Last Layout in Demo File
5. Allow it to work in Dev mode.

WebViewer should be populated with the PBS custom DataTable. </br>
Ready for modifications
</br>

### **Tools and Resources**

- [VSCode](https://code.visualstudio.com) - _(recommended)_
- [Git](https://git-scm.com) - _(recommended)_
- [nodejs](https://nodejs.org/en/) - _this workflow uses npm (required)_
- [jsinFM](https://www.jsinfm.com) - _Original Kit Documentation_

## Kit Modifications

Support for DataTables

### Called from FileMaker Script

- JSON object is sent during Load Web Viewer Event, data retrieved using the FileMaker Execute DataAPI script step.

```javascript
window.loadData = function (json) {
const obj = JSON.parse(json);
// console.log(obj);
const dataSet = obj.data;
// console.log(dataSet);
```
