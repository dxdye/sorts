import z from "zod";
import { createZodLiterals } from "./helper.ts";

const programmingLanguages = createZodLiterals(
  "CPP",
  "RUST",
  "TYPESCRIPT",
);

const timeComplexities = createZodLiterals(
  "N",
  "N_LOG_N",
  "POW_2",
  "POW_3",
  "EXP",
);

const sortingIdentifiers = createZodLiterals(
  "BLOCKSORT",
  "COCKTAIL_SHAKER_SORT",
  "COMB_SORT",
  "CUBE_SORT",
  "CYCLE_SORT",
  "EXCHANGE_SORT",
  "GNOME_SORT",
  "HEAP_SORT",
  "INPLACE_MERGE_SORT",
  "INSERTION_SORT",
  "INTRO_SORT",
  "LIBRARY_SORT",
  "MERGE_SORT",
  "ODD_EVEN_SORT",
  "PATIENCE_SORT",
  "QUICK_SORT",
  "SELECTION_SORT",
  "SHELL_SORT",
  "SIMPLE_PANCAKE_SORT",
  "SMOOTH_SORT",
  "STRAND_SORT",
  "TIM_SORT",
  "TOURNAMENT_SORT",
  "TREE_SORT",
);

const TimeComplexity = z.union(timeComplexities);
const ProgrammingLanguage = z.union(programmingLanguages);
const SortingIdentifiers = z.union(sortingIdentifiers);
const SortAlgorithm = z.object({
  description: z.string(),
  isInplace: z.boolean(),
  isImplemented: z.boolean(),
  timeComplexity: TimeComplexity,
  language: ProgrammingLanguage,
});
const SortAlgorithms = z.array(SortAlgorithm);

type TimeComplexity = z.infer<typeof TimeComplexity>;
type SortingIdentifier = z.infer<typeof SortingIdentifiers>;
type ProgrammingLanguage = z.infer<typeof ProgrammingLanguage>;

export type SortAlgorithm = z.infer<typeof SortAlgorithm>;
export type SortAlgorithms = z.infer<typeof SortAlgorithms>;
