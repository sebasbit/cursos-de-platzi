import { ValidationError, validateOrReject } from 'class-validator';
import { CreateSimpleCategoryInput } from './category/category.dto';
import { AccessType } from './category/category.model';

(async () => {
  console.log('\n===== Testing CreateSimpleCategoryInput =====\n');

  try {
    const input = new CreateSimpleCategoryInput();

    input.name = 'ERR';
    input.image = 'Invalid URL';
    input.creationAt = new Date(1669611600000); // Mon Nov 28 2022 05:00:00 GMT+0000

    await validateOrReject(input);
  } catch (errors) {
    console.log(
      'Validation failed, errors:',
      (errors as ValidationError[]).map((e) => {
        return {
          property: e.property,
          constraints: e.constraints,
        };
      }),
    );
  }

  try {
    const input = new CreateSimpleCategoryInput();

    input.name = 'Decor';
    input.image = 'https://cataas.com/cat';
    input.access = AccessType.Public;
    input.creationAt = new Date(1703998800000); // Sun Dec 31 2023 05:00:00 GMT+0000
    input.updatedAt = new Date(1703998800000); // Sun Dec 31 2023 05:00:00 GMT+0000

    await validateOrReject(input);

    console.log('Validation succeeded, result:', input);
  } catch (error) {
    // This will never be executed
  }
})();
