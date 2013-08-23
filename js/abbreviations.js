$(document).ready(function() {
  var abbreviations = {
    "PLL": "Permutation of the Last Layer",
    "VHLS": "Vanderbergh-Harris Last Slot",
    "WV": "Winter Variation",
    "OLL": "Orientation of the Last Layer",
    "COLL": "Corners of the Last Layer",
    "ELL": "Edges of the Last Layer",
    "OELLCP": "Orientation of the Edges of the Last Layer and Corner Permutation",
    "CLS": "Corner Step of the Last Slot",
    "L2C": "Last 2 Centers",
    "L2E": "Last 2 Edges",
    "L3C": "Last 3 Centers",
    "L3E": "Last 3 Edges",
    "OCLL": "Orientation of the Corners of the Last Layer",
    "CP": "Corner Permutation",
    "EO": "Edge Orientation",
    "EP": "Edge Permutation",
    "OCLLCP": null,
    "CFOP": null,
    "EOLL": null,
    "EPLL": null,
    "ELS": null,
    "MGLS": null,
    "LS": null,
    "LL": null
  };


  var getAbbreviationTag = function(abbr) {
    return abbreviations[abbr] ? "<abbr title='" + abbreviations[abbr] + "'>" + abbr + "<\/abbr>" : abbr;
  };

  $('#content *').replaceText(/\b(\S+?)\b/g, getAbbreviationTag);
});