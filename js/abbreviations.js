$(document).ready(function() {
  var abbreviations = {
    "CO": "Corner Orientation",
    "CP": "Corner Permutation",
    "EO": "Edge Orientation",
    "EP": "Edge Permutation",
    "LS": "Last Slot",
    "LL": "Last Layer",
    "CE": "Corner-Edge",
    "OLL": "Orientation of the Last Layer; the second last step of the CFOP method.",
    "OCLL": "Orientation of the Corners of the Last Layer",
    "OELL": "Orientation of the Edges of the Last Layer",
    "OLLCP": "Orientation of the Last Layer and Corner Permutation",
    "OCLLCP": "Orientation of the Corners of the Last Layer and Corner Permutation",
    "OELLCP": "Orientation of the Edges of the Last Layer and Corner Permutation",
    "PLL": "Permutation of the Last Layer; the last step of the CFOP method.",
    "CPLL": "Corner Permutation of the Last Layer",
    "EPLL": "Edge Permutation of the Last Layer",
    "COLL": "Corners of the Last Layer (preserving EO of LL, and preserving F2L); combines OCLL and CPLL.",
    "ELL": "Edges of the Last Layer; The last step of the CFCE method.",
    "VHLS": "Vanderbergh-Harris Last Slot; combines LS and OELL.",
    "EOLS": "Edge Orientation and Last Slot",
    "WVLS": "Winter Variation - Last Slot; WV for short; combines LS and OCLL.",
    "CLS": "Corner Step of the Last Slot",
    "ELS": "Edge Step of the Last Slot",
    "F2L": "First 2 Layers",
    "F2L-1": "F2L minus one pair; F2L without the LS solved",
    "L2C": "Last 2 Centers",
    "L2E": "Last 2 Edges",
    "L3C": "Last 3 Centers",
    "L3E": "Last 3 Edges",
    "CFOP": "Cross->F2L->OLL->PLL; A.K.A. the Fridrich Method.",
    "CFCE": "Cross->F2L->CLL->ELL; A CFOP variant.",
    "MGLS": "Makisumi-Garron Last Slot; Substitutes LS+OLL with ELS+CLS"
  };


  var getAbbreviationTag = function(abbr) {
    return abbreviations[abbr] ? "<abbr title='" + abbreviations[abbr] + "'>" + abbr + "<\/abbr>" : abbr;
  };

  $('#content *').replaceText(/\b(\S+?)\b/g, getAbbreviationTag);
});
