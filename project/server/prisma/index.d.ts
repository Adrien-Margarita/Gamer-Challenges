
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
 * Model participation_vote
 * 
 */
export type participation_vote = $Result.DefaultSelection<Prisma.$participation_votePayload>
/**
 * Model challenge_vote
 * 
 */
export type challenge_vote = $Result.DefaultSelection<Prisma.$challenge_votePayload>
/**
 * Model password_reset_token
 * 
 */
export type password_reset_token = $Result.DefaultSelection<Prisma.$password_reset_tokenPayload>
/**
 * Model user_role
 * 
 */
export type user_role = $Result.DefaultSelection<Prisma.$user_rolePayload>

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

  /**
   * `prisma.participation_vote`: Exposes CRUD operations for the **participation_vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participation_votes
    * const participation_votes = await prisma.participation_vote.findMany()
    * ```
    */
  get participation_vote(): Prisma.participation_voteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge_vote`: Exposes CRUD operations for the **challenge_vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenge_votes
    * const challenge_votes = await prisma.challenge_vote.findMany()
    * ```
    */
  get challenge_vote(): Prisma.challenge_voteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_reset_token`: Exposes CRUD operations for the **password_reset_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_reset_tokens
    * const password_reset_tokens = await prisma.password_reset_token.findMany()
    * ```
    */
  get password_reset_token(): Prisma.password_reset_tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_role`: Exposes CRUD operations for the **user_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_role.findMany()
    * ```
    */
  get user_role(): Prisma.user_roleDelegate<ExtArgs, ClientOptions>;
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
    user: 'user',
    participation_vote: 'participation_vote',
    challenge_vote: 'challenge_vote',
    password_reset_token: 'password_reset_token',
    user_role: 'user_role'
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
      modelProps: "challenge" | "game" | "participation" | "user" | "participation_vote" | "challenge_vote" | "password_reset_token" | "user_role"
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
      participation_vote: {
        payload: Prisma.$participation_votePayload<ExtArgs>
        fields: Prisma.participation_voteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.participation_voteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.participation_voteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload>
          }
          findFirst: {
            args: Prisma.participation_voteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.participation_voteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload>
          }
          findMany: {
            args: Prisma.participation_voteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload>[]
          }
          create: {
            args: Prisma.participation_voteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload>
          }
          createMany: {
            args: Prisma.participation_voteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.participation_voteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload>[]
          }
          delete: {
            args: Prisma.participation_voteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload>
          }
          update: {
            args: Prisma.participation_voteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload>
          }
          deleteMany: {
            args: Prisma.participation_voteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.participation_voteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.participation_voteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload>[]
          }
          upsert: {
            args: Prisma.participation_voteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participation_votePayload>
          }
          aggregate: {
            args: Prisma.Participation_voteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipation_vote>
          }
          groupBy: {
            args: Prisma.participation_voteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Participation_voteGroupByOutputType>[]
          }
          count: {
            args: Prisma.participation_voteCountArgs<ExtArgs>
            result: $Utils.Optional<Participation_voteCountAggregateOutputType> | number
          }
        }
      }
      challenge_vote: {
        payload: Prisma.$challenge_votePayload<ExtArgs>
        fields: Prisma.challenge_voteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.challenge_voteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.challenge_voteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload>
          }
          findFirst: {
            args: Prisma.challenge_voteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.challenge_voteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload>
          }
          findMany: {
            args: Prisma.challenge_voteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload>[]
          }
          create: {
            args: Prisma.challenge_voteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload>
          }
          createMany: {
            args: Prisma.challenge_voteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.challenge_voteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload>[]
          }
          delete: {
            args: Prisma.challenge_voteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload>
          }
          update: {
            args: Prisma.challenge_voteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload>
          }
          deleteMany: {
            args: Prisma.challenge_voteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.challenge_voteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.challenge_voteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload>[]
          }
          upsert: {
            args: Prisma.challenge_voteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_votePayload>
          }
          aggregate: {
            args: Prisma.Challenge_voteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge_vote>
          }
          groupBy: {
            args: Prisma.challenge_voteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Challenge_voteGroupByOutputType>[]
          }
          count: {
            args: Prisma.challenge_voteCountArgs<ExtArgs>
            result: $Utils.Optional<Challenge_voteCountAggregateOutputType> | number
          }
        }
      }
      password_reset_token: {
        payload: Prisma.$password_reset_tokenPayload<ExtArgs>
        fields: Prisma.password_reset_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_reset_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_reset_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          findFirst: {
            args: Prisma.password_reset_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_reset_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          findMany: {
            args: Prisma.password_reset_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>[]
          }
          create: {
            args: Prisma.password_reset_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          createMany: {
            args: Prisma.password_reset_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.password_reset_tokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>[]
          }
          delete: {
            args: Prisma.password_reset_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          update: {
            args: Prisma.password_reset_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          deleteMany: {
            args: Prisma.password_reset_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.password_reset_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.password_reset_tokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>[]
          }
          upsert: {
            args: Prisma.password_reset_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokenPayload>
          }
          aggregate: {
            args: Prisma.Password_reset_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword_reset_token>
          }
          groupBy: {
            args: Prisma.password_reset_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_reset_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokenCountAggregateOutputType> | number
          }
        }
      }
      user_role: {
        payload: Prisma.$user_rolePayload<ExtArgs>
        fields: Prisma.user_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findFirst: {
            args: Prisma.user_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findMany: {
            args: Prisma.user_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          create: {
            args: Prisma.user_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          createMany: {
            args: Prisma.user_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          delete: {
            args: Prisma.user_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          update: {
            args: Prisma.user_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          deleteMany: {
            args: Prisma.user_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          upsert: {
            args: Prisma.user_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          aggregate: {
            args: Prisma.User_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_role>
          }
          groupBy: {
            args: Prisma.user_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_roleCountArgs<ExtArgs>
            result: $Utils.Optional<User_roleCountAggregateOutputType> | number
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
    participation_vote?: participation_voteOmit
    challenge_vote?: challenge_voteOmit
    password_reset_token?: password_reset_tokenOmit
    user_role?: user_roleOmit
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
    challenge_vote: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participation?: boolean | ChallengeCountOutputTypeCountParticipationArgs
    challenge_vote?: boolean | ChallengeCountOutputTypeCountChallenge_voteArgs
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
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountChallenge_voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challenge_voteWhereInput
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
   * Count Type ParticipationCountOutputType
   */

  export type ParticipationCountOutputType = {
    participation_vote: number
  }

  export type ParticipationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participation_vote?: boolean | ParticipationCountOutputTypeCountParticipation_voteArgs
  }

  // Custom InputTypes
  /**
   * ParticipationCountOutputType without action
   */
  export type ParticipationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationCountOutputType
     */
    select?: ParticipationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipationCountOutputType without action
   */
  export type ParticipationCountOutputTypeCountParticipation_voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participation_voteWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    participation: number
    challenge_vote: number
    participation_vote: number
    password_reset_token: number
    user_role: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participation?: boolean | UserCountOutputTypeCountParticipationArgs
    challenge_vote?: boolean | UserCountOutputTypeCountChallenge_voteArgs
    participation_vote?: boolean | UserCountOutputTypeCountParticipation_voteArgs
    password_reset_token?: boolean | UserCountOutputTypeCountPassword_reset_tokenArgs
    user_role?: boolean | UserCountOutputTypeCountUser_roleArgs
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallenge_voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challenge_voteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipation_voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participation_voteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPassword_reset_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
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
    challenge_vote?: boolean | challenge$challenge_voteArgs<ExtArgs>
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
    challenge_vote?: boolean | challenge$challenge_voteArgs<ExtArgs>
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
      challenge_vote: Prisma.$challenge_votePayload<ExtArgs>[]
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
    challenge_vote<T extends challenge$challenge_voteArgs<ExtArgs> = {}>(args?: Subset<T, challenge$challenge_voteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * challenge.challenge_vote
   */
  export type challenge$challenge_voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    where?: challenge_voteWhereInput
    orderBy?: challenge_voteOrderByWithRelationInput | challenge_voteOrderByWithRelationInput[]
    cursor?: challenge_voteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Challenge_voteScalarFieldEnum | Challenge_voteScalarFieldEnum[]
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
    participation_vote?: boolean | participation$participation_voteArgs<ExtArgs>
    _count?: boolean | ParticipationCountOutputTypeDefaultArgs<ExtArgs>
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
    participation_vote?: boolean | participation$participation_voteArgs<ExtArgs>
    _count?: boolean | ParticipationCountOutputTypeDefaultArgs<ExtArgs>
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
      participation_vote: Prisma.$participation_votePayload<ExtArgs>[]
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
    participation_vote<T extends participation$participation_voteArgs<ExtArgs> = {}>(args?: Subset<T, participation$participation_voteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * participation.participation_vote
   */
  export type participation$participation_voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    where?: participation_voteWhereInput
    orderBy?: participation_voteOrderByWithRelationInput | participation_voteOrderByWithRelationInput[]
    cursor?: participation_voteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Participation_voteScalarFieldEnum | Participation_voteScalarFieldEnum[]
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
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    pseudonym: string | null
    email: string | null
    password_hash: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    role_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    pseudonym: string | null
    email: string | null
    password_hash: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    role_id: number | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    pseudonym: number
    email: number
    password_hash: number
    avatar_url: number
    created_at: number
    updated_at: number
    role_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    pseudonym?: true
    email?: true
    password_hash?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    role_id?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    pseudonym?: true
    email?: true
    password_hash?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    role_id?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    pseudonym?: true
    email?: true
    password_hash?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    role_id?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
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
    role_id: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    role_id?: boolean
    participation?: boolean | user$participationArgs<ExtArgs>
    challenge_vote?: boolean | user$challenge_voteArgs<ExtArgs>
    participation_vote?: boolean | user$participation_voteArgs<ExtArgs>
    password_reset_token?: boolean | user$password_reset_tokenArgs<ExtArgs>
    user_role?: boolean | user$user_roleArgs<ExtArgs>
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
    role_id?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    pseudonym?: boolean
    email?: boolean
    password_hash?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    user_id?: boolean
    pseudonym?: boolean
    email?: boolean
    password_hash?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "pseudonym" | "email" | "password_hash" | "avatar_url" | "created_at" | "updated_at" | "role_id", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participation?: boolean | user$participationArgs<ExtArgs>
    challenge_vote?: boolean | user$challenge_voteArgs<ExtArgs>
    participation_vote?: boolean | user$participation_voteArgs<ExtArgs>
    password_reset_token?: boolean | user$password_reset_tokenArgs<ExtArgs>
    user_role?: boolean | user$user_roleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      participation: Prisma.$participationPayload<ExtArgs>[]
      challenge_vote: Prisma.$challenge_votePayload<ExtArgs>[]
      participation_vote: Prisma.$participation_votePayload<ExtArgs>[]
      password_reset_token: Prisma.$password_reset_tokenPayload<ExtArgs>[]
      user_role: Prisma.$user_rolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      pseudonym: string
      email: string
      password_hash: string
      avatar_url: string | null
      created_at: Date | null
      updated_at: Date | null
      role_id: number
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
    challenge_vote<T extends user$challenge_voteArgs<ExtArgs> = {}>(args?: Subset<T, user$challenge_voteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participation_vote<T extends user$participation_voteArgs<ExtArgs> = {}>(args?: Subset<T, user$participation_voteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    password_reset_token<T extends user$password_reset_tokenArgs<ExtArgs> = {}>(args?: Subset<T, user$password_reset_tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_role<T extends user$user_roleArgs<ExtArgs> = {}>(args?: Subset<T, user$user_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly role_id: FieldRef<"user", 'Int'>
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
   * user.challenge_vote
   */
  export type user$challenge_voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    where?: challenge_voteWhereInput
    orderBy?: challenge_voteOrderByWithRelationInput | challenge_voteOrderByWithRelationInput[]
    cursor?: challenge_voteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Challenge_voteScalarFieldEnum | Challenge_voteScalarFieldEnum[]
  }

  /**
   * user.participation_vote
   */
  export type user$participation_voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    where?: participation_voteWhereInput
    orderBy?: participation_voteOrderByWithRelationInput | participation_voteOrderByWithRelationInput[]
    cursor?: participation_voteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Participation_voteScalarFieldEnum | Participation_voteScalarFieldEnum[]
  }

  /**
   * user.password_reset_token
   */
  export type user$password_reset_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
    where?: password_reset_tokenWhereInput
    orderBy?: password_reset_tokenOrderByWithRelationInput | password_reset_tokenOrderByWithRelationInput[]
    cursor?: password_reset_tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Password_reset_tokenScalarFieldEnum | Password_reset_tokenScalarFieldEnum[]
  }

  /**
   * user.user_role
   */
  export type user$user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    cursor?: user_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
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
   * Model participation_vote
   */

  export type AggregateParticipation_vote = {
    _count: Participation_voteCountAggregateOutputType | null
    _min: Participation_voteMinAggregateOutputType | null
    _max: Participation_voteMaxAggregateOutputType | null
  }

  export type Participation_voteMinAggregateOutputType = {
    participation_vote_id: string | null
    user_id: string | null
    participation_id: string | null
  }

  export type Participation_voteMaxAggregateOutputType = {
    participation_vote_id: string | null
    user_id: string | null
    participation_id: string | null
  }

  export type Participation_voteCountAggregateOutputType = {
    participation_vote_id: number
    user_id: number
    participation_id: number
    _all: number
  }


  export type Participation_voteMinAggregateInputType = {
    participation_vote_id?: true
    user_id?: true
    participation_id?: true
  }

  export type Participation_voteMaxAggregateInputType = {
    participation_vote_id?: true
    user_id?: true
    participation_id?: true
  }

  export type Participation_voteCountAggregateInputType = {
    participation_vote_id?: true
    user_id?: true
    participation_id?: true
    _all?: true
  }

  export type Participation_voteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participation_vote to aggregate.
     */
    where?: participation_voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participation_votes to fetch.
     */
    orderBy?: participation_voteOrderByWithRelationInput | participation_voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: participation_voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participation_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participation_votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned participation_votes
    **/
    _count?: true | Participation_voteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Participation_voteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Participation_voteMaxAggregateInputType
  }

  export type GetParticipation_voteAggregateType<T extends Participation_voteAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipation_vote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipation_vote[P]>
      : GetScalarType<T[P], AggregateParticipation_vote[P]>
  }




  export type participation_voteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participation_voteWhereInput
    orderBy?: participation_voteOrderByWithAggregationInput | participation_voteOrderByWithAggregationInput[]
    by: Participation_voteScalarFieldEnum[] | Participation_voteScalarFieldEnum
    having?: participation_voteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Participation_voteCountAggregateInputType | true
    _min?: Participation_voteMinAggregateInputType
    _max?: Participation_voteMaxAggregateInputType
  }

  export type Participation_voteGroupByOutputType = {
    participation_vote_id: string
    user_id: string
    participation_id: string
    _count: Participation_voteCountAggregateOutputType | null
    _min: Participation_voteMinAggregateOutputType | null
    _max: Participation_voteMaxAggregateOutputType | null
  }

  type GetParticipation_voteGroupByPayload<T extends participation_voteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Participation_voteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Participation_voteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Participation_voteGroupByOutputType[P]>
            : GetScalarType<T[P], Participation_voteGroupByOutputType[P]>
        }
      >
    >


  export type participation_voteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participation_vote_id?: boolean
    user_id?: boolean
    participation_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    participation?: boolean | participationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation_vote"]>

  export type participation_voteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participation_vote_id?: boolean
    user_id?: boolean
    participation_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    participation?: boolean | participationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation_vote"]>

  export type participation_voteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participation_vote_id?: boolean
    user_id?: boolean
    participation_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    participation?: boolean | participationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation_vote"]>

  export type participation_voteSelectScalar = {
    participation_vote_id?: boolean
    user_id?: boolean
    participation_id?: boolean
  }

  export type participation_voteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"participation_vote_id" | "user_id" | "participation_id", ExtArgs["result"]["participation_vote"]>
  export type participation_voteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    participation?: boolean | participationDefaultArgs<ExtArgs>
  }
  export type participation_voteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    participation?: boolean | participationDefaultArgs<ExtArgs>
  }
  export type participation_voteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    participation?: boolean | participationDefaultArgs<ExtArgs>
  }

  export type $participation_votePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participation_vote"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      participation: Prisma.$participationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      participation_vote_id: string
      user_id: string
      participation_id: string
    }, ExtArgs["result"]["participation_vote"]>
    composites: {}
  }

  type participation_voteGetPayload<S extends boolean | null | undefined | participation_voteDefaultArgs> = $Result.GetResult<Prisma.$participation_votePayload, S>

  type participation_voteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<participation_voteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Participation_voteCountAggregateInputType | true
    }

  export interface participation_voteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['participation_vote'], meta: { name: 'participation_vote' } }
    /**
     * Find zero or one Participation_vote that matches the filter.
     * @param {participation_voteFindUniqueArgs} args - Arguments to find a Participation_vote
     * @example
     * // Get one Participation_vote
     * const participation_vote = await prisma.participation_vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends participation_voteFindUniqueArgs>(args: SelectSubset<T, participation_voteFindUniqueArgs<ExtArgs>>): Prisma__participation_voteClient<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participation_vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {participation_voteFindUniqueOrThrowArgs} args - Arguments to find a Participation_vote
     * @example
     * // Get one Participation_vote
     * const participation_vote = await prisma.participation_vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends participation_voteFindUniqueOrThrowArgs>(args: SelectSubset<T, participation_voteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__participation_voteClient<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participation_vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participation_voteFindFirstArgs} args - Arguments to find a Participation_vote
     * @example
     * // Get one Participation_vote
     * const participation_vote = await prisma.participation_vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends participation_voteFindFirstArgs>(args?: SelectSubset<T, participation_voteFindFirstArgs<ExtArgs>>): Prisma__participation_voteClient<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participation_vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participation_voteFindFirstOrThrowArgs} args - Arguments to find a Participation_vote
     * @example
     * // Get one Participation_vote
     * const participation_vote = await prisma.participation_vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends participation_voteFindFirstOrThrowArgs>(args?: SelectSubset<T, participation_voteFindFirstOrThrowArgs<ExtArgs>>): Prisma__participation_voteClient<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participation_votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participation_voteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participation_votes
     * const participation_votes = await prisma.participation_vote.findMany()
     * 
     * // Get first 10 Participation_votes
     * const participation_votes = await prisma.participation_vote.findMany({ take: 10 })
     * 
     * // Only select the `participation_vote_id`
     * const participation_voteWithParticipation_vote_idOnly = await prisma.participation_vote.findMany({ select: { participation_vote_id: true } })
     * 
     */
    findMany<T extends participation_voteFindManyArgs>(args?: SelectSubset<T, participation_voteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participation_vote.
     * @param {participation_voteCreateArgs} args - Arguments to create a Participation_vote.
     * @example
     * // Create one Participation_vote
     * const Participation_vote = await prisma.participation_vote.create({
     *   data: {
     *     // ... data to create a Participation_vote
     *   }
     * })
     * 
     */
    create<T extends participation_voteCreateArgs>(args: SelectSubset<T, participation_voteCreateArgs<ExtArgs>>): Prisma__participation_voteClient<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participation_votes.
     * @param {participation_voteCreateManyArgs} args - Arguments to create many Participation_votes.
     * @example
     * // Create many Participation_votes
     * const participation_vote = await prisma.participation_vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends participation_voteCreateManyArgs>(args?: SelectSubset<T, participation_voteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participation_votes and returns the data saved in the database.
     * @param {participation_voteCreateManyAndReturnArgs} args - Arguments to create many Participation_votes.
     * @example
     * // Create many Participation_votes
     * const participation_vote = await prisma.participation_vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participation_votes and only return the `participation_vote_id`
     * const participation_voteWithParticipation_vote_idOnly = await prisma.participation_vote.createManyAndReturn({
     *   select: { participation_vote_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends participation_voteCreateManyAndReturnArgs>(args?: SelectSubset<T, participation_voteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participation_vote.
     * @param {participation_voteDeleteArgs} args - Arguments to delete one Participation_vote.
     * @example
     * // Delete one Participation_vote
     * const Participation_vote = await prisma.participation_vote.delete({
     *   where: {
     *     // ... filter to delete one Participation_vote
     *   }
     * })
     * 
     */
    delete<T extends participation_voteDeleteArgs>(args: SelectSubset<T, participation_voteDeleteArgs<ExtArgs>>): Prisma__participation_voteClient<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participation_vote.
     * @param {participation_voteUpdateArgs} args - Arguments to update one Participation_vote.
     * @example
     * // Update one Participation_vote
     * const participation_vote = await prisma.participation_vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends participation_voteUpdateArgs>(args: SelectSubset<T, participation_voteUpdateArgs<ExtArgs>>): Prisma__participation_voteClient<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participation_votes.
     * @param {participation_voteDeleteManyArgs} args - Arguments to filter Participation_votes to delete.
     * @example
     * // Delete a few Participation_votes
     * const { count } = await prisma.participation_vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends participation_voteDeleteManyArgs>(args?: SelectSubset<T, participation_voteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participation_votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participation_voteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participation_votes
     * const participation_vote = await prisma.participation_vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends participation_voteUpdateManyArgs>(args: SelectSubset<T, participation_voteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participation_votes and returns the data updated in the database.
     * @param {participation_voteUpdateManyAndReturnArgs} args - Arguments to update many Participation_votes.
     * @example
     * // Update many Participation_votes
     * const participation_vote = await prisma.participation_vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participation_votes and only return the `participation_vote_id`
     * const participation_voteWithParticipation_vote_idOnly = await prisma.participation_vote.updateManyAndReturn({
     *   select: { participation_vote_id: true },
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
    updateManyAndReturn<T extends participation_voteUpdateManyAndReturnArgs>(args: SelectSubset<T, participation_voteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participation_vote.
     * @param {participation_voteUpsertArgs} args - Arguments to update or create a Participation_vote.
     * @example
     * // Update or create a Participation_vote
     * const participation_vote = await prisma.participation_vote.upsert({
     *   create: {
     *     // ... data to create a Participation_vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participation_vote we want to update
     *   }
     * })
     */
    upsert<T extends participation_voteUpsertArgs>(args: SelectSubset<T, participation_voteUpsertArgs<ExtArgs>>): Prisma__participation_voteClient<$Result.GetResult<Prisma.$participation_votePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participation_votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participation_voteCountArgs} args - Arguments to filter Participation_votes to count.
     * @example
     * // Count the number of Participation_votes
     * const count = await prisma.participation_vote.count({
     *   where: {
     *     // ... the filter for the Participation_votes we want to count
     *   }
     * })
    **/
    count<T extends participation_voteCountArgs>(
      args?: Subset<T, participation_voteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Participation_voteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participation_vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Participation_voteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Participation_voteAggregateArgs>(args: Subset<T, Participation_voteAggregateArgs>): Prisma.PrismaPromise<GetParticipation_voteAggregateType<T>>

    /**
     * Group by Participation_vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participation_voteGroupByArgs} args - Group by arguments.
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
      T extends participation_voteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: participation_voteGroupByArgs['orderBy'] }
        : { orderBy?: participation_voteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, participation_voteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipation_voteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the participation_vote model
   */
  readonly fields: participation_voteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for participation_vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__participation_voteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participation<T extends participationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, participationDefaultArgs<ExtArgs>>): Prisma__participationClient<$Result.GetResult<Prisma.$participationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the participation_vote model
   */
  interface participation_voteFieldRefs {
    readonly participation_vote_id: FieldRef<"participation_vote", 'String'>
    readonly user_id: FieldRef<"participation_vote", 'String'>
    readonly participation_id: FieldRef<"participation_vote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * participation_vote findUnique
   */
  export type participation_voteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    /**
     * Filter, which participation_vote to fetch.
     */
    where: participation_voteWhereUniqueInput
  }

  /**
   * participation_vote findUniqueOrThrow
   */
  export type participation_voteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    /**
     * Filter, which participation_vote to fetch.
     */
    where: participation_voteWhereUniqueInput
  }

  /**
   * participation_vote findFirst
   */
  export type participation_voteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    /**
     * Filter, which participation_vote to fetch.
     */
    where?: participation_voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participation_votes to fetch.
     */
    orderBy?: participation_voteOrderByWithRelationInput | participation_voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participation_votes.
     */
    cursor?: participation_voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participation_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participation_votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participation_votes.
     */
    distinct?: Participation_voteScalarFieldEnum | Participation_voteScalarFieldEnum[]
  }

  /**
   * participation_vote findFirstOrThrow
   */
  export type participation_voteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    /**
     * Filter, which participation_vote to fetch.
     */
    where?: participation_voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participation_votes to fetch.
     */
    orderBy?: participation_voteOrderByWithRelationInput | participation_voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participation_votes.
     */
    cursor?: participation_voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participation_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participation_votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participation_votes.
     */
    distinct?: Participation_voteScalarFieldEnum | Participation_voteScalarFieldEnum[]
  }

  /**
   * participation_vote findMany
   */
  export type participation_voteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    /**
     * Filter, which participation_votes to fetch.
     */
    where?: participation_voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participation_votes to fetch.
     */
    orderBy?: participation_voteOrderByWithRelationInput | participation_voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing participation_votes.
     */
    cursor?: participation_voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participation_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participation_votes.
     */
    skip?: number
    distinct?: Participation_voteScalarFieldEnum | Participation_voteScalarFieldEnum[]
  }

  /**
   * participation_vote create
   */
  export type participation_voteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    /**
     * The data needed to create a participation_vote.
     */
    data: XOR<participation_voteCreateInput, participation_voteUncheckedCreateInput>
  }

  /**
   * participation_vote createMany
   */
  export type participation_voteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many participation_votes.
     */
    data: participation_voteCreateManyInput | participation_voteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * participation_vote createManyAndReturn
   */
  export type participation_voteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * The data used to create many participation_votes.
     */
    data: participation_voteCreateManyInput | participation_voteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * participation_vote update
   */
  export type participation_voteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    /**
     * The data needed to update a participation_vote.
     */
    data: XOR<participation_voteUpdateInput, participation_voteUncheckedUpdateInput>
    /**
     * Choose, which participation_vote to update.
     */
    where: participation_voteWhereUniqueInput
  }

  /**
   * participation_vote updateMany
   */
  export type participation_voteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update participation_votes.
     */
    data: XOR<participation_voteUpdateManyMutationInput, participation_voteUncheckedUpdateManyInput>
    /**
     * Filter which participation_votes to update
     */
    where?: participation_voteWhereInput
    /**
     * Limit how many participation_votes to update.
     */
    limit?: number
  }

  /**
   * participation_vote updateManyAndReturn
   */
  export type participation_voteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * The data used to update participation_votes.
     */
    data: XOR<participation_voteUpdateManyMutationInput, participation_voteUncheckedUpdateManyInput>
    /**
     * Filter which participation_votes to update
     */
    where?: participation_voteWhereInput
    /**
     * Limit how many participation_votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * participation_vote upsert
   */
  export type participation_voteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    /**
     * The filter to search for the participation_vote to update in case it exists.
     */
    where: participation_voteWhereUniqueInput
    /**
     * In case the participation_vote found by the `where` argument doesn't exist, create a new participation_vote with this data.
     */
    create: XOR<participation_voteCreateInput, participation_voteUncheckedCreateInput>
    /**
     * In case the participation_vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<participation_voteUpdateInput, participation_voteUncheckedUpdateInput>
  }

  /**
   * participation_vote delete
   */
  export type participation_voteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
    /**
     * Filter which participation_vote to delete.
     */
    where: participation_voteWhereUniqueInput
  }

  /**
   * participation_vote deleteMany
   */
  export type participation_voteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participation_votes to delete
     */
    where?: participation_voteWhereInput
    /**
     * Limit how many participation_votes to delete.
     */
    limit?: number
  }

  /**
   * participation_vote without action
   */
  export type participation_voteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participation_vote
     */
    select?: participation_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participation_vote
     */
    omit?: participation_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participation_voteInclude<ExtArgs> | null
  }


  /**
   * Model challenge_vote
   */

  export type AggregateChallenge_vote = {
    _count: Challenge_voteCountAggregateOutputType | null
    _min: Challenge_voteMinAggregateOutputType | null
    _max: Challenge_voteMaxAggregateOutputType | null
  }

  export type Challenge_voteMinAggregateOutputType = {
    challenge_vote_id: string | null
    user_id: string | null
    challenge_id: string | null
  }

  export type Challenge_voteMaxAggregateOutputType = {
    challenge_vote_id: string | null
    user_id: string | null
    challenge_id: string | null
  }

  export type Challenge_voteCountAggregateOutputType = {
    challenge_vote_id: number
    user_id: number
    challenge_id: number
    _all: number
  }


  export type Challenge_voteMinAggregateInputType = {
    challenge_vote_id?: true
    user_id?: true
    challenge_id?: true
  }

  export type Challenge_voteMaxAggregateInputType = {
    challenge_vote_id?: true
    user_id?: true
    challenge_id?: true
  }

  export type Challenge_voteCountAggregateInputType = {
    challenge_vote_id?: true
    user_id?: true
    challenge_id?: true
    _all?: true
  }

  export type Challenge_voteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenge_vote to aggregate.
     */
    where?: challenge_voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_votes to fetch.
     */
    orderBy?: challenge_voteOrderByWithRelationInput | challenge_voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: challenge_voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned challenge_votes
    **/
    _count?: true | Challenge_voteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Challenge_voteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Challenge_voteMaxAggregateInputType
  }

  export type GetChallenge_voteAggregateType<T extends Challenge_voteAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge_vote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge_vote[P]>
      : GetScalarType<T[P], AggregateChallenge_vote[P]>
  }




  export type challenge_voteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challenge_voteWhereInput
    orderBy?: challenge_voteOrderByWithAggregationInput | challenge_voteOrderByWithAggregationInput[]
    by: Challenge_voteScalarFieldEnum[] | Challenge_voteScalarFieldEnum
    having?: challenge_voteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Challenge_voteCountAggregateInputType | true
    _min?: Challenge_voteMinAggregateInputType
    _max?: Challenge_voteMaxAggregateInputType
  }

  export type Challenge_voteGroupByOutputType = {
    challenge_vote_id: string
    user_id: string
    challenge_id: string
    _count: Challenge_voteCountAggregateOutputType | null
    _min: Challenge_voteMinAggregateOutputType | null
    _max: Challenge_voteMaxAggregateOutputType | null
  }

  type GetChallenge_voteGroupByPayload<T extends challenge_voteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Challenge_voteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Challenge_voteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Challenge_voteGroupByOutputType[P]>
            : GetScalarType<T[P], Challenge_voteGroupByOutputType[P]>
        }
      >
    >


  export type challenge_voteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_vote_id?: boolean
    user_id?: boolean
    challenge_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge_vote"]>

  export type challenge_voteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_vote_id?: boolean
    user_id?: boolean
    challenge_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge_vote"]>

  export type challenge_voteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_vote_id?: boolean
    user_id?: boolean
    challenge_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge_vote"]>

  export type challenge_voteSelectScalar = {
    challenge_vote_id?: boolean
    user_id?: boolean
    challenge_id?: boolean
  }

  export type challenge_voteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"challenge_vote_id" | "user_id" | "challenge_id", ExtArgs["result"]["challenge_vote"]>
  export type challenge_voteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
  }
  export type challenge_voteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
  }
  export type challenge_voteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    challenge?: boolean | challengeDefaultArgs<ExtArgs>
  }

  export type $challenge_votePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "challenge_vote"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      challenge: Prisma.$challengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      challenge_vote_id: string
      user_id: string
      challenge_id: string
    }, ExtArgs["result"]["challenge_vote"]>
    composites: {}
  }

  type challenge_voteGetPayload<S extends boolean | null | undefined | challenge_voteDefaultArgs> = $Result.GetResult<Prisma.$challenge_votePayload, S>

  type challenge_voteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<challenge_voteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Challenge_voteCountAggregateInputType | true
    }

  export interface challenge_voteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['challenge_vote'], meta: { name: 'challenge_vote' } }
    /**
     * Find zero or one Challenge_vote that matches the filter.
     * @param {challenge_voteFindUniqueArgs} args - Arguments to find a Challenge_vote
     * @example
     * // Get one Challenge_vote
     * const challenge_vote = await prisma.challenge_vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends challenge_voteFindUniqueArgs>(args: SelectSubset<T, challenge_voteFindUniqueArgs<ExtArgs>>): Prisma__challenge_voteClient<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge_vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {challenge_voteFindUniqueOrThrowArgs} args - Arguments to find a Challenge_vote
     * @example
     * // Get one Challenge_vote
     * const challenge_vote = await prisma.challenge_vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends challenge_voteFindUniqueOrThrowArgs>(args: SelectSubset<T, challenge_voteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__challenge_voteClient<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge_vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_voteFindFirstArgs} args - Arguments to find a Challenge_vote
     * @example
     * // Get one Challenge_vote
     * const challenge_vote = await prisma.challenge_vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends challenge_voteFindFirstArgs>(args?: SelectSubset<T, challenge_voteFindFirstArgs<ExtArgs>>): Prisma__challenge_voteClient<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge_vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_voteFindFirstOrThrowArgs} args - Arguments to find a Challenge_vote
     * @example
     * // Get one Challenge_vote
     * const challenge_vote = await prisma.challenge_vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends challenge_voteFindFirstOrThrowArgs>(args?: SelectSubset<T, challenge_voteFindFirstOrThrowArgs<ExtArgs>>): Prisma__challenge_voteClient<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenge_votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_voteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenge_votes
     * const challenge_votes = await prisma.challenge_vote.findMany()
     * 
     * // Get first 10 Challenge_votes
     * const challenge_votes = await prisma.challenge_vote.findMany({ take: 10 })
     * 
     * // Only select the `challenge_vote_id`
     * const challenge_voteWithChallenge_vote_idOnly = await prisma.challenge_vote.findMany({ select: { challenge_vote_id: true } })
     * 
     */
    findMany<T extends challenge_voteFindManyArgs>(args?: SelectSubset<T, challenge_voteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge_vote.
     * @param {challenge_voteCreateArgs} args - Arguments to create a Challenge_vote.
     * @example
     * // Create one Challenge_vote
     * const Challenge_vote = await prisma.challenge_vote.create({
     *   data: {
     *     // ... data to create a Challenge_vote
     *   }
     * })
     * 
     */
    create<T extends challenge_voteCreateArgs>(args: SelectSubset<T, challenge_voteCreateArgs<ExtArgs>>): Prisma__challenge_voteClient<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenge_votes.
     * @param {challenge_voteCreateManyArgs} args - Arguments to create many Challenge_votes.
     * @example
     * // Create many Challenge_votes
     * const challenge_vote = await prisma.challenge_vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends challenge_voteCreateManyArgs>(args?: SelectSubset<T, challenge_voteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenge_votes and returns the data saved in the database.
     * @param {challenge_voteCreateManyAndReturnArgs} args - Arguments to create many Challenge_votes.
     * @example
     * // Create many Challenge_votes
     * const challenge_vote = await prisma.challenge_vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenge_votes and only return the `challenge_vote_id`
     * const challenge_voteWithChallenge_vote_idOnly = await prisma.challenge_vote.createManyAndReturn({
     *   select: { challenge_vote_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends challenge_voteCreateManyAndReturnArgs>(args?: SelectSubset<T, challenge_voteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge_vote.
     * @param {challenge_voteDeleteArgs} args - Arguments to delete one Challenge_vote.
     * @example
     * // Delete one Challenge_vote
     * const Challenge_vote = await prisma.challenge_vote.delete({
     *   where: {
     *     // ... filter to delete one Challenge_vote
     *   }
     * })
     * 
     */
    delete<T extends challenge_voteDeleteArgs>(args: SelectSubset<T, challenge_voteDeleteArgs<ExtArgs>>): Prisma__challenge_voteClient<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge_vote.
     * @param {challenge_voteUpdateArgs} args - Arguments to update one Challenge_vote.
     * @example
     * // Update one Challenge_vote
     * const challenge_vote = await prisma.challenge_vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends challenge_voteUpdateArgs>(args: SelectSubset<T, challenge_voteUpdateArgs<ExtArgs>>): Prisma__challenge_voteClient<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenge_votes.
     * @param {challenge_voteDeleteManyArgs} args - Arguments to filter Challenge_votes to delete.
     * @example
     * // Delete a few Challenge_votes
     * const { count } = await prisma.challenge_vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends challenge_voteDeleteManyArgs>(args?: SelectSubset<T, challenge_voteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenge_votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_voteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenge_votes
     * const challenge_vote = await prisma.challenge_vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends challenge_voteUpdateManyArgs>(args: SelectSubset<T, challenge_voteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenge_votes and returns the data updated in the database.
     * @param {challenge_voteUpdateManyAndReturnArgs} args - Arguments to update many Challenge_votes.
     * @example
     * // Update many Challenge_votes
     * const challenge_vote = await prisma.challenge_vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenge_votes and only return the `challenge_vote_id`
     * const challenge_voteWithChallenge_vote_idOnly = await prisma.challenge_vote.updateManyAndReturn({
     *   select: { challenge_vote_id: true },
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
    updateManyAndReturn<T extends challenge_voteUpdateManyAndReturnArgs>(args: SelectSubset<T, challenge_voteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge_vote.
     * @param {challenge_voteUpsertArgs} args - Arguments to update or create a Challenge_vote.
     * @example
     * // Update or create a Challenge_vote
     * const challenge_vote = await prisma.challenge_vote.upsert({
     *   create: {
     *     // ... data to create a Challenge_vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge_vote we want to update
     *   }
     * })
     */
    upsert<T extends challenge_voteUpsertArgs>(args: SelectSubset<T, challenge_voteUpsertArgs<ExtArgs>>): Prisma__challenge_voteClient<$Result.GetResult<Prisma.$challenge_votePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenge_votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_voteCountArgs} args - Arguments to filter Challenge_votes to count.
     * @example
     * // Count the number of Challenge_votes
     * const count = await prisma.challenge_vote.count({
     *   where: {
     *     // ... the filter for the Challenge_votes we want to count
     *   }
     * })
    **/
    count<T extends challenge_voteCountArgs>(
      args?: Subset<T, challenge_voteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Challenge_voteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge_vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Challenge_voteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Challenge_voteAggregateArgs>(args: Subset<T, Challenge_voteAggregateArgs>): Prisma.PrismaPromise<GetChallenge_voteAggregateType<T>>

    /**
     * Group by Challenge_vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_voteGroupByArgs} args - Group by arguments.
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
      T extends challenge_voteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: challenge_voteGroupByArgs['orderBy'] }
        : { orderBy?: challenge_voteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, challenge_voteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallenge_voteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the challenge_vote model
   */
  readonly fields: challenge_voteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for challenge_vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__challenge_voteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends challengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, challengeDefaultArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the challenge_vote model
   */
  interface challenge_voteFieldRefs {
    readonly challenge_vote_id: FieldRef<"challenge_vote", 'String'>
    readonly user_id: FieldRef<"challenge_vote", 'String'>
    readonly challenge_id: FieldRef<"challenge_vote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * challenge_vote findUnique
   */
  export type challenge_voteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    /**
     * Filter, which challenge_vote to fetch.
     */
    where: challenge_voteWhereUniqueInput
  }

  /**
   * challenge_vote findUniqueOrThrow
   */
  export type challenge_voteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    /**
     * Filter, which challenge_vote to fetch.
     */
    where: challenge_voteWhereUniqueInput
  }

  /**
   * challenge_vote findFirst
   */
  export type challenge_voteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    /**
     * Filter, which challenge_vote to fetch.
     */
    where?: challenge_voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_votes to fetch.
     */
    orderBy?: challenge_voteOrderByWithRelationInput | challenge_voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenge_votes.
     */
    cursor?: challenge_voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenge_votes.
     */
    distinct?: Challenge_voteScalarFieldEnum | Challenge_voteScalarFieldEnum[]
  }

  /**
   * challenge_vote findFirstOrThrow
   */
  export type challenge_voteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    /**
     * Filter, which challenge_vote to fetch.
     */
    where?: challenge_voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_votes to fetch.
     */
    orderBy?: challenge_voteOrderByWithRelationInput | challenge_voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenge_votes.
     */
    cursor?: challenge_voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenge_votes.
     */
    distinct?: Challenge_voteScalarFieldEnum | Challenge_voteScalarFieldEnum[]
  }

  /**
   * challenge_vote findMany
   */
  export type challenge_voteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    /**
     * Filter, which challenge_votes to fetch.
     */
    where?: challenge_voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_votes to fetch.
     */
    orderBy?: challenge_voteOrderByWithRelationInput | challenge_voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing challenge_votes.
     */
    cursor?: challenge_voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_votes.
     */
    skip?: number
    distinct?: Challenge_voteScalarFieldEnum | Challenge_voteScalarFieldEnum[]
  }

  /**
   * challenge_vote create
   */
  export type challenge_voteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    /**
     * The data needed to create a challenge_vote.
     */
    data: XOR<challenge_voteCreateInput, challenge_voteUncheckedCreateInput>
  }

  /**
   * challenge_vote createMany
   */
  export type challenge_voteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many challenge_votes.
     */
    data: challenge_voteCreateManyInput | challenge_voteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * challenge_vote createManyAndReturn
   */
  export type challenge_voteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * The data used to create many challenge_votes.
     */
    data: challenge_voteCreateManyInput | challenge_voteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * challenge_vote update
   */
  export type challenge_voteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    /**
     * The data needed to update a challenge_vote.
     */
    data: XOR<challenge_voteUpdateInput, challenge_voteUncheckedUpdateInput>
    /**
     * Choose, which challenge_vote to update.
     */
    where: challenge_voteWhereUniqueInput
  }

  /**
   * challenge_vote updateMany
   */
  export type challenge_voteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update challenge_votes.
     */
    data: XOR<challenge_voteUpdateManyMutationInput, challenge_voteUncheckedUpdateManyInput>
    /**
     * Filter which challenge_votes to update
     */
    where?: challenge_voteWhereInput
    /**
     * Limit how many challenge_votes to update.
     */
    limit?: number
  }

  /**
   * challenge_vote updateManyAndReturn
   */
  export type challenge_voteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * The data used to update challenge_votes.
     */
    data: XOR<challenge_voteUpdateManyMutationInput, challenge_voteUncheckedUpdateManyInput>
    /**
     * Filter which challenge_votes to update
     */
    where?: challenge_voteWhereInput
    /**
     * Limit how many challenge_votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * challenge_vote upsert
   */
  export type challenge_voteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    /**
     * The filter to search for the challenge_vote to update in case it exists.
     */
    where: challenge_voteWhereUniqueInput
    /**
     * In case the challenge_vote found by the `where` argument doesn't exist, create a new challenge_vote with this data.
     */
    create: XOR<challenge_voteCreateInput, challenge_voteUncheckedCreateInput>
    /**
     * In case the challenge_vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<challenge_voteUpdateInput, challenge_voteUncheckedUpdateInput>
  }

  /**
   * challenge_vote delete
   */
  export type challenge_voteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
    /**
     * Filter which challenge_vote to delete.
     */
    where: challenge_voteWhereUniqueInput
  }

  /**
   * challenge_vote deleteMany
   */
  export type challenge_voteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenge_votes to delete
     */
    where?: challenge_voteWhereInput
    /**
     * Limit how many challenge_votes to delete.
     */
    limit?: number
  }

  /**
   * challenge_vote without action
   */
  export type challenge_voteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_vote
     */
    select?: challenge_voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_vote
     */
    omit?: challenge_voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_voteInclude<ExtArgs> | null
  }


  /**
   * Model password_reset_token
   */

  export type AggregatePassword_reset_token = {
    _count: Password_reset_tokenCountAggregateOutputType | null
    _min: Password_reset_tokenMinAggregateOutputType | null
    _max: Password_reset_tokenMaxAggregateOutputType | null
  }

  export type Password_reset_tokenMinAggregateOutputType = {
    token_id: string | null
    token: string | null
    email: string | null
    expires_at: Date | null
    create_at: Date | null
    user_id: string | null
  }

  export type Password_reset_tokenMaxAggregateOutputType = {
    token_id: string | null
    token: string | null
    email: string | null
    expires_at: Date | null
    create_at: Date | null
    user_id: string | null
  }

  export type Password_reset_tokenCountAggregateOutputType = {
    token_id: number
    token: number
    email: number
    expires_at: number
    create_at: number
    user_id: number
    _all: number
  }


  export type Password_reset_tokenMinAggregateInputType = {
    token_id?: true
    token?: true
    email?: true
    expires_at?: true
    create_at?: true
    user_id?: true
  }

  export type Password_reset_tokenMaxAggregateInputType = {
    token_id?: true
    token?: true
    email?: true
    expires_at?: true
    create_at?: true
    user_id?: true
  }

  export type Password_reset_tokenCountAggregateInputType = {
    token_id?: true
    token?: true
    email?: true
    expires_at?: true
    create_at?: true
    user_id?: true
    _all?: true
  }

  export type Password_reset_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_token to aggregate.
     */
    where?: password_reset_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokenOrderByWithRelationInput | password_reset_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_reset_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_reset_tokens
    **/
    _count?: true | Password_reset_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_reset_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_reset_tokenMaxAggregateInputType
  }

  export type GetPassword_reset_tokenAggregateType<T extends Password_reset_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_reset_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_reset_token[P]>
      : GetScalarType<T[P], AggregatePassword_reset_token[P]>
  }




  export type password_reset_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokenWhereInput
    orderBy?: password_reset_tokenOrderByWithAggregationInput | password_reset_tokenOrderByWithAggregationInput[]
    by: Password_reset_tokenScalarFieldEnum[] | Password_reset_tokenScalarFieldEnum
    having?: password_reset_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_reset_tokenCountAggregateInputType | true
    _min?: Password_reset_tokenMinAggregateInputType
    _max?: Password_reset_tokenMaxAggregateInputType
  }

  export type Password_reset_tokenGroupByOutputType = {
    token_id: string
    token: string
    email: string
    expires_at: Date
    create_at: Date
    user_id: string
    _count: Password_reset_tokenCountAggregateOutputType | null
    _min: Password_reset_tokenMinAggregateOutputType | null
    _max: Password_reset_tokenMaxAggregateOutputType | null
  }

  type GetPassword_reset_tokenGroupByPayload<T extends password_reset_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_reset_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_reset_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_reset_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Password_reset_tokenGroupByOutputType[P]>
        }
      >
    >


  export type password_reset_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    token?: boolean
    email?: boolean
    expires_at?: boolean
    create_at?: boolean
    user_id?: boolean
    user?: boolean | password_reset_token$userArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset_token"]>

  export type password_reset_tokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    token?: boolean
    email?: boolean
    expires_at?: boolean
    create_at?: boolean
    user_id?: boolean
    user?: boolean | password_reset_token$userArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset_token"]>

  export type password_reset_tokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    token?: boolean
    email?: boolean
    expires_at?: boolean
    create_at?: boolean
    user_id?: boolean
    user?: boolean | password_reset_token$userArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset_token"]>

  export type password_reset_tokenSelectScalar = {
    token_id?: boolean
    token?: boolean
    email?: boolean
    expires_at?: boolean
    create_at?: boolean
    user_id?: boolean
  }

  export type password_reset_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token_id" | "token" | "email" | "expires_at" | "create_at" | "user_id", ExtArgs["result"]["password_reset_token"]>
  export type password_reset_tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | password_reset_token$userArgs<ExtArgs>
  }
  export type password_reset_tokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | password_reset_token$userArgs<ExtArgs>
  }
  export type password_reset_tokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | password_reset_token$userArgs<ExtArgs>
  }

  export type $password_reset_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_reset_token"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      token_id: string
      token: string
      email: string
      expires_at: Date
      create_at: Date
      user_id: string
    }, ExtArgs["result"]["password_reset_token"]>
    composites: {}
  }

  type password_reset_tokenGetPayload<S extends boolean | null | undefined | password_reset_tokenDefaultArgs> = $Result.GetResult<Prisma.$password_reset_tokenPayload, S>

  type password_reset_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<password_reset_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Password_reset_tokenCountAggregateInputType | true
    }

  export interface password_reset_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_reset_token'], meta: { name: 'password_reset_token' } }
    /**
     * Find zero or one Password_reset_token that matches the filter.
     * @param {password_reset_tokenFindUniqueArgs} args - Arguments to find a Password_reset_token
     * @example
     * // Get one Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends password_reset_tokenFindUniqueArgs>(args: SelectSubset<T, password_reset_tokenFindUniqueArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password_reset_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {password_reset_tokenFindUniqueOrThrowArgs} args - Arguments to find a Password_reset_token
     * @example
     * // Get one Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends password_reset_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, password_reset_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenFindFirstArgs} args - Arguments to find a Password_reset_token
     * @example
     * // Get one Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends password_reset_tokenFindFirstArgs>(args?: SelectSubset<T, password_reset_tokenFindFirstArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenFindFirstOrThrowArgs} args - Arguments to find a Password_reset_token
     * @example
     * // Get one Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends password_reset_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, password_reset_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_token.findMany()
     * 
     * // Get first 10 Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_token.findMany({ take: 10 })
     * 
     * // Only select the `token_id`
     * const password_reset_tokenWithToken_idOnly = await prisma.password_reset_token.findMany({ select: { token_id: true } })
     * 
     */
    findMany<T extends password_reset_tokenFindManyArgs>(args?: SelectSubset<T, password_reset_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password_reset_token.
     * @param {password_reset_tokenCreateArgs} args - Arguments to create a Password_reset_token.
     * @example
     * // Create one Password_reset_token
     * const Password_reset_token = await prisma.password_reset_token.create({
     *   data: {
     *     // ... data to create a Password_reset_token
     *   }
     * })
     * 
     */
    create<T extends password_reset_tokenCreateArgs>(args: SelectSubset<T, password_reset_tokenCreateArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Password_reset_tokens.
     * @param {password_reset_tokenCreateManyArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_token = await prisma.password_reset_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends password_reset_tokenCreateManyArgs>(args?: SelectSubset<T, password_reset_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Password_reset_tokens and returns the data saved in the database.
     * @param {password_reset_tokenCreateManyAndReturnArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_token = await prisma.password_reset_token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Password_reset_tokens and only return the `token_id`
     * const password_reset_tokenWithToken_idOnly = await prisma.password_reset_token.createManyAndReturn({
     *   select: { token_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends password_reset_tokenCreateManyAndReturnArgs>(args?: SelectSubset<T, password_reset_tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Password_reset_token.
     * @param {password_reset_tokenDeleteArgs} args - Arguments to delete one Password_reset_token.
     * @example
     * // Delete one Password_reset_token
     * const Password_reset_token = await prisma.password_reset_token.delete({
     *   where: {
     *     // ... filter to delete one Password_reset_token
     *   }
     * })
     * 
     */
    delete<T extends password_reset_tokenDeleteArgs>(args: SelectSubset<T, password_reset_tokenDeleteArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password_reset_token.
     * @param {password_reset_tokenUpdateArgs} args - Arguments to update one Password_reset_token.
     * @example
     * // Update one Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends password_reset_tokenUpdateArgs>(args: SelectSubset<T, password_reset_tokenUpdateArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Password_reset_tokens.
     * @param {password_reset_tokenDeleteManyArgs} args - Arguments to filter Password_reset_tokens to delete.
     * @example
     * // Delete a few Password_reset_tokens
     * const { count } = await prisma.password_reset_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends password_reset_tokenDeleteManyArgs>(args?: SelectSubset<T, password_reset_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_token = await prisma.password_reset_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends password_reset_tokenUpdateManyArgs>(args: SelectSubset<T, password_reset_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens and returns the data updated in the database.
     * @param {password_reset_tokenUpdateManyAndReturnArgs} args - Arguments to update many Password_reset_tokens.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_token = await prisma.password_reset_token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Password_reset_tokens and only return the `token_id`
     * const password_reset_tokenWithToken_idOnly = await prisma.password_reset_token.updateManyAndReturn({
     *   select: { token_id: true },
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
    updateManyAndReturn<T extends password_reset_tokenUpdateManyAndReturnArgs>(args: SelectSubset<T, password_reset_tokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Password_reset_token.
     * @param {password_reset_tokenUpsertArgs} args - Arguments to update or create a Password_reset_token.
     * @example
     * // Update or create a Password_reset_token
     * const password_reset_token = await prisma.password_reset_token.upsert({
     *   create: {
     *     // ... data to create a Password_reset_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_reset_token we want to update
     *   }
     * })
     */
    upsert<T extends password_reset_tokenUpsertArgs>(args: SelectSubset<T, password_reset_tokenUpsertArgs<ExtArgs>>): Prisma__password_reset_tokenClient<$Result.GetResult<Prisma.$password_reset_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenCountArgs} args - Arguments to filter Password_reset_tokens to count.
     * @example
     * // Count the number of Password_reset_tokens
     * const count = await prisma.password_reset_token.count({
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to count
     *   }
     * })
    **/
    count<T extends password_reset_tokenCountArgs>(
      args?: Subset<T, password_reset_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_reset_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_reset_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_reset_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Password_reset_tokenAggregateArgs>(args: Subset<T, Password_reset_tokenAggregateArgs>): Prisma.PrismaPromise<GetPassword_reset_tokenAggregateType<T>>

    /**
     * Group by Password_reset_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokenGroupByArgs} args - Group by arguments.
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
      T extends password_reset_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_reset_tokenGroupByArgs['orderBy'] }
        : { orderBy?: password_reset_tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, password_reset_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_reset_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_reset_token model
   */
  readonly fields: password_reset_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_reset_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_reset_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends password_reset_token$userArgs<ExtArgs> = {}>(args?: Subset<T, password_reset_token$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the password_reset_token model
   */
  interface password_reset_tokenFieldRefs {
    readonly token_id: FieldRef<"password_reset_token", 'String'>
    readonly token: FieldRef<"password_reset_token", 'String'>
    readonly email: FieldRef<"password_reset_token", 'String'>
    readonly expires_at: FieldRef<"password_reset_token", 'DateTime'>
    readonly create_at: FieldRef<"password_reset_token", 'DateTime'>
    readonly user_id: FieldRef<"password_reset_token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * password_reset_token findUnique
   */
  export type password_reset_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_token to fetch.
     */
    where: password_reset_tokenWhereUniqueInput
  }

  /**
   * password_reset_token findUniqueOrThrow
   */
  export type password_reset_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_token to fetch.
     */
    where: password_reset_tokenWhereUniqueInput
  }

  /**
   * password_reset_token findFirst
   */
  export type password_reset_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_token to fetch.
     */
    where?: password_reset_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokenOrderByWithRelationInput | password_reset_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokenScalarFieldEnum | Password_reset_tokenScalarFieldEnum[]
  }

  /**
   * password_reset_token findFirstOrThrow
   */
  export type password_reset_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_token to fetch.
     */
    where?: password_reset_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokenOrderByWithRelationInput | password_reset_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokenScalarFieldEnum | Password_reset_tokenScalarFieldEnum[]
  }

  /**
   * password_reset_token findMany
   */
  export type password_reset_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokenOrderByWithRelationInput | password_reset_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_reset_tokens.
     */
    cursor?: password_reset_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    distinct?: Password_reset_tokenScalarFieldEnum | Password_reset_tokenScalarFieldEnum[]
  }

  /**
   * password_reset_token create
   */
  export type password_reset_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a password_reset_token.
     */
    data: XOR<password_reset_tokenCreateInput, password_reset_tokenUncheckedCreateInput>
  }

  /**
   * password_reset_token createMany
   */
  export type password_reset_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokenCreateManyInput | password_reset_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * password_reset_token createManyAndReturn
   */
  export type password_reset_tokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokenCreateManyInput | password_reset_tokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * password_reset_token update
   */
  export type password_reset_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a password_reset_token.
     */
    data: XOR<password_reset_tokenUpdateInput, password_reset_tokenUncheckedUpdateInput>
    /**
     * Choose, which password_reset_token to update.
     */
    where: password_reset_tokenWhereUniqueInput
  }

  /**
   * password_reset_token updateMany
   */
  export type password_reset_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokenUpdateManyMutationInput, password_reset_tokenUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokenWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
  }

  /**
   * password_reset_token updateManyAndReturn
   */
  export type password_reset_tokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokenUpdateManyMutationInput, password_reset_tokenUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokenWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * password_reset_token upsert
   */
  export type password_reset_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the password_reset_token to update in case it exists.
     */
    where: password_reset_tokenWhereUniqueInput
    /**
     * In case the password_reset_token found by the `where` argument doesn't exist, create a new password_reset_token with this data.
     */
    create: XOR<password_reset_tokenCreateInput, password_reset_tokenUncheckedCreateInput>
    /**
     * In case the password_reset_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_reset_tokenUpdateInput, password_reset_tokenUncheckedUpdateInput>
  }

  /**
   * password_reset_token delete
   */
  export type password_reset_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
    /**
     * Filter which password_reset_token to delete.
     */
    where: password_reset_tokenWhereUniqueInput
  }

  /**
   * password_reset_token deleteMany
   */
  export type password_reset_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to delete
     */
    where?: password_reset_tokenWhereInput
    /**
     * Limit how many password_reset_tokens to delete.
     */
    limit?: number
  }

  /**
   * password_reset_token.user
   */
  export type password_reset_token$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: userWhereInput
  }

  /**
   * password_reset_token without action
   */
  export type password_reset_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_token
     */
    select?: password_reset_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_token
     */
    omit?: password_reset_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokenInclude<ExtArgs> | null
  }


  /**
   * Model user_role
   */

  export type AggregateUser_role = {
    _count: User_roleCountAggregateOutputType | null
    _avg: User_roleAvgAggregateOutputType | null
    _sum: User_roleSumAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  export type User_roleAvgAggregateOutputType = {
    role_id: number | null
  }

  export type User_roleSumAggregateOutputType = {
    role_id: number | null
  }

  export type User_roleMinAggregateOutputType = {
    id: string | null
    role_id: number | null
    role_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_roleMaxAggregateOutputType = {
    id: string | null
    role_id: number | null
    role_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_roleCountAggregateOutputType = {
    id: number
    role_id: number
    role_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_roleAvgAggregateInputType = {
    role_id?: true
  }

  export type User_roleSumAggregateInputType = {
    role_id?: true
  }

  export type User_roleMinAggregateInputType = {
    id?: true
    role_id?: true
    role_name?: true
    created_at?: true
    updated_at?: true
  }

  export type User_roleMaxAggregateInputType = {
    id?: true
    role_id?: true
    role_name?: true
    created_at?: true
    updated_at?: true
  }

  export type User_roleCountAggregateInputType = {
    id?: true
    role_id?: true
    role_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role to aggregate.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_roleMaxAggregateInputType
  }

  export type GetUser_roleAggregateType<T extends User_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_role[P]>
      : GetScalarType<T[P], AggregateUser_role[P]>
  }




  export type user_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithAggregationInput | user_roleOrderByWithAggregationInput[]
    by: User_roleScalarFieldEnum[] | User_roleScalarFieldEnum
    having?: user_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_roleCountAggregateInputType | true
    _avg?: User_roleAvgAggregateInputType
    _sum?: User_roleSumAggregateInputType
    _min?: User_roleMinAggregateInputType
    _max?: User_roleMaxAggregateInputType
  }

  export type User_roleGroupByOutputType = {
    id: string
    role_id: number
    role_name: string
    created_at: Date | null
    updated_at: Date | null
    _count: User_roleCountAggregateOutputType | null
    _avg: User_roleAvgAggregateOutputType | null
    _sum: User_roleSumAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  type GetUser_roleGroupByPayload<T extends user_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_roleGroupByOutputType[P]>
            : GetScalarType<T[P], User_roleGroupByOutputType[P]>
        }
      >
    >


  export type user_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    role_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | user_role$userArgs<ExtArgs>
  }, ExtArgs["result"]["user_role"]>

  export type user_roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    role_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | user_role$userArgs<ExtArgs>
  }, ExtArgs["result"]["user_role"]>

  export type user_roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    role_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | user_role$userArgs<ExtArgs>
  }, ExtArgs["result"]["user_role"]>

  export type user_roleSelectScalar = {
    id?: boolean
    role_id?: boolean
    role_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_id" | "role_name" | "created_at" | "updated_at", ExtArgs["result"]["user_role"]>
  export type user_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_role$userArgs<ExtArgs>
  }
  export type user_roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_role$userArgs<ExtArgs>
  }
  export type user_roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_role$userArgs<ExtArgs>
  }

  export type $user_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_role"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role_id: number
      role_name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user_role"]>
    composites: {}
  }

  type user_roleGetPayload<S extends boolean | null | undefined | user_roleDefaultArgs> = $Result.GetResult<Prisma.$user_rolePayload, S>

  type user_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_roleCountAggregateInputType | true
    }

  export interface user_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_role'], meta: { name: 'user_role' } }
    /**
     * Find zero or one User_role that matches the filter.
     * @param {user_roleFindUniqueArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_roleFindUniqueArgs>(args: SelectSubset<T, user_roleFindUniqueArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_roleFindUniqueOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, user_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_roleFindFirstArgs>(args?: SelectSubset<T, user_roleFindFirstArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, user_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_role.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_roleWithIdOnly = await prisma.user_role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_roleFindManyArgs>(args?: SelectSubset<T, user_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_role.
     * @param {user_roleCreateArgs} args - Arguments to create a User_role.
     * @example
     * // Create one User_role
     * const User_role = await prisma.user_role.create({
     *   data: {
     *     // ... data to create a User_role
     *   }
     * })
     * 
     */
    create<T extends user_roleCreateArgs>(args: SelectSubset<T, user_roleCreateArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_roles.
     * @param {user_roleCreateManyArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_role = await prisma.user_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_roleCreateManyArgs>(args?: SelectSubset<T, user_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_roles and returns the data saved in the database.
     * @param {user_roleCreateManyAndReturnArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_role = await prisma.user_role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_roles and only return the `id`
     * const user_roleWithIdOnly = await prisma.user_role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_roleCreateManyAndReturnArgs>(args?: SelectSubset<T, user_roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_role.
     * @param {user_roleDeleteArgs} args - Arguments to delete one User_role.
     * @example
     * // Delete one User_role
     * const User_role = await prisma.user_role.delete({
     *   where: {
     *     // ... filter to delete one User_role
     *   }
     * })
     * 
     */
    delete<T extends user_roleDeleteArgs>(args: SelectSubset<T, user_roleDeleteArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_role.
     * @param {user_roleUpdateArgs} args - Arguments to update one User_role.
     * @example
     * // Update one User_role
     * const user_role = await prisma.user_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_roleUpdateArgs>(args: SelectSubset<T, user_roleUpdateArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_roles.
     * @param {user_roleDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_roleDeleteManyArgs>(args?: SelectSubset<T, user_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_roleUpdateManyArgs>(args: SelectSubset<T, user_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles and returns the data updated in the database.
     * @param {user_roleUpdateManyAndReturnArgs} args - Arguments to update many User_roles.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_roles and only return the `id`
     * const user_roleWithIdOnly = await prisma.user_role.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_roleUpdateManyAndReturnArgs>(args: SelectSubset<T, user_roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_role.
     * @param {user_roleUpsertArgs} args - Arguments to update or create a User_role.
     * @example
     * // Update or create a User_role
     * const user_role = await prisma.user_role.upsert({
     *   create: {
     *     // ... data to create a User_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_role we want to update
     *   }
     * })
     */
    upsert<T extends user_roleUpsertArgs>(args: SelectSubset<T, user_roleUpsertArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_role.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_roleCountArgs>(
      args?: Subset<T, user_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_roleAggregateArgs>(args: Subset<T, User_roleAggregateArgs>): Prisma.PrismaPromise<GetUser_roleAggregateType<T>>

    /**
     * Group by User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleGroupByArgs} args - Group by arguments.
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
      T extends user_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roleGroupByArgs['orderBy'] }
        : { orderBy?: user_roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_role model
   */
  readonly fields: user_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends user_role$userArgs<ExtArgs> = {}>(args?: Subset<T, user_role$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_role model
   */
  interface user_roleFieldRefs {
    readonly id: FieldRef<"user_role", 'String'>
    readonly role_id: FieldRef<"user_role", 'Int'>
    readonly role_name: FieldRef<"user_role", 'String'>
    readonly created_at: FieldRef<"user_role", 'DateTime'>
    readonly updated_at: FieldRef<"user_role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_role findUnique
   */
  export type user_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role findUniqueOrThrow
   */
  export type user_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role findFirst
   */
  export type user_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role findFirstOrThrow
   */
  export type user_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role findMany
   */
  export type user_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role create
   */
  export type user_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a user_role.
     */
    data: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
  }

  /**
   * user_role createMany
   */
  export type user_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_role createManyAndReturn
   */
  export type user_roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_role update
   */
  export type user_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a user_role.
     */
    data: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
    /**
     * Choose, which user_role to update.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role updateMany
   */
  export type user_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to update.
     */
    limit?: number
  }

  /**
   * user_role updateManyAndReturn
   */
  export type user_roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_role upsert
   */
  export type user_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the user_role to update in case it exists.
     */
    where: user_roleWhereUniqueInput
    /**
     * In case the user_role found by the `where` argument doesn't exist, create a new user_role with this data.
     */
    create: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
    /**
     * In case the user_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
  }

  /**
   * user_role delete
   */
  export type user_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter which user_role to delete.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role deleteMany
   */
  export type user_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to delete.
     */
    limit?: number
  }

  /**
   * user_role.user
   */
  export type user_role$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: userWhereInput
  }

  /**
   * user_role without action
   */
  export type user_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
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
    updated_at: 'updated_at',
    role_id: 'role_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Participation_voteScalarFieldEnum: {
    participation_vote_id: 'participation_vote_id',
    user_id: 'user_id',
    participation_id: 'participation_id'
  };

  export type Participation_voteScalarFieldEnum = (typeof Participation_voteScalarFieldEnum)[keyof typeof Participation_voteScalarFieldEnum]


  export const Challenge_voteScalarFieldEnum: {
    challenge_vote_id: 'challenge_vote_id',
    user_id: 'user_id',
    challenge_id: 'challenge_id'
  };

  export type Challenge_voteScalarFieldEnum = (typeof Challenge_voteScalarFieldEnum)[keyof typeof Challenge_voteScalarFieldEnum]


  export const Password_reset_tokenScalarFieldEnum: {
    token_id: 'token_id',
    token: 'token',
    email: 'email',
    expires_at: 'expires_at',
    create_at: 'create_at',
    user_id: 'user_id'
  };

  export type Password_reset_tokenScalarFieldEnum = (typeof Password_reset_tokenScalarFieldEnum)[keyof typeof Password_reset_tokenScalarFieldEnum]


  export const User_roleScalarFieldEnum: {
    id: 'id',
    role_id: 'role_id',
    role_name: 'role_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum]


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
    challenge_vote?: Challenge_voteListRelationFilter
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
    challenge_vote?: challenge_voteOrderByRelationAggregateInput
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
    challenge_vote?: Challenge_voteListRelationFilter
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
    participation_vote?: Participation_voteListRelationFilter
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
    participation_vote?: participation_voteOrderByRelationAggregateInput
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
    participation_vote?: Participation_voteListRelationFilter
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
    role_id?: IntFilter<"user"> | number
    participation?: ParticipationListRelationFilter
    challenge_vote?: Challenge_voteListRelationFilter
    participation_vote?: Participation_voteListRelationFilter
    password_reset_token?: Password_reset_tokenListRelationFilter
    user_role?: User_roleListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    pseudonym?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    role_id?: SortOrder
    participation?: participationOrderByRelationAggregateInput
    challenge_vote?: challenge_voteOrderByRelationAggregateInput
    participation_vote?: participation_voteOrderByRelationAggregateInput
    password_reset_token?: password_reset_tokenOrderByRelationAggregateInput
    user_role?: user_roleOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    pseudonym?: string
    email?: string
    role_id?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password_hash?: StringFilter<"user"> | string
    avatar_url?: StringNullableFilter<"user"> | string | null
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    participation?: ParticipationListRelationFilter
    challenge_vote?: Challenge_voteListRelationFilter
    participation_vote?: Participation_voteListRelationFilter
    password_reset_token?: Password_reset_tokenListRelationFilter
    user_role?: User_roleListRelationFilter
  }, "user_id" | "pseudonym" | "email" | "role_id">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    pseudonym?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    role_id?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
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
    role_id?: IntWithAggregatesFilter<"user"> | number
  }

  export type participation_voteWhereInput = {
    AND?: participation_voteWhereInput | participation_voteWhereInput[]
    OR?: participation_voteWhereInput[]
    NOT?: participation_voteWhereInput | participation_voteWhereInput[]
    participation_vote_id?: UuidFilter<"participation_vote"> | string
    user_id?: UuidFilter<"participation_vote"> | string
    participation_id?: UuidFilter<"participation_vote"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    participation?: XOR<ParticipationScalarRelationFilter, participationWhereInput>
  }

  export type participation_voteOrderByWithRelationInput = {
    participation_vote_id?: SortOrder
    user_id?: SortOrder
    participation_id?: SortOrder
    user?: userOrderByWithRelationInput
    participation?: participationOrderByWithRelationInput
  }

  export type participation_voteWhereUniqueInput = Prisma.AtLeast<{
    participation_vote_id?: string
    AND?: participation_voteWhereInput | participation_voteWhereInput[]
    OR?: participation_voteWhereInput[]
    NOT?: participation_voteWhereInput | participation_voteWhereInput[]
    user_id?: UuidFilter<"participation_vote"> | string
    participation_id?: UuidFilter<"participation_vote"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    participation?: XOR<ParticipationScalarRelationFilter, participationWhereInput>
  }, "participation_vote_id">

  export type participation_voteOrderByWithAggregationInput = {
    participation_vote_id?: SortOrder
    user_id?: SortOrder
    participation_id?: SortOrder
    _count?: participation_voteCountOrderByAggregateInput
    _max?: participation_voteMaxOrderByAggregateInput
    _min?: participation_voteMinOrderByAggregateInput
  }

  export type participation_voteScalarWhereWithAggregatesInput = {
    AND?: participation_voteScalarWhereWithAggregatesInput | participation_voteScalarWhereWithAggregatesInput[]
    OR?: participation_voteScalarWhereWithAggregatesInput[]
    NOT?: participation_voteScalarWhereWithAggregatesInput | participation_voteScalarWhereWithAggregatesInput[]
    participation_vote_id?: UuidWithAggregatesFilter<"participation_vote"> | string
    user_id?: UuidWithAggregatesFilter<"participation_vote"> | string
    participation_id?: UuidWithAggregatesFilter<"participation_vote"> | string
  }

  export type challenge_voteWhereInput = {
    AND?: challenge_voteWhereInput | challenge_voteWhereInput[]
    OR?: challenge_voteWhereInput[]
    NOT?: challenge_voteWhereInput | challenge_voteWhereInput[]
    challenge_vote_id?: UuidFilter<"challenge_vote"> | string
    user_id?: UuidFilter<"challenge_vote"> | string
    challenge_id?: UuidFilter<"challenge_vote"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, challengeWhereInput>
  }

  export type challenge_voteOrderByWithRelationInput = {
    challenge_vote_id?: SortOrder
    user_id?: SortOrder
    challenge_id?: SortOrder
    user?: userOrderByWithRelationInput
    challenge?: challengeOrderByWithRelationInput
  }

  export type challenge_voteWhereUniqueInput = Prisma.AtLeast<{
    challenge_vote_id?: string
    AND?: challenge_voteWhereInput | challenge_voteWhereInput[]
    OR?: challenge_voteWhereInput[]
    NOT?: challenge_voteWhereInput | challenge_voteWhereInput[]
    user_id?: UuidFilter<"challenge_vote"> | string
    challenge_id?: UuidFilter<"challenge_vote"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, challengeWhereInput>
  }, "challenge_vote_id">

  export type challenge_voteOrderByWithAggregationInput = {
    challenge_vote_id?: SortOrder
    user_id?: SortOrder
    challenge_id?: SortOrder
    _count?: challenge_voteCountOrderByAggregateInput
    _max?: challenge_voteMaxOrderByAggregateInput
    _min?: challenge_voteMinOrderByAggregateInput
  }

  export type challenge_voteScalarWhereWithAggregatesInput = {
    AND?: challenge_voteScalarWhereWithAggregatesInput | challenge_voteScalarWhereWithAggregatesInput[]
    OR?: challenge_voteScalarWhereWithAggregatesInput[]
    NOT?: challenge_voteScalarWhereWithAggregatesInput | challenge_voteScalarWhereWithAggregatesInput[]
    challenge_vote_id?: UuidWithAggregatesFilter<"challenge_vote"> | string
    user_id?: UuidWithAggregatesFilter<"challenge_vote"> | string
    challenge_id?: UuidWithAggregatesFilter<"challenge_vote"> | string
  }

  export type password_reset_tokenWhereInput = {
    AND?: password_reset_tokenWhereInput | password_reset_tokenWhereInput[]
    OR?: password_reset_tokenWhereInput[]
    NOT?: password_reset_tokenWhereInput | password_reset_tokenWhereInput[]
    token_id?: UuidFilter<"password_reset_token"> | string
    token?: StringFilter<"password_reset_token"> | string
    email?: StringFilter<"password_reset_token"> | string
    expires_at?: DateTimeFilter<"password_reset_token"> | Date | string
    create_at?: DateTimeFilter<"password_reset_token"> | Date | string
    user_id?: UuidFilter<"password_reset_token"> | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type password_reset_tokenOrderByWithRelationInput = {
    token_id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    expires_at?: SortOrder
    create_at?: SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type password_reset_tokenWhereUniqueInput = Prisma.AtLeast<{
    token_id?: string
    token?: string
    AND?: password_reset_tokenWhereInput | password_reset_tokenWhereInput[]
    OR?: password_reset_tokenWhereInput[]
    NOT?: password_reset_tokenWhereInput | password_reset_tokenWhereInput[]
    email?: StringFilter<"password_reset_token"> | string
    expires_at?: DateTimeFilter<"password_reset_token"> | Date | string
    create_at?: DateTimeFilter<"password_reset_token"> | Date | string
    user_id?: UuidFilter<"password_reset_token"> | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "token_id" | "token">

  export type password_reset_tokenOrderByWithAggregationInput = {
    token_id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    expires_at?: SortOrder
    create_at?: SortOrder
    user_id?: SortOrder
    _count?: password_reset_tokenCountOrderByAggregateInput
    _max?: password_reset_tokenMaxOrderByAggregateInput
    _min?: password_reset_tokenMinOrderByAggregateInput
  }

  export type password_reset_tokenScalarWhereWithAggregatesInput = {
    AND?: password_reset_tokenScalarWhereWithAggregatesInput | password_reset_tokenScalarWhereWithAggregatesInput[]
    OR?: password_reset_tokenScalarWhereWithAggregatesInput[]
    NOT?: password_reset_tokenScalarWhereWithAggregatesInput | password_reset_tokenScalarWhereWithAggregatesInput[]
    token_id?: UuidWithAggregatesFilter<"password_reset_token"> | string
    token?: StringWithAggregatesFilter<"password_reset_token"> | string
    email?: StringWithAggregatesFilter<"password_reset_token"> | string
    expires_at?: DateTimeWithAggregatesFilter<"password_reset_token"> | Date | string
    create_at?: DateTimeWithAggregatesFilter<"password_reset_token"> | Date | string
    user_id?: UuidWithAggregatesFilter<"password_reset_token"> | string
  }

  export type user_roleWhereInput = {
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    id?: UuidFilter<"user_role"> | string
    role_id?: IntFilter<"user_role"> | number
    role_name?: StringFilter<"user_role"> | string
    created_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type user_roleOrderByWithRelationInput = {
    id?: SortOrder
    role_id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type user_roleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    role_id?: IntFilter<"user_role"> | number
    role_name?: StringFilter<"user_role"> | string
    created_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id">

  export type user_roleOrderByWithAggregationInput = {
    id?: SortOrder
    role_id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: user_roleCountOrderByAggregateInput
    _avg?: user_roleAvgOrderByAggregateInput
    _max?: user_roleMaxOrderByAggregateInput
    _min?: user_roleMinOrderByAggregateInput
    _sum?: user_roleSumOrderByAggregateInput
  }

  export type user_roleScalarWhereWithAggregatesInput = {
    AND?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    OR?: user_roleScalarWhereWithAggregatesInput[]
    NOT?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_role"> | string
    role_id?: IntWithAggregatesFilter<"user_role"> | number
    role_name?: StringWithAggregatesFilter<"user_role"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"user_role"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_role"> | Date | string | null
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
    challenge_vote?: challenge_voteCreateNestedManyWithoutChallengeInput
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
    challenge_vote?: challenge_voteUncheckedCreateNestedManyWithoutChallengeInput
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
    challenge_vote?: challenge_voteUpdateManyWithoutChallengeNestedInput
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
    challenge_vote?: challenge_voteUncheckedUpdateManyWithoutChallengeNestedInput
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
    participation_vote?: participation_voteCreateNestedManyWithoutParticipationInput
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
    participation_vote?: participation_voteUncheckedCreateNestedManyWithoutParticipationInput
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
    participation_vote?: participation_voteUpdateManyWithoutParticipationNestedInput
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
    participation_vote?: participation_voteUncheckedUpdateManyWithoutParticipationNestedInput
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
    role_id: number
    participation?: participationCreateNestedManyWithoutUserInput
    challenge_vote?: challenge_voteCreateNestedManyWithoutUserInput
    participation_vote?: participation_voteCreateNestedManyWithoutUserInput
    password_reset_token?: password_reset_tokenCreateNestedManyWithoutUserInput
    user_role?: user_roleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
    participation?: participationUncheckedCreateNestedManyWithoutUserInput
    challenge_vote?: challenge_voteUncheckedCreateNestedManyWithoutUserInput
    participation_vote?: participation_voteUncheckedCreateNestedManyWithoutUserInput
    password_reset_token?: password_reset_tokenUncheckedCreateNestedManyWithoutUserInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    participation?: participationUpdateManyWithoutUserNestedInput
    challenge_vote?: challenge_voteUpdateManyWithoutUserNestedInput
    participation_vote?: participation_voteUpdateManyWithoutUserNestedInput
    password_reset_token?: password_reset_tokenUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    participation?: participationUncheckedUpdateManyWithoutUserNestedInput
    challenge_vote?: challenge_voteUncheckedUpdateManyWithoutUserNestedInput
    participation_vote?: participation_voteUncheckedUpdateManyWithoutUserNestedInput
    password_reset_token?: password_reset_tokenUncheckedUpdateManyWithoutUserNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
  }

  export type userUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type participation_voteCreateInput = {
    participation_vote_id: string
    user: userCreateNestedOneWithoutParticipation_voteInput
    participation: participationCreateNestedOneWithoutParticipation_voteInput
  }

  export type participation_voteUncheckedCreateInput = {
    participation_vote_id: string
    user_id: string
    participation_id: string
  }

  export type participation_voteUpdateInput = {
    participation_vote_id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutParticipation_voteNestedInput
    participation?: participationUpdateOneRequiredWithoutParticipation_voteNestedInput
  }

  export type participation_voteUncheckedUpdateInput = {
    participation_vote_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    participation_id?: StringFieldUpdateOperationsInput | string
  }

  export type participation_voteCreateManyInput = {
    participation_vote_id: string
    user_id: string
    participation_id: string
  }

  export type participation_voteUpdateManyMutationInput = {
    participation_vote_id?: StringFieldUpdateOperationsInput | string
  }

  export type participation_voteUncheckedUpdateManyInput = {
    participation_vote_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    participation_id?: StringFieldUpdateOperationsInput | string
  }

  export type challenge_voteCreateInput = {
    challenge_vote_id: string
    user: userCreateNestedOneWithoutChallenge_voteInput
    challenge: challengeCreateNestedOneWithoutChallenge_voteInput
  }

  export type challenge_voteUncheckedCreateInput = {
    challenge_vote_id: string
    user_id: string
    challenge_id: string
  }

  export type challenge_voteUpdateInput = {
    challenge_vote_id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutChallenge_voteNestedInput
    challenge?: challengeUpdateOneRequiredWithoutChallenge_voteNestedInput
  }

  export type challenge_voteUncheckedUpdateInput = {
    challenge_vote_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    challenge_id?: StringFieldUpdateOperationsInput | string
  }

  export type challenge_voteCreateManyInput = {
    challenge_vote_id: string
    user_id: string
    challenge_id: string
  }

  export type challenge_voteUpdateManyMutationInput = {
    challenge_vote_id?: StringFieldUpdateOperationsInput | string
  }

  export type challenge_voteUncheckedUpdateManyInput = {
    challenge_vote_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    challenge_id?: StringFieldUpdateOperationsInput | string
  }

  export type password_reset_tokenCreateInput = {
    token_id: string
    token: string
    email: string
    expires_at: Date | string
    create_at?: Date | string
    user?: userCreateNestedOneWithoutPassword_reset_tokenInput
  }

  export type password_reset_tokenUncheckedCreateInput = {
    token_id: string
    token: string
    email: string
    expires_at: Date | string
    create_at?: Date | string
    user_id: string
  }

  export type password_reset_tokenUpdateInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutPassword_reset_tokenNestedInput
  }

  export type password_reset_tokenUncheckedUpdateInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type password_reset_tokenCreateManyInput = {
    token_id: string
    token: string
    email: string
    expires_at: Date | string
    create_at?: Date | string
    user_id: string
  }

  export type password_reset_tokenUpdateManyMutationInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokenUncheckedUpdateManyInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_roleCreateInput = {
    id: string
    role_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user?: userCreateNestedOneWithoutUser_roleInput
  }

  export type user_roleUncheckedCreateInput = {
    id: string
    role_id?: number
    role_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutUser_roleNestedInput
  }

  export type user_roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_roleCreateManyInput = {
    id: string
    role_id?: number
    role_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
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

  export type Challenge_voteListRelationFilter = {
    every?: challenge_voteWhereInput
    some?: challenge_voteWhereInput
    none?: challenge_voteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type participationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type challenge_voteOrderByRelationAggregateInput = {
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

  export type Participation_voteListRelationFilter = {
    every?: participation_voteWhereInput
    some?: participation_voteWhereInput
    none?: participation_voteWhereInput
  }

  export type participation_voteOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type Password_reset_tokenListRelationFilter = {
    every?: password_reset_tokenWhereInput
    some?: password_reset_tokenWhereInput
    none?: password_reset_tokenWhereInput
  }

  export type User_roleListRelationFilter = {
    every?: user_roleWhereInput
    some?: user_roleWhereInput
    none?: user_roleWhereInput
  }

  export type password_reset_tokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    pseudonym?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    pseudonym?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    pseudonym?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    role_id?: SortOrder
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

  export type ParticipationScalarRelationFilter = {
    is?: participationWhereInput
    isNot?: participationWhereInput
  }

  export type participation_voteCountOrderByAggregateInput = {
    participation_vote_id?: SortOrder
    user_id?: SortOrder
    participation_id?: SortOrder
  }

  export type participation_voteMaxOrderByAggregateInput = {
    participation_vote_id?: SortOrder
    user_id?: SortOrder
    participation_id?: SortOrder
  }

  export type participation_voteMinOrderByAggregateInput = {
    participation_vote_id?: SortOrder
    user_id?: SortOrder
    participation_id?: SortOrder
  }

  export type challenge_voteCountOrderByAggregateInput = {
    challenge_vote_id?: SortOrder
    user_id?: SortOrder
    challenge_id?: SortOrder
  }

  export type challenge_voteMaxOrderByAggregateInput = {
    challenge_vote_id?: SortOrder
    user_id?: SortOrder
    challenge_id?: SortOrder
  }

  export type challenge_voteMinOrderByAggregateInput = {
    challenge_vote_id?: SortOrder
    user_id?: SortOrder
    challenge_id?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type password_reset_tokenCountOrderByAggregateInput = {
    token_id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    expires_at?: SortOrder
    create_at?: SortOrder
    user_id?: SortOrder
  }

  export type password_reset_tokenMaxOrderByAggregateInput = {
    token_id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    expires_at?: SortOrder
    create_at?: SortOrder
    user_id?: SortOrder
  }

  export type password_reset_tokenMinOrderByAggregateInput = {
    token_id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    expires_at?: SortOrder
    create_at?: SortOrder
    user_id?: SortOrder
  }

  export type user_roleCountOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_roleAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type user_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_roleMinOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_roleSumOrderByAggregateInput = {
    role_id?: SortOrder
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

  export type challenge_voteCreateNestedManyWithoutChallengeInput = {
    create?: XOR<challenge_voteCreateWithoutChallengeInput, challenge_voteUncheckedCreateWithoutChallengeInput> | challenge_voteCreateWithoutChallengeInput[] | challenge_voteUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: challenge_voteCreateOrConnectWithoutChallengeInput | challenge_voteCreateOrConnectWithoutChallengeInput[]
    createMany?: challenge_voteCreateManyChallengeInputEnvelope
    connect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
  }

  export type participationUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<participationCreateWithoutChallengeInput, participationUncheckedCreateWithoutChallengeInput> | participationCreateWithoutChallengeInput[] | participationUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: participationCreateOrConnectWithoutChallengeInput | participationCreateOrConnectWithoutChallengeInput[]
    createMany?: participationCreateManyChallengeInputEnvelope
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
  }

  export type challenge_voteUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<challenge_voteCreateWithoutChallengeInput, challenge_voteUncheckedCreateWithoutChallengeInput> | challenge_voteCreateWithoutChallengeInput[] | challenge_voteUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: challenge_voteCreateOrConnectWithoutChallengeInput | challenge_voteCreateOrConnectWithoutChallengeInput[]
    createMany?: challenge_voteCreateManyChallengeInputEnvelope
    connect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
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

  export type challenge_voteUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<challenge_voteCreateWithoutChallengeInput, challenge_voteUncheckedCreateWithoutChallengeInput> | challenge_voteCreateWithoutChallengeInput[] | challenge_voteUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: challenge_voteCreateOrConnectWithoutChallengeInput | challenge_voteCreateOrConnectWithoutChallengeInput[]
    upsert?: challenge_voteUpsertWithWhereUniqueWithoutChallengeInput | challenge_voteUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: challenge_voteCreateManyChallengeInputEnvelope
    set?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    disconnect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    delete?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    connect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    update?: challenge_voteUpdateWithWhereUniqueWithoutChallengeInput | challenge_voteUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: challenge_voteUpdateManyWithWhereWithoutChallengeInput | challenge_voteUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: challenge_voteScalarWhereInput | challenge_voteScalarWhereInput[]
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

  export type challenge_voteUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<challenge_voteCreateWithoutChallengeInput, challenge_voteUncheckedCreateWithoutChallengeInput> | challenge_voteCreateWithoutChallengeInput[] | challenge_voteUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: challenge_voteCreateOrConnectWithoutChallengeInput | challenge_voteCreateOrConnectWithoutChallengeInput[]
    upsert?: challenge_voteUpsertWithWhereUniqueWithoutChallengeInput | challenge_voteUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: challenge_voteCreateManyChallengeInputEnvelope
    set?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    disconnect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    delete?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    connect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    update?: challenge_voteUpdateWithWhereUniqueWithoutChallengeInput | challenge_voteUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: challenge_voteUpdateManyWithWhereWithoutChallengeInput | challenge_voteUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: challenge_voteScalarWhereInput | challenge_voteScalarWhereInput[]
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

  export type participation_voteCreateNestedManyWithoutParticipationInput = {
    create?: XOR<participation_voteCreateWithoutParticipationInput, participation_voteUncheckedCreateWithoutParticipationInput> | participation_voteCreateWithoutParticipationInput[] | participation_voteUncheckedCreateWithoutParticipationInput[]
    connectOrCreate?: participation_voteCreateOrConnectWithoutParticipationInput | participation_voteCreateOrConnectWithoutParticipationInput[]
    createMany?: participation_voteCreateManyParticipationInputEnvelope
    connect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
  }

  export type participation_voteUncheckedCreateNestedManyWithoutParticipationInput = {
    create?: XOR<participation_voteCreateWithoutParticipationInput, participation_voteUncheckedCreateWithoutParticipationInput> | participation_voteCreateWithoutParticipationInput[] | participation_voteUncheckedCreateWithoutParticipationInput[]
    connectOrCreate?: participation_voteCreateOrConnectWithoutParticipationInput | participation_voteCreateOrConnectWithoutParticipationInput[]
    createMany?: participation_voteCreateManyParticipationInputEnvelope
    connect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
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

  export type participation_voteUpdateManyWithoutParticipationNestedInput = {
    create?: XOR<participation_voteCreateWithoutParticipationInput, participation_voteUncheckedCreateWithoutParticipationInput> | participation_voteCreateWithoutParticipationInput[] | participation_voteUncheckedCreateWithoutParticipationInput[]
    connectOrCreate?: participation_voteCreateOrConnectWithoutParticipationInput | participation_voteCreateOrConnectWithoutParticipationInput[]
    upsert?: participation_voteUpsertWithWhereUniqueWithoutParticipationInput | participation_voteUpsertWithWhereUniqueWithoutParticipationInput[]
    createMany?: participation_voteCreateManyParticipationInputEnvelope
    set?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    disconnect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    delete?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    connect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    update?: participation_voteUpdateWithWhereUniqueWithoutParticipationInput | participation_voteUpdateWithWhereUniqueWithoutParticipationInput[]
    updateMany?: participation_voteUpdateManyWithWhereWithoutParticipationInput | participation_voteUpdateManyWithWhereWithoutParticipationInput[]
    deleteMany?: participation_voteScalarWhereInput | participation_voteScalarWhereInput[]
  }

  export type participation_voteUncheckedUpdateManyWithoutParticipationNestedInput = {
    create?: XOR<participation_voteCreateWithoutParticipationInput, participation_voteUncheckedCreateWithoutParticipationInput> | participation_voteCreateWithoutParticipationInput[] | participation_voteUncheckedCreateWithoutParticipationInput[]
    connectOrCreate?: participation_voteCreateOrConnectWithoutParticipationInput | participation_voteCreateOrConnectWithoutParticipationInput[]
    upsert?: participation_voteUpsertWithWhereUniqueWithoutParticipationInput | participation_voteUpsertWithWhereUniqueWithoutParticipationInput[]
    createMany?: participation_voteCreateManyParticipationInputEnvelope
    set?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    disconnect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    delete?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    connect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    update?: participation_voteUpdateWithWhereUniqueWithoutParticipationInput | participation_voteUpdateWithWhereUniqueWithoutParticipationInput[]
    updateMany?: participation_voteUpdateManyWithWhereWithoutParticipationInput | participation_voteUpdateManyWithWhereWithoutParticipationInput[]
    deleteMany?: participation_voteScalarWhereInput | participation_voteScalarWhereInput[]
  }

  export type participationCreateNestedManyWithoutUserInput = {
    create?: XOR<participationCreateWithoutUserInput, participationUncheckedCreateWithoutUserInput> | participationCreateWithoutUserInput[] | participationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participationCreateOrConnectWithoutUserInput | participationCreateOrConnectWithoutUserInput[]
    createMany?: participationCreateManyUserInputEnvelope
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
  }

  export type challenge_voteCreateNestedManyWithoutUserInput = {
    create?: XOR<challenge_voteCreateWithoutUserInput, challenge_voteUncheckedCreateWithoutUserInput> | challenge_voteCreateWithoutUserInput[] | challenge_voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: challenge_voteCreateOrConnectWithoutUserInput | challenge_voteCreateOrConnectWithoutUserInput[]
    createMany?: challenge_voteCreateManyUserInputEnvelope
    connect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
  }

  export type participation_voteCreateNestedManyWithoutUserInput = {
    create?: XOR<participation_voteCreateWithoutUserInput, participation_voteUncheckedCreateWithoutUserInput> | participation_voteCreateWithoutUserInput[] | participation_voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participation_voteCreateOrConnectWithoutUserInput | participation_voteCreateOrConnectWithoutUserInput[]
    createMany?: participation_voteCreateManyUserInputEnvelope
    connect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
  }

  export type password_reset_tokenCreateNestedManyWithoutUserInput = {
    create?: XOR<password_reset_tokenCreateWithoutUserInput, password_reset_tokenUncheckedCreateWithoutUserInput> | password_reset_tokenCreateWithoutUserInput[] | password_reset_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokenCreateOrConnectWithoutUserInput | password_reset_tokenCreateOrConnectWithoutUserInput[]
    createMany?: password_reset_tokenCreateManyUserInputEnvelope
    connect?: password_reset_tokenWhereUniqueInput | password_reset_tokenWhereUniqueInput[]
  }

  export type user_roleCreateNestedManyWithoutUserInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type participationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<participationCreateWithoutUserInput, participationUncheckedCreateWithoutUserInput> | participationCreateWithoutUserInput[] | participationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participationCreateOrConnectWithoutUserInput | participationCreateOrConnectWithoutUserInput[]
    createMany?: participationCreateManyUserInputEnvelope
    connect?: participationWhereUniqueInput | participationWhereUniqueInput[]
  }

  export type challenge_voteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<challenge_voteCreateWithoutUserInput, challenge_voteUncheckedCreateWithoutUserInput> | challenge_voteCreateWithoutUserInput[] | challenge_voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: challenge_voteCreateOrConnectWithoutUserInput | challenge_voteCreateOrConnectWithoutUserInput[]
    createMany?: challenge_voteCreateManyUserInputEnvelope
    connect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
  }

  export type participation_voteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<participation_voteCreateWithoutUserInput, participation_voteUncheckedCreateWithoutUserInput> | participation_voteCreateWithoutUserInput[] | participation_voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participation_voteCreateOrConnectWithoutUserInput | participation_voteCreateOrConnectWithoutUserInput[]
    createMany?: participation_voteCreateManyUserInputEnvelope
    connect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
  }

  export type password_reset_tokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<password_reset_tokenCreateWithoutUserInput, password_reset_tokenUncheckedCreateWithoutUserInput> | password_reset_tokenCreateWithoutUserInput[] | password_reset_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokenCreateOrConnectWithoutUserInput | password_reset_tokenCreateOrConnectWithoutUserInput[]
    createMany?: password_reset_tokenCreateManyUserInputEnvelope
    connect?: password_reset_tokenWhereUniqueInput | password_reset_tokenWhereUniqueInput[]
  }

  export type user_roleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type challenge_voteUpdateManyWithoutUserNestedInput = {
    create?: XOR<challenge_voteCreateWithoutUserInput, challenge_voteUncheckedCreateWithoutUserInput> | challenge_voteCreateWithoutUserInput[] | challenge_voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: challenge_voteCreateOrConnectWithoutUserInput | challenge_voteCreateOrConnectWithoutUserInput[]
    upsert?: challenge_voteUpsertWithWhereUniqueWithoutUserInput | challenge_voteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: challenge_voteCreateManyUserInputEnvelope
    set?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    disconnect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    delete?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    connect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    update?: challenge_voteUpdateWithWhereUniqueWithoutUserInput | challenge_voteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: challenge_voteUpdateManyWithWhereWithoutUserInput | challenge_voteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: challenge_voteScalarWhereInput | challenge_voteScalarWhereInput[]
  }

  export type participation_voteUpdateManyWithoutUserNestedInput = {
    create?: XOR<participation_voteCreateWithoutUserInput, participation_voteUncheckedCreateWithoutUserInput> | participation_voteCreateWithoutUserInput[] | participation_voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participation_voteCreateOrConnectWithoutUserInput | participation_voteCreateOrConnectWithoutUserInput[]
    upsert?: participation_voteUpsertWithWhereUniqueWithoutUserInput | participation_voteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: participation_voteCreateManyUserInputEnvelope
    set?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    disconnect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    delete?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    connect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    update?: participation_voteUpdateWithWhereUniqueWithoutUserInput | participation_voteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: participation_voteUpdateManyWithWhereWithoutUserInput | participation_voteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: participation_voteScalarWhereInput | participation_voteScalarWhereInput[]
  }

  export type password_reset_tokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_reset_tokenCreateWithoutUserInput, password_reset_tokenUncheckedCreateWithoutUserInput> | password_reset_tokenCreateWithoutUserInput[] | password_reset_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokenCreateOrConnectWithoutUserInput | password_reset_tokenCreateOrConnectWithoutUserInput[]
    upsert?: password_reset_tokenUpsertWithWhereUniqueWithoutUserInput | password_reset_tokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_reset_tokenCreateManyUserInputEnvelope
    set?: password_reset_tokenWhereUniqueInput | password_reset_tokenWhereUniqueInput[]
    disconnect?: password_reset_tokenWhereUniqueInput | password_reset_tokenWhereUniqueInput[]
    delete?: password_reset_tokenWhereUniqueInput | password_reset_tokenWhereUniqueInput[]
    connect?: password_reset_tokenWhereUniqueInput | password_reset_tokenWhereUniqueInput[]
    update?: password_reset_tokenUpdateWithWhereUniqueWithoutUserInput | password_reset_tokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_reset_tokenUpdateManyWithWhereWithoutUserInput | password_reset_tokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_reset_tokenScalarWhereInput | password_reset_tokenScalarWhereInput[]
  }

  export type user_roleUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutUserInput | user_roleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutUserInput | user_roleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutUserInput | user_roleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
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

  export type challenge_voteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<challenge_voteCreateWithoutUserInput, challenge_voteUncheckedCreateWithoutUserInput> | challenge_voteCreateWithoutUserInput[] | challenge_voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: challenge_voteCreateOrConnectWithoutUserInput | challenge_voteCreateOrConnectWithoutUserInput[]
    upsert?: challenge_voteUpsertWithWhereUniqueWithoutUserInput | challenge_voteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: challenge_voteCreateManyUserInputEnvelope
    set?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    disconnect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    delete?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    connect?: challenge_voteWhereUniqueInput | challenge_voteWhereUniqueInput[]
    update?: challenge_voteUpdateWithWhereUniqueWithoutUserInput | challenge_voteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: challenge_voteUpdateManyWithWhereWithoutUserInput | challenge_voteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: challenge_voteScalarWhereInput | challenge_voteScalarWhereInput[]
  }

  export type participation_voteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<participation_voteCreateWithoutUserInput, participation_voteUncheckedCreateWithoutUserInput> | participation_voteCreateWithoutUserInput[] | participation_voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participation_voteCreateOrConnectWithoutUserInput | participation_voteCreateOrConnectWithoutUserInput[]
    upsert?: participation_voteUpsertWithWhereUniqueWithoutUserInput | participation_voteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: participation_voteCreateManyUserInputEnvelope
    set?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    disconnect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    delete?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    connect?: participation_voteWhereUniqueInput | participation_voteWhereUniqueInput[]
    update?: participation_voteUpdateWithWhereUniqueWithoutUserInput | participation_voteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: participation_voteUpdateManyWithWhereWithoutUserInput | participation_voteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: participation_voteScalarWhereInput | participation_voteScalarWhereInput[]
  }

  export type password_reset_tokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_reset_tokenCreateWithoutUserInput, password_reset_tokenUncheckedCreateWithoutUserInput> | password_reset_tokenCreateWithoutUserInput[] | password_reset_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokenCreateOrConnectWithoutUserInput | password_reset_tokenCreateOrConnectWithoutUserInput[]
    upsert?: password_reset_tokenUpsertWithWhereUniqueWithoutUserInput | password_reset_tokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_reset_tokenCreateManyUserInputEnvelope
    set?: password_reset_tokenWhereUniqueInput | password_reset_tokenWhereUniqueInput[]
    disconnect?: password_reset_tokenWhereUniqueInput | password_reset_tokenWhereUniqueInput[]
    delete?: password_reset_tokenWhereUniqueInput | password_reset_tokenWhereUniqueInput[]
    connect?: password_reset_tokenWhereUniqueInput | password_reset_tokenWhereUniqueInput[]
    update?: password_reset_tokenUpdateWithWhereUniqueWithoutUserInput | password_reset_tokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_reset_tokenUpdateManyWithWhereWithoutUserInput | password_reset_tokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_reset_tokenScalarWhereInput | password_reset_tokenScalarWhereInput[]
  }

  export type user_roleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutUserInput | user_roleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutUserInput | user_roleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutUserInput | user_roleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutParticipation_voteInput = {
    create?: XOR<userCreateWithoutParticipation_voteInput, userUncheckedCreateWithoutParticipation_voteInput>
    connectOrCreate?: userCreateOrConnectWithoutParticipation_voteInput
    connect?: userWhereUniqueInput
  }

  export type participationCreateNestedOneWithoutParticipation_voteInput = {
    create?: XOR<participationCreateWithoutParticipation_voteInput, participationUncheckedCreateWithoutParticipation_voteInput>
    connectOrCreate?: participationCreateOrConnectWithoutParticipation_voteInput
    connect?: participationWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutParticipation_voteNestedInput = {
    create?: XOR<userCreateWithoutParticipation_voteInput, userUncheckedCreateWithoutParticipation_voteInput>
    connectOrCreate?: userCreateOrConnectWithoutParticipation_voteInput
    upsert?: userUpsertWithoutParticipation_voteInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutParticipation_voteInput, userUpdateWithoutParticipation_voteInput>, userUncheckedUpdateWithoutParticipation_voteInput>
  }

  export type participationUpdateOneRequiredWithoutParticipation_voteNestedInput = {
    create?: XOR<participationCreateWithoutParticipation_voteInput, participationUncheckedCreateWithoutParticipation_voteInput>
    connectOrCreate?: participationCreateOrConnectWithoutParticipation_voteInput
    upsert?: participationUpsertWithoutParticipation_voteInput
    connect?: participationWhereUniqueInput
    update?: XOR<XOR<participationUpdateToOneWithWhereWithoutParticipation_voteInput, participationUpdateWithoutParticipation_voteInput>, participationUncheckedUpdateWithoutParticipation_voteInput>
  }

  export type userCreateNestedOneWithoutChallenge_voteInput = {
    create?: XOR<userCreateWithoutChallenge_voteInput, userUncheckedCreateWithoutChallenge_voteInput>
    connectOrCreate?: userCreateOrConnectWithoutChallenge_voteInput
    connect?: userWhereUniqueInput
  }

  export type challengeCreateNestedOneWithoutChallenge_voteInput = {
    create?: XOR<challengeCreateWithoutChallenge_voteInput, challengeUncheckedCreateWithoutChallenge_voteInput>
    connectOrCreate?: challengeCreateOrConnectWithoutChallenge_voteInput
    connect?: challengeWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutChallenge_voteNestedInput = {
    create?: XOR<userCreateWithoutChallenge_voteInput, userUncheckedCreateWithoutChallenge_voteInput>
    connectOrCreate?: userCreateOrConnectWithoutChallenge_voteInput
    upsert?: userUpsertWithoutChallenge_voteInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutChallenge_voteInput, userUpdateWithoutChallenge_voteInput>, userUncheckedUpdateWithoutChallenge_voteInput>
  }

  export type challengeUpdateOneRequiredWithoutChallenge_voteNestedInput = {
    create?: XOR<challengeCreateWithoutChallenge_voteInput, challengeUncheckedCreateWithoutChallenge_voteInput>
    connectOrCreate?: challengeCreateOrConnectWithoutChallenge_voteInput
    upsert?: challengeUpsertWithoutChallenge_voteInput
    connect?: challengeWhereUniqueInput
    update?: XOR<XOR<challengeUpdateToOneWithWhereWithoutChallenge_voteInput, challengeUpdateWithoutChallenge_voteInput>, challengeUncheckedUpdateWithoutChallenge_voteInput>
  }

  export type userCreateNestedOneWithoutPassword_reset_tokenInput = {
    create?: XOR<userCreateWithoutPassword_reset_tokenInput, userUncheckedCreateWithoutPassword_reset_tokenInput>
    connectOrCreate?: userCreateOrConnectWithoutPassword_reset_tokenInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneWithoutPassword_reset_tokenNestedInput = {
    create?: XOR<userCreateWithoutPassword_reset_tokenInput, userUncheckedCreateWithoutPassword_reset_tokenInput>
    connectOrCreate?: userCreateOrConnectWithoutPassword_reset_tokenInput
    upsert?: userUpsertWithoutPassword_reset_tokenInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPassword_reset_tokenInput, userUpdateWithoutPassword_reset_tokenInput>, userUncheckedUpdateWithoutPassword_reset_tokenInput>
  }

  export type userCreateNestedOneWithoutUser_roleInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneWithoutUser_roleNestedInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput
    upsert?: userUpsertWithoutUser_roleInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_roleInput, userUpdateWithoutUser_roleInput>, userUncheckedUpdateWithoutUser_roleInput>
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
    participation_vote?: participation_voteCreateNestedManyWithoutParticipationInput
  }

  export type participationUncheckedCreateWithoutChallengeInput = {
    participation_id: string
    user_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    participation_vote?: participation_voteUncheckedCreateNestedManyWithoutParticipationInput
  }

  export type participationCreateOrConnectWithoutChallengeInput = {
    where: participationWhereUniqueInput
    create: XOR<participationCreateWithoutChallengeInput, participationUncheckedCreateWithoutChallengeInput>
  }

  export type participationCreateManyChallengeInputEnvelope = {
    data: participationCreateManyChallengeInput | participationCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type challenge_voteCreateWithoutChallengeInput = {
    challenge_vote_id: string
    user: userCreateNestedOneWithoutChallenge_voteInput
  }

  export type challenge_voteUncheckedCreateWithoutChallengeInput = {
    challenge_vote_id: string
    user_id: string
  }

  export type challenge_voteCreateOrConnectWithoutChallengeInput = {
    where: challenge_voteWhereUniqueInput
    create: XOR<challenge_voteCreateWithoutChallengeInput, challenge_voteUncheckedCreateWithoutChallengeInput>
  }

  export type challenge_voteCreateManyChallengeInputEnvelope = {
    data: challenge_voteCreateManyChallengeInput | challenge_voteCreateManyChallengeInput[]
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

  export type challenge_voteUpsertWithWhereUniqueWithoutChallengeInput = {
    where: challenge_voteWhereUniqueInput
    update: XOR<challenge_voteUpdateWithoutChallengeInput, challenge_voteUncheckedUpdateWithoutChallengeInput>
    create: XOR<challenge_voteCreateWithoutChallengeInput, challenge_voteUncheckedCreateWithoutChallengeInput>
  }

  export type challenge_voteUpdateWithWhereUniqueWithoutChallengeInput = {
    where: challenge_voteWhereUniqueInput
    data: XOR<challenge_voteUpdateWithoutChallengeInput, challenge_voteUncheckedUpdateWithoutChallengeInput>
  }

  export type challenge_voteUpdateManyWithWhereWithoutChallengeInput = {
    where: challenge_voteScalarWhereInput
    data: XOR<challenge_voteUpdateManyMutationInput, challenge_voteUncheckedUpdateManyWithoutChallengeInput>
  }

  export type challenge_voteScalarWhereInput = {
    AND?: challenge_voteScalarWhereInput | challenge_voteScalarWhereInput[]
    OR?: challenge_voteScalarWhereInput[]
    NOT?: challenge_voteScalarWhereInput | challenge_voteScalarWhereInput[]
    challenge_vote_id?: UuidFilter<"challenge_vote"> | string
    user_id?: UuidFilter<"challenge_vote"> | string
    challenge_id?: UuidFilter<"challenge_vote"> | string
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
    challenge_vote?: challenge_voteCreateNestedManyWithoutChallengeInput
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
    challenge_vote?: challenge_voteUncheckedCreateNestedManyWithoutChallengeInput
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
    challenge_vote?: challenge_voteCreateNestedManyWithoutChallengeInput
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
    challenge_vote?: challenge_voteUncheckedCreateNestedManyWithoutChallengeInput
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
    role_id: number
    challenge_vote?: challenge_voteCreateNestedManyWithoutUserInput
    participation_vote?: participation_voteCreateNestedManyWithoutUserInput
    password_reset_token?: password_reset_tokenCreateNestedManyWithoutUserInput
    user_role?: user_roleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutParticipationInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
    challenge_vote?: challenge_voteUncheckedCreateNestedManyWithoutUserInput
    participation_vote?: participation_voteUncheckedCreateNestedManyWithoutUserInput
    password_reset_token?: password_reset_tokenUncheckedCreateNestedManyWithoutUserInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutParticipationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutParticipationInput, userUncheckedCreateWithoutParticipationInput>
  }

  export type participation_voteCreateWithoutParticipationInput = {
    participation_vote_id: string
    user: userCreateNestedOneWithoutParticipation_voteInput
  }

  export type participation_voteUncheckedCreateWithoutParticipationInput = {
    participation_vote_id: string
    user_id: string
  }

  export type participation_voteCreateOrConnectWithoutParticipationInput = {
    where: participation_voteWhereUniqueInput
    create: XOR<participation_voteCreateWithoutParticipationInput, participation_voteUncheckedCreateWithoutParticipationInput>
  }

  export type participation_voteCreateManyParticipationInputEnvelope = {
    data: participation_voteCreateManyParticipationInput | participation_voteCreateManyParticipationInput[]
    skipDuplicates?: boolean
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
    challenge_vote?: challenge_voteUpdateManyWithoutChallengeNestedInput
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
    challenge_vote?: challenge_voteUncheckedUpdateManyWithoutChallengeNestedInput
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
    role_id?: IntFieldUpdateOperationsInput | number
    challenge_vote?: challenge_voteUpdateManyWithoutUserNestedInput
    participation_vote?: participation_voteUpdateManyWithoutUserNestedInput
    password_reset_token?: password_reset_tokenUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutParticipationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    challenge_vote?: challenge_voteUncheckedUpdateManyWithoutUserNestedInput
    participation_vote?: participation_voteUncheckedUpdateManyWithoutUserNestedInput
    password_reset_token?: password_reset_tokenUncheckedUpdateManyWithoutUserNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type participation_voteUpsertWithWhereUniqueWithoutParticipationInput = {
    where: participation_voteWhereUniqueInput
    update: XOR<participation_voteUpdateWithoutParticipationInput, participation_voteUncheckedUpdateWithoutParticipationInput>
    create: XOR<participation_voteCreateWithoutParticipationInput, participation_voteUncheckedCreateWithoutParticipationInput>
  }

  export type participation_voteUpdateWithWhereUniqueWithoutParticipationInput = {
    where: participation_voteWhereUniqueInput
    data: XOR<participation_voteUpdateWithoutParticipationInput, participation_voteUncheckedUpdateWithoutParticipationInput>
  }

  export type participation_voteUpdateManyWithWhereWithoutParticipationInput = {
    where: participation_voteScalarWhereInput
    data: XOR<participation_voteUpdateManyMutationInput, participation_voteUncheckedUpdateManyWithoutParticipationInput>
  }

  export type participation_voteScalarWhereInput = {
    AND?: participation_voteScalarWhereInput | participation_voteScalarWhereInput[]
    OR?: participation_voteScalarWhereInput[]
    NOT?: participation_voteScalarWhereInput | participation_voteScalarWhereInput[]
    participation_vote_id?: UuidFilter<"participation_vote"> | string
    user_id?: UuidFilter<"participation_vote"> | string
    participation_id?: UuidFilter<"participation_vote"> | string
  }

  export type participationCreateWithoutUserInput = {
    participation_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    challenge: challengeCreateNestedOneWithoutParticipationInput
    participation_vote?: participation_voteCreateNestedManyWithoutParticipationInput
  }

  export type participationUncheckedCreateWithoutUserInput = {
    participation_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    challenge_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    participation_vote?: participation_voteUncheckedCreateNestedManyWithoutParticipationInput
  }

  export type participationCreateOrConnectWithoutUserInput = {
    where: participationWhereUniqueInput
    create: XOR<participationCreateWithoutUserInput, participationUncheckedCreateWithoutUserInput>
  }

  export type participationCreateManyUserInputEnvelope = {
    data: participationCreateManyUserInput | participationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type challenge_voteCreateWithoutUserInput = {
    challenge_vote_id: string
    challenge: challengeCreateNestedOneWithoutChallenge_voteInput
  }

  export type challenge_voteUncheckedCreateWithoutUserInput = {
    challenge_vote_id: string
    challenge_id: string
  }

  export type challenge_voteCreateOrConnectWithoutUserInput = {
    where: challenge_voteWhereUniqueInput
    create: XOR<challenge_voteCreateWithoutUserInput, challenge_voteUncheckedCreateWithoutUserInput>
  }

  export type challenge_voteCreateManyUserInputEnvelope = {
    data: challenge_voteCreateManyUserInput | challenge_voteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type participation_voteCreateWithoutUserInput = {
    participation_vote_id: string
    participation: participationCreateNestedOneWithoutParticipation_voteInput
  }

  export type participation_voteUncheckedCreateWithoutUserInput = {
    participation_vote_id: string
    participation_id: string
  }

  export type participation_voteCreateOrConnectWithoutUserInput = {
    where: participation_voteWhereUniqueInput
    create: XOR<participation_voteCreateWithoutUserInput, participation_voteUncheckedCreateWithoutUserInput>
  }

  export type participation_voteCreateManyUserInputEnvelope = {
    data: participation_voteCreateManyUserInput | participation_voteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type password_reset_tokenCreateWithoutUserInput = {
    token_id: string
    token: string
    email: string
    expires_at: Date | string
    create_at?: Date | string
  }

  export type password_reset_tokenUncheckedCreateWithoutUserInput = {
    token_id: string
    token: string
    email: string
    expires_at: Date | string
    create_at?: Date | string
  }

  export type password_reset_tokenCreateOrConnectWithoutUserInput = {
    where: password_reset_tokenWhereUniqueInput
    create: XOR<password_reset_tokenCreateWithoutUserInput, password_reset_tokenUncheckedCreateWithoutUserInput>
  }

  export type password_reset_tokenCreateManyUserInputEnvelope = {
    data: password_reset_tokenCreateManyUserInput | password_reset_tokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_roleCreateWithoutUserInput = {
    id: string
    role_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_roleUncheckedCreateWithoutUserInput = {
    id: string
    role_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_roleCreateOrConnectWithoutUserInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
  }

  export type user_roleCreateManyUserInputEnvelope = {
    data: user_roleCreateManyUserInput | user_roleCreateManyUserInput[]
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

  export type challenge_voteUpsertWithWhereUniqueWithoutUserInput = {
    where: challenge_voteWhereUniqueInput
    update: XOR<challenge_voteUpdateWithoutUserInput, challenge_voteUncheckedUpdateWithoutUserInput>
    create: XOR<challenge_voteCreateWithoutUserInput, challenge_voteUncheckedCreateWithoutUserInput>
  }

  export type challenge_voteUpdateWithWhereUniqueWithoutUserInput = {
    where: challenge_voteWhereUniqueInput
    data: XOR<challenge_voteUpdateWithoutUserInput, challenge_voteUncheckedUpdateWithoutUserInput>
  }

  export type challenge_voteUpdateManyWithWhereWithoutUserInput = {
    where: challenge_voteScalarWhereInput
    data: XOR<challenge_voteUpdateManyMutationInput, challenge_voteUncheckedUpdateManyWithoutUserInput>
  }

  export type participation_voteUpsertWithWhereUniqueWithoutUserInput = {
    where: participation_voteWhereUniqueInput
    update: XOR<participation_voteUpdateWithoutUserInput, participation_voteUncheckedUpdateWithoutUserInput>
    create: XOR<participation_voteCreateWithoutUserInput, participation_voteUncheckedCreateWithoutUserInput>
  }

  export type participation_voteUpdateWithWhereUniqueWithoutUserInput = {
    where: participation_voteWhereUniqueInput
    data: XOR<participation_voteUpdateWithoutUserInput, participation_voteUncheckedUpdateWithoutUserInput>
  }

  export type participation_voteUpdateManyWithWhereWithoutUserInput = {
    where: participation_voteScalarWhereInput
    data: XOR<participation_voteUpdateManyMutationInput, participation_voteUncheckedUpdateManyWithoutUserInput>
  }

  export type password_reset_tokenUpsertWithWhereUniqueWithoutUserInput = {
    where: password_reset_tokenWhereUniqueInput
    update: XOR<password_reset_tokenUpdateWithoutUserInput, password_reset_tokenUncheckedUpdateWithoutUserInput>
    create: XOR<password_reset_tokenCreateWithoutUserInput, password_reset_tokenUncheckedCreateWithoutUserInput>
  }

  export type password_reset_tokenUpdateWithWhereUniqueWithoutUserInput = {
    where: password_reset_tokenWhereUniqueInput
    data: XOR<password_reset_tokenUpdateWithoutUserInput, password_reset_tokenUncheckedUpdateWithoutUserInput>
  }

  export type password_reset_tokenUpdateManyWithWhereWithoutUserInput = {
    where: password_reset_tokenScalarWhereInput
    data: XOR<password_reset_tokenUpdateManyMutationInput, password_reset_tokenUncheckedUpdateManyWithoutUserInput>
  }

  export type password_reset_tokenScalarWhereInput = {
    AND?: password_reset_tokenScalarWhereInput | password_reset_tokenScalarWhereInput[]
    OR?: password_reset_tokenScalarWhereInput[]
    NOT?: password_reset_tokenScalarWhereInput | password_reset_tokenScalarWhereInput[]
    token_id?: UuidFilter<"password_reset_token"> | string
    token?: StringFilter<"password_reset_token"> | string
    email?: StringFilter<"password_reset_token"> | string
    expires_at?: DateTimeFilter<"password_reset_token"> | Date | string
    create_at?: DateTimeFilter<"password_reset_token"> | Date | string
    user_id?: UuidFilter<"password_reset_token"> | string
  }

  export type user_roleUpsertWithWhereUniqueWithoutUserInput = {
    where: user_roleWhereUniqueInput
    update: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
  }

  export type user_roleUpdateWithWhereUniqueWithoutUserInput = {
    where: user_roleWhereUniqueInput
    data: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>
  }

  export type user_roleUpdateManyWithWhereWithoutUserInput = {
    where: user_roleScalarWhereInput
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutUserInput>
  }

  export type user_roleScalarWhereInput = {
    AND?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
    OR?: user_roleScalarWhereInput[]
    NOT?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
    id?: UuidFilter<"user_role"> | string
    role_id?: IntFilter<"user_role"> | number
    role_name?: StringFilter<"user_role"> | string
    created_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
  }

  export type userCreateWithoutParticipation_voteInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
    participation?: participationCreateNestedManyWithoutUserInput
    challenge_vote?: challenge_voteCreateNestedManyWithoutUserInput
    password_reset_token?: password_reset_tokenCreateNestedManyWithoutUserInput
    user_role?: user_roleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutParticipation_voteInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
    participation?: participationUncheckedCreateNestedManyWithoutUserInput
    challenge_vote?: challenge_voteUncheckedCreateNestedManyWithoutUserInput
    password_reset_token?: password_reset_tokenUncheckedCreateNestedManyWithoutUserInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutParticipation_voteInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutParticipation_voteInput, userUncheckedCreateWithoutParticipation_voteInput>
  }

  export type participationCreateWithoutParticipation_voteInput = {
    participation_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    challenge: challengeCreateNestedOneWithoutParticipationInput
    user: userCreateNestedOneWithoutParticipationInput
  }

  export type participationUncheckedCreateWithoutParticipation_voteInput = {
    participation_id: string
    user_id: string
    video_url?: string | null
    image_url?: string | null
    description: string
    challenge_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type participationCreateOrConnectWithoutParticipation_voteInput = {
    where: participationWhereUniqueInput
    create: XOR<participationCreateWithoutParticipation_voteInput, participationUncheckedCreateWithoutParticipation_voteInput>
  }

  export type userUpsertWithoutParticipation_voteInput = {
    update: XOR<userUpdateWithoutParticipation_voteInput, userUncheckedUpdateWithoutParticipation_voteInput>
    create: XOR<userCreateWithoutParticipation_voteInput, userUncheckedCreateWithoutParticipation_voteInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutParticipation_voteInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutParticipation_voteInput, userUncheckedUpdateWithoutParticipation_voteInput>
  }

  export type userUpdateWithoutParticipation_voteInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    participation?: participationUpdateManyWithoutUserNestedInput
    challenge_vote?: challenge_voteUpdateManyWithoutUserNestedInput
    password_reset_token?: password_reset_tokenUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutParticipation_voteInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    participation?: participationUncheckedUpdateManyWithoutUserNestedInput
    challenge_vote?: challenge_voteUncheckedUpdateManyWithoutUserNestedInput
    password_reset_token?: password_reset_tokenUncheckedUpdateManyWithoutUserNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type participationUpsertWithoutParticipation_voteInput = {
    update: XOR<participationUpdateWithoutParticipation_voteInput, participationUncheckedUpdateWithoutParticipation_voteInput>
    create: XOR<participationCreateWithoutParticipation_voteInput, participationUncheckedCreateWithoutParticipation_voteInput>
    where?: participationWhereInput
  }

  export type participationUpdateToOneWithWhereWithoutParticipation_voteInput = {
    where?: participationWhereInput
    data: XOR<participationUpdateWithoutParticipation_voteInput, participationUncheckedUpdateWithoutParticipation_voteInput>
  }

  export type participationUpdateWithoutParticipation_voteInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge?: challengeUpdateOneRequiredWithoutParticipationNestedInput
    user?: userUpdateOneRequiredWithoutParticipationNestedInput
  }

  export type participationUncheckedUpdateWithoutParticipation_voteInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    challenge_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateWithoutChallenge_voteInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
    participation?: participationCreateNestedManyWithoutUserInput
    participation_vote?: participation_voteCreateNestedManyWithoutUserInput
    password_reset_token?: password_reset_tokenCreateNestedManyWithoutUserInput
    user_role?: user_roleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutChallenge_voteInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
    participation?: participationUncheckedCreateNestedManyWithoutUserInput
    participation_vote?: participation_voteUncheckedCreateNestedManyWithoutUserInput
    password_reset_token?: password_reset_tokenUncheckedCreateNestedManyWithoutUserInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutChallenge_voteInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutChallenge_voteInput, userUncheckedCreateWithoutChallenge_voteInput>
  }

  export type challengeCreateWithoutChallenge_voteInput = {
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

  export type challengeUncheckedCreateWithoutChallenge_voteInput = {
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

  export type challengeCreateOrConnectWithoutChallenge_voteInput = {
    where: challengeWhereUniqueInput
    create: XOR<challengeCreateWithoutChallenge_voteInput, challengeUncheckedCreateWithoutChallenge_voteInput>
  }

  export type userUpsertWithoutChallenge_voteInput = {
    update: XOR<userUpdateWithoutChallenge_voteInput, userUncheckedUpdateWithoutChallenge_voteInput>
    create: XOR<userCreateWithoutChallenge_voteInput, userUncheckedCreateWithoutChallenge_voteInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutChallenge_voteInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutChallenge_voteInput, userUncheckedUpdateWithoutChallenge_voteInput>
  }

  export type userUpdateWithoutChallenge_voteInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    participation?: participationUpdateManyWithoutUserNestedInput
    participation_vote?: participation_voteUpdateManyWithoutUserNestedInput
    password_reset_token?: password_reset_tokenUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutChallenge_voteInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    participation?: participationUncheckedUpdateManyWithoutUserNestedInput
    participation_vote?: participation_voteUncheckedUpdateManyWithoutUserNestedInput
    password_reset_token?: password_reset_tokenUncheckedUpdateManyWithoutUserNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type challengeUpsertWithoutChallenge_voteInput = {
    update: XOR<challengeUpdateWithoutChallenge_voteInput, challengeUncheckedUpdateWithoutChallenge_voteInput>
    create: XOR<challengeCreateWithoutChallenge_voteInput, challengeUncheckedCreateWithoutChallenge_voteInput>
    where?: challengeWhereInput
  }

  export type challengeUpdateToOneWithWhereWithoutChallenge_voteInput = {
    where?: challengeWhereInput
    data: XOR<challengeUpdateWithoutChallenge_voteInput, challengeUncheckedUpdateWithoutChallenge_voteInput>
  }

  export type challengeUpdateWithoutChallenge_voteInput = {
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

  export type challengeUncheckedUpdateWithoutChallenge_voteInput = {
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

  export type userCreateWithoutPassword_reset_tokenInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
    participation?: participationCreateNestedManyWithoutUserInput
    challenge_vote?: challenge_voteCreateNestedManyWithoutUserInput
    participation_vote?: participation_voteCreateNestedManyWithoutUserInput
    user_role?: user_roleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPassword_reset_tokenInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
    participation?: participationUncheckedCreateNestedManyWithoutUserInput
    challenge_vote?: challenge_voteUncheckedCreateNestedManyWithoutUserInput
    participation_vote?: participation_voteUncheckedCreateNestedManyWithoutUserInput
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPassword_reset_tokenInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPassword_reset_tokenInput, userUncheckedCreateWithoutPassword_reset_tokenInput>
  }

  export type userUpsertWithoutPassword_reset_tokenInput = {
    update: XOR<userUpdateWithoutPassword_reset_tokenInput, userUncheckedUpdateWithoutPassword_reset_tokenInput>
    create: XOR<userCreateWithoutPassword_reset_tokenInput, userUncheckedCreateWithoutPassword_reset_tokenInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPassword_reset_tokenInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPassword_reset_tokenInput, userUncheckedUpdateWithoutPassword_reset_tokenInput>
  }

  export type userUpdateWithoutPassword_reset_tokenInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    participation?: participationUpdateManyWithoutUserNestedInput
    challenge_vote?: challenge_voteUpdateManyWithoutUserNestedInput
    participation_vote?: participation_voteUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPassword_reset_tokenInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    participation?: participationUncheckedUpdateManyWithoutUserNestedInput
    challenge_vote?: challenge_voteUncheckedUpdateManyWithoutUserNestedInput
    participation_vote?: participation_voteUncheckedUpdateManyWithoutUserNestedInput
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutUser_roleInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
    participation?: participationCreateNestedManyWithoutUserInput
    challenge_vote?: challenge_voteCreateNestedManyWithoutUserInput
    participation_vote?: participation_voteCreateNestedManyWithoutUserInput
    password_reset_token?: password_reset_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_roleInput = {
    user_id: string
    pseudonym: string
    email: string
    password_hash: string
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_id: number
    participation?: participationUncheckedCreateNestedManyWithoutUserInput
    challenge_vote?: challenge_voteUncheckedCreateNestedManyWithoutUserInput
    participation_vote?: participation_voteUncheckedCreateNestedManyWithoutUserInput
    password_reset_token?: password_reset_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_roleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
  }

  export type userUpsertWithoutUser_roleInput = {
    update: XOR<userUpdateWithoutUser_roleInput, userUncheckedUpdateWithoutUser_roleInput>
    create: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_roleInput, userUncheckedUpdateWithoutUser_roleInput>
  }

  export type userUpdateWithoutUser_roleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    participation?: participationUpdateManyWithoutUserNestedInput
    challenge_vote?: challenge_voteUpdateManyWithoutUserNestedInput
    participation_vote?: participation_voteUpdateManyWithoutUserNestedInput
    password_reset_token?: password_reset_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_roleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    pseudonym?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    participation?: participationUncheckedUpdateManyWithoutUserNestedInput
    challenge_vote?: challenge_voteUncheckedUpdateManyWithoutUserNestedInput
    participation_vote?: participation_voteUncheckedUpdateManyWithoutUserNestedInput
    password_reset_token?: password_reset_tokenUncheckedUpdateManyWithoutUserNestedInput
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

  export type challenge_voteCreateManyChallengeInput = {
    challenge_vote_id: string
    user_id: string
  }

  export type participationUpdateWithoutChallengeInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutParticipationNestedInput
    participation_vote?: participation_voteUpdateManyWithoutParticipationNestedInput
  }

  export type participationUncheckedUpdateWithoutChallengeInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participation_vote?: participation_voteUncheckedUpdateManyWithoutParticipationNestedInput
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

  export type challenge_voteUpdateWithoutChallengeInput = {
    challenge_vote_id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutChallenge_voteNestedInput
  }

  export type challenge_voteUncheckedUpdateWithoutChallengeInput = {
    challenge_vote_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type challenge_voteUncheckedUpdateManyWithoutChallengeInput = {
    challenge_vote_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
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
    challenge_vote?: challenge_voteUpdateManyWithoutChallengeNestedInput
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
    challenge_vote?: challenge_voteUncheckedUpdateManyWithoutChallengeNestedInput
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

  export type participation_voteCreateManyParticipationInput = {
    participation_vote_id: string
    user_id: string
  }

  export type participation_voteUpdateWithoutParticipationInput = {
    participation_vote_id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutParticipation_voteNestedInput
  }

  export type participation_voteUncheckedUpdateWithoutParticipationInput = {
    participation_vote_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type participation_voteUncheckedUpdateManyWithoutParticipationInput = {
    participation_vote_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
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

  export type challenge_voteCreateManyUserInput = {
    challenge_vote_id: string
    challenge_id: string
  }

  export type participation_voteCreateManyUserInput = {
    participation_vote_id: string
    participation_id: string
  }

  export type password_reset_tokenCreateManyUserInput = {
    token_id: string
    token: string
    email: string
    expires_at: Date | string
    create_at?: Date | string
  }

  export type user_roleCreateManyUserInput = {
    id: string
    role_name: string
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
    participation_vote?: participation_voteUpdateManyWithoutParticipationNestedInput
  }

  export type participationUncheckedUpdateWithoutUserInput = {
    participation_id?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    challenge_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participation_vote?: participation_voteUncheckedUpdateManyWithoutParticipationNestedInput
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

  export type challenge_voteUpdateWithoutUserInput = {
    challenge_vote_id?: StringFieldUpdateOperationsInput | string
    challenge?: challengeUpdateOneRequiredWithoutChallenge_voteNestedInput
  }

  export type challenge_voteUncheckedUpdateWithoutUserInput = {
    challenge_vote_id?: StringFieldUpdateOperationsInput | string
    challenge_id?: StringFieldUpdateOperationsInput | string
  }

  export type challenge_voteUncheckedUpdateManyWithoutUserInput = {
    challenge_vote_id?: StringFieldUpdateOperationsInput | string
    challenge_id?: StringFieldUpdateOperationsInput | string
  }

  export type participation_voteUpdateWithoutUserInput = {
    participation_vote_id?: StringFieldUpdateOperationsInput | string
    participation?: participationUpdateOneRequiredWithoutParticipation_voteNestedInput
  }

  export type participation_voteUncheckedUpdateWithoutUserInput = {
    participation_vote_id?: StringFieldUpdateOperationsInput | string
    participation_id?: StringFieldUpdateOperationsInput | string
  }

  export type participation_voteUncheckedUpdateManyWithoutUserInput = {
    participation_vote_id?: StringFieldUpdateOperationsInput | string
    participation_id?: StringFieldUpdateOperationsInput | string
  }

  export type password_reset_tokenUpdateWithoutUserInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokenUncheckedUpdateWithoutUserInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokenUncheckedUpdateManyWithoutUserInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_roleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_roleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
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