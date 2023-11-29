import { IsEnum, IsOptional, IsUrl, Length, MinDate } from 'class-validator';
import { AccessType, Category } from './category.model';

export interface CreateCategoryInput extends Omit<Category, 'id'> {}

export class CreateSimpleCategoryInput implements CreateCategoryInput {
  @Length(4, 64)
  name!: string;

  @IsUrl()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType;

  @MinDate(new Date(1701147600000)) // Tue Nov 28 2023 05:00:00 GMT+0000
  creationAt!: Date;

  @MinDate(new Date(1701147600000)) // Tue Nov 28 2023 05:00:00 GMT+0000
  updatedAt!: Date;
}
