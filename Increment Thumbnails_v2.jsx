const f = Folder();
const directory = decodeURI(f.selectDlg("Output folder:"));
const imageName = prompt("What is the game name?", "GameTitle", "Set Game Title");
const numImages = parseInt(prompt("How many episodes?", 25, "Set number of episodes"), 10);

const doc = activeDocument;
const bitsPerChannel = BitsPerChannelType.EIGHT;

const SaveJPEG = (saveFile) => {
  const jpgSaveOptions = {
    embedColorProfile: true,
    formatOptions: FormatOptions.STANDARDBASELINE,
    matte: MatteType.NONE,
    quality: 8,
  };
  doc.saveAs(new File(saveFile), jpgSaveOptions, true, Extension.LOWERCASE);
};

const textLayer = activeDocument.artLayers.find(layer => layer.kind === 'LayerKind.TEXT');

if (textLayer) {
  for (let i = 1; i <= numImages; i++) {
    textLayer.textItem.contents = i.toString();
    SaveJPEG(`${directory}/${imageName}_${i}.jpg`);
  }
}
