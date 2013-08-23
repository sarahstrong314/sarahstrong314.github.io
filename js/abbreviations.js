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
    "PCLL": "Permutation of the Corners of the Last Layer",
    "CP": "Corner Permutation",
    "EO": "Edge Orientation",
    "EP": "Edge Permutation",
    "OCLLCP": "Orientation of the Corners of the Last Layer and Corner Permutation",
    "CFOP": "Cross->F2L->OLL->PLL. A.K.A. the Fridrich Method.",
    "OELL": "Edge Orientation of the Last Layer",
    "EOLS": "Edge Orientation and Last Slot"
    "PELL": "Permutation of the Edges of the Last Layer",
    "ELS": "Edge Step of the Last Slot"
    "MGLS": "Makisumi-Garron Last Slot",
    "LS": "Last Slot",
    "LL": "Last Layer",
    "CE": "Corner-Edge pair"
  };


  var getAbbreviationTag = function(abbr) {
    return abbreviations[abbr] ? "<abbr title='" + abbreviations[abbr] + "'>" + abbr + "<\/abbr>" : abbr;
  };

  $('#content *').replaceText(/\b(\S+?)\b/g, getAbbreviationTag);
});
