import { Injectable } from "@angular/core";
import { Owner } from "@models/Owner.model";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

@Injectable({
  providedIn: "root",
})
export class PrintService {
  constructor() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  public print(owner: Owner): void {
    const pdfBody = {
      // pageSize: "A4",
      // watermark: {
      //   color: "#ee00ee",
      //   opacity: 0.1,
      //   bold: true,
      //   italics: false,
      //   text: "Marca d'agua",
      // },
      footer: {
        style: "footer",
        text: "Exemplo de footer",
      },
      content: [
        { text: "Ficha do Dono", style: "header" },
        { text: [{ text: "ID: ", bold: true }, owner.id] },
        {
          alignment: "justify",
          columns: [
            { text: [{ text: "Nome: ", bold: true }, owner.name] },
            {
              text: [
                { text: "Data de nascimento: ", bold: true },
                owner.birthday,
              ],
            },
          ],
        },
        {
          style: "tableExemplo",
          table: {
            widths: [200, "auto", "auto"],
            headerRows: 1,
            body: [
              [
                {
                  text: "Outras informações",
                  colSpan: 3,
                  alignment: "center",
                  bold: true,
                },
                {},
                {},
              ],
              [
                {
                  text: "Endereço",
                  alignment: "center",
                  bold: true,
                },
                {
                  text: "Telefone",
                  alignment: "center",
                  bold: true,
                },
                {
                  text: "Email",
                  alignment: "center",
                  bold: true,
                },
              ],
              [owner.address, owner.phone, owner.email],
            ],
          },
        },
        { text: "Lista Exemplo", style: "subheader" },
        {
          margin: [0, 0, 0, 50],
          ul: ["Item 1", "Item 2", "Item 3", "Item 4"],
        },
        { qr: JSON.stringify(owner.email) },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 20],
        },
        subheader: {
          fontSize: 15,
          margin: [0, 20, 0, 0],
          bold: true,
        },
        tableExemplo: {
          margin: [0, 20, 0, 0],
        },
        footer: {
          alignment: "center",
          opacity: 0.3,
          color: "#000",
        },
      },
    };

    pdfMake.createPdf(pdfBody).open();
  }
}
