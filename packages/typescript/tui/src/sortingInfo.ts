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

const sortMethod = createZodLiterals(
  "EXCHANGING",
  "INSERTION",
  "INSERTION_MERGE",
  "MERGE",
  "PARTITIONING",
  "PARTITION_SELECTION",
  "SELECTION",
);

const sortingIdentifiers = createZodLiterals(
  "BLOCKSORT",
  "BUBBLESORT",
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

const SortMethod = z.union(sortMethod);
const TimeComplexity = z.union(timeComplexities);
const ProgrammingLanguage = z.union(programmingLanguages);
const SortingIdentifier = z.union(sortingIdentifiers);
const SortAlgorithmInfo = z.object({
  identifier: SortingIdentifier,
  description: z.string(),
  isInplace: z.boolean(),
  isImplemented: z.boolean(),
  timeComplexity: TimeComplexity,
  language: ProgrammingLanguage,
  method: SortMethod,
});

const SortAlgorithmInfos = z.array(SortAlgorithmInfo);
type TimeComplexity = z.infer<typeof TimeComplexity>;
type SortingIdentifier = z.infer<typeof SortingIdentifier>;
type ProgrammingLanguage = z.infer<typeof ProgrammingLanguage>;
type SortMethod = z.infer<typeof SortMethod>;

export type SortAlgorithmInfo = z.infer<typeof SortAlgorithmInfo>;
export type SortAlgorithmInfos = z.infer<typeof SortAlgorithmInfos>;

export const buildSortAlgorithmInfo = (
  identifier: SortingIdentifier,
  timeComplexity: TimeComplexity,
  language: ProgrammingLanguage,
  method: SortMethod,
  isImplemented: boolean = false,
  isInplace: boolean = false,
): SortAlgorithmInfo => (
  {
    identifier,
    description: identifier.toLowerCase().replaceAll("_", " "),
    isInplace,
    isImplemented,
    timeComplexity,
    language,
    method,
  }
);

export const sortAlgorithmInfos: SortAlgorithmInfos = [
  buildSortAlgorithmInfo(
    "BLOCKSORT",
    "N_LOG_N",
    "TYPESCRIPT",
    "INSERTION_MERGE",
    true,
    false,
  ),
  buildSortAlgorithmInfo(
    "BUBBLESORT",
    "POW_2",
    "TYPESCRIPT",
    "EXCHANGING",
    true,
    true,
  ),
  buildSortAlgorithmInfo(
    "INSERTION_SORT",
    "POW_2",
    "TYPESCRIPT",
    "INSERTION",
    true,
    true,
  ),
];
