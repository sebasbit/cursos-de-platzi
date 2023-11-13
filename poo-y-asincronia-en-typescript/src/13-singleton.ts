class Config {
  private static instance: Config | null = null;
  private configuration: Map<string, string | number | boolean>;

  private constructor(configuration: Map<string, string | number | boolean>) {
    this.configuration = configuration;
  }

  public static getInstance(
    configuration: Map<string, string | number | boolean>,
  ): Config {
    if (Config.instance === null) {
      Config.instance = new Config(configuration);
    }

    return Config.instance;
  }

  public getValue(key: string): string | number | boolean | undefined {
    return this.configuration.get(key);
  }

  public setValue(key: string, value: string | number | boolean): void {
    this.configuration.set(key, value);
  }
}

// const config = new Config(); // Don't do this
const firstConfig = Config.getInstance(
  new Map<string, string | number | boolean>([
    ['app_name', 'Singleton'],
    ['timeout', 10000],
    ['debug', true],
  ]),
);

const secondConfig = Config.getInstance(
  new Map<string, string | number | boolean>([['mode', 'dev']]),
);

console.log(
  `Evaluate (firstConfig === secondConfig): ${
    firstConfig === secondConfig ? 'Yes' : 'No'
  }`,
);

console.log(`Evaluate (firstConfig.mode): ${firstConfig.getValue('mode')}`);

secondConfig.setValue('mode', 'dev');

console.log(
  `Evaluate (secondConfig.mode = 'dev'; firstConfig.mode): ${firstConfig.getValue(
    'mode',
  )}`,
);
