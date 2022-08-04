# Layouts
### in `js/main.js` these at layouts here:
```js
layouts:{
  contents:[
    {type:"main-display"},
    {type:"blank"}
  ]
}
```
### I Needed Show:
```html
<h2>
       <span id="a">0</span> A
    </h2>
<span 
      class="blank"
      style="height:25px;"
></span>
```
```js
document.getElementById(/* name */).innerText = ""
```
### FEATURES
- main-display: I boordy main is displaying.
- click-button: Click button these found.
- blank: If a we blank
- display-text:if we display sample as (`{type:"display-text", text:"hello world!"}`)
- upgrades: i think strong a upgrades.
- buyables:if there buyable get found.
- milestones:i so milestone get found:
- label: Returns `<label>` html element samples at `{type:"label", text:"Hello Label i defaluted.", forThings:"instant things"}`
- clickables: i be than clickables of this!
- flex: display than flex samples at `{type:"flex", style:{justifyContent:"center"}}`.
