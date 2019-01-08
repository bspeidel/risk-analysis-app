import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customerSubject = new Subject<any[]>();
  private customers = [
    {
      id: 1,
      company: 'Heidelberger Druckmaschinen AG',
      companyType: 'Maschinenerstellung',
      contact: 'Ute Wechsler',
      street: 'Kurfürsten-Anlage 52-60',
      zipCode: '69115',
      city: 'Heidelberg',
      phone: '6221 92 00',
      email: 'ute.wechsler@heidelberg.de',
    },
    {
      id: 2,
      company: 'Carl Zeiss AG',
      companyType: 'Feinmechanisch-optischen Industrie',
      contact: 'Katrin Wurfel',
      street: 'Leopoldstraße 68',
      zipCode: '12489',
      city: 'Berlin Adlershof',
      phone: '030 14 64 62',
      email: 'k.wurfel@zeiss.de',
    },
    {
      id: 3,
      company: 'Bosch Thermotechnik GmbH',
      companyType: 'Heizungstechnik',
      contact: 'Katrin Maier',
      street: 'Landsberger Allee 18',
      zipCode: '80045',
      city: 'München',
      phone: '089 19 49 94',
      email: 'k.maier@armyspy.com',
    },
    {
      id: 4,
      company: 'Linde Material Handling GmbH',
      companyType: 'Hersteller von Lagertechnikgeräten',
      contact: 'Phillipp Koehler',
      street: 'Heinrich Heine Platz 84',
      zipCode: '99722',
      city: 'Nordhausen',
      phone: '03631 76 20 73',
      email: 'p.koehler@gmx.de',
    },
    {
      id: 5,
      company: 'ThyssenKrupp Rasselstein GmbH',
      companyType: 'Weißblechhersteller',
      contact: 'Lucas Maier',
      street: 'Rhinstrasse 86',
      zipCode: '80935',
      city: 'München',
      phone: '089 64 73 92',
      email: 'l.maier@thyssenkrupp.de',
    },
    {
      id: 6,
      company: 'Wieland-Werke AG',
      companyType: 'Herstellung von Werkzeugmaschinen',
      contact: 'Anne Friedman',
      street: 'Brandenburgische Straße 26',
      zipCode: '12307',
      city: 'Berlin Marienfelde',
      phone: '030 89 52 44',
      email: 'anne.friedman@wieland.de',
    },
    {
      id: 7,
      company: 'Umicore AG & Co. KG',
      companyType: 'Materialtechnologie- und Recycling',
      contact: 'Martin Konig',
      street: 'Budapester Strasse 4',
      zipCode: '24516',
      city: 'Neumünster',
      phone: '04321 63 97 12',
      email: 'martinkonig@teleworm.de',
    },
    {
      id: 8,
      company: 'Alfred Kärcher GmbH & Co. KG',
      companyType: 'Herstellung von Besen und Bürsten',
      contact: 'Julia Strauss',
      street: 'Brandenburgische Straße 91',
      zipCode: '10179',
      city: 'Berlin Mitte',
      phone: '030 71 14 54',
      email: 'juliastrauss@rhyta.com',
    },
    {
      id: 9,
      company: 'Bosch Thermotechnik GmbH',
      companyType: 'Heizungstechnik',
      contact: 'Ute Maier',
      street: 'Landsberger Allee 18',
      zipCode: '80045',
      city: 'München',
      phone: '089 19 49 94',
      email: 'ute.maier@bosch.de',
    },
    {
      id: 10,
      company: 'TLG Immobilien',
      companyType: 'Gewerbe­immobilien',
      contact: 'Michael Zahn',
      street: 'Flughafenstrasse 8',
      zipCode: '95671',
      city: 'Bärnau',
      phone: '09635 78 10 80',
      email: 'm.zahn@tlg.de',
    },
    {
      id: 11,
      company: 'Zeppelin GmbH',
      companyType: 'Handel, Engineering und Dienstleistung',
      contact: 'Christian Reinhard',
      street: 'Prenzlauer Allee 25',
      zipCode: '04307',
      city: 'Leipzig',
      phone: '0341 64 56 91',
      email: 'c.reinhard@zeppelin.com',
    },
    {
      id: 12,
      company: 'Bosch Thermotechnik GmbH',
      companyType: 'Heizungstechnik',
      contact: 'Leonie Farber',
      street: 'Unter den Linden 7',
      zipCode: '39008',
      city: 'Magdeburg',
      phone: '0391 79 53 02',
      email: 'leonie.farber@bosch.de',
    },
  ];
  constructor() {}

  emitCustomerSubject() {
    this.customerSubject.next(this.customers.slice());
  }

  getCustomerById(id: number) {
    const customer = this.customers.find(s => {
      return s.id === id;
    });
    return customer;
  }
}
