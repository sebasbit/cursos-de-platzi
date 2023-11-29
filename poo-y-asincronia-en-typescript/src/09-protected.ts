export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export class Player {
  // public constructor(private name: string) {} // It is not accessible from its subclasses
  public constructor(protected name: string) {}

  public move(direction: Direction): string {
    return `${this.name} moved ${direction}`;
  }

  protected displayName(): string {
    return this.name.toUpperCase();
  }
}

export class Knight extends Player {
  public constructor(
    name: string, // It's a property already defined in Player
    private damage: number,
  ) {
    super(name);
  }

  public move(direction: Direction): string {
    return `${super.move(direction)} two times`;
  }

  public attack(): string {
    return `knight ${this.displayName()} attacks dealing ${this.damage} damage`;
  }
}

const knight = new Knight('pepito', 10);
// knight.name = 'fulanito'; // Don't do this
// knight.displayName(); // Don't do this

console.log(knight.move('UP'));
console.log(knight.attack());
