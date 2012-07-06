//these should simply map to those modules...
//maybe we want a map, with a short, canonical name mapping to the module object

exports.transitionSelectors = [
    "default",
    "class",
    "switch",
    "table"
];

//same here. map to constructor functions
exports.setTypes = [
    'arraySet',
    'bitVector',
    'boolArray',
    'objectSet'
];

//this gets passed ot the annotator. Easy.
exports.extraModelInfo = [
    true,
    false
];

//this can be used to do the XSLT in the browser.
exports.flattened = [
    true,
    false
];


exports.browsers = [
   "firefox",
    "chromium-browser",
    "opera",
    "webkit"
];
//    "uzbl"

/*
//we use the registry instead of a group
var groups = [
    "basic-states", 
    "events", 
    "transitions", 
    "transitions2", 
    "depth", 
    "history-depth", 
    "concurrency", 
    "history-concurrency", 
    "nested-parallel" 
]
*/