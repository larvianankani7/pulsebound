export {
  NutrientIllustration,
  normalizeNutrientId,
  type NutrientIllustrationProps,
} from "./NutrientIllustrations";

export {
  FoodIllustration,
  normalizeFoodId,
  type FoodIllustrationProps,
} from "./FoodIllustrations";

export {
  IllustrationContainer,
  type IllustrationContainerProps,
} from "./IllustrationContainer";

/**
 * All 17 canonical nutrient illustration IDs supported by SYLVARA.
 */
export const VERIFIED_NUTRIENT_ILLUSTRATION_IDS = [
  "nutrient.complex-carbs",
  "nutrient.protein",
  "nutrient.healthy-fats",
  "nutrient.fibre",
  "nutrient.vitamin-a",
  "nutrient.vitamin-b-complex",
  "nutrient.folate",
  "nutrient.vitamin-c",
  "nutrient.vitamin-d",
  "nutrient.vitamin-e",
  "nutrient.vitamin-k",
  "nutrient.iron",
  "nutrient.calcium",
  "nutrient.potassium",
  "nutrient.magnesium",
  "nutrient.zinc",
  "nutrient.phosphorus",
] as const;

/**
 * All canonical complementary food illustration IDs supported by SYLVARA.
 */
export const VERIFIED_FOOD_ILLUSTRATION_IDS = [
  "food.egg",
  "food.paneer",
  "food.sprouted-moong",
  "food.lemon-coriander",
  "food.peanuts-seeds",
  "food.curd-buttermilk",
  "food.veggies-medley",
  "food.lentils",
  "food.dal",
  "food.spinach",
  "food.fruits",
] as const;
