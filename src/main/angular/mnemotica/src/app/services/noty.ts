export class Noty {
  message: string;
  type: NotyType;
  cssClass: string;

  constructor(message: string, type:NotyType) {
    this.message = message;
    this.type = type;

    switch (type) {
      case NotyType.ERROR: this.cssClass = 'alert-danger';
      case NotyType.INFO: this.cssClass = 'alert-success';
      case NotyType.WARNING: this.cssClass = 'alert-warning';
    }

  }

}

export enum NotyType {
  ERROR,
  INFO,
  WARNING
}
