
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model challenge
 * 
 */
export type challenge = $Result.DefaultSelection<Prisma.$challengePayload>
/**
 * Model game
 * 
 */
export type game = $Result.DefaultSelection<Prisma.$gamePayload>
/**
 * Model participation
 * 
 */
export type participation = $Result.DefaultSelection<Prisma.$participationPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Challenges
 * const challenges = await prisma.challenge.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Challenges
   * const challenges = await prisma.challenge.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.challenge`: Exposes CRUD operations for the **challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.challengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.gameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participation`: Exposes CRUD operations for the **participation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participations
    * const participations = await prisma.participation.findMany()
    * ```
    */
  get participation(): Prisma.participationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    challenge: 'challenge',
    game: 'game',
    participation: 'participation',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "challenge" | "game" | "participation" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      challenge: {
        payload: Prisma.$challengePayload<ExtArgs>
        fields: Prisma.challengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.challengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.challengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          findFirst: {
            args: Prisma.challengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.challengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          findMany: {
            args: Prisma.challengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>[]
          }
          create: {
            args: Prisma.challengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          createMany: {
            args: Prisma.challengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.challengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>[]
          }
          delete: {
            args: Prisma.challengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          update: {
            args: Prisma.challengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          deleteMany: {
            args: Prisma.challengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.challengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.challengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>[]
          }
          upsert: {
            args: Prisma.challengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.challengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.challengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      game: {
        payload: Prisma.$gamePayload<ExtArgs>
        fields: Prisma.gameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          findFirst: {
            args: Prisma.gameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          findMany: {
            args: Prisma.gameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>[]
          }
          create: {
            args: Prisma.gameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          createMany: {
            args: Prisma.gameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>[]
          }
          delete: {
            args: Prisma.gameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          update: {
            args: Prisma.gameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          deleteMany: {
            args: Prisma.gameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>[]
          }
          upsert: {
            args: Prisma.gameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.gameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.gameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      participation: {
        payload: Prisma.$participationPayload<ExtArgs>
        fields: Prisma.participationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.participationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.participationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload>
          }
          findFirst: {
            args: Prisma.participationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.participationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload>
          }
          findMany: {
            args: Prisma.participationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload>[]
          }
          create: {
            args: Prisma.participationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload>
          }
          createMany: {
            args: Prisma.participationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.participationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload>[]
          }
          delete: {
            args: Prisma.participationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload>
          }
          update: {
            args: Prisma.participationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload>
          }
          deleteMany: {
            args: Prisma.participationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.participationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.participationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload>[]
          }
          upsert: {
            args: Prisma.participationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participationPayload>
          }
          aggregate: {
            args: Prisma.ParticipationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipation>
          }
          groupBy: {
            args: Prisma.participationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipationGroupByOutputType>[]
          }
          count: {
            args: Prisma.participationCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipationCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    challenge?: challengeOmit
    game?: gameOmit
    participation?: participationOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    participation: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participation?: boolean | ChallengeCountOutputTypeCountParticipationArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountParticipationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participationWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    challenge: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | GameCountOutputTypeCountChallengeArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengeWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    participation: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participation?: boolean | UserCountOutputTypeCountParticipationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeMinAggregateOutputType = {
    challenge_id: string | null
    title: string | null
    description: string | null
    rules: string | null
    user_id: string | null
    game_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    challenge_id: string | null
    title: string | null
    description: string | null
    rules: string | null
    user_id: string | null
    game_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    challenge_id: number
    title: number
    description: number
    rules: number
    user_id: number
    game_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ChallengeMinAggregateInputType = {
    challenge_id?: true
    title?: true
    description?: true
    rules?: true
    user_id?: true
    game_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ChallengeMaxAggregateInputType = {
    challenge_id?: true
    title?: true
    description?: true
    rules?: true
    user_id?: true
    game_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ChallengeCountAggregateInputType = {
    challenge_id?: true
    title?: true
    description?: true
    rules?: true
    user_id?: true
    game_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenge to aggregate.
     */
    where?: challengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: challengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type challengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengeWhereInput
    orderBy?: challengeOrderByWithAggregationInput | challengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: challengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    challenge_id: string
    title: string
    description: string
    rules: string
    user_id: string
    game_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: ChallengeCountAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends challengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type challengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    title?: boolean
    description?: boolean
    rules?: boolean
    user_id?: boolean
    game_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    game?: boolean | gameDefaultArgs<ExtArgs>
    participation?: boolean | challenge$participationArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type challengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    title?: boolean
    description?: boolean
    rules?: boolean
    user_id?: boolean
    game_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    game?: boolean | gameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type challengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    title?: boolean
    description?: boolean
    rules?: boolean
    user_id?: boolean
    game_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    game?: boolean | gameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type challengeSelectScalar = {
    challenge_id?: boolean
    title?: boolean
    description?: boolean
    rules?: boolean
    user_id?: boolean
    game_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type challengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"challenge_id" | "title" | "description" | "rules" | "user_id" | "game_id" | "created_at" | "updated_at", ExtArgs["result"]["challenge"]>
  export type challengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | gameDefaultArgs<ExtArgs>
    participation?: boolean | challenge$participationArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type challengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | gameDefaultArgs<ExtArgs>
  }
  export type challengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | gameDefaultArgs<ExtArgs>
  }

  export type $challengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "challenge"
    objects: {
      game: Prisma.$gamePayload<ExtArgs>
      participation: Prisma.$participationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      challenge_id: string
      title: string
      description: string
      rules: string
      user_id: string
      game_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type challengeGetPayload<S extends boolean | null | undefined | challengeDefaultArgs> = $Result.GetResult<Prisma.$challengePayload, S>

  type challengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<challengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface challengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['challenge'], meta: { name: 'challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {challengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends challengeFindUniqueArgs>(args: SelectSubset<T, challengeFindUniqueArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {challengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends challengeFindUniqueOrThrowArgs>(args: SelectSubset<T, challengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends challengeFindFirstArgs>(args?: SelectSubset<T, challengeFindFirstArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends challengeFindFirstOrThrowArgs>(args?: SelectSubset<T, challengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `challenge_id`
     * const challengeWithChallenge_idOnly = await prisma.challenge.findMany({ select: { challenge_id: true } })
     * 
     */
    findMany<T extends challengeFindManyArgs>(args?: SelectSubset<T, challengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {challengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends challengeCreateArgs>(args: SelectSubset<T, challengeCreateArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {challengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends challengeCreateManyArgs>(args?: SelectSubset<T, challengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {challengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `challenge_id`
     * const challengeWithChallenge_idOnly = await prisma.challenge.createManyAndReturn({
     *   select: { challenge_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends challengeCreateManyAndReturnArgs>(args?: SelectSubset<T, challengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {challengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends challengeDeleteArgs>(args: SelectSubset<T, challengeDeleteArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {challengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends challengeUpdateArgs>(args: SelectSubset<T, challengeUpdateArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {challengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends challengeDeleteManyArgs>(args?: SelectSubset<T, challengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends challengeUpdateManyArgs>(args: SelectSubset<T, challengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {challengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `challenge_id`
     * const challengeWithChallenge_idOnly = await prisma.challenge.updateManyAndReturn({
     *   select: { challenge_id: true },
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
    updateManyAndReturn<T extends challengeUpdateManyAndReturnArgs>(args: SelectSubset<T, challengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {challengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends challengeUpsertArgs>(args: SelectSubset<T, challengeUpsertArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends challengeCountArgs>(
      args?: Subset<T, challengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeGroupByArgs} args - Group by arguments.
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
      T extends challengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: challengeGroupByArgs['orderBy'] }
        : { orderBy?: challengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, challengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the challenge model
   */
  readonly fields: challengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__challengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends gameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gameDefaultArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participation<T extends challenge$participationArgs<ExtArgs> = {}>(args?: Subset<T, challenge$participationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the challenge model
   */
  interface challengeFieldRefs {
    readonly challenge_id: FieldRef<"challenge", 'String'>
    readonly title: FieldRef<"challenge", 'String'>
    readonly description: FieldRef<"challenge", 'String'>
    readonly rules: FieldRef<"challenge", 'String'>
    readonly user_id: FieldRef<"challenge", 'String'>
    readonly game_id: FieldRef<"challenge", 'String'>
    readonly created_at: FieldRef<"challenge", 'DateTime'>
    readonly updated_at: FieldRef<"challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * challenge findUnique
   */
  export type challengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter, which challenge to fetch.
     */
    where: challengeWhereUniqueInput
  }

  /**
   * challenge findUniqueOrThrow
   */
  export type challengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter, which challenge to fetch.
     */
    where: challengeWhereUniqueInput
  }

  /**
   * challenge findFirst
   */
  export type challengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter, which challenge to fetch.
     */
    where?: challengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenges.
     */
    cursor?: challengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * challenge findFirstOrThrow
   */
  export type challengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter, which challenge to fetch.
     */
    where?: challengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenges.
     */
    cursor?: challengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * challenge findMany
   */
  export type challengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where?: challengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing challenges.
     */
    cursor?: challengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * challenge create
   */
  export type challengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * The data needed to create a challenge.
     */
    data: XOR<challengeCreateInput, challengeUncheckedCreateInput>
  }

  /**
   * challenge createMany
   */
  export type challengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many challenges.
     */
    data: challengeCreateManyInput | challengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * challenge createManyAndReturn
   */
  export type challengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * The data used to create many challenges.
     */
    data: challengeCreateManyInput | challengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * challenge update
   */
  export type challengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * The data needed to update a challenge.
     */
    data: XOR<challengeUpdateInput, challengeUncheckedUpdateInput>
    /**
     * Choose, which challenge to update.
     */
    where: challengeWhereUniqueInput
  }

  /**
   * challenge updateMany
   */
  export type challengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update challenges.
     */
    data: XOR<challengeUpdateManyMutationInput, challengeUncheckedUpdateManyInput>
    /**
     * Filter which challenges to update
     */
    where?: challengeWhereInput
    /**
     * Limit how many challenges to update.
     */
    limit?: number
  }

  /**
   * challenge updateManyAndReturn
   */
  export type challengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * The data used to update challenges.
     */
    data: XOR<challengeUpdateManyMutationInput, challengeUncheckedUpdateManyInput>
    /**
     * Filter which challenges to update
     */
    where?: challengeWhereInput
    /**
     * Limit how many challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * challenge upsert
   */
  export type challengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * The filter to search for the challenge to update in case it exists.
     */
    where: challengeWhereUniqueInput
    /**
     * In case the challenge found by the `where` argument doesn't exist, create a new challenge with this data.
     */
    create: XOR<challengeCreateInput, challengeUncheckedCreateInput>
    /**
     * In case the challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<challengeUpdateInput, challengeUncheckedUpdateInput>
  }

  /**
   * challenge delete
   */
  export type challengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter which challenge to delete.
     */
    where: challengeWhereUniqueInput
  }

  /**
   * challenge deleteMany
   */
  export type challengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenges to delete
     */
    where?: challengeWhereInput
    /**
     * Limit how many challenges to delete.
     */
    limit?: number
  }

  /**
   * challenge.participation
   */
  export type challenge$participationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    where?: participationWhereInput
    orderBy?: participationOrderByWithRelationInput | participationOrderByWithRelationInput[]
    cursor?: participationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * challenge without action
   */
  export type challengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
  }


  /**
   * Model game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    game_id: string | null
    title: string | null
    category: string | null
    description: string | null
    release_date: Date | null
    image_url: string | null
    platform: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GameMaxAggregateOutputType = {
    game_id: string | null
    title: string | null
    category: string | null
    description: string | null
    release_date: Date | null
    image_url: string | null
    platform: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GameCountAggregateOutputType = {
    game_id: number
    title: number
    category: number
    description: number
    release_date: number
    image_url: number
    platform: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    game_id?: true
    title?: true
    category?: true
    description?: true
    release_date?: true
    image_url?: true
    platform?: true
    created_at?: true
    updated_at?: true
  }

  export type GameMaxAggregateInputType = {
    game_id?: true
    title?: true
    category?: true
    description?: true
    release_date?: true
    image_url?: true
    platform?: true
    created_at?: true
    updated_at?: true
  }

  export type GameCountAggregateInputType = {
    game_id?: true
    title?: true
    category?: true
    description?: true
    release_date?: true
    image_url?: true
    platform?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game to aggregate.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type gameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput
    orderBy?: gameOrderByWithAggregationInput | gameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: gameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    game_id: string
    title: string
    category: string
    description: string
    release_date: Date
    image_url: string | null
    platform: string
    created_at: Date | null
    updated_at: Date | null
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends gameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type gameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    game_id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    release_date?: boolean
    image_url?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
    challenge?: boolean | game$challengeArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type gameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    game_id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    release_date?: boolean
    image_url?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["game"]>

  export type gameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    game_id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    release_date?: boolean
    image_url?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["game"]>

  export type gameSelectScalar = {
    game_id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    release_date?: boolean
    image_url?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type gameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"game_id" | "title" | "category" | "description" | "release_date" | "image_url" | "platform" | "created_at" | "updated_at", ExtArgs["result"]["game"]>
  export type gameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | game$challengeArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type gameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $gamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "game"
    objects: {
      challenge: Prisma.$challengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      game_id: string
      title: string
      category: string
      description: string
      release_date: Date
      image_url: string | null
      platform: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type gameGetPayload<S extends boolean | null | undefined | gameDefaultArgs> = $Result.GetResult<Prisma.$gamePayload, S>

  type gameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface gameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['game'], meta: { name: 'game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {gameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gameFindUniqueArgs>(args: SelectSubset<T, gameFindUniqueArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gameFindUniqueOrThrowArgs>(args: SelectSubset<T, gameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gameFindFirstArgs>(args?: SelectSubset<T, gameFindFirstArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gameFindFirstOrThrowArgs>(args?: SelectSubset<T, gameFindFirstOrThrowArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `game_id`
     * const gameWithGame_idOnly = await prisma.game.findMany({ select: { game_id: true } })
     * 
     */
    findMany<T extends gameFindManyArgs>(args?: SelectSubset<T, gameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {gameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends gameCreateArgs>(args: SelectSubset<T, gameCreateArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {gameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gameCreateManyArgs>(args?: SelectSubset<T, gameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {gameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `game_id`
     * const gameWithGame_idOnly = await prisma.game.createManyAndReturn({
     *   select: { game_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gameCreateManyAndReturnArgs>(args?: SelectSubset<T, gameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {gameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends gameDeleteArgs>(args: SelectSubset<T, gameDeleteArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {gameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gameUpdateArgs>(args: SelectSubset<T, gameUpdateArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {gameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gameDeleteManyArgs>(args?: SelectSubset<T, gameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gameUpdateManyArgs>(args: SelectSubset<T, gameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {gameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `game_id`
     * const gameWithGame_idOnly = await prisma.game.updateManyAndReturn({
     *   select: { game_id: true },
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
    updateManyAndReturn<T extends gameUpdateManyAndReturnArgs>(args: SelectSubset<T, gameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {gameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends gameUpsertArgs>(args: SelectSubset<T, gameUpsertArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends gameCountArgs>(
      args?: Subset<T, gameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGroupByArgs} args - Group by arguments.
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
      T extends gameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gameGroupByArgs['orderBy'] }
        : { orderBy?: gameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the game model
   */
  readonly fields: gameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends game$challengeArgs<ExtArgs> = {}>(args?: Subset<T, game$challengeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the game model
   */
  interface gameFieldRefs {
    readonly game_id: FieldRef<"game", 'String'>
    readonly title: FieldRef<"game", 'String'>
    readonly category: FieldRef<"game", 'String'>
    readonly description: FieldRef<"game", 'String'>
    readonly release_date: FieldRef<"game", 'DateTime'>
    readonly image_url: FieldRef<"game", 'String'>
    readonly platform: FieldRef<"game", 'String'>
    readonly created_at: FieldRef<"game", 'DateTime'>
    readonly updated_at: FieldRef<"game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * game findUnique
   */
  export type gameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game findUniqueOrThrow
   */
  export type gameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game findFirst
   */
  export type gameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game findFirstOrThrow
   */
  export type gameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game findMany
   */
  export type gameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game create
   */
  export type gameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The data needed to create a game.
     */
    data: XOR<gameCreateInput, gameUncheckedCreateInput>
  }

  /**
   * game createMany
   */
  export type gameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many games.
     */
    data: gameCreateManyInput | gameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * game createManyAndReturn
   */
  export type gameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * The data used to create many games.
     */
    data: gameCreateManyInput | gameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * game update
   */
  export type gameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The data needed to update a game.
     */
    data: XOR<gameUpdateInput, gameUncheckedUpdateInput>
    /**
     * Choose, which game to update.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game updateMany
   */
  export type gameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update games.
     */
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyInput>
    /**
     * Filter which games to update
     */
    where?: gameWhereInput
    /**
     * Limit how many games to update.
     */
    limit?: number
  }

  /**
   * game updateManyAndReturn
   */
  export type gameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * The data used to update games.
     */
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyInput>
    /**
     * Filter which games to update
     */
    where?: gameWhereInput
    /**
     * Limit how many games to update.
     */
    limit?: number
  }

  /**
   * game upsert
   */
  export type gameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The filter to search for the game to update in case it exists.
     */
    where: gameWhereUniqueInput
    /**
     * In case the game found by the `where` argument doesn't exist, create a new game with this data.
     */
    create: XOR<gameCreateInput, gameUncheckedCreateInput>
    /**
     * In case the game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gameUpdateInput, gameUncheckedUpdateInput>
  }

  /**
   * game delete
   */
  export type gameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter which game to delete.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game deleteMany
   */
  export type gameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which games to delete
     */
    where?: gameWhereInput
    /**
     * Limit how many games to delete.
     */
    limit?: number
  }

  /**
   * game.challenge
   */
  export type game$challengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    where?: challengeWhereInput
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    cursor?: challengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * game without action
   */
  export type gameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
  }


  /**
   * Model participation
   */

  export type AggregateParticipation = {
    _count: ParticipationCountAggregateOutputType | null
    _min: ParticipationMinAggregateOutputType | null
    _max: ParticipationMaxAggregateOutputType | null
  }

  export type ParticipationMinAggregateOutputType = {
    participation_id: string | null
    user_id: string | null
    video_url: string | null
    image_url: string | null
    description: string | null
    challenge_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ParticipationMaxAggregateOutputType = {
    participation_id: string | null
    user_id: string | null
    video_url: string | null
    image_url: string | null
    description: string | null
    challenge_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ParticipationCountAggregateOutputType = {
    participation_id: number
    user_id: number
    video_url: number
    image_url: number
    description: number
    challenge_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ParticipationMinAggregateInputType = {
    participation_id?: true
    user_id?: true
    video_url?: true
    image_url?: true
    description?: true
    challenge_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ParticipationMaxAggregateInputType = {
    participation_id?: true
    user_id?: true
    video_url?: true
    image_url?: true
    description?: true
    challenge_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ParticipationCountAggregateInputType = {
    participation_id?: true
    user_id?: true
    video_url?: true
    image_url?: true
    description?: true
    challenge_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ParticipationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participation to aggregate.
     */
    where?: participationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participations to fetch.
     */
    orderBy?: participationOrderByWithRelationInput | participationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: participationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned participations
    **/
    _count?: true | ParticipationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipationMaxAggregateInputType
  }

  export type GetParticipationAggregateType<T extends ParticipationAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipation[P]>
      : GetScalarType<T[P], AggregateParticipation[P]>
  }




  export type participationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participationWhereInput
    orderBy?: participationOrderByWithAggregationInput | participationOrderByWithAggregationInput[]
    by: ParticipationScalarFieldEnum[] | ParticipationScalarFieldEnum
    having?: participationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipationCountAggregateInputType | true
    _min?: ParticipationMinAggregateInputType
    _max?: ParticipationMaxAggregateInputType
  }

  export type ParticipationGroupByOutputType = {
    participation_id: string
    user_id: string
    video_url: string | null
    image_url: string | null
    description: string
    challenge_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: ParticipationCountAggregateOutputType | null
    _min: ParticipationMinAggregateOutputType | null
    _max: ParticipationMaxAggregateOutputType | null
  }

  type GetParticipationGroupByPayload<T extends participationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipationGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipationGroupByOutputType[P]>
        }
      >
    >


  export type participationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participation_id?: boolean
    user_id?: boolean
    video_url?: boolean
    image_url?: boolean
    description?: boolean
    challenge_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type participationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participation_id?: boolean
    user_id?: boolean
    video_url?: boolean
    image_url?: boolean
    description?: boolean
    challenge_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type participationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participation_id?: boolean
    user_id?: boolean
    video_url?: boolean
    image_url?: boolean
    description?: boolean
    challenge_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type participationSelectScalar = {
    participation_id?: boolean
    user_id?: boolean
    video_url?: boolean
    image_url?: boolean
    description?: boolean
    challenge_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type participationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"participation_id" | "user_id" | "video_url" | "image_url" | "description" | "challenge_id" | "created_at" | "updated_at", ExtArgs["result"]["participation"]>
  export type participationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type participationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type participationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $participationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participation"
    objects: {
      challenge: Prisma.$challengePayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      participation_id: string
      user_id: string
      video_url: string | null
      image_url: string | null
      description: string
      challenge_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["participation"]>
    composites: {}
  }

  type participationGetPayload<S extends boolean | null | undefined | participationDefaultArgs> = $Result.GetResult<Prisma.$participationPayload, S>

  type participationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<participationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipationCountAggregateInputType | true
    }

  export interface participationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['participation'], meta: { name: 'participation' } }
    /**
     * Find zero or one Participation that matches the filter.
     * @param {participationFindUniqueArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends participationFindUniqueArgs>(args: SelectSubset<T, participationFindUniqueArgs<ExtArgs>>): Prisma__participationClient<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {participationFindUniqueOrThrowArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends participationFindUniqueOrThrowArgs>(args: SelectSubset<T, participationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__participationClient<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationFindFirstArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends participationFindFirstArgs>(args?: SelectSubset<T, participationFindFirstArgs<ExtArgs>>): Prisma__participationClient<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationFindFirstOrThrowArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends participationFindFirstOrThrowArgs>(args?: SelectSubset<T, participationFindFirstOrThrowArgs<ExtArgs>>): Prisma__participationClient<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participations
     * const participations = await prisma.participation.findMany()
     * 
     * // Get first 10 Participations
     * const participations = await prisma.participation.findMany({ take: 10 })
     * 
     * // Only select the `participation_id`
     * const participationWithParticipation_idOnly = await prisma.participation.findMany({ select: { participation_id: true } })
     * 
     */
    findMany<T extends participationFindManyArgs>(args?: SelectSubset<T, participationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participation.
     * @param {participationCreateArgs} args - Arguments to create a Participation.
     * @example
     * // Create one Participation
     * const Participation = await prisma.participation.create({
     *   data: {
     *     // ... data to create a Participation
     *   }
     * })
     * 
     */
    create<T extends participationCreateArgs>(args: SelectSubset<T, participationCreateArgs<ExtArgs>>): Prisma__participationClient<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participations.
     * @param {participationCreateManyArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participation = await prisma.participation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends participationCreateManyArgs>(args?: SelectSubset<T, participationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participations and returns the data saved in the database.
     * @param {participationCreateManyAndReturnArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participation = await prisma.participation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participations and only return the `participation_id`
     * const participationWithParticipation_idOnly = await prisma.participation.createManyAndReturn({
     *   select: { participation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends participationCreateManyAndReturnArgs>(args?: SelectSubset<T, participationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participation.
     * @param {participationDeleteArgs} args - Arguments to delete one Participation.
     * @example
     * // Delete one Participation
     * const Participation = await prisma.participation.delete({
     *   where: {
     *     // ... filter to delete one Participation
     *   }
     * })
     * 
     */
    delete<T extends participationDeleteArgs>(args: SelectSubset<T, participationDeleteArgs<ExtArgs>>): Prisma__participationClient<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participation.
     * @param {participationUpdateArgs} args - Arguments to update one Participation.
     * @example
     * // Update one Participation
     * const participation = await prisma.participation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends participationUpdateArgs>(args: SelectSubset<T, participationUpdateArgs<ExtArgs>>): Prisma__participationClient<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participations.
     * @param {participationDeleteManyArgs} args - Arguments to filter Participations to delete.
     * @example
     * // Delete a few Participations
     * const { count } = await prisma.participation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends participationDeleteManyArgs>(args?: SelectSubset<T, participationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participations
     * const participation = await prisma.participation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends participationUpdateManyArgs>(args: SelectSubset<T, participationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participations and returns the data updated in the database.
     * @param {participationUpdateManyAndReturnArgs} args - Arguments to update many Participations.
     * @example
     * // Update many Participations
     * const participation = await prisma.participation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participations and only return the `participation_id`
     * const participationWithParticipation_idOnly = await prisma.participation.updateManyAndReturn({
     *   select: { participation_id: true },
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
    updateManyAndReturn<T extends participationUpdateManyAndReturnArgs>(args: SelectSubset<T, participationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participation.
     * @param {participationUpsertArgs} args - Arguments to update or create a Participation.
     * @example
     * // Update or create a Participation
     * const participation = await prisma.participation.upsert({
     *   create: {
     *     // ... data to create a Participation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participation we want to update
     *   }
     * })
     */
    upsert<T extends participationUpsertArgs>(args: SelectSubset<T, participationUpsertArgs<ExtArgs>>): Prisma__participationClient<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationCountArgs} args - Arguments to filter Participations to count.
     * @example
     * // Count the number of Participations
     * const count = await prisma.participation.count({
     *   where: {
     *     // ... the filter for the Participations we want to count
     *   }
     * })
    **/
    count<T extends participationCountArgs>(
      args?: Subset<T, participationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipationAggregateArgs>(args: Subset<T, ParticipationAggregateArgs>): Prisma.PrismaPromise<GetParticipationAggregateType<T>>

    /**
     * Group by Participation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participationGroupByArgs} args - Group by arguments.
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
      T extends participationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: participationGroupByArgs['orderBy'] }
        : { orderBy?: participationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, participationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the participation model
   */
  readonly fields: participationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for participation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__participationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends challengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, challengeDefaultArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the participation model
   */
  interface participationFieldRefs {
    readonly participation_id: FieldRef<"participation", 'String'>
    readonly user_id: FieldRef<"participation", 'String'>
    readonly video_url: FieldRef<"participation", 'String'>
    readonly image_url: FieldRef<"participation", 'String'>
    readonly description: FieldRef<"participation", 'String'>
    readonly challenge_id: FieldRef<"participation", 'String'>
    readonly created_at: FieldRef<"participation", 'DateTime'>
    readonly updated_at: FieldRef<"participation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * participation findUnique
   */
  export type participationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    /**
     * Filter, which participation to fetch.
     */
    where: participationWhereUniqueInput
  }

  /**
   * participation findUniqueOrThrow
   */
  export type participationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    /**
     * Filter, which participation to fetch.
     */
    where: participationWhereUniqueInput
  }

  /**
   * participation findFirst
   */
  export type participationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    /**
     * Filter, which participation to fetch.
     */
    where?: participationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participations to fetch.
     */
    orderBy?: participationOrderByWithRelationInput | participationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participations.
     */
    cursor?: participationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participations.
     */
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * participation findFirstOrThrow
   */
  export type participationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    /**
     * Filter, which participation to fetch.
     */
    where?: participationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participations to fetch.
     */
    orderBy?: participationOrderByWithRelationInput | participationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participations.
     */
    cursor?: participationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participations.
     */
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * participation findMany
   */
  export type participationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    /**
     * Filter, which participations to fetch.
     */
    where?: participationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participations to fetch.
     */
    orderBy?: participationOrderByWithRelationInput | participationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing participations.
     */
    cursor?: participationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participations.
     */
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * participation create
   */
  export type participationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    /**
     * The data needed to create a participation.
     */
    data: XOR<participationCreateInput, participationUncheckedCreateInput>
  }

  /**
   * participation createMany
   */
  export type participationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many participations.
     */
    data: participationCreateManyInput | participationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * participation createManyAndReturn
   */
  export type participationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * The data used to create many participations.
     */
    data: participationCreateManyInput | participationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * participation update
   */
  export type participationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    /**
     * The data needed to update a participation.
     */
    data: XOR<participationUpdateInput, participationUncheckedUpdateInput>
    /**
     * Choose, which participation to update.
     */
    where: participationWhereUniqueInput
  }

  /**
   * participation updateMany
   */
  export type participationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update participations.
     */
    data: XOR<participationUpdateManyMutationInput, participationUncheckedUpdateManyInput>
    /**
     * Filter which participations to update
     */
    where?: participationWhereInput
    /**
     * Limit how many participations to update.
     */
    limit?: number
  }

  /**
   * participation updateManyAndReturn
   */
  export type participationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * The data used to update participations.
     */
    data: XOR<participationUpdateManyMutationInput, participationUncheckedUpdateManyInput>
    /**
     * Filter which participations to update
     */
    where?: participationWhereInput
    /**
     * Limit how many participations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * participation upsert
   */
  export type participationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    /**
     * The filter to search for the participation to update in case it exists.
     */
    where: participationWhereUniqueInput
    /**
     * In case the participation found by the `where` argument doesn't exist, create a new participation with this data.
     */
    create: XOR<participationCreateInput, participationUncheckedCreateInput>
    /**
     * In case the participation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<participationUpdateInput, participationUncheckedUpdateInput>
  }

  /**
   * participation delete
   */
  export type participationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    /**
     * Filter which participation to delete.
     */
    where: participationWhereUniqueInput
  }

  /**
   * participation deleteMany
   */
  export type participationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participations to delete
     */
    where?: participationWhereInput
    /**
     * Limit how many participations to delete.
     */
    limit?: number
  }

  /**
   * participation without action
   */
  export type participationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    pseudonym: string | null
    email: string | null
    password_hash: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    pseudonym: string | null
    email: string | null
    password_hash: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    pseudonym: number
    email: number
    password_hash: number
    avatar_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    user_id?: true
    pseudonym?: true
    email?: true
    password_hash?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    pseudonym?: true
    email?: true
    password_hash?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    pseudonym?: true
    email?: true
    password_hash?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    pseudonym?: boolean
    email?: boolean
    password_hash?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    participation?: boolean | user$participationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    pseudonym?: boolean
    email?: boolean
    password_hash?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    pseudonym?: boolean
    email?: boolean
    password_hash?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    user_id?: boolean
    pseudonym?: boolean
    email?: boolean
    password_hash?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "pseudonym" | "email" | "password_hash" | "avatar_url" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participation?: boolean | user$participationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      participation: Prisma.$participationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      pseudonym: string
      email: string
      password_hash: string
      avatar_url: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participation<T extends user$participationArgs<ExtArgs> = {}>(args?: Subset<T, user$participationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly user_id: FieldRef<"user", 'String'>
    readonly pseudonym: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password_hash: FieldRef<"user", 'String'>
    readonly avatar_url: FieldRef<"user", 'String'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.participation
   */
  export type user$participationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation
     */
    select?: participationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation
     */
    omit?: participationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participationInclude<ExtArgs> | null
    where?: participationWhereInput
    orderBy?: participationOrderByWithRelationInput | participationOrderByWithRelationInput[]
    cursor?: participationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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


  export const ChallengeScalarFieldEnum: {
    challenge_id: 'challenge_id',
    title: 'title',
    description: 'description',
    rules: 'rules',
    user_id: 'user_id',
    game_id: 'game_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const GameScalarFieldEnum: {
    game_id: 'game_id',
    title: 'title',
    category: 'category',
    description: 'description',
    release_date: 'release_date',
    image_url: 'image_url',
    platform: 'platform',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const ParticipationScalarFieldEnum: {
    participation_id: 'participation_id',
    user_id: 'user_id',
    video_url: 'video_url',
    image_url: 'image_url',
    description: 'description',
    challenge_id: 'challenge_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ParticipationScalarFieldEnum = (typeof ParticipationScalarFieldEnum)[keyof typeof ParticipationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    pseudonym: 'pseudonym',
    email: 'email',
    password_hash: 'password_hash',
    avatar_url: 'avatar_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type challengeWhereInput = {
    AND?: challengeWhereInput | challengeWhereInput[]
    OR?: challengeWhereInput[]
    NOT?: challengeWhereInput | challengeWhereInput[]
    challenge_id?: UuidFilter<"challenge"> | string
    title?: StringFilter<"challenge"> | string
    description?: StringFilter<"challenge"> | string
    rules?: StringFilter<"challenge"> | string
    user_id?: UuidFilter<"challenge"> | string
    game_id?: UuidFilter<"challenge"> | string
    created_at?: DateTimeNullableFilter<"challenge"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"challenge"> | Date | string | null
    game?: XOR<GameScalarRelationFilter, gameWhereInput>
    participation?: ParticipationListRelationFilter
  }

  export type challengeOrderByWithRelationInput = {
    challenge_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rules?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    game?: gameOrderByWithRelationInput
    participation?: participationOrderByRelationAggregateInput
  }

  export type challengeWhereUniqueInput = Prisma.AtLeast<{
    challenge_id?: string
    title?: string
    AND?: challengeWhereInput | challengeWhereInput[]
    OR?: challengeWhereInput[]
    NOT?: challengeWhereInput | challengeWhereInput[]
    description?: StringFilter<"challenge"> | string
    rules?: StringFilter<"challenge"> | string
    user_id?: UuidFilter<"challenge"> | string
    game_id?: UuidFilter<"challenge"> | string
    created_at?: DateTimeNullableFilter<"challenge"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"challenge"> | Date | string | null
    game?: XOR<GameScalarRelationFilter, gameWhereInput>
    participation?: ParticipationListRelationFilter
  }, "challenge_id" | "title">

  export type challengeOrderByWithAggregationInput = {
    challenge_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rules?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: challengeCountOrderByAggregateInput
    _max?: challengeMaxOrderByAggregateInput
    _min?: challengeMinOrderByAggregateInput
  }

  export type challengeScalarWhereWithAggregatesInput = {
    AND?: challengeScalarWhereWithAggregatesInput | challengeScalarWhereWithAggregatesInput[]
    OR?: challengeScalarWhereWithAggregatesInput[]
    NOT?: challengeScalarWhereWithAggregatesInput | challengeScalarWhereWithAggregatesInput[]
    challenge_id?: UuidWithAggregatesFilter<"challenge"> | string
    title?: StringWithAggregatesFilter<"challenge"> | string
    description?: StringWithAggregatesFilter<"challenge"> | string
    rules?: StringWithAggregatesFilter<"challenge"> | string
    user_id?: UuidWithAggregatesFilter<"challenge"> | string
    game_id?: UuidWithAggregatesFilter<"challenge"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"challenge"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"challenge"> | Date | string | null
  }

  export type gameWhereInput = {
    AND?: gameWhereInput | gameWhereInput[]
    OR?: gameWhereInput[]
    NOT?: gameWhereInput | gameWhereInput[]
    game_id?: UuidFilter<"game"> | string
    title?: StringFilter<"game"> | string
    category?: StringFilter<"game"> | string
    description?: StringFilter<"game"> | string
    release_date?: DateTimeFilter<"game"> | Date | string
    image_url?: StringNullableFilter<"game"> | string | null
    platform?: StringFilter<"game"> | string
    created_at?: DateTimeNullableFilter<"game"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"game"> | Date | string | null
    challenge?: ChallengeListRelationFilter
  }

  export type gameOrderByWithRelationInput = {
    game_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    release_date?: SortOrder
    image_url?: SortOrderInput | SortOrder
    platform?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    challenge?: challengeOrderByRelationAggregateInput
  }

  export type gameWhereUniqueInput = Prisma.AtLeast<{
    game_id?: string
    title?: string
    AND?: gameWhereInput | gameWhereInput[]
    OR?: gameWhereInput[]
    NOT?: gameWhereInput | gameWhereInput[]
    category?: StringFilter<"game"> | string
    description?: StringFilter<"game"> | string
    release_date?: DateTimeFilter<"game"> | Date | string
    image_url?: StringNullableFilter<"game"> | string | null
    platform?: StringFilter<"game"> | string
    created_at?: DateTimeNullableFilter<"game"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"game"> | Date | string | null
    challenge?: ChallengeListRelationFilter
  }, "game_id" | "title">

  export type gameOrderByWithAggregationInput = {
    game_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    release_date?: SortOrder
    image_url?: SortOrderInput | SortOrder
    platform?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: gameCountOrderByAggregateInput
    _max?: gameMaxOrderByAggregateInput
    _min?: gameMinOrderByAggregateInput
  }

  export type gameScalarWhereWithAggregatesInput = {
    AND?: gameScalarWhereWithAggregatesInput | gameScalarWhereWithAggregatesInput[]
    OR?: gameScalarWhereWithAggregatesInput[]
    NOT?: gameScalarWhereWithAggregatesInput | gameScalarWhereWithAggregatesInput[]
    game_id?: UuidWithAggregatesFilter<"game"> | string
    title?: StringWithAggregatesFilter<"game"> | string
    category?: StringWithAggregatesFilter<"game"> | string
    description?: StringWithAggregatesFilter<"game"> | string
    release_date?: DateTimeWithAggregatesFilter<"game"> | Date | string
    image_url?: StringNullableWithAggregatesFilter<"game"> | string | null
    platform?: StringWithAggregatesFilter<"game"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"game"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"game"> | Date | string | null
  }

  export type participationWhereInput = {
    AND?: participationWhereInput | participationWhereInput[]
    OR?: participationWhereInput[]
    NOT?: participationWhereInput | participationWhereInput[]
    participation_id?: UuidFilter<"participation"> | string
    user_id?: UuidFilter<"participation"> | string
    video_url?: StringNullableFilter<"participation"> | string | null
    image_url?: StringNullableFilter<"participation"> | string | null
    description?: StringFilter<"participation"> | string
    challenge_id?: UuidFilter<"participation"> | string
    created_at?: DateTimeNullableFilter<"participation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"participation"> | Date | string | null
    challenge?: XOR<ChallengeScalarRelationFilter, challengeWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type participationOrderByWithRelationInput = {
    participation_id?: SortOrder
    user_id?: SortOrder
    video_url?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrder
    challenge_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    challenge?: challengeOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type participationWhereUniqueInput = Prisma.AtLeast<{
    participation_id?: string
    AND?: participationWhereInput | participationWhereInput[]
    OR?: participationWhereInput[]
    NOT?: participationWhereInput | participationWhereInput[]
    user_id?: UuidFilter<"participation"> | string
    video_url?: StringNullableFilter<"participation"> | string | null
    image_url?: StringNullableFilter<"participation"> | string | null
    description?: StringFilter<"participation"> | string
    challenge_id?: UuidFilter<"participation"> | string
    created_at?: DateTimeNullableFilter<"participation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"participation"> | Date | string | null
    challenge?: XOR<ChallengeScalarRelationFilter, challengeWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "participation_id">

  export type participationOrderByWithAggregationInput = {
    participation_id?: SortOrder
    user_id?: SortOrder
    video_url?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrder
    challenge_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: participationCountOrderByAggregateInput
    _max?: participationMaxOrderByAggregateInput
    _min?: participationMinOrderByAggregateInput
  }

  export type participationScalarWhereWithAggregatesInput = {
    AND?: participationScalarWhereWithAggregatesInput | participationScalarWhereWithAggregatesInput[]
    OR?: participationScalarWhereWithAggregatesInput[]
    NOT?: participationScalarWhereWithAggregatesInput | participationScalarWhereWithAggregatesInput[]
    participation_id?: UuidWithAggregatesFilter<"participation"> | string
    user_id?: UuidWithAggregatesFilter<"participation"> | string
    video_url?: StringNullableWithAggregatesFilter<"participation"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"participation"> | string | null
    description?: StringWithAggregatesFilter<"participation"> | string
    challenge_id?: UuidWithAggregatesFilter<"participation"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"participation"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"participation"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_id?: UuidFilter<"user"> | string
    pseudonym?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password_hash?: StringFilter<"user"> | string
    avatar_url?: StringNullableFilter<"user"> | string | null
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    participation?: ParticipationListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    pseudonym?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    participation?: participationOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    pseudonym?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password_hash?: StringFilter<"user"> | string
    avatar_url?: StringNullableFilter<"user"> | string | null
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    participation?: ParticipationListRelationFilter
  }, "user_id" | "pseudonym" | "email">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    pseudonym?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"user"> | string
    pseudonym?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password_hash?: StringWithAggregatesFilter<"user"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"user"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type challengeCreateInput = {
    challenge_id: string
    title: string
    description: string
    rules: string
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    game: gameCreateNestedOneWithoutChallengeInput
    participation?: participationCreateNestedManyWithoutChallengeInput
  }

  export type challengeUncheckedCreateInput = {
    challenge_id: string
    title: string
    description: string
    rules: string
    user_id: string
    game_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    participation?: participationUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type challengeUpdateInput = {
    challenge_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game?: gameUpdateOneRequiredWithoutChallengeNestedInput
    participation?: participationUpdateManyWithoutChallengeNestedInput
  }

  export type challengeUncheckedUpdateInput = {
    challenge_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participation?: participationUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type challengeCreateManyInput = {
    challenge_id: string
    title: string
    description: string
    rules: string
    user_id: string
    game_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type challengeUpdateManyMutationInput = {
    challenge_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type challengeUncheckedUpdateManyInput = {
    challenge_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gameCreateInput = {
    game_id: string
    title: string
    category: string
    description: string
    release_date: Date | string
    image_url?: string | null
    platform: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    challenge?: challengeCreateNestedManyWithoutGameInput
  }

  export type gameUncheckedCreateInput = {
    game_id: string
    title: string
    category: string
    description: string
    release_date: Date | string
    image_url?: string | null
    platform: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    challenge?: challengeUncheckedCreateNestedManyWithoutGameInput
  }

  export type gameUpdateInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge?: challengeUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge?: challengeUncheckedUpdateManyWithoutGameNestedInput
  }

  export type gameCreateManyInput = {
    game_id: string
    title: string
    category: string
    description: string
    release_date: Date | string
    image_url?: string | null
    platform: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gameUpdateManyMutationInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gameUncheckedUpdateManyInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participationCreateInput = {
    participation_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    challenge: challengeCreateNestedOneWithoutParticipationInput
    user: userCreateNestedOneWithoutParticipationInput
  }

  export type participationUncheckedCreateInput = {
    participation_id: string
    user_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    challenge_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type participationUpdateInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge?: challengeUpdateOneRequiredWithoutParticipationNestedInput
    user?: userUpdateOneRequiredWithoutParticipationNestedInput
  }

  export type participationUncheckedUpdateInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    challenge_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participationCreateManyInput = {
    participation_id: string
    user_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    challenge_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type participationUpdateManyMutationInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participationUncheckedUpdateManyInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    challenge_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    participation?: participationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    participation?: participationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participation?: participationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participation?: participationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type GameScalarRelationFilter = {
    is?: gameWhereInput
    isNot?: gameWhereInput
  }

  export type ParticipationListRelationFilter = {
    every?: participationWhereInput
    some?: participationWhereInput
    none?: participationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type participationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type challengeCountOrderByAggregateInput = {
    challenge_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rules?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type challengeMaxOrderByAggregateInput = {
    challenge_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rules?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type challengeMinOrderByAggregateInput = {
    challenge_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rules?: SortOrder
    user_id?: SortOrder
    game_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type ChallengeListRelationFilter = {
    every?: challengeWhereInput
    some?: challengeWhereInput
    none?: challengeWhereInput
  }

  export type challengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gameCountOrderByAggregateInput = {
    game_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    release_date?: SortOrder
    image_url?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type gameMaxOrderByAggregateInput = {
    game_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    release_date?: SortOrder
    image_url?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type gameMinOrderByAggregateInput = {
    game_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    release_date?: SortOrder
    image_url?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type ChallengeScalarRelationFilter = {
    is?: challengeWhereInput
    isNot?: challengeWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type participationCountOrderByAggregateInput = {
    participation_id?: SortOrder
    user_id?: SortOrder
    video_url?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    challenge_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type participationMaxOrderByAggregateInput = {
    participation_id?: SortOrder
    user_id?: SortOrder
    video_url?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    challenge_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type participationMinOrderByAggregateInput = {
    participation_id?: SortOrder
    user_id?: SortOrder
    video_url?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    challenge_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    pseudonym?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    pseudonym?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    pseudonym?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type gameCreateNestedOneWithoutChallengeInput = {
    create?: XOR<gameCreateWithoutChallengeInput, gameUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: gameCreateOrConnectWithoutChallengeInput
    connect?: gameWhereUniqueInput
  }

  export type participationCreateNestedManyWithoutChallengeInput = {
    create?: XOR<participationCreateWithoutChallengeInput, participationUncheckedCreateWithoutChallengeInput> | participationCreateWithoutChallengeInput[] | participationUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: participationCreateOrConnectWithoutChallengeInput | participationCreateOrConnectWithoutChallengeInput[]
    createMany?: participationCreateManyChallengeInputEnvelope
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
  }

  export type participationUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<participationCreateWithoutChallengeInput, participationUncheckedCreateWithoutChallengeInput> | participationCreateWithoutChallengeInput[] | participationUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: participationCreateOrConnectWithoutChallengeInput | participationCreateOrConnectWithoutChallengeInput[]
    createMany?: participationCreateManyChallengeInputEnvelope
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type gameUpdateOneRequiredWithoutChallengeNestedInput = {
    create?: XOR<gameCreateWithoutChallengeInput, gameUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: gameCreateOrConnectWithoutChallengeInput
    upsert?: gameUpsertWithoutChallengeInput
    connect?: gameWhereUniqueInput
    update?: XOR<XOR<gameUpdateToOneWithWhereWithoutChallengeInput, gameUpdateWithoutChallengeInput>, gameUncheckedUpdateWithoutChallengeInput>
  }

  export type participationUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<participationCreateWithoutChallengeInput, participationUncheckedCreateWithoutChallengeInput> | participationCreateWithoutChallengeInput[] | participationUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: participationCreateOrConnectWithoutChallengeInput | participationCreateOrConnectWithoutChallengeInput[]
    upsert?: participationUpsertWithWhereUniqueWithoutChallengeInput | participationUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: participationCreateManyChallengeInputEnvelope
    set?: participationWhereUniqueInput | participationWhereUniqueInput[]
    disconnect?: participationWhereUniqueInput | participationWhereUniqueInput[]
    delete?: participationWhereUniqueInput | participationWhereUniqueInput[]
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
    update?: participationUpdateWithWhereUniqueWithoutChallengeInput | participationUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: participationUpdateManyWithWhereWithoutChallengeInput | participationUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: participationScalarWhereInput | participationScalarWhereInput[]
  }

  export type participationUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<participationCreateWithoutChallengeInput, participationUncheckedCreateWithoutChallengeInput> | participationCreateWithoutChallengeInput[] | participationUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: participationCreateOrConnectWithoutChallengeInput | participationCreateOrConnectWithoutChallengeInput[]
    upsert?: participationUpsertWithWhereUniqueWithoutChallengeInput | participationUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: participationCreateManyChallengeInputEnvelope
    set?: participationWhereUniqueInput | participationWhereUniqueInput[]
    disconnect?: participationWhereUniqueInput | participationWhereUniqueInput[]
    delete?: participationWhereUniqueInput | participationWhereUniqueInput[]
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
    update?: participationUpdateWithWhereUniqueWithoutChallengeInput | participationUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: participationUpdateManyWithWhereWithoutChallengeInput | participationUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: participationScalarWhereInput | participationScalarWhereInput[]
  }

  export type challengeCreateNestedManyWithoutGameInput = {
    create?: XOR<challengeCreateWithoutGameInput, challengeUncheckedCreateWithoutGameInput> | challengeCreateWithoutGameInput[] | challengeUncheckedCreateWithoutGameInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutGameInput | challengeCreateOrConnectWithoutGameInput[]
    createMany?: challengeCreateManyGameInputEnvelope
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
  }

  export type challengeUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<challengeCreateWithoutGameInput, challengeUncheckedCreateWithoutGameInput> | challengeCreateWithoutGameInput[] | challengeUncheckedCreateWithoutGameInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutGameInput | challengeCreateOrConnectWithoutGameInput[]
    createMany?: challengeCreateManyGameInputEnvelope
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type challengeUpdateManyWithoutGameNestedInput = {
    create?: XOR<challengeCreateWithoutGameInput, challengeUncheckedCreateWithoutGameInput> | challengeCreateWithoutGameInput[] | challengeUncheckedCreateWithoutGameInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutGameInput | challengeCreateOrConnectWithoutGameInput[]
    upsert?: challengeUpsertWithWhereUniqueWithoutGameInput | challengeUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: challengeCreateManyGameInputEnvelope
    set?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    disconnect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    delete?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    update?: challengeUpdateWithWhereUniqueWithoutGameInput | challengeUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: challengeUpdateManyWithWhereWithoutGameInput | challengeUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: challengeScalarWhereInput | challengeScalarWhereInput[]
  }

  export type challengeUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<challengeCreateWithoutGameInput, challengeUncheckedCreateWithoutGameInput> | challengeCreateWithoutGameInput[] | challengeUncheckedCreateWithoutGameInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutGameInput | challengeCreateOrConnectWithoutGameInput[]
    upsert?: challengeUpsertWithWhereUniqueWithoutGameInput | challengeUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: challengeCreateManyGameInputEnvelope
    set?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    disconnect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    delete?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    update?: challengeUpdateWithWhereUniqueWithoutGameInput | challengeUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: challengeUpdateManyWithWhereWithoutGameInput | challengeUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: challengeScalarWhereInput | challengeScalarWhereInput[]
  }

  export type challengeCreateNestedOneWithoutParticipationInput = {
    create?: XOR<challengeCreateWithoutParticipationInput, challengeUncheckedCreateWithoutParticipationInput>
    connectOrCreate?: challengeCreateOrConnectWithoutParticipationInput
    connect?: challengeWhereUniqueInput
  }

  export type userCreateNestedOneWithoutParticipationInput = {
    create?: XOR<userCreateWithoutParticipationInput, userUncheckedCreateWithoutParticipationInput>
    connectOrCreate?: userCreateOrConnectWithoutParticipationInput
    connect?: userWhereUniqueInput
  }

  export type challengeUpdateOneRequiredWithoutParticipationNestedInput = {
    create?: XOR<challengeCreateWithoutParticipationInput, challengeUncheckedCreateWithoutParticipationInput>
    connectOrCreate?: challengeCreateOrConnectWithoutParticipationInput
    upsert?: challengeUpsertWithoutParticipationInput
    connect?: challengeWhereUniqueInput
    update?: XOR<XOR<challengeUpdateToOneWithWhereWithoutParticipationInput, challengeUpdateWithoutParticipationInput>, challengeUncheckedUpdateWithoutParticipationInput>
  }

  export type userUpdateOneRequiredWithoutParticipationNestedInput = {
    create?: XOR<userCreateWithoutParticipationInput, userUncheckedCreateWithoutParticipationInput>
    connectOrCreate?: userCreateOrConnectWithoutParticipationInput
    upsert?: userUpsertWithoutParticipationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutParticipationInput, userUpdateWithoutParticipationInput>, userUncheckedUpdateWithoutParticipationInput>
  }

  export type participationCreateNestedManyWithoutUserInput = {
    create?: XOR<participationCreateWithoutUserInput, participationUncheckedCreateWithoutUserInput> | participationCreateWithoutUserInput[] | participationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participationCreateOrConnectWithoutUserInput | participationCreateOrConnectWithoutUserInput[]
    createMany?: participationCreateManyUserInputEnvelope
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
  }

  export type participationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<participationCreateWithoutUserInput, participationUncheckedCreateWithoutUserInput> | participationCreateWithoutUserInput[] | participationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participationCreateOrConnectWithoutUserInput | participationCreateOrConnectWithoutUserInput[]
    createMany?: participationCreateManyUserInputEnvelope
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
  }

  export type participationUpdateManyWithoutUserNestedInput = {
    create?: XOR<participationCreateWithoutUserInput, participationUncheckedCreateWithoutUserInput> | participationCreateWithoutUserInput[] | participationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participationCreateOrConnectWithoutUserInput | participationCreateOrConnectWithoutUserInput[]
    upsert?: participationUpsertWithWhereUniqueWithoutUserInput | participationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: participationCreateManyUserInputEnvelope
    set?: participationWhereUniqueInput | participationWhereUniqueInput[]
    disconnect?: participationWhereUniqueInput | participationWhereUniqueInput[]
    delete?: participationWhereUniqueInput | participationWhereUniqueInput[]
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
    update?: participationUpdateWithWhereUniqueWithoutUserInput | participationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: participationUpdateManyWithWhereWithoutUserInput | participationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: participationScalarWhereInput | participationScalarWhereInput[]
  }

  export type participationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<participationCreateWithoutUserInput, participationUncheckedCreateWithoutUserInput> | participationCreateWithoutUserInput[] | participationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participationCreateOrConnectWithoutUserInput | participationCreateOrConnectWithoutUserInput[]
    upsert?: participationUpsertWithWhereUniqueWithoutUserInput | participationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: participationCreateManyUserInputEnvelope
    set?: participationWhereUniqueInput | participationWhereUniqueInput[]
    disconnect?: participationWhereUniqueInput | participationWhereUniqueInput[]
    delete?: participationWhereUniqueInput | participationWhereUniqueInput[]
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
    update?: participationUpdateWithWhereUniqueWithoutUserInput | participationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: participationUpdateManyWithWhereWithoutUserInput | participationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: participationScalarWhereInput | participationScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type gameCreateWithoutChallengeInput = {
    game_id: string
    title: string
    category: string
    description: string
    release_date: Date | string
    image_url?: string | null
    platform: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gameUncheckedCreateWithoutChallengeInput = {
    game_id: string
    title: string
    category: string
    description: string
    release_date: Date | string
    image_url?: string | null
    platform: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gameCreateOrConnectWithoutChallengeInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutChallengeInput, gameUncheckedCreateWithoutChallengeInput>
  }

  export type participationCreateWithoutChallengeInput = {
    participation_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: userCreateNestedOneWithoutParticipationInput
  }

  export type participationUncheckedCreateWithoutChallengeInput = {
    participation_id: string
    user_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type participationCreateOrConnectWithoutChallengeInput = {
    where: participationWhereUniqueInput
    create: XOR<participationCreateWithoutChallengeInput, participationUncheckedCreateWithoutChallengeInput>
  }

  export type participationCreateManyChallengeInputEnvelope = {
    data: participationCreateManyChallengeInput | participationCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type gameUpsertWithoutChallengeInput = {
    update: XOR<gameUpdateWithoutChallengeInput, gameUncheckedUpdateWithoutChallengeInput>
    create: XOR<gameCreateWithoutChallengeInput, gameUncheckedCreateWithoutChallengeInput>
    where?: gameWhereInput
  }

  export type gameUpdateToOneWithWhereWithoutChallengeInput = {
    where?: gameWhereInput
    data: XOR<gameUpdateWithoutChallengeInput, gameUncheckedUpdateWithoutChallengeInput>
  }

  export type gameUpdateWithoutChallengeInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gameUncheckedUpdateWithoutChallengeInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participationUpsertWithWhereUniqueWithoutChallengeInput = {
    where: participationWhereUniqueInput
    update: XOR<participationUpdateWithoutChallengeInput, participationUncheckedUpdateWithoutChallengeInput>
    create: XOR<participationCreateWithoutChallengeInput, participationUncheckedCreateWithoutChallengeInput>
  }

  export type participationUpdateWithWhereUniqueWithoutChallengeInput = {
    where: participationWhereUniqueInput
    data: XOR<participationUpdateWithoutChallengeInput, participationUncheckedUpdateWithoutChallengeInput>
  }

  export type participationUpdateManyWithWhereWithoutChallengeInput = {
    where: participationScalarWhereInput
    data: XOR<participationUpdateManyMutationInput, participationUncheckedUpdateManyWithoutChallengeInput>
  }

  export type participationScalarWhereInput = {
    AND?: participationScalarWhereInput | participationScalarWhereInput[]
    OR?: participationScalarWhereInput[]
    NOT?: participationScalarWhereInput | participationScalarWhereInput[]
    participation_id?: UuidFilter<"participation"> | string
    user_id?: UuidFilter<"participation"> | string
    video_url?: StringNullableFilter<"participation"> | string | null
    image_url?: StringNullableFilter<"participation"> | string | null
    description?: StringFilter<"participation"> | string
    challenge_id?: UuidFilter<"participation"> | string
    created_at?: DateTimeNullableFilter<"participation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"participation"> | Date | string | null
  }

  export type challengeCreateWithoutGameInput = {
    challenge_id: string
    title: string
    description: string
    rules: string
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    participation?: participationCreateNestedManyWithoutChallengeInput
  }

  export type challengeUncheckedCreateWithoutGameInput = {
    challenge_id: string
    title: string
    description: string
    rules: string
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    participation?: participationUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type challengeCreateOrConnectWithoutGameInput = {
    where: challengeWhereUniqueInput
    create: XOR<challengeCreateWithoutGameInput, challengeUncheckedCreateWithoutGameInput>
  }

  export type challengeCreateManyGameInputEnvelope = {
    data: challengeCreateManyGameInput | challengeCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type challengeUpsertWithWhereUniqueWithoutGameInput = {
    where: challengeWhereUniqueInput
    update: XOR<challengeUpdateWithoutGameInput, challengeUncheckedUpdateWithoutGameInput>
    create: XOR<challengeCreateWithoutGameInput, challengeUncheckedCreateWithoutGameInput>
  }

  export type challengeUpdateWithWhereUniqueWithoutGameInput = {
    where: challengeWhereUniqueInput
    data: XOR<challengeUpdateWithoutGameInput, challengeUncheckedUpdateWithoutGameInput>
  }

  export type challengeUpdateManyWithWhereWithoutGameInput = {
    where: challengeScalarWhereInput
    data: XOR<challengeUpdateManyMutationInput, challengeUncheckedUpdateManyWithoutGameInput>
  }

  export type challengeScalarWhereInput = {
    AND?: challengeScalarWhereInput | challengeScalarWhereInput[]
    OR?: challengeScalarWhereInput[]
    NOT?: challengeScalarWhereInput | challengeScalarWhereInput[]
    challenge_id?: UuidFilter<"challenge"> | string
    title?: StringFilter<"challenge"> | string
    description?: StringFilter<"challenge"> | string
    rules?: StringFilter<"challenge"> | string
    user_id?: UuidFilter<"challenge"> | string
    game_id?: UuidFilter<"challenge"> | string
    created_at?: DateTimeNullableFilter<"challenge"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"challenge"> | Date | string | null
  }

  export type challengeCreateWithoutParticipationInput = {
    challenge_id: string
    title: string
    description: string
    rules: string
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    game: gameCreateNestedOneWithoutChallengeInput
  }

  export type challengeUncheckedCreateWithoutParticipationInput = {
    challenge_id: string
    title: string
    description: string
    rules: string
    user_id: string
    game_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type challengeCreateOrConnectWithoutParticipationInput = {
    where: challengeWhereUniqueInput
    create: XOR<challengeCreateWithoutParticipationInput, challengeUncheckedCreateWithoutParticipationInput>
  }

  export type userCreateWithoutParticipationInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUncheckedCreateWithoutParticipationInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userCreateOrConnectWithoutParticipationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutParticipationInput, userUncheckedCreateWithoutParticipationInput>
  }

  export type challengeUpsertWithoutParticipationInput = {
    update: XOR<challengeUpdateWithoutParticipationInput, challengeUncheckedUpdateWithoutParticipationInput>
    create: XOR<challengeCreateWithoutParticipationInput, challengeUncheckedCreateWithoutParticipationInput>
    where?: challengeWhereInput
  }

  export type challengeUpdateToOneWithWhereWithoutParticipationInput = {
    where?: challengeWhereInput
    data: XOR<challengeUpdateWithoutParticipationInput, challengeUncheckedUpdateWithoutParticipationInput>
  }

  export type challengeUpdateWithoutParticipationInput = {
    challenge_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game?: gameUpdateOneRequiredWithoutChallengeNestedInput
  }

  export type challengeUncheckedUpdateWithoutParticipationInput = {
    challenge_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUpsertWithoutParticipationInput = {
    update: XOR<userUpdateWithoutParticipationInput, userUncheckedUpdateWithoutParticipationInput>
    create: XOR<userCreateWithoutParticipationInput, userUncheckedCreateWithoutParticipationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutParticipationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutParticipationInput, userUncheckedUpdateWithoutParticipationInput>
  }

  export type userUpdateWithoutParticipationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateWithoutParticipationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participationCreateWithoutUserInput = {
    participation_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    challenge: challengeCreateNestedOneWithoutParticipationInput
  }

  export type participationUncheckedCreateWithoutUserInput = {
    participation_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    challenge_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type participationCreateOrConnectWithoutUserInput = {
    where: participationWhereUniqueInput
    create: XOR<participationCreateWithoutUserInput, participationUncheckedCreateWithoutUserInput>
  }

  export type participationCreateManyUserInputEnvelope = {
    data: participationCreateManyUserInput | participationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type participationUpsertWithWhereUniqueWithoutUserInput = {
    where: participationWhereUniqueInput
    update: XOR<participationUpdateWithoutUserInput, participationUncheckedUpdateWithoutUserInput>
    create: XOR<participationCreateWithoutUserInput, participationUncheckedCreateWithoutUserInput>
  }

  export type participationUpdateWithWhereUniqueWithoutUserInput = {
    where: participationWhereUniqueInput
    data: XOR<participationUpdateWithoutUserInput, participationUncheckedUpdateWithoutUserInput>
  }

  export type participationUpdateManyWithWhereWithoutUserInput = {
    where: participationScalarWhereInput
    data: XOR<participationUpdateManyMutationInput, participationUncheckedUpdateManyWithoutUserInput>
  }

  export type participationCreateManyChallengeInput = {
    participation_id: string
    user_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type participationUpdateWithoutChallengeInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutParticipationNestedInput
  }

  export type participationUncheckedUpdateWithoutChallengeInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participationUncheckedUpdateManyWithoutChallengeInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type challengeCreateManyGameInput = {
    challenge_id: string
    title: string
    description: string
    rules: string
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type challengeUpdateWithoutGameInput = {
    challenge_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participation?: participationUpdateManyWithoutChallengeNestedInput
  }

  export type challengeUncheckedUpdateWithoutGameInput = {
    challenge_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participation?: participationUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type challengeUncheckedUpdateManyWithoutGameInput = {
    challenge_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participationCreateManyUserInput = {
    participation_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    challenge_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type participationUpdateWithoutUserInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge?: challengeUpdateOneRequiredWithoutParticipationNestedInput
  }

  export type participationUncheckedUpdateWithoutUserInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    challenge_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participationUncheckedUpdateManyWithoutUserInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    challenge_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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