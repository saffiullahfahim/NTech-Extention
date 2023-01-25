import {PDFDocument, StandardFonts, PageSizes, degrees, grayscale, rgb} from "pdf-lib";

const pdfDoc = await PDFDocument.create();

const page = pdfDoc.addPage(PageSizes.A4);

page.drawRectangle({
  x: 25,
  y: 75,
  width: 250,
  height: 75,
  rotate: degrees(-15),
  borderWidth: 5,
  borderColor: grayscale(0.5),
  color: rgb(0.75, 0.2, 0.2),
  opacity: 0.5,
  borderOpacity: 0.75,

})