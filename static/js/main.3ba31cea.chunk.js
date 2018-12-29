(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(10),i=a.n(s),o=(a(9),a(2)),c=a(3),r=a(5),h=a(4),d=a(6),u=(a(7),a(1)),m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).handleLevel=a.handleLevel.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleLevel",value:function(e){this.props.onChange(parseInt(e.target.value))}},{key:"render",value:function(){var e="row "+this.props.hide;return l.a.createElement("div",{className:e,style:{marginTop:20,marginLeft:"auto",marginRight:"auto"}},l.a.createElement("div",{className:"col-xs",style:{fontSize:16,marginRight:10,textAlign:"left"}},"Choose your level:"),l.a.createElement("input",{className:"col-xs",style:{textAlign:"center",marginLeft:"auto",marginRight:"auto",width:75},id:"clericLevel",type:"number",min:"1",max:"4",defaultValue:this.props.level,onInput:this.handleLevel}))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).handleMod=a.handleMod.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleMod",value:function(e){this.props.onChange(parseInt(e.target.value))}},{key:"render",value:function(){var e="row "+this.props.hide;return l.a.createElement("div",{className:e,style:{marginTop:20,marginLeft:"auto",marginRight:"auto"}},l.a.createElement("div",{className:"col-xs",style:{fontSize:16,marginRight:10,textAlign:"left"}},"Choose your Wisdom modifier:"),l.a.createElement("input",{className:"col-xs",style:{textAlign:"center",marginLeft:"auto",marginRight:"auto",width:75},id:"wisMod",type:"number",min:"-3",max:"5",defaultValue:this.props.wisMod,onInput:this.handleMod}))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.props.handleClick()}},{key:"render",value:function(){return l.a.createElement("div",{style:{textAlign:"center"}},!1,l.a.createElement("button",{className:"center-button",onClick:this.handleClick},"Prepare now"))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){if(console.log(e.currentTarget.value),0===this.props.spellNumber)return this.clearSelected(),null;var t=e.currentTarget.value;this.props.onClick(t),this.clearSelected()}},{key:"clearSelected",value:function(){for(var e=document.querySelectorAll("option"),t=0;t<e.length;t++)e[t].selected=!1}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:this.props.hide,style:{textAlign:"center"}},l.a.createElement("div",{className:"choose"},"Choose ",l.a.createElement("span",{className:"blue"},this.props.spellNumber)," (click to add)"),l.a.createElement("div",{className:"my-custom-select"},l.a.createElement("b",null,"Level One"),this.props.levelOne.map(function(t,a){return e.props.selectMaker(t,a,"choice")}),this.props.level>2&&l.a.createElement("div",null,l.a.createElement("b",null,"Level Two"),this.props.levelTwo.map(function(t,a){return e.props.selectMaker(t,a,"choice")}))))}}]),t}(n.Component),g=(a(19),function(e){function t(e){return Object(o.a)(this,t),Object(r.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:this.props.hide,style:{border:"1px solid white",minHeight:"8em"}},l.a.createElement("b",null,l.a.createElement("span",{className:"choose"},"Chosen spells:")),l.a.createElement("br",null),l.a.createElement("div",{className:"my-custom-select"},l.a.createElement("b",null,"Level One"),this.props.chosenOne.map(function(t,a){return e.props.selectMaker(t,a,"chosen")}),this.props.chosenTwo.length>0&&l.a.createElement("div",null,l.a.createElement("b",null,"Level Two"),this.props.chosenTwo.map(function(t,a){return e.props.selectMaker(t,a,"chosen")}))))}}]),t}(n.Component)),S=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="center "+this.props.hide;return l.a.createElement("div",{className:e},l.a.createElement("button",{onClick:this.props.handleClick},"Begin Adventuring"))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t=e.currentTarget.getAttribute("level");this.props.reduceNumber(t)}},{key:"render",value:function(){var e="center no-select "+this.props.hide;return l.a.createElement("div",{className:e},l.a.createElement("p",null,"Click a spell slot to expend it"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm spell-slot",onTouchStart:"",onClick:this.handleClick,level:"1"},l.a.createElement("p",{style:{fontSize:14,weight:"bold",marginBottom:-3}},"1",l.a.createElement("sup",null,"st")," Level"),l.a.createElement("p",{style:{fontSize:9,weight:"bold",marginBottom:0}},"Spell Slot"),l.a.createElement("p",{style:{fontSize:35,weight:"bold",lineHeight:"1.2em",marginBottom:0}},this.props.levelOne),l.a.createElement("p",{style:{fontSize:10,weight:"bold",marginBottom:".5em"}},"remaining")),l.a.createElement("div",{className:"col-sm spell-slot",ontouchstart:"",onClick:this.handleClick,level:"2"},l.a.createElement("p",{style:{fontSize:14,weight:"bold",marginBottom:-3}},"2",l.a.createElement("sup",null,"nd")," Level"),l.a.createElement("p",{style:{fontSize:9,weight:"bold",marginBottom:0}},"Spell Slot"),l.a.createElement("p",{style:{fontSize:35,weight:"bold",lineHeight:"1.2em",marginBottom:0}},this.props.levelTwo),l.a.createElement("p",{style:{fontSize:10,weight:"bold",marginBottom:".5em"}},"remaining"))))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:this.props.hide,style:{maxWidth:600}},"Prepared Spells:",l.a.createElement("br",null),l.a.createElement("p",null,"1",l.a.createElement("sup",null,"st")," Level: ",this.props.levelOneSpells.join(", ")),l.a.createElement("p",null,"2",l.a.createElement("sup",null,"nd")," Level: ",this.props.levelTwoSpells.join(", ")))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={cantrips:["Guidance","Light","Mending","Resistance","Sacred Flame","Spare the Dying","Thaumaturgy"],firstLevel:["Bane","Command","Create or Destroy Water","Detect Evil and Good","Detect Magic","Detect Poison and Disease","Guiding Bolt","Healing Word","Inflict Wounds","Protection from Evil and Good","Purify Food and Drink","Sanctuary","Shield of Faith"],secondLevel:["Aid","Augury","Blindness/Deafness","Calm Emotions","Continual Flame","Enhance Ability","Find Traps","Gentle Repose","Hold Person","Lesser Restoration","Locate Object","Prayer of Healing","Protection from Poison","Silence","Spiritual Weapon","Warding Bond","Zone of Truth"],firstLevelChoice:["Bane","Command","Create or Destroy Water","Detect Evil and Good","Detect Magic","Detect Poison and Disease","Guiding Bolt","Healing Word","Inflict Wounds","Protection from Evil and Good","Purify Food and Drink","Sanctuary","Shield of Faith"],secondLevelChoice:["Aid","Augury","Blindness/Deafness","Calm Emotions","Continual Flame","Enhance Ability","Find Traps","Gentle Repose","Hold Person","Locate Object","Prayer of Healing","Protection from Poison","Silence","Warding Bond","Zone of Truth"],bonus:["Healing Word","Sanctuary","Shield of Faith","Spiritual Weapon"],conc:["Bane","Bless","Detect Evil and Good","Detect Magic","Detect Poison and Disease","Protection from Evil and Good","Shield of Faith","Calm Emotions","Enhance Ability","Hold Person","Locate Object","Silence"],domain:["Bless","Cure Wounds","Lesser Restoration","Spiritual Weapon"],clericLevel:3,cantripsKnown:3,levelOneSlots:4,levelTwoAvail:!0,levelTwoSlots:2,wisdomMod:3,spellNumber:6,spellChoiceNumber:6,startScreenHide:"",chooseScreenHide:"hidden",castingScreenHide:"hidden",domainSpellsFirst:["Bless","Cure Wounds"],domainSpellsSecond:["Lesser Restoration","Spiritual Weapon"],choseFirst:["Bless","Cure Wounds"],choseSecond:["Lesser Restoration","Spiritual Weapon"]},a.changeClericLevel=a.changeClericLevel.bind(Object(u.a)(Object(u.a)(a))),a.changeSpellSlots=a.changeSpellSlots.bind(Object(u.a)(Object(u.a)(a))),a.changeWisMod=a.changeWisMod.bind(Object(u.a)(Object(u.a)(a))),a.changeSpellNumber=a.changeSpellNumber.bind(Object(u.a)(Object(u.a)(a))),a.hideForChoosing=a.hideForChoosing.bind(Object(u.a)(Object(u.a)(a))),a.updateSpellChoiceNumber=a.updateSpellChoiceNumber.bind(Object(u.a)(Object(u.a)(a))),a.convertToBaseName=a.convertToBaseName.bind(Object(u.a)(Object(u.a)(a))),a.removeChosen=a.removeChosen.bind(Object(u.a)(Object(u.a)(a))),a.startCasting=a.startCasting.bind(Object(u.a)(Object(u.a)(a))),a.spellWasCast=a.spellWasCast.bind(Object(u.a)(Object(u.a)(a))),a.selectMaker=a.selectMaker.bind(Object(u.a)(Object(u.a)(a))),a.handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"changeClericLevel",value:function(e){this.setState({clericLevel:e}),this.changeSpellSlots(e),this.changeSpellNumber(this.state.wisdomMod,e)}},{key:"changeSpellSlots",value:function(e){var t,a=e+1>4?4:e+1,n=[];e<3?(n[0]=0,n[1]=!1):3==e?(n[0]=2,n[1]=!0):e>3&&(n[0]=3,n[1]=!0),t=e<4?3:e<10?4:5,this.setState({levelOneSlots:a,levelTwoSlots:n[0],levelTwoAvail:n[1],cantripsKnown:t})}},{key:"changeWisMod",value:function(e){this.setState({wisdomMod:e}),this.changeSpellNumber(e,this.state.clericLevel)}},{key:"changeSpellNumber",value:function(e,t){var a;a=e+t<1?1:t+e,this.setState({spellNumber:a,spellChoiceNumber:a})}},{key:"hideForChoosing",value:function(){this.setState({startScreenHide:"hidden",chooseScreenHide:""})}},{key:"updateSpellChoiceNumber",value:function(e){var t,a=parseInt(this.state.spellChoiceNumber)-1,n=[],l=this.state.choseFirst,s=this.state.choseSecond;console.log(e),console.log(this.state.firstLevelChoice),this.state.firstLevelChoice.includes(e)?(n=this.state.firstLevelChoice,l.push(e),l.sort(),t=1):this.state.secondLevelChoice.includes(e)?(n=this.state.secondLevelChoice,s.push(e),s.sort(),t=2):console.log("error: spell doesn't match"),n.splice(n.indexOf(e),1),1===t?this.setState({spellChoiceNumber:a,firstLevelChoice:n,choseFirst:l}):this.setState({spellChoiceNumber:a,secondLevelChoice:n,choseSecond:s})}},{key:"convertToBaseName",value:function(e){var t=e.slice(0,-1),a=e.slice(0,-2),n=this.state.firstLevel.concat(this.state.secondLevel).concat(this.state.domainSpellsFirst).concat(this.state.domainSpellsSecond);return n.includes(t)?e=t:n.includes(a)&&(e=a),e}},{key:"removeChosen",value:function(e){var t=this.state.choseFirst.indexOf(e),a=this.state.choseFirst,n=this.state.choseSecond.indexOf(e),l=this.state.choseSecond,s=[],i=this.state.spellChoiceNumber;if(console.log(t),console.log(n),-1!==t){s=a.splice(t,1);var o=this.state.firstLevelChoice;o.push(s[0]),o.sort(),i++,this.setState({choseFirst:a,firstLevelChoice:o,spellChoiceNumber:i})}if(-1!==n){s=l.splice(n,1);var c=this.state.secondLevelChoice;c.push(s[0]),c.sort(),i++,this.setState({choseSecond:l,secondLevelChoice:c,spellChoiceNumber:i})}}},{key:"startCasting",value:function(){console.log("start casting"),this.setState({chooseScreenHide:"hidden",castingScreenHide:""})}},{key:"spellWasCast",value:function(e){if(1==e&&this.state.levelOneSlots>0){var t=this.state.levelOneSlots-1;this.setState({levelOneSlots:t})}else if(2==e&&this.state.levelTwoSlots>0){var a=this.state.levelTwoSlots-1;this.setState({levelTwoSlots:a})}}},{key:"selectMaker",value:function(e,t,a){var n=this.state.bonus.includes(e),s=this.state.domain.includes(e),i=this.state.conc.includes(e);return l.a.createElement("div",{key:e,className:"selectable",onClick:this.handleClick,val:e,data:a,style:{paddingLeft:18,width:"100%"}},e,n||i||s?" (":null,s?"D":null,n?"B":null,i?"C":null,n||i||s?")":null)}},{key:"handleClick",value:function(e){var t=e.currentTarget.getAttribute("val"),a=e.currentTarget.getAttribute("data");console.log(t),console.log("called from a "+e.currentTarget.getAttribute("data")),this.state.domain.includes(t)||"chosen"!=a||(console.log("this is not a domain spell"),this.removeChosen(t)),0==!this.state.spellChoiceNumber&&"choice"==a&&(console.log("choice"),this.updateSpellChoiceNumber(t))}},{key:"render",value:function(){var e="row "+this.state.startScreenHide;return l.a.createElement("div",null,l.a.createElement("h2",{className:"my-title"},"Spell Selector"),l.a.createElement(S,{hide:this.state.chooseScreenHide,handleClick:this.startCasting}),l.a.createElement(f,{hide:this.state.castingScreenHide,levelOne:this.state.levelOneSlots,levelTwo:this.state.levelTwoSlots,reduceNumber:this.spellWasCast}),l.a.createElement(C,{hide:this.state.castingScreenHide,levelOneSpells:this.state.choseFirst,levelTwoSpells:this.state.choseSecond}),l.a.createElement("div",{className:e},l.a.createElement("div",{className:"col-xs",style:{marginBottom:25}},l.a.createElement(m,{onChange:this.changeClericLevel,level:this.state.clericLevel,hide:this.state.startScreenHide}),l.a.createElement(p,{onChange:this.changeWisMod,wisMod:this.state.wisdomMod,hide:this.state.startScreenHide}))),l.a.createElement("div",{className:this.state.startScreenHide},l.a.createElement("div",null,l.a.createElement(v,{level:this.state.clericLevel,levelOne:this.state.levelOneSlots,levelTwo:this.state.levelTwoSlots,spellNumber:this.state.spellNumber,handleClick:this.hideForChoosing,hide:this.state.startScreenHide,wisMod:this.state.wisdomMod,levelTwoAvail:this.state.levelTwoAvail,cantripsKnown:this.state.cantripsKnown}))),l.a.createElement(g,{hide:this.state.chooseScreenHide,chosenOne:this.state.choseFirst,chosenTwo:this.state.choseSecond,domain:this.state.domainSpells,bonus:this.state.bonusAction,conc:this.state.concSpell,cleanString:this.convertToBaseName,removeChosen:this.removeChosen,selectMaker:this.selectMaker}),l.a.createElement(b,{hide:this.state.chooseScreenHide,cantrips:this.state.myCantrips,levelOne:this.state.firstLevelChoice,levelTwo:this.state.secondLevelChoice,spellNumber:this.state.spellChoiceNumber,onClick:this.updateSpellChoiceNumber,level:this.state.clericLevel,cleanString:this.convertToBaseName,selectMaker:this.selectMaker}))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(O,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){},9:function(e,t,a){}},[[11,2,1]]]);
//# sourceMappingURL=main.3ba31cea.chunk.js.map