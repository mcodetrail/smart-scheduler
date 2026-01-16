
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model ScheduledVisit
 * 
 */
export type ScheduledVisit = $Result.DefaultSelection<Prisma.$ScheduledVisitPayload>
/**
 * Model CompletedVisit
 * 
 */
export type CompletedVisit = $Result.DefaultSelection<Prisma.$CompletedVisitPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AssistanceType: {
  ADI: 'ADI',
  ADP: 'ADP',
  CURE_PALLIATIVE: 'CURE_PALLIATIVE',
  DIMISSIONE_PROTETTA: 'DIMISSIONE_PROTETTA',
  RIABILITAZIONE: 'RIABILITAZIONE',
  PRESTAZIONI_INFERMIERISTICHE: 'PRESTAZIONI_INFERMIERISTICHE'
};

export type AssistanceType = (typeof AssistanceType)[keyof typeof AssistanceType]

}

export type AssistanceType = $Enums.AssistanceType

export const AssistanceType: typeof $Enums.AssistanceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduledVisit`: Exposes CRUD operations for the **ScheduledVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduledVisits
    * const scheduledVisits = await prisma.scheduledVisit.findMany()
    * ```
    */
  get scheduledVisit(): Prisma.ScheduledVisitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedVisit`: Exposes CRUD operations for the **CompletedVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedVisits
    * const completedVisits = await prisma.completedVisit.findMany()
    * ```
    */
  get completedVisit(): Prisma.CompletedVisitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    Patient: 'Patient',
    ScheduledVisit: 'ScheduledVisit',
    CompletedVisit: 'CompletedVisit',
    VerificationToken: 'VerificationToken'
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
      modelProps: "account" | "session" | "user" | "patient" | "scheduledVisit" | "completedVisit" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      ScheduledVisit: {
        payload: Prisma.$ScheduledVisitPayload<ExtArgs>
        fields: Prisma.ScheduledVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduledVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduledVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload>
          }
          findFirst: {
            args: Prisma.ScheduledVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduledVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload>
          }
          findMany: {
            args: Prisma.ScheduledVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload>[]
          }
          create: {
            args: Prisma.ScheduledVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload>
          }
          createMany: {
            args: Prisma.ScheduledVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduledVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload>[]
          }
          delete: {
            args: Prisma.ScheduledVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload>
          }
          update: {
            args: Prisma.ScheduledVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload>
          }
          deleteMany: {
            args: Prisma.ScheduledVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduledVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduledVisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload>[]
          }
          upsert: {
            args: Prisma.ScheduledVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledVisitPayload>
          }
          aggregate: {
            args: Prisma.ScheduledVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduledVisit>
          }
          groupBy: {
            args: Prisma.ScheduledVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduledVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduledVisitCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduledVisitCountAggregateOutputType> | number
          }
        }
      }
      CompletedVisit: {
        payload: Prisma.$CompletedVisitPayload<ExtArgs>
        fields: Prisma.CompletedVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload>
          }
          findFirst: {
            args: Prisma.CompletedVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload>
          }
          findMany: {
            args: Prisma.CompletedVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload>[]
          }
          create: {
            args: Prisma.CompletedVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload>
          }
          createMany: {
            args: Prisma.CompletedVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload>[]
          }
          delete: {
            args: Prisma.CompletedVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload>
          }
          update: {
            args: Prisma.CompletedVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload>
          }
          deleteMany: {
            args: Prisma.CompletedVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedVisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload>[]
          }
          upsert: {
            args: Prisma.CompletedVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedVisitPayload>
          }
          aggregate: {
            args: Prisma.CompletedVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedVisit>
          }
          groupBy: {
            args: Prisma.CompletedVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedVisitCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedVisitCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    patient?: PatientOmit
    scheduledVisit?: ScheduledVisitOmit
    completedVisit?: CompletedVisitOmit
    verificationToken?: VerificationTokenOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    createdPatients: number
    assignedPatients: number
    lastAssignedPatients: number
    createdScheduledVisits: number
    assignedScheduledVisits: number
    performedVisits: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    createdPatients?: boolean | UserCountOutputTypeCountCreatedPatientsArgs
    assignedPatients?: boolean | UserCountOutputTypeCountAssignedPatientsArgs
    lastAssignedPatients?: boolean | UserCountOutputTypeCountLastAssignedPatientsArgs
    createdScheduledVisits?: boolean | UserCountOutputTypeCountCreatedScheduledVisitsArgs
    assignedScheduledVisits?: boolean | UserCountOutputTypeCountAssignedScheduledVisitsArgs
    performedVisits?: boolean | UserCountOutputTypeCountPerformedVisitsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLastAssignedPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedScheduledVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledVisitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedScheduledVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledVisitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPerformedVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedVisitWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    scheduledVisits: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledVisits?: boolean | PatientCountOutputTypeCountScheduledVisitsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountScheduledVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledVisitWhereInput
  }


  /**
   * Count Type ScheduledVisitCountOutputType
   */

  export type ScheduledVisitCountOutputType = {
    completedVisits: number
  }

  export type ScheduledVisitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedVisits?: boolean | ScheduledVisitCountOutputTypeCountCompletedVisitsArgs
  }

  // Custom InputTypes
  /**
   * ScheduledVisitCountOutputType without action
   */
  export type ScheduledVisitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisitCountOutputType
     */
    select?: ScheduledVisitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduledVisitCountOutputType without action
   */
  export type ScheduledVisitCountOutputTypeCountCompletedVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedVisitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    createdPatients?: boolean | User$createdPatientsArgs<ExtArgs>
    assignedPatients?: boolean | User$assignedPatientsArgs<ExtArgs>
    lastAssignedPatients?: boolean | User$lastAssignedPatientsArgs<ExtArgs>
    createdScheduledVisits?: boolean | User$createdScheduledVisitsArgs<ExtArgs>
    assignedScheduledVisits?: boolean | User$assignedScheduledVisitsArgs<ExtArgs>
    performedVisits?: boolean | User$performedVisitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "name" | "email" | "emailVerified" | "image" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    createdPatients?: boolean | User$createdPatientsArgs<ExtArgs>
    assignedPatients?: boolean | User$assignedPatientsArgs<ExtArgs>
    lastAssignedPatients?: boolean | User$lastAssignedPatientsArgs<ExtArgs>
    createdScheduledVisits?: boolean | User$createdScheduledVisitsArgs<ExtArgs>
    assignedScheduledVisits?: boolean | User$assignedScheduledVisitsArgs<ExtArgs>
    performedVisits?: boolean | User$performedVisitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      createdPatients: Prisma.$PatientPayload<ExtArgs>[]
      assignedPatients: Prisma.$PatientPayload<ExtArgs>[]
      lastAssignedPatients: Prisma.$PatientPayload<ExtArgs>[]
      createdScheduledVisits: Prisma.$ScheduledVisitPayload<ExtArgs>[]
      assignedScheduledVisits: Prisma.$ScheduledVisitPayload<ExtArgs>[]
      performedVisits: Prisma.$CompletedVisitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdPatients<T extends User$createdPatientsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdPatientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedPatients<T extends User$assignedPatientsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedPatientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lastAssignedPatients<T extends User$lastAssignedPatientsArgs<ExtArgs> = {}>(args?: Subset<T, User$lastAssignedPatientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdScheduledVisits<T extends User$createdScheduledVisitsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdScheduledVisitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedScheduledVisits<T extends User$assignedScheduledVisitsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedScheduledVisitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    performedVisits<T extends User$performedVisitsArgs<ExtArgs> = {}>(args?: Subset<T, User$performedVisitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.createdPatients
   */
  export type User$createdPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * User.assignedPatients
   */
  export type User$assignedPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * User.lastAssignedPatients
   */
  export type User$lastAssignedPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * User.createdScheduledVisits
   */
  export type User$createdScheduledVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    where?: ScheduledVisitWhereInput
    orderBy?: ScheduledVisitOrderByWithRelationInput | ScheduledVisitOrderByWithRelationInput[]
    cursor?: ScheduledVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledVisitScalarFieldEnum | ScheduledVisitScalarFieldEnum[]
  }

  /**
   * User.assignedScheduledVisits
   */
  export type User$assignedScheduledVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    where?: ScheduledVisitWhereInput
    orderBy?: ScheduledVisitOrderByWithRelationInput | ScheduledVisitOrderByWithRelationInput[]
    cursor?: ScheduledVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledVisitScalarFieldEnum | ScheduledVisitScalarFieldEnum[]
  }

  /**
   * User.performedVisits
   */
  export type User$performedVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    where?: CompletedVisitWhereInput
    orderBy?: CompletedVisitOrderByWithRelationInput | CompletedVisitOrderByWithRelationInput[]
    cursor?: CompletedVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedVisitScalarFieldEnum | CompletedVisitScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    fiscalCode: string | null
    address: string | null
    houseNumber: string | null
    city: string | null
    postalCode: string | null
    phone1: string | null
    phone2: string | null
    exemptionCode: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    assignedToId: string | null
    lastAssignedById: string | null
    lastAssignedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    fiscalCode: string | null
    address: string | null
    houseNumber: string | null
    city: string | null
    postalCode: string | null
    phone1: string | null
    phone2: string | null
    exemptionCode: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    assignedToId: string | null
    lastAssignedById: string | null
    lastAssignedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    dateOfBirth: number
    fiscalCode: number
    address: number
    houseNumber: number
    city: number
    postalCode: number
    phone1: number
    phone2: number
    exemptionCode: number
    notes: number
    createdAt: number
    updatedAt: number
    createdById: number
    assignedToId: number
    lastAssignedById: number
    lastAssignedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    fiscalCode?: true
    address?: true
    houseNumber?: true
    city?: true
    postalCode?: true
    phone1?: true
    phone2?: true
    exemptionCode?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    assignedToId?: true
    lastAssignedById?: true
    lastAssignedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    fiscalCode?: true
    address?: true
    houseNumber?: true
    city?: true
    postalCode?: true
    phone1?: true
    phone2?: true
    exemptionCode?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    assignedToId?: true
    lastAssignedById?: true
    lastAssignedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    fiscalCode?: true
    address?: true
    houseNumber?: true
    city?: true
    postalCode?: true
    phone1?: true
    phone2?: true
    exemptionCode?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    assignedToId?: true
    lastAssignedById?: true
    lastAssignedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    dateOfBirth: Date | null
    fiscalCode: string | null
    address: string | null
    houseNumber: string | null
    city: string | null
    postalCode: string | null
    phone1: string
    phone2: string | null
    exemptionCode: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    createdById: string
    assignedToId: string | null
    lastAssignedById: string | null
    lastAssignedAt: Date | null
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    fiscalCode?: boolean
    address?: boolean
    houseNumber?: boolean
    city?: boolean
    postalCode?: boolean
    phone1?: boolean
    phone2?: boolean
    exemptionCode?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    assignedToId?: boolean
    lastAssignedById?: boolean
    lastAssignedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Patient$assignedToArgs<ExtArgs>
    lastAssignedBy?: boolean | Patient$lastAssignedByArgs<ExtArgs>
    scheduledVisits?: boolean | Patient$scheduledVisitsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    fiscalCode?: boolean
    address?: boolean
    houseNumber?: boolean
    city?: boolean
    postalCode?: boolean
    phone1?: boolean
    phone2?: boolean
    exemptionCode?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    assignedToId?: boolean
    lastAssignedById?: boolean
    lastAssignedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Patient$assignedToArgs<ExtArgs>
    lastAssignedBy?: boolean | Patient$lastAssignedByArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    fiscalCode?: boolean
    address?: boolean
    houseNumber?: boolean
    city?: boolean
    postalCode?: boolean
    phone1?: boolean
    phone2?: boolean
    exemptionCode?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    assignedToId?: boolean
    lastAssignedById?: boolean
    lastAssignedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Patient$assignedToArgs<ExtArgs>
    lastAssignedBy?: boolean | Patient$lastAssignedByArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    fiscalCode?: boolean
    address?: boolean
    houseNumber?: boolean
    city?: boolean
    postalCode?: boolean
    phone1?: boolean
    phone2?: boolean
    exemptionCode?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    assignedToId?: boolean
    lastAssignedById?: boolean
    lastAssignedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "dateOfBirth" | "fiscalCode" | "address" | "houseNumber" | "city" | "postalCode" | "phone1" | "phone2" | "exemptionCode" | "notes" | "createdAt" | "updatedAt" | "createdById" | "assignedToId" | "lastAssignedById" | "lastAssignedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Patient$assignedToArgs<ExtArgs>
    lastAssignedBy?: boolean | Patient$lastAssignedByArgs<ExtArgs>
    scheduledVisits?: boolean | Patient$scheduledVisitsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Patient$assignedToArgs<ExtArgs>
    lastAssignedBy?: boolean | Patient$lastAssignedByArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Patient$assignedToArgs<ExtArgs>
    lastAssignedBy?: boolean | Patient$lastAssignedByArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      lastAssignedBy: Prisma.$UserPayload<ExtArgs> | null
      scheduledVisits: Prisma.$ScheduledVisitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      dateOfBirth: Date | null
      fiscalCode: string | null
      address: string | null
      houseNumber: string | null
      city: string | null
      postalCode: string | null
      phone1: string
      phone2: string | null
      exemptionCode: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
      createdById: string
      assignedToId: string | null
      lastAssignedById: string | null
      lastAssignedAt: Date | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends Patient$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Patient$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lastAssignedBy<T extends Patient$lastAssignedByArgs<ExtArgs> = {}>(args?: Subset<T, Patient$lastAssignedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scheduledVisits<T extends Patient$scheduledVisitsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$scheduledVisitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly firstName: FieldRef<"Patient", 'String'>
    readonly lastName: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly fiscalCode: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly houseNumber: FieldRef<"Patient", 'String'>
    readonly city: FieldRef<"Patient", 'String'>
    readonly postalCode: FieldRef<"Patient", 'String'>
    readonly phone1: FieldRef<"Patient", 'String'>
    readonly phone2: FieldRef<"Patient", 'String'>
    readonly exemptionCode: FieldRef<"Patient", 'String'>
    readonly notes: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
    readonly createdById: FieldRef<"Patient", 'String'>
    readonly assignedToId: FieldRef<"Patient", 'String'>
    readonly lastAssignedById: FieldRef<"Patient", 'String'>
    readonly lastAssignedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.assignedTo
   */
  export type Patient$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Patient.lastAssignedBy
   */
  export type Patient$lastAssignedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Patient.scheduledVisits
   */
  export type Patient$scheduledVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    where?: ScheduledVisitWhereInput
    orderBy?: ScheduledVisitOrderByWithRelationInput | ScheduledVisitOrderByWithRelationInput[]
    cursor?: ScheduledVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledVisitScalarFieldEnum | ScheduledVisitScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model ScheduledVisit
   */

  export type AggregateScheduledVisit = {
    _count: ScheduledVisitCountAggregateOutputType | null
    _avg: ScheduledVisitAvgAggregateOutputType | null
    _sum: ScheduledVisitSumAggregateOutputType | null
    _min: ScheduledVisitMinAggregateOutputType | null
    _max: ScheduledVisitMaxAggregateOutputType | null
  }

  export type ScheduledVisitAvgAggregateOutputType = {
    visitFrequency: number | null
  }

  export type ScheduledVisitSumAggregateOutputType = {
    visitFrequency: number | null
  }

  export type ScheduledVisitMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    assistanceType: $Enums.AssistanceType | null
    nextVisitDate: Date | null
    visitFrequency: number | null
    notes: string | null
    isActive: boolean | null
    assignedToId: string | null
    createdAt: Date | null
    createdById: string | null
    updatedAt: Date | null
  }

  export type ScheduledVisitMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    assistanceType: $Enums.AssistanceType | null
    nextVisitDate: Date | null
    visitFrequency: number | null
    notes: string | null
    isActive: boolean | null
    assignedToId: string | null
    createdAt: Date | null
    createdById: string | null
    updatedAt: Date | null
  }

  export type ScheduledVisitCountAggregateOutputType = {
    id: number
    patientId: number
    assistanceType: number
    nextVisitDate: number
    visitFrequency: number
    notes: number
    isActive: number
    assignedToId: number
    createdAt: number
    createdById: number
    updatedAt: number
    _all: number
  }


  export type ScheduledVisitAvgAggregateInputType = {
    visitFrequency?: true
  }

  export type ScheduledVisitSumAggregateInputType = {
    visitFrequency?: true
  }

  export type ScheduledVisitMinAggregateInputType = {
    id?: true
    patientId?: true
    assistanceType?: true
    nextVisitDate?: true
    visitFrequency?: true
    notes?: true
    isActive?: true
    assignedToId?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
  }

  export type ScheduledVisitMaxAggregateInputType = {
    id?: true
    patientId?: true
    assistanceType?: true
    nextVisitDate?: true
    visitFrequency?: true
    notes?: true
    isActive?: true
    assignedToId?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
  }

  export type ScheduledVisitCountAggregateInputType = {
    id?: true
    patientId?: true
    assistanceType?: true
    nextVisitDate?: true
    visitFrequency?: true
    notes?: true
    isActive?: true
    assignedToId?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduledVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledVisit to aggregate.
     */
    where?: ScheduledVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledVisits to fetch.
     */
    orderBy?: ScheduledVisitOrderByWithRelationInput | ScheduledVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduledVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduledVisits
    **/
    _count?: true | ScheduledVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduledVisitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduledVisitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduledVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduledVisitMaxAggregateInputType
  }

  export type GetScheduledVisitAggregateType<T extends ScheduledVisitAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduledVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduledVisit[P]>
      : GetScalarType<T[P], AggregateScheduledVisit[P]>
  }




  export type ScheduledVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledVisitWhereInput
    orderBy?: ScheduledVisitOrderByWithAggregationInput | ScheduledVisitOrderByWithAggregationInput[]
    by: ScheduledVisitScalarFieldEnum[] | ScheduledVisitScalarFieldEnum
    having?: ScheduledVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduledVisitCountAggregateInputType | true
    _avg?: ScheduledVisitAvgAggregateInputType
    _sum?: ScheduledVisitSumAggregateInputType
    _min?: ScheduledVisitMinAggregateInputType
    _max?: ScheduledVisitMaxAggregateInputType
  }

  export type ScheduledVisitGroupByOutputType = {
    id: string
    patientId: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date
    visitFrequency: number | null
    notes: string | null
    isActive: boolean
    assignedToId: string | null
    createdAt: Date
    createdById: string
    updatedAt: Date
    _count: ScheduledVisitCountAggregateOutputType | null
    _avg: ScheduledVisitAvgAggregateOutputType | null
    _sum: ScheduledVisitSumAggregateOutputType | null
    _min: ScheduledVisitMinAggregateOutputType | null
    _max: ScheduledVisitMaxAggregateOutputType | null
  }

  type GetScheduledVisitGroupByPayload<T extends ScheduledVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduledVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduledVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduledVisitGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduledVisitGroupByOutputType[P]>
        }
      >
    >


  export type ScheduledVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    assistanceType?: boolean
    nextVisitDate?: boolean
    visitFrequency?: boolean
    notes?: boolean
    isActive?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    createdById?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    assignedTo?: boolean | ScheduledVisit$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    completedVisits?: boolean | ScheduledVisit$completedVisitsArgs<ExtArgs>
    _count?: boolean | ScheduledVisitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledVisit"]>

  export type ScheduledVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    assistanceType?: boolean
    nextVisitDate?: boolean
    visitFrequency?: boolean
    notes?: boolean
    isActive?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    createdById?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    assignedTo?: boolean | ScheduledVisit$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledVisit"]>

  export type ScheduledVisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    assistanceType?: boolean
    nextVisitDate?: boolean
    visitFrequency?: boolean
    notes?: boolean
    isActive?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    createdById?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    assignedTo?: boolean | ScheduledVisit$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledVisit"]>

  export type ScheduledVisitSelectScalar = {
    id?: boolean
    patientId?: boolean
    assistanceType?: boolean
    nextVisitDate?: boolean
    visitFrequency?: boolean
    notes?: boolean
    isActive?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    createdById?: boolean
    updatedAt?: boolean
  }

  export type ScheduledVisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "assistanceType" | "nextVisitDate" | "visitFrequency" | "notes" | "isActive" | "assignedToId" | "createdAt" | "createdById" | "updatedAt", ExtArgs["result"]["scheduledVisit"]>
  export type ScheduledVisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    assignedTo?: boolean | ScheduledVisit$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    completedVisits?: boolean | ScheduledVisit$completedVisitsArgs<ExtArgs>
    _count?: boolean | ScheduledVisitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduledVisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    assignedTo?: boolean | ScheduledVisit$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScheduledVisitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    assignedTo?: boolean | ScheduledVisit$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ScheduledVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduledVisit"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs>
      completedVisits: Prisma.$CompletedVisitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      assistanceType: $Enums.AssistanceType
      nextVisitDate: Date
      visitFrequency: number | null
      notes: string | null
      isActive: boolean
      assignedToId: string | null
      createdAt: Date
      createdById: string
      updatedAt: Date
    }, ExtArgs["result"]["scheduledVisit"]>
    composites: {}
  }

  type ScheduledVisitGetPayload<S extends boolean | null | undefined | ScheduledVisitDefaultArgs> = $Result.GetResult<Prisma.$ScheduledVisitPayload, S>

  type ScheduledVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduledVisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduledVisitCountAggregateInputType | true
    }

  export interface ScheduledVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduledVisit'], meta: { name: 'ScheduledVisit' } }
    /**
     * Find zero or one ScheduledVisit that matches the filter.
     * @param {ScheduledVisitFindUniqueArgs} args - Arguments to find a ScheduledVisit
     * @example
     * // Get one ScheduledVisit
     * const scheduledVisit = await prisma.scheduledVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduledVisitFindUniqueArgs>(args: SelectSubset<T, ScheduledVisitFindUniqueArgs<ExtArgs>>): Prisma__ScheduledVisitClient<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduledVisit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduledVisitFindUniqueOrThrowArgs} args - Arguments to find a ScheduledVisit
     * @example
     * // Get one ScheduledVisit
     * const scheduledVisit = await prisma.scheduledVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduledVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduledVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduledVisitClient<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledVisitFindFirstArgs} args - Arguments to find a ScheduledVisit
     * @example
     * // Get one ScheduledVisit
     * const scheduledVisit = await prisma.scheduledVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduledVisitFindFirstArgs>(args?: SelectSubset<T, ScheduledVisitFindFirstArgs<ExtArgs>>): Prisma__ScheduledVisitClient<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledVisitFindFirstOrThrowArgs} args - Arguments to find a ScheduledVisit
     * @example
     * // Get one ScheduledVisit
     * const scheduledVisit = await prisma.scheduledVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduledVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduledVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduledVisitClient<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduledVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduledVisits
     * const scheduledVisits = await prisma.scheduledVisit.findMany()
     * 
     * // Get first 10 ScheduledVisits
     * const scheduledVisits = await prisma.scheduledVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduledVisitWithIdOnly = await prisma.scheduledVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduledVisitFindManyArgs>(args?: SelectSubset<T, ScheduledVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduledVisit.
     * @param {ScheduledVisitCreateArgs} args - Arguments to create a ScheduledVisit.
     * @example
     * // Create one ScheduledVisit
     * const ScheduledVisit = await prisma.scheduledVisit.create({
     *   data: {
     *     // ... data to create a ScheduledVisit
     *   }
     * })
     * 
     */
    create<T extends ScheduledVisitCreateArgs>(args: SelectSubset<T, ScheduledVisitCreateArgs<ExtArgs>>): Prisma__ScheduledVisitClient<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduledVisits.
     * @param {ScheduledVisitCreateManyArgs} args - Arguments to create many ScheduledVisits.
     * @example
     * // Create many ScheduledVisits
     * const scheduledVisit = await prisma.scheduledVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduledVisitCreateManyArgs>(args?: SelectSubset<T, ScheduledVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduledVisits and returns the data saved in the database.
     * @param {ScheduledVisitCreateManyAndReturnArgs} args - Arguments to create many ScheduledVisits.
     * @example
     * // Create many ScheduledVisits
     * const scheduledVisit = await prisma.scheduledVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduledVisits and only return the `id`
     * const scheduledVisitWithIdOnly = await prisma.scheduledVisit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduledVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduledVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduledVisit.
     * @param {ScheduledVisitDeleteArgs} args - Arguments to delete one ScheduledVisit.
     * @example
     * // Delete one ScheduledVisit
     * const ScheduledVisit = await prisma.scheduledVisit.delete({
     *   where: {
     *     // ... filter to delete one ScheduledVisit
     *   }
     * })
     * 
     */
    delete<T extends ScheduledVisitDeleteArgs>(args: SelectSubset<T, ScheduledVisitDeleteArgs<ExtArgs>>): Prisma__ScheduledVisitClient<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduledVisit.
     * @param {ScheduledVisitUpdateArgs} args - Arguments to update one ScheduledVisit.
     * @example
     * // Update one ScheduledVisit
     * const scheduledVisit = await prisma.scheduledVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduledVisitUpdateArgs>(args: SelectSubset<T, ScheduledVisitUpdateArgs<ExtArgs>>): Prisma__ScheduledVisitClient<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduledVisits.
     * @param {ScheduledVisitDeleteManyArgs} args - Arguments to filter ScheduledVisits to delete.
     * @example
     * // Delete a few ScheduledVisits
     * const { count } = await prisma.scheduledVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduledVisitDeleteManyArgs>(args?: SelectSubset<T, ScheduledVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduledVisits
     * const scheduledVisit = await prisma.scheduledVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduledVisitUpdateManyArgs>(args: SelectSubset<T, ScheduledVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledVisits and returns the data updated in the database.
     * @param {ScheduledVisitUpdateManyAndReturnArgs} args - Arguments to update many ScheduledVisits.
     * @example
     * // Update many ScheduledVisits
     * const scheduledVisit = await prisma.scheduledVisit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduledVisits and only return the `id`
     * const scheduledVisitWithIdOnly = await prisma.scheduledVisit.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduledVisitUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduledVisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduledVisit.
     * @param {ScheduledVisitUpsertArgs} args - Arguments to update or create a ScheduledVisit.
     * @example
     * // Update or create a ScheduledVisit
     * const scheduledVisit = await prisma.scheduledVisit.upsert({
     *   create: {
     *     // ... data to create a ScheduledVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduledVisit we want to update
     *   }
     * })
     */
    upsert<T extends ScheduledVisitUpsertArgs>(args: SelectSubset<T, ScheduledVisitUpsertArgs<ExtArgs>>): Prisma__ScheduledVisitClient<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduledVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledVisitCountArgs} args - Arguments to filter ScheduledVisits to count.
     * @example
     * // Count the number of ScheduledVisits
     * const count = await prisma.scheduledVisit.count({
     *   where: {
     *     // ... the filter for the ScheduledVisits we want to count
     *   }
     * })
    **/
    count<T extends ScheduledVisitCountArgs>(
      args?: Subset<T, ScheduledVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduledVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduledVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduledVisitAggregateArgs>(args: Subset<T, ScheduledVisitAggregateArgs>): Prisma.PrismaPromise<GetScheduledVisitAggregateType<T>>

    /**
     * Group by ScheduledVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledVisitGroupByArgs} args - Group by arguments.
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
      T extends ScheduledVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduledVisitGroupByArgs['orderBy'] }
        : { orderBy?: ScheduledVisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduledVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduledVisit model
   */
  readonly fields: ScheduledVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduledVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduledVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends ScheduledVisit$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, ScheduledVisit$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completedVisits<T extends ScheduledVisit$completedVisitsArgs<ExtArgs> = {}>(args?: Subset<T, ScheduledVisit$completedVisitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ScheduledVisit model
   */
  interface ScheduledVisitFieldRefs {
    readonly id: FieldRef<"ScheduledVisit", 'String'>
    readonly patientId: FieldRef<"ScheduledVisit", 'String'>
    readonly assistanceType: FieldRef<"ScheduledVisit", 'AssistanceType'>
    readonly nextVisitDate: FieldRef<"ScheduledVisit", 'DateTime'>
    readonly visitFrequency: FieldRef<"ScheduledVisit", 'Int'>
    readonly notes: FieldRef<"ScheduledVisit", 'String'>
    readonly isActive: FieldRef<"ScheduledVisit", 'Boolean'>
    readonly assignedToId: FieldRef<"ScheduledVisit", 'String'>
    readonly createdAt: FieldRef<"ScheduledVisit", 'DateTime'>
    readonly createdById: FieldRef<"ScheduledVisit", 'String'>
    readonly updatedAt: FieldRef<"ScheduledVisit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScheduledVisit findUnique
   */
  export type ScheduledVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledVisit to fetch.
     */
    where: ScheduledVisitWhereUniqueInput
  }

  /**
   * ScheduledVisit findUniqueOrThrow
   */
  export type ScheduledVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledVisit to fetch.
     */
    where: ScheduledVisitWhereUniqueInput
  }

  /**
   * ScheduledVisit findFirst
   */
  export type ScheduledVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledVisit to fetch.
     */
    where?: ScheduledVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledVisits to fetch.
     */
    orderBy?: ScheduledVisitOrderByWithRelationInput | ScheduledVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledVisits.
     */
    cursor?: ScheduledVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledVisits.
     */
    distinct?: ScheduledVisitScalarFieldEnum | ScheduledVisitScalarFieldEnum[]
  }

  /**
   * ScheduledVisit findFirstOrThrow
   */
  export type ScheduledVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledVisit to fetch.
     */
    where?: ScheduledVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledVisits to fetch.
     */
    orderBy?: ScheduledVisitOrderByWithRelationInput | ScheduledVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledVisits.
     */
    cursor?: ScheduledVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledVisits.
     */
    distinct?: ScheduledVisitScalarFieldEnum | ScheduledVisitScalarFieldEnum[]
  }

  /**
   * ScheduledVisit findMany
   */
  export type ScheduledVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledVisits to fetch.
     */
    where?: ScheduledVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledVisits to fetch.
     */
    orderBy?: ScheduledVisitOrderByWithRelationInput | ScheduledVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduledVisits.
     */
    cursor?: ScheduledVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledVisits.
     */
    skip?: number
    distinct?: ScheduledVisitScalarFieldEnum | ScheduledVisitScalarFieldEnum[]
  }

  /**
   * ScheduledVisit create
   */
  export type ScheduledVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduledVisit.
     */
    data: XOR<ScheduledVisitCreateInput, ScheduledVisitUncheckedCreateInput>
  }

  /**
   * ScheduledVisit createMany
   */
  export type ScheduledVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduledVisits.
     */
    data: ScheduledVisitCreateManyInput | ScheduledVisitCreateManyInput[]
  }

  /**
   * ScheduledVisit createManyAndReturn
   */
  export type ScheduledVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduledVisits.
     */
    data: ScheduledVisitCreateManyInput | ScheduledVisitCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledVisit update
   */
  export type ScheduledVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduledVisit.
     */
    data: XOR<ScheduledVisitUpdateInput, ScheduledVisitUncheckedUpdateInput>
    /**
     * Choose, which ScheduledVisit to update.
     */
    where: ScheduledVisitWhereUniqueInput
  }

  /**
   * ScheduledVisit updateMany
   */
  export type ScheduledVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduledVisits.
     */
    data: XOR<ScheduledVisitUpdateManyMutationInput, ScheduledVisitUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledVisits to update
     */
    where?: ScheduledVisitWhereInput
    /**
     * Limit how many ScheduledVisits to update.
     */
    limit?: number
  }

  /**
   * ScheduledVisit updateManyAndReturn
   */
  export type ScheduledVisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * The data used to update ScheduledVisits.
     */
    data: XOR<ScheduledVisitUpdateManyMutationInput, ScheduledVisitUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledVisits to update
     */
    where?: ScheduledVisitWhereInput
    /**
     * Limit how many ScheduledVisits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledVisit upsert
   */
  export type ScheduledVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduledVisit to update in case it exists.
     */
    where: ScheduledVisitWhereUniqueInput
    /**
     * In case the ScheduledVisit found by the `where` argument doesn't exist, create a new ScheduledVisit with this data.
     */
    create: XOR<ScheduledVisitCreateInput, ScheduledVisitUncheckedCreateInput>
    /**
     * In case the ScheduledVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduledVisitUpdateInput, ScheduledVisitUncheckedUpdateInput>
  }

  /**
   * ScheduledVisit delete
   */
  export type ScheduledVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
    /**
     * Filter which ScheduledVisit to delete.
     */
    where: ScheduledVisitWhereUniqueInput
  }

  /**
   * ScheduledVisit deleteMany
   */
  export type ScheduledVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledVisits to delete
     */
    where?: ScheduledVisitWhereInput
    /**
     * Limit how many ScheduledVisits to delete.
     */
    limit?: number
  }

  /**
   * ScheduledVisit.assignedTo
   */
  export type ScheduledVisit$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ScheduledVisit.completedVisits
   */
  export type ScheduledVisit$completedVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    where?: CompletedVisitWhereInput
    orderBy?: CompletedVisitOrderByWithRelationInput | CompletedVisitOrderByWithRelationInput[]
    cursor?: CompletedVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedVisitScalarFieldEnum | CompletedVisitScalarFieldEnum[]
  }

  /**
   * ScheduledVisit without action
   */
  export type ScheduledVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledVisit
     */
    select?: ScheduledVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledVisit
     */
    omit?: ScheduledVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledVisitInclude<ExtArgs> | null
  }


  /**
   * Model CompletedVisit
   */

  export type AggregateCompletedVisit = {
    _count: CompletedVisitCountAggregateOutputType | null
    _min: CompletedVisitMinAggregateOutputType | null
    _max: CompletedVisitMaxAggregateOutputType | null
  }

  export type CompletedVisitMinAggregateOutputType = {
    id: string | null
    scheduledVisitId: string | null
    patientId: string | null
    completedDate: Date | null
    assistanceType: $Enums.AssistanceType | null
    notes: string | null
    performedById: string | null
    createdAt: Date | null
  }

  export type CompletedVisitMaxAggregateOutputType = {
    id: string | null
    scheduledVisitId: string | null
    patientId: string | null
    completedDate: Date | null
    assistanceType: $Enums.AssistanceType | null
    notes: string | null
    performedById: string | null
    createdAt: Date | null
  }

  export type CompletedVisitCountAggregateOutputType = {
    id: number
    scheduledVisitId: number
    patientId: number
    completedDate: number
    assistanceType: number
    notes: number
    performedById: number
    createdAt: number
    _all: number
  }


  export type CompletedVisitMinAggregateInputType = {
    id?: true
    scheduledVisitId?: true
    patientId?: true
    completedDate?: true
    assistanceType?: true
    notes?: true
    performedById?: true
    createdAt?: true
  }

  export type CompletedVisitMaxAggregateInputType = {
    id?: true
    scheduledVisitId?: true
    patientId?: true
    completedDate?: true
    assistanceType?: true
    notes?: true
    performedById?: true
    createdAt?: true
  }

  export type CompletedVisitCountAggregateInputType = {
    id?: true
    scheduledVisitId?: true
    patientId?: true
    completedDate?: true
    assistanceType?: true
    notes?: true
    performedById?: true
    createdAt?: true
    _all?: true
  }

  export type CompletedVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedVisit to aggregate.
     */
    where?: CompletedVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedVisits to fetch.
     */
    orderBy?: CompletedVisitOrderByWithRelationInput | CompletedVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedVisits
    **/
    _count?: true | CompletedVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedVisitMaxAggregateInputType
  }

  export type GetCompletedVisitAggregateType<T extends CompletedVisitAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedVisit[P]>
      : GetScalarType<T[P], AggregateCompletedVisit[P]>
  }




  export type CompletedVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedVisitWhereInput
    orderBy?: CompletedVisitOrderByWithAggregationInput | CompletedVisitOrderByWithAggregationInput[]
    by: CompletedVisitScalarFieldEnum[] | CompletedVisitScalarFieldEnum
    having?: CompletedVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedVisitCountAggregateInputType | true
    _min?: CompletedVisitMinAggregateInputType
    _max?: CompletedVisitMaxAggregateInputType
  }

  export type CompletedVisitGroupByOutputType = {
    id: string
    scheduledVisitId: string
    patientId: string
    completedDate: Date
    assistanceType: $Enums.AssistanceType
    notes: string | null
    performedById: string
    createdAt: Date
    _count: CompletedVisitCountAggregateOutputType | null
    _min: CompletedVisitMinAggregateOutputType | null
    _max: CompletedVisitMaxAggregateOutputType | null
  }

  type GetCompletedVisitGroupByPayload<T extends CompletedVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedVisitGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedVisitGroupByOutputType[P]>
        }
      >
    >


  export type CompletedVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledVisitId?: boolean
    patientId?: boolean
    completedDate?: boolean
    assistanceType?: boolean
    notes?: boolean
    performedById?: boolean
    createdAt?: boolean
    scheduledVisit?: boolean | ScheduledVisitDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedVisit"]>

  export type CompletedVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledVisitId?: boolean
    patientId?: boolean
    completedDate?: boolean
    assistanceType?: boolean
    notes?: boolean
    performedById?: boolean
    createdAt?: boolean
    scheduledVisit?: boolean | ScheduledVisitDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedVisit"]>

  export type CompletedVisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledVisitId?: boolean
    patientId?: boolean
    completedDate?: boolean
    assistanceType?: boolean
    notes?: boolean
    performedById?: boolean
    createdAt?: boolean
    scheduledVisit?: boolean | ScheduledVisitDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedVisit"]>

  export type CompletedVisitSelectScalar = {
    id?: boolean
    scheduledVisitId?: boolean
    patientId?: boolean
    completedDate?: boolean
    assistanceType?: boolean
    notes?: boolean
    performedById?: boolean
    createdAt?: boolean
  }

  export type CompletedVisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduledVisitId" | "patientId" | "completedDate" | "assistanceType" | "notes" | "performedById" | "createdAt", ExtArgs["result"]["completedVisit"]>
  export type CompletedVisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledVisit?: boolean | ScheduledVisitDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompletedVisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledVisit?: boolean | ScheduledVisitDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompletedVisitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledVisit?: boolean | ScheduledVisitDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompletedVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedVisit"
    objects: {
      scheduledVisit: Prisma.$ScheduledVisitPayload<ExtArgs>
      performedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scheduledVisitId: string
      patientId: string
      completedDate: Date
      assistanceType: $Enums.AssistanceType
      notes: string | null
      performedById: string
      createdAt: Date
    }, ExtArgs["result"]["completedVisit"]>
    composites: {}
  }

  type CompletedVisitGetPayload<S extends boolean | null | undefined | CompletedVisitDefaultArgs> = $Result.GetResult<Prisma.$CompletedVisitPayload, S>

  type CompletedVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedVisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedVisitCountAggregateInputType | true
    }

  export interface CompletedVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedVisit'], meta: { name: 'CompletedVisit' } }
    /**
     * Find zero or one CompletedVisit that matches the filter.
     * @param {CompletedVisitFindUniqueArgs} args - Arguments to find a CompletedVisit
     * @example
     * // Get one CompletedVisit
     * const completedVisit = await prisma.completedVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedVisitFindUniqueArgs>(args: SelectSubset<T, CompletedVisitFindUniqueArgs<ExtArgs>>): Prisma__CompletedVisitClient<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedVisit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedVisitFindUniqueOrThrowArgs} args - Arguments to find a CompletedVisit
     * @example
     * // Get one CompletedVisit
     * const completedVisit = await prisma.completedVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedVisitClient<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedVisitFindFirstArgs} args - Arguments to find a CompletedVisit
     * @example
     * // Get one CompletedVisit
     * const completedVisit = await prisma.completedVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedVisitFindFirstArgs>(args?: SelectSubset<T, CompletedVisitFindFirstArgs<ExtArgs>>): Prisma__CompletedVisitClient<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedVisitFindFirstOrThrowArgs} args - Arguments to find a CompletedVisit
     * @example
     * // Get one CompletedVisit
     * const completedVisit = await prisma.completedVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedVisitClient<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedVisits
     * const completedVisits = await prisma.completedVisit.findMany()
     * 
     * // Get first 10 CompletedVisits
     * const completedVisits = await prisma.completedVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedVisitWithIdOnly = await prisma.completedVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedVisitFindManyArgs>(args?: SelectSubset<T, CompletedVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedVisit.
     * @param {CompletedVisitCreateArgs} args - Arguments to create a CompletedVisit.
     * @example
     * // Create one CompletedVisit
     * const CompletedVisit = await prisma.completedVisit.create({
     *   data: {
     *     // ... data to create a CompletedVisit
     *   }
     * })
     * 
     */
    create<T extends CompletedVisitCreateArgs>(args: SelectSubset<T, CompletedVisitCreateArgs<ExtArgs>>): Prisma__CompletedVisitClient<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedVisits.
     * @param {CompletedVisitCreateManyArgs} args - Arguments to create many CompletedVisits.
     * @example
     * // Create many CompletedVisits
     * const completedVisit = await prisma.completedVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedVisitCreateManyArgs>(args?: SelectSubset<T, CompletedVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedVisits and returns the data saved in the database.
     * @param {CompletedVisitCreateManyAndReturnArgs} args - Arguments to create many CompletedVisits.
     * @example
     * // Create many CompletedVisits
     * const completedVisit = await prisma.completedVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedVisits and only return the `id`
     * const completedVisitWithIdOnly = await prisma.completedVisit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompletedVisit.
     * @param {CompletedVisitDeleteArgs} args - Arguments to delete one CompletedVisit.
     * @example
     * // Delete one CompletedVisit
     * const CompletedVisit = await prisma.completedVisit.delete({
     *   where: {
     *     // ... filter to delete one CompletedVisit
     *   }
     * })
     * 
     */
    delete<T extends CompletedVisitDeleteArgs>(args: SelectSubset<T, CompletedVisitDeleteArgs<ExtArgs>>): Prisma__CompletedVisitClient<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedVisit.
     * @param {CompletedVisitUpdateArgs} args - Arguments to update one CompletedVisit.
     * @example
     * // Update one CompletedVisit
     * const completedVisit = await prisma.completedVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedVisitUpdateArgs>(args: SelectSubset<T, CompletedVisitUpdateArgs<ExtArgs>>): Prisma__CompletedVisitClient<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedVisits.
     * @param {CompletedVisitDeleteManyArgs} args - Arguments to filter CompletedVisits to delete.
     * @example
     * // Delete a few CompletedVisits
     * const { count } = await prisma.completedVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedVisitDeleteManyArgs>(args?: SelectSubset<T, CompletedVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedVisits
     * const completedVisit = await prisma.completedVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedVisitUpdateManyArgs>(args: SelectSubset<T, CompletedVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedVisits and returns the data updated in the database.
     * @param {CompletedVisitUpdateManyAndReturnArgs} args - Arguments to update many CompletedVisits.
     * @example
     * // Update many CompletedVisits
     * const completedVisit = await prisma.completedVisit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompletedVisits and only return the `id`
     * const completedVisitWithIdOnly = await prisma.completedVisit.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompletedVisitUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedVisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompletedVisit.
     * @param {CompletedVisitUpsertArgs} args - Arguments to update or create a CompletedVisit.
     * @example
     * // Update or create a CompletedVisit
     * const completedVisit = await prisma.completedVisit.upsert({
     *   create: {
     *     // ... data to create a CompletedVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedVisit we want to update
     *   }
     * })
     */
    upsert<T extends CompletedVisitUpsertArgs>(args: SelectSubset<T, CompletedVisitUpsertArgs<ExtArgs>>): Prisma__CompletedVisitClient<$Result.GetResult<Prisma.$CompletedVisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedVisitCountArgs} args - Arguments to filter CompletedVisits to count.
     * @example
     * // Count the number of CompletedVisits
     * const count = await prisma.completedVisit.count({
     *   where: {
     *     // ... the filter for the CompletedVisits we want to count
     *   }
     * })
    **/
    count<T extends CompletedVisitCountArgs>(
      args?: Subset<T, CompletedVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompletedVisitAggregateArgs>(args: Subset<T, CompletedVisitAggregateArgs>): Prisma.PrismaPromise<GetCompletedVisitAggregateType<T>>

    /**
     * Group by CompletedVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedVisitGroupByArgs} args - Group by arguments.
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
      T extends CompletedVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedVisitGroupByArgs['orderBy'] }
        : { orderBy?: CompletedVisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompletedVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedVisit model
   */
  readonly fields: CompletedVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scheduledVisit<T extends ScheduledVisitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduledVisitDefaultArgs<ExtArgs>>): Prisma__ScheduledVisitClient<$Result.GetResult<Prisma.$ScheduledVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    performedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompletedVisit model
   */
  interface CompletedVisitFieldRefs {
    readonly id: FieldRef<"CompletedVisit", 'String'>
    readonly scheduledVisitId: FieldRef<"CompletedVisit", 'String'>
    readonly patientId: FieldRef<"CompletedVisit", 'String'>
    readonly completedDate: FieldRef<"CompletedVisit", 'DateTime'>
    readonly assistanceType: FieldRef<"CompletedVisit", 'AssistanceType'>
    readonly notes: FieldRef<"CompletedVisit", 'String'>
    readonly performedById: FieldRef<"CompletedVisit", 'String'>
    readonly createdAt: FieldRef<"CompletedVisit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompletedVisit findUnique
   */
  export type CompletedVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    /**
     * Filter, which CompletedVisit to fetch.
     */
    where: CompletedVisitWhereUniqueInput
  }

  /**
   * CompletedVisit findUniqueOrThrow
   */
  export type CompletedVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    /**
     * Filter, which CompletedVisit to fetch.
     */
    where: CompletedVisitWhereUniqueInput
  }

  /**
   * CompletedVisit findFirst
   */
  export type CompletedVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    /**
     * Filter, which CompletedVisit to fetch.
     */
    where?: CompletedVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedVisits to fetch.
     */
    orderBy?: CompletedVisitOrderByWithRelationInput | CompletedVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedVisits.
     */
    cursor?: CompletedVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedVisits.
     */
    distinct?: CompletedVisitScalarFieldEnum | CompletedVisitScalarFieldEnum[]
  }

  /**
   * CompletedVisit findFirstOrThrow
   */
  export type CompletedVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    /**
     * Filter, which CompletedVisit to fetch.
     */
    where?: CompletedVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedVisits to fetch.
     */
    orderBy?: CompletedVisitOrderByWithRelationInput | CompletedVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedVisits.
     */
    cursor?: CompletedVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedVisits.
     */
    distinct?: CompletedVisitScalarFieldEnum | CompletedVisitScalarFieldEnum[]
  }

  /**
   * CompletedVisit findMany
   */
  export type CompletedVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    /**
     * Filter, which CompletedVisits to fetch.
     */
    where?: CompletedVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedVisits to fetch.
     */
    orderBy?: CompletedVisitOrderByWithRelationInput | CompletedVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedVisits.
     */
    cursor?: CompletedVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedVisits.
     */
    skip?: number
    distinct?: CompletedVisitScalarFieldEnum | CompletedVisitScalarFieldEnum[]
  }

  /**
   * CompletedVisit create
   */
  export type CompletedVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedVisit.
     */
    data: XOR<CompletedVisitCreateInput, CompletedVisitUncheckedCreateInput>
  }

  /**
   * CompletedVisit createMany
   */
  export type CompletedVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedVisits.
     */
    data: CompletedVisitCreateManyInput | CompletedVisitCreateManyInput[]
  }

  /**
   * CompletedVisit createManyAndReturn
   */
  export type CompletedVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * The data used to create many CompletedVisits.
     */
    data: CompletedVisitCreateManyInput | CompletedVisitCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedVisit update
   */
  export type CompletedVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedVisit.
     */
    data: XOR<CompletedVisitUpdateInput, CompletedVisitUncheckedUpdateInput>
    /**
     * Choose, which CompletedVisit to update.
     */
    where: CompletedVisitWhereUniqueInput
  }

  /**
   * CompletedVisit updateMany
   */
  export type CompletedVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedVisits.
     */
    data: XOR<CompletedVisitUpdateManyMutationInput, CompletedVisitUncheckedUpdateManyInput>
    /**
     * Filter which CompletedVisits to update
     */
    where?: CompletedVisitWhereInput
    /**
     * Limit how many CompletedVisits to update.
     */
    limit?: number
  }

  /**
   * CompletedVisit updateManyAndReturn
   */
  export type CompletedVisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * The data used to update CompletedVisits.
     */
    data: XOR<CompletedVisitUpdateManyMutationInput, CompletedVisitUncheckedUpdateManyInput>
    /**
     * Filter which CompletedVisits to update
     */
    where?: CompletedVisitWhereInput
    /**
     * Limit how many CompletedVisits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedVisit upsert
   */
  export type CompletedVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedVisit to update in case it exists.
     */
    where: CompletedVisitWhereUniqueInput
    /**
     * In case the CompletedVisit found by the `where` argument doesn't exist, create a new CompletedVisit with this data.
     */
    create: XOR<CompletedVisitCreateInput, CompletedVisitUncheckedCreateInput>
    /**
     * In case the CompletedVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedVisitUpdateInput, CompletedVisitUncheckedUpdateInput>
  }

  /**
   * CompletedVisit delete
   */
  export type CompletedVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
    /**
     * Filter which CompletedVisit to delete.
     */
    where: CompletedVisitWhereUniqueInput
  }

  /**
   * CompletedVisit deleteMany
   */
  export type CompletedVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedVisits to delete
     */
    where?: CompletedVisitWhereInput
    /**
     * Limit how many CompletedVisits to delete.
     */
    limit?: number
  }

  /**
   * CompletedVisit without action
   */
  export type CompletedVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedVisit
     */
    select?: CompletedVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedVisit
     */
    omit?: CompletedVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedVisitInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    fiscalCode: 'fiscalCode',
    address: 'address',
    houseNumber: 'houseNumber',
    city: 'city',
    postalCode: 'postalCode',
    phone1: 'phone1',
    phone2: 'phone2',
    exemptionCode: 'exemptionCode',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById',
    assignedToId: 'assignedToId',
    lastAssignedById: 'lastAssignedById',
    lastAssignedAt: 'lastAssignedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const ScheduledVisitScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    assistanceType: 'assistanceType',
    nextVisitDate: 'nextVisitDate',
    visitFrequency: 'visitFrequency',
    notes: 'notes',
    isActive: 'isActive',
    assignedToId: 'assignedToId',
    createdAt: 'createdAt',
    createdById: 'createdById',
    updatedAt: 'updatedAt'
  };

  export type ScheduledVisitScalarFieldEnum = (typeof ScheduledVisitScalarFieldEnum)[keyof typeof ScheduledVisitScalarFieldEnum]


  export const CompletedVisitScalarFieldEnum: {
    id: 'id',
    scheduledVisitId: 'scheduledVisitId',
    patientId: 'patientId',
    completedDate: 'completedDate',
    assistanceType: 'assistanceType',
    notes: 'notes',
    performedById: 'performedById',
    createdAt: 'createdAt'
  };

  export type CompletedVisitScalarFieldEnum = (typeof CompletedVisitScalarFieldEnum)[keyof typeof CompletedVisitScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AssistanceType'
   */
  export type EnumAssistanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssistanceType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    createdPatients?: PatientListRelationFilter
    assignedPatients?: PatientListRelationFilter
    lastAssignedPatients?: PatientListRelationFilter
    createdScheduledVisits?: ScheduledVisitListRelationFilter
    assignedScheduledVisits?: ScheduledVisitListRelationFilter
    performedVisits?: CompletedVisitListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    createdPatients?: PatientOrderByRelationAggregateInput
    assignedPatients?: PatientOrderByRelationAggregateInput
    lastAssignedPatients?: PatientOrderByRelationAggregateInput
    createdScheduledVisits?: ScheduledVisitOrderByRelationAggregateInput
    assignedScheduledVisits?: ScheduledVisitOrderByRelationAggregateInput
    performedVisits?: CompletedVisitOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    createdPatients?: PatientListRelationFilter
    assignedPatients?: PatientListRelationFilter
    lastAssignedPatients?: PatientListRelationFilter
    createdScheduledVisits?: ScheduledVisitListRelationFilter
    assignedScheduledVisits?: ScheduledVisitListRelationFilter
    performedVisits?: CompletedVisitListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    fiscalCode?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    houseNumber?: StringNullableFilter<"Patient"> | string | null
    city?: StringNullableFilter<"Patient"> | string | null
    postalCode?: StringNullableFilter<"Patient"> | string | null
    phone1?: StringFilter<"Patient"> | string
    phone2?: StringNullableFilter<"Patient"> | string | null
    exemptionCode?: StringFilter<"Patient"> | string
    notes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    createdById?: StringFilter<"Patient"> | string
    assignedToId?: StringNullableFilter<"Patient"> | string | null
    lastAssignedById?: StringNullableFilter<"Patient"> | string | null
    lastAssignedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    lastAssignedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    scheduledVisits?: ScheduledVisitListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    fiscalCode?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    phone1?: SortOrder
    phone2?: SortOrderInput | SortOrder
    exemptionCode?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    lastAssignedById?: SortOrderInput | SortOrder
    lastAssignedAt?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    lastAssignedBy?: UserOrderByWithRelationInput
    scheduledVisits?: ScheduledVisitOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fiscalCode?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    houseNumber?: StringNullableFilter<"Patient"> | string | null
    city?: StringNullableFilter<"Patient"> | string | null
    postalCode?: StringNullableFilter<"Patient"> | string | null
    phone1?: StringFilter<"Patient"> | string
    phone2?: StringNullableFilter<"Patient"> | string | null
    exemptionCode?: StringFilter<"Patient"> | string
    notes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    createdById?: StringFilter<"Patient"> | string
    assignedToId?: StringNullableFilter<"Patient"> | string | null
    lastAssignedById?: StringNullableFilter<"Patient"> | string | null
    lastAssignedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    lastAssignedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    scheduledVisits?: ScheduledVisitListRelationFilter
  }, "id" | "fiscalCode">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    fiscalCode?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    phone1?: SortOrder
    phone2?: SortOrderInput | SortOrder
    exemptionCode?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    lastAssignedById?: SortOrderInput | SortOrder
    lastAssignedAt?: SortOrderInput | SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    firstName?: StringWithAggregatesFilter<"Patient"> | string
    lastName?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    fiscalCode?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    houseNumber?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    city?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    phone1?: StringWithAggregatesFilter<"Patient"> | string
    phone2?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    exemptionCode?: StringWithAggregatesFilter<"Patient"> | string
    notes?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    createdById?: StringWithAggregatesFilter<"Patient"> | string
    assignedToId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    lastAssignedById?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    lastAssignedAt?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
  }

  export type ScheduledVisitWhereInput = {
    AND?: ScheduledVisitWhereInput | ScheduledVisitWhereInput[]
    OR?: ScheduledVisitWhereInput[]
    NOT?: ScheduledVisitWhereInput | ScheduledVisitWhereInput[]
    id?: StringFilter<"ScheduledVisit"> | string
    patientId?: StringFilter<"ScheduledVisit"> | string
    assistanceType?: EnumAssistanceTypeFilter<"ScheduledVisit"> | $Enums.AssistanceType
    nextVisitDate?: DateTimeFilter<"ScheduledVisit"> | Date | string
    visitFrequency?: IntNullableFilter<"ScheduledVisit"> | number | null
    notes?: StringNullableFilter<"ScheduledVisit"> | string | null
    isActive?: BoolFilter<"ScheduledVisit"> | boolean
    assignedToId?: StringNullableFilter<"ScheduledVisit"> | string | null
    createdAt?: DateTimeFilter<"ScheduledVisit"> | Date | string
    createdById?: StringFilter<"ScheduledVisit"> | string
    updatedAt?: DateTimeFilter<"ScheduledVisit"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    completedVisits?: CompletedVisitListRelationFilter
  }

  export type ScheduledVisitOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    assistanceType?: SortOrder
    nextVisitDate?: SortOrder
    visitFrequency?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isActive?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    completedVisits?: CompletedVisitOrderByRelationAggregateInput
  }

  export type ScheduledVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduledVisitWhereInput | ScheduledVisitWhereInput[]
    OR?: ScheduledVisitWhereInput[]
    NOT?: ScheduledVisitWhereInput | ScheduledVisitWhereInput[]
    patientId?: StringFilter<"ScheduledVisit"> | string
    assistanceType?: EnumAssistanceTypeFilter<"ScheduledVisit"> | $Enums.AssistanceType
    nextVisitDate?: DateTimeFilter<"ScheduledVisit"> | Date | string
    visitFrequency?: IntNullableFilter<"ScheduledVisit"> | number | null
    notes?: StringNullableFilter<"ScheduledVisit"> | string | null
    isActive?: BoolFilter<"ScheduledVisit"> | boolean
    assignedToId?: StringNullableFilter<"ScheduledVisit"> | string | null
    createdAt?: DateTimeFilter<"ScheduledVisit"> | Date | string
    createdById?: StringFilter<"ScheduledVisit"> | string
    updatedAt?: DateTimeFilter<"ScheduledVisit"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    completedVisits?: CompletedVisitListRelationFilter
  }, "id">

  export type ScheduledVisitOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    assistanceType?: SortOrder
    nextVisitDate?: SortOrder
    visitFrequency?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isActive?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduledVisitCountOrderByAggregateInput
    _avg?: ScheduledVisitAvgOrderByAggregateInput
    _max?: ScheduledVisitMaxOrderByAggregateInput
    _min?: ScheduledVisitMinOrderByAggregateInput
    _sum?: ScheduledVisitSumOrderByAggregateInput
  }

  export type ScheduledVisitScalarWhereWithAggregatesInput = {
    AND?: ScheduledVisitScalarWhereWithAggregatesInput | ScheduledVisitScalarWhereWithAggregatesInput[]
    OR?: ScheduledVisitScalarWhereWithAggregatesInput[]
    NOT?: ScheduledVisitScalarWhereWithAggregatesInput | ScheduledVisitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduledVisit"> | string
    patientId?: StringWithAggregatesFilter<"ScheduledVisit"> | string
    assistanceType?: EnumAssistanceTypeWithAggregatesFilter<"ScheduledVisit"> | $Enums.AssistanceType
    nextVisitDate?: DateTimeWithAggregatesFilter<"ScheduledVisit"> | Date | string
    visitFrequency?: IntNullableWithAggregatesFilter<"ScheduledVisit"> | number | null
    notes?: StringNullableWithAggregatesFilter<"ScheduledVisit"> | string | null
    isActive?: BoolWithAggregatesFilter<"ScheduledVisit"> | boolean
    assignedToId?: StringNullableWithAggregatesFilter<"ScheduledVisit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScheduledVisit"> | Date | string
    createdById?: StringWithAggregatesFilter<"ScheduledVisit"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduledVisit"> | Date | string
  }

  export type CompletedVisitWhereInput = {
    AND?: CompletedVisitWhereInput | CompletedVisitWhereInput[]
    OR?: CompletedVisitWhereInput[]
    NOT?: CompletedVisitWhereInput | CompletedVisitWhereInput[]
    id?: StringFilter<"CompletedVisit"> | string
    scheduledVisitId?: StringFilter<"CompletedVisit"> | string
    patientId?: StringFilter<"CompletedVisit"> | string
    completedDate?: DateTimeFilter<"CompletedVisit"> | Date | string
    assistanceType?: EnumAssistanceTypeFilter<"CompletedVisit"> | $Enums.AssistanceType
    notes?: StringNullableFilter<"CompletedVisit"> | string | null
    performedById?: StringFilter<"CompletedVisit"> | string
    createdAt?: DateTimeFilter<"CompletedVisit"> | Date | string
    scheduledVisit?: XOR<ScheduledVisitScalarRelationFilter, ScheduledVisitWhereInput>
    performedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompletedVisitOrderByWithRelationInput = {
    id?: SortOrder
    scheduledVisitId?: SortOrder
    patientId?: SortOrder
    completedDate?: SortOrder
    assistanceType?: SortOrder
    notes?: SortOrderInput | SortOrder
    performedById?: SortOrder
    createdAt?: SortOrder
    scheduledVisit?: ScheduledVisitOrderByWithRelationInput
    performedBy?: UserOrderByWithRelationInput
  }

  export type CompletedVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompletedVisitWhereInput | CompletedVisitWhereInput[]
    OR?: CompletedVisitWhereInput[]
    NOT?: CompletedVisitWhereInput | CompletedVisitWhereInput[]
    scheduledVisitId?: StringFilter<"CompletedVisit"> | string
    patientId?: StringFilter<"CompletedVisit"> | string
    completedDate?: DateTimeFilter<"CompletedVisit"> | Date | string
    assistanceType?: EnumAssistanceTypeFilter<"CompletedVisit"> | $Enums.AssistanceType
    notes?: StringNullableFilter<"CompletedVisit"> | string | null
    performedById?: StringFilter<"CompletedVisit"> | string
    createdAt?: DateTimeFilter<"CompletedVisit"> | Date | string
    scheduledVisit?: XOR<ScheduledVisitScalarRelationFilter, ScheduledVisitWhereInput>
    performedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CompletedVisitOrderByWithAggregationInput = {
    id?: SortOrder
    scheduledVisitId?: SortOrder
    patientId?: SortOrder
    completedDate?: SortOrder
    assistanceType?: SortOrder
    notes?: SortOrderInput | SortOrder
    performedById?: SortOrder
    createdAt?: SortOrder
    _count?: CompletedVisitCountOrderByAggregateInput
    _max?: CompletedVisitMaxOrderByAggregateInput
    _min?: CompletedVisitMinOrderByAggregateInput
  }

  export type CompletedVisitScalarWhereWithAggregatesInput = {
    AND?: CompletedVisitScalarWhereWithAggregatesInput | CompletedVisitScalarWhereWithAggregatesInput[]
    OR?: CompletedVisitScalarWhereWithAggregatesInput[]
    NOT?: CompletedVisitScalarWhereWithAggregatesInput | CompletedVisitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompletedVisit"> | string
    scheduledVisitId?: StringWithAggregatesFilter<"CompletedVisit"> | string
    patientId?: StringWithAggregatesFilter<"CompletedVisit"> | string
    completedDate?: DateTimeWithAggregatesFilter<"CompletedVisit"> | Date | string
    assistanceType?: EnumAssistanceTypeWithAggregatesFilter<"CompletedVisit"> | $Enums.AssistanceType
    notes?: StringNullableWithAggregatesFilter<"CompletedVisit"> | string | null
    performedById?: StringWithAggregatesFilter<"CompletedVisit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CompletedVisit"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdPatients?: PatientCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdPatients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientUncheckedCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientUncheckedCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUncheckedUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUncheckedUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastAssignedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCreatedPatientsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedPatientsInput
    lastAssignedBy?: UserCreateNestedOneWithoutLastAssignedPatientsInput
    scheduledVisits?: ScheduledVisitCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    assignedToId?: string | null
    lastAssignedById?: string | null
    lastAssignedAt?: Date | string | null
    scheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCreatedPatientsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedPatientsNestedInput
    lastAssignedBy?: UserUpdateOneWithoutLastAssignedPatientsNestedInput
    scheduledVisits?: ScheduledVisitUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    assignedToId?: string | null
    lastAssignedById?: string | null
    lastAssignedAt?: Date | string | null
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduledVisitCreateInput = {
    id?: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutScheduledVisitsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedScheduledVisitsInput
    createdBy: UserCreateNestedOneWithoutCreatedScheduledVisitsInput
    completedVisits?: CompletedVisitCreateNestedManyWithoutScheduledVisitInput
  }

  export type ScheduledVisitUncheckedCreateInput = {
    id?: string
    patientId: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    assignedToId?: string | null
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    completedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutScheduledVisitInput
  }

  export type ScheduledVisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutScheduledVisitsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedScheduledVisitsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedScheduledVisitsNestedInput
    completedVisits?: CompletedVisitUpdateManyWithoutScheduledVisitNestedInput
  }

  export type ScheduledVisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedVisits?: CompletedVisitUncheckedUpdateManyWithoutScheduledVisitNestedInput
  }

  export type ScheduledVisitCreateManyInput = {
    id?: string
    patientId: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    assignedToId?: string | null
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
  }

  export type ScheduledVisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledVisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedVisitCreateInput = {
    id?: string
    patientId: string
    completedDate: Date | string
    assistanceType: $Enums.AssistanceType
    notes?: string | null
    createdAt?: Date | string
    scheduledVisit: ScheduledVisitCreateNestedOneWithoutCompletedVisitsInput
    performedBy: UserCreateNestedOneWithoutPerformedVisitsInput
  }

  export type CompletedVisitUncheckedCreateInput = {
    id?: string
    scheduledVisitId: string
    patientId: string
    completedDate: Date | string
    assistanceType: $Enums.AssistanceType
    notes?: string | null
    performedById: string
    createdAt?: Date | string
  }

  export type CompletedVisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    completedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledVisit?: ScheduledVisitUpdateOneRequiredWithoutCompletedVisitsNestedInput
    performedBy?: UserUpdateOneRequiredWithoutPerformedVisitsNestedInput
  }

  export type CompletedVisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledVisitId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    completedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    performedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedVisitCreateManyInput = {
    id?: string
    scheduledVisitId: string
    patientId: string
    completedDate: Date | string
    assistanceType: $Enums.AssistanceType
    notes?: string | null
    performedById: string
    createdAt?: Date | string
  }

  export type CompletedVisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    completedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedVisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledVisitId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    completedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    performedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type ScheduledVisitListRelationFilter = {
    every?: ScheduledVisitWhereInput
    some?: ScheduledVisitWhereInput
    none?: ScheduledVisitWhereInput
  }

  export type CompletedVisitListRelationFilter = {
    every?: CompletedVisitWhereInput
    some?: CompletedVisitWhereInput
    none?: CompletedVisitWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduledVisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompletedVisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    fiscalCode?: SortOrder
    address?: SortOrder
    houseNumber?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    exemptionCode?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    lastAssignedById?: SortOrder
    lastAssignedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    fiscalCode?: SortOrder
    address?: SortOrder
    houseNumber?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    exemptionCode?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    lastAssignedById?: SortOrder
    lastAssignedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    fiscalCode?: SortOrder
    address?: SortOrder
    houseNumber?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    exemptionCode?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    lastAssignedById?: SortOrder
    lastAssignedAt?: SortOrder
  }

  export type EnumAssistanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssistanceType | EnumAssistanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssistanceType[]
    notIn?: $Enums.AssistanceType[]
    not?: NestedEnumAssistanceTypeFilter<$PrismaModel> | $Enums.AssistanceType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type ScheduledVisitCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    assistanceType?: SortOrder
    nextVisitDate?: SortOrder
    visitFrequency?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledVisitAvgOrderByAggregateInput = {
    visitFrequency?: SortOrder
  }

  export type ScheduledVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    assistanceType?: SortOrder
    nextVisitDate?: SortOrder
    visitFrequency?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledVisitMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    assistanceType?: SortOrder
    nextVisitDate?: SortOrder
    visitFrequency?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledVisitSumOrderByAggregateInput = {
    visitFrequency?: SortOrder
  }

  export type EnumAssistanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssistanceType | EnumAssistanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssistanceType[]
    notIn?: $Enums.AssistanceType[]
    not?: NestedEnumAssistanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssistanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssistanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAssistanceTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ScheduledVisitScalarRelationFilter = {
    is?: ScheduledVisitWhereInput
    isNot?: ScheduledVisitWhereInput
  }

  export type CompletedVisitCountOrderByAggregateInput = {
    id?: SortOrder
    scheduledVisitId?: SortOrder
    patientId?: SortOrder
    completedDate?: SortOrder
    assistanceType?: SortOrder
    notes?: SortOrder
    performedById?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduledVisitId?: SortOrder
    patientId?: SortOrder
    completedDate?: SortOrder
    assistanceType?: SortOrder
    notes?: SortOrder
    performedById?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedVisitMinOrderByAggregateInput = {
    id?: SortOrder
    scheduledVisitId?: SortOrder
    patientId?: SortOrder
    completedDate?: SortOrder
    assistanceType?: SortOrder
    notes?: SortOrder
    performedById?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PatientCreateWithoutCreatedByInput, PatientUncheckedCreateWithoutCreatedByInput> | PatientCreateWithoutCreatedByInput[] | PatientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCreatedByInput | PatientCreateOrConnectWithoutCreatedByInput[]
    createMany?: PatientCreateManyCreatedByInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<PatientCreateWithoutAssignedToInput, PatientUncheckedCreateWithoutAssignedToInput> | PatientCreateWithoutAssignedToInput[] | PatientUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutAssignedToInput | PatientCreateOrConnectWithoutAssignedToInput[]
    createMany?: PatientCreateManyAssignedToInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutLastAssignedByInput = {
    create?: XOR<PatientCreateWithoutLastAssignedByInput, PatientUncheckedCreateWithoutLastAssignedByInput> | PatientCreateWithoutLastAssignedByInput[] | PatientUncheckedCreateWithoutLastAssignedByInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLastAssignedByInput | PatientCreateOrConnectWithoutLastAssignedByInput[]
    createMany?: PatientCreateManyLastAssignedByInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type ScheduledVisitCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ScheduledVisitCreateWithoutCreatedByInput, ScheduledVisitUncheckedCreateWithoutCreatedByInput> | ScheduledVisitCreateWithoutCreatedByInput[] | ScheduledVisitUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutCreatedByInput | ScheduledVisitCreateOrConnectWithoutCreatedByInput[]
    createMany?: ScheduledVisitCreateManyCreatedByInputEnvelope
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
  }

  export type ScheduledVisitCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<ScheduledVisitCreateWithoutAssignedToInput, ScheduledVisitUncheckedCreateWithoutAssignedToInput> | ScheduledVisitCreateWithoutAssignedToInput[] | ScheduledVisitUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutAssignedToInput | ScheduledVisitCreateOrConnectWithoutAssignedToInput[]
    createMany?: ScheduledVisitCreateManyAssignedToInputEnvelope
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
  }

  export type CompletedVisitCreateNestedManyWithoutPerformedByInput = {
    create?: XOR<CompletedVisitCreateWithoutPerformedByInput, CompletedVisitUncheckedCreateWithoutPerformedByInput> | CompletedVisitCreateWithoutPerformedByInput[] | CompletedVisitUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: CompletedVisitCreateOrConnectWithoutPerformedByInput | CompletedVisitCreateOrConnectWithoutPerformedByInput[]
    createMany?: CompletedVisitCreateManyPerformedByInputEnvelope
    connect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PatientCreateWithoutCreatedByInput, PatientUncheckedCreateWithoutCreatedByInput> | PatientCreateWithoutCreatedByInput[] | PatientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCreatedByInput | PatientCreateOrConnectWithoutCreatedByInput[]
    createMany?: PatientCreateManyCreatedByInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<PatientCreateWithoutAssignedToInput, PatientUncheckedCreateWithoutAssignedToInput> | PatientCreateWithoutAssignedToInput[] | PatientUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutAssignedToInput | PatientCreateOrConnectWithoutAssignedToInput[]
    createMany?: PatientCreateManyAssignedToInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutLastAssignedByInput = {
    create?: XOR<PatientCreateWithoutLastAssignedByInput, PatientUncheckedCreateWithoutLastAssignedByInput> | PatientCreateWithoutLastAssignedByInput[] | PatientUncheckedCreateWithoutLastAssignedByInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLastAssignedByInput | PatientCreateOrConnectWithoutLastAssignedByInput[]
    createMany?: PatientCreateManyLastAssignedByInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type ScheduledVisitUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ScheduledVisitCreateWithoutCreatedByInput, ScheduledVisitUncheckedCreateWithoutCreatedByInput> | ScheduledVisitCreateWithoutCreatedByInput[] | ScheduledVisitUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutCreatedByInput | ScheduledVisitCreateOrConnectWithoutCreatedByInput[]
    createMany?: ScheduledVisitCreateManyCreatedByInputEnvelope
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
  }

  export type ScheduledVisitUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<ScheduledVisitCreateWithoutAssignedToInput, ScheduledVisitUncheckedCreateWithoutAssignedToInput> | ScheduledVisitCreateWithoutAssignedToInput[] | ScheduledVisitUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutAssignedToInput | ScheduledVisitCreateOrConnectWithoutAssignedToInput[]
    createMany?: ScheduledVisitCreateManyAssignedToInputEnvelope
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
  }

  export type CompletedVisitUncheckedCreateNestedManyWithoutPerformedByInput = {
    create?: XOR<CompletedVisitCreateWithoutPerformedByInput, CompletedVisitUncheckedCreateWithoutPerformedByInput> | CompletedVisitCreateWithoutPerformedByInput[] | CompletedVisitUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: CompletedVisitCreateOrConnectWithoutPerformedByInput | CompletedVisitCreateOrConnectWithoutPerformedByInput[]
    createMany?: CompletedVisitCreateManyPerformedByInputEnvelope
    connect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PatientCreateWithoutCreatedByInput, PatientUncheckedCreateWithoutCreatedByInput> | PatientCreateWithoutCreatedByInput[] | PatientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCreatedByInput | PatientCreateOrConnectWithoutCreatedByInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutCreatedByInput | PatientUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PatientCreateManyCreatedByInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutCreatedByInput | PatientUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutCreatedByInput | PatientUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<PatientCreateWithoutAssignedToInput, PatientUncheckedCreateWithoutAssignedToInput> | PatientCreateWithoutAssignedToInput[] | PatientUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutAssignedToInput | PatientCreateOrConnectWithoutAssignedToInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutAssignedToInput | PatientUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: PatientCreateManyAssignedToInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutAssignedToInput | PatientUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutAssignedToInput | PatientUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutLastAssignedByNestedInput = {
    create?: XOR<PatientCreateWithoutLastAssignedByInput, PatientUncheckedCreateWithoutLastAssignedByInput> | PatientCreateWithoutLastAssignedByInput[] | PatientUncheckedCreateWithoutLastAssignedByInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLastAssignedByInput | PatientCreateOrConnectWithoutLastAssignedByInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutLastAssignedByInput | PatientUpsertWithWhereUniqueWithoutLastAssignedByInput[]
    createMany?: PatientCreateManyLastAssignedByInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutLastAssignedByInput | PatientUpdateWithWhereUniqueWithoutLastAssignedByInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutLastAssignedByInput | PatientUpdateManyWithWhereWithoutLastAssignedByInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type ScheduledVisitUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ScheduledVisitCreateWithoutCreatedByInput, ScheduledVisitUncheckedCreateWithoutCreatedByInput> | ScheduledVisitCreateWithoutCreatedByInput[] | ScheduledVisitUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutCreatedByInput | ScheduledVisitCreateOrConnectWithoutCreatedByInput[]
    upsert?: ScheduledVisitUpsertWithWhereUniqueWithoutCreatedByInput | ScheduledVisitUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ScheduledVisitCreateManyCreatedByInputEnvelope
    set?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    disconnect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    delete?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    update?: ScheduledVisitUpdateWithWhereUniqueWithoutCreatedByInput | ScheduledVisitUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ScheduledVisitUpdateManyWithWhereWithoutCreatedByInput | ScheduledVisitUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ScheduledVisitScalarWhereInput | ScheduledVisitScalarWhereInput[]
  }

  export type ScheduledVisitUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<ScheduledVisitCreateWithoutAssignedToInput, ScheduledVisitUncheckedCreateWithoutAssignedToInput> | ScheduledVisitCreateWithoutAssignedToInput[] | ScheduledVisitUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutAssignedToInput | ScheduledVisitCreateOrConnectWithoutAssignedToInput[]
    upsert?: ScheduledVisitUpsertWithWhereUniqueWithoutAssignedToInput | ScheduledVisitUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: ScheduledVisitCreateManyAssignedToInputEnvelope
    set?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    disconnect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    delete?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    update?: ScheduledVisitUpdateWithWhereUniqueWithoutAssignedToInput | ScheduledVisitUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: ScheduledVisitUpdateManyWithWhereWithoutAssignedToInput | ScheduledVisitUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: ScheduledVisitScalarWhereInput | ScheduledVisitScalarWhereInput[]
  }

  export type CompletedVisitUpdateManyWithoutPerformedByNestedInput = {
    create?: XOR<CompletedVisitCreateWithoutPerformedByInput, CompletedVisitUncheckedCreateWithoutPerformedByInput> | CompletedVisitCreateWithoutPerformedByInput[] | CompletedVisitUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: CompletedVisitCreateOrConnectWithoutPerformedByInput | CompletedVisitCreateOrConnectWithoutPerformedByInput[]
    upsert?: CompletedVisitUpsertWithWhereUniqueWithoutPerformedByInput | CompletedVisitUpsertWithWhereUniqueWithoutPerformedByInput[]
    createMany?: CompletedVisitCreateManyPerformedByInputEnvelope
    set?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    disconnect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    delete?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    connect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    update?: CompletedVisitUpdateWithWhereUniqueWithoutPerformedByInput | CompletedVisitUpdateWithWhereUniqueWithoutPerformedByInput[]
    updateMany?: CompletedVisitUpdateManyWithWhereWithoutPerformedByInput | CompletedVisitUpdateManyWithWhereWithoutPerformedByInput[]
    deleteMany?: CompletedVisitScalarWhereInput | CompletedVisitScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PatientCreateWithoutCreatedByInput, PatientUncheckedCreateWithoutCreatedByInput> | PatientCreateWithoutCreatedByInput[] | PatientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCreatedByInput | PatientCreateOrConnectWithoutCreatedByInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutCreatedByInput | PatientUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PatientCreateManyCreatedByInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutCreatedByInput | PatientUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutCreatedByInput | PatientUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<PatientCreateWithoutAssignedToInput, PatientUncheckedCreateWithoutAssignedToInput> | PatientCreateWithoutAssignedToInput[] | PatientUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutAssignedToInput | PatientCreateOrConnectWithoutAssignedToInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutAssignedToInput | PatientUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: PatientCreateManyAssignedToInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutAssignedToInput | PatientUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutAssignedToInput | PatientUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutLastAssignedByNestedInput = {
    create?: XOR<PatientCreateWithoutLastAssignedByInput, PatientUncheckedCreateWithoutLastAssignedByInput> | PatientCreateWithoutLastAssignedByInput[] | PatientUncheckedCreateWithoutLastAssignedByInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLastAssignedByInput | PatientCreateOrConnectWithoutLastAssignedByInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutLastAssignedByInput | PatientUpsertWithWhereUniqueWithoutLastAssignedByInput[]
    createMany?: PatientCreateManyLastAssignedByInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutLastAssignedByInput | PatientUpdateWithWhereUniqueWithoutLastAssignedByInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutLastAssignedByInput | PatientUpdateManyWithWhereWithoutLastAssignedByInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type ScheduledVisitUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ScheduledVisitCreateWithoutCreatedByInput, ScheduledVisitUncheckedCreateWithoutCreatedByInput> | ScheduledVisitCreateWithoutCreatedByInput[] | ScheduledVisitUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutCreatedByInput | ScheduledVisitCreateOrConnectWithoutCreatedByInput[]
    upsert?: ScheduledVisitUpsertWithWhereUniqueWithoutCreatedByInput | ScheduledVisitUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ScheduledVisitCreateManyCreatedByInputEnvelope
    set?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    disconnect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    delete?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    update?: ScheduledVisitUpdateWithWhereUniqueWithoutCreatedByInput | ScheduledVisitUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ScheduledVisitUpdateManyWithWhereWithoutCreatedByInput | ScheduledVisitUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ScheduledVisitScalarWhereInput | ScheduledVisitScalarWhereInput[]
  }

  export type ScheduledVisitUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<ScheduledVisitCreateWithoutAssignedToInput, ScheduledVisitUncheckedCreateWithoutAssignedToInput> | ScheduledVisitCreateWithoutAssignedToInput[] | ScheduledVisitUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutAssignedToInput | ScheduledVisitCreateOrConnectWithoutAssignedToInput[]
    upsert?: ScheduledVisitUpsertWithWhereUniqueWithoutAssignedToInput | ScheduledVisitUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: ScheduledVisitCreateManyAssignedToInputEnvelope
    set?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    disconnect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    delete?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    update?: ScheduledVisitUpdateWithWhereUniqueWithoutAssignedToInput | ScheduledVisitUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: ScheduledVisitUpdateManyWithWhereWithoutAssignedToInput | ScheduledVisitUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: ScheduledVisitScalarWhereInput | ScheduledVisitScalarWhereInput[]
  }

  export type CompletedVisitUncheckedUpdateManyWithoutPerformedByNestedInput = {
    create?: XOR<CompletedVisitCreateWithoutPerformedByInput, CompletedVisitUncheckedCreateWithoutPerformedByInput> | CompletedVisitCreateWithoutPerformedByInput[] | CompletedVisitUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: CompletedVisitCreateOrConnectWithoutPerformedByInput | CompletedVisitCreateOrConnectWithoutPerformedByInput[]
    upsert?: CompletedVisitUpsertWithWhereUniqueWithoutPerformedByInput | CompletedVisitUpsertWithWhereUniqueWithoutPerformedByInput[]
    createMany?: CompletedVisitCreateManyPerformedByInputEnvelope
    set?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    disconnect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    delete?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    connect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    update?: CompletedVisitUpdateWithWhereUniqueWithoutPerformedByInput | CompletedVisitUpdateWithWhereUniqueWithoutPerformedByInput[]
    updateMany?: CompletedVisitUpdateManyWithWhereWithoutPerformedByInput | CompletedVisitUpdateManyWithWhereWithoutPerformedByInput[]
    deleteMany?: CompletedVisitScalarWhereInput | CompletedVisitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedPatientsInput = {
    create?: XOR<UserCreateWithoutCreatedPatientsInput, UserUncheckedCreateWithoutCreatedPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPatientsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedPatientsInput = {
    create?: XOR<UserCreateWithoutAssignedPatientsInput, UserUncheckedCreateWithoutAssignedPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedPatientsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLastAssignedPatientsInput = {
    create?: XOR<UserCreateWithoutLastAssignedPatientsInput, UserUncheckedCreateWithoutLastAssignedPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLastAssignedPatientsInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduledVisitCreateNestedManyWithoutPatientInput = {
    create?: XOR<ScheduledVisitCreateWithoutPatientInput, ScheduledVisitUncheckedCreateWithoutPatientInput> | ScheduledVisitCreateWithoutPatientInput[] | ScheduledVisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutPatientInput | ScheduledVisitCreateOrConnectWithoutPatientInput[]
    createMany?: ScheduledVisitCreateManyPatientInputEnvelope
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
  }

  export type ScheduledVisitUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<ScheduledVisitCreateWithoutPatientInput, ScheduledVisitUncheckedCreateWithoutPatientInput> | ScheduledVisitCreateWithoutPatientInput[] | ScheduledVisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutPatientInput | ScheduledVisitCreateOrConnectWithoutPatientInput[]
    createMany?: ScheduledVisitCreateManyPatientInputEnvelope
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedPatientsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedPatientsInput, UserUncheckedCreateWithoutCreatedPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPatientsInput
    upsert?: UserUpsertWithoutCreatedPatientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedPatientsInput, UserUpdateWithoutCreatedPatientsInput>, UserUncheckedUpdateWithoutCreatedPatientsInput>
  }

  export type UserUpdateOneWithoutAssignedPatientsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedPatientsInput, UserUncheckedCreateWithoutAssignedPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedPatientsInput
    upsert?: UserUpsertWithoutAssignedPatientsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedPatientsInput, UserUpdateWithoutAssignedPatientsInput>, UserUncheckedUpdateWithoutAssignedPatientsInput>
  }

  export type UserUpdateOneWithoutLastAssignedPatientsNestedInput = {
    create?: XOR<UserCreateWithoutLastAssignedPatientsInput, UserUncheckedCreateWithoutLastAssignedPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLastAssignedPatientsInput
    upsert?: UserUpsertWithoutLastAssignedPatientsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLastAssignedPatientsInput, UserUpdateWithoutLastAssignedPatientsInput>, UserUncheckedUpdateWithoutLastAssignedPatientsInput>
  }

  export type ScheduledVisitUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ScheduledVisitCreateWithoutPatientInput, ScheduledVisitUncheckedCreateWithoutPatientInput> | ScheduledVisitCreateWithoutPatientInput[] | ScheduledVisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutPatientInput | ScheduledVisitCreateOrConnectWithoutPatientInput[]
    upsert?: ScheduledVisitUpsertWithWhereUniqueWithoutPatientInput | ScheduledVisitUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ScheduledVisitCreateManyPatientInputEnvelope
    set?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    disconnect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    delete?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    update?: ScheduledVisitUpdateWithWhereUniqueWithoutPatientInput | ScheduledVisitUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ScheduledVisitUpdateManyWithWhereWithoutPatientInput | ScheduledVisitUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ScheduledVisitScalarWhereInput | ScheduledVisitScalarWhereInput[]
  }

  export type ScheduledVisitUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ScheduledVisitCreateWithoutPatientInput, ScheduledVisitUncheckedCreateWithoutPatientInput> | ScheduledVisitCreateWithoutPatientInput[] | ScheduledVisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutPatientInput | ScheduledVisitCreateOrConnectWithoutPatientInput[]
    upsert?: ScheduledVisitUpsertWithWhereUniqueWithoutPatientInput | ScheduledVisitUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ScheduledVisitCreateManyPatientInputEnvelope
    set?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    disconnect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    delete?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    connect?: ScheduledVisitWhereUniqueInput | ScheduledVisitWhereUniqueInput[]
    update?: ScheduledVisitUpdateWithWhereUniqueWithoutPatientInput | ScheduledVisitUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ScheduledVisitUpdateManyWithWhereWithoutPatientInput | ScheduledVisitUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ScheduledVisitScalarWhereInput | ScheduledVisitScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutScheduledVisitsInput = {
    create?: XOR<PatientCreateWithoutScheduledVisitsInput, PatientUncheckedCreateWithoutScheduledVisitsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutScheduledVisitsInput
    connect?: PatientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedScheduledVisitsInput = {
    create?: XOR<UserCreateWithoutAssignedScheduledVisitsInput, UserUncheckedCreateWithoutAssignedScheduledVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedScheduledVisitsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedScheduledVisitsInput = {
    create?: XOR<UserCreateWithoutCreatedScheduledVisitsInput, UserUncheckedCreateWithoutCreatedScheduledVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedScheduledVisitsInput
    connect?: UserWhereUniqueInput
  }

  export type CompletedVisitCreateNestedManyWithoutScheduledVisitInput = {
    create?: XOR<CompletedVisitCreateWithoutScheduledVisitInput, CompletedVisitUncheckedCreateWithoutScheduledVisitInput> | CompletedVisitCreateWithoutScheduledVisitInput[] | CompletedVisitUncheckedCreateWithoutScheduledVisitInput[]
    connectOrCreate?: CompletedVisitCreateOrConnectWithoutScheduledVisitInput | CompletedVisitCreateOrConnectWithoutScheduledVisitInput[]
    createMany?: CompletedVisitCreateManyScheduledVisitInputEnvelope
    connect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
  }

  export type CompletedVisitUncheckedCreateNestedManyWithoutScheduledVisitInput = {
    create?: XOR<CompletedVisitCreateWithoutScheduledVisitInput, CompletedVisitUncheckedCreateWithoutScheduledVisitInput> | CompletedVisitCreateWithoutScheduledVisitInput[] | CompletedVisitUncheckedCreateWithoutScheduledVisitInput[]
    connectOrCreate?: CompletedVisitCreateOrConnectWithoutScheduledVisitInput | CompletedVisitCreateOrConnectWithoutScheduledVisitInput[]
    createMany?: CompletedVisitCreateManyScheduledVisitInputEnvelope
    connect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
  }

  export type EnumAssistanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssistanceType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PatientUpdateOneRequiredWithoutScheduledVisitsNestedInput = {
    create?: XOR<PatientCreateWithoutScheduledVisitsInput, PatientUncheckedCreateWithoutScheduledVisitsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutScheduledVisitsInput
    upsert?: PatientUpsertWithoutScheduledVisitsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutScheduledVisitsInput, PatientUpdateWithoutScheduledVisitsInput>, PatientUncheckedUpdateWithoutScheduledVisitsInput>
  }

  export type UserUpdateOneWithoutAssignedScheduledVisitsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedScheduledVisitsInput, UserUncheckedCreateWithoutAssignedScheduledVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedScheduledVisitsInput
    upsert?: UserUpsertWithoutAssignedScheduledVisitsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedScheduledVisitsInput, UserUpdateWithoutAssignedScheduledVisitsInput>, UserUncheckedUpdateWithoutAssignedScheduledVisitsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedScheduledVisitsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedScheduledVisitsInput, UserUncheckedCreateWithoutCreatedScheduledVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedScheduledVisitsInput
    upsert?: UserUpsertWithoutCreatedScheduledVisitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedScheduledVisitsInput, UserUpdateWithoutCreatedScheduledVisitsInput>, UserUncheckedUpdateWithoutCreatedScheduledVisitsInput>
  }

  export type CompletedVisitUpdateManyWithoutScheduledVisitNestedInput = {
    create?: XOR<CompletedVisitCreateWithoutScheduledVisitInput, CompletedVisitUncheckedCreateWithoutScheduledVisitInput> | CompletedVisitCreateWithoutScheduledVisitInput[] | CompletedVisitUncheckedCreateWithoutScheduledVisitInput[]
    connectOrCreate?: CompletedVisitCreateOrConnectWithoutScheduledVisitInput | CompletedVisitCreateOrConnectWithoutScheduledVisitInput[]
    upsert?: CompletedVisitUpsertWithWhereUniqueWithoutScheduledVisitInput | CompletedVisitUpsertWithWhereUniqueWithoutScheduledVisitInput[]
    createMany?: CompletedVisitCreateManyScheduledVisitInputEnvelope
    set?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    disconnect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    delete?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    connect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    update?: CompletedVisitUpdateWithWhereUniqueWithoutScheduledVisitInput | CompletedVisitUpdateWithWhereUniqueWithoutScheduledVisitInput[]
    updateMany?: CompletedVisitUpdateManyWithWhereWithoutScheduledVisitInput | CompletedVisitUpdateManyWithWhereWithoutScheduledVisitInput[]
    deleteMany?: CompletedVisitScalarWhereInput | CompletedVisitScalarWhereInput[]
  }

  export type CompletedVisitUncheckedUpdateManyWithoutScheduledVisitNestedInput = {
    create?: XOR<CompletedVisitCreateWithoutScheduledVisitInput, CompletedVisitUncheckedCreateWithoutScheduledVisitInput> | CompletedVisitCreateWithoutScheduledVisitInput[] | CompletedVisitUncheckedCreateWithoutScheduledVisitInput[]
    connectOrCreate?: CompletedVisitCreateOrConnectWithoutScheduledVisitInput | CompletedVisitCreateOrConnectWithoutScheduledVisitInput[]
    upsert?: CompletedVisitUpsertWithWhereUniqueWithoutScheduledVisitInput | CompletedVisitUpsertWithWhereUniqueWithoutScheduledVisitInput[]
    createMany?: CompletedVisitCreateManyScheduledVisitInputEnvelope
    set?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    disconnect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    delete?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    connect?: CompletedVisitWhereUniqueInput | CompletedVisitWhereUniqueInput[]
    update?: CompletedVisitUpdateWithWhereUniqueWithoutScheduledVisitInput | CompletedVisitUpdateWithWhereUniqueWithoutScheduledVisitInput[]
    updateMany?: CompletedVisitUpdateManyWithWhereWithoutScheduledVisitInput | CompletedVisitUpdateManyWithWhereWithoutScheduledVisitInput[]
    deleteMany?: CompletedVisitScalarWhereInput | CompletedVisitScalarWhereInput[]
  }

  export type ScheduledVisitCreateNestedOneWithoutCompletedVisitsInput = {
    create?: XOR<ScheduledVisitCreateWithoutCompletedVisitsInput, ScheduledVisitUncheckedCreateWithoutCompletedVisitsInput>
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutCompletedVisitsInput
    connect?: ScheduledVisitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPerformedVisitsInput = {
    create?: XOR<UserCreateWithoutPerformedVisitsInput, UserUncheckedCreateWithoutPerformedVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerformedVisitsInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduledVisitUpdateOneRequiredWithoutCompletedVisitsNestedInput = {
    create?: XOR<ScheduledVisitCreateWithoutCompletedVisitsInput, ScheduledVisitUncheckedCreateWithoutCompletedVisitsInput>
    connectOrCreate?: ScheduledVisitCreateOrConnectWithoutCompletedVisitsInput
    upsert?: ScheduledVisitUpsertWithoutCompletedVisitsInput
    connect?: ScheduledVisitWhereUniqueInput
    update?: XOR<XOR<ScheduledVisitUpdateToOneWithWhereWithoutCompletedVisitsInput, ScheduledVisitUpdateWithoutCompletedVisitsInput>, ScheduledVisitUncheckedUpdateWithoutCompletedVisitsInput>
  }

  export type UserUpdateOneRequiredWithoutPerformedVisitsNestedInput = {
    create?: XOR<UserCreateWithoutPerformedVisitsInput, UserUncheckedCreateWithoutPerformedVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerformedVisitsInput
    upsert?: UserUpsertWithoutPerformedVisitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPerformedVisitsInput, UserUpdateWithoutPerformedVisitsInput>, UserUncheckedUpdateWithoutPerformedVisitsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAssistanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssistanceType | EnumAssistanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssistanceType[]
    notIn?: $Enums.AssistanceType[]
    not?: NestedEnumAssistanceTypeFilter<$PrismaModel> | $Enums.AssistanceType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAssistanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssistanceType | EnumAssistanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssistanceType[]
    notIn?: $Enums.AssistanceType[]
    not?: NestedEnumAssistanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssistanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssistanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAssistanceTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdPatients?: PatientCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdPatients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientUncheckedCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientUncheckedCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUncheckedUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUncheckedUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    createdPatients?: PatientCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    createdPatients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientUncheckedCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientUncheckedCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUncheckedUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUncheckedUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type PatientCreateWithoutCreatedByInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastAssignedAt?: Date | string | null
    assignedTo?: UserCreateNestedOneWithoutAssignedPatientsInput
    lastAssignedBy?: UserCreateNestedOneWithoutLastAssignedPatientsInput
    scheduledVisits?: ScheduledVisitCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutCreatedByInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedToId?: string | null
    lastAssignedById?: string | null
    lastAssignedAt?: Date | string | null
    scheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutCreatedByInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutCreatedByInput, PatientUncheckedCreateWithoutCreatedByInput>
  }

  export type PatientCreateManyCreatedByInputEnvelope = {
    data: PatientCreateManyCreatedByInput | PatientCreateManyCreatedByInput[]
  }

  export type PatientCreateWithoutAssignedToInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastAssignedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCreatedPatientsInput
    lastAssignedBy?: UserCreateNestedOneWithoutLastAssignedPatientsInput
    scheduledVisits?: ScheduledVisitCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAssignedToInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    lastAssignedById?: string | null
    lastAssignedAt?: Date | string | null
    scheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAssignedToInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAssignedToInput, PatientUncheckedCreateWithoutAssignedToInput>
  }

  export type PatientCreateManyAssignedToInputEnvelope = {
    data: PatientCreateManyAssignedToInput | PatientCreateManyAssignedToInput[]
  }

  export type PatientCreateWithoutLastAssignedByInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastAssignedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCreatedPatientsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedPatientsInput
    scheduledVisits?: ScheduledVisitCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutLastAssignedByInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    assignedToId?: string | null
    lastAssignedAt?: Date | string | null
    scheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutLastAssignedByInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutLastAssignedByInput, PatientUncheckedCreateWithoutLastAssignedByInput>
  }

  export type PatientCreateManyLastAssignedByInputEnvelope = {
    data: PatientCreateManyLastAssignedByInput | PatientCreateManyLastAssignedByInput[]
  }

  export type ScheduledVisitCreateWithoutCreatedByInput = {
    id?: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutScheduledVisitsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedScheduledVisitsInput
    completedVisits?: CompletedVisitCreateNestedManyWithoutScheduledVisitInput
  }

  export type ScheduledVisitUncheckedCreateWithoutCreatedByInput = {
    id?: string
    patientId: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutScheduledVisitInput
  }

  export type ScheduledVisitCreateOrConnectWithoutCreatedByInput = {
    where: ScheduledVisitWhereUniqueInput
    create: XOR<ScheduledVisitCreateWithoutCreatedByInput, ScheduledVisitUncheckedCreateWithoutCreatedByInput>
  }

  export type ScheduledVisitCreateManyCreatedByInputEnvelope = {
    data: ScheduledVisitCreateManyCreatedByInput | ScheduledVisitCreateManyCreatedByInput[]
  }

  export type ScheduledVisitCreateWithoutAssignedToInput = {
    id?: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutScheduledVisitsInput
    createdBy: UserCreateNestedOneWithoutCreatedScheduledVisitsInput
    completedVisits?: CompletedVisitCreateNestedManyWithoutScheduledVisitInput
  }

  export type ScheduledVisitUncheckedCreateWithoutAssignedToInput = {
    id?: string
    patientId: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    completedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutScheduledVisitInput
  }

  export type ScheduledVisitCreateOrConnectWithoutAssignedToInput = {
    where: ScheduledVisitWhereUniqueInput
    create: XOR<ScheduledVisitCreateWithoutAssignedToInput, ScheduledVisitUncheckedCreateWithoutAssignedToInput>
  }

  export type ScheduledVisitCreateManyAssignedToInputEnvelope = {
    data: ScheduledVisitCreateManyAssignedToInput | ScheduledVisitCreateManyAssignedToInput[]
  }

  export type CompletedVisitCreateWithoutPerformedByInput = {
    id?: string
    patientId: string
    completedDate: Date | string
    assistanceType: $Enums.AssistanceType
    notes?: string | null
    createdAt?: Date | string
    scheduledVisit: ScheduledVisitCreateNestedOneWithoutCompletedVisitsInput
  }

  export type CompletedVisitUncheckedCreateWithoutPerformedByInput = {
    id?: string
    scheduledVisitId: string
    patientId: string
    completedDate: Date | string
    assistanceType: $Enums.AssistanceType
    notes?: string | null
    createdAt?: Date | string
  }

  export type CompletedVisitCreateOrConnectWithoutPerformedByInput = {
    where: CompletedVisitWhereUniqueInput
    create: XOR<CompletedVisitCreateWithoutPerformedByInput, CompletedVisitUncheckedCreateWithoutPerformedByInput>
  }

  export type CompletedVisitCreateManyPerformedByInputEnvelope = {
    data: CompletedVisitCreateManyPerformedByInput | CompletedVisitCreateManyPerformedByInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PatientUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutCreatedByInput, PatientUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PatientCreateWithoutCreatedByInput, PatientUncheckedCreateWithoutCreatedByInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutCreatedByInput, PatientUncheckedUpdateWithoutCreatedByInput>
  }

  export type PatientUpdateManyWithWhereWithoutCreatedByInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    fiscalCode?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    houseNumber?: StringNullableFilter<"Patient"> | string | null
    city?: StringNullableFilter<"Patient"> | string | null
    postalCode?: StringNullableFilter<"Patient"> | string | null
    phone1?: StringFilter<"Patient"> | string
    phone2?: StringNullableFilter<"Patient"> | string | null
    exemptionCode?: StringFilter<"Patient"> | string
    notes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    createdById?: StringFilter<"Patient"> | string
    assignedToId?: StringNullableFilter<"Patient"> | string | null
    lastAssignedById?: StringNullableFilter<"Patient"> | string | null
    lastAssignedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
  }

  export type PatientUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutAssignedToInput, PatientUncheckedUpdateWithoutAssignedToInput>
    create: XOR<PatientCreateWithoutAssignedToInput, PatientUncheckedCreateWithoutAssignedToInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutAssignedToInput, PatientUncheckedUpdateWithoutAssignedToInput>
  }

  export type PatientUpdateManyWithWhereWithoutAssignedToInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type PatientUpsertWithWhereUniqueWithoutLastAssignedByInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutLastAssignedByInput, PatientUncheckedUpdateWithoutLastAssignedByInput>
    create: XOR<PatientCreateWithoutLastAssignedByInput, PatientUncheckedCreateWithoutLastAssignedByInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutLastAssignedByInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutLastAssignedByInput, PatientUncheckedUpdateWithoutLastAssignedByInput>
  }

  export type PatientUpdateManyWithWhereWithoutLastAssignedByInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutLastAssignedByInput>
  }

  export type ScheduledVisitUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ScheduledVisitWhereUniqueInput
    update: XOR<ScheduledVisitUpdateWithoutCreatedByInput, ScheduledVisitUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ScheduledVisitCreateWithoutCreatedByInput, ScheduledVisitUncheckedCreateWithoutCreatedByInput>
  }

  export type ScheduledVisitUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ScheduledVisitWhereUniqueInput
    data: XOR<ScheduledVisitUpdateWithoutCreatedByInput, ScheduledVisitUncheckedUpdateWithoutCreatedByInput>
  }

  export type ScheduledVisitUpdateManyWithWhereWithoutCreatedByInput = {
    where: ScheduledVisitScalarWhereInput
    data: XOR<ScheduledVisitUpdateManyMutationInput, ScheduledVisitUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ScheduledVisitScalarWhereInput = {
    AND?: ScheduledVisitScalarWhereInput | ScheduledVisitScalarWhereInput[]
    OR?: ScheduledVisitScalarWhereInput[]
    NOT?: ScheduledVisitScalarWhereInput | ScheduledVisitScalarWhereInput[]
    id?: StringFilter<"ScheduledVisit"> | string
    patientId?: StringFilter<"ScheduledVisit"> | string
    assistanceType?: EnumAssistanceTypeFilter<"ScheduledVisit"> | $Enums.AssistanceType
    nextVisitDate?: DateTimeFilter<"ScheduledVisit"> | Date | string
    visitFrequency?: IntNullableFilter<"ScheduledVisit"> | number | null
    notes?: StringNullableFilter<"ScheduledVisit"> | string | null
    isActive?: BoolFilter<"ScheduledVisit"> | boolean
    assignedToId?: StringNullableFilter<"ScheduledVisit"> | string | null
    createdAt?: DateTimeFilter<"ScheduledVisit"> | Date | string
    createdById?: StringFilter<"ScheduledVisit"> | string
    updatedAt?: DateTimeFilter<"ScheduledVisit"> | Date | string
  }

  export type ScheduledVisitUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: ScheduledVisitWhereUniqueInput
    update: XOR<ScheduledVisitUpdateWithoutAssignedToInput, ScheduledVisitUncheckedUpdateWithoutAssignedToInput>
    create: XOR<ScheduledVisitCreateWithoutAssignedToInput, ScheduledVisitUncheckedCreateWithoutAssignedToInput>
  }

  export type ScheduledVisitUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: ScheduledVisitWhereUniqueInput
    data: XOR<ScheduledVisitUpdateWithoutAssignedToInput, ScheduledVisitUncheckedUpdateWithoutAssignedToInput>
  }

  export type ScheduledVisitUpdateManyWithWhereWithoutAssignedToInput = {
    where: ScheduledVisitScalarWhereInput
    data: XOR<ScheduledVisitUpdateManyMutationInput, ScheduledVisitUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type CompletedVisitUpsertWithWhereUniqueWithoutPerformedByInput = {
    where: CompletedVisitWhereUniqueInput
    update: XOR<CompletedVisitUpdateWithoutPerformedByInput, CompletedVisitUncheckedUpdateWithoutPerformedByInput>
    create: XOR<CompletedVisitCreateWithoutPerformedByInput, CompletedVisitUncheckedCreateWithoutPerformedByInput>
  }

  export type CompletedVisitUpdateWithWhereUniqueWithoutPerformedByInput = {
    where: CompletedVisitWhereUniqueInput
    data: XOR<CompletedVisitUpdateWithoutPerformedByInput, CompletedVisitUncheckedUpdateWithoutPerformedByInput>
  }

  export type CompletedVisitUpdateManyWithWhereWithoutPerformedByInput = {
    where: CompletedVisitScalarWhereInput
    data: XOR<CompletedVisitUpdateManyMutationInput, CompletedVisitUncheckedUpdateManyWithoutPerformedByInput>
  }

  export type CompletedVisitScalarWhereInput = {
    AND?: CompletedVisitScalarWhereInput | CompletedVisitScalarWhereInput[]
    OR?: CompletedVisitScalarWhereInput[]
    NOT?: CompletedVisitScalarWhereInput | CompletedVisitScalarWhereInput[]
    id?: StringFilter<"CompletedVisit"> | string
    scheduledVisitId?: StringFilter<"CompletedVisit"> | string
    patientId?: StringFilter<"CompletedVisit"> | string
    completedDate?: DateTimeFilter<"CompletedVisit"> | Date | string
    assistanceType?: EnumAssistanceTypeFilter<"CompletedVisit"> | $Enums.AssistanceType
    notes?: StringNullableFilter<"CompletedVisit"> | string | null
    performedById?: StringFilter<"CompletedVisit"> | string
    createdAt?: DateTimeFilter<"CompletedVisit"> | Date | string
  }

  export type UserCreateWithoutCreatedPatientsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    assignedPatients?: PatientCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutCreatedPatientsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    assignedPatients?: PatientUncheckedCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientUncheckedCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutCreatedPatientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedPatientsInput, UserUncheckedCreateWithoutCreatedPatientsInput>
  }

  export type UserCreateWithoutAssignedPatientsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdPatients?: PatientCreateNestedManyWithoutCreatedByInput
    lastAssignedPatients?: PatientCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutAssignedPatientsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdPatients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    lastAssignedPatients?: PatientUncheckedCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutAssignedPatientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedPatientsInput, UserUncheckedCreateWithoutAssignedPatientsInput>
  }

  export type UserCreateWithoutLastAssignedPatientsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdPatients?: PatientCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientCreateNestedManyWithoutAssignedToInput
    createdScheduledVisits?: ScheduledVisitCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutLastAssignedPatientsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdPatients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientUncheckedCreateNestedManyWithoutAssignedToInput
    createdScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutLastAssignedPatientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLastAssignedPatientsInput, UserUncheckedCreateWithoutLastAssignedPatientsInput>
  }

  export type ScheduledVisitCreateWithoutPatientInput = {
    id?: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutAssignedScheduledVisitsInput
    createdBy: UserCreateNestedOneWithoutCreatedScheduledVisitsInput
    completedVisits?: CompletedVisitCreateNestedManyWithoutScheduledVisitInput
  }

  export type ScheduledVisitUncheckedCreateWithoutPatientInput = {
    id?: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    assignedToId?: string | null
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    completedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutScheduledVisitInput
  }

  export type ScheduledVisitCreateOrConnectWithoutPatientInput = {
    where: ScheduledVisitWhereUniqueInput
    create: XOR<ScheduledVisitCreateWithoutPatientInput, ScheduledVisitUncheckedCreateWithoutPatientInput>
  }

  export type ScheduledVisitCreateManyPatientInputEnvelope = {
    data: ScheduledVisitCreateManyPatientInput | ScheduledVisitCreateManyPatientInput[]
  }

  export type UserUpsertWithoutCreatedPatientsInput = {
    update: XOR<UserUpdateWithoutCreatedPatientsInput, UserUncheckedUpdateWithoutCreatedPatientsInput>
    create: XOR<UserCreateWithoutCreatedPatientsInput, UserUncheckedCreateWithoutCreatedPatientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedPatientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedPatientsInput, UserUncheckedUpdateWithoutCreatedPatientsInput>
  }

  export type UserUpdateWithoutCreatedPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    assignedPatients?: PatientUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    assignedPatients?: PatientUncheckedUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUncheckedUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUpsertWithoutAssignedPatientsInput = {
    update: XOR<UserUpdateWithoutAssignedPatientsInput, UserUncheckedUpdateWithoutAssignedPatientsInput>
    create: XOR<UserCreateWithoutAssignedPatientsInput, UserUncheckedCreateWithoutAssignedPatientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedPatientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedPatientsInput, UserUncheckedUpdateWithoutAssignedPatientsInput>
  }

  export type UserUpdateWithoutAssignedPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUpdateManyWithoutCreatedByNestedInput
    lastAssignedPatients?: PatientUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    lastAssignedPatients?: PatientUncheckedUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUpsertWithoutLastAssignedPatientsInput = {
    update: XOR<UserUpdateWithoutLastAssignedPatientsInput, UserUncheckedUpdateWithoutLastAssignedPatientsInput>
    create: XOR<UserCreateWithoutLastAssignedPatientsInput, UserUncheckedCreateWithoutLastAssignedPatientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLastAssignedPatientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLastAssignedPatientsInput, UserUncheckedUpdateWithoutLastAssignedPatientsInput>
  }

  export type UserUpdateWithoutLastAssignedPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUpdateManyWithoutAssignedToNestedInput
    createdScheduledVisits?: ScheduledVisitUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLastAssignedPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUncheckedUpdateManyWithoutAssignedToNestedInput
    createdScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type ScheduledVisitUpsertWithWhereUniqueWithoutPatientInput = {
    where: ScheduledVisitWhereUniqueInput
    update: XOR<ScheduledVisitUpdateWithoutPatientInput, ScheduledVisitUncheckedUpdateWithoutPatientInput>
    create: XOR<ScheduledVisitCreateWithoutPatientInput, ScheduledVisitUncheckedCreateWithoutPatientInput>
  }

  export type ScheduledVisitUpdateWithWhereUniqueWithoutPatientInput = {
    where: ScheduledVisitWhereUniqueInput
    data: XOR<ScheduledVisitUpdateWithoutPatientInput, ScheduledVisitUncheckedUpdateWithoutPatientInput>
  }

  export type ScheduledVisitUpdateManyWithWhereWithoutPatientInput = {
    where: ScheduledVisitScalarWhereInput
    data: XOR<ScheduledVisitUpdateManyMutationInput, ScheduledVisitUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientCreateWithoutScheduledVisitsInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastAssignedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCreatedPatientsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedPatientsInput
    lastAssignedBy?: UserCreateNestedOneWithoutLastAssignedPatientsInput
  }

  export type PatientUncheckedCreateWithoutScheduledVisitsInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    assignedToId?: string | null
    lastAssignedById?: string | null
    lastAssignedAt?: Date | string | null
  }

  export type PatientCreateOrConnectWithoutScheduledVisitsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutScheduledVisitsInput, PatientUncheckedCreateWithoutScheduledVisitsInput>
  }

  export type UserCreateWithoutAssignedScheduledVisitsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdPatients?: PatientCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitCreateNestedManyWithoutCreatedByInput
    performedVisits?: CompletedVisitCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutAssignedScheduledVisitsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdPatients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientUncheckedCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientUncheckedCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutCreatedByInput
    performedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutAssignedScheduledVisitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedScheduledVisitsInput, UserUncheckedCreateWithoutAssignedScheduledVisitsInput>
  }

  export type UserCreateWithoutCreatedScheduledVisitsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdPatients?: PatientCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientCreateNestedManyWithoutLastAssignedByInput
    assignedScheduledVisits?: ScheduledVisitCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutCreatedScheduledVisitsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdPatients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientUncheckedCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientUncheckedCreateNestedManyWithoutLastAssignedByInput
    assignedScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutAssignedToInput
    performedVisits?: CompletedVisitUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutCreatedScheduledVisitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedScheduledVisitsInput, UserUncheckedCreateWithoutCreatedScheduledVisitsInput>
  }

  export type CompletedVisitCreateWithoutScheduledVisitInput = {
    id?: string
    patientId: string
    completedDate: Date | string
    assistanceType: $Enums.AssistanceType
    notes?: string | null
    createdAt?: Date | string
    performedBy: UserCreateNestedOneWithoutPerformedVisitsInput
  }

  export type CompletedVisitUncheckedCreateWithoutScheduledVisitInput = {
    id?: string
    patientId: string
    completedDate: Date | string
    assistanceType: $Enums.AssistanceType
    notes?: string | null
    performedById: string
    createdAt?: Date | string
  }

  export type CompletedVisitCreateOrConnectWithoutScheduledVisitInput = {
    where: CompletedVisitWhereUniqueInput
    create: XOR<CompletedVisitCreateWithoutScheduledVisitInput, CompletedVisitUncheckedCreateWithoutScheduledVisitInput>
  }

  export type CompletedVisitCreateManyScheduledVisitInputEnvelope = {
    data: CompletedVisitCreateManyScheduledVisitInput | CompletedVisitCreateManyScheduledVisitInput[]
  }

  export type PatientUpsertWithoutScheduledVisitsInput = {
    update: XOR<PatientUpdateWithoutScheduledVisitsInput, PatientUncheckedUpdateWithoutScheduledVisitsInput>
    create: XOR<PatientCreateWithoutScheduledVisitsInput, PatientUncheckedCreateWithoutScheduledVisitsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutScheduledVisitsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutScheduledVisitsInput, PatientUncheckedUpdateWithoutScheduledVisitsInput>
  }

  export type PatientUpdateWithoutScheduledVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCreatedPatientsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedPatientsNestedInput
    lastAssignedBy?: UserUpdateOneWithoutLastAssignedPatientsNestedInput
  }

  export type PatientUncheckedUpdateWithoutScheduledVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutAssignedScheduledVisitsInput = {
    update: XOR<UserUpdateWithoutAssignedScheduledVisitsInput, UserUncheckedUpdateWithoutAssignedScheduledVisitsInput>
    create: XOR<UserCreateWithoutAssignedScheduledVisitsInput, UserUncheckedCreateWithoutAssignedScheduledVisitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedScheduledVisitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedScheduledVisitsInput, UserUncheckedUpdateWithoutAssignedScheduledVisitsInput>
  }

  export type UserUpdateWithoutAssignedScheduledVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUpdateManyWithoutCreatedByNestedInput
    performedVisits?: CompletedVisitUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedScheduledVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUncheckedUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUncheckedUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutCreatedByNestedInput
    performedVisits?: CompletedVisitUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUpsertWithoutCreatedScheduledVisitsInput = {
    update: XOR<UserUpdateWithoutCreatedScheduledVisitsInput, UserUncheckedUpdateWithoutCreatedScheduledVisitsInput>
    create: XOR<UserCreateWithoutCreatedScheduledVisitsInput, UserUncheckedCreateWithoutCreatedScheduledVisitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedScheduledVisitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedScheduledVisitsInput, UserUncheckedUpdateWithoutCreatedScheduledVisitsInput>
  }

  export type UserUpdateWithoutCreatedScheduledVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUpdateManyWithoutLastAssignedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedScheduledVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUncheckedUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUncheckedUpdateManyWithoutLastAssignedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutAssignedToNestedInput
    performedVisits?: CompletedVisitUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type CompletedVisitUpsertWithWhereUniqueWithoutScheduledVisitInput = {
    where: CompletedVisitWhereUniqueInput
    update: XOR<CompletedVisitUpdateWithoutScheduledVisitInput, CompletedVisitUncheckedUpdateWithoutScheduledVisitInput>
    create: XOR<CompletedVisitCreateWithoutScheduledVisitInput, CompletedVisitUncheckedCreateWithoutScheduledVisitInput>
  }

  export type CompletedVisitUpdateWithWhereUniqueWithoutScheduledVisitInput = {
    where: CompletedVisitWhereUniqueInput
    data: XOR<CompletedVisitUpdateWithoutScheduledVisitInput, CompletedVisitUncheckedUpdateWithoutScheduledVisitInput>
  }

  export type CompletedVisitUpdateManyWithWhereWithoutScheduledVisitInput = {
    where: CompletedVisitScalarWhereInput
    data: XOR<CompletedVisitUpdateManyMutationInput, CompletedVisitUncheckedUpdateManyWithoutScheduledVisitInput>
  }

  export type ScheduledVisitCreateWithoutCompletedVisitsInput = {
    id?: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutScheduledVisitsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedScheduledVisitsInput
    createdBy: UserCreateNestedOneWithoutCreatedScheduledVisitsInput
  }

  export type ScheduledVisitUncheckedCreateWithoutCompletedVisitsInput = {
    id?: string
    patientId: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    assignedToId?: string | null
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
  }

  export type ScheduledVisitCreateOrConnectWithoutCompletedVisitsInput = {
    where: ScheduledVisitWhereUniqueInput
    create: XOR<ScheduledVisitCreateWithoutCompletedVisitsInput, ScheduledVisitUncheckedCreateWithoutCompletedVisitsInput>
  }

  export type UserCreateWithoutPerformedVisitsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdPatients?: PatientCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutPerformedVisitsInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdPatients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    assignedPatients?: PatientUncheckedCreateNestedManyWithoutAssignedToInput
    lastAssignedPatients?: PatientUncheckedCreateNestedManyWithoutLastAssignedByInput
    createdScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutCreatedByInput
    assignedScheduledVisits?: ScheduledVisitUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutPerformedVisitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPerformedVisitsInput, UserUncheckedCreateWithoutPerformedVisitsInput>
  }

  export type ScheduledVisitUpsertWithoutCompletedVisitsInput = {
    update: XOR<ScheduledVisitUpdateWithoutCompletedVisitsInput, ScheduledVisitUncheckedUpdateWithoutCompletedVisitsInput>
    create: XOR<ScheduledVisitCreateWithoutCompletedVisitsInput, ScheduledVisitUncheckedCreateWithoutCompletedVisitsInput>
    where?: ScheduledVisitWhereInput
  }

  export type ScheduledVisitUpdateToOneWithWhereWithoutCompletedVisitsInput = {
    where?: ScheduledVisitWhereInput
    data: XOR<ScheduledVisitUpdateWithoutCompletedVisitsInput, ScheduledVisitUncheckedUpdateWithoutCompletedVisitsInput>
  }

  export type ScheduledVisitUpdateWithoutCompletedVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutScheduledVisitsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedScheduledVisitsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedScheduledVisitsNestedInput
  }

  export type ScheduledVisitUncheckedUpdateWithoutCompletedVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPerformedVisitsInput = {
    update: XOR<UserUpdateWithoutPerformedVisitsInput, UserUncheckedUpdateWithoutPerformedVisitsInput>
    create: XOR<UserCreateWithoutPerformedVisitsInput, UserUncheckedCreateWithoutPerformedVisitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPerformedVisitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPerformedVisitsInput, UserUncheckedUpdateWithoutPerformedVisitsInput>
  }

  export type UserUpdateWithoutPerformedVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutPerformedVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdPatients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedPatients?: PatientUncheckedUpdateManyWithoutAssignedToNestedInput
    lastAssignedPatients?: PatientUncheckedUpdateManyWithoutLastAssignedByNestedInput
    createdScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedScheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PatientCreateManyCreatedByInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedToId?: string | null
    lastAssignedById?: string | null
    lastAssignedAt?: Date | string | null
  }

  export type PatientCreateManyAssignedToInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    lastAssignedById?: string | null
    lastAssignedAt?: Date | string | null
  }

  export type PatientCreateManyLastAssignedByInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    fiscalCode?: string | null
    address?: string | null
    houseNumber?: string | null
    city?: string | null
    postalCode?: string | null
    phone1: string
    phone2?: string | null
    exemptionCode: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    assignedToId?: string | null
    lastAssignedAt?: Date | string | null
  }

  export type ScheduledVisitCreateManyCreatedByInput = {
    id?: string
    patientId: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledVisitCreateManyAssignedToInput = {
    id?: string
    patientId: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
  }

  export type CompletedVisitCreateManyPerformedByInput = {
    id?: string
    scheduledVisitId: string
    patientId: string
    completedDate: Date | string
    assistanceType: $Enums.AssistanceType
    notes?: string | null
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedTo?: UserUpdateOneWithoutAssignedPatientsNestedInput
    lastAssignedBy?: UserUpdateOneWithoutLastAssignedPatientsNestedInput
    scheduledVisits?: ScheduledVisitUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCreatedPatientsNestedInput
    lastAssignedBy?: UserUpdateOneWithoutLastAssignedPatientsNestedInput
    scheduledVisits?: ScheduledVisitUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    lastAssignedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    lastAssignedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientUpdateWithoutLastAssignedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCreatedPatientsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedPatientsNestedInput
    scheduledVisits?: ScheduledVisitUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutLastAssignedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledVisits?: ScheduledVisitUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutLastAssignedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    exemptionCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduledVisitUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutScheduledVisitsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedScheduledVisitsNestedInput
    completedVisits?: CompletedVisitUpdateManyWithoutScheduledVisitNestedInput
  }

  export type ScheduledVisitUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedVisits?: CompletedVisitUncheckedUpdateManyWithoutScheduledVisitNestedInput
  }

  export type ScheduledVisitUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledVisitUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutScheduledVisitsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedScheduledVisitsNestedInput
    completedVisits?: CompletedVisitUpdateManyWithoutScheduledVisitNestedInput
  }

  export type ScheduledVisitUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedVisits?: CompletedVisitUncheckedUpdateManyWithoutScheduledVisitNestedInput
  }

  export type ScheduledVisitUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedVisitUpdateWithoutPerformedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    completedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledVisit?: ScheduledVisitUpdateOneRequiredWithoutCompletedVisitsNestedInput
  }

  export type CompletedVisitUncheckedUpdateWithoutPerformedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledVisitId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    completedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedVisitUncheckedUpdateManyWithoutPerformedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledVisitId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    completedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledVisitCreateManyPatientInput = {
    id?: string
    assistanceType: $Enums.AssistanceType
    nextVisitDate: Date | string
    visitFrequency?: number | null
    notes?: string | null
    isActive?: boolean
    assignedToId?: string | null
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
  }

  export type ScheduledVisitUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutAssignedScheduledVisitsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedScheduledVisitsNestedInput
    completedVisits?: CompletedVisitUpdateManyWithoutScheduledVisitNestedInput
  }

  export type ScheduledVisitUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedVisits?: CompletedVisitUncheckedUpdateManyWithoutScheduledVisitNestedInput
  }

  export type ScheduledVisitUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    nextVisitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedVisitCreateManyScheduledVisitInput = {
    id?: string
    patientId: string
    completedDate: Date | string
    assistanceType: $Enums.AssistanceType
    notes?: string | null
    performedById: string
    createdAt?: Date | string
  }

  export type CompletedVisitUpdateWithoutScheduledVisitInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    completedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performedBy?: UserUpdateOneRequiredWithoutPerformedVisitsNestedInput
  }

  export type CompletedVisitUncheckedUpdateWithoutScheduledVisitInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    completedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    performedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedVisitUncheckedUpdateManyWithoutScheduledVisitInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    completedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assistanceType?: EnumAssistanceTypeFieldUpdateOperationsInput | $Enums.AssistanceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    performedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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