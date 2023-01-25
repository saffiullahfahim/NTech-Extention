const { PDFDocument, StandardFonts, PageSizes, degrees, grayscale } = PDFLib;

const createPdf = async (obj) => {
  const rgb = (red, green, blue) => {
    return {
      type: "RGB",
      red: red / 255,
      green: green / 255,
      blue: blue / 255,
    };
  };

  const roundedRectData =  (w, h, tlr, trr, brr, blr) => {
    return 'M 0 ' + tlr
      + ' A ' + tlr + ' ' + tlr + ' 0 0 1 ' + tlr + ' 0'
      + ' L ' + (w - trr) + ' 0'
      + ' A ' + trr + ' ' + trr + ' 0 0 1 ' + w + ' ' + trr
      + ' L ' + w + ' ' + (h - brr)
      + ' A ' + brr + ' ' + brr + ' 0 0 1 ' + (w - brr) + ' ' + h
      + ' L ' + blr + ' ' + h
      + ' A ' + blr + ' ' + blr + ' 0 0 1 0 ' + (h - blr)
      + ' Z';
  };

  const fontSize = 13;
  const size = [];

  const pdfDoc = await PDFDocument.create();
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  for (let key in obj) {
    size.push(helveticaBold.widthOfTextAtSize(key, fontSize));
  }

  let initY = 50;
  let maxH = helveticaBold.heightAtSize(fontSize);
  console.log(maxH)
  let maxW = Math.max(...size);

  const page = pdfDoc.addPage(PageSizes.A4);

  // page.drawRectangle({
  //   x: 50,
  //   y: page.getHeight() - 50 - 2 - 5,
  //   width: 250,
  //   height: maxH + 10,
  //   // rotate: degrees(-15),
  //   // borderWidth: 5,
  //   // borderColor: grayscale(0.5),
  //   color: rgb(0, 0, 0),
  //   // opacity: 0.5,
  //   // borderOpacity: 0.75
  // });

  const svgPath2 = roundedRectData(250, maxH + 10, 4, 0, 0, 4); // height + padding / 2
  page.drawSvgPath(svgPath2, { x: 50, y: page.getHeight() - initY + maxH - 2 + 5, color: rgb(1.0, 0, 0), })


  const svgPath = 'M 0,20 L 100,160 Q 130,200 150,120 C 190,-40 200,200 300,150 L 400,90'


// Draw path as black line
page.drawSvgPath(svgPath, { x: 25, y: 75 })

// Change border style and opacity
page.drawSvgPath(svgPath, {
  x: 25,
  y: 275,
  borderColor: rgb(0.5, 0.5, 0.5),
  borderWidth: 2,
  borderOpacity: 0.75,
})

// Set fill color and opacity
page.drawSvgPath(svgPath, {
  x: 25,
  y: 475,
  color: rgb(1.0, 0, 0),
  opacity: 0.75,
})

// Draw 50% of original size
page.drawSvgPath(svgPath, {
  x: 25,
  y: 675,
  scale: 0.5,
})

  console.log(rgb(1, 1, 1));

  for (let key in obj) {
    page.drawText(key, {
      x: 50,
      y: page.getHeight() - initY,
      size: fontSize,
      font: helveticaBold,
      color: rgb(255, 255, 255)
    });

    page.drawText(":", {
      x: maxW + 60,
      y: page.getHeight() - initY,
      size: fontSize,
      font: helveticaBold,
    });

    page.drawText(obj[key], {
      x: maxW + 70,
      y: page.getHeight() - initY,
      size: fontSize,
      font: helvetica,
    });

    initY += maxH + 10;
  }

  console.log(page);

  let pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true });

  document.getElementById("pdf").src = pdfBytes;
};

let obj = {};

const breakLine = (data) => {
  let dataArray = data.split(" ");
  let result = "";
  let line = "";
  let maxChr = 67;

  for (let i = 0; i < dataArray.length; i++) {
    let x = dataArray[i];
    line += x + " ";
    if (line.length > maxChr) {
      line = line.substr(0, line.length - x.length - 1);
      result += line + "\n";
      line = x + " ";
    }

    if (i == dataArray.length - 1) {
      result += line;
    }
  }

  return result;
};

const createPdf2 = async (obj, pdf) => {
  const fontSize = 13;
  const size = [];

  const pdfDoc = await PDFDocument.create();
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  for (let key in obj) {
    size.push(helveticaBold.widthOfTextAtSize(key, fontSize));
  }

  let initY = 50;
  let maxH = helveticaBold.heightAtSize(fontSize);
  let maxW = Math.max(...size);

  const page = pdfDoc.addPage();

  for (let key in obj) {
    page.drawText(key, {
      x: 50,
      y: page.getHeight() - initY,
      size: fontSize,
      font: helveticaBold,
    });

    page.drawText(":", {
      x: maxW + 60,
      y: page.getHeight() - initY,
      size: fontSize,
      font: helveticaBold,
    });

    let p = page.drawText(obj[key], {
      x: maxW + 70,
      y: page.getHeight() - initY,
      size: fontSize,
      font: helvetica,
    });

    console.log(p)

    initY += maxH + 10;
  }

  console.log(page);

  let pdfBytes;
  if (pdf) {
    const pdfDoc_ = await PDFDocument.load(pdf);
    const page = await pdfDoc_.copyPages(pdfDoc, [0]);
    pdfDoc_.insertPage(0, page[0]);
    pdfBytes = await pdfDoc_.saveAsBase64({ dataUri: true });
  } else {
    pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true });
  }


  document.getElementById("pdf").src = pdfBytes;
  return pdfBytes;
};

for(let x = 0; x < 50; x++){
  obj[new Date().getTime() + x] = breakLine(x + " This sflsdfsd fsldkfjsd fsdfljsd fsdfjsldf sdfjsdf is date" + new Date().toISOString())
}

createPdf2(obj);
