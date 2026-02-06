
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Personal
 * 
 */
export type Personal = $Result.DefaultSelection<Prisma.$PersonalPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model PersonalSkill
 * 
 */
export type PersonalSkill = $Result.DefaultSelection<Prisma.$PersonalSkillPayload>
/**
 * Model ProjectSkill
 * 
 */
export type ProjectSkill = $Result.DefaultSelection<Prisma.$ProjectSkillPayload>
/**
 * Model IntroduceDetail
 * 
 */
export type IntroduceDetail = $Result.DefaultSelection<Prisma.$IntroduceDetailPayload>
/**
 * Model EducationDetail
 * 
 */
export type EducationDetail = $Result.DefaultSelection<Prisma.$EducationDetailPayload>
/**
 * Model Career
 * 
 */
export type Career = $Result.DefaultSelection<Prisma.$CareerPayload>
/**
 * Model Projects
 * 
 */
export type Projects = $Result.DefaultSelection<Prisma.$ProjectsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Personals
 * const personals = await prisma.personal.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Personals
   * const personals = await prisma.personal.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.personal`: Exposes CRUD operations for the **Personal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personals
    * const personals = await prisma.personal.findMany()
    * ```
    */
  get personal(): Prisma.PersonalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalSkill`: Exposes CRUD operations for the **PersonalSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalSkills
    * const personalSkills = await prisma.personalSkill.findMany()
    * ```
    */
  get personalSkill(): Prisma.PersonalSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectSkill`: Exposes CRUD operations for the **ProjectSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectSkills
    * const projectSkills = await prisma.projectSkill.findMany()
    * ```
    */
  get projectSkill(): Prisma.ProjectSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.introduceDetail`: Exposes CRUD operations for the **IntroduceDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntroduceDetails
    * const introduceDetails = await prisma.introduceDetail.findMany()
    * ```
    */
  get introduceDetail(): Prisma.IntroduceDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.educationDetail`: Exposes CRUD operations for the **EducationDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EducationDetails
    * const educationDetails = await prisma.educationDetail.findMany()
    * ```
    */
  get educationDetail(): Prisma.EducationDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **Career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.CareerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Personal: 'Personal',
    Skill: 'Skill',
    PersonalSkill: 'PersonalSkill',
    ProjectSkill: 'ProjectSkill',
    IntroduceDetail: 'IntroduceDetail',
    EducationDetail: 'EducationDetail',
    Career: 'Career',
    Projects: 'Projects'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "personal" | "skill" | "personalSkill" | "projectSkill" | "introduceDetail" | "educationDetail" | "career" | "projects"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Personal: {
        payload: Prisma.$PersonalPayload<ExtArgs>
        fields: Prisma.PersonalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          findFirst: {
            args: Prisma.PersonalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          findMany: {
            args: Prisma.PersonalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>[]
          }
          create: {
            args: Prisma.PersonalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          createMany: {
            args: Prisma.PersonalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>[]
          }
          delete: {
            args: Prisma.PersonalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          update: {
            args: Prisma.PersonalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          deleteMany: {
            args: Prisma.PersonalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>[]
          }
          upsert: {
            args: Prisma.PersonalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          aggregate: {
            args: Prisma.PersonalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonal>
          }
          groupBy: {
            args: Prisma.PersonalGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      PersonalSkill: {
        payload: Prisma.$PersonalSkillPayload<ExtArgs>
        fields: Prisma.PersonalSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload>
          }
          findFirst: {
            args: Prisma.PersonalSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload>
          }
          findMany: {
            args: Prisma.PersonalSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload>[]
          }
          create: {
            args: Prisma.PersonalSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload>
          }
          createMany: {
            args: Prisma.PersonalSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload>[]
          }
          delete: {
            args: Prisma.PersonalSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload>
          }
          update: {
            args: Prisma.PersonalSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload>
          }
          deleteMany: {
            args: Prisma.PersonalSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload>[]
          }
          upsert: {
            args: Prisma.PersonalSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalSkillPayload>
          }
          aggregate: {
            args: Prisma.PersonalSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalSkill>
          }
          groupBy: {
            args: Prisma.PersonalSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalSkillCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalSkillCountAggregateOutputType> | number
          }
        }
      }
      ProjectSkill: {
        payload: Prisma.$ProjectSkillPayload<ExtArgs>
        fields: Prisma.ProjectSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          findFirst: {
            args: Prisma.ProjectSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          findMany: {
            args: Prisma.ProjectSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>[]
          }
          create: {
            args: Prisma.ProjectSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          createMany: {
            args: Prisma.ProjectSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>[]
          }
          delete: {
            args: Prisma.ProjectSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          update: {
            args: Prisma.ProjectSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          deleteMany: {
            args: Prisma.ProjectSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>[]
          }
          upsert: {
            args: Prisma.ProjectSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSkillPayload>
          }
          aggregate: {
            args: Prisma.ProjectSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectSkill>
          }
          groupBy: {
            args: Prisma.ProjectSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectSkillCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectSkillCountAggregateOutputType> | number
          }
        }
      }
      IntroduceDetail: {
        payload: Prisma.$IntroduceDetailPayload<ExtArgs>
        fields: Prisma.IntroduceDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntroduceDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntroduceDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload>
          }
          findFirst: {
            args: Prisma.IntroduceDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntroduceDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload>
          }
          findMany: {
            args: Prisma.IntroduceDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload>[]
          }
          create: {
            args: Prisma.IntroduceDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload>
          }
          createMany: {
            args: Prisma.IntroduceDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntroduceDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload>[]
          }
          delete: {
            args: Prisma.IntroduceDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload>
          }
          update: {
            args: Prisma.IntroduceDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload>
          }
          deleteMany: {
            args: Prisma.IntroduceDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntroduceDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntroduceDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload>[]
          }
          upsert: {
            args: Prisma.IntroduceDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntroduceDetailPayload>
          }
          aggregate: {
            args: Prisma.IntroduceDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntroduceDetail>
          }
          groupBy: {
            args: Prisma.IntroduceDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntroduceDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntroduceDetailCountArgs<ExtArgs>
            result: $Utils.Optional<IntroduceDetailCountAggregateOutputType> | number
          }
        }
      }
      EducationDetail: {
        payload: Prisma.$EducationDetailPayload<ExtArgs>
        fields: Prisma.EducationDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload>
          }
          findFirst: {
            args: Prisma.EducationDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload>
          }
          findMany: {
            args: Prisma.EducationDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload>[]
          }
          create: {
            args: Prisma.EducationDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload>
          }
          createMany: {
            args: Prisma.EducationDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload>[]
          }
          delete: {
            args: Prisma.EducationDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload>
          }
          update: {
            args: Prisma.EducationDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload>
          }
          deleteMany: {
            args: Prisma.EducationDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload>[]
          }
          upsert: {
            args: Prisma.EducationDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDetailPayload>
          }
          aggregate: {
            args: Prisma.EducationDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducationDetail>
          }
          groupBy: {
            args: Prisma.EducationDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationDetailCountArgs<ExtArgs>
            result: $Utils.Optional<EducationDetailCountAggregateOutputType> | number
          }
        }
      }
      Career: {
        payload: Prisma.$CareerPayload<ExtArgs>
        fields: Prisma.CareerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findFirst: {
            args: Prisma.CareerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findMany: {
            args: Prisma.CareerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          create: {
            args: Prisma.CareerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          createMany: {
            args: Prisma.CareerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          delete: {
            args: Prisma.CareerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          update: {
            args: Prisma.CareerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          deleteMany: {
            args: Prisma.CareerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          upsert: {
            args: Prisma.CareerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          aggregate: {
            args: Prisma.CareerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareer>
          }
          groupBy: {
            args: Prisma.CareerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerCountArgs<ExtArgs>
            result: $Utils.Optional<CareerCountAggregateOutputType> | number
          }
        }
      }
      Projects: {
        payload: Prisma.$ProjectsPayload<ExtArgs>
        fields: Prisma.ProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          upsert: {
            args: Prisma.ProjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.ProjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    personal?: PersonalOmit
    skill?: SkillOmit
    personalSkill?: PersonalSkillOmit
    projectSkill?: ProjectSkillOmit
    introduceDetail?: IntroduceDetailOmit
    educationDetail?: EducationDetailOmit
    career?: CareerOmit
    projects?: ProjectsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonalCountOutputType
   */

  export type PersonalCountOutputType = {
    skills: number
    education: number
    careers: number
    projects: number
  }

  export type PersonalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | PersonalCountOutputTypeCountSkillsArgs
    education?: boolean | PersonalCountOutputTypeCountEducationArgs
    careers?: boolean | PersonalCountOutputTypeCountCareersArgs
    projects?: boolean | PersonalCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * PersonalCountOutputType without action
   */
  export type PersonalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalCountOutputType
     */
    select?: PersonalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonalCountOutputType without action
   */
  export type PersonalCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalSkillWhereInput
  }

  /**
   * PersonalCountOutputType without action
   */
  export type PersonalCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationDetailWhereInput
  }

  /**
   * PersonalCountOutputType without action
   */
  export type PersonalCountOutputTypeCountCareersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
  }

  /**
   * PersonalCountOutputType without action
   */
  export type PersonalCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    personalSkills: number
    projectSkills: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalSkills?: boolean | SkillCountOutputTypeCountPersonalSkillsArgs
    projectSkills?: boolean | SkillCountOutputTypeCountProjectSkillsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountPersonalSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalSkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountProjectSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSkillWhereInput
  }


  /**
   * Count Type CareerCountOutputType
   */

  export type CareerCountOutputType = {
    projects: number
  }

  export type CareerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CareerCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerCountOutputType
     */
    select?: CareerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }


  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    techStack: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techStack?: boolean | ProjectsCountOutputTypeCountTechStackArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountTechStackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSkillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Personal
   */

  export type AggregatePersonal = {
    _count: PersonalCountAggregateOutputType | null
    _avg: PersonalAvgAggregateOutputType | null
    _sum: PersonalSumAggregateOutputType | null
    _min: PersonalMinAggregateOutputType | null
    _max: PersonalMaxAggregateOutputType | null
  }

  export type PersonalAvgAggregateOutputType = {
    id: number | null
    introduceId: number | null
  }

  export type PersonalSumAggregateOutputType = {
    id: number | null
    introduceId: number | null
  }

  export type PersonalMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    idLine: string | null
    gitLink: string | null
    phoneNumber: string | null
    introduceId: number | null
  }

  export type PersonalMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    idLine: string | null
    gitLink: string | null
    phoneNumber: string | null
    introduceId: number | null
  }

  export type PersonalCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    idLine: number
    gitLink: number
    phoneNumber: number
    introduceId: number
    _all: number
  }


  export type PersonalAvgAggregateInputType = {
    id?: true
    introduceId?: true
  }

  export type PersonalSumAggregateInputType = {
    id?: true
    introduceId?: true
  }

  export type PersonalMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    idLine?: true
    gitLink?: true
    phoneNumber?: true
    introduceId?: true
  }

  export type PersonalMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    idLine?: true
    gitLink?: true
    phoneNumber?: true
    introduceId?: true
  }

  export type PersonalCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    idLine?: true
    gitLink?: true
    phoneNumber?: true
    introduceId?: true
    _all?: true
  }

  export type PersonalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personal to aggregate.
     */
    where?: PersonalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personals to fetch.
     */
    orderBy?: PersonalOrderByWithRelationInput | PersonalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personals
    **/
    _count?: true | PersonalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalMaxAggregateInputType
  }

  export type GetPersonalAggregateType<T extends PersonalAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonal[P]>
      : GetScalarType<T[P], AggregatePersonal[P]>
  }




  export type PersonalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalWhereInput
    orderBy?: PersonalOrderByWithAggregationInput | PersonalOrderByWithAggregationInput[]
    by: PersonalScalarFieldEnum[] | PersonalScalarFieldEnum
    having?: PersonalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalCountAggregateInputType | true
    _avg?: PersonalAvgAggregateInputType
    _sum?: PersonalSumAggregateInputType
    _min?: PersonalMinAggregateInputType
    _max?: PersonalMaxAggregateInputType
  }

  export type PersonalGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduceId: number | null
    _count: PersonalCountAggregateOutputType | null
    _avg: PersonalAvgAggregateOutputType | null
    _sum: PersonalSumAggregateOutputType | null
    _min: PersonalMinAggregateOutputType | null
    _max: PersonalMaxAggregateOutputType | null
  }

  type GetPersonalGroupByPayload<T extends PersonalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalGroupByOutputType[P]>
        }
      >
    >


  export type PersonalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    idLine?: boolean
    gitLink?: boolean
    phoneNumber?: boolean
    introduceId?: boolean
    introduce?: boolean | Personal$introduceArgs<ExtArgs>
    skills?: boolean | Personal$skillsArgs<ExtArgs>
    education?: boolean | Personal$educationArgs<ExtArgs>
    careers?: boolean | Personal$careersArgs<ExtArgs>
    projects?: boolean | Personal$projectsArgs<ExtArgs>
    _count?: boolean | PersonalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personal"]>

  export type PersonalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    idLine?: boolean
    gitLink?: boolean
    phoneNumber?: boolean
    introduceId?: boolean
    introduce?: boolean | Personal$introduceArgs<ExtArgs>
  }, ExtArgs["result"]["personal"]>

  export type PersonalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    idLine?: boolean
    gitLink?: boolean
    phoneNumber?: boolean
    introduceId?: boolean
    introduce?: boolean | Personal$introduceArgs<ExtArgs>
  }, ExtArgs["result"]["personal"]>

  export type PersonalSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    idLine?: boolean
    gitLink?: boolean
    phoneNumber?: boolean
    introduceId?: boolean
  }

  export type PersonalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "idLine" | "gitLink" | "phoneNumber" | "introduceId", ExtArgs["result"]["personal"]>
  export type PersonalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    introduce?: boolean | Personal$introduceArgs<ExtArgs>
    skills?: boolean | Personal$skillsArgs<ExtArgs>
    education?: boolean | Personal$educationArgs<ExtArgs>
    careers?: boolean | Personal$careersArgs<ExtArgs>
    projects?: boolean | Personal$projectsArgs<ExtArgs>
    _count?: boolean | PersonalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    introduce?: boolean | Personal$introduceArgs<ExtArgs>
  }
  export type PersonalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    introduce?: boolean | Personal$introduceArgs<ExtArgs>
  }

  export type $PersonalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personal"
    objects: {
      introduce: Prisma.$IntroduceDetailPayload<ExtArgs> | null
      skills: Prisma.$PersonalSkillPayload<ExtArgs>[]
      education: Prisma.$EducationDetailPayload<ExtArgs>[]
      careers: Prisma.$CareerPayload<ExtArgs>[]
      projects: Prisma.$ProjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      email: string
      idLine: string
      gitLink: string
      phoneNumber: string
      introduceId: number | null
    }, ExtArgs["result"]["personal"]>
    composites: {}
  }

  type PersonalGetPayload<S extends boolean | null | undefined | PersonalDefaultArgs> = $Result.GetResult<Prisma.$PersonalPayload, S>

  type PersonalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalCountAggregateInputType | true
    }

  export interface PersonalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personal'], meta: { name: 'Personal' } }
    /**
     * Find zero or one Personal that matches the filter.
     * @param {PersonalFindUniqueArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalFindUniqueArgs>(args: SelectSubset<T, PersonalFindUniqueArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalFindUniqueOrThrowArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalFindFirstArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalFindFirstArgs>(args?: SelectSubset<T, PersonalFindFirstArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalFindFirstOrThrowArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personals
     * const personals = await prisma.personal.findMany()
     * 
     * // Get first 10 Personals
     * const personals = await prisma.personal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalWithIdOnly = await prisma.personal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalFindManyArgs>(args?: SelectSubset<T, PersonalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personal.
     * @param {PersonalCreateArgs} args - Arguments to create a Personal.
     * @example
     * // Create one Personal
     * const Personal = await prisma.personal.create({
     *   data: {
     *     // ... data to create a Personal
     *   }
     * })
     * 
     */
    create<T extends PersonalCreateArgs>(args: SelectSubset<T, PersonalCreateArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personals.
     * @param {PersonalCreateManyArgs} args - Arguments to create many Personals.
     * @example
     * // Create many Personals
     * const personal = await prisma.personal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalCreateManyArgs>(args?: SelectSubset<T, PersonalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personals and returns the data saved in the database.
     * @param {PersonalCreateManyAndReturnArgs} args - Arguments to create many Personals.
     * @example
     * // Create many Personals
     * const personal = await prisma.personal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personals and only return the `id`
     * const personalWithIdOnly = await prisma.personal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personal.
     * @param {PersonalDeleteArgs} args - Arguments to delete one Personal.
     * @example
     * // Delete one Personal
     * const Personal = await prisma.personal.delete({
     *   where: {
     *     // ... filter to delete one Personal
     *   }
     * })
     * 
     */
    delete<T extends PersonalDeleteArgs>(args: SelectSubset<T, PersonalDeleteArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personal.
     * @param {PersonalUpdateArgs} args - Arguments to update one Personal.
     * @example
     * // Update one Personal
     * const personal = await prisma.personal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalUpdateArgs>(args: SelectSubset<T, PersonalUpdateArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personals.
     * @param {PersonalDeleteManyArgs} args - Arguments to filter Personals to delete.
     * @example
     * // Delete a few Personals
     * const { count } = await prisma.personal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalDeleteManyArgs>(args?: SelectSubset<T, PersonalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personals
     * const personal = await prisma.personal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalUpdateManyArgs>(args: SelectSubset<T, PersonalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personals and returns the data updated in the database.
     * @param {PersonalUpdateManyAndReturnArgs} args - Arguments to update many Personals.
     * @example
     * // Update many Personals
     * const personal = await prisma.personal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personals and only return the `id`
     * const personalWithIdOnly = await prisma.personal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personal.
     * @param {PersonalUpsertArgs} args - Arguments to update or create a Personal.
     * @example
     * // Update or create a Personal
     * const personal = await prisma.personal.upsert({
     *   create: {
     *     // ... data to create a Personal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personal we want to update
     *   }
     * })
     */
    upsert<T extends PersonalUpsertArgs>(args: SelectSubset<T, PersonalUpsertArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalCountArgs} args - Arguments to filter Personals to count.
     * @example
     * // Count the number of Personals
     * const count = await prisma.personal.count({
     *   where: {
     *     // ... the filter for the Personals we want to count
     *   }
     * })
    **/
    count<T extends PersonalCountArgs>(
      args?: Subset<T, PersonalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalAggregateArgs>(args: Subset<T, PersonalAggregateArgs>): Prisma.PrismaPromise<GetPersonalAggregateType<T>>

    /**
     * Group by Personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalGroupByArgs['orderBy'] }
        : { orderBy?: PersonalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personal model
   */
  readonly fields: PersonalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    introduce<T extends Personal$introduceArgs<ExtArgs> = {}>(args?: Subset<T, Personal$introduceArgs<ExtArgs>>): Prisma__IntroduceDetailClient<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    skills<T extends Personal$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Personal$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    education<T extends Personal$educationArgs<ExtArgs> = {}>(args?: Subset<T, Personal$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    careers<T extends Personal$careersArgs<ExtArgs> = {}>(args?: Subset<T, Personal$careersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Personal$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Personal$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Personal model
   */
  interface PersonalFieldRefs {
    readonly id: FieldRef<"Personal", 'Int'>
    readonly firstname: FieldRef<"Personal", 'String'>
    readonly lastname: FieldRef<"Personal", 'String'>
    readonly email: FieldRef<"Personal", 'String'>
    readonly idLine: FieldRef<"Personal", 'String'>
    readonly gitLink: FieldRef<"Personal", 'String'>
    readonly phoneNumber: FieldRef<"Personal", 'String'>
    readonly introduceId: FieldRef<"Personal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Personal findUnique
   */
  export type PersonalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    /**
     * Filter, which Personal to fetch.
     */
    where: PersonalWhereUniqueInput
  }

  /**
   * Personal findUniqueOrThrow
   */
  export type PersonalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    /**
     * Filter, which Personal to fetch.
     */
    where: PersonalWhereUniqueInput
  }

  /**
   * Personal findFirst
   */
  export type PersonalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    /**
     * Filter, which Personal to fetch.
     */
    where?: PersonalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personals to fetch.
     */
    orderBy?: PersonalOrderByWithRelationInput | PersonalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personals.
     */
    cursor?: PersonalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personals.
     */
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * Personal findFirstOrThrow
   */
  export type PersonalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    /**
     * Filter, which Personal to fetch.
     */
    where?: PersonalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personals to fetch.
     */
    orderBy?: PersonalOrderByWithRelationInput | PersonalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personals.
     */
    cursor?: PersonalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personals.
     */
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * Personal findMany
   */
  export type PersonalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    /**
     * Filter, which Personals to fetch.
     */
    where?: PersonalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personals to fetch.
     */
    orderBy?: PersonalOrderByWithRelationInput | PersonalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personals.
     */
    cursor?: PersonalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personals.
     */
    skip?: number
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * Personal create
   */
  export type PersonalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    /**
     * The data needed to create a Personal.
     */
    data: XOR<PersonalCreateInput, PersonalUncheckedCreateInput>
  }

  /**
   * Personal createMany
   */
  export type PersonalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personals.
     */
    data: PersonalCreateManyInput | PersonalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personal createManyAndReturn
   */
  export type PersonalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * The data used to create many Personals.
     */
    data: PersonalCreateManyInput | PersonalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Personal update
   */
  export type PersonalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    /**
     * The data needed to update a Personal.
     */
    data: XOR<PersonalUpdateInput, PersonalUncheckedUpdateInput>
    /**
     * Choose, which Personal to update.
     */
    where: PersonalWhereUniqueInput
  }

  /**
   * Personal updateMany
   */
  export type PersonalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personals.
     */
    data: XOR<PersonalUpdateManyMutationInput, PersonalUncheckedUpdateManyInput>
    /**
     * Filter which Personals to update
     */
    where?: PersonalWhereInput
    /**
     * Limit how many Personals to update.
     */
    limit?: number
  }

  /**
   * Personal updateManyAndReturn
   */
  export type PersonalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * The data used to update Personals.
     */
    data: XOR<PersonalUpdateManyMutationInput, PersonalUncheckedUpdateManyInput>
    /**
     * Filter which Personals to update
     */
    where?: PersonalWhereInput
    /**
     * Limit how many Personals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Personal upsert
   */
  export type PersonalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    /**
     * The filter to search for the Personal to update in case it exists.
     */
    where: PersonalWhereUniqueInput
    /**
     * In case the Personal found by the `where` argument doesn't exist, create a new Personal with this data.
     */
    create: XOR<PersonalCreateInput, PersonalUncheckedCreateInput>
    /**
     * In case the Personal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalUpdateInput, PersonalUncheckedUpdateInput>
  }

  /**
   * Personal delete
   */
  export type PersonalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    /**
     * Filter which Personal to delete.
     */
    where: PersonalWhereUniqueInput
  }

  /**
   * Personal deleteMany
   */
  export type PersonalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personals to delete
     */
    where?: PersonalWhereInput
    /**
     * Limit how many Personals to delete.
     */
    limit?: number
  }

  /**
   * Personal.introduce
   */
  export type Personal$introduceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
    where?: IntroduceDetailWhereInput
  }

  /**
   * Personal.skills
   */
  export type Personal$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    where?: PersonalSkillWhereInput
    orderBy?: PersonalSkillOrderByWithRelationInput | PersonalSkillOrderByWithRelationInput[]
    cursor?: PersonalSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalSkillScalarFieldEnum | PersonalSkillScalarFieldEnum[]
  }

  /**
   * Personal.education
   */
  export type Personal$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
    where?: EducationDetailWhereInput
    orderBy?: EducationDetailOrderByWithRelationInput | EducationDetailOrderByWithRelationInput[]
    cursor?: EducationDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationDetailScalarFieldEnum | EducationDetailScalarFieldEnum[]
  }

  /**
   * Personal.careers
   */
  export type Personal$careersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    cursor?: CareerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Personal.projects
   */
  export type Personal$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Personal without action
   */
  export type PersonalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    imagePath: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    imagePath: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imagePath: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imagePath?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imagePath?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imagePath?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    name: string
    description: string | null
    imagePath: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imagePath?: boolean
    personalSkills?: boolean | Skill$personalSkillsArgs<ExtArgs>
    projectSkills?: boolean | Skill$projectSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imagePath?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imagePath?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imagePath?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imagePath", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalSkills?: boolean | Skill$personalSkillsArgs<ExtArgs>
    projectSkills?: boolean | Skill$projectSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      personalSkills: Prisma.$PersonalSkillPayload<ExtArgs>[]
      projectSkills: Prisma.$ProjectSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      imagePath: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personalSkills<T extends Skill$personalSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$personalSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectSkills<T extends Skill$projectSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$projectSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly description: FieldRef<"Skill", 'String'>
    readonly imagePath: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.personalSkills
   */
  export type Skill$personalSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    where?: PersonalSkillWhereInput
    orderBy?: PersonalSkillOrderByWithRelationInput | PersonalSkillOrderByWithRelationInput[]
    cursor?: PersonalSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalSkillScalarFieldEnum | PersonalSkillScalarFieldEnum[]
  }

  /**
   * Skill.projectSkills
   */
  export type Skill$projectSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    where?: ProjectSkillWhereInput
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    cursor?: ProjectSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectSkillScalarFieldEnum | ProjectSkillScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model PersonalSkill
   */

  export type AggregatePersonalSkill = {
    _count: PersonalSkillCountAggregateOutputType | null
    _avg: PersonalSkillAvgAggregateOutputType | null
    _sum: PersonalSkillSumAggregateOutputType | null
    _min: PersonalSkillMinAggregateOutputType | null
    _max: PersonalSkillMaxAggregateOutputType | null
  }

  export type PersonalSkillAvgAggregateOutputType = {
    personalId: number | null
    skillId: number | null
  }

  export type PersonalSkillSumAggregateOutputType = {
    personalId: number | null
    skillId: number | null
  }

  export type PersonalSkillMinAggregateOutputType = {
    personalId: number | null
    skillId: number | null
  }

  export type PersonalSkillMaxAggregateOutputType = {
    personalId: number | null
    skillId: number | null
  }

  export type PersonalSkillCountAggregateOutputType = {
    personalId: number
    skillId: number
    _all: number
  }


  export type PersonalSkillAvgAggregateInputType = {
    personalId?: true
    skillId?: true
  }

  export type PersonalSkillSumAggregateInputType = {
    personalId?: true
    skillId?: true
  }

  export type PersonalSkillMinAggregateInputType = {
    personalId?: true
    skillId?: true
  }

  export type PersonalSkillMaxAggregateInputType = {
    personalId?: true
    skillId?: true
  }

  export type PersonalSkillCountAggregateInputType = {
    personalId?: true
    skillId?: true
    _all?: true
  }

  export type PersonalSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalSkill to aggregate.
     */
    where?: PersonalSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalSkills to fetch.
     */
    orderBy?: PersonalSkillOrderByWithRelationInput | PersonalSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalSkills
    **/
    _count?: true | PersonalSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalSkillMaxAggregateInputType
  }

  export type GetPersonalSkillAggregateType<T extends PersonalSkillAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalSkill[P]>
      : GetScalarType<T[P], AggregatePersonalSkill[P]>
  }




  export type PersonalSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalSkillWhereInput
    orderBy?: PersonalSkillOrderByWithAggregationInput | PersonalSkillOrderByWithAggregationInput[]
    by: PersonalSkillScalarFieldEnum[] | PersonalSkillScalarFieldEnum
    having?: PersonalSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalSkillCountAggregateInputType | true
    _avg?: PersonalSkillAvgAggregateInputType
    _sum?: PersonalSkillSumAggregateInputType
    _min?: PersonalSkillMinAggregateInputType
    _max?: PersonalSkillMaxAggregateInputType
  }

  export type PersonalSkillGroupByOutputType = {
    personalId: number
    skillId: number
    _count: PersonalSkillCountAggregateOutputType | null
    _avg: PersonalSkillAvgAggregateOutputType | null
    _sum: PersonalSkillSumAggregateOutputType | null
    _min: PersonalSkillMinAggregateOutputType | null
    _max: PersonalSkillMaxAggregateOutputType | null
  }

  type GetPersonalSkillGroupByPayload<T extends PersonalSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalSkillGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalSkillGroupByOutputType[P]>
        }
      >
    >


  export type PersonalSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    personalId?: boolean
    skillId?: boolean
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalSkill"]>

  export type PersonalSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    personalId?: boolean
    skillId?: boolean
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalSkill"]>

  export type PersonalSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    personalId?: boolean
    skillId?: boolean
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalSkill"]>

  export type PersonalSkillSelectScalar = {
    personalId?: boolean
    skillId?: boolean
  }

  export type PersonalSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"personalId" | "skillId", ExtArgs["result"]["personalSkill"]>
  export type PersonalSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type PersonalSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type PersonalSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $PersonalSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalSkill"
    objects: {
      personal: Prisma.$PersonalPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      personalId: number
      skillId: number
    }, ExtArgs["result"]["personalSkill"]>
    composites: {}
  }

  type PersonalSkillGetPayload<S extends boolean | null | undefined | PersonalSkillDefaultArgs> = $Result.GetResult<Prisma.$PersonalSkillPayload, S>

  type PersonalSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalSkillCountAggregateInputType | true
    }

  export interface PersonalSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalSkill'], meta: { name: 'PersonalSkill' } }
    /**
     * Find zero or one PersonalSkill that matches the filter.
     * @param {PersonalSkillFindUniqueArgs} args - Arguments to find a PersonalSkill
     * @example
     * // Get one PersonalSkill
     * const personalSkill = await prisma.personalSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalSkillFindUniqueArgs>(args: SelectSubset<T, PersonalSkillFindUniqueArgs<ExtArgs>>): Prisma__PersonalSkillClient<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalSkillFindUniqueOrThrowArgs} args - Arguments to find a PersonalSkill
     * @example
     * // Get one PersonalSkill
     * const personalSkill = await prisma.personalSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalSkillClient<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalSkillFindFirstArgs} args - Arguments to find a PersonalSkill
     * @example
     * // Get one PersonalSkill
     * const personalSkill = await prisma.personalSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalSkillFindFirstArgs>(args?: SelectSubset<T, PersonalSkillFindFirstArgs<ExtArgs>>): Prisma__PersonalSkillClient<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalSkillFindFirstOrThrowArgs} args - Arguments to find a PersonalSkill
     * @example
     * // Get one PersonalSkill
     * const personalSkill = await prisma.personalSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalSkillClient<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalSkills
     * const personalSkills = await prisma.personalSkill.findMany()
     * 
     * // Get first 10 PersonalSkills
     * const personalSkills = await prisma.personalSkill.findMany({ take: 10 })
     * 
     * // Only select the `personalId`
     * const personalSkillWithPersonalIdOnly = await prisma.personalSkill.findMany({ select: { personalId: true } })
     * 
     */
    findMany<T extends PersonalSkillFindManyArgs>(args?: SelectSubset<T, PersonalSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalSkill.
     * @param {PersonalSkillCreateArgs} args - Arguments to create a PersonalSkill.
     * @example
     * // Create one PersonalSkill
     * const PersonalSkill = await prisma.personalSkill.create({
     *   data: {
     *     // ... data to create a PersonalSkill
     *   }
     * })
     * 
     */
    create<T extends PersonalSkillCreateArgs>(args: SelectSubset<T, PersonalSkillCreateArgs<ExtArgs>>): Prisma__PersonalSkillClient<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalSkills.
     * @param {PersonalSkillCreateManyArgs} args - Arguments to create many PersonalSkills.
     * @example
     * // Create many PersonalSkills
     * const personalSkill = await prisma.personalSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalSkillCreateManyArgs>(args?: SelectSubset<T, PersonalSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalSkills and returns the data saved in the database.
     * @param {PersonalSkillCreateManyAndReturnArgs} args - Arguments to create many PersonalSkills.
     * @example
     * // Create many PersonalSkills
     * const personalSkill = await prisma.personalSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalSkills and only return the `personalId`
     * const personalSkillWithPersonalIdOnly = await prisma.personalSkill.createManyAndReturn({
     *   select: { personalId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalSkill.
     * @param {PersonalSkillDeleteArgs} args - Arguments to delete one PersonalSkill.
     * @example
     * // Delete one PersonalSkill
     * const PersonalSkill = await prisma.personalSkill.delete({
     *   where: {
     *     // ... filter to delete one PersonalSkill
     *   }
     * })
     * 
     */
    delete<T extends PersonalSkillDeleteArgs>(args: SelectSubset<T, PersonalSkillDeleteArgs<ExtArgs>>): Prisma__PersonalSkillClient<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalSkill.
     * @param {PersonalSkillUpdateArgs} args - Arguments to update one PersonalSkill.
     * @example
     * // Update one PersonalSkill
     * const personalSkill = await prisma.personalSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalSkillUpdateArgs>(args: SelectSubset<T, PersonalSkillUpdateArgs<ExtArgs>>): Prisma__PersonalSkillClient<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalSkills.
     * @param {PersonalSkillDeleteManyArgs} args - Arguments to filter PersonalSkills to delete.
     * @example
     * // Delete a few PersonalSkills
     * const { count } = await prisma.personalSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalSkillDeleteManyArgs>(args?: SelectSubset<T, PersonalSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalSkills
     * const personalSkill = await prisma.personalSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalSkillUpdateManyArgs>(args: SelectSubset<T, PersonalSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalSkills and returns the data updated in the database.
     * @param {PersonalSkillUpdateManyAndReturnArgs} args - Arguments to update many PersonalSkills.
     * @example
     * // Update many PersonalSkills
     * const personalSkill = await prisma.personalSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalSkills and only return the `personalId`
     * const personalSkillWithPersonalIdOnly = await prisma.personalSkill.updateManyAndReturn({
     *   select: { personalId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalSkill.
     * @param {PersonalSkillUpsertArgs} args - Arguments to update or create a PersonalSkill.
     * @example
     * // Update or create a PersonalSkill
     * const personalSkill = await prisma.personalSkill.upsert({
     *   create: {
     *     // ... data to create a PersonalSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalSkill we want to update
     *   }
     * })
     */
    upsert<T extends PersonalSkillUpsertArgs>(args: SelectSubset<T, PersonalSkillUpsertArgs<ExtArgs>>): Prisma__PersonalSkillClient<$Result.GetResult<Prisma.$PersonalSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalSkillCountArgs} args - Arguments to filter PersonalSkills to count.
     * @example
     * // Count the number of PersonalSkills
     * const count = await prisma.personalSkill.count({
     *   where: {
     *     // ... the filter for the PersonalSkills we want to count
     *   }
     * })
    **/
    count<T extends PersonalSkillCountArgs>(
      args?: Subset<T, PersonalSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalSkillAggregateArgs>(args: Subset<T, PersonalSkillAggregateArgs>): Prisma.PrismaPromise<GetPersonalSkillAggregateType<T>>

    /**
     * Group by PersonalSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalSkillGroupByArgs['orderBy'] }
        : { orderBy?: PersonalSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalSkill model
   */
  readonly fields: PersonalSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personal<T extends PersonalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalDefaultArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalSkill model
   */
  interface PersonalSkillFieldRefs {
    readonly personalId: FieldRef<"PersonalSkill", 'Int'>
    readonly skillId: FieldRef<"PersonalSkill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PersonalSkill findUnique
   */
  export type PersonalSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    /**
     * Filter, which PersonalSkill to fetch.
     */
    where: PersonalSkillWhereUniqueInput
  }

  /**
   * PersonalSkill findUniqueOrThrow
   */
  export type PersonalSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    /**
     * Filter, which PersonalSkill to fetch.
     */
    where: PersonalSkillWhereUniqueInput
  }

  /**
   * PersonalSkill findFirst
   */
  export type PersonalSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    /**
     * Filter, which PersonalSkill to fetch.
     */
    where?: PersonalSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalSkills to fetch.
     */
    orderBy?: PersonalSkillOrderByWithRelationInput | PersonalSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalSkills.
     */
    cursor?: PersonalSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalSkills.
     */
    distinct?: PersonalSkillScalarFieldEnum | PersonalSkillScalarFieldEnum[]
  }

  /**
   * PersonalSkill findFirstOrThrow
   */
  export type PersonalSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    /**
     * Filter, which PersonalSkill to fetch.
     */
    where?: PersonalSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalSkills to fetch.
     */
    orderBy?: PersonalSkillOrderByWithRelationInput | PersonalSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalSkills.
     */
    cursor?: PersonalSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalSkills.
     */
    distinct?: PersonalSkillScalarFieldEnum | PersonalSkillScalarFieldEnum[]
  }

  /**
   * PersonalSkill findMany
   */
  export type PersonalSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    /**
     * Filter, which PersonalSkills to fetch.
     */
    where?: PersonalSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalSkills to fetch.
     */
    orderBy?: PersonalSkillOrderByWithRelationInput | PersonalSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalSkills.
     */
    cursor?: PersonalSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalSkills.
     */
    skip?: number
    distinct?: PersonalSkillScalarFieldEnum | PersonalSkillScalarFieldEnum[]
  }

  /**
   * PersonalSkill create
   */
  export type PersonalSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalSkill.
     */
    data: XOR<PersonalSkillCreateInput, PersonalSkillUncheckedCreateInput>
  }

  /**
   * PersonalSkill createMany
   */
  export type PersonalSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalSkills.
     */
    data: PersonalSkillCreateManyInput | PersonalSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalSkill createManyAndReturn
   */
  export type PersonalSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalSkills.
     */
    data: PersonalSkillCreateManyInput | PersonalSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalSkill update
   */
  export type PersonalSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalSkill.
     */
    data: XOR<PersonalSkillUpdateInput, PersonalSkillUncheckedUpdateInput>
    /**
     * Choose, which PersonalSkill to update.
     */
    where: PersonalSkillWhereUniqueInput
  }

  /**
   * PersonalSkill updateMany
   */
  export type PersonalSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalSkills.
     */
    data: XOR<PersonalSkillUpdateManyMutationInput, PersonalSkillUncheckedUpdateManyInput>
    /**
     * Filter which PersonalSkills to update
     */
    where?: PersonalSkillWhereInput
    /**
     * Limit how many PersonalSkills to update.
     */
    limit?: number
  }

  /**
   * PersonalSkill updateManyAndReturn
   */
  export type PersonalSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * The data used to update PersonalSkills.
     */
    data: XOR<PersonalSkillUpdateManyMutationInput, PersonalSkillUncheckedUpdateManyInput>
    /**
     * Filter which PersonalSkills to update
     */
    where?: PersonalSkillWhereInput
    /**
     * Limit how many PersonalSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalSkill upsert
   */
  export type PersonalSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalSkill to update in case it exists.
     */
    where: PersonalSkillWhereUniqueInput
    /**
     * In case the PersonalSkill found by the `where` argument doesn't exist, create a new PersonalSkill with this data.
     */
    create: XOR<PersonalSkillCreateInput, PersonalSkillUncheckedCreateInput>
    /**
     * In case the PersonalSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalSkillUpdateInput, PersonalSkillUncheckedUpdateInput>
  }

  /**
   * PersonalSkill delete
   */
  export type PersonalSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
    /**
     * Filter which PersonalSkill to delete.
     */
    where: PersonalSkillWhereUniqueInput
  }

  /**
   * PersonalSkill deleteMany
   */
  export type PersonalSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalSkills to delete
     */
    where?: PersonalSkillWhereInput
    /**
     * Limit how many PersonalSkills to delete.
     */
    limit?: number
  }

  /**
   * PersonalSkill without action
   */
  export type PersonalSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalSkill
     */
    select?: PersonalSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalSkill
     */
    omit?: PersonalSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalSkillInclude<ExtArgs> | null
  }


  /**
   * Model ProjectSkill
   */

  export type AggregateProjectSkill = {
    _count: ProjectSkillCountAggregateOutputType | null
    _avg: ProjectSkillAvgAggregateOutputType | null
    _sum: ProjectSkillSumAggregateOutputType | null
    _min: ProjectSkillMinAggregateOutputType | null
    _max: ProjectSkillMaxAggregateOutputType | null
  }

  export type ProjectSkillAvgAggregateOutputType = {
    projectId: number | null
    skillId: number | null
  }

  export type ProjectSkillSumAggregateOutputType = {
    projectId: number | null
    skillId: number | null
  }

  export type ProjectSkillMinAggregateOutputType = {
    projectId: number | null
    skillId: number | null
  }

  export type ProjectSkillMaxAggregateOutputType = {
    projectId: number | null
    skillId: number | null
  }

  export type ProjectSkillCountAggregateOutputType = {
    projectId: number
    skillId: number
    _all: number
  }


  export type ProjectSkillAvgAggregateInputType = {
    projectId?: true
    skillId?: true
  }

  export type ProjectSkillSumAggregateInputType = {
    projectId?: true
    skillId?: true
  }

  export type ProjectSkillMinAggregateInputType = {
    projectId?: true
    skillId?: true
  }

  export type ProjectSkillMaxAggregateInputType = {
    projectId?: true
    skillId?: true
  }

  export type ProjectSkillCountAggregateInputType = {
    projectId?: true
    skillId?: true
    _all?: true
  }

  export type ProjectSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSkill to aggregate.
     */
    where?: ProjectSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSkills to fetch.
     */
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectSkills
    **/
    _count?: true | ProjectSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectSkillMaxAggregateInputType
  }

  export type GetProjectSkillAggregateType<T extends ProjectSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectSkill[P]>
      : GetScalarType<T[P], AggregateProjectSkill[P]>
  }




  export type ProjectSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSkillWhereInput
    orderBy?: ProjectSkillOrderByWithAggregationInput | ProjectSkillOrderByWithAggregationInput[]
    by: ProjectSkillScalarFieldEnum[] | ProjectSkillScalarFieldEnum
    having?: ProjectSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectSkillCountAggregateInputType | true
    _avg?: ProjectSkillAvgAggregateInputType
    _sum?: ProjectSkillSumAggregateInputType
    _min?: ProjectSkillMinAggregateInputType
    _max?: ProjectSkillMaxAggregateInputType
  }

  export type ProjectSkillGroupByOutputType = {
    projectId: number
    skillId: number
    _count: ProjectSkillCountAggregateOutputType | null
    _avg: ProjectSkillAvgAggregateOutputType | null
    _sum: ProjectSkillSumAggregateOutputType | null
    _min: ProjectSkillMinAggregateOutputType | null
    _max: ProjectSkillMaxAggregateOutputType | null
  }

  type GetProjectSkillGroupByPayload<T extends ProjectSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectSkillGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectSkillGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    skillId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSkill"]>

  export type ProjectSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    skillId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSkill"]>

  export type ProjectSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    skillId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSkill"]>

  export type ProjectSkillSelectScalar = {
    projectId?: boolean
    skillId?: boolean
  }

  export type ProjectSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectId" | "skillId", ExtArgs["result"]["projectSkill"]>
  export type ProjectSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type ProjectSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type ProjectSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $ProjectSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectSkill"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: number
      skillId: number
    }, ExtArgs["result"]["projectSkill"]>
    composites: {}
  }

  type ProjectSkillGetPayload<S extends boolean | null | undefined | ProjectSkillDefaultArgs> = $Result.GetResult<Prisma.$ProjectSkillPayload, S>

  type ProjectSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectSkillCountAggregateInputType | true
    }

  export interface ProjectSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectSkill'], meta: { name: 'ProjectSkill' } }
    /**
     * Find zero or one ProjectSkill that matches the filter.
     * @param {ProjectSkillFindUniqueArgs} args - Arguments to find a ProjectSkill
     * @example
     * // Get one ProjectSkill
     * const projectSkill = await prisma.projectSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectSkillFindUniqueArgs>(args: SelectSubset<T, ProjectSkillFindUniqueArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectSkillFindUniqueOrThrowArgs} args - Arguments to find a ProjectSkill
     * @example
     * // Get one ProjectSkill
     * const projectSkill = await prisma.projectSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillFindFirstArgs} args - Arguments to find a ProjectSkill
     * @example
     * // Get one ProjectSkill
     * const projectSkill = await prisma.projectSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectSkillFindFirstArgs>(args?: SelectSubset<T, ProjectSkillFindFirstArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillFindFirstOrThrowArgs} args - Arguments to find a ProjectSkill
     * @example
     * // Get one ProjectSkill
     * const projectSkill = await prisma.projectSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectSkills
     * const projectSkills = await prisma.projectSkill.findMany()
     * 
     * // Get first 10 ProjectSkills
     * const projectSkills = await prisma.projectSkill.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectSkillWithProjectIdOnly = await prisma.projectSkill.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends ProjectSkillFindManyArgs>(args?: SelectSubset<T, ProjectSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectSkill.
     * @param {ProjectSkillCreateArgs} args - Arguments to create a ProjectSkill.
     * @example
     * // Create one ProjectSkill
     * const ProjectSkill = await prisma.projectSkill.create({
     *   data: {
     *     // ... data to create a ProjectSkill
     *   }
     * })
     * 
     */
    create<T extends ProjectSkillCreateArgs>(args: SelectSubset<T, ProjectSkillCreateArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectSkills.
     * @param {ProjectSkillCreateManyArgs} args - Arguments to create many ProjectSkills.
     * @example
     * // Create many ProjectSkills
     * const projectSkill = await prisma.projectSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectSkillCreateManyArgs>(args?: SelectSubset<T, ProjectSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectSkills and returns the data saved in the database.
     * @param {ProjectSkillCreateManyAndReturnArgs} args - Arguments to create many ProjectSkills.
     * @example
     * // Create many ProjectSkills
     * const projectSkill = await prisma.projectSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectSkills and only return the `projectId`
     * const projectSkillWithProjectIdOnly = await prisma.projectSkill.createManyAndReturn({
     *   select: { projectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectSkill.
     * @param {ProjectSkillDeleteArgs} args - Arguments to delete one ProjectSkill.
     * @example
     * // Delete one ProjectSkill
     * const ProjectSkill = await prisma.projectSkill.delete({
     *   where: {
     *     // ... filter to delete one ProjectSkill
     *   }
     * })
     * 
     */
    delete<T extends ProjectSkillDeleteArgs>(args: SelectSubset<T, ProjectSkillDeleteArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectSkill.
     * @param {ProjectSkillUpdateArgs} args - Arguments to update one ProjectSkill.
     * @example
     * // Update one ProjectSkill
     * const projectSkill = await prisma.projectSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectSkillUpdateArgs>(args: SelectSubset<T, ProjectSkillUpdateArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectSkills.
     * @param {ProjectSkillDeleteManyArgs} args - Arguments to filter ProjectSkills to delete.
     * @example
     * // Delete a few ProjectSkills
     * const { count } = await prisma.projectSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectSkillDeleteManyArgs>(args?: SelectSubset<T, ProjectSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectSkills
     * const projectSkill = await prisma.projectSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectSkillUpdateManyArgs>(args: SelectSubset<T, ProjectSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSkills and returns the data updated in the database.
     * @param {ProjectSkillUpdateManyAndReturnArgs} args - Arguments to update many ProjectSkills.
     * @example
     * // Update many ProjectSkills
     * const projectSkill = await prisma.projectSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectSkills and only return the `projectId`
     * const projectSkillWithProjectIdOnly = await prisma.projectSkill.updateManyAndReturn({
     *   select: { projectId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectSkill.
     * @param {ProjectSkillUpsertArgs} args - Arguments to update or create a ProjectSkill.
     * @example
     * // Update or create a ProjectSkill
     * const projectSkill = await prisma.projectSkill.upsert({
     *   create: {
     *     // ... data to create a ProjectSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectSkill we want to update
     *   }
     * })
     */
    upsert<T extends ProjectSkillUpsertArgs>(args: SelectSubset<T, ProjectSkillUpsertArgs<ExtArgs>>): Prisma__ProjectSkillClient<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillCountArgs} args - Arguments to filter ProjectSkills to count.
     * @example
     * // Count the number of ProjectSkills
     * const count = await prisma.projectSkill.count({
     *   where: {
     *     // ... the filter for the ProjectSkills we want to count
     *   }
     * })
    **/
    count<T extends ProjectSkillCountArgs>(
      args?: Subset<T, ProjectSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectSkillAggregateArgs>(args: Subset<T, ProjectSkillAggregateArgs>): Prisma.PrismaPromise<GetProjectSkillAggregateType<T>>

    /**
     * Group by ProjectSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectSkillGroupByArgs['orderBy'] }
        : { orderBy?: ProjectSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectSkill model
   */
  readonly fields: ProjectSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectSkill model
   */
  interface ProjectSkillFieldRefs {
    readonly projectId: FieldRef<"ProjectSkill", 'Int'>
    readonly skillId: FieldRef<"ProjectSkill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectSkill findUnique
   */
  export type ProjectSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSkill to fetch.
     */
    where: ProjectSkillWhereUniqueInput
  }

  /**
   * ProjectSkill findUniqueOrThrow
   */
  export type ProjectSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSkill to fetch.
     */
    where: ProjectSkillWhereUniqueInput
  }

  /**
   * ProjectSkill findFirst
   */
  export type ProjectSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSkill to fetch.
     */
    where?: ProjectSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSkills to fetch.
     */
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSkills.
     */
    cursor?: ProjectSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSkills.
     */
    distinct?: ProjectSkillScalarFieldEnum | ProjectSkillScalarFieldEnum[]
  }

  /**
   * ProjectSkill findFirstOrThrow
   */
  export type ProjectSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSkill to fetch.
     */
    where?: ProjectSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSkills to fetch.
     */
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSkills.
     */
    cursor?: ProjectSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSkills.
     */
    distinct?: ProjectSkillScalarFieldEnum | ProjectSkillScalarFieldEnum[]
  }

  /**
   * ProjectSkill findMany
   */
  export type ProjectSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSkills to fetch.
     */
    where?: ProjectSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSkills to fetch.
     */
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectSkills.
     */
    cursor?: ProjectSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSkills.
     */
    skip?: number
    distinct?: ProjectSkillScalarFieldEnum | ProjectSkillScalarFieldEnum[]
  }

  /**
   * ProjectSkill create
   */
  export type ProjectSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectSkill.
     */
    data: XOR<ProjectSkillCreateInput, ProjectSkillUncheckedCreateInput>
  }

  /**
   * ProjectSkill createMany
   */
  export type ProjectSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectSkills.
     */
    data: ProjectSkillCreateManyInput | ProjectSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectSkill createManyAndReturn
   */
  export type ProjectSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectSkills.
     */
    data: ProjectSkillCreateManyInput | ProjectSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSkill update
   */
  export type ProjectSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectSkill.
     */
    data: XOR<ProjectSkillUpdateInput, ProjectSkillUncheckedUpdateInput>
    /**
     * Choose, which ProjectSkill to update.
     */
    where: ProjectSkillWhereUniqueInput
  }

  /**
   * ProjectSkill updateMany
   */
  export type ProjectSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectSkills.
     */
    data: XOR<ProjectSkillUpdateManyMutationInput, ProjectSkillUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSkills to update
     */
    where?: ProjectSkillWhereInput
    /**
     * Limit how many ProjectSkills to update.
     */
    limit?: number
  }

  /**
   * ProjectSkill updateManyAndReturn
   */
  export type ProjectSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * The data used to update ProjectSkills.
     */
    data: XOR<ProjectSkillUpdateManyMutationInput, ProjectSkillUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSkills to update
     */
    where?: ProjectSkillWhereInput
    /**
     * Limit how many ProjectSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSkill upsert
   */
  export type ProjectSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectSkill to update in case it exists.
     */
    where: ProjectSkillWhereUniqueInput
    /**
     * In case the ProjectSkill found by the `where` argument doesn't exist, create a new ProjectSkill with this data.
     */
    create: XOR<ProjectSkillCreateInput, ProjectSkillUncheckedCreateInput>
    /**
     * In case the ProjectSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectSkillUpdateInput, ProjectSkillUncheckedUpdateInput>
  }

  /**
   * ProjectSkill delete
   */
  export type ProjectSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    /**
     * Filter which ProjectSkill to delete.
     */
    where: ProjectSkillWhereUniqueInput
  }

  /**
   * ProjectSkill deleteMany
   */
  export type ProjectSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSkills to delete
     */
    where?: ProjectSkillWhereInput
    /**
     * Limit how many ProjectSkills to delete.
     */
    limit?: number
  }

  /**
   * ProjectSkill without action
   */
  export type ProjectSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
  }


  /**
   * Model IntroduceDetail
   */

  export type AggregateIntroduceDetail = {
    _count: IntroduceDetailCountAggregateOutputType | null
    _avg: IntroduceDetailAvgAggregateOutputType | null
    _sum: IntroduceDetailSumAggregateOutputType | null
    _min: IntroduceDetailMinAggregateOutputType | null
    _max: IntroduceDetailMaxAggregateOutputType | null
  }

  export type IntroduceDetailAvgAggregateOutputType = {
    id: number | null
  }

  export type IntroduceDetailSumAggregateOutputType = {
    id: number | null
  }

  export type IntroduceDetailMinAggregateOutputType = {
    id: number | null
    title: string | null
    titleIcon: string | null
    titleEmoji: string | null
  }

  export type IntroduceDetailMaxAggregateOutputType = {
    id: number | null
    title: string | null
    titleIcon: string | null
    titleEmoji: string | null
  }

  export type IntroduceDetailCountAggregateOutputType = {
    id: number
    title: number
    titleIcon: number
    titleEmoji: number
    detail: number
    _all: number
  }


  export type IntroduceDetailAvgAggregateInputType = {
    id?: true
  }

  export type IntroduceDetailSumAggregateInputType = {
    id?: true
  }

  export type IntroduceDetailMinAggregateInputType = {
    id?: true
    title?: true
    titleIcon?: true
    titleEmoji?: true
  }

  export type IntroduceDetailMaxAggregateInputType = {
    id?: true
    title?: true
    titleIcon?: true
    titleEmoji?: true
  }

  export type IntroduceDetailCountAggregateInputType = {
    id?: true
    title?: true
    titleIcon?: true
    titleEmoji?: true
    detail?: true
    _all?: true
  }

  export type IntroduceDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntroduceDetail to aggregate.
     */
    where?: IntroduceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntroduceDetails to fetch.
     */
    orderBy?: IntroduceDetailOrderByWithRelationInput | IntroduceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntroduceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntroduceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntroduceDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntroduceDetails
    **/
    _count?: true | IntroduceDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntroduceDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntroduceDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntroduceDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntroduceDetailMaxAggregateInputType
  }

  export type GetIntroduceDetailAggregateType<T extends IntroduceDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateIntroduceDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntroduceDetail[P]>
      : GetScalarType<T[P], AggregateIntroduceDetail[P]>
  }




  export type IntroduceDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntroduceDetailWhereInput
    orderBy?: IntroduceDetailOrderByWithAggregationInput | IntroduceDetailOrderByWithAggregationInput[]
    by: IntroduceDetailScalarFieldEnum[] | IntroduceDetailScalarFieldEnum
    having?: IntroduceDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntroduceDetailCountAggregateInputType | true
    _avg?: IntroduceDetailAvgAggregateInputType
    _sum?: IntroduceDetailSumAggregateInputType
    _min?: IntroduceDetailMinAggregateInputType
    _max?: IntroduceDetailMaxAggregateInputType
  }

  export type IntroduceDetailGroupByOutputType = {
    id: number
    title: string
    titleIcon: string | null
    titleEmoji: string | null
    detail: JsonValue
    _count: IntroduceDetailCountAggregateOutputType | null
    _avg: IntroduceDetailAvgAggregateOutputType | null
    _sum: IntroduceDetailSumAggregateOutputType | null
    _min: IntroduceDetailMinAggregateOutputType | null
    _max: IntroduceDetailMaxAggregateOutputType | null
  }

  type GetIntroduceDetailGroupByPayload<T extends IntroduceDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntroduceDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntroduceDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntroduceDetailGroupByOutputType[P]>
            : GetScalarType<T[P], IntroduceDetailGroupByOutputType[P]>
        }
      >
    >


  export type IntroduceDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleIcon?: boolean
    titleEmoji?: boolean
    detail?: boolean
    personal?: boolean | IntroduceDetail$personalArgs<ExtArgs>
  }, ExtArgs["result"]["introduceDetail"]>

  export type IntroduceDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleIcon?: boolean
    titleEmoji?: boolean
    detail?: boolean
  }, ExtArgs["result"]["introduceDetail"]>

  export type IntroduceDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleIcon?: boolean
    titleEmoji?: boolean
    detail?: boolean
  }, ExtArgs["result"]["introduceDetail"]>

  export type IntroduceDetailSelectScalar = {
    id?: boolean
    title?: boolean
    titleIcon?: boolean
    titleEmoji?: boolean
    detail?: boolean
  }

  export type IntroduceDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "titleIcon" | "titleEmoji" | "detail", ExtArgs["result"]["introduceDetail"]>
  export type IntroduceDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | IntroduceDetail$personalArgs<ExtArgs>
  }
  export type IntroduceDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IntroduceDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IntroduceDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntroduceDetail"
    objects: {
      personal: Prisma.$PersonalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      titleIcon: string | null
      titleEmoji: string | null
      detail: Prisma.JsonValue
    }, ExtArgs["result"]["introduceDetail"]>
    composites: {}
  }

  type IntroduceDetailGetPayload<S extends boolean | null | undefined | IntroduceDetailDefaultArgs> = $Result.GetResult<Prisma.$IntroduceDetailPayload, S>

  type IntroduceDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntroduceDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntroduceDetailCountAggregateInputType | true
    }

  export interface IntroduceDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntroduceDetail'], meta: { name: 'IntroduceDetail' } }
    /**
     * Find zero or one IntroduceDetail that matches the filter.
     * @param {IntroduceDetailFindUniqueArgs} args - Arguments to find a IntroduceDetail
     * @example
     * // Get one IntroduceDetail
     * const introduceDetail = await prisma.introduceDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntroduceDetailFindUniqueArgs>(args: SelectSubset<T, IntroduceDetailFindUniqueArgs<ExtArgs>>): Prisma__IntroduceDetailClient<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntroduceDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntroduceDetailFindUniqueOrThrowArgs} args - Arguments to find a IntroduceDetail
     * @example
     * // Get one IntroduceDetail
     * const introduceDetail = await prisma.introduceDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntroduceDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, IntroduceDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntroduceDetailClient<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntroduceDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntroduceDetailFindFirstArgs} args - Arguments to find a IntroduceDetail
     * @example
     * // Get one IntroduceDetail
     * const introduceDetail = await prisma.introduceDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntroduceDetailFindFirstArgs>(args?: SelectSubset<T, IntroduceDetailFindFirstArgs<ExtArgs>>): Prisma__IntroduceDetailClient<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntroduceDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntroduceDetailFindFirstOrThrowArgs} args - Arguments to find a IntroduceDetail
     * @example
     * // Get one IntroduceDetail
     * const introduceDetail = await prisma.introduceDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntroduceDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, IntroduceDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntroduceDetailClient<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntroduceDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntroduceDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntroduceDetails
     * const introduceDetails = await prisma.introduceDetail.findMany()
     * 
     * // Get first 10 IntroduceDetails
     * const introduceDetails = await prisma.introduceDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const introduceDetailWithIdOnly = await prisma.introduceDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntroduceDetailFindManyArgs>(args?: SelectSubset<T, IntroduceDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntroduceDetail.
     * @param {IntroduceDetailCreateArgs} args - Arguments to create a IntroduceDetail.
     * @example
     * // Create one IntroduceDetail
     * const IntroduceDetail = await prisma.introduceDetail.create({
     *   data: {
     *     // ... data to create a IntroduceDetail
     *   }
     * })
     * 
     */
    create<T extends IntroduceDetailCreateArgs>(args: SelectSubset<T, IntroduceDetailCreateArgs<ExtArgs>>): Prisma__IntroduceDetailClient<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntroduceDetails.
     * @param {IntroduceDetailCreateManyArgs} args - Arguments to create many IntroduceDetails.
     * @example
     * // Create many IntroduceDetails
     * const introduceDetail = await prisma.introduceDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntroduceDetailCreateManyArgs>(args?: SelectSubset<T, IntroduceDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntroduceDetails and returns the data saved in the database.
     * @param {IntroduceDetailCreateManyAndReturnArgs} args - Arguments to create many IntroduceDetails.
     * @example
     * // Create many IntroduceDetails
     * const introduceDetail = await prisma.introduceDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntroduceDetails and only return the `id`
     * const introduceDetailWithIdOnly = await prisma.introduceDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntroduceDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, IntroduceDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntroduceDetail.
     * @param {IntroduceDetailDeleteArgs} args - Arguments to delete one IntroduceDetail.
     * @example
     * // Delete one IntroduceDetail
     * const IntroduceDetail = await prisma.introduceDetail.delete({
     *   where: {
     *     // ... filter to delete one IntroduceDetail
     *   }
     * })
     * 
     */
    delete<T extends IntroduceDetailDeleteArgs>(args: SelectSubset<T, IntroduceDetailDeleteArgs<ExtArgs>>): Prisma__IntroduceDetailClient<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntroduceDetail.
     * @param {IntroduceDetailUpdateArgs} args - Arguments to update one IntroduceDetail.
     * @example
     * // Update one IntroduceDetail
     * const introduceDetail = await prisma.introduceDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntroduceDetailUpdateArgs>(args: SelectSubset<T, IntroduceDetailUpdateArgs<ExtArgs>>): Prisma__IntroduceDetailClient<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntroduceDetails.
     * @param {IntroduceDetailDeleteManyArgs} args - Arguments to filter IntroduceDetails to delete.
     * @example
     * // Delete a few IntroduceDetails
     * const { count } = await prisma.introduceDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntroduceDetailDeleteManyArgs>(args?: SelectSubset<T, IntroduceDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntroduceDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntroduceDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntroduceDetails
     * const introduceDetail = await prisma.introduceDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntroduceDetailUpdateManyArgs>(args: SelectSubset<T, IntroduceDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntroduceDetails and returns the data updated in the database.
     * @param {IntroduceDetailUpdateManyAndReturnArgs} args - Arguments to update many IntroduceDetails.
     * @example
     * // Update many IntroduceDetails
     * const introduceDetail = await prisma.introduceDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntroduceDetails and only return the `id`
     * const introduceDetailWithIdOnly = await prisma.introduceDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntroduceDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, IntroduceDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntroduceDetail.
     * @param {IntroduceDetailUpsertArgs} args - Arguments to update or create a IntroduceDetail.
     * @example
     * // Update or create a IntroduceDetail
     * const introduceDetail = await prisma.introduceDetail.upsert({
     *   create: {
     *     // ... data to create a IntroduceDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntroduceDetail we want to update
     *   }
     * })
     */
    upsert<T extends IntroduceDetailUpsertArgs>(args: SelectSubset<T, IntroduceDetailUpsertArgs<ExtArgs>>): Prisma__IntroduceDetailClient<$Result.GetResult<Prisma.$IntroduceDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntroduceDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntroduceDetailCountArgs} args - Arguments to filter IntroduceDetails to count.
     * @example
     * // Count the number of IntroduceDetails
     * const count = await prisma.introduceDetail.count({
     *   where: {
     *     // ... the filter for the IntroduceDetails we want to count
     *   }
     * })
    **/
    count<T extends IntroduceDetailCountArgs>(
      args?: Subset<T, IntroduceDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntroduceDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntroduceDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntroduceDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntroduceDetailAggregateArgs>(args: Subset<T, IntroduceDetailAggregateArgs>): Prisma.PrismaPromise<GetIntroduceDetailAggregateType<T>>

    /**
     * Group by IntroduceDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntroduceDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntroduceDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntroduceDetailGroupByArgs['orderBy'] }
        : { orderBy?: IntroduceDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntroduceDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntroduceDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntroduceDetail model
   */
  readonly fields: IntroduceDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntroduceDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntroduceDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personal<T extends IntroduceDetail$personalArgs<ExtArgs> = {}>(args?: Subset<T, IntroduceDetail$personalArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IntroduceDetail model
   */
  interface IntroduceDetailFieldRefs {
    readonly id: FieldRef<"IntroduceDetail", 'Int'>
    readonly title: FieldRef<"IntroduceDetail", 'String'>
    readonly titleIcon: FieldRef<"IntroduceDetail", 'String'>
    readonly titleEmoji: FieldRef<"IntroduceDetail", 'String'>
    readonly detail: FieldRef<"IntroduceDetail", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * IntroduceDetail findUnique
   */
  export type IntroduceDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
    /**
     * Filter, which IntroduceDetail to fetch.
     */
    where: IntroduceDetailWhereUniqueInput
  }

  /**
   * IntroduceDetail findUniqueOrThrow
   */
  export type IntroduceDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
    /**
     * Filter, which IntroduceDetail to fetch.
     */
    where: IntroduceDetailWhereUniqueInput
  }

  /**
   * IntroduceDetail findFirst
   */
  export type IntroduceDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
    /**
     * Filter, which IntroduceDetail to fetch.
     */
    where?: IntroduceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntroduceDetails to fetch.
     */
    orderBy?: IntroduceDetailOrderByWithRelationInput | IntroduceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntroduceDetails.
     */
    cursor?: IntroduceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntroduceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntroduceDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntroduceDetails.
     */
    distinct?: IntroduceDetailScalarFieldEnum | IntroduceDetailScalarFieldEnum[]
  }

  /**
   * IntroduceDetail findFirstOrThrow
   */
  export type IntroduceDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
    /**
     * Filter, which IntroduceDetail to fetch.
     */
    where?: IntroduceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntroduceDetails to fetch.
     */
    orderBy?: IntroduceDetailOrderByWithRelationInput | IntroduceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntroduceDetails.
     */
    cursor?: IntroduceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntroduceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntroduceDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntroduceDetails.
     */
    distinct?: IntroduceDetailScalarFieldEnum | IntroduceDetailScalarFieldEnum[]
  }

  /**
   * IntroduceDetail findMany
   */
  export type IntroduceDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
    /**
     * Filter, which IntroduceDetails to fetch.
     */
    where?: IntroduceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntroduceDetails to fetch.
     */
    orderBy?: IntroduceDetailOrderByWithRelationInput | IntroduceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntroduceDetails.
     */
    cursor?: IntroduceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntroduceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntroduceDetails.
     */
    skip?: number
    distinct?: IntroduceDetailScalarFieldEnum | IntroduceDetailScalarFieldEnum[]
  }

  /**
   * IntroduceDetail create
   */
  export type IntroduceDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a IntroduceDetail.
     */
    data: XOR<IntroduceDetailCreateInput, IntroduceDetailUncheckedCreateInput>
  }

  /**
   * IntroduceDetail createMany
   */
  export type IntroduceDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntroduceDetails.
     */
    data: IntroduceDetailCreateManyInput | IntroduceDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntroduceDetail createManyAndReturn
   */
  export type IntroduceDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * The data used to create many IntroduceDetails.
     */
    data: IntroduceDetailCreateManyInput | IntroduceDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntroduceDetail update
   */
  export type IntroduceDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a IntroduceDetail.
     */
    data: XOR<IntroduceDetailUpdateInput, IntroduceDetailUncheckedUpdateInput>
    /**
     * Choose, which IntroduceDetail to update.
     */
    where: IntroduceDetailWhereUniqueInput
  }

  /**
   * IntroduceDetail updateMany
   */
  export type IntroduceDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntroduceDetails.
     */
    data: XOR<IntroduceDetailUpdateManyMutationInput, IntroduceDetailUncheckedUpdateManyInput>
    /**
     * Filter which IntroduceDetails to update
     */
    where?: IntroduceDetailWhereInput
    /**
     * Limit how many IntroduceDetails to update.
     */
    limit?: number
  }

  /**
   * IntroduceDetail updateManyAndReturn
   */
  export type IntroduceDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * The data used to update IntroduceDetails.
     */
    data: XOR<IntroduceDetailUpdateManyMutationInput, IntroduceDetailUncheckedUpdateManyInput>
    /**
     * Filter which IntroduceDetails to update
     */
    where?: IntroduceDetailWhereInput
    /**
     * Limit how many IntroduceDetails to update.
     */
    limit?: number
  }

  /**
   * IntroduceDetail upsert
   */
  export type IntroduceDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the IntroduceDetail to update in case it exists.
     */
    where: IntroduceDetailWhereUniqueInput
    /**
     * In case the IntroduceDetail found by the `where` argument doesn't exist, create a new IntroduceDetail with this data.
     */
    create: XOR<IntroduceDetailCreateInput, IntroduceDetailUncheckedCreateInput>
    /**
     * In case the IntroduceDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntroduceDetailUpdateInput, IntroduceDetailUncheckedUpdateInput>
  }

  /**
   * IntroduceDetail delete
   */
  export type IntroduceDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
    /**
     * Filter which IntroduceDetail to delete.
     */
    where: IntroduceDetailWhereUniqueInput
  }

  /**
   * IntroduceDetail deleteMany
   */
  export type IntroduceDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntroduceDetails to delete
     */
    where?: IntroduceDetailWhereInput
    /**
     * Limit how many IntroduceDetails to delete.
     */
    limit?: number
  }

  /**
   * IntroduceDetail.personal
   */
  export type IntroduceDetail$personalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    where?: PersonalWhereInput
  }

  /**
   * IntroduceDetail without action
   */
  export type IntroduceDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntroduceDetail
     */
    select?: IntroduceDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntroduceDetail
     */
    omit?: IntroduceDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntroduceDetailInclude<ExtArgs> | null
  }


  /**
   * Model EducationDetail
   */

  export type AggregateEducationDetail = {
    _count: EducationDetailCountAggregateOutputType | null
    _avg: EducationDetailAvgAggregateOutputType | null
    _sum: EducationDetailSumAggregateOutputType | null
    _min: EducationDetailMinAggregateOutputType | null
    _max: EducationDetailMaxAggregateOutputType | null
  }

  export type EducationDetailAvgAggregateOutputType = {
    id: number | null
    personalId: number | null
  }

  export type EducationDetailSumAggregateOutputType = {
    id: number | null
    personalId: number | null
  }

  export type EducationDetailMinAggregateOutputType = {
    id: number | null
    title: string | null
    titleIcon: string | null
    titleEmoji: string | null
    schoolName: string | null
    startDate: Date | null
    endDate: Date | null
    department: string | null
    personalId: number | null
  }

  export type EducationDetailMaxAggregateOutputType = {
    id: number | null
    title: string | null
    titleIcon: string | null
    titleEmoji: string | null
    schoolName: string | null
    startDate: Date | null
    endDate: Date | null
    department: string | null
    personalId: number | null
  }

  export type EducationDetailCountAggregateOutputType = {
    id: number
    title: number
    titleIcon: number
    titleEmoji: number
    schoolName: number
    startDate: number
    endDate: number
    department: number
    detail: number
    personalId: number
    _all: number
  }


  export type EducationDetailAvgAggregateInputType = {
    id?: true
    personalId?: true
  }

  export type EducationDetailSumAggregateInputType = {
    id?: true
    personalId?: true
  }

  export type EducationDetailMinAggregateInputType = {
    id?: true
    title?: true
    titleIcon?: true
    titleEmoji?: true
    schoolName?: true
    startDate?: true
    endDate?: true
    department?: true
    personalId?: true
  }

  export type EducationDetailMaxAggregateInputType = {
    id?: true
    title?: true
    titleIcon?: true
    titleEmoji?: true
    schoolName?: true
    startDate?: true
    endDate?: true
    department?: true
    personalId?: true
  }

  export type EducationDetailCountAggregateInputType = {
    id?: true
    title?: true
    titleIcon?: true
    titleEmoji?: true
    schoolName?: true
    startDate?: true
    endDate?: true
    department?: true
    detail?: true
    personalId?: true
    _all?: true
  }

  export type EducationDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationDetail to aggregate.
     */
    where?: EducationDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationDetails to fetch.
     */
    orderBy?: EducationDetailOrderByWithRelationInput | EducationDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EducationDetails
    **/
    _count?: true | EducationDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationDetailMaxAggregateInputType
  }

  export type GetEducationDetailAggregateType<T extends EducationDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateEducationDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducationDetail[P]>
      : GetScalarType<T[P], AggregateEducationDetail[P]>
  }




  export type EducationDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationDetailWhereInput
    orderBy?: EducationDetailOrderByWithAggregationInput | EducationDetailOrderByWithAggregationInput[]
    by: EducationDetailScalarFieldEnum[] | EducationDetailScalarFieldEnum
    having?: EducationDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationDetailCountAggregateInputType | true
    _avg?: EducationDetailAvgAggregateInputType
    _sum?: EducationDetailSumAggregateInputType
    _min?: EducationDetailMinAggregateInputType
    _max?: EducationDetailMaxAggregateInputType
  }

  export type EducationDetailGroupByOutputType = {
    id: number
    title: string
    titleIcon: string | null
    titleEmoji: string | null
    schoolName: string | null
    startDate: Date | null
    endDate: Date | null
    department: string | null
    detail: JsonValue
    personalId: number
    _count: EducationDetailCountAggregateOutputType | null
    _avg: EducationDetailAvgAggregateOutputType | null
    _sum: EducationDetailSumAggregateOutputType | null
    _min: EducationDetailMinAggregateOutputType | null
    _max: EducationDetailMaxAggregateOutputType | null
  }

  type GetEducationDetailGroupByPayload<T extends EducationDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationDetailGroupByOutputType[P]>
            : GetScalarType<T[P], EducationDetailGroupByOutputType[P]>
        }
      >
    >


  export type EducationDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleIcon?: boolean
    titleEmoji?: boolean
    schoolName?: boolean
    startDate?: boolean
    endDate?: boolean
    department?: boolean
    detail?: boolean
    personalId?: boolean
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationDetail"]>

  export type EducationDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleIcon?: boolean
    titleEmoji?: boolean
    schoolName?: boolean
    startDate?: boolean
    endDate?: boolean
    department?: boolean
    detail?: boolean
    personalId?: boolean
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationDetail"]>

  export type EducationDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleIcon?: boolean
    titleEmoji?: boolean
    schoolName?: boolean
    startDate?: boolean
    endDate?: boolean
    department?: boolean
    detail?: boolean
    personalId?: boolean
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationDetail"]>

  export type EducationDetailSelectScalar = {
    id?: boolean
    title?: boolean
    titleIcon?: boolean
    titleEmoji?: boolean
    schoolName?: boolean
    startDate?: boolean
    endDate?: boolean
    department?: boolean
    detail?: boolean
    personalId?: boolean
  }

  export type EducationDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "titleIcon" | "titleEmoji" | "schoolName" | "startDate" | "endDate" | "department" | "detail" | "personalId", ExtArgs["result"]["educationDetail"]>
  export type EducationDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
  }
  export type EducationDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
  }
  export type EducationDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | PersonalDefaultArgs<ExtArgs>
  }

  export type $EducationDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EducationDetail"
    objects: {
      personal: Prisma.$PersonalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      titleIcon: string | null
      titleEmoji: string | null
      schoolName: string | null
      startDate: Date | null
      endDate: Date | null
      department: string | null
      detail: Prisma.JsonValue
      personalId: number
    }, ExtArgs["result"]["educationDetail"]>
    composites: {}
  }

  type EducationDetailGetPayload<S extends boolean | null | undefined | EducationDetailDefaultArgs> = $Result.GetResult<Prisma.$EducationDetailPayload, S>

  type EducationDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationDetailCountAggregateInputType | true
    }

  export interface EducationDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EducationDetail'], meta: { name: 'EducationDetail' } }
    /**
     * Find zero or one EducationDetail that matches the filter.
     * @param {EducationDetailFindUniqueArgs} args - Arguments to find a EducationDetail
     * @example
     * // Get one EducationDetail
     * const educationDetail = await prisma.educationDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationDetailFindUniqueArgs>(args: SelectSubset<T, EducationDetailFindUniqueArgs<ExtArgs>>): Prisma__EducationDetailClient<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EducationDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationDetailFindUniqueOrThrowArgs} args - Arguments to find a EducationDetail
     * @example
     * // Get one EducationDetail
     * const educationDetail = await prisma.educationDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationDetailClient<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EducationDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDetailFindFirstArgs} args - Arguments to find a EducationDetail
     * @example
     * // Get one EducationDetail
     * const educationDetail = await prisma.educationDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationDetailFindFirstArgs>(args?: SelectSubset<T, EducationDetailFindFirstArgs<ExtArgs>>): Prisma__EducationDetailClient<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EducationDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDetailFindFirstOrThrowArgs} args - Arguments to find a EducationDetail
     * @example
     * // Get one EducationDetail
     * const educationDetail = await prisma.educationDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationDetailClient<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EducationDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EducationDetails
     * const educationDetails = await prisma.educationDetail.findMany()
     * 
     * // Get first 10 EducationDetails
     * const educationDetails = await prisma.educationDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationDetailWithIdOnly = await prisma.educationDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationDetailFindManyArgs>(args?: SelectSubset<T, EducationDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EducationDetail.
     * @param {EducationDetailCreateArgs} args - Arguments to create a EducationDetail.
     * @example
     * // Create one EducationDetail
     * const EducationDetail = await prisma.educationDetail.create({
     *   data: {
     *     // ... data to create a EducationDetail
     *   }
     * })
     * 
     */
    create<T extends EducationDetailCreateArgs>(args: SelectSubset<T, EducationDetailCreateArgs<ExtArgs>>): Prisma__EducationDetailClient<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EducationDetails.
     * @param {EducationDetailCreateManyArgs} args - Arguments to create many EducationDetails.
     * @example
     * // Create many EducationDetails
     * const educationDetail = await prisma.educationDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationDetailCreateManyArgs>(args?: SelectSubset<T, EducationDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EducationDetails and returns the data saved in the database.
     * @param {EducationDetailCreateManyAndReturnArgs} args - Arguments to create many EducationDetails.
     * @example
     * // Create many EducationDetails
     * const educationDetail = await prisma.educationDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EducationDetails and only return the `id`
     * const educationDetailWithIdOnly = await prisma.educationDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EducationDetail.
     * @param {EducationDetailDeleteArgs} args - Arguments to delete one EducationDetail.
     * @example
     * // Delete one EducationDetail
     * const EducationDetail = await prisma.educationDetail.delete({
     *   where: {
     *     // ... filter to delete one EducationDetail
     *   }
     * })
     * 
     */
    delete<T extends EducationDetailDeleteArgs>(args: SelectSubset<T, EducationDetailDeleteArgs<ExtArgs>>): Prisma__EducationDetailClient<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EducationDetail.
     * @param {EducationDetailUpdateArgs} args - Arguments to update one EducationDetail.
     * @example
     * // Update one EducationDetail
     * const educationDetail = await prisma.educationDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationDetailUpdateArgs>(args: SelectSubset<T, EducationDetailUpdateArgs<ExtArgs>>): Prisma__EducationDetailClient<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EducationDetails.
     * @param {EducationDetailDeleteManyArgs} args - Arguments to filter EducationDetails to delete.
     * @example
     * // Delete a few EducationDetails
     * const { count } = await prisma.educationDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDetailDeleteManyArgs>(args?: SelectSubset<T, EducationDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EducationDetails
     * const educationDetail = await prisma.educationDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationDetailUpdateManyArgs>(args: SelectSubset<T, EducationDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationDetails and returns the data updated in the database.
     * @param {EducationDetailUpdateManyAndReturnArgs} args - Arguments to update many EducationDetails.
     * @example
     * // Update many EducationDetails
     * const educationDetail = await prisma.educationDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EducationDetails and only return the `id`
     * const educationDetailWithIdOnly = await prisma.educationDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EducationDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EducationDetail.
     * @param {EducationDetailUpsertArgs} args - Arguments to update or create a EducationDetail.
     * @example
     * // Update or create a EducationDetail
     * const educationDetail = await prisma.educationDetail.upsert({
     *   create: {
     *     // ... data to create a EducationDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EducationDetail we want to update
     *   }
     * })
     */
    upsert<T extends EducationDetailUpsertArgs>(args: SelectSubset<T, EducationDetailUpsertArgs<ExtArgs>>): Prisma__EducationDetailClient<$Result.GetResult<Prisma.$EducationDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EducationDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDetailCountArgs} args - Arguments to filter EducationDetails to count.
     * @example
     * // Count the number of EducationDetails
     * const count = await prisma.educationDetail.count({
     *   where: {
     *     // ... the filter for the EducationDetails we want to count
     *   }
     * })
    **/
    count<T extends EducationDetailCountArgs>(
      args?: Subset<T, EducationDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EducationDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationDetailAggregateArgs>(args: Subset<T, EducationDetailAggregateArgs>): Prisma.PrismaPromise<GetEducationDetailAggregateType<T>>

    /**
     * Group by EducationDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationDetailGroupByArgs['orderBy'] }
        : { orderBy?: EducationDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EducationDetail model
   */
  readonly fields: EducationDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EducationDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personal<T extends PersonalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalDefaultArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EducationDetail model
   */
  interface EducationDetailFieldRefs {
    readonly id: FieldRef<"EducationDetail", 'Int'>
    readonly title: FieldRef<"EducationDetail", 'String'>
    readonly titleIcon: FieldRef<"EducationDetail", 'String'>
    readonly titleEmoji: FieldRef<"EducationDetail", 'String'>
    readonly schoolName: FieldRef<"EducationDetail", 'String'>
    readonly startDate: FieldRef<"EducationDetail", 'DateTime'>
    readonly endDate: FieldRef<"EducationDetail", 'DateTime'>
    readonly department: FieldRef<"EducationDetail", 'String'>
    readonly detail: FieldRef<"EducationDetail", 'Json'>
    readonly personalId: FieldRef<"EducationDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EducationDetail findUnique
   */
  export type EducationDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
    /**
     * Filter, which EducationDetail to fetch.
     */
    where: EducationDetailWhereUniqueInput
  }

  /**
   * EducationDetail findUniqueOrThrow
   */
  export type EducationDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
    /**
     * Filter, which EducationDetail to fetch.
     */
    where: EducationDetailWhereUniqueInput
  }

  /**
   * EducationDetail findFirst
   */
  export type EducationDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
    /**
     * Filter, which EducationDetail to fetch.
     */
    where?: EducationDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationDetails to fetch.
     */
    orderBy?: EducationDetailOrderByWithRelationInput | EducationDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationDetails.
     */
    cursor?: EducationDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationDetails.
     */
    distinct?: EducationDetailScalarFieldEnum | EducationDetailScalarFieldEnum[]
  }

  /**
   * EducationDetail findFirstOrThrow
   */
  export type EducationDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
    /**
     * Filter, which EducationDetail to fetch.
     */
    where?: EducationDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationDetails to fetch.
     */
    orderBy?: EducationDetailOrderByWithRelationInput | EducationDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationDetails.
     */
    cursor?: EducationDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationDetails.
     */
    distinct?: EducationDetailScalarFieldEnum | EducationDetailScalarFieldEnum[]
  }

  /**
   * EducationDetail findMany
   */
  export type EducationDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
    /**
     * Filter, which EducationDetails to fetch.
     */
    where?: EducationDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationDetails to fetch.
     */
    orderBy?: EducationDetailOrderByWithRelationInput | EducationDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EducationDetails.
     */
    cursor?: EducationDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationDetails.
     */
    skip?: number
    distinct?: EducationDetailScalarFieldEnum | EducationDetailScalarFieldEnum[]
  }

  /**
   * EducationDetail create
   */
  export type EducationDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a EducationDetail.
     */
    data: XOR<EducationDetailCreateInput, EducationDetailUncheckedCreateInput>
  }

  /**
   * EducationDetail createMany
   */
  export type EducationDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EducationDetails.
     */
    data: EducationDetailCreateManyInput | EducationDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EducationDetail createManyAndReturn
   */
  export type EducationDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * The data used to create many EducationDetails.
     */
    data: EducationDetailCreateManyInput | EducationDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EducationDetail update
   */
  export type EducationDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a EducationDetail.
     */
    data: XOR<EducationDetailUpdateInput, EducationDetailUncheckedUpdateInput>
    /**
     * Choose, which EducationDetail to update.
     */
    where: EducationDetailWhereUniqueInput
  }

  /**
   * EducationDetail updateMany
   */
  export type EducationDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EducationDetails.
     */
    data: XOR<EducationDetailUpdateManyMutationInput, EducationDetailUncheckedUpdateManyInput>
    /**
     * Filter which EducationDetails to update
     */
    where?: EducationDetailWhereInput
    /**
     * Limit how many EducationDetails to update.
     */
    limit?: number
  }

  /**
   * EducationDetail updateManyAndReturn
   */
  export type EducationDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * The data used to update EducationDetails.
     */
    data: XOR<EducationDetailUpdateManyMutationInput, EducationDetailUncheckedUpdateManyInput>
    /**
     * Filter which EducationDetails to update
     */
    where?: EducationDetailWhereInput
    /**
     * Limit how many EducationDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EducationDetail upsert
   */
  export type EducationDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the EducationDetail to update in case it exists.
     */
    where: EducationDetailWhereUniqueInput
    /**
     * In case the EducationDetail found by the `where` argument doesn't exist, create a new EducationDetail with this data.
     */
    create: XOR<EducationDetailCreateInput, EducationDetailUncheckedCreateInput>
    /**
     * In case the EducationDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationDetailUpdateInput, EducationDetailUncheckedUpdateInput>
  }

  /**
   * EducationDetail delete
   */
  export type EducationDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
    /**
     * Filter which EducationDetail to delete.
     */
    where: EducationDetailWhereUniqueInput
  }

  /**
   * EducationDetail deleteMany
   */
  export type EducationDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationDetails to delete
     */
    where?: EducationDetailWhereInput
    /**
     * Limit how many EducationDetails to delete.
     */
    limit?: number
  }

  /**
   * EducationDetail without action
   */
  export type EducationDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDetail
     */
    select?: EducationDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDetail
     */
    omit?: EducationDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDetailInclude<ExtArgs> | null
  }


  /**
   * Model Career
   */

  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerAvgAggregateOutputType = {
    id: number | null
    personalId: number | null
  }

  export type CareerSumAggregateOutputType = {
    id: number | null
    personalId: number | null
  }

  export type CareerMinAggregateOutputType = {
    id: number | null
    companyName: string | null
    department: string | null
    startDate: Date | null
    endDate: Date | null
    companyLogo: string | null
    personalId: number | null
  }

  export type CareerMaxAggregateOutputType = {
    id: number | null
    companyName: string | null
    department: string | null
    startDate: Date | null
    endDate: Date | null
    companyLogo: string | null
    personalId: number | null
  }

  export type CareerCountAggregateOutputType = {
    id: number
    companyName: number
    department: number
    startDate: number
    endDate: number
    experience: number
    companyLogo: number
    achievements: number
    personalId: number
    _all: number
  }


  export type CareerAvgAggregateInputType = {
    id?: true
    personalId?: true
  }

  export type CareerSumAggregateInputType = {
    id?: true
    personalId?: true
  }

  export type CareerMinAggregateInputType = {
    id?: true
    companyName?: true
    department?: true
    startDate?: true
    endDate?: true
    companyLogo?: true
    personalId?: true
  }

  export type CareerMaxAggregateInputType = {
    id?: true
    companyName?: true
    department?: true
    startDate?: true
    endDate?: true
    companyLogo?: true
    personalId?: true
  }

  export type CareerCountAggregateInputType = {
    id?: true
    companyName?: true
    department?: true
    startDate?: true
    endDate?: true
    experience?: true
    companyLogo?: true
    achievements?: true
    personalId?: true
    _all?: true
  }

  export type CareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Career to aggregate.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type CareerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithAggregationInput | CareerOrderByWithAggregationInput[]
    by: CareerScalarFieldEnum[] | CareerScalarFieldEnum
    having?: CareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _avg?: CareerAvgAggregateInputType
    _sum?: CareerSumAggregateInputType
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }

  export type CareerGroupByOutputType = {
    id: number
    companyName: string
    department: string
    startDate: Date | null
    endDate: Date | null
    experience: JsonValue | null
    companyLogo: string | null
    achievements: JsonValue | null
    personalId: number | null
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends CareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type CareerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    department?: boolean
    startDate?: boolean
    endDate?: boolean
    experience?: boolean
    companyLogo?: boolean
    achievements?: boolean
    personalId?: boolean
    personal?: boolean | Career$personalArgs<ExtArgs>
    projects?: boolean | Career$projectsArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    department?: boolean
    startDate?: boolean
    endDate?: boolean
    experience?: boolean
    companyLogo?: boolean
    achievements?: boolean
    personalId?: boolean
    personal?: boolean | Career$personalArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    department?: boolean
    startDate?: boolean
    endDate?: boolean
    experience?: boolean
    companyLogo?: boolean
    achievements?: boolean
    personalId?: boolean
    personal?: boolean | Career$personalArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectScalar = {
    id?: boolean
    companyName?: boolean
    department?: boolean
    startDate?: boolean
    endDate?: boolean
    experience?: boolean
    companyLogo?: boolean
    achievements?: boolean
    personalId?: boolean
  }

  export type CareerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "department" | "startDate" | "endDate" | "experience" | "companyLogo" | "achievements" | "personalId", ExtArgs["result"]["career"]>
  export type CareerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | Career$personalArgs<ExtArgs>
    projects?: boolean | Career$projectsArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CareerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | Career$personalArgs<ExtArgs>
  }
  export type CareerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | Career$personalArgs<ExtArgs>
  }

  export type $CareerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Career"
    objects: {
      personal: Prisma.$PersonalPayload<ExtArgs> | null
      projects: Prisma.$ProjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyName: string
      department: string
      startDate: Date | null
      endDate: Date | null
      experience: Prisma.JsonValue | null
      companyLogo: string | null
      achievements: Prisma.JsonValue | null
      personalId: number | null
    }, ExtArgs["result"]["career"]>
    composites: {}
  }

  type CareerGetPayload<S extends boolean | null | undefined | CareerDefaultArgs> = $Result.GetResult<Prisma.$CareerPayload, S>

  type CareerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerCountAggregateInputType | true
    }

  export interface CareerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Career'], meta: { name: 'Career' } }
    /**
     * Find zero or one Career that matches the filter.
     * @param {CareerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerFindUniqueArgs>(args: SelectSubset<T, CareerFindUniqueArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Career that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerFindFirstArgs>(args?: SelectSubset<T, CareerFindFirstArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerWithIdOnly = await prisma.career.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareerFindManyArgs>(args?: SelectSubset<T, CareerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Career.
     * @param {CareerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
     */
    create<T extends CareerCreateArgs>(args: SelectSubset<T, CareerCreateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Careers.
     * @param {CareerCreateManyArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerCreateManyArgs>(args?: SelectSubset<T, CareerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Careers and returns the data saved in the database.
     * @param {CareerCreateManyAndReturnArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Career.
     * @param {CareerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
     */
    delete<T extends CareerDeleteArgs>(args: SelectSubset<T, CareerDeleteArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Career.
     * @param {CareerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerUpdateArgs>(args: SelectSubset<T, CareerUpdateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Careers.
     * @param {CareerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerDeleteManyArgs>(args?: SelectSubset<T, CareerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerUpdateManyArgs>(args: SelectSubset<T, CareerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers and returns the data updated in the database.
     * @param {CareerUpdateManyAndReturnArgs} args - Arguments to update many Careers.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareerUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Career.
     * @param {CareerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
     */
    upsert<T extends CareerUpsertArgs>(args: SelectSubset<T, CareerUpsertArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends CareerCountArgs>(
      args?: Subset<T, CareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): Prisma.PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerGroupByArgs['orderBy'] }
        : { orderBy?: CareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Career model
   */
  readonly fields: CareerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personal<T extends Career$personalArgs<ExtArgs> = {}>(args?: Subset<T, Career$personalArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projects<T extends Career$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Career$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Career model
   */
  interface CareerFieldRefs {
    readonly id: FieldRef<"Career", 'Int'>
    readonly companyName: FieldRef<"Career", 'String'>
    readonly department: FieldRef<"Career", 'String'>
    readonly startDate: FieldRef<"Career", 'DateTime'>
    readonly endDate: FieldRef<"Career", 'DateTime'>
    readonly experience: FieldRef<"Career", 'Json'>
    readonly companyLogo: FieldRef<"Career", 'String'>
    readonly achievements: FieldRef<"Career", 'Json'>
    readonly personalId: FieldRef<"Career", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Career findUnique
   */
  export type CareerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findUniqueOrThrow
   */
  export type CareerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findFirst
   */
  export type CareerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findFirstOrThrow
   */
  export type CareerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findMany
   */
  export type CareerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career create
   */
  export type CareerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to create a Career.
     */
    data: XOR<CareerCreateInput, CareerUncheckedCreateInput>
  }

  /**
   * Career createMany
   */
  export type CareerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career createManyAndReturn
   */
  export type CareerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Career update
   */
  export type CareerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to update a Career.
     */
    data: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
    /**
     * Choose, which Career to update.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career updateMany
   */
  export type CareerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career updateManyAndReturn
   */
  export type CareerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Career upsert
   */
  export type CareerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The filter to search for the Career to update in case it exists.
     */
    where: CareerWhereUniqueInput
    /**
     * In case the Career found by the `where` argument doesn't exist, create a new Career with this data.
     */
    create: XOR<CareerCreateInput, CareerUncheckedCreateInput>
    /**
     * In case the Career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
  }

  /**
   * Career delete
   */
  export type CareerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter which Career to delete.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career deleteMany
   */
  export type CareerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Careers to delete
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to delete.
     */
    limit?: number
  }

  /**
   * Career.personal
   */
  export type Career$personalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    where?: PersonalWhereInput
  }

  /**
   * Career.projects
   */
  export type Career$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Career without action
   */
  export type CareerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
  }


  /**
   * Model Projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    personalId: number | null
    careerId: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: number | null
    personalId: number | null
    careerId: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    link: string | null
    personalId: number | null
    careerId: number | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    link: string | null
    personalId: number | null
    careerId: number | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    overview: number
    role: number
    background: number
    problem: number
    solution: number
    link: number
    attachments: number
    personalId: number
    careerId: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    personalId?: true
    careerId?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    personalId?: true
    careerId?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
    personalId?: true
    careerId?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
    personalId?: true
    careerId?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    overview?: true
    role?: true
    background?: true
    problem?: true
    solution?: true
    link?: true
    attachments?: true
    personalId?: true
    careerId?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to aggregate.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithAggregationInput | ProjectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    overview: JsonValue | null
    role: JsonValue | null
    background: JsonValue | null
    problem: JsonValue | null
    solution: JsonValue | null
    link: string | null
    attachments: JsonValue | null
    personalId: number | null
    careerId: number | null
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    overview?: boolean
    role?: boolean
    background?: boolean
    problem?: boolean
    solution?: boolean
    link?: boolean
    attachments?: boolean
    personalId?: boolean
    careerId?: boolean
    techStack?: boolean | Projects$techStackArgs<ExtArgs>
    personal?: boolean | Projects$personalArgs<ExtArgs>
    career?: boolean | Projects$careerArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    overview?: boolean
    role?: boolean
    background?: boolean
    problem?: boolean
    solution?: boolean
    link?: boolean
    attachments?: boolean
    personalId?: boolean
    careerId?: boolean
    personal?: boolean | Projects$personalArgs<ExtArgs>
    career?: boolean | Projects$careerArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    overview?: boolean
    role?: boolean
    background?: boolean
    problem?: boolean
    solution?: boolean
    link?: boolean
    attachments?: boolean
    personalId?: boolean
    careerId?: boolean
    personal?: boolean | Projects$personalArgs<ExtArgs>
    career?: boolean | Projects$careerArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    overview?: boolean
    role?: boolean
    background?: boolean
    problem?: boolean
    solution?: boolean
    link?: boolean
    attachments?: boolean
    personalId?: boolean
    careerId?: boolean
  }

  export type ProjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "overview" | "role" | "background" | "problem" | "solution" | "link" | "attachments" | "personalId" | "careerId", ExtArgs["result"]["projects"]>
  export type ProjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techStack?: boolean | Projects$techStackArgs<ExtArgs>
    personal?: boolean | Projects$personalArgs<ExtArgs>
    career?: boolean | Projects$careerArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | Projects$personalArgs<ExtArgs>
    career?: boolean | Projects$careerArgs<ExtArgs>
  }
  export type ProjectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal?: boolean | Projects$personalArgs<ExtArgs>
    career?: boolean | Projects$careerArgs<ExtArgs>
  }

  export type $ProjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projects"
    objects: {
      techStack: Prisma.$ProjectSkillPayload<ExtArgs>[]
      personal: Prisma.$PersonalPayload<ExtArgs> | null
      career: Prisma.$CareerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      overview: Prisma.JsonValue | null
      role: Prisma.JsonValue | null
      background: Prisma.JsonValue | null
      problem: Prisma.JsonValue | null
      solution: Prisma.JsonValue | null
      link: string | null
      attachments: Prisma.JsonValue | null
      personalId: number | null
      careerId: number | null
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsDefaultArgs> = $Result.GetResult<Prisma.$ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projects'], meta: { name: 'Projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectsFindUniqueArgs>(args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectsFindFirstArgs>(args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectsFindManyArgs>(args?: SelectSubset<T, ProjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends ProjectsCreateArgs>(args: SelectSubset<T, ProjectsCreateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectsCreateManyArgs>(args?: SelectSubset<T, ProjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends ProjectsDeleteArgs>(args: SelectSubset<T, ProjectsDeleteArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectsUpdateArgs>(args: SelectSubset<T, ProjectsUpdateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectsDeleteManyArgs>(args?: SelectSubset<T, ProjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectsUpdateManyArgs>(args: SelectSubset<T, ProjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends ProjectsUpsertArgs>(args: SelectSubset<T, ProjectsUpsertArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projects model
   */
  readonly fields: ProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    techStack<T extends Projects$techStackArgs<ExtArgs> = {}>(args?: Subset<T, Projects$techStackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    personal<T extends Projects$personalArgs<ExtArgs> = {}>(args?: Subset<T, Projects$personalArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    career<T extends Projects$careerArgs<ExtArgs> = {}>(args?: Subset<T, Projects$careerArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Projects model
   */
  interface ProjectsFieldRefs {
    readonly id: FieldRef<"Projects", 'Int'>
    readonly name: FieldRef<"Projects", 'String'>
    readonly description: FieldRef<"Projects", 'String'>
    readonly overview: FieldRef<"Projects", 'Json'>
    readonly role: FieldRef<"Projects", 'Json'>
    readonly background: FieldRef<"Projects", 'Json'>
    readonly problem: FieldRef<"Projects", 'Json'>
    readonly solution: FieldRef<"Projects", 'Json'>
    readonly link: FieldRef<"Projects", 'String'>
    readonly attachments: FieldRef<"Projects", 'Json'>
    readonly personalId: FieldRef<"Projects", 'Int'>
    readonly careerId: FieldRef<"Projects", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Projects findUnique
   */
  export type ProjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findFirst
   */
  export type ProjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects create
   */
  export type ProjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Projects.
     */
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }

  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projects createManyAndReturn
   */
  export type ProjectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projects update
   */
  export type ProjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Projects.
     */
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Projects updateManyAndReturn
   */
  export type ProjectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Projects to update in case it exists.
     */
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     */
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }

  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter which Projects to delete.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Projects.techStack
   */
  export type Projects$techStackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSkill
     */
    select?: ProjectSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSkill
     */
    omit?: ProjectSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSkillInclude<ExtArgs> | null
    where?: ProjectSkillWhereInput
    orderBy?: ProjectSkillOrderByWithRelationInput | ProjectSkillOrderByWithRelationInput[]
    cursor?: ProjectSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectSkillScalarFieldEnum | ProjectSkillScalarFieldEnum[]
  }

  /**
   * Projects.personal
   */
  export type Projects$personalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInclude<ExtArgs> | null
    where?: PersonalWhereInput
  }

  /**
   * Projects.career
   */
  export type Projects$careerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    where?: CareerWhereInput
  }

  /**
   * Projects without action
   */
  export type ProjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonalScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    idLine: 'idLine',
    gitLink: 'gitLink',
    phoneNumber: 'phoneNumber',
    introduceId: 'introduceId'
  };

  export type PersonalScalarFieldEnum = (typeof PersonalScalarFieldEnum)[keyof typeof PersonalScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imagePath: 'imagePath'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const PersonalSkillScalarFieldEnum: {
    personalId: 'personalId',
    skillId: 'skillId'
  };

  export type PersonalSkillScalarFieldEnum = (typeof PersonalSkillScalarFieldEnum)[keyof typeof PersonalSkillScalarFieldEnum]


  export const ProjectSkillScalarFieldEnum: {
    projectId: 'projectId',
    skillId: 'skillId'
  };

  export type ProjectSkillScalarFieldEnum = (typeof ProjectSkillScalarFieldEnum)[keyof typeof ProjectSkillScalarFieldEnum]


  export const IntroduceDetailScalarFieldEnum: {
    id: 'id',
    title: 'title',
    titleIcon: 'titleIcon',
    titleEmoji: 'titleEmoji',
    detail: 'detail'
  };

  export type IntroduceDetailScalarFieldEnum = (typeof IntroduceDetailScalarFieldEnum)[keyof typeof IntroduceDetailScalarFieldEnum]


  export const EducationDetailScalarFieldEnum: {
    id: 'id',
    title: 'title',
    titleIcon: 'titleIcon',
    titleEmoji: 'titleEmoji',
    schoolName: 'schoolName',
    startDate: 'startDate',
    endDate: 'endDate',
    department: 'department',
    detail: 'detail',
    personalId: 'personalId'
  };

  export type EducationDetailScalarFieldEnum = (typeof EducationDetailScalarFieldEnum)[keyof typeof EducationDetailScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    department: 'department',
    startDate: 'startDate',
    endDate: 'endDate',
    experience: 'experience',
    companyLogo: 'companyLogo',
    achievements: 'achievements',
    personalId: 'personalId'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    overview: 'overview',
    role: 'role',
    background: 'background',
    problem: 'problem',
    solution: 'solution',
    link: 'link',
    attachments: 'attachments',
    personalId: 'personalId',
    careerId: 'careerId'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonalWhereInput = {
    AND?: PersonalWhereInput | PersonalWhereInput[]
    OR?: PersonalWhereInput[]
    NOT?: PersonalWhereInput | PersonalWhereInput[]
    id?: IntFilter<"Personal"> | number
    firstname?: StringFilter<"Personal"> | string
    lastname?: StringFilter<"Personal"> | string
    email?: StringFilter<"Personal"> | string
    idLine?: StringFilter<"Personal"> | string
    gitLink?: StringFilter<"Personal"> | string
    phoneNumber?: StringFilter<"Personal"> | string
    introduceId?: IntNullableFilter<"Personal"> | number | null
    introduce?: XOR<IntroduceDetailNullableScalarRelationFilter, IntroduceDetailWhereInput> | null
    skills?: PersonalSkillListRelationFilter
    education?: EducationDetailListRelationFilter
    careers?: CareerListRelationFilter
    projects?: ProjectsListRelationFilter
  }

  export type PersonalOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    idLine?: SortOrder
    gitLink?: SortOrder
    phoneNumber?: SortOrder
    introduceId?: SortOrderInput | SortOrder
    introduce?: IntroduceDetailOrderByWithRelationInput
    skills?: PersonalSkillOrderByRelationAggregateInput
    education?: EducationDetailOrderByRelationAggregateInput
    careers?: CareerOrderByRelationAggregateInput
    projects?: ProjectsOrderByRelationAggregateInput
  }

  export type PersonalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    introduceId?: number
    AND?: PersonalWhereInput | PersonalWhereInput[]
    OR?: PersonalWhereInput[]
    NOT?: PersonalWhereInput | PersonalWhereInput[]
    firstname?: StringFilter<"Personal"> | string
    lastname?: StringFilter<"Personal"> | string
    idLine?: StringFilter<"Personal"> | string
    gitLink?: StringFilter<"Personal"> | string
    phoneNumber?: StringFilter<"Personal"> | string
    introduce?: XOR<IntroduceDetailNullableScalarRelationFilter, IntroduceDetailWhereInput> | null
    skills?: PersonalSkillListRelationFilter
    education?: EducationDetailListRelationFilter
    careers?: CareerListRelationFilter
    projects?: ProjectsListRelationFilter
  }, "id" | "email" | "introduceId">

  export type PersonalOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    idLine?: SortOrder
    gitLink?: SortOrder
    phoneNumber?: SortOrder
    introduceId?: SortOrderInput | SortOrder
    _count?: PersonalCountOrderByAggregateInput
    _avg?: PersonalAvgOrderByAggregateInput
    _max?: PersonalMaxOrderByAggregateInput
    _min?: PersonalMinOrderByAggregateInput
    _sum?: PersonalSumOrderByAggregateInput
  }

  export type PersonalScalarWhereWithAggregatesInput = {
    AND?: PersonalScalarWhereWithAggregatesInput | PersonalScalarWhereWithAggregatesInput[]
    OR?: PersonalScalarWhereWithAggregatesInput[]
    NOT?: PersonalScalarWhereWithAggregatesInput | PersonalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Personal"> | number
    firstname?: StringWithAggregatesFilter<"Personal"> | string
    lastname?: StringWithAggregatesFilter<"Personal"> | string
    email?: StringWithAggregatesFilter<"Personal"> | string
    idLine?: StringWithAggregatesFilter<"Personal"> | string
    gitLink?: StringWithAggregatesFilter<"Personal"> | string
    phoneNumber?: StringWithAggregatesFilter<"Personal"> | string
    introduceId?: IntNullableWithAggregatesFilter<"Personal"> | number | null
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    name?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    imagePath?: StringFilter<"Skill"> | string
    personalSkills?: PersonalSkillListRelationFilter
    projectSkills?: ProjectSkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imagePath?: SortOrder
    personalSkills?: PersonalSkillOrderByRelationAggregateInput
    projectSkills?: ProjectSkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    description?: StringNullableFilter<"Skill"> | string | null
    imagePath?: StringFilter<"Skill"> | string
    personalSkills?: PersonalSkillListRelationFilter
    projectSkills?: ProjectSkillListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imagePath?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skill"> | number
    name?: StringWithAggregatesFilter<"Skill"> | string
    description?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    imagePath?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type PersonalSkillWhereInput = {
    AND?: PersonalSkillWhereInput | PersonalSkillWhereInput[]
    OR?: PersonalSkillWhereInput[]
    NOT?: PersonalSkillWhereInput | PersonalSkillWhereInput[]
    personalId?: IntFilter<"PersonalSkill"> | number
    skillId?: IntFilter<"PersonalSkill"> | number
    personal?: XOR<PersonalScalarRelationFilter, PersonalWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type PersonalSkillOrderByWithRelationInput = {
    personalId?: SortOrder
    skillId?: SortOrder
    personal?: PersonalOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type PersonalSkillWhereUniqueInput = Prisma.AtLeast<{
    personalId_skillId?: PersonalSkillPersonalIdSkillIdCompoundUniqueInput
    AND?: PersonalSkillWhereInput | PersonalSkillWhereInput[]
    OR?: PersonalSkillWhereInput[]
    NOT?: PersonalSkillWhereInput | PersonalSkillWhereInput[]
    personalId?: IntFilter<"PersonalSkill"> | number
    skillId?: IntFilter<"PersonalSkill"> | number
    personal?: XOR<PersonalScalarRelationFilter, PersonalWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "personalId_skillId">

  export type PersonalSkillOrderByWithAggregationInput = {
    personalId?: SortOrder
    skillId?: SortOrder
    _count?: PersonalSkillCountOrderByAggregateInput
    _avg?: PersonalSkillAvgOrderByAggregateInput
    _max?: PersonalSkillMaxOrderByAggregateInput
    _min?: PersonalSkillMinOrderByAggregateInput
    _sum?: PersonalSkillSumOrderByAggregateInput
  }

  export type PersonalSkillScalarWhereWithAggregatesInput = {
    AND?: PersonalSkillScalarWhereWithAggregatesInput | PersonalSkillScalarWhereWithAggregatesInput[]
    OR?: PersonalSkillScalarWhereWithAggregatesInput[]
    NOT?: PersonalSkillScalarWhereWithAggregatesInput | PersonalSkillScalarWhereWithAggregatesInput[]
    personalId?: IntWithAggregatesFilter<"PersonalSkill"> | number
    skillId?: IntWithAggregatesFilter<"PersonalSkill"> | number
  }

  export type ProjectSkillWhereInput = {
    AND?: ProjectSkillWhereInput | ProjectSkillWhereInput[]
    OR?: ProjectSkillWhereInput[]
    NOT?: ProjectSkillWhereInput | ProjectSkillWhereInput[]
    projectId?: IntFilter<"ProjectSkill"> | number
    skillId?: IntFilter<"ProjectSkill"> | number
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type ProjectSkillOrderByWithRelationInput = {
    projectId?: SortOrder
    skillId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type ProjectSkillWhereUniqueInput = Prisma.AtLeast<{
    projectId_skillId?: ProjectSkillProjectIdSkillIdCompoundUniqueInput
    AND?: ProjectSkillWhereInput | ProjectSkillWhereInput[]
    OR?: ProjectSkillWhereInput[]
    NOT?: ProjectSkillWhereInput | ProjectSkillWhereInput[]
    projectId?: IntFilter<"ProjectSkill"> | number
    skillId?: IntFilter<"ProjectSkill"> | number
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "projectId_skillId">

  export type ProjectSkillOrderByWithAggregationInput = {
    projectId?: SortOrder
    skillId?: SortOrder
    _count?: ProjectSkillCountOrderByAggregateInput
    _avg?: ProjectSkillAvgOrderByAggregateInput
    _max?: ProjectSkillMaxOrderByAggregateInput
    _min?: ProjectSkillMinOrderByAggregateInput
    _sum?: ProjectSkillSumOrderByAggregateInput
  }

  export type ProjectSkillScalarWhereWithAggregatesInput = {
    AND?: ProjectSkillScalarWhereWithAggregatesInput | ProjectSkillScalarWhereWithAggregatesInput[]
    OR?: ProjectSkillScalarWhereWithAggregatesInput[]
    NOT?: ProjectSkillScalarWhereWithAggregatesInput | ProjectSkillScalarWhereWithAggregatesInput[]
    projectId?: IntWithAggregatesFilter<"ProjectSkill"> | number
    skillId?: IntWithAggregatesFilter<"ProjectSkill"> | number
  }

  export type IntroduceDetailWhereInput = {
    AND?: IntroduceDetailWhereInput | IntroduceDetailWhereInput[]
    OR?: IntroduceDetailWhereInput[]
    NOT?: IntroduceDetailWhereInput | IntroduceDetailWhereInput[]
    id?: IntFilter<"IntroduceDetail"> | number
    title?: StringFilter<"IntroduceDetail"> | string
    titleIcon?: StringNullableFilter<"IntroduceDetail"> | string | null
    titleEmoji?: StringNullableFilter<"IntroduceDetail"> | string | null
    detail?: JsonFilter<"IntroduceDetail">
    personal?: XOR<PersonalNullableScalarRelationFilter, PersonalWhereInput> | null
  }

  export type IntroduceDetailOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    titleIcon?: SortOrderInput | SortOrder
    titleEmoji?: SortOrderInput | SortOrder
    detail?: SortOrder
    personal?: PersonalOrderByWithRelationInput
  }

  export type IntroduceDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IntroduceDetailWhereInput | IntroduceDetailWhereInput[]
    OR?: IntroduceDetailWhereInput[]
    NOT?: IntroduceDetailWhereInput | IntroduceDetailWhereInput[]
    title?: StringFilter<"IntroduceDetail"> | string
    titleIcon?: StringNullableFilter<"IntroduceDetail"> | string | null
    titleEmoji?: StringNullableFilter<"IntroduceDetail"> | string | null
    detail?: JsonFilter<"IntroduceDetail">
    personal?: XOR<PersonalNullableScalarRelationFilter, PersonalWhereInput> | null
  }, "id">

  export type IntroduceDetailOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    titleIcon?: SortOrderInput | SortOrder
    titleEmoji?: SortOrderInput | SortOrder
    detail?: SortOrder
    _count?: IntroduceDetailCountOrderByAggregateInput
    _avg?: IntroduceDetailAvgOrderByAggregateInput
    _max?: IntroduceDetailMaxOrderByAggregateInput
    _min?: IntroduceDetailMinOrderByAggregateInput
    _sum?: IntroduceDetailSumOrderByAggregateInput
  }

  export type IntroduceDetailScalarWhereWithAggregatesInput = {
    AND?: IntroduceDetailScalarWhereWithAggregatesInput | IntroduceDetailScalarWhereWithAggregatesInput[]
    OR?: IntroduceDetailScalarWhereWithAggregatesInput[]
    NOT?: IntroduceDetailScalarWhereWithAggregatesInput | IntroduceDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IntroduceDetail"> | number
    title?: StringWithAggregatesFilter<"IntroduceDetail"> | string
    titleIcon?: StringNullableWithAggregatesFilter<"IntroduceDetail"> | string | null
    titleEmoji?: StringNullableWithAggregatesFilter<"IntroduceDetail"> | string | null
    detail?: JsonWithAggregatesFilter<"IntroduceDetail">
  }

  export type EducationDetailWhereInput = {
    AND?: EducationDetailWhereInput | EducationDetailWhereInput[]
    OR?: EducationDetailWhereInput[]
    NOT?: EducationDetailWhereInput | EducationDetailWhereInput[]
    id?: IntFilter<"EducationDetail"> | number
    title?: StringFilter<"EducationDetail"> | string
    titleIcon?: StringNullableFilter<"EducationDetail"> | string | null
    titleEmoji?: StringNullableFilter<"EducationDetail"> | string | null
    schoolName?: StringNullableFilter<"EducationDetail"> | string | null
    startDate?: DateTimeNullableFilter<"EducationDetail"> | Date | string | null
    endDate?: DateTimeNullableFilter<"EducationDetail"> | Date | string | null
    department?: StringNullableFilter<"EducationDetail"> | string | null
    detail?: JsonFilter<"EducationDetail">
    personalId?: IntFilter<"EducationDetail"> | number
    personal?: XOR<PersonalScalarRelationFilter, PersonalWhereInput>
  }

  export type EducationDetailOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    titleIcon?: SortOrderInput | SortOrder
    titleEmoji?: SortOrderInput | SortOrder
    schoolName?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    detail?: SortOrder
    personalId?: SortOrder
    personal?: PersonalOrderByWithRelationInput
  }

  export type EducationDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EducationDetailWhereInput | EducationDetailWhereInput[]
    OR?: EducationDetailWhereInput[]
    NOT?: EducationDetailWhereInput | EducationDetailWhereInput[]
    title?: StringFilter<"EducationDetail"> | string
    titleIcon?: StringNullableFilter<"EducationDetail"> | string | null
    titleEmoji?: StringNullableFilter<"EducationDetail"> | string | null
    schoolName?: StringNullableFilter<"EducationDetail"> | string | null
    startDate?: DateTimeNullableFilter<"EducationDetail"> | Date | string | null
    endDate?: DateTimeNullableFilter<"EducationDetail"> | Date | string | null
    department?: StringNullableFilter<"EducationDetail"> | string | null
    detail?: JsonFilter<"EducationDetail">
    personalId?: IntFilter<"EducationDetail"> | number
    personal?: XOR<PersonalScalarRelationFilter, PersonalWhereInput>
  }, "id">

  export type EducationDetailOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    titleIcon?: SortOrderInput | SortOrder
    titleEmoji?: SortOrderInput | SortOrder
    schoolName?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    detail?: SortOrder
    personalId?: SortOrder
    _count?: EducationDetailCountOrderByAggregateInput
    _avg?: EducationDetailAvgOrderByAggregateInput
    _max?: EducationDetailMaxOrderByAggregateInput
    _min?: EducationDetailMinOrderByAggregateInput
    _sum?: EducationDetailSumOrderByAggregateInput
  }

  export type EducationDetailScalarWhereWithAggregatesInput = {
    AND?: EducationDetailScalarWhereWithAggregatesInput | EducationDetailScalarWhereWithAggregatesInput[]
    OR?: EducationDetailScalarWhereWithAggregatesInput[]
    NOT?: EducationDetailScalarWhereWithAggregatesInput | EducationDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EducationDetail"> | number
    title?: StringWithAggregatesFilter<"EducationDetail"> | string
    titleIcon?: StringNullableWithAggregatesFilter<"EducationDetail"> | string | null
    titleEmoji?: StringNullableWithAggregatesFilter<"EducationDetail"> | string | null
    schoolName?: StringNullableWithAggregatesFilter<"EducationDetail"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"EducationDetail"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"EducationDetail"> | Date | string | null
    department?: StringNullableWithAggregatesFilter<"EducationDetail"> | string | null
    detail?: JsonWithAggregatesFilter<"EducationDetail">
    personalId?: IntWithAggregatesFilter<"EducationDetail"> | number
  }

  export type CareerWhereInput = {
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    id?: IntFilter<"Career"> | number
    companyName?: StringFilter<"Career"> | string
    department?: StringFilter<"Career"> | string
    startDate?: DateTimeNullableFilter<"Career"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Career"> | Date | string | null
    experience?: JsonNullableFilter<"Career">
    companyLogo?: StringNullableFilter<"Career"> | string | null
    achievements?: JsonNullableFilter<"Career">
    personalId?: IntNullableFilter<"Career"> | number | null
    personal?: XOR<PersonalNullableScalarRelationFilter, PersonalWhereInput> | null
    projects?: ProjectsListRelationFilter
  }

  export type CareerOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    department?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    companyLogo?: SortOrderInput | SortOrder
    achievements?: SortOrderInput | SortOrder
    personalId?: SortOrderInput | SortOrder
    personal?: PersonalOrderByWithRelationInput
    projects?: ProjectsOrderByRelationAggregateInput
  }

  export type CareerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    companyName?: StringFilter<"Career"> | string
    department?: StringFilter<"Career"> | string
    startDate?: DateTimeNullableFilter<"Career"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Career"> | Date | string | null
    experience?: JsonNullableFilter<"Career">
    companyLogo?: StringNullableFilter<"Career"> | string | null
    achievements?: JsonNullableFilter<"Career">
    personalId?: IntNullableFilter<"Career"> | number | null
    personal?: XOR<PersonalNullableScalarRelationFilter, PersonalWhereInput> | null
    projects?: ProjectsListRelationFilter
  }, "id">

  export type CareerOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    department?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    companyLogo?: SortOrderInput | SortOrder
    achievements?: SortOrderInput | SortOrder
    personalId?: SortOrderInput | SortOrder
    _count?: CareerCountOrderByAggregateInput
    _avg?: CareerAvgOrderByAggregateInput
    _max?: CareerMaxOrderByAggregateInput
    _min?: CareerMinOrderByAggregateInput
    _sum?: CareerSumOrderByAggregateInput
  }

  export type CareerScalarWhereWithAggregatesInput = {
    AND?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    OR?: CareerScalarWhereWithAggregatesInput[]
    NOT?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Career"> | number
    companyName?: StringWithAggregatesFilter<"Career"> | string
    department?: StringWithAggregatesFilter<"Career"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Career"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Career"> | Date | string | null
    experience?: JsonNullableWithAggregatesFilter<"Career">
    companyLogo?: StringNullableWithAggregatesFilter<"Career"> | string | null
    achievements?: JsonNullableWithAggregatesFilter<"Career">
    personalId?: IntNullableWithAggregatesFilter<"Career"> | number | null
  }

  export type ProjectsWhereInput = {
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    id?: IntFilter<"Projects"> | number
    name?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    overview?: JsonNullableFilter<"Projects">
    role?: JsonNullableFilter<"Projects">
    background?: JsonNullableFilter<"Projects">
    problem?: JsonNullableFilter<"Projects">
    solution?: JsonNullableFilter<"Projects">
    link?: StringNullableFilter<"Projects"> | string | null
    attachments?: JsonNullableFilter<"Projects">
    personalId?: IntNullableFilter<"Projects"> | number | null
    careerId?: IntNullableFilter<"Projects"> | number | null
    techStack?: ProjectSkillListRelationFilter
    personal?: XOR<PersonalNullableScalarRelationFilter, PersonalWhereInput> | null
    career?: XOR<CareerNullableScalarRelationFilter, CareerWhereInput> | null
  }

  export type ProjectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    background?: SortOrderInput | SortOrder
    problem?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    personalId?: SortOrderInput | SortOrder
    careerId?: SortOrderInput | SortOrder
    techStack?: ProjectSkillOrderByRelationAggregateInput
    personal?: PersonalOrderByWithRelationInput
    career?: CareerOrderByWithRelationInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    name?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    overview?: JsonNullableFilter<"Projects">
    role?: JsonNullableFilter<"Projects">
    background?: JsonNullableFilter<"Projects">
    problem?: JsonNullableFilter<"Projects">
    solution?: JsonNullableFilter<"Projects">
    link?: StringNullableFilter<"Projects"> | string | null
    attachments?: JsonNullableFilter<"Projects">
    personalId?: IntNullableFilter<"Projects"> | number | null
    careerId?: IntNullableFilter<"Projects"> | number | null
    techStack?: ProjectSkillListRelationFilter
    personal?: XOR<PersonalNullableScalarRelationFilter, PersonalWhereInput> | null
    career?: XOR<CareerNullableScalarRelationFilter, CareerWhereInput> | null
  }, "id">

  export type ProjectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    background?: SortOrderInput | SortOrder
    problem?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    personalId?: SortOrderInput | SortOrder
    careerId?: SortOrderInput | SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _avg?: ProjectsAvgOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
    _sum?: ProjectsSumOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    OR?: ProjectsScalarWhereWithAggregatesInput[]
    NOT?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Projects"> | number
    name?: StringWithAggregatesFilter<"Projects"> | string
    description?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    overview?: JsonNullableWithAggregatesFilter<"Projects">
    role?: JsonNullableWithAggregatesFilter<"Projects">
    background?: JsonNullableWithAggregatesFilter<"Projects">
    problem?: JsonNullableWithAggregatesFilter<"Projects">
    solution?: JsonNullableWithAggregatesFilter<"Projects">
    link?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    attachments?: JsonNullableWithAggregatesFilter<"Projects">
    personalId?: IntNullableWithAggregatesFilter<"Projects"> | number | null
    careerId?: IntNullableWithAggregatesFilter<"Projects"> | number | null
  }

  export type PersonalCreateInput = {
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduce?: IntroduceDetailCreateNestedOneWithoutPersonalInput
    skills?: PersonalSkillCreateNestedManyWithoutPersonalInput
    education?: EducationDetailCreateNestedManyWithoutPersonalInput
    careers?: CareerCreateNestedManyWithoutPersonalInput
    projects?: ProjectsCreateNestedManyWithoutPersonalInput
  }

  export type PersonalUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduceId?: number | null
    skills?: PersonalSkillUncheckedCreateNestedManyWithoutPersonalInput
    education?: EducationDetailUncheckedCreateNestedManyWithoutPersonalInput
    careers?: CareerUncheckedCreateNestedManyWithoutPersonalInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutPersonalInput
  }

  export type PersonalUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduce?: IntroduceDetailUpdateOneWithoutPersonalNestedInput
    skills?: PersonalSkillUpdateManyWithoutPersonalNestedInput
    education?: EducationDetailUpdateManyWithoutPersonalNestedInput
    careers?: CareerUpdateManyWithoutPersonalNestedInput
    projects?: ProjectsUpdateManyWithoutPersonalNestedInput
  }

  export type PersonalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduceId?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: PersonalSkillUncheckedUpdateManyWithoutPersonalNestedInput
    education?: EducationDetailUncheckedUpdateManyWithoutPersonalNestedInput
    careers?: CareerUncheckedUpdateManyWithoutPersonalNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutPersonalNestedInput
  }

  export type PersonalCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduceId?: number | null
  }

  export type PersonalUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SkillCreateInput = {
    name: string
    description?: string | null
    imagePath: string
    personalSkills?: PersonalSkillCreateNestedManyWithoutSkillInput
    projectSkills?: ProjectSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    imagePath: string
    personalSkills?: PersonalSkillUncheckedCreateNestedManyWithoutSkillInput
    projectSkills?: ProjectSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: StringFieldUpdateOperationsInput | string
    personalSkills?: PersonalSkillUpdateManyWithoutSkillNestedInput
    projectSkills?: ProjectSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: StringFieldUpdateOperationsInput | string
    personalSkills?: PersonalSkillUncheckedUpdateManyWithoutSkillNestedInput
    projectSkills?: ProjectSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    imagePath: string
  }

  export type SkillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalSkillCreateInput = {
    personal: PersonalCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutPersonalSkillsInput
  }

  export type PersonalSkillUncheckedCreateInput = {
    personalId: number
    skillId: number
  }

  export type PersonalSkillUpdateInput = {
    personal?: PersonalUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutPersonalSkillsNestedInput
  }

  export type PersonalSkillUncheckedUpdateInput = {
    personalId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalSkillCreateManyInput = {
    personalId: number
    skillId: number
  }

  export type PersonalSkillUpdateManyMutationInput = {

  }

  export type PersonalSkillUncheckedUpdateManyInput = {
    personalId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectSkillCreateInput = {
    project: ProjectsCreateNestedOneWithoutTechStackInput
    skill: SkillCreateNestedOneWithoutProjectSkillsInput
  }

  export type ProjectSkillUncheckedCreateInput = {
    projectId: number
    skillId: number
  }

  export type ProjectSkillUpdateInput = {
    project?: ProjectsUpdateOneRequiredWithoutTechStackNestedInput
    skill?: SkillUpdateOneRequiredWithoutProjectSkillsNestedInput
  }

  export type ProjectSkillUncheckedUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectSkillCreateManyInput = {
    projectId: number
    skillId: number
  }

  export type ProjectSkillUpdateManyMutationInput = {

  }

  export type ProjectSkillUncheckedUpdateManyInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type IntroduceDetailCreateInput = {
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    detail: JsonNullValueInput | InputJsonValue
    personal?: PersonalCreateNestedOneWithoutIntroduceInput
  }

  export type IntroduceDetailUncheckedCreateInput = {
    id?: number
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    detail: JsonNullValueInput | InputJsonValue
    personal?: PersonalUncheckedCreateNestedOneWithoutIntroduceInput
  }

  export type IntroduceDetailUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
    personal?: PersonalUpdateOneWithoutIntroduceNestedInput
  }

  export type IntroduceDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
    personal?: PersonalUncheckedUpdateOneWithoutIntroduceNestedInput
  }

  export type IntroduceDetailCreateManyInput = {
    id?: number
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    detail: JsonNullValueInput | InputJsonValue
  }

  export type IntroduceDetailUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
  }

  export type IntroduceDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
  }

  export type EducationDetailCreateInput = {
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    schoolName?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    department?: string | null
    detail: JsonNullValueInput | InputJsonValue
    personal: PersonalCreateNestedOneWithoutEducationInput
  }

  export type EducationDetailUncheckedCreateInput = {
    id?: number
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    schoolName?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    department?: string | null
    detail: JsonNullValueInput | InputJsonValue
    personalId: number
  }

  export type EducationDetailUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
    personal?: PersonalUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
    personalId?: IntFieldUpdateOperationsInput | number
  }

  export type EducationDetailCreateManyInput = {
    id?: number
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    schoolName?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    department?: string | null
    detail: JsonNullValueInput | InputJsonValue
    personalId: number
  }

  export type EducationDetailUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
  }

  export type EducationDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
    personalId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerCreateInput = {
    companyName: string
    department: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    personal?: PersonalCreateNestedOneWithoutCareersInput
    projects?: ProjectsCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateInput = {
    id?: number
    companyName: string
    department: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    personalId?: number | null
    projects?: ProjectsUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    personal?: PersonalUpdateOneWithoutCareersNestedInput
    projects?: ProjectsUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    personalId?: NullableIntFieldUpdateOperationsInput | number | null
    projects?: ProjectsUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareerCreateManyInput = {
    id?: number
    companyName: string
    department: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    personalId?: number | null
  }

  export type CareerUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CareerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    personalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectsCreateInput = {
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    techStack?: ProjectSkillCreateNestedManyWithoutProjectInput
    personal?: PersonalCreateNestedOneWithoutProjectsInput
    career?: CareerCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personalId?: number | null
    careerId?: number | null
    techStack?: ProjectSkillUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    techStack?: ProjectSkillUpdateManyWithoutProjectNestedInput
    personal?: PersonalUpdateOneWithoutProjectsNestedInput
    career?: CareerUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personalId?: NullableIntFieldUpdateOperationsInput | number | null
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    techStack?: ProjectSkillUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personalId?: number | null
    careerId?: number | null
  }

  export type ProjectsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personalId?: NullableIntFieldUpdateOperationsInput | number | null
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntroduceDetailNullableScalarRelationFilter = {
    is?: IntroduceDetailWhereInput | null
    isNot?: IntroduceDetailWhereInput | null
  }

  export type PersonalSkillListRelationFilter = {
    every?: PersonalSkillWhereInput
    some?: PersonalSkillWhereInput
    none?: PersonalSkillWhereInput
  }

  export type EducationDetailListRelationFilter = {
    every?: EducationDetailWhereInput
    some?: EducationDetailWhereInput
    none?: EducationDetailWhereInput
  }

  export type CareerListRelationFilter = {
    every?: CareerWhereInput
    some?: CareerWhereInput
    none?: CareerWhereInput
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonalSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonalCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    idLine?: SortOrder
    gitLink?: SortOrder
    phoneNumber?: SortOrder
    introduceId?: SortOrder
  }

  export type PersonalAvgOrderByAggregateInput = {
    id?: SortOrder
    introduceId?: SortOrder
  }

  export type PersonalMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    idLine?: SortOrder
    gitLink?: SortOrder
    phoneNumber?: SortOrder
    introduceId?: SortOrder
  }

  export type PersonalMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    idLine?: SortOrder
    gitLink?: SortOrder
    phoneNumber?: SortOrder
    introduceId?: SortOrder
  }

  export type PersonalSumOrderByAggregateInput = {
    id?: SortOrder
    introduceId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectSkillListRelationFilter = {
    every?: ProjectSkillWhereInput
    some?: ProjectSkillWhereInput
    none?: ProjectSkillWhereInput
  }

  export type ProjectSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PersonalScalarRelationFilter = {
    is?: PersonalWhereInput
    isNot?: PersonalWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type PersonalSkillPersonalIdSkillIdCompoundUniqueInput = {
    personalId: number
    skillId: number
  }

  export type PersonalSkillCountOrderByAggregateInput = {
    personalId?: SortOrder
    skillId?: SortOrder
  }

  export type PersonalSkillAvgOrderByAggregateInput = {
    personalId?: SortOrder
    skillId?: SortOrder
  }

  export type PersonalSkillMaxOrderByAggregateInput = {
    personalId?: SortOrder
    skillId?: SortOrder
  }

  export type PersonalSkillMinOrderByAggregateInput = {
    personalId?: SortOrder
    skillId?: SortOrder
  }

  export type PersonalSkillSumOrderByAggregateInput = {
    personalId?: SortOrder
    skillId?: SortOrder
  }

  export type ProjectsScalarRelationFilter = {
    is?: ProjectsWhereInput
    isNot?: ProjectsWhereInput
  }

  export type ProjectSkillProjectIdSkillIdCompoundUniqueInput = {
    projectId: number
    skillId: number
  }

  export type ProjectSkillCountOrderByAggregateInput = {
    projectId?: SortOrder
    skillId?: SortOrder
  }

  export type ProjectSkillAvgOrderByAggregateInput = {
    projectId?: SortOrder
    skillId?: SortOrder
  }

  export type ProjectSkillMaxOrderByAggregateInput = {
    projectId?: SortOrder
    skillId?: SortOrder
  }

  export type ProjectSkillMinOrderByAggregateInput = {
    projectId?: SortOrder
    skillId?: SortOrder
  }

  export type ProjectSkillSumOrderByAggregateInput = {
    projectId?: SortOrder
    skillId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PersonalNullableScalarRelationFilter = {
    is?: PersonalWhereInput | null
    isNot?: PersonalWhereInput | null
  }

  export type IntroduceDetailCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleIcon?: SortOrder
    titleEmoji?: SortOrder
    detail?: SortOrder
  }

  export type IntroduceDetailAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntroduceDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleIcon?: SortOrder
    titleEmoji?: SortOrder
  }

  export type IntroduceDetailMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleIcon?: SortOrder
    titleEmoji?: SortOrder
  }

  export type IntroduceDetailSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EducationDetailCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleIcon?: SortOrder
    titleEmoji?: SortOrder
    schoolName?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    department?: SortOrder
    detail?: SortOrder
    personalId?: SortOrder
  }

  export type EducationDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    personalId?: SortOrder
  }

  export type EducationDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleIcon?: SortOrder
    titleEmoji?: SortOrder
    schoolName?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    department?: SortOrder
    personalId?: SortOrder
  }

  export type EducationDetailMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleIcon?: SortOrder
    titleEmoji?: SortOrder
    schoolName?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    department?: SortOrder
    personalId?: SortOrder
  }

  export type EducationDetailSumOrderByAggregateInput = {
    id?: SortOrder
    personalId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CareerCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    department?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    experience?: SortOrder
    companyLogo?: SortOrder
    achievements?: SortOrder
    personalId?: SortOrder
  }

  export type CareerAvgOrderByAggregateInput = {
    id?: SortOrder
    personalId?: SortOrder
  }

  export type CareerMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    department?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    companyLogo?: SortOrder
    personalId?: SortOrder
  }

  export type CareerMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    department?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    companyLogo?: SortOrder
    personalId?: SortOrder
  }

  export type CareerSumOrderByAggregateInput = {
    id?: SortOrder
    personalId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CareerNullableScalarRelationFilter = {
    is?: CareerWhereInput | null
    isNot?: CareerWhereInput | null
  }

  export type ProjectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    overview?: SortOrder
    role?: SortOrder
    background?: SortOrder
    problem?: SortOrder
    solution?: SortOrder
    link?: SortOrder
    attachments?: SortOrder
    personalId?: SortOrder
    careerId?: SortOrder
  }

  export type ProjectsAvgOrderByAggregateInput = {
    id?: SortOrder
    personalId?: SortOrder
    careerId?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
    personalId?: SortOrder
    careerId?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
    personalId?: SortOrder
    careerId?: SortOrder
  }

  export type ProjectsSumOrderByAggregateInput = {
    id?: SortOrder
    personalId?: SortOrder
    careerId?: SortOrder
  }

  export type IntroduceDetailCreateNestedOneWithoutPersonalInput = {
    create?: XOR<IntroduceDetailCreateWithoutPersonalInput, IntroduceDetailUncheckedCreateWithoutPersonalInput>
    connectOrCreate?: IntroduceDetailCreateOrConnectWithoutPersonalInput
    connect?: IntroduceDetailWhereUniqueInput
  }

  export type PersonalSkillCreateNestedManyWithoutPersonalInput = {
    create?: XOR<PersonalSkillCreateWithoutPersonalInput, PersonalSkillUncheckedCreateWithoutPersonalInput> | PersonalSkillCreateWithoutPersonalInput[] | PersonalSkillUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: PersonalSkillCreateOrConnectWithoutPersonalInput | PersonalSkillCreateOrConnectWithoutPersonalInput[]
    createMany?: PersonalSkillCreateManyPersonalInputEnvelope
    connect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
  }

  export type EducationDetailCreateNestedManyWithoutPersonalInput = {
    create?: XOR<EducationDetailCreateWithoutPersonalInput, EducationDetailUncheckedCreateWithoutPersonalInput> | EducationDetailCreateWithoutPersonalInput[] | EducationDetailUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: EducationDetailCreateOrConnectWithoutPersonalInput | EducationDetailCreateOrConnectWithoutPersonalInput[]
    createMany?: EducationDetailCreateManyPersonalInputEnvelope
    connect?: EducationDetailWhereUniqueInput | EducationDetailWhereUniqueInput[]
  }

  export type CareerCreateNestedManyWithoutPersonalInput = {
    create?: XOR<CareerCreateWithoutPersonalInput, CareerUncheckedCreateWithoutPersonalInput> | CareerCreateWithoutPersonalInput[] | CareerUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutPersonalInput | CareerCreateOrConnectWithoutPersonalInput[]
    createMany?: CareerCreateManyPersonalInputEnvelope
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
  }

  export type ProjectsCreateNestedManyWithoutPersonalInput = {
    create?: XOR<ProjectsCreateWithoutPersonalInput, ProjectsUncheckedCreateWithoutPersonalInput> | ProjectsCreateWithoutPersonalInput[] | ProjectsUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutPersonalInput | ProjectsCreateOrConnectWithoutPersonalInput[]
    createMany?: ProjectsCreateManyPersonalInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type PersonalSkillUncheckedCreateNestedManyWithoutPersonalInput = {
    create?: XOR<PersonalSkillCreateWithoutPersonalInput, PersonalSkillUncheckedCreateWithoutPersonalInput> | PersonalSkillCreateWithoutPersonalInput[] | PersonalSkillUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: PersonalSkillCreateOrConnectWithoutPersonalInput | PersonalSkillCreateOrConnectWithoutPersonalInput[]
    createMany?: PersonalSkillCreateManyPersonalInputEnvelope
    connect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
  }

  export type EducationDetailUncheckedCreateNestedManyWithoutPersonalInput = {
    create?: XOR<EducationDetailCreateWithoutPersonalInput, EducationDetailUncheckedCreateWithoutPersonalInput> | EducationDetailCreateWithoutPersonalInput[] | EducationDetailUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: EducationDetailCreateOrConnectWithoutPersonalInput | EducationDetailCreateOrConnectWithoutPersonalInput[]
    createMany?: EducationDetailCreateManyPersonalInputEnvelope
    connect?: EducationDetailWhereUniqueInput | EducationDetailWhereUniqueInput[]
  }

  export type CareerUncheckedCreateNestedManyWithoutPersonalInput = {
    create?: XOR<CareerCreateWithoutPersonalInput, CareerUncheckedCreateWithoutPersonalInput> | CareerCreateWithoutPersonalInput[] | CareerUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutPersonalInput | CareerCreateOrConnectWithoutPersonalInput[]
    createMany?: CareerCreateManyPersonalInputEnvelope
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutPersonalInput = {
    create?: XOR<ProjectsCreateWithoutPersonalInput, ProjectsUncheckedCreateWithoutPersonalInput> | ProjectsCreateWithoutPersonalInput[] | ProjectsUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutPersonalInput | ProjectsCreateOrConnectWithoutPersonalInput[]
    createMany?: ProjectsCreateManyPersonalInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntroduceDetailUpdateOneWithoutPersonalNestedInput = {
    create?: XOR<IntroduceDetailCreateWithoutPersonalInput, IntroduceDetailUncheckedCreateWithoutPersonalInput>
    connectOrCreate?: IntroduceDetailCreateOrConnectWithoutPersonalInput
    upsert?: IntroduceDetailUpsertWithoutPersonalInput
    disconnect?: IntroduceDetailWhereInput | boolean
    delete?: IntroduceDetailWhereInput | boolean
    connect?: IntroduceDetailWhereUniqueInput
    update?: XOR<XOR<IntroduceDetailUpdateToOneWithWhereWithoutPersonalInput, IntroduceDetailUpdateWithoutPersonalInput>, IntroduceDetailUncheckedUpdateWithoutPersonalInput>
  }

  export type PersonalSkillUpdateManyWithoutPersonalNestedInput = {
    create?: XOR<PersonalSkillCreateWithoutPersonalInput, PersonalSkillUncheckedCreateWithoutPersonalInput> | PersonalSkillCreateWithoutPersonalInput[] | PersonalSkillUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: PersonalSkillCreateOrConnectWithoutPersonalInput | PersonalSkillCreateOrConnectWithoutPersonalInput[]
    upsert?: PersonalSkillUpsertWithWhereUniqueWithoutPersonalInput | PersonalSkillUpsertWithWhereUniqueWithoutPersonalInput[]
    createMany?: PersonalSkillCreateManyPersonalInputEnvelope
    set?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    disconnect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    delete?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    connect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    update?: PersonalSkillUpdateWithWhereUniqueWithoutPersonalInput | PersonalSkillUpdateWithWhereUniqueWithoutPersonalInput[]
    updateMany?: PersonalSkillUpdateManyWithWhereWithoutPersonalInput | PersonalSkillUpdateManyWithWhereWithoutPersonalInput[]
    deleteMany?: PersonalSkillScalarWhereInput | PersonalSkillScalarWhereInput[]
  }

  export type EducationDetailUpdateManyWithoutPersonalNestedInput = {
    create?: XOR<EducationDetailCreateWithoutPersonalInput, EducationDetailUncheckedCreateWithoutPersonalInput> | EducationDetailCreateWithoutPersonalInput[] | EducationDetailUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: EducationDetailCreateOrConnectWithoutPersonalInput | EducationDetailCreateOrConnectWithoutPersonalInput[]
    upsert?: EducationDetailUpsertWithWhereUniqueWithoutPersonalInput | EducationDetailUpsertWithWhereUniqueWithoutPersonalInput[]
    createMany?: EducationDetailCreateManyPersonalInputEnvelope
    set?: EducationDetailWhereUniqueInput | EducationDetailWhereUniqueInput[]
    disconnect?: EducationDetailWhereUniqueInput | EducationDetailWhereUniqueInput[]
    delete?: EducationDetailWhereUniqueInput | EducationDetailWhereUniqueInput[]
    connect?: EducationDetailWhereUniqueInput | EducationDetailWhereUniqueInput[]
    update?: EducationDetailUpdateWithWhereUniqueWithoutPersonalInput | EducationDetailUpdateWithWhereUniqueWithoutPersonalInput[]
    updateMany?: EducationDetailUpdateManyWithWhereWithoutPersonalInput | EducationDetailUpdateManyWithWhereWithoutPersonalInput[]
    deleteMany?: EducationDetailScalarWhereInput | EducationDetailScalarWhereInput[]
  }

  export type CareerUpdateManyWithoutPersonalNestedInput = {
    create?: XOR<CareerCreateWithoutPersonalInput, CareerUncheckedCreateWithoutPersonalInput> | CareerCreateWithoutPersonalInput[] | CareerUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutPersonalInput | CareerCreateOrConnectWithoutPersonalInput[]
    upsert?: CareerUpsertWithWhereUniqueWithoutPersonalInput | CareerUpsertWithWhereUniqueWithoutPersonalInput[]
    createMany?: CareerCreateManyPersonalInputEnvelope
    set?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    disconnect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    delete?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    update?: CareerUpdateWithWhereUniqueWithoutPersonalInput | CareerUpdateWithWhereUniqueWithoutPersonalInput[]
    updateMany?: CareerUpdateManyWithWhereWithoutPersonalInput | CareerUpdateManyWithWhereWithoutPersonalInput[]
    deleteMany?: CareerScalarWhereInput | CareerScalarWhereInput[]
  }

  export type ProjectsUpdateManyWithoutPersonalNestedInput = {
    create?: XOR<ProjectsCreateWithoutPersonalInput, ProjectsUncheckedCreateWithoutPersonalInput> | ProjectsCreateWithoutPersonalInput[] | ProjectsUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutPersonalInput | ProjectsCreateOrConnectWithoutPersonalInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutPersonalInput | ProjectsUpsertWithWhereUniqueWithoutPersonalInput[]
    createMany?: ProjectsCreateManyPersonalInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutPersonalInput | ProjectsUpdateWithWhereUniqueWithoutPersonalInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutPersonalInput | ProjectsUpdateManyWithWhereWithoutPersonalInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PersonalSkillUncheckedUpdateManyWithoutPersonalNestedInput = {
    create?: XOR<PersonalSkillCreateWithoutPersonalInput, PersonalSkillUncheckedCreateWithoutPersonalInput> | PersonalSkillCreateWithoutPersonalInput[] | PersonalSkillUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: PersonalSkillCreateOrConnectWithoutPersonalInput | PersonalSkillCreateOrConnectWithoutPersonalInput[]
    upsert?: PersonalSkillUpsertWithWhereUniqueWithoutPersonalInput | PersonalSkillUpsertWithWhereUniqueWithoutPersonalInput[]
    createMany?: PersonalSkillCreateManyPersonalInputEnvelope
    set?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    disconnect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    delete?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    connect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    update?: PersonalSkillUpdateWithWhereUniqueWithoutPersonalInput | PersonalSkillUpdateWithWhereUniqueWithoutPersonalInput[]
    updateMany?: PersonalSkillUpdateManyWithWhereWithoutPersonalInput | PersonalSkillUpdateManyWithWhereWithoutPersonalInput[]
    deleteMany?: PersonalSkillScalarWhereInput | PersonalSkillScalarWhereInput[]
  }

  export type EducationDetailUncheckedUpdateManyWithoutPersonalNestedInput = {
    create?: XOR<EducationDetailCreateWithoutPersonalInput, EducationDetailUncheckedCreateWithoutPersonalInput> | EducationDetailCreateWithoutPersonalInput[] | EducationDetailUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: EducationDetailCreateOrConnectWithoutPersonalInput | EducationDetailCreateOrConnectWithoutPersonalInput[]
    upsert?: EducationDetailUpsertWithWhereUniqueWithoutPersonalInput | EducationDetailUpsertWithWhereUniqueWithoutPersonalInput[]
    createMany?: EducationDetailCreateManyPersonalInputEnvelope
    set?: EducationDetailWhereUniqueInput | EducationDetailWhereUniqueInput[]
    disconnect?: EducationDetailWhereUniqueInput | EducationDetailWhereUniqueInput[]
    delete?: EducationDetailWhereUniqueInput | EducationDetailWhereUniqueInput[]
    connect?: EducationDetailWhereUniqueInput | EducationDetailWhereUniqueInput[]
    update?: EducationDetailUpdateWithWhereUniqueWithoutPersonalInput | EducationDetailUpdateWithWhereUniqueWithoutPersonalInput[]
    updateMany?: EducationDetailUpdateManyWithWhereWithoutPersonalInput | EducationDetailUpdateManyWithWhereWithoutPersonalInput[]
    deleteMany?: EducationDetailScalarWhereInput | EducationDetailScalarWhereInput[]
  }

  export type CareerUncheckedUpdateManyWithoutPersonalNestedInput = {
    create?: XOR<CareerCreateWithoutPersonalInput, CareerUncheckedCreateWithoutPersonalInput> | CareerCreateWithoutPersonalInput[] | CareerUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutPersonalInput | CareerCreateOrConnectWithoutPersonalInput[]
    upsert?: CareerUpsertWithWhereUniqueWithoutPersonalInput | CareerUpsertWithWhereUniqueWithoutPersonalInput[]
    createMany?: CareerCreateManyPersonalInputEnvelope
    set?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    disconnect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    delete?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    update?: CareerUpdateWithWhereUniqueWithoutPersonalInput | CareerUpdateWithWhereUniqueWithoutPersonalInput[]
    updateMany?: CareerUpdateManyWithWhereWithoutPersonalInput | CareerUpdateManyWithWhereWithoutPersonalInput[]
    deleteMany?: CareerScalarWhereInput | CareerScalarWhereInput[]
  }

  export type ProjectsUncheckedUpdateManyWithoutPersonalNestedInput = {
    create?: XOR<ProjectsCreateWithoutPersonalInput, ProjectsUncheckedCreateWithoutPersonalInput> | ProjectsCreateWithoutPersonalInput[] | ProjectsUncheckedCreateWithoutPersonalInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutPersonalInput | ProjectsCreateOrConnectWithoutPersonalInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutPersonalInput | ProjectsUpsertWithWhereUniqueWithoutPersonalInput[]
    createMany?: ProjectsCreateManyPersonalInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutPersonalInput | ProjectsUpdateWithWhereUniqueWithoutPersonalInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutPersonalInput | ProjectsUpdateManyWithWhereWithoutPersonalInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type PersonalSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<PersonalSkillCreateWithoutSkillInput, PersonalSkillUncheckedCreateWithoutSkillInput> | PersonalSkillCreateWithoutSkillInput[] | PersonalSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: PersonalSkillCreateOrConnectWithoutSkillInput | PersonalSkillCreateOrConnectWithoutSkillInput[]
    createMany?: PersonalSkillCreateManySkillInputEnvelope
    connect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
  }

  export type ProjectSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput> | ProjectSkillCreateWithoutSkillInput[] | ProjectSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutSkillInput | ProjectSkillCreateOrConnectWithoutSkillInput[]
    createMany?: ProjectSkillCreateManySkillInputEnvelope
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
  }

  export type PersonalSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<PersonalSkillCreateWithoutSkillInput, PersonalSkillUncheckedCreateWithoutSkillInput> | PersonalSkillCreateWithoutSkillInput[] | PersonalSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: PersonalSkillCreateOrConnectWithoutSkillInput | PersonalSkillCreateOrConnectWithoutSkillInput[]
    createMany?: PersonalSkillCreateManySkillInputEnvelope
    connect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
  }

  export type ProjectSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput> | ProjectSkillCreateWithoutSkillInput[] | ProjectSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutSkillInput | ProjectSkillCreateOrConnectWithoutSkillInput[]
    createMany?: ProjectSkillCreateManySkillInputEnvelope
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PersonalSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<PersonalSkillCreateWithoutSkillInput, PersonalSkillUncheckedCreateWithoutSkillInput> | PersonalSkillCreateWithoutSkillInput[] | PersonalSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: PersonalSkillCreateOrConnectWithoutSkillInput | PersonalSkillCreateOrConnectWithoutSkillInput[]
    upsert?: PersonalSkillUpsertWithWhereUniqueWithoutSkillInput | PersonalSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: PersonalSkillCreateManySkillInputEnvelope
    set?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    disconnect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    delete?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    connect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    update?: PersonalSkillUpdateWithWhereUniqueWithoutSkillInput | PersonalSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: PersonalSkillUpdateManyWithWhereWithoutSkillInput | PersonalSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: PersonalSkillScalarWhereInput | PersonalSkillScalarWhereInput[]
  }

  export type ProjectSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput> | ProjectSkillCreateWithoutSkillInput[] | ProjectSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutSkillInput | ProjectSkillCreateOrConnectWithoutSkillInput[]
    upsert?: ProjectSkillUpsertWithWhereUniqueWithoutSkillInput | ProjectSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ProjectSkillCreateManySkillInputEnvelope
    set?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    disconnect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    delete?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    update?: ProjectSkillUpdateWithWhereUniqueWithoutSkillInput | ProjectSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ProjectSkillUpdateManyWithWhereWithoutSkillInput | ProjectSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
  }

  export type PersonalSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<PersonalSkillCreateWithoutSkillInput, PersonalSkillUncheckedCreateWithoutSkillInput> | PersonalSkillCreateWithoutSkillInput[] | PersonalSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: PersonalSkillCreateOrConnectWithoutSkillInput | PersonalSkillCreateOrConnectWithoutSkillInput[]
    upsert?: PersonalSkillUpsertWithWhereUniqueWithoutSkillInput | PersonalSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: PersonalSkillCreateManySkillInputEnvelope
    set?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    disconnect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    delete?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    connect?: PersonalSkillWhereUniqueInput | PersonalSkillWhereUniqueInput[]
    update?: PersonalSkillUpdateWithWhereUniqueWithoutSkillInput | PersonalSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: PersonalSkillUpdateManyWithWhereWithoutSkillInput | PersonalSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: PersonalSkillScalarWhereInput | PersonalSkillScalarWhereInput[]
  }

  export type ProjectSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput> | ProjectSkillCreateWithoutSkillInput[] | ProjectSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutSkillInput | ProjectSkillCreateOrConnectWithoutSkillInput[]
    upsert?: ProjectSkillUpsertWithWhereUniqueWithoutSkillInput | ProjectSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ProjectSkillCreateManySkillInputEnvelope
    set?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    disconnect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    delete?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    update?: ProjectSkillUpdateWithWhereUniqueWithoutSkillInput | ProjectSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ProjectSkillUpdateManyWithWhereWithoutSkillInput | ProjectSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
  }

  export type PersonalCreateNestedOneWithoutSkillsInput = {
    create?: XOR<PersonalCreateWithoutSkillsInput, PersonalUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutSkillsInput
    connect?: PersonalWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutPersonalSkillsInput = {
    create?: XOR<SkillCreateWithoutPersonalSkillsInput, SkillUncheckedCreateWithoutPersonalSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutPersonalSkillsInput
    connect?: SkillWhereUniqueInput
  }

  export type PersonalUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<PersonalCreateWithoutSkillsInput, PersonalUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutSkillsInput
    upsert?: PersonalUpsertWithoutSkillsInput
    connect?: PersonalWhereUniqueInput
    update?: XOR<XOR<PersonalUpdateToOneWithWhereWithoutSkillsInput, PersonalUpdateWithoutSkillsInput>, PersonalUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutPersonalSkillsNestedInput = {
    create?: XOR<SkillCreateWithoutPersonalSkillsInput, SkillUncheckedCreateWithoutPersonalSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutPersonalSkillsInput
    upsert?: SkillUpsertWithoutPersonalSkillsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutPersonalSkillsInput, SkillUpdateWithoutPersonalSkillsInput>, SkillUncheckedUpdateWithoutPersonalSkillsInput>
  }

  export type ProjectsCreateNestedOneWithoutTechStackInput = {
    create?: XOR<ProjectsCreateWithoutTechStackInput, ProjectsUncheckedCreateWithoutTechStackInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutTechStackInput
    connect?: ProjectsWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutProjectSkillsInput = {
    create?: XOR<SkillCreateWithoutProjectSkillsInput, SkillUncheckedCreateWithoutProjectSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutProjectSkillsInput
    connect?: SkillWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutTechStackNestedInput = {
    create?: XOR<ProjectsCreateWithoutTechStackInput, ProjectsUncheckedCreateWithoutTechStackInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutTechStackInput
    upsert?: ProjectsUpsertWithoutTechStackInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutTechStackInput, ProjectsUpdateWithoutTechStackInput>, ProjectsUncheckedUpdateWithoutTechStackInput>
  }

  export type SkillUpdateOneRequiredWithoutProjectSkillsNestedInput = {
    create?: XOR<SkillCreateWithoutProjectSkillsInput, SkillUncheckedCreateWithoutProjectSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutProjectSkillsInput
    upsert?: SkillUpsertWithoutProjectSkillsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutProjectSkillsInput, SkillUpdateWithoutProjectSkillsInput>, SkillUncheckedUpdateWithoutProjectSkillsInput>
  }

  export type PersonalCreateNestedOneWithoutIntroduceInput = {
    create?: XOR<PersonalCreateWithoutIntroduceInput, PersonalUncheckedCreateWithoutIntroduceInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutIntroduceInput
    connect?: PersonalWhereUniqueInput
  }

  export type PersonalUncheckedCreateNestedOneWithoutIntroduceInput = {
    create?: XOR<PersonalCreateWithoutIntroduceInput, PersonalUncheckedCreateWithoutIntroduceInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutIntroduceInput
    connect?: PersonalWhereUniqueInput
  }

  export type PersonalUpdateOneWithoutIntroduceNestedInput = {
    create?: XOR<PersonalCreateWithoutIntroduceInput, PersonalUncheckedCreateWithoutIntroduceInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutIntroduceInput
    upsert?: PersonalUpsertWithoutIntroduceInput
    disconnect?: PersonalWhereInput | boolean
    delete?: PersonalWhereInput | boolean
    connect?: PersonalWhereUniqueInput
    update?: XOR<XOR<PersonalUpdateToOneWithWhereWithoutIntroduceInput, PersonalUpdateWithoutIntroduceInput>, PersonalUncheckedUpdateWithoutIntroduceInput>
  }

  export type PersonalUncheckedUpdateOneWithoutIntroduceNestedInput = {
    create?: XOR<PersonalCreateWithoutIntroduceInput, PersonalUncheckedCreateWithoutIntroduceInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutIntroduceInput
    upsert?: PersonalUpsertWithoutIntroduceInput
    disconnect?: PersonalWhereInput | boolean
    delete?: PersonalWhereInput | boolean
    connect?: PersonalWhereUniqueInput
    update?: XOR<XOR<PersonalUpdateToOneWithWhereWithoutIntroduceInput, PersonalUpdateWithoutIntroduceInput>, PersonalUncheckedUpdateWithoutIntroduceInput>
  }

  export type PersonalCreateNestedOneWithoutEducationInput = {
    create?: XOR<PersonalCreateWithoutEducationInput, PersonalUncheckedCreateWithoutEducationInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutEducationInput
    connect?: PersonalWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PersonalUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<PersonalCreateWithoutEducationInput, PersonalUncheckedCreateWithoutEducationInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutEducationInput
    upsert?: PersonalUpsertWithoutEducationInput
    connect?: PersonalWhereUniqueInput
    update?: XOR<XOR<PersonalUpdateToOneWithWhereWithoutEducationInput, PersonalUpdateWithoutEducationInput>, PersonalUncheckedUpdateWithoutEducationInput>
  }

  export type PersonalCreateNestedOneWithoutCareersInput = {
    create?: XOR<PersonalCreateWithoutCareersInput, PersonalUncheckedCreateWithoutCareersInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutCareersInput
    connect?: PersonalWhereUniqueInput
  }

  export type ProjectsCreateNestedManyWithoutCareerInput = {
    create?: XOR<ProjectsCreateWithoutCareerInput, ProjectsUncheckedCreateWithoutCareerInput> | ProjectsCreateWithoutCareerInput[] | ProjectsUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCareerInput | ProjectsCreateOrConnectWithoutCareerInput[]
    createMany?: ProjectsCreateManyCareerInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<ProjectsCreateWithoutCareerInput, ProjectsUncheckedCreateWithoutCareerInput> | ProjectsCreateWithoutCareerInput[] | ProjectsUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCareerInput | ProjectsCreateOrConnectWithoutCareerInput[]
    createMany?: ProjectsCreateManyCareerInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type PersonalUpdateOneWithoutCareersNestedInput = {
    create?: XOR<PersonalCreateWithoutCareersInput, PersonalUncheckedCreateWithoutCareersInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutCareersInput
    upsert?: PersonalUpsertWithoutCareersInput
    disconnect?: PersonalWhereInput | boolean
    delete?: PersonalWhereInput | boolean
    connect?: PersonalWhereUniqueInput
    update?: XOR<XOR<PersonalUpdateToOneWithWhereWithoutCareersInput, PersonalUpdateWithoutCareersInput>, PersonalUncheckedUpdateWithoutCareersInput>
  }

  export type ProjectsUpdateManyWithoutCareerNestedInput = {
    create?: XOR<ProjectsCreateWithoutCareerInput, ProjectsUncheckedCreateWithoutCareerInput> | ProjectsCreateWithoutCareerInput[] | ProjectsUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCareerInput | ProjectsCreateOrConnectWithoutCareerInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutCareerInput | ProjectsUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: ProjectsCreateManyCareerInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutCareerInput | ProjectsUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutCareerInput | ProjectsUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ProjectsUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<ProjectsCreateWithoutCareerInput, ProjectsUncheckedCreateWithoutCareerInput> | ProjectsCreateWithoutCareerInput[] | ProjectsUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCareerInput | ProjectsCreateOrConnectWithoutCareerInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutCareerInput | ProjectsUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: ProjectsCreateManyCareerInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutCareerInput | ProjectsUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutCareerInput | ProjectsUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ProjectSkillCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput> | ProjectSkillCreateWithoutProjectInput[] | ProjectSkillUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutProjectInput | ProjectSkillCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectSkillCreateManyProjectInputEnvelope
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
  }

  export type PersonalCreateNestedOneWithoutProjectsInput = {
    create?: XOR<PersonalCreateWithoutProjectsInput, PersonalUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutProjectsInput
    connect?: PersonalWhereUniqueInput
  }

  export type CareerCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CareerCreateWithoutProjectsInput, CareerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CareerCreateOrConnectWithoutProjectsInput
    connect?: CareerWhereUniqueInput
  }

  export type ProjectSkillUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput> | ProjectSkillCreateWithoutProjectInput[] | ProjectSkillUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutProjectInput | ProjectSkillCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectSkillCreateManyProjectInputEnvelope
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
  }

  export type ProjectSkillUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput> | ProjectSkillCreateWithoutProjectInput[] | ProjectSkillUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutProjectInput | ProjectSkillCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectSkillUpsertWithWhereUniqueWithoutProjectInput | ProjectSkillUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectSkillCreateManyProjectInputEnvelope
    set?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    disconnect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    delete?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    update?: ProjectSkillUpdateWithWhereUniqueWithoutProjectInput | ProjectSkillUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectSkillUpdateManyWithWhereWithoutProjectInput | ProjectSkillUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
  }

  export type PersonalUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<PersonalCreateWithoutProjectsInput, PersonalUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: PersonalCreateOrConnectWithoutProjectsInput
    upsert?: PersonalUpsertWithoutProjectsInput
    disconnect?: PersonalWhereInput | boolean
    delete?: PersonalWhereInput | boolean
    connect?: PersonalWhereUniqueInput
    update?: XOR<XOR<PersonalUpdateToOneWithWhereWithoutProjectsInput, PersonalUpdateWithoutProjectsInput>, PersonalUncheckedUpdateWithoutProjectsInput>
  }

  export type CareerUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<CareerCreateWithoutProjectsInput, CareerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CareerCreateOrConnectWithoutProjectsInput
    upsert?: CareerUpsertWithoutProjectsInput
    disconnect?: CareerWhereInput | boolean
    delete?: CareerWhereInput | boolean
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutProjectsInput, CareerUpdateWithoutProjectsInput>, CareerUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectSkillUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput> | ProjectSkillCreateWithoutProjectInput[] | ProjectSkillUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSkillCreateOrConnectWithoutProjectInput | ProjectSkillCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectSkillUpsertWithWhereUniqueWithoutProjectInput | ProjectSkillUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectSkillCreateManyProjectInputEnvelope
    set?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    disconnect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    delete?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    connect?: ProjectSkillWhereUniqueInput | ProjectSkillWhereUniqueInput[]
    update?: ProjectSkillUpdateWithWhereUniqueWithoutProjectInput | ProjectSkillUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectSkillUpdateManyWithWhereWithoutProjectInput | ProjectSkillUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntroduceDetailCreateWithoutPersonalInput = {
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    detail: JsonNullValueInput | InputJsonValue
  }

  export type IntroduceDetailUncheckedCreateWithoutPersonalInput = {
    id?: number
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    detail: JsonNullValueInput | InputJsonValue
  }

  export type IntroduceDetailCreateOrConnectWithoutPersonalInput = {
    where: IntroduceDetailWhereUniqueInput
    create: XOR<IntroduceDetailCreateWithoutPersonalInput, IntroduceDetailUncheckedCreateWithoutPersonalInput>
  }

  export type PersonalSkillCreateWithoutPersonalInput = {
    skill: SkillCreateNestedOneWithoutPersonalSkillsInput
  }

  export type PersonalSkillUncheckedCreateWithoutPersonalInput = {
    skillId: number
  }

  export type PersonalSkillCreateOrConnectWithoutPersonalInput = {
    where: PersonalSkillWhereUniqueInput
    create: XOR<PersonalSkillCreateWithoutPersonalInput, PersonalSkillUncheckedCreateWithoutPersonalInput>
  }

  export type PersonalSkillCreateManyPersonalInputEnvelope = {
    data: PersonalSkillCreateManyPersonalInput | PersonalSkillCreateManyPersonalInput[]
    skipDuplicates?: boolean
  }

  export type EducationDetailCreateWithoutPersonalInput = {
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    schoolName?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    department?: string | null
    detail: JsonNullValueInput | InputJsonValue
  }

  export type EducationDetailUncheckedCreateWithoutPersonalInput = {
    id?: number
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    schoolName?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    department?: string | null
    detail: JsonNullValueInput | InputJsonValue
  }

  export type EducationDetailCreateOrConnectWithoutPersonalInput = {
    where: EducationDetailWhereUniqueInput
    create: XOR<EducationDetailCreateWithoutPersonalInput, EducationDetailUncheckedCreateWithoutPersonalInput>
  }

  export type EducationDetailCreateManyPersonalInputEnvelope = {
    data: EducationDetailCreateManyPersonalInput | EducationDetailCreateManyPersonalInput[]
    skipDuplicates?: boolean
  }

  export type CareerCreateWithoutPersonalInput = {
    companyName: string
    department: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    projects?: ProjectsCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutPersonalInput = {
    id?: number
    companyName: string
    department: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    projects?: ProjectsUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutPersonalInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutPersonalInput, CareerUncheckedCreateWithoutPersonalInput>
  }

  export type CareerCreateManyPersonalInputEnvelope = {
    data: CareerCreateManyPersonalInput | CareerCreateManyPersonalInput[]
    skipDuplicates?: boolean
  }

  export type ProjectsCreateWithoutPersonalInput = {
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    techStack?: ProjectSkillCreateNestedManyWithoutProjectInput
    career?: CareerCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsUncheckedCreateWithoutPersonalInput = {
    id?: number
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    careerId?: number | null
    techStack?: ProjectSkillUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutPersonalInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutPersonalInput, ProjectsUncheckedCreateWithoutPersonalInput>
  }

  export type ProjectsCreateManyPersonalInputEnvelope = {
    data: ProjectsCreateManyPersonalInput | ProjectsCreateManyPersonalInput[]
    skipDuplicates?: boolean
  }

  export type IntroduceDetailUpsertWithoutPersonalInput = {
    update: XOR<IntroduceDetailUpdateWithoutPersonalInput, IntroduceDetailUncheckedUpdateWithoutPersonalInput>
    create: XOR<IntroduceDetailCreateWithoutPersonalInput, IntroduceDetailUncheckedCreateWithoutPersonalInput>
    where?: IntroduceDetailWhereInput
  }

  export type IntroduceDetailUpdateToOneWithWhereWithoutPersonalInput = {
    where?: IntroduceDetailWhereInput
    data: XOR<IntroduceDetailUpdateWithoutPersonalInput, IntroduceDetailUncheckedUpdateWithoutPersonalInput>
  }

  export type IntroduceDetailUpdateWithoutPersonalInput = {
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
  }

  export type IntroduceDetailUncheckedUpdateWithoutPersonalInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
  }

  export type PersonalSkillUpsertWithWhereUniqueWithoutPersonalInput = {
    where: PersonalSkillWhereUniqueInput
    update: XOR<PersonalSkillUpdateWithoutPersonalInput, PersonalSkillUncheckedUpdateWithoutPersonalInput>
    create: XOR<PersonalSkillCreateWithoutPersonalInput, PersonalSkillUncheckedCreateWithoutPersonalInput>
  }

  export type PersonalSkillUpdateWithWhereUniqueWithoutPersonalInput = {
    where: PersonalSkillWhereUniqueInput
    data: XOR<PersonalSkillUpdateWithoutPersonalInput, PersonalSkillUncheckedUpdateWithoutPersonalInput>
  }

  export type PersonalSkillUpdateManyWithWhereWithoutPersonalInput = {
    where: PersonalSkillScalarWhereInput
    data: XOR<PersonalSkillUpdateManyMutationInput, PersonalSkillUncheckedUpdateManyWithoutPersonalInput>
  }

  export type PersonalSkillScalarWhereInput = {
    AND?: PersonalSkillScalarWhereInput | PersonalSkillScalarWhereInput[]
    OR?: PersonalSkillScalarWhereInput[]
    NOT?: PersonalSkillScalarWhereInput | PersonalSkillScalarWhereInput[]
    personalId?: IntFilter<"PersonalSkill"> | number
    skillId?: IntFilter<"PersonalSkill"> | number
  }

  export type EducationDetailUpsertWithWhereUniqueWithoutPersonalInput = {
    where: EducationDetailWhereUniqueInput
    update: XOR<EducationDetailUpdateWithoutPersonalInput, EducationDetailUncheckedUpdateWithoutPersonalInput>
    create: XOR<EducationDetailCreateWithoutPersonalInput, EducationDetailUncheckedCreateWithoutPersonalInput>
  }

  export type EducationDetailUpdateWithWhereUniqueWithoutPersonalInput = {
    where: EducationDetailWhereUniqueInput
    data: XOR<EducationDetailUpdateWithoutPersonalInput, EducationDetailUncheckedUpdateWithoutPersonalInput>
  }

  export type EducationDetailUpdateManyWithWhereWithoutPersonalInput = {
    where: EducationDetailScalarWhereInput
    data: XOR<EducationDetailUpdateManyMutationInput, EducationDetailUncheckedUpdateManyWithoutPersonalInput>
  }

  export type EducationDetailScalarWhereInput = {
    AND?: EducationDetailScalarWhereInput | EducationDetailScalarWhereInput[]
    OR?: EducationDetailScalarWhereInput[]
    NOT?: EducationDetailScalarWhereInput | EducationDetailScalarWhereInput[]
    id?: IntFilter<"EducationDetail"> | number
    title?: StringFilter<"EducationDetail"> | string
    titleIcon?: StringNullableFilter<"EducationDetail"> | string | null
    titleEmoji?: StringNullableFilter<"EducationDetail"> | string | null
    schoolName?: StringNullableFilter<"EducationDetail"> | string | null
    startDate?: DateTimeNullableFilter<"EducationDetail"> | Date | string | null
    endDate?: DateTimeNullableFilter<"EducationDetail"> | Date | string | null
    department?: StringNullableFilter<"EducationDetail"> | string | null
    detail?: JsonFilter<"EducationDetail">
    personalId?: IntFilter<"EducationDetail"> | number
  }

  export type CareerUpsertWithWhereUniqueWithoutPersonalInput = {
    where: CareerWhereUniqueInput
    update: XOR<CareerUpdateWithoutPersonalInput, CareerUncheckedUpdateWithoutPersonalInput>
    create: XOR<CareerCreateWithoutPersonalInput, CareerUncheckedCreateWithoutPersonalInput>
  }

  export type CareerUpdateWithWhereUniqueWithoutPersonalInput = {
    where: CareerWhereUniqueInput
    data: XOR<CareerUpdateWithoutPersonalInput, CareerUncheckedUpdateWithoutPersonalInput>
  }

  export type CareerUpdateManyWithWhereWithoutPersonalInput = {
    where: CareerScalarWhereInput
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyWithoutPersonalInput>
  }

  export type CareerScalarWhereInput = {
    AND?: CareerScalarWhereInput | CareerScalarWhereInput[]
    OR?: CareerScalarWhereInput[]
    NOT?: CareerScalarWhereInput | CareerScalarWhereInput[]
    id?: IntFilter<"Career"> | number
    companyName?: StringFilter<"Career"> | string
    department?: StringFilter<"Career"> | string
    startDate?: DateTimeNullableFilter<"Career"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Career"> | Date | string | null
    experience?: JsonNullableFilter<"Career">
    companyLogo?: StringNullableFilter<"Career"> | string | null
    achievements?: JsonNullableFilter<"Career">
    personalId?: IntNullableFilter<"Career"> | number | null
  }

  export type ProjectsUpsertWithWhereUniqueWithoutPersonalInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutPersonalInput, ProjectsUncheckedUpdateWithoutPersonalInput>
    create: XOR<ProjectsCreateWithoutPersonalInput, ProjectsUncheckedCreateWithoutPersonalInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutPersonalInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutPersonalInput, ProjectsUncheckedUpdateWithoutPersonalInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutPersonalInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutPersonalInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    OR?: ProjectsScalarWhereInput[]
    NOT?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    id?: IntFilter<"Projects"> | number
    name?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    overview?: JsonNullableFilter<"Projects">
    role?: JsonNullableFilter<"Projects">
    background?: JsonNullableFilter<"Projects">
    problem?: JsonNullableFilter<"Projects">
    solution?: JsonNullableFilter<"Projects">
    link?: StringNullableFilter<"Projects"> | string | null
    attachments?: JsonNullableFilter<"Projects">
    personalId?: IntNullableFilter<"Projects"> | number | null
    careerId?: IntNullableFilter<"Projects"> | number | null
  }

  export type PersonalSkillCreateWithoutSkillInput = {
    personal: PersonalCreateNestedOneWithoutSkillsInput
  }

  export type PersonalSkillUncheckedCreateWithoutSkillInput = {
    personalId: number
  }

  export type PersonalSkillCreateOrConnectWithoutSkillInput = {
    where: PersonalSkillWhereUniqueInput
    create: XOR<PersonalSkillCreateWithoutSkillInput, PersonalSkillUncheckedCreateWithoutSkillInput>
  }

  export type PersonalSkillCreateManySkillInputEnvelope = {
    data: PersonalSkillCreateManySkillInput | PersonalSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type ProjectSkillCreateWithoutSkillInput = {
    project: ProjectsCreateNestedOneWithoutTechStackInput
  }

  export type ProjectSkillUncheckedCreateWithoutSkillInput = {
    projectId: number
  }

  export type ProjectSkillCreateOrConnectWithoutSkillInput = {
    where: ProjectSkillWhereUniqueInput
    create: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput>
  }

  export type ProjectSkillCreateManySkillInputEnvelope = {
    data: ProjectSkillCreateManySkillInput | ProjectSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type PersonalSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: PersonalSkillWhereUniqueInput
    update: XOR<PersonalSkillUpdateWithoutSkillInput, PersonalSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<PersonalSkillCreateWithoutSkillInput, PersonalSkillUncheckedCreateWithoutSkillInput>
  }

  export type PersonalSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: PersonalSkillWhereUniqueInput
    data: XOR<PersonalSkillUpdateWithoutSkillInput, PersonalSkillUncheckedUpdateWithoutSkillInput>
  }

  export type PersonalSkillUpdateManyWithWhereWithoutSkillInput = {
    where: PersonalSkillScalarWhereInput
    data: XOR<PersonalSkillUpdateManyMutationInput, PersonalSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type ProjectSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: ProjectSkillWhereUniqueInput
    update: XOR<ProjectSkillUpdateWithoutSkillInput, ProjectSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<ProjectSkillCreateWithoutSkillInput, ProjectSkillUncheckedCreateWithoutSkillInput>
  }

  export type ProjectSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: ProjectSkillWhereUniqueInput
    data: XOR<ProjectSkillUpdateWithoutSkillInput, ProjectSkillUncheckedUpdateWithoutSkillInput>
  }

  export type ProjectSkillUpdateManyWithWhereWithoutSkillInput = {
    where: ProjectSkillScalarWhereInput
    data: XOR<ProjectSkillUpdateManyMutationInput, ProjectSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type ProjectSkillScalarWhereInput = {
    AND?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
    OR?: ProjectSkillScalarWhereInput[]
    NOT?: ProjectSkillScalarWhereInput | ProjectSkillScalarWhereInput[]
    projectId?: IntFilter<"ProjectSkill"> | number
    skillId?: IntFilter<"ProjectSkill"> | number
  }

  export type PersonalCreateWithoutSkillsInput = {
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduce?: IntroduceDetailCreateNestedOneWithoutPersonalInput
    education?: EducationDetailCreateNestedManyWithoutPersonalInput
    careers?: CareerCreateNestedManyWithoutPersonalInput
    projects?: ProjectsCreateNestedManyWithoutPersonalInput
  }

  export type PersonalUncheckedCreateWithoutSkillsInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduceId?: number | null
    education?: EducationDetailUncheckedCreateNestedManyWithoutPersonalInput
    careers?: CareerUncheckedCreateNestedManyWithoutPersonalInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutPersonalInput
  }

  export type PersonalCreateOrConnectWithoutSkillsInput = {
    where: PersonalWhereUniqueInput
    create: XOR<PersonalCreateWithoutSkillsInput, PersonalUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutPersonalSkillsInput = {
    name: string
    description?: string | null
    imagePath: string
    projectSkills?: ProjectSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutPersonalSkillsInput = {
    id?: number
    name: string
    description?: string | null
    imagePath: string
    projectSkills?: ProjectSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutPersonalSkillsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutPersonalSkillsInput, SkillUncheckedCreateWithoutPersonalSkillsInput>
  }

  export type PersonalUpsertWithoutSkillsInput = {
    update: XOR<PersonalUpdateWithoutSkillsInput, PersonalUncheckedUpdateWithoutSkillsInput>
    create: XOR<PersonalCreateWithoutSkillsInput, PersonalUncheckedCreateWithoutSkillsInput>
    where?: PersonalWhereInput
  }

  export type PersonalUpdateToOneWithWhereWithoutSkillsInput = {
    where?: PersonalWhereInput
    data: XOR<PersonalUpdateWithoutSkillsInput, PersonalUncheckedUpdateWithoutSkillsInput>
  }

  export type PersonalUpdateWithoutSkillsInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduce?: IntroduceDetailUpdateOneWithoutPersonalNestedInput
    education?: EducationDetailUpdateManyWithoutPersonalNestedInput
    careers?: CareerUpdateManyWithoutPersonalNestedInput
    projects?: ProjectsUpdateManyWithoutPersonalNestedInput
  }

  export type PersonalUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduceId?: NullableIntFieldUpdateOperationsInput | number | null
    education?: EducationDetailUncheckedUpdateManyWithoutPersonalNestedInput
    careers?: CareerUncheckedUpdateManyWithoutPersonalNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutPersonalNestedInput
  }

  export type SkillUpsertWithoutPersonalSkillsInput = {
    update: XOR<SkillUpdateWithoutPersonalSkillsInput, SkillUncheckedUpdateWithoutPersonalSkillsInput>
    create: XOR<SkillCreateWithoutPersonalSkillsInput, SkillUncheckedCreateWithoutPersonalSkillsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutPersonalSkillsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutPersonalSkillsInput, SkillUncheckedUpdateWithoutPersonalSkillsInput>
  }

  export type SkillUpdateWithoutPersonalSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: StringFieldUpdateOperationsInput | string
    projectSkills?: ProjectSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutPersonalSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: StringFieldUpdateOperationsInput | string
    projectSkills?: ProjectSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type ProjectsCreateWithoutTechStackInput = {
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personal?: PersonalCreateNestedOneWithoutProjectsInput
    career?: CareerCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsUncheckedCreateWithoutTechStackInput = {
    id?: number
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personalId?: number | null
    careerId?: number | null
  }

  export type ProjectsCreateOrConnectWithoutTechStackInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutTechStackInput, ProjectsUncheckedCreateWithoutTechStackInput>
  }

  export type SkillCreateWithoutProjectSkillsInput = {
    name: string
    description?: string | null
    imagePath: string
    personalSkills?: PersonalSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutProjectSkillsInput = {
    id?: number
    name: string
    description?: string | null
    imagePath: string
    personalSkills?: PersonalSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutProjectSkillsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutProjectSkillsInput, SkillUncheckedCreateWithoutProjectSkillsInput>
  }

  export type ProjectsUpsertWithoutTechStackInput = {
    update: XOR<ProjectsUpdateWithoutTechStackInput, ProjectsUncheckedUpdateWithoutTechStackInput>
    create: XOR<ProjectsCreateWithoutTechStackInput, ProjectsUncheckedCreateWithoutTechStackInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutTechStackInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutTechStackInput, ProjectsUncheckedUpdateWithoutTechStackInput>
  }

  export type ProjectsUpdateWithoutTechStackInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personal?: PersonalUpdateOneWithoutProjectsNestedInput
    career?: CareerUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutTechStackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personalId?: NullableIntFieldUpdateOperationsInput | number | null
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SkillUpsertWithoutProjectSkillsInput = {
    update: XOR<SkillUpdateWithoutProjectSkillsInput, SkillUncheckedUpdateWithoutProjectSkillsInput>
    create: XOR<SkillCreateWithoutProjectSkillsInput, SkillUncheckedCreateWithoutProjectSkillsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutProjectSkillsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutProjectSkillsInput, SkillUncheckedUpdateWithoutProjectSkillsInput>
  }

  export type SkillUpdateWithoutProjectSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: StringFieldUpdateOperationsInput | string
    personalSkills?: PersonalSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutProjectSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: StringFieldUpdateOperationsInput | string
    personalSkills?: PersonalSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type PersonalCreateWithoutIntroduceInput = {
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    skills?: PersonalSkillCreateNestedManyWithoutPersonalInput
    education?: EducationDetailCreateNestedManyWithoutPersonalInput
    careers?: CareerCreateNestedManyWithoutPersonalInput
    projects?: ProjectsCreateNestedManyWithoutPersonalInput
  }

  export type PersonalUncheckedCreateWithoutIntroduceInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    skills?: PersonalSkillUncheckedCreateNestedManyWithoutPersonalInput
    education?: EducationDetailUncheckedCreateNestedManyWithoutPersonalInput
    careers?: CareerUncheckedCreateNestedManyWithoutPersonalInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutPersonalInput
  }

  export type PersonalCreateOrConnectWithoutIntroduceInput = {
    where: PersonalWhereUniqueInput
    create: XOR<PersonalCreateWithoutIntroduceInput, PersonalUncheckedCreateWithoutIntroduceInput>
  }

  export type PersonalUpsertWithoutIntroduceInput = {
    update: XOR<PersonalUpdateWithoutIntroduceInput, PersonalUncheckedUpdateWithoutIntroduceInput>
    create: XOR<PersonalCreateWithoutIntroduceInput, PersonalUncheckedCreateWithoutIntroduceInput>
    where?: PersonalWhereInput
  }

  export type PersonalUpdateToOneWithWhereWithoutIntroduceInput = {
    where?: PersonalWhereInput
    data: XOR<PersonalUpdateWithoutIntroduceInput, PersonalUncheckedUpdateWithoutIntroduceInput>
  }

  export type PersonalUpdateWithoutIntroduceInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    skills?: PersonalSkillUpdateManyWithoutPersonalNestedInput
    education?: EducationDetailUpdateManyWithoutPersonalNestedInput
    careers?: CareerUpdateManyWithoutPersonalNestedInput
    projects?: ProjectsUpdateManyWithoutPersonalNestedInput
  }

  export type PersonalUncheckedUpdateWithoutIntroduceInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    skills?: PersonalSkillUncheckedUpdateManyWithoutPersonalNestedInput
    education?: EducationDetailUncheckedUpdateManyWithoutPersonalNestedInput
    careers?: CareerUncheckedUpdateManyWithoutPersonalNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutPersonalNestedInput
  }

  export type PersonalCreateWithoutEducationInput = {
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduce?: IntroduceDetailCreateNestedOneWithoutPersonalInput
    skills?: PersonalSkillCreateNestedManyWithoutPersonalInput
    careers?: CareerCreateNestedManyWithoutPersonalInput
    projects?: ProjectsCreateNestedManyWithoutPersonalInput
  }

  export type PersonalUncheckedCreateWithoutEducationInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduceId?: number | null
    skills?: PersonalSkillUncheckedCreateNestedManyWithoutPersonalInput
    careers?: CareerUncheckedCreateNestedManyWithoutPersonalInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutPersonalInput
  }

  export type PersonalCreateOrConnectWithoutEducationInput = {
    where: PersonalWhereUniqueInput
    create: XOR<PersonalCreateWithoutEducationInput, PersonalUncheckedCreateWithoutEducationInput>
  }

  export type PersonalUpsertWithoutEducationInput = {
    update: XOR<PersonalUpdateWithoutEducationInput, PersonalUncheckedUpdateWithoutEducationInput>
    create: XOR<PersonalCreateWithoutEducationInput, PersonalUncheckedCreateWithoutEducationInput>
    where?: PersonalWhereInput
  }

  export type PersonalUpdateToOneWithWhereWithoutEducationInput = {
    where?: PersonalWhereInput
    data: XOR<PersonalUpdateWithoutEducationInput, PersonalUncheckedUpdateWithoutEducationInput>
  }

  export type PersonalUpdateWithoutEducationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduce?: IntroduceDetailUpdateOneWithoutPersonalNestedInput
    skills?: PersonalSkillUpdateManyWithoutPersonalNestedInput
    careers?: CareerUpdateManyWithoutPersonalNestedInput
    projects?: ProjectsUpdateManyWithoutPersonalNestedInput
  }

  export type PersonalUncheckedUpdateWithoutEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduceId?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: PersonalSkillUncheckedUpdateManyWithoutPersonalNestedInput
    careers?: CareerUncheckedUpdateManyWithoutPersonalNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutPersonalNestedInput
  }

  export type PersonalCreateWithoutCareersInput = {
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduce?: IntroduceDetailCreateNestedOneWithoutPersonalInput
    skills?: PersonalSkillCreateNestedManyWithoutPersonalInput
    education?: EducationDetailCreateNestedManyWithoutPersonalInput
    projects?: ProjectsCreateNestedManyWithoutPersonalInput
  }

  export type PersonalUncheckedCreateWithoutCareersInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduceId?: number | null
    skills?: PersonalSkillUncheckedCreateNestedManyWithoutPersonalInput
    education?: EducationDetailUncheckedCreateNestedManyWithoutPersonalInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutPersonalInput
  }

  export type PersonalCreateOrConnectWithoutCareersInput = {
    where: PersonalWhereUniqueInput
    create: XOR<PersonalCreateWithoutCareersInput, PersonalUncheckedCreateWithoutCareersInput>
  }

  export type ProjectsCreateWithoutCareerInput = {
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    techStack?: ProjectSkillCreateNestedManyWithoutProjectInput
    personal?: PersonalCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsUncheckedCreateWithoutCareerInput = {
    id?: number
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personalId?: number | null
    techStack?: ProjectSkillUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutCareerInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutCareerInput, ProjectsUncheckedCreateWithoutCareerInput>
  }

  export type ProjectsCreateManyCareerInputEnvelope = {
    data: ProjectsCreateManyCareerInput | ProjectsCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type PersonalUpsertWithoutCareersInput = {
    update: XOR<PersonalUpdateWithoutCareersInput, PersonalUncheckedUpdateWithoutCareersInput>
    create: XOR<PersonalCreateWithoutCareersInput, PersonalUncheckedCreateWithoutCareersInput>
    where?: PersonalWhereInput
  }

  export type PersonalUpdateToOneWithWhereWithoutCareersInput = {
    where?: PersonalWhereInput
    data: XOR<PersonalUpdateWithoutCareersInput, PersonalUncheckedUpdateWithoutCareersInput>
  }

  export type PersonalUpdateWithoutCareersInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduce?: IntroduceDetailUpdateOneWithoutPersonalNestedInput
    skills?: PersonalSkillUpdateManyWithoutPersonalNestedInput
    education?: EducationDetailUpdateManyWithoutPersonalNestedInput
    projects?: ProjectsUpdateManyWithoutPersonalNestedInput
  }

  export type PersonalUncheckedUpdateWithoutCareersInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduceId?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: PersonalSkillUncheckedUpdateManyWithoutPersonalNestedInput
    education?: EducationDetailUncheckedUpdateManyWithoutPersonalNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutPersonalNestedInput
  }

  export type ProjectsUpsertWithWhereUniqueWithoutCareerInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutCareerInput, ProjectsUncheckedUpdateWithoutCareerInput>
    create: XOR<ProjectsCreateWithoutCareerInput, ProjectsUncheckedCreateWithoutCareerInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutCareerInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutCareerInput, ProjectsUncheckedUpdateWithoutCareerInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutCareerInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutCareerInput>
  }

  export type ProjectSkillCreateWithoutProjectInput = {
    skill: SkillCreateNestedOneWithoutProjectSkillsInput
  }

  export type ProjectSkillUncheckedCreateWithoutProjectInput = {
    skillId: number
  }

  export type ProjectSkillCreateOrConnectWithoutProjectInput = {
    where: ProjectSkillWhereUniqueInput
    create: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput>
  }

  export type ProjectSkillCreateManyProjectInputEnvelope = {
    data: ProjectSkillCreateManyProjectInput | ProjectSkillCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PersonalCreateWithoutProjectsInput = {
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduce?: IntroduceDetailCreateNestedOneWithoutPersonalInput
    skills?: PersonalSkillCreateNestedManyWithoutPersonalInput
    education?: EducationDetailCreateNestedManyWithoutPersonalInput
    careers?: CareerCreateNestedManyWithoutPersonalInput
  }

  export type PersonalUncheckedCreateWithoutProjectsInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    idLine: string
    gitLink: string
    phoneNumber: string
    introduceId?: number | null
    skills?: PersonalSkillUncheckedCreateNestedManyWithoutPersonalInput
    education?: EducationDetailUncheckedCreateNestedManyWithoutPersonalInput
    careers?: CareerUncheckedCreateNestedManyWithoutPersonalInput
  }

  export type PersonalCreateOrConnectWithoutProjectsInput = {
    where: PersonalWhereUniqueInput
    create: XOR<PersonalCreateWithoutProjectsInput, PersonalUncheckedCreateWithoutProjectsInput>
  }

  export type CareerCreateWithoutProjectsInput = {
    companyName: string
    department: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    personal?: PersonalCreateNestedOneWithoutCareersInput
  }

  export type CareerUncheckedCreateWithoutProjectsInput = {
    id?: number
    companyName: string
    department: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    personalId?: number | null
  }

  export type CareerCreateOrConnectWithoutProjectsInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutProjectsInput, CareerUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectSkillUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectSkillWhereUniqueInput
    update: XOR<ProjectSkillUpdateWithoutProjectInput, ProjectSkillUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectSkillCreateWithoutProjectInput, ProjectSkillUncheckedCreateWithoutProjectInput>
  }

  export type ProjectSkillUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectSkillWhereUniqueInput
    data: XOR<ProjectSkillUpdateWithoutProjectInput, ProjectSkillUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectSkillUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectSkillScalarWhereInput
    data: XOR<ProjectSkillUpdateManyMutationInput, ProjectSkillUncheckedUpdateManyWithoutProjectInput>
  }

  export type PersonalUpsertWithoutProjectsInput = {
    update: XOR<PersonalUpdateWithoutProjectsInput, PersonalUncheckedUpdateWithoutProjectsInput>
    create: XOR<PersonalCreateWithoutProjectsInput, PersonalUncheckedCreateWithoutProjectsInput>
    where?: PersonalWhereInput
  }

  export type PersonalUpdateToOneWithWhereWithoutProjectsInput = {
    where?: PersonalWhereInput
    data: XOR<PersonalUpdateWithoutProjectsInput, PersonalUncheckedUpdateWithoutProjectsInput>
  }

  export type PersonalUpdateWithoutProjectsInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduce?: IntroduceDetailUpdateOneWithoutPersonalNestedInput
    skills?: PersonalSkillUpdateManyWithoutPersonalNestedInput
    education?: EducationDetailUpdateManyWithoutPersonalNestedInput
    careers?: CareerUpdateManyWithoutPersonalNestedInput
  }

  export type PersonalUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idLine?: StringFieldUpdateOperationsInput | string
    gitLink?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    introduceId?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: PersonalSkillUncheckedUpdateManyWithoutPersonalNestedInput
    education?: EducationDetailUncheckedUpdateManyWithoutPersonalNestedInput
    careers?: CareerUncheckedUpdateManyWithoutPersonalNestedInput
  }

  export type CareerUpsertWithoutProjectsInput = {
    update: XOR<CareerUpdateWithoutProjectsInput, CareerUncheckedUpdateWithoutProjectsInput>
    create: XOR<CareerCreateWithoutProjectsInput, CareerUncheckedCreateWithoutProjectsInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutProjectsInput, CareerUncheckedUpdateWithoutProjectsInput>
  }

  export type CareerUpdateWithoutProjectsInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    personal?: PersonalUpdateOneWithoutCareersNestedInput
  }

  export type CareerUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    personalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PersonalSkillCreateManyPersonalInput = {
    skillId: number
  }

  export type EducationDetailCreateManyPersonalInput = {
    id?: number
    title: string
    titleIcon?: string | null
    titleEmoji?: string | null
    schoolName?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    department?: string | null
    detail: JsonNullValueInput | InputJsonValue
  }

  export type CareerCreateManyPersonalInput = {
    id?: number
    companyName: string
    department: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProjectsCreateManyPersonalInput = {
    id?: number
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    careerId?: number | null
  }

  export type PersonalSkillUpdateWithoutPersonalInput = {
    skill?: SkillUpdateOneRequiredWithoutPersonalSkillsNestedInput
  }

  export type PersonalSkillUncheckedUpdateWithoutPersonalInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalSkillUncheckedUpdateManyWithoutPersonalInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type EducationDetailUpdateWithoutPersonalInput = {
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
  }

  export type EducationDetailUncheckedUpdateWithoutPersonalInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
  }

  export type EducationDetailUncheckedUpdateManyWithoutPersonalInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleIcon?: NullableStringFieldUpdateOperationsInput | string | null
    titleEmoji?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: JsonNullValueInput | InputJsonValue
  }

  export type CareerUpdateWithoutPersonalInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    projects?: ProjectsUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutPersonalInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
    projects?: ProjectsUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateManyWithoutPersonalInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience?: NullableJsonNullValueInput | InputJsonValue
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProjectsUpdateWithoutPersonalInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    techStack?: ProjectSkillUpdateManyWithoutProjectNestedInput
    career?: CareerUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutPersonalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    techStack?: ProjectSkillUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateManyWithoutPersonalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PersonalSkillCreateManySkillInput = {
    personalId: number
  }

  export type ProjectSkillCreateManySkillInput = {
    projectId: number
  }

  export type PersonalSkillUpdateWithoutSkillInput = {
    personal?: PersonalUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type PersonalSkillUncheckedUpdateWithoutSkillInput = {
    personalId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalSkillUncheckedUpdateManyWithoutSkillInput = {
    personalId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectSkillUpdateWithoutSkillInput = {
    project?: ProjectsUpdateOneRequiredWithoutTechStackNestedInput
  }

  export type ProjectSkillUncheckedUpdateWithoutSkillInput = {
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectSkillUncheckedUpdateManyWithoutSkillInput = {
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectsCreateManyCareerInput = {
    id?: number
    name: string
    description?: string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personalId?: number | null
  }

  export type ProjectsUpdateWithoutCareerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    techStack?: ProjectSkillUpdateManyWithoutProjectNestedInput
    personal?: PersonalUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personalId?: NullableIntFieldUpdateOperationsInput | number | null
    techStack?: ProjectSkillUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateManyWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableJsonNullValueInput | InputJsonValue
    role?: NullableJsonNullValueInput | InputJsonValue
    background?: NullableJsonNullValueInput | InputJsonValue
    problem?: NullableJsonNullValueInput | InputJsonValue
    solution?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    personalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectSkillCreateManyProjectInput = {
    skillId: number
  }

  export type ProjectSkillUpdateWithoutProjectInput = {
    skill?: SkillUpdateOneRequiredWithoutProjectSkillsNestedInput
  }

  export type ProjectSkillUncheckedUpdateWithoutProjectInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectSkillUncheckedUpdateManyWithoutProjectInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}