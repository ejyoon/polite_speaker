var filename = "EJY_polgrice_goals_v4" 
var condCounts = "1,5;2,5;" //Example: "1,20;2,20;3,20"

// ---------------- HELPER ------------------
var NUM_SLIDERS = 3;
var NUM_SLIDERS1 = 3;
var NUM_SLIDERS2 = 2;

function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}

function clearForm(oForm) {
  var sliderVar = "";
  for(var i=0; i<NUM_SLIDERS; i++)
  {
    sliderVar = "#slider" + i;
    $(sliderVar).slider("value", 20);
    $(sliderVar).css({"background":"#FFFFFF"});
    $(sliderVar + " .ui-slider-handle").css({
        "background":"#FAFAFA",
        "border-color": "#CCCCCC" });
    sliderVar = "slider" + i;
    document.getElementById(sliderVar).style.background = "";
  }
  
  var elements = oForm.elements; 
  
  oForm.reset();

  for(var i=0; i<elements.length; i++) {
    field_type = elements[i].type.toLowerCase();
    switch(field_type) {
    
      case "text": 
      case "password": 
      case "textarea":
            case "hidden":	
        
        elements[i].value = ""; 
        break;
          
      case "radio":
      case "checkbox":
          if (elements[i].checked) {
            elements[i].checked = false; 
        }
        break;
  
      case "select-one":
      case "select-multi":
                  elements[i].selectedIndex = -1;
        break;
  
      default: 
        break;
    }
  }
}

Array.prototype.random = function() {
  return this[random(this.length)];
}

// shuffle function
function shuffle (a) 
{ 
    var o = [];    
    for (var i=0; i < a.length; i++) {
	o[i] = a[i];
    }    
    for (var j, x, i = o.length;
	 i;
	 j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);	
    return o;
}

function shuffledArray(arrLength)
{
  var j, tmp;
  var arr = new Array(arrLength);
  for (i = 0; i < arrLength; i++)
  {
    arr[i] = i;
  }
  for (i = 0; i < arrLength-1; i++)
  {
    j = Math.floor((Math.random() * (arrLength - 1 - i)) + 0.99) + i;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function shuffledSampleArray(arrLength, sampleLength)
{
  var arr = shuffledArray(arrLength);
  var beginIndex = Math.floor(Math.random() * (arrLength-sampleLength+1));
  return arr.slice(beginIndex, beginIndex+sampleLength);
}

function getRadioCheckedValue(formNum, radio_name)
{
   var oRadio = document.forms[formNum].elements[radio_name];
   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)
      {
         return oRadio[i].value;
      }
   }
   return '';
}


// ---------------- PARAMETERS ------------------

// CONDITION ASSIGNMENT
// var cond = random(3)+1;
var expt = "polgrice_uttJudg";
//var cond = random(2)+1;
//var cond = 1;
var cond = "uttJudg"

// call the maker getter to get the cond variable 
//var xmlHttp = null;
//xmlHttp = new XMLHttpRequest();
//xmlHttp.open( "GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=" + condCounts +"&filename=" + filename, false );
//xmlHttp.send( null );
//var cond = xmlHttp.responseText;

var score = shuffle(["nice", "honest", "mean"]);
var prediction = shuffle(["ask", "like"])

//if (cond == 1) {
//    state_knowledge = "known";
//} else if (cond == 2) {
    var state_knowledge = "unknown";
//}

//var domains = shuffle(["poem", "cake", "cookie", "presentation", "painting", "review"]);

var domains1 = 
    shuffle(["poem", "cake", "cookie", "presentation", "song", "film", "solo", "monologue", "dance", "painting", "app", "review", "recital"]);
var domains = domains1.concat(domains1, domains1, domains1)

var states0 = ["heart2", "heart1", "heart0"];
var states1 = 
    ["heart0", "heart1", "heart2", "heart3"];
var states2 = 
    ["heart1", "heart2", "heart3", "heart0"];
var states3 = 
    ["heart2", "heart3", "heart0", "heart1"];
var states4 = 
    ["heart3", "heart0", "heart1", "heart2"];
var states = states0.concat(states1, states2, states3, states4, states1, states2, states3, states4)
//var states = states1.concat(states1, states1, states1, states1, states1, states1, states1)

var utterances0 = ["practice1", "practice2", "practice3"];
var utterances1 = 
    ["yes_terrible", "not_bad", "not_good", "yes_amazing"];
var utterances2 = 
    ["not_terrible", "yes_bad", "yes_good", "not_amazing"];
//var utterances = utterances1.concat(utterances2, utterances1, utterances2, utterances1, utterances2, utterances1, utterances2, utterances1, utterances2)
var utterances = utterances0.concat(utterances1, utterances1, utterances1, utterances1, utterances2, utterances2, utterances2, utterances2)


var goals = 
    ["nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean","nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean","nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean","nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean","nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean", "nice", "honest", "mean"];

    var allConditions = 
    [
{"domain": domains[0],
 "state": states[0],
 "utterance": utterances[0],
 "people": "people1",
 "goal": goals[0],
},
{"domain": domains[1],
 "state": states[1],
 "utterance": utterances[1],
 "people": "people2",
 "goal": goals[1],
},
{"domain": domains[2],
 "state": states[2],
 "utterance": utterances[2],
 "people": "people3",
 "goal": goals[2],
},
].concat(
//shuffle(
//    [
    
shuffle(
    [
//{"domain": domains[0],
// "state": states[0],
// "utterance": utterances[0],
// "people": "people1",
// "goal": goals[0],
//},
//{"domain": domains[1],
// "state": states[1],
// "utterance": utterances[1],
// "people": "people2",
// "goal": goals[1],
//},
//{"domain": domains[2],
// "state": states[2],
// "utterance": utterances[2],
// "people": "people3",
// "goal": goals[2],
//},
{"domain": domains[3],
 "state": states[3],
 "utterance": utterances[3],
 "people": "people4",
 "goal": goals[3],
},
{"domain": domains[4],
 "state": states[4],
 "utterance": utterances[4],
 "people": "people5",
 "goal": goals[4],
},
{"domain": domains[5],
 "state": states[5],
 "utterance": utterances[5],
 "people": "people6",
 "goal": goals[5],
},
{"domain": domains[6],
 "state": states[6],
 "utterance": utterances[6],
 "people": "people7",
 "goal": goals[6],
},
{"domain": domains[7],
 "state": states[7],
 "utterance": utterances[7],
 "people": "people8",
 "goal": goals[7],
},
{"domain": domains[8],
 "state": states[8],
 "utterance": utterances[8],
 "people": "people9",
 "goal": goals[8],
},
{"domain": domains[9],
 "state": states[9],
 "utterance": utterances[9],
 "people": "people10",
 "goal": goals[9],
},
{"domain": domains[10],
 "state": states[10],
 "utterance": utterances[10],
 "people": "people11",
 "goal": goals[10],
},
{"domain": domains[11],
 "state": states[11],
 "utterance": utterances[11],
 "people": "people12",
 "goal": goals[11],
},
{"domain": domains[12],
 "state": states[12],
 "utterance": utterances[12],
 "people": "people13",
 "goal": goals[12],
},
{"domain": domains[13],
 "state": states[13],
 "utterance": utterances[13],
 "people": "people14",
 "goal": goals[13],
},
{"domain": domains[14],
 "state": states[14],
 "utterance": utterances[14],
 "people": "people15",
 "goal": goals[14],
},
{"domain": domains[15],
 "state": states[15],
 "utterance": utterances[15],
 "people": "people16",
 "goal": goals[15],
},
{"domain": domains[16],
 "state": states[16],
 "utterance": utterances[16],
 "people": "people17",
 "goal": goals[16],
},
{"domain": domains[17],
 "state": states[17],
 "utterance": utterances[17],
 "people": "people18",
 "goal": goals[17],
},
{"domain": domains[18],
 "state": states[18],
 "utterance": utterances[18],
 "people": "people19",
 "goal": goals[18],
},
{"domain": domains[19],
 "state": states[19],
 "utterance": utterances[19],
 "people": "people20",
 "goal": goals[19],
},
{"domain": domains[20],
 "state": states[20],
 "utterance": utterances[20],
 "people": "people21",
 "goal": goals[20],
},
{"domain": domains[21],
 "state": states[21],
 "utterance": utterances[21],
 "people": "people22",
 "goal": goals[21],
},
{"domain": domains[22],
 "state": states[22],
 "utterance": utterances[22],
 "people": "people23",
 "goal": goals[22],
},
{"domain": domains[23],
 "state": states[23],
 "utterance": utterances[23],
 "people": "people24",
 "goal": goals[23],
},
{"domain": domains[24],
 "state": states[24],
 "utterance": utterances[24],
 "people": "people25",
 "goal": goals[24],
},
{"domain": domains[25],
 "state": states[25],
 "utterance": utterances[25],
 "people": "people26",
},
{"domain": domains[26],
 "state": states[26],
 "utterance": utterances[26],
 "people": "people27",
},
{"domain": domains[27],
 "state": states[27],
 "utterance": utterances[27],
 "people": "people28",
},
{"domain": domains[28],
 "state": states[28],
 "utterance": utterances[28],
 "people": "people29",
},
{"domain": domains[29],
 "state": states[29],
 "utterance": utterances[29],
 "people": "people30",
},
{"domain": domains[30],
 "state": states[30],
 "utterance": utterances[30],
 "people": "people31",
},
{"domain": domains[31],
 "state": states[31],
 "utterance": utterances[31],
 "people": "people32",
},
{"domain": domains[32],
 "state": states[32],
 "utterance": utterances[32],
 "people": "people33",
},
{"domain": domains[33],
 "state": states[33],
 "utterance": utterances[33],
 "people": "people34",
},
{"domain": domains[34],
 "state": states[34],
 "utterance": utterances[34],
 "people": "people35",
},
//{"domain": domains[35],
// "state": states[35],
// "utterance": utterances[35],
// "people": "people36",
//},
//{"domain": domains[36],
// "state": states[36],
// "utterance": utterances[36],
// "people": "people37",
//},
//{"domain": domains[37],
// "state": states[37],
// "utterance": utterances[37],
// "people": "people38",
//},
//{"domain": domains[38],
// "state": states[38],
// "utterance": utterances[38],
// "people": "people39",
//},
//{"domain": domains[39],
// "state": states[39],
// "utterance": utterances[39],
// "people": "people40",
//},
//{"domain": domains[40],
// "state": states[40],
// "utterance": utterances[40],
// "people": "people41",
//},
//{"domain": domains[41],
// "state": states[41],
// "utterance": utterances[41],
// "people": "people42",
//},
//{"domain": domains[42],
// "state": states[42],
// "utterance": utterances[42],
// "people": "people43",
//},
//{"domain": domains[43],
// "state": states[43],
// "utterance": utterances[43],
// "people": "people44",
//},
//{"domain": domains[44],
// "state": states[44],
// "utterance": utterances[44],
// "people": "people45",
//},
//{"domain": domains[45],
// "state": states[45],
// "utterance": utterances[45],
// "people": "people46",
//},
//{"domain": domains[46],
// "state": states[46],
// "utterance": utterances[46],
// "people": "people47",
//},
//{"domain": domains[47],
// "state": states[47],
// "utterance": utterances[47],
// "people": "people48",
//},
//{"domain": domains[48],
// "state": states[48],
// "utterance": utterances[48],
// "people": "people49",
//},
//{"domain": domains[49],
// "state": states[49],
// "utterance": utterances[49],
// "people": "people50",
//},
//    ])
])
); 
//}


speakers_1 = shuffle([["John","Bob",], ["Hailey", "Mika"], ["Karen", "Jenny"], ["Kyle", "James"], ["Sean", "Chris"],
                    ["Lucy", "Sarah"], ["Bill", "Tom"], ["Heather", "Grace"], ["Jake", "Kevin"], ["Ann", "Diana"],
                    ["George", "Henry"], ["Nathan", "Patrick"], ["Wendy", "Emma"], ["Stephanie", "Barbara"], ["Oliver", "Robert"],
                    ["Matt", "Larry"], ["Steven", "Zack"], ["Fiona", "Yvonne"], ["Rebecca", "Cheryl"], ["Victoria", "Jasmine"],
                    ["Albert", "Frank"], ["Greg", "Colin"], ["Ed", "Peter"], ["Molly", "Kara"], ["Justine", "Kelly"]]);
var speakers_2 = shuffle([["Jon","Bob","Kent"], ["Haily", "Mika","Sherrie"], ["Caren", "Jen","Pammy"], ["Cameron", "James","Derek"], ["Shawn", "Kris","Harry"],
                    ["Leila", "Sara","Joan"], ["Bill", "Thomas","Lincoln"], ["Holly", "Gracie","Kristen"], ["Jacob", "Kevin","Mikhail"], ["Annie", "Diane","Gina"],
                    ["Jorge", "Henry","Samuel"], ["Nathaniel", "Phillip","Tyler"], ["Willa", "Emily","Asha"], ["Steph", "Bella","Camille"], ["Olivier", "Russ","Chester"],
                    ["Maverick", "Nolan","Brian"], ["Stephan", "Zade","Howard"], ["Fenna", "Kairi","Henrietta"], ["Greta", "Rachel","Trudy"], ["Vicky", "Jade","Anais"],
                    ["Asher", "Fred","Cohen"], ["Gavin", "Caleb","Brody"], ["Elias", "Phineas","Roman"], ["Mila", "Cecilia","Daisy"], ["Juliet", "Paige","Elaine"]]);
var speakers = speakers_1.concat(speakers_2);

speakers1 = shuffle(speakers[0]);
speakers2 = shuffle(speakers[1]);
speakers3 = shuffle(speakers[2]);
speakers4 = shuffle(speakers[3]);
speakers5 = shuffle(speakers[4]);
speakers6 = shuffle(speakers[5]);
speakers7 = shuffle(speakers[6]);
speakers8 = shuffle(speakers[7]);
speakers9 = shuffle(speakers[8]);
speakers10 = shuffle(speakers[9]);
speakers11 = shuffle(speakers[10]);
speakers12 = shuffle(speakers[11]);
speakers13 = shuffle(speakers[12]);
speakers14 = shuffle(speakers[13]);
speakers15 = shuffle(speakers[14]);
speakers16 = shuffle(speakers[15]);
speakers17 = shuffle(speakers[16]);
speakers18 = shuffle(speakers[17]);
speakers19 = shuffle(speakers[18]);
speakers20 = shuffle(speakers[19]);
speakers21 = shuffle(speakers[20]);
speakers22 = shuffle(speakers[21]);
speakers23 = shuffle(speakers[22]);
speakers24 = shuffle(speakers[23]);
speakers25 = shuffle(speakers[24]);
speakers26 = shuffle(speakers[25]);
speakers27 = shuffle(speakers[26]);
speakers28 = shuffle(speakers[27]);
speakers29 = shuffle(speakers[28]);
speakers30 = shuffle(speakers[29]);
speakers31 = shuffle(speakers[30]);
speakers32 = shuffle(speakers[31]);
speakers33 = shuffle(speakers[32]);
speakers34 = shuffle(speakers[33]);
speakers35 = shuffle(speakers[34]);
speakers36 = shuffle(speakers[35]);
speakers37 = shuffle(speakers[36]);
speakers38 = shuffle(speakers[37]);
speakers39 = shuffle(speakers[38]);
speakers40 = shuffle(speakers[39]);
speakers41 = shuffle(speakers[40]);
speakers42 = shuffle(speakers[41]);
speakers43 = shuffle(speakers[42]);
speakers44 = shuffle(speakers[43]);
speakers45 = shuffle(speakers[44]);
speakers46 = shuffle(speakers[45]);
speakers47 = shuffle(speakers[46]);
speakers48 = shuffle(speakers[47]);
speakers49 = shuffle(speakers[48]);
speakers50 = shuffle(speakers[49]);

var sents = {
    states: {
        heart0: {
            state: "0"
        },
        heart1: {
            state: "33.33"
        },
        heart2: {
            state: "66.66"
        },
        heart3: {
            state: "100"
        },
//        heart4: {
//            state: "100"
//        },
//        heart5: {
//            state: "100"
//        }
    },
    utterances: {
        practice1: {
            sent_utterance: " Did SP think the BB deserved 2 out of 3 hearts?"
        },        
        practice2: {
            sent_utterance: " Did SP think the BB deserved 3 out of 3 hearts?"
        },        
        practice3: {
            sent_utterance: " Did SP think the BB deserved 0 out of 3 hearts?"
        },        
        yes_terrible: {
            sent_utterance: " Do you think SP thought the BB was <b>terrible</b>?"
        },        
        yes_bad: {
            sent_utterance: " Do you think SP thought the BB was <b>bad</b>?"
        },        
        yes_okay: {
            sent_utterance: " Do you think SP thought the BB was <b>okay</b>?"
        },        
        yes_good: {
            sent_utterance: " Do you think SP thought the BB was <b>good</b>?"
        },        
        yes_amazing: {
            sent_utterance: " Do you think SP thought the BB was <b>amazing</b>?"
        },
        not_terrible: {
            sent_utterance: " Do you think SP thought the BB <b>wasn't terrible</b>?"
        },        
        not_bad: {
            sent_utterance: " Do you think SP thought the BB <b>wasn't bad</b>?"
        },        
        not_okay: {
            sent_utterance: " Do you think SP thought the BB <b>wasn't okay</b>?"
        },        
        not_good: {
            sent_utterance: " Do you think SP thought the BB <b>wasn't good</b>?"
        },        
        not_amazing: {
            sent_utterance: " Do you think SP thought the BB <b>wasn't amazing</b>?"
        },
    },
    
    domains: {
       presentation: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just seen LS's presentation, and asked \"How was my presentation?\"",
            sent_context2: " SP saw a presentation.",
            BB: "presentation",
	},
	   cookie: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just tasted LS's cookie, and asked \"How did my cookie taste?\"", 
            sent_context2: " SP tasted a cookie.",
            BB: "cookie",
	},
	   poem: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just read LS's poem, and asked \"How was my poem?\"", 
            sent_context2: " SP read a poem.",
            BB: "poem",
	},        
	   cake: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just tasted LS's cake, and asked \"How did my cake taste?\"", 
            sent_context2: " SP tasted a cake.",
            BB: "cake",
	},
	   song: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just heard LS's song, and asked \"How was my song?\"", 
            sent_context2: " SP heard a song.",
            BB: "song",
	},
	   film: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just seen LS's movie, and asked \"How was my movie?\"", 
            sent_context2: " SP saw a movie.",
            BB: "movie",
	},
	   solo: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just heard LS's solo, and asked \"How was my solo?\"", 
            sent_context2: " SP heard a cello solo.",
            BB: "solo",
	},        
	   dance: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just seen LS's dance, and asked \"How was my dance?\"", 
            sent_context2: " SP saw a tap dance performance.",
            BB: "dance",
	},   
	   painting: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just seen LS's painting, and asked \"How was my painting?\"", 
            sent_context2: " SP saw a painting.",
            BB: "painting",
	}, 
	   monologue: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just heard LS's monologue, and asked \"How was my monologue?\"", 
            sent_context2: " SP heard a monologue in a school play.",
            BB: "monologue",
	},
	   app: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who looked at LS's mobile app, and asked \"How was my app?\"", 
            sent_context2: " SP saw a mobile app.",
            BB: "app",
	},
	   review: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just read LS's review, and asked \"How was my review?\"", 
            sent_context2: " SP read a review for a book.",
            BB: "review",
	},
	   recital: {
            sent_precontext: "Imagine that", 
            sent_context: " LS approached SP, who had just attended LS's recital, and asked \"How was my recital performance?\"", 
            sent_context2: " SP attended a piano recital.",
            BB: "recital performance",
	},
    },
//    states: {
//        terrible: {
//            state: " <b>everyone thought LS's BB was terrible</b>,"        
//        },
//        bad: {
//            state: " <b>everyone thought LS's BB was bad</b>,"        
//        },
//        okay: {
//            state: " <b>everyone thought LS's BB was just okay</b>,"        
//        },
//        good: {
//            state: " <b>everyone thought LS's BB was good</b>,"        
//        },
//        amazing: {
//            state: " <b>everyone thought LS's BB was amazing</b>,"        
//        },
//    },
    goals: {
        nice: {
            goal: " <b>SP wanted to be nice, so "
        },
        honest: {
            goal: " <b>SP wanted to be honest, so "            
        },
        mean: {
            goal: " <b>SP wanted to be mean, so "            
        }  
    },
    people: {
        people1: {
            SP: speakers1[0],
            LS: speakers1[1],
        },
        people2: {
            SP: speakers2[0],
            LS: speakers2[1],
        },
        people3: {
            SP: speakers3[0],
            LS: speakers3[1],
        },
        people4: {
            SP: speakers4[0],
            LS: speakers4[1],
        },
        people5: {
            SP: speakers5[0],
            LS: speakers5[1],
        },
        people6: {
            SP: speakers6[0],
            LS: speakers6[1],
        },
        people7: {
            SP: speakers7[0],
            LS: speakers7[1],
        },
        people8: {
            SP: speakers8[0],
            LS: speakers8[1],
        },
        people9: {
            SP: speakers9[0],
            LS: speakers9[1],
        },
        people10: {
            SP: speakers10[0],
            LS: speakers10[1],
        },
        people11: {
            SP: speakers11[0],
            LS: speakers11[1],
        },
        people12: {
            SP: speakers12[0],
            LS: speakers12[1],
        },
        people13: {
            SP: speakers13[0],
            LS: speakers13[1],
        },
        people14: {
            SP: speakers14[0],
            LS: speakers14[1],
        },
        people15: {
            SP: speakers15[0],
            LS: speakers15[1],
        },
        people16: {
            SP: speakers16[0],
            LS: speakers16[1],
        },
        people17: {
            SP: speakers17[0],
            LS: speakers17[1],
        },
        people18: {
            SP: speakers18[0],
            LS: speakers18[1],
        },
        people19: {
            SP: speakers19[0],
            LS: speakers19[1],
        },
        people20: {
            SP: speakers20[0],
            LS: speakers20[1],
        },
        people21: {
            SP: speakers21[0],
            LS: speakers21[1],
        },
        people22: {
            SP: speakers22[0],
            LS: speakers22[1],
        },
        people23: {
            SP: speakers23[0],
            LS: speakers23[1],
        },
        people24: {
            SP: speakers24[0],
            LS: speakers24[1],
        },
        people25: {
            SP: speakers25[0],
            LS: speakers25[1],
        },
        people26: {
            SP: speakers26[0],
            LS: speakers26[1],
            TP: speakers26[2],
        },
        people27: {
            SP: speakers27[0],
            LS: speakers27[1],
            TP: speakers27[2],
        },
        people28: {
            SP: speakers28[0],
            LS: speakers28[1],
            TP: speakers28[2],
        },
        people29: {
            SP: speakers29[0],
            LS: speakers29[1],
            TP: speakers29[2],
        },
        people30: {
            SP: speakers30[0],
            LS: speakers30[1],
            TP: speakers30[2],
        },
        people31: {
            SP: speakers31[0],
            LS: speakers31[1],
            TP: speakers31[2],
        },
        people32: {
            SP: speakers32[0],
            LS: speakers32[1],
            TP: speakers32[2],
        },
        people33: {
            SP: speakers33[0],
            LS: speakers33[1],
            TP: speakers33[2],
        },
        people34: {
            SP: speakers34[0],
            LS: speakers34[1],
            TP: speakers34[2],
        },
        people35: {
            SP: speakers35[0],
            LS: speakers35[1],
            TP: speakers35[2],
        },
        people36: {
            SP: speakers36[0],
            LS: speakers36[1],
            TP: speakers36[2],
        },
        people37: {
            SP: speakers37[0],
            LS: speakers37[1],
            TP: speakers37[2],
        },
        people38: {
            SP: speakers38[0],
            LS: speakers38[1],
            TP: speakers38[2],
        },
        people39: {
            SP: speakers39[0],
            LS: speakers39[1],
            TP: speakers39[2],
        },
        people40: {
            SP: speakers40[0],
            LS: speakers40[1],
            TP: speakers40[2],
        },
        people41: {
            SP: speakers41[0],
            LS: speakers41[1],
            TP: speakers41[2],
        },
        people42: {
            SP: speakers42[0],
            LS: speakers42[1],
            TP: speakers42[2],
        },
        people43: {
            SP: speakers43[0],
            LS: speakers43[1],
            TP: speakers43[2],
        },
        people44: {
            SP: speakers44[0],
            LS: speakers44[1],
            TP: speakers44[2],
        },
        people45: {
            SP: speakers45[0],
            LS: speakers45[1],
            TP: speakers45[2],
        },
        people46: {
            SP: speakers46[0],
            LS: speakers46[1],
            TP: speakers46[2],
        },
        people47: {
            SP: speakers47[0],
            LS: speakers47[1],
            TP: speakers47[2],
        },
        people48: {
            SP: speakers48[0],
            LS: speakers48[1],
            TP: speakers48[2],
        },
        people49: {
            SP: speakers49[0],
            LS: speakers49[1],
            TP: speakers49[2],
        },
        people50: {
            SP: speakers50[0],
            LS: speakers50[1],
            TP: speakers50[2],
        },
    }
};

function doSentSubs (sents, polite, domain, utterance, people)
{
    utterance = sents["utterances"][utterance]["sent_utterance"];
    precontext = sents["domains"][domain]["sent_precontext"];
    context = sents["domains"][domain]["sent_context2"];
    state = sents["states"][state]["state"]
//    goal = sents["goals"][goal]["goal"]
    if (state_knowledge == "known") {
        knowledge = " <b>and LS knew it</b>."
    } else if (state_knowledge == "unknown") {
        knowledge = " but had no idea what people thought about it."
    }

    feeling = "Here's how SP felt about the BB, on a scale of 0 to 3 hearts:"
    question = "Based on what SP said, how likely do you think that <b>SP's goal</b> was to be:"     
    question2 = "How would SP <b>actually</b> rate LS's BB? <br>Please select the number of stars you think SP would actually give:";
    question3 = "Based on what SP said, how likely is it for you to <b>like SP</b>?";
    BB = sents["domains"][domain]["BB"]; //Item 2
    SP = sents["people"][people]["SP"]; //speaker
    LS = sents["people"][people]["LS"]; //addressee
 
    utterance = utterance.replace("BB",BB).replace("SP",SP).replace("LS",LS);
    context = context.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    precontext = precontext.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    state = state.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    question = question.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    question2 = question2.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    question3 = question3.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    knowledge = knowledge.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
//    goal = goal.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   
    feeling = feeling.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);   

    
    return [utterance, context, state, precontext, question, question2, question3, knowledge, feeling];
}

var numConditions = allConditions.length;
var chooseCondition = random(0, numConditions-1);
//var allTrialOrders = allConditions[chooseCondition];
var allTrialOrders = allConditions;
var numTrials = allTrialOrders.length;
var shuffledOrder = shuffledSampleArray(allTrialOrders.length, numTrials);
var currentTrialNum = 0;
var trial;
var numComplete = 0;
var buyer;

