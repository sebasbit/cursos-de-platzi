export abstract class Player {
  // private abstract damage: number; // Don't do this
  protected abstract damage: number;

  public constructor(protected name: string) {}

  public move(direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'): string {
    return `${this.name} moved ${direction}`;
  }

  // private abstract attack(): string; // Don't do this
  public abstract attack(): string;
}

export class Knight extends Player {
  protected damage: number = 10;

  public attack(): string {
    return `knight ${this.name} attacks dealing ${this.damage} damage`;
  }
}

// const planyer = new Player('pepito'); // Don't do this
const knight = new Knight('pepito');

console.log(knight.attack());
