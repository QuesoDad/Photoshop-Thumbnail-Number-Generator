/*
This script prompts for a directory, file name, and a number of episodes.
Copy into:
C:\Program Files\Adobe\Adobe Photoshop CC 2019\Presets\Scripts
Right justify text if on the right, left justify text on the left, and center justify test everywhere else to keep the numbers from going off screen.
Make sure incrementing text is top most layer in Photoshop.

This was originally an incomplete script I found that required hand coding. I changed the script to use dialog boxes instead of hand coding.

Works on Windows 10, unsure if it works on Mac.
Kristian Boruff 2019
*/

var f = Folder();
var directory = f.selectDlg("Output folder:")
var imageName = prompt("What is the game name?","GameTitle","Set Game Title");
var numImages = prompt("How many episodes?", 25, "Set number of episodes");

function SaveJPEG(saveFile){  
var doc = activeDocument;  
if (doc.bitsPerChannel != BitsPerChannelType.EIGHT) doc.bitsPerChannel = BitsPerChannelType.EIGHT;  
jpgSaveOptions = new JPEGSaveOptions();  
jpgSaveOptions.embedColorProfile = true;  
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;  
jpgSaveOptions.matte = MatteType.NONE;  
jpgSaveOptions.quality = 8;   
activeDocument.saveAs(new File(saveFile), jpgSaveOptions, true,Extension.LOWERCASE);  
} 
 
var layer = activeDocument.layers[0];
 
if (layer.kind == 'LayerKind.TEXT') {
  for (var i=1; i <= numImages; i++) {
    layer.textItem.contents = i.toString();
    SaveJPEG(directory + "/" + imageName + '_'+ i +'.jpg');
  };
};