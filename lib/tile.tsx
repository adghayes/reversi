export const BLACK: symbol = Symbol("black");
export const WHITE: symbol = Symbol("white");

export class Tile {
  color: symbol | null;

  constructor(color: symbol | undefined) {
    this.color = color || null;
  }

  flip() {
    if (this.color) {
      this.color = this.color === BLACK ? WHITE : BLACK;
    }
  }

  toString(): string {
    if (this.color) {
      return this.color === BLACK ? "B" : "W";
    }
    return "-";
  }

  empty(): boolean {
    return !this.color;
  }
}
