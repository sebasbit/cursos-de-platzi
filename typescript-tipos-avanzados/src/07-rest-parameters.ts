enum MovieCategory {
  Thriller,
  Drama,
  Fantasy,
}

type Movie = {
  name: string;
  categories: MovieCategory[];
};

const movie: Movie = {
  name: 'Scarface',
  categories: [MovieCategory.Thriller, MovieCategory.Drama],
};

console.log(movie);

const checkFantasyCategory = (movie: Movie): boolean =>
  movie.categories.includes(MovieCategory.Fantasy);

console.log(`checkFantasyCategory: ${checkFantasyCategory(movie)}`);

const checkCategoriesUsingParams = (
  movie: Movie,
  category1: MovieCategory,
  category2: MovieCategory,
): boolean => {
  return (
    movie.categories.includes(category1) || movie.categories.includes(category2)
  );
};

console.log(
  `checkCategoriesUsingParams (drama, fantasy): ${checkCategoriesUsingParams(
    movie,
    MovieCategory.Drama,
    MovieCategory.Fantasy,
  )}`,
);

const checkCategoriesUsingArrays = (
  movie: Movie,
  categories: MovieCategory[],
): boolean => {
  return categories.some((c) => movie.categories.includes(c));
};

console.log(
  `checkCategoriesUsingArrays ([drama, fantasy]): ${checkCategoriesUsingArrays(
    movie,
    [MovieCategory.Drama, MovieCategory.Fantasy],
  )}`,
);

const checkCategoriesUsingRestParams = (
  movie: Movie,
  ...categories: MovieCategory[]
): boolean => {
  return categories.some((c) => movie.categories.includes(c));
};

console.log(
  `checkCategoriesUsingRestParams (drama, fantasy): ${checkCategoriesUsingRestParams(
    movie,
    MovieCategory.Drama,
    MovieCategory.Fantasy,
  )}`,
);