showSlide("instructions");
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experiment = {
    
    data: {
    expt: expt,
//    cond: cond,
    order: [],
//    knowledge: state_knowledge,
    domain: [],
    state: [],
    utterance: [],
    people: [],
//    goal: [],
//    context: [],
//    goal0: score[0],
//    goal1: score[1],
//    goal2: score[2],
//    goal3: score[3],
//    prediction0: prediction[0],
//    prediction1: prediction[1],
//    goalProb0: [],
//    goalProb1: [],
//    goalProb2: [],
    judgment: [],
//    stateProb: [],
//    predictedProb0: [],
//    predictedProb1: [],
    language: [],
	expt_aim: [],
	goal_thoughts: [],
	expt_gen: [],
    numTrials: numTrials
    },
    
  end: function() {	
    experiment.data.language.push(document.getElementById("homelang").value);
	experiment.data.expt_aim.push(document.getElementById("expthoughts").value);
	experiment.data.goal_thoughts.push(document.getElementById("goal_thoughts").value);
	experiment.data.expt_gen.push(document.getElementById("expcomments").value);
    showSlide("finished");
      
//    			//Decrement			
//			var xmlHttp = null;
//			xmlHttp = new XMLHttpRequest()
//			xmlHttp.open("GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=" + filename + "&to_decrement=" + cond, false);
//			xmlHttp.send(null)
      
    setTimeout(function() {turk.submit(experiment.data) }, 1500);
  },
    
  next: function() {
    // Allow experiment to start if it's a turk worker OR if it's a test run
	if (window.self == window.top | turk.workerId.length > 0) {

    if (numComplete > 0) {

//      var prob0 = parseInt(document.getElementById("hiddenSliderValue0").value) / 40.00;
//      var prob1 = parseInt(document.getElementById("hiddenSliderValue1").value) / 40.00;
//      var prob2 = parseInt(document.getElementById("hiddenSliderValue2").value) / 40.00;
//      var prob3 = parseInt(document.getElementById("hiddenSliderValue3").value) / 40.00;
//      var prob3 = parseInt(document.getElementById("hiddenSliderValue3").value) / 40.00;
//      var prob4 = parseInt(document.getElementById("hiddenSliderValue4").value) / 40.00;

//      var prob3 = getRadioCheckedValue(1, "state");
//      experiment.stateRatings[currentTrialNum] = getRadioCheckedValue(1, "state");    
//      var judgment = $(".rating-stars").attr("style");
//      judgment = parseInt(judgment.replace(/[^\d.]/g, ''));
//      var judgment = getRadioCheckedValue(0, "judgment");
//      var judgment = document.getElementsByName("judgment");
      var judgment = getRadioCheckedValue(1, "judgment");
        
      experiment.data.order.push(numComplete);
      experiment.data.utterance.push(trial.utterance);
      experiment.data.domain.push(trial.domain);
      experiment.data.state.push(trial.state);
//      experiment.data.goalProb0.push(prob0);
//      experiment.data.goalProb1.push(prob1);
//      experiment.data.goalProb2.push(prob2);
//      experiment.data.stateProb.push(prob3);
//      experiment.data.predictedProb0.push(prob3);
//      experiment.data.predictedProb1.push(prob4);
//      experiment.data.goal.push(goal);
      experiment.data.judgment.push(judgment);
      
      clearForm(document.forms[0]);
      clearForm(document.forms[1]);

      //Clear stars
      $(".rating-stars").attr({"style":"width: 0%"});
        
    }
    if (numComplete >= numTrials) {
    	$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    	$("#trial-num").html(numComplete);
    	$("#total-num").html(numTrials);
    	showSlide("askInfo");
    } else {
    	$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    	$("#trial-num").html(numComplete);
    	$("#total-num").html(numTrials);
    	currentTrialNum = numComplete;
    	trial = allTrialOrders[numComplete];
//    	trial = allTrialOrders[shuffledOrder[numComplete]];
        utterance = trial.utterance;
        state = trial.state;
        domain = trial.domain;
        context = trial.context;
        people = trial.people;
//        goal = trial.goal;
        sent_materials = doSentSubs(sents, state, domain, utterance, people);
      showSlide("stage");
      $("#context").html(sent_materials[3] + sent_materials[1]);  
      $("#question").html(sent_materials[8]); 
      $(".rating-stars").attr("style","width: " +
							    state + "%");

        //      $("#rating-stars").on("click", 
//			    	function(event) {
//						var selection = $("#rating-stars").val();
//			});
        
      
      for (var i = 0; i <= 4; i++)
      {         
        $("#score" + 10*i).html(score[i]);
      }
      $("#question2").html(sent_materials[8]);    
      $("#question3").html(sent_materials[0]);    
      numComplete++;      
    }}
  }
}

// scripts for sliders
$("#slider0").slider({
               animate: true,
               orientation: "vertical",
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider0 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue0').attr('value', ui.value);
                   $("#slider0").css({"background":"#99D6EB"});
                   $("#slider0 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider1").slider({
               animate: true,
               orientation: "vertical",
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider1 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue1').attr('value', ui.value);
                   $("#slider1").css({"background":"#99D6EB"});
                   $("#slider1 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider2").slider({
               animate: true,
               orientation: "vertical",
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider2 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue2').attr('value', ui.value);
                   $("#slider2").css({"background":"#99D6EB"});
                   $("#slider2 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
//$("#slider3").slider({
//               animate: true,
//               orientation: "vertical",
//               max: 40 , min: 0, step: 1, value: 20,
//               slide: function( event, ui ) {
//                   $("#slider3 .ui-slider-handle").css({
//                      "background":"#E0F5FF",
//                      "border-color": "#001F29"
//                   });
//               },
//               change: function( event, ui ) {
//                   $('#hiddenSliderValue3').attr('value', ui.value);
//                   $("#slider3").css({"background":"#99D6EB"});
//                   $("#slider3 .ui-slider-handle").css({
//                     "background":"#667D94",
//                     "border-color": "#001F29" });
//               }});

$("#slider3").slider({
               animate: true,
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider3 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue3').attr('value', ui.value);
                   $("#slider3").css({"background":"#99D6EB"});
                   $("#slider3 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});

$("#slider4").slider({
               animate: true,
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider4 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue4').attr('value', ui.value);
                   $("#slider4").css({"background":"#99D6EB"});
                   $("#slider4 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});


