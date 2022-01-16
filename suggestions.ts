export default class Suggesitons {
  constructor(private data: suggestion[]) {
    this.log();
  }

  private log() {
    if (this.data.length > 0) {
      this.data.forEach((suggestion) => {
        console.log(suggestion);
      });
    }
  }

  public get suggetions(): suggestion[] {
    return this.data;
  }
}

export type suggestion = {
  value: string;
  category: string;
  id: string;
};
