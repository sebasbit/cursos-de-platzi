class Player {
  public constructor(public name: string) {}

  public move(direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'): string {
    return `${this.name} moved to ${direction}`;
  }
}

class Knight extends Player {
  public constructor(
    name: string, // It's a property already defined in Player
    private damage: number,
  ) {
    super(name);
  }

  public attack(): string {
    return `knight ${this.name} attacks dealing ${this.damage} damage`;
  }
}

const player = new Player('pepito');

console.log(player.move('LEFT'));
// console.log(player.attack()); // Don't do this

const knight = new Knight('pepito', 10);

console.log(knight.move('UP'));
console.log(knight.attack());
