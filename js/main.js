let game = {
  layers:[{
    startData:{
      resource:new Decimal(0),
      gain:new Decimal(0)
    },
    upgrades:{
      11:{
        title:"Boost Production",
        description:"Triple your point gain.",
        cost:new Decimal(20),
        bought:0
      },
      12:{
        title:"Boost Production",
        description:"Triple your point gain.",
        cost:new Decimal("5e5"),
        bought:0,
        style:{
          backgroundColor:"yellow"
        }
      },
      13:{
        title:"Boost Production",
        description:"Triple your point gain.",
        cost:new Decimal("1e6"),
        bought:0,
        style:{
          backgroundColor:"yellow"
        }
      },
      14:{
        title:"Buyable",
        description:"unlock new buyable.",
        cost:new Decimal("2e6"),
        bought:0
      },
      15:{
        title:"Spent wait.",
        description:"coming soon.",
        cost:new Decimal("2e8"),
        bought:0
      },
      21:{
        title:"Go Go",
        description:"coming soon.",
        cost:new Decimal("5e8"),
        bought:0
      },
      22:{
        title:"Go SSS",
        description:"wait.",
        cost:new Decimal("3e9"),
        bought:0
      },
      23:{
        title:"Buyable II",
        description:"UNLOCK NEW BUYABLE.",
        cost:new Decimal("3e9"),
        bought:0
      },
      24:{
        title:"even golden",
        description:"wait for next update.",
        cost:new Decimal("1e10"),
        bought:0
      },
    },
    buyables:{
      11:{
        level:0,
        effect() {
          let l = new Decimal.pow(1.15, game.layers[0].buyables["11"].level)
          return l
        },
        unlocked() {return hasUpgrade(0, 14)},
        title:"Point Buyable",
        display() {
          return "<h3>Effect:" + game.layers[0].buyables["11"].effect() + "</h3>"
        },
        cost:new Decimal(3e6),
        style:{
          backgroundColor:"orange"
        }
      },
      12:{
        level:0,
        effect() {
          let l = new Decimal.pow(1.15, game.layers[0].buyables["12"].level)
          return l
        },
        unlocked() {return hasUpgrade(0, 23)},
        title:"Point Buyable",
        display() {
          return "<h3>Effect:" + game.layers[0].buyables["12"].effect() + "</h3>"
        },
        cost:new Decimal(3e6),
        style:{
          backgroundColor:"orange"
        }
      },
      13:{
        level:0,
        effect() {
          let l = new Decimal.pow(1.15, game.layers[0].buyables["13"].level)
          return l
        },
        unlocked() {return hasUpgrade(0, 23)},
        title:"Point Buyable",
        display() {
          return "<h3>Effect:" + game.layers[0].buyables["13"].effect() + "</h3>"
        },
        cost:new Decimal(6e8),
        style:{
          backgroundColor:"orange"
        }
      },
      14:{
        level:0,
        effect() {
          let l = new Decimal.pow(1.15, game.layers[0].buyables["14"].level)
          return l
        },
        unlocked() {return hasUpgrade(0, 23)},
        title:"Point Buyable",
        display() {
          return "<h3>Effect:" + game.layers[0].buyables["14"].effect() + "</h3>"
        },
        cost:new Decimal(2e10),
        style:{
          backgroundColor:"orange"
        }
      },
    },
    milestones:{
      0:{
        title:"100,000,000 A",
        description:"Goaled.",
        done() {return game.layers[0].startData.resource.gte(1e8)},
        hasDoned:new Decimal(1e8),
        hasDonedAppear() {return game.layers[0].startData.resource.gte(game.layers[0].milestones[0].hasDoned)}
      },
      1:{
        title:"300,000,000 A",
        description:"etc now.",
        done() {return game.layers[0].startData.resource.gte(3e8)},
        hasDoned:new Decimal(3e8),
        hasDonedAppear() {return game.layers[0].startData.resource.gte(game.layers[0].milestones[0].hasDoned)}
      },
      2:{
        title:"5e9 A",
        description:"etc = get.",
        done() {return game.layers[0].startData.resource.gte(5e9)},
        hasDoned:new Decimal(5e9),
        hasDonedAppear() {return game.layers[0].startData.resource.gte(game.layers[0].milestones[0].hasDoned)}
      },
      3:{
        title:"2e10 A",
        description:"wow wow",
        done() {return game.layers[0].startData.resource.gte(2e10)},
        hasDoned:new Decimal(2e10),
        hasDonedAppear() {return game.layers[0].startData.resource.gte(game.layers[0].milestones[0].hasDoned)}
      },
      4:{
        title:"5e10 A",
        description:"wow wow",
        done() {return game.layers[0].startData.resource.gte(5e10)},
        hasDoned:new Decimal(5e10),
        hasDonedAppear() {return game.layers[0].startData.resource.gte(game.layers[0].milestones[0].hasDoned)}
      },
      5:{
        title:"1e11 A",
        description:"wow wow",
        done() {return game.layers[0].startData.resource.gte(1e11)},
        hasDoned:new Decimal(1e11),
        hasDonedAppear() {return game.layers[0].startData.resource.gte(game.layers[0].milestones[0].hasDoned)}
      },
    }
  }]
}

document.getElementById("click").onclick = () => {
  game.layers[0].startData.resource = game.layers[0].startData.resource.add(1)
}

document.getElementById("button11").onclick = () => {
  if(game.layers[0].upgrades["11"].bought == 0) {
    if(game.layers[0].startData.resource.gte(game.layers[0].upgrades["11"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].upgrades["11"].cost)
      game.layers[0].upgrades["11"].bought += 1
    }
  }
}

document.getElementById("button12").onclick = () => {
  if(game.layers[0].upgrades["12"].bought == 0) {
    if(game.layers[0].startData.resource.gte(game.layers[0].upgrades["12"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].upgrades["12"].cost)
      game.layers[0].upgrades["12"].bought += 1
    }
  }
}

document.getElementById("button13").onclick = () => {
  if(game.layers[0].upgrades["13"].bought == 0) {
    if(game.layers[0].startData.resource.gte(game.layers[0].upgrades["13"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].upgrades["13"].cost)
      game.layers[0].upgrades["13"].bought += 1
    }
  }
}

document.getElementById("button14").onclick = () => {
  if(game.layers[0].upgrades["14"].bought == 0) {
    if(game.layers[0].startData.resource.gte(game.layers[0].upgrades["14"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].upgrades["14"].cost)
      game.layers[0].upgrades["14"].bought += 1
    }
  }
}

document.getElementById("button15").onclick = () => {
  if(game.layers[0].upgrades["15"].bought == 0) {
    if(game.layers[0].startData.resource.gte(game.layers[0].upgrades["15"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].upgrades["15"].cost)
      game.layers[0].upgrades["15"].bought += 1
    }
  }
}

document.getElementById("button21").onclick = () => {
  if(game.layers[0].upgrades["21"].bought == 0) {
    if(game.layers[0].startData.resource.gte(game.layers[0].upgrades["21"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].upgrades["21"].cost)
      game.layers[0].upgrades["21"].bought += 1
    }
  }
}

document.getElementById("button22").onclick = () => {
  if(game.layers[0].upgrades["22"].bought == 0) {
    if(game.layers[0].startData.resource.gte(game.layers[0].upgrades["22"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].upgrades["22"].cost)
      game.layers[0].upgrades["22"].bought += 1
    }
  }
}

document.getElementById("button23").onclick = () => {
  if(game.layers[0].upgrades["23"].bought == 0) {
    if(game.layers[0].startData.resource.gte(game.layers[0].upgrades["23"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].upgrades["23"].cost)
      game.layers[0].upgrades["23"].bought += 1
    }
  }
}

document.getElementById("button24").onclick = () => {
  if(game.layers[0].upgrades["24"].bought == 0) {
    if(game.layers[0].startData.resource.gte(game.layers[0].upgrades["24"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].upgrades["24"].cost)
      game.layers[0].upgrades["24"].bought += 1
    }
  }
}

document.getElementById("buttonBuyable11").onclick = () => {
  if(game.layers[0].startData.resource.gte(game.layers[0].buyables["11"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].buyables["11"].cost)
      game.layers[0].buyables["11"].level += 1
    }
}

document.getElementById("buttonBuyable12").onclick = () => {
  if(game.layers[0].startData.resource.gte(game.layers[0].buyables["12"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].buyables["12"].cost)
      game.layers[0].buyables["12"].level += 1
    }
}

document.getElementById("buttonBuyable13").onclick = () => {
  if(game.layers[0].startData.resource.gte(game.layers[0].buyables["13"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].buyables["13"].cost)
      game.layers[0].buyables["13"].level += 1
    }
}

document.getElementById("buttonBuyable14").onclick = () => {
  if(game.layers[0].startData.resource.gte(game.layers[0].buyables["14"].cost)) {
      game.layers[0].startData.resource = game.layers[0].startData.resource.sub(game.layers[0].buyables["14"].cost)
      game.layers[0].buyables["14"].level += 1
    }
}

function hasUpgrade(layernum, id) {
  return game.layers[layernum].upgrades[id].bought >= 1
}

function buyableEffect(layernum, id) {
  return game.layers[layernum].buyables[id].effect()
}

function hasMilestone(layernum, id) {
  return game.layers[layernum].milestones[id].hasDonedAppear()
}

function UpdateGameArea() {
  game.layers[0].startData.resource = game.layers[0].startData.resource.add(game.layers[0].startData.gain.mul(buyableEffect(0, 11)))
  document.getElementById("a").innerText = game.layers[0].startData.resource
  document.getElementById("title11").innerText = game.layers[0].upgrades["11"].title
  document.getElementById("description11").innerText = game.layers[0].upgrades["11"].description
  document.getElementById("cost11").innerText = game.layers[0].upgrades["11"].cost
  if(game.layers[0].upgrades["11"].bought >= 1) {
    document.getElementById("button11").style.backgroundColor = "green"
  } else {
    document.getElementById("button11").style.backgroundColor = "red"
  }
  document.getElementById("title12").innerText = game.layers[0].upgrades["12"].title
  document.getElementById("description12").innerText = game.layers[0].upgrades["12"].description
  document.getElementById("cost12").innerText = game.layers[0].upgrades["12"].cost
  document.getElementById("button12").style.backgroundColor = game.layers[0].upgrades['12'].style.backgroundColor
  document.getElementById("title13").innerText = game.layers[0].upgrades["13"].title
  document.getElementById("description13").innerText = game.layers[0].upgrades["13"].description
  document.getElementById("cost13").innerText = game.layers[0].upgrades["13"].cost
  document.getElementById("button13").style.backgroundColor = game.layers[0].upgrades['13'].style.backgroundColor
  document.getElementById("title14").innerText = game.layers[0].upgrades["14"].title
  document.getElementById("description14").innerText = game.layers[0].upgrades["14"].description
  document.getElementById("cost14").innerText = game.layers[0].upgrades["14"].cost
  document.getElementById("title15").innerText = game.layers[0].upgrades["15"].title
  document.getElementById("description15").innerText = game.layers[0].upgrades["15"].description
  document.getElementById("cost15").innerText = game.layers[0].upgrades["15"].cost
  document.getElementById("title21").innerText = game.layers[0].upgrades["21"].title
  document.getElementById("description21").innerText = game.layers[0].upgrades["21"].description
  document.getElementById("cost21").innerText = game.layers[0].upgrades["21"].cost
  document.getElementById("title22").innerText = game.layers[0].upgrades["22"].title
  document.getElementById("description22").innerText = game.layers[0].upgrades["22"].description
  document.getElementById("cost22").innerText = game.layers[0].upgrades["22"].cost
  document.getElementById("title23").innerText = game.layers[0].upgrades["23"].title
  document.getElementById("description23").innerText = game.layers[0].upgrades["23"].description
  document.getElementById("cost23").innerText = game.layers[0].upgrades["23"].cost
  document.getElementById("title24").innerText = game.layers[0].upgrades["24"].title
  document.getElementById("description24").innerText = game.layers[0].upgrades["24"].description
  document.getElementById("cost24").innerText = game.layers[0].upgrades["24"].cost
   document.getElementById("buyableTitle11").innerText = game.layers[0].buyables["11"].title
  document.getElementById("buyableDisplay11").innerHTML = game.layers[0].buyables["11"].display()
  document.getElementById("buyableCost11").innerText = game.layers[0].buyables["11"].cost
  document.getElementById("buyableTitle12").innerText = game.layers[0].buyables["12"].title
  document.getElementById("buyableDisplay12").innerHTML = game.layers[0].buyables["12"].display()
  document.getElementById("buyableCost12").innerText = game.layers[0].buyables["12"].cost
  document.getElementById("buyableTitle13").innerText = game.layers[0].buyables["13"].title
  document.getElementById("buyableDisplay13").innerHTML = game.layers[0].buyables["13"].display()
  document.getElementById("buyableCost13").innerText = game.layers[0].buyables["13"].cost
  document.getElementById("buyableTitle14").innerText = game.layers[0].buyables["14"].title
  document.getElementById("buyableDisplay14").innerHTML = game.layers[0].buyables["14"].display()
  document.getElementById("buyableCost14").innerText = game.layers[0].buyables["14"].cost
  document.getElementById("milestoneTitle0").innerText = game.layers[0].milestones["0"].title
  document.getElementById("milestoneDesc0").innerText = game.layers[0].milestones["0"].description
  document.getElementById("milestoneTitle1").innerText = game.layers[0].milestones["1"].title
  document.getElementById("milestoneDesc1").innerText = game.layers[0].milestones["1"].description
  document.getElementById("milestoneTitle2").innerText = game.layers[0].milestones["2"].title
  document.getElementById("milestoneDesc2").innerText = game.layers[0].milestones["2"].description
  document.getElementById("milestoneTitle3").innerText = game.layers[0].milestones["3"].title
  document.getElementById("milestoneDesc3").innerText = game.layers[0].milestones["3"].description
  document.getElementById("milestoneTitle4").innerText = game.layers[0].milestones["4"].title
  document.getElementById("milestoneDesc4").innerText = game.layers[0].milestones["4"].description
  document.getElementById("milestoneTitle5").innerText = game.layers[0].milestones["5"].title
  document.getElementById("milestoneDesc5").innerText = game.layers[0].milestones["5"].description
  if(game.layers[0].upgrades["14"].bought >= 1) {
    document.getElementById("button14").style.backgroundColor = "green"
  } else {
    document.getElementById("button14").style.backgroundColor = "red"
  }
  if(game.layers[0].upgrades["15"].bought >= 1) {
    document.getElementById("button15").style.backgroundColor = "green"
  } else {
    document.getElementById("button15").style.backgroundColor = "red"
  }
  if(game.layers[0].upgrades["21"].bought >= 1) {
    document.getElementById("button21").style.backgroundColor = "green"
  } else {
    document.getElementById("button21").style.backgroundColor = "red"
  }
  if(game.layers[0].upgrades["22"].bought >= 1) {
    document.getElementById("button22").style.backgroundColor = "green"
  } else {
    document.getElementById("button22").style.backgroundColor = "red"
  }
  if(game.layers[0].upgrades["23"].bought >= 1) {
    document.getElementById("button23").style.backgroundColor = "green"
  } else {
    document.getElementById("button23").style.backgroundColor = "red"
  }
   if(game.layers[0].upgrades["24"].bought >= 1) {
    document.getElementById("button24").style.backgroundColor = "green"
  } else {
    document.getElementById("button24").style.backgroundColor = "red"
  }
  if(game.layers[0].upgrades["14"].bought >= 1) {
    document.getElementById("buttonBuyable11").style.display = "block"
  } else {
    document.getElementById("buttonBuyable11").style.display = "none"
  }
  if(game.layers[0].upgrades["23"].bought >= 1) {
    document.getElementById("buttonBuyable12").style.display = "block"
  } else {
    document.getElementById("buttonBuyable12").style.display = "none"
  }
   if(game.layers[0].upgrades["23"].bought >= 1) {
    document.getElementById("buttonBuyable13").style.display = "block"
  } else {
    document.getElementById("buttonBuyable13").style.display = "none"
  }
  if(game.layers[0].upgrades["24"].bought >= 1) {
    document.getElementById("buttonBuyable14").style.display = "block"
  } else {
    document.getElementById("buttonBuyable14").style.display = "none"
  }
  if(game.layers[0].startData.resource.gte(game.layers[0].milestones["0"].hasDoned)) {
    document.getElementById("milestone0").style.backgroundColor = "green"
  } else {
    document.getElementById("milestone0").style.backgroundColor = "red"
  }
  if(game.layers[0].startData.resource.gte(game.layers[0].milestones["1"].hasDoned)) {
    document.getElementById("milestone1").style.backgroundColor = "green"
  } else {
    document.getElementById("milestone1").style.backgroundColor = "red"
  }
  if(game.layers[0].startData.resource.gte(game.layers[0].milestones["2"].hasDoned)) {
    document.getElementById("milestone2").style.backgroundColor = "green"
  } else {
    document.getElementById("milestone2").style.backgroundColor = "red"
  }
  if(game.layers[0].startData.resource.gte(game.layers[0].milestones["3"].hasDoned)) {
    document.getElementById("milestone3").style.backgroundColor = "green"
  } else {
    document.getElementById("milestone3").style.backgroundColor = "red"
  }
  if(game.layers[0].startData.resource.gte(game.layers[0].milestones["4"].hasDoned)) {
    document.getElementById("milestone4").style.backgroundColor = "green"
  } else {
    document.getElementById("milestone4").style.backgroundColor = "red"
  }
  if(game.layers[0].startData.resource.gte(game.layers[0].milestones["5"].hasDoned)) {
    document.getElementById("milestone5").style.backgroundColor = "green"
  } else {
    document.getElementById("milestone5").style.backgroundColor = "red"
  }
  if(game.layers[0].upgrades["23"].bought >= 1) {
    document.getElementById("buttonBuyable12").style.display = "block"
  } else {
    document.getElementById("buttonBuyable12").style.display = "none"
  }
  if(game.layers[0].upgrades["24"].bought >= 1) {
    document.getElementById("buttonBuyable13").style.display = "block"
  } else {
    document.getElementById("buttonBuyable13").style.display = "none"
  }
  document.getElementById("buttonBuyable11").style.backgroundColor = "green"
  document.getElementById("milestone1").style.display = "block"
  if(hasUpgrade(0, "11")) game.layers[0].startData.gain = game.layers[0].startData.gain.add(3)
  if(hasUpgrade(0, "12")) game.layers[0].startData.gain = game.layers[0].startData.gain.mul(3)
  if(hasUpgrade(0, "13")) game.layers[0].startData.gain = game.layers[0].startData.gain.mul(3)
}

// COOL BE NOW!
setInterval(UpdateGameArea, 200)