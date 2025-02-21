import z from "zod";

function createZodLiterals<const Literals extends ReadonlyArray<z.Primitive>>(
  ...literals: Literals
): { [Index in keyof Literals]: z.ZodLiteral<Literals[Index]> };

function createZodLiterals<const Literals extends ReadonlyArray<z.Primitive>>(
  ...literals: Literals
) {
  return literals.map((e) => z.literal(e));
}

export { createZodLiterals };
