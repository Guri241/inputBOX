
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
 * Model mydata
 * 
 */
export type mydata = $Result.DefaultSelection<Prisma.$mydataPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mydata
 * const mydata = await prisma.mydata.findMany()
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
   * // Fetch zero or more Mydata
   * const mydata = await prisma.mydata.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.mydata`: Exposes CRUD operations for the **mydata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mydata
    * const mydata = await prisma.mydata.findMany()
    * ```
    */
  get mydata(): Prisma.mydataDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    mydata: 'mydata'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    minutes?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "mydata"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      mydata: {
        payload: Prisma.$mydataPayload<ExtArgs>
        fields: Prisma.mydataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mydataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mydataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mydataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mydataPayload>
          }
          findFirst: {
            args: Prisma.mydataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mydataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mydataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mydataPayload>
          }
          findMany: {
            args: Prisma.mydataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mydataPayload>[]
          }
          create: {
            args: Prisma.mydataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mydataPayload>
          }
          createMany: {
            args: Prisma.mydataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mydataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mydataPayload>[]
          }
          delete: {
            args: Prisma.mydataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mydataPayload>
          }
          update: {
            args: Prisma.mydataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mydataPayload>
          }
          deleteMany: {
            args: Prisma.mydataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mydataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mydataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mydataPayload>
          }
          aggregate: {
            args: Prisma.MydataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMydata>
          }
          groupBy: {
            args: Prisma.mydataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MydataGroupByOutputType>[]
          }
          count: {
            args: Prisma.mydataCountArgs<ExtArgs>
            result: $Utils.Optional<MydataCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model mydata
   */

  export type AggregateMydata = {
    _count: MydataCountAggregateOutputType | null
    _avg: MydataAvgAggregateOutputType | null
    _sum: MydataSumAggregateOutputType | null
    _min: MydataMinAggregateOutputType | null
    _max: MydataMaxAggregateOutputType | null
  }

  export type MydataAvgAggregateOutputType = {
    id: number | null
  }

  export type MydataSumAggregateOutputType = {
    id: number | null
  }

  export type MydataMinAggregateOutputType = {
    id: number | null
    name: string | null
    option2: string | null
    option3: string | null
    extrainput: string | null
    contents: string | null
    data: Date | null
  }

  export type MydataMaxAggregateOutputType = {
    id: number | null
    name: string | null
    option2: string | null
    option3: string | null
    extrainput: string | null
    contents: string | null
    data: Date | null
  }

  export type MydataCountAggregateOutputType = {
    id: number
    name: number
    option2: number
    option3: number
    checkboxes: number
    extrainput: number
    contents: number
    data: number
    _all: number
  }


  export type MydataAvgAggregateInputType = {
    id?: true
  }

  export type MydataSumAggregateInputType = {
    id?: true
  }

  export type MydataMinAggregateInputType = {
    id?: true
    name?: true
    option2?: true
    option3?: true
    extrainput?: true
    contents?: true
    data?: true
  }

  export type MydataMaxAggregateInputType = {
    id?: true
    name?: true
    option2?: true
    option3?: true
    extrainput?: true
    contents?: true
    data?: true
  }

  export type MydataCountAggregateInputType = {
    id?: true
    name?: true
    option2?: true
    option3?: true
    checkboxes?: true
    extrainput?: true
    contents?: true
    data?: true
    _all?: true
  }

  export type MydataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mydata to aggregate.
     */
    where?: mydataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mydata to fetch.
     */
    orderBy?: mydataOrderByWithRelationInput | mydataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mydataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mydata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mydata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mydata
    **/
    _count?: true | MydataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MydataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MydataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MydataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MydataMaxAggregateInputType
  }

  export type GetMydataAggregateType<T extends MydataAggregateArgs> = {
        [P in keyof T & keyof AggregateMydata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMydata[P]>
      : GetScalarType<T[P], AggregateMydata[P]>
  }




  export type mydataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mydataWhereInput
    orderBy?: mydataOrderByWithAggregationInput | mydataOrderByWithAggregationInput[]
    by: MydataScalarFieldEnum[] | MydataScalarFieldEnum
    having?: mydataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MydataCountAggregateInputType | true
    _avg?: MydataAvgAggregateInputType
    _sum?: MydataSumAggregateInputType
    _min?: MydataMinAggregateInputType
    _max?: MydataMaxAggregateInputType
  }

  export type MydataGroupByOutputType = {
    id: number
    name: string
    option2: string
    option3: string
    checkboxes: string[]
    extrainput: string
    contents: string
    data: Date
    _count: MydataCountAggregateOutputType | null
    _avg: MydataAvgAggregateOutputType | null
    _sum: MydataSumAggregateOutputType | null
    _min: MydataMinAggregateOutputType | null
    _max: MydataMaxAggregateOutputType | null
  }

  type GetMydataGroupByPayload<T extends mydataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MydataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MydataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MydataGroupByOutputType[P]>
            : GetScalarType<T[P], MydataGroupByOutputType[P]>
        }
      >
    >


  export type mydataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    option2?: boolean
    option3?: boolean
    checkboxes?: boolean
    extrainput?: boolean
    contents?: boolean
    data?: boolean
  }, ExtArgs["result"]["mydata"]>

  export type mydataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    option2?: boolean
    option3?: boolean
    checkboxes?: boolean
    extrainput?: boolean
    contents?: boolean
    data?: boolean
  }, ExtArgs["result"]["mydata"]>

  export type mydataSelectScalar = {
    id?: boolean
    name?: boolean
    option2?: boolean
    option3?: boolean
    checkboxes?: boolean
    extrainput?: boolean
    contents?: boolean
    data?: boolean
  }


  export type $mydataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mydata"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      option2: string
      option3: string
      checkboxes: string[]
      extrainput: string
      contents: string
      data: Date
    }, ExtArgs["result"]["mydata"]>
    composites: {}
  }

  type mydataGetPayload<S extends boolean | null | undefined | mydataDefaultArgs> = $Result.GetResult<Prisma.$mydataPayload, S>

  type mydataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mydataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MydataCountAggregateInputType | true
    }

  export interface mydataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mydata'], meta: { name: 'mydata' } }
    /**
     * Find zero or one Mydata that matches the filter.
     * @param {mydataFindUniqueArgs} args - Arguments to find a Mydata
     * @example
     * // Get one Mydata
     * const mydata = await prisma.mydata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mydataFindUniqueArgs>(args: SelectSubset<T, mydataFindUniqueArgs<ExtArgs>>): Prisma__mydataClient<$Result.GetResult<Prisma.$mydataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mydata that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mydataFindUniqueOrThrowArgs} args - Arguments to find a Mydata
     * @example
     * // Get one Mydata
     * const mydata = await prisma.mydata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mydataFindUniqueOrThrowArgs>(args: SelectSubset<T, mydataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mydataClient<$Result.GetResult<Prisma.$mydataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mydata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mydataFindFirstArgs} args - Arguments to find a Mydata
     * @example
     * // Get one Mydata
     * const mydata = await prisma.mydata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mydataFindFirstArgs>(args?: SelectSubset<T, mydataFindFirstArgs<ExtArgs>>): Prisma__mydataClient<$Result.GetResult<Prisma.$mydataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mydata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mydataFindFirstOrThrowArgs} args - Arguments to find a Mydata
     * @example
     * // Get one Mydata
     * const mydata = await prisma.mydata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mydataFindFirstOrThrowArgs>(args?: SelectSubset<T, mydataFindFirstOrThrowArgs<ExtArgs>>): Prisma__mydataClient<$Result.GetResult<Prisma.$mydataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mydata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mydataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mydata
     * const mydata = await prisma.mydata.findMany()
     * 
     * // Get first 10 Mydata
     * const mydata = await prisma.mydata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mydataWithIdOnly = await prisma.mydata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mydataFindManyArgs>(args?: SelectSubset<T, mydataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mydataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mydata.
     * @param {mydataCreateArgs} args - Arguments to create a Mydata.
     * @example
     * // Create one Mydata
     * const Mydata = await prisma.mydata.create({
     *   data: {
     *     // ... data to create a Mydata
     *   }
     * })
     * 
     */
    create<T extends mydataCreateArgs>(args: SelectSubset<T, mydataCreateArgs<ExtArgs>>): Prisma__mydataClient<$Result.GetResult<Prisma.$mydataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mydata.
     * @param {mydataCreateManyArgs} args - Arguments to create many Mydata.
     * @example
     * // Create many Mydata
     * const mydata = await prisma.mydata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mydataCreateManyArgs>(args?: SelectSubset<T, mydataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mydata and returns the data saved in the database.
     * @param {mydataCreateManyAndReturnArgs} args - Arguments to create many Mydata.
     * @example
     * // Create many Mydata
     * const mydata = await prisma.mydata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mydata and only return the `id`
     * const mydataWithIdOnly = await prisma.mydata.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mydataCreateManyAndReturnArgs>(args?: SelectSubset<T, mydataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mydataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Mydata.
     * @param {mydataDeleteArgs} args - Arguments to delete one Mydata.
     * @example
     * // Delete one Mydata
     * const Mydata = await prisma.mydata.delete({
     *   where: {
     *     // ... filter to delete one Mydata
     *   }
     * })
     * 
     */
    delete<T extends mydataDeleteArgs>(args: SelectSubset<T, mydataDeleteArgs<ExtArgs>>): Prisma__mydataClient<$Result.GetResult<Prisma.$mydataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mydata.
     * @param {mydataUpdateArgs} args - Arguments to update one Mydata.
     * @example
     * // Update one Mydata
     * const mydata = await prisma.mydata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mydataUpdateArgs>(args: SelectSubset<T, mydataUpdateArgs<ExtArgs>>): Prisma__mydataClient<$Result.GetResult<Prisma.$mydataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mydata.
     * @param {mydataDeleteManyArgs} args - Arguments to filter Mydata to delete.
     * @example
     * // Delete a few Mydata
     * const { count } = await prisma.mydata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mydataDeleteManyArgs>(args?: SelectSubset<T, mydataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mydata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mydataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mydata
     * const mydata = await prisma.mydata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mydataUpdateManyArgs>(args: SelectSubset<T, mydataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mydata.
     * @param {mydataUpsertArgs} args - Arguments to update or create a Mydata.
     * @example
     * // Update or create a Mydata
     * const mydata = await prisma.mydata.upsert({
     *   create: {
     *     // ... data to create a Mydata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mydata we want to update
     *   }
     * })
     */
    upsert<T extends mydataUpsertArgs>(args: SelectSubset<T, mydataUpsertArgs<ExtArgs>>): Prisma__mydataClient<$Result.GetResult<Prisma.$mydataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mydata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mydataCountArgs} args - Arguments to filter Mydata to count.
     * @example
     * // Count the number of Mydata
     * const count = await prisma.mydata.count({
     *   where: {
     *     // ... the filter for the Mydata we want to count
     *   }
     * })
    **/
    count<T extends mydataCountArgs>(
      args?: Subset<T, mydataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MydataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mydata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MydataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MydataAggregateArgs>(args: Subset<T, MydataAggregateArgs>): Prisma.PrismaPromise<GetMydataAggregateType<T>>

    /**
     * Group by Mydata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mydataGroupByArgs} args - Group by arguments.
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
      T extends mydataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mydataGroupByArgs['orderBy'] }
        : { orderBy?: mydataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mydataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMydataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mydata model
   */
  readonly fields: mydataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mydata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mydataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mydata model
   */ 
  interface mydataFieldRefs {
    readonly id: FieldRef<"mydata", 'Int'>
    readonly name: FieldRef<"mydata", 'String'>
    readonly option2: FieldRef<"mydata", 'String'>
    readonly option3: FieldRef<"mydata", 'String'>
    readonly checkboxes: FieldRef<"mydata", 'String[]'>
    readonly extrainput: FieldRef<"mydata", 'String'>
    readonly contents: FieldRef<"mydata", 'String'>
    readonly data: FieldRef<"mydata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mydata findUnique
   */
  export type mydataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelect<ExtArgs> | null
    /**
     * Filter, which mydata to fetch.
     */
    where: mydataWhereUniqueInput
  }

  /**
   * mydata findUniqueOrThrow
   */
  export type mydataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelect<ExtArgs> | null
    /**
     * Filter, which mydata to fetch.
     */
    where: mydataWhereUniqueInput
  }

  /**
   * mydata findFirst
   */
  export type mydataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelect<ExtArgs> | null
    /**
     * Filter, which mydata to fetch.
     */
    where?: mydataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mydata to fetch.
     */
    orderBy?: mydataOrderByWithRelationInput | mydataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mydata.
     */
    cursor?: mydataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mydata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mydata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mydata.
     */
    distinct?: MydataScalarFieldEnum | MydataScalarFieldEnum[]
  }

  /**
   * mydata findFirstOrThrow
   */
  export type mydataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelect<ExtArgs> | null
    /**
     * Filter, which mydata to fetch.
     */
    where?: mydataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mydata to fetch.
     */
    orderBy?: mydataOrderByWithRelationInput | mydataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mydata.
     */
    cursor?: mydataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mydata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mydata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mydata.
     */
    distinct?: MydataScalarFieldEnum | MydataScalarFieldEnum[]
  }

  /**
   * mydata findMany
   */
  export type mydataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelect<ExtArgs> | null
    /**
     * Filter, which mydata to fetch.
     */
    where?: mydataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mydata to fetch.
     */
    orderBy?: mydataOrderByWithRelationInput | mydataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mydata.
     */
    cursor?: mydataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mydata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mydata.
     */
    skip?: number
    distinct?: MydataScalarFieldEnum | MydataScalarFieldEnum[]
  }

  /**
   * mydata create
   */
  export type mydataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelect<ExtArgs> | null
    /**
     * The data needed to create a mydata.
     */
    data: XOR<mydataCreateInput, mydataUncheckedCreateInput>
  }

  /**
   * mydata createMany
   */
  export type mydataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mydata.
     */
    data: mydataCreateManyInput | mydataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mydata createManyAndReturn
   */
  export type mydataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many mydata.
     */
    data: mydataCreateManyInput | mydataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mydata update
   */
  export type mydataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelect<ExtArgs> | null
    /**
     * The data needed to update a mydata.
     */
    data: XOR<mydataUpdateInput, mydataUncheckedUpdateInput>
    /**
     * Choose, which mydata to update.
     */
    where: mydataWhereUniqueInput
  }

  /**
   * mydata updateMany
   */
  export type mydataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mydata.
     */
    data: XOR<mydataUpdateManyMutationInput, mydataUncheckedUpdateManyInput>
    /**
     * Filter which mydata to update
     */
    where?: mydataWhereInput
  }

  /**
   * mydata upsert
   */
  export type mydataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelect<ExtArgs> | null
    /**
     * The filter to search for the mydata to update in case it exists.
     */
    where: mydataWhereUniqueInput
    /**
     * In case the mydata found by the `where` argument doesn't exist, create a new mydata with this data.
     */
    create: XOR<mydataCreateInput, mydataUncheckedCreateInput>
    /**
     * In case the mydata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mydataUpdateInput, mydataUncheckedUpdateInput>
  }

  /**
   * mydata delete
   */
  export type mydataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelect<ExtArgs> | null
    /**
     * Filter which mydata to delete.
     */
    where: mydataWhereUniqueInput
  }

  /**
   * mydata deleteMany
   */
  export type mydataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mydata to delete
     */
    where?: mydataWhereInput
  }

  /**
   * mydata without action
   */
  export type mydataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mydata
     */
    select?: mydataSelect<ExtArgs> | null
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


  export const MydataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    option2: 'option2',
    option3: 'option3',
    checkboxes: 'checkboxes',
    extrainput: 'extrainput',
    contents: 'contents',
    data: 'data'
  };

  export type MydataScalarFieldEnum = (typeof MydataScalarFieldEnum)[keyof typeof MydataScalarFieldEnum]


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


  export type mydataWhereInput = {
    AND?: mydataWhereInput | mydataWhereInput[]
    OR?: mydataWhereInput[]
    NOT?: mydataWhereInput | mydataWhereInput[]
    id?: IntFilter<"mydata"> | number
    name?: StringFilter<"mydata"> | string
    option2?: StringFilter<"mydata"> | string
    option3?: StringFilter<"mydata"> | string
    checkboxes?: StringNullableListFilter<"mydata">
    extrainput?: StringFilter<"mydata"> | string
    contents?: StringFilter<"mydata"> | string
    data?: DateTimeFilter<"mydata"> | Date | string
  }

  export type mydataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    option2?: SortOrder
    option3?: SortOrder
    checkboxes?: SortOrder
    extrainput?: SortOrder
    contents?: SortOrder
    data?: SortOrder
  }

  export type mydataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mydataWhereInput | mydataWhereInput[]
    OR?: mydataWhereInput[]
    NOT?: mydataWhereInput | mydataWhereInput[]
    name?: StringFilter<"mydata"> | string
    option2?: StringFilter<"mydata"> | string
    option3?: StringFilter<"mydata"> | string
    checkboxes?: StringNullableListFilter<"mydata">
    extrainput?: StringFilter<"mydata"> | string
    contents?: StringFilter<"mydata"> | string
    data?: DateTimeFilter<"mydata"> | Date | string
  }, "id">

  export type mydataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    option2?: SortOrder
    option3?: SortOrder
    checkboxes?: SortOrder
    extrainput?: SortOrder
    contents?: SortOrder
    data?: SortOrder
    _count?: mydataCountOrderByAggregateInput
    _avg?: mydataAvgOrderByAggregateInput
    _max?: mydataMaxOrderByAggregateInput
    _min?: mydataMinOrderByAggregateInput
    _sum?: mydataSumOrderByAggregateInput
  }

  export type mydataScalarWhereWithAggregatesInput = {
    AND?: mydataScalarWhereWithAggregatesInput | mydataScalarWhereWithAggregatesInput[]
    OR?: mydataScalarWhereWithAggregatesInput[]
    NOT?: mydataScalarWhereWithAggregatesInput | mydataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mydata"> | number
    name?: StringWithAggregatesFilter<"mydata"> | string
    option2?: StringWithAggregatesFilter<"mydata"> | string
    option3?: StringWithAggregatesFilter<"mydata"> | string
    checkboxes?: StringNullableListFilter<"mydata">
    extrainput?: StringWithAggregatesFilter<"mydata"> | string
    contents?: StringWithAggregatesFilter<"mydata"> | string
    data?: DateTimeWithAggregatesFilter<"mydata"> | Date | string
  }

  export type mydataCreateInput = {
    name: string
    option2: string
    option3: string
    checkboxes?: mydataCreatecheckboxesInput | string[]
    extrainput: string
    contents: string
    data?: Date | string
  }

  export type mydataUncheckedCreateInput = {
    id?: number
    name: string
    option2: string
    option3: string
    checkboxes?: mydataCreatecheckboxesInput | string[]
    extrainput: string
    contents: string
    data?: Date | string
  }

  export type mydataUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    option2?: StringFieldUpdateOperationsInput | string
    option3?: StringFieldUpdateOperationsInput | string
    checkboxes?: mydataUpdatecheckboxesInput | string[]
    extrainput?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mydataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    option2?: StringFieldUpdateOperationsInput | string
    option3?: StringFieldUpdateOperationsInput | string
    checkboxes?: mydataUpdatecheckboxesInput | string[]
    extrainput?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mydataCreateManyInput = {
    id?: number
    name: string
    option2: string
    option3: string
    checkboxes?: mydataCreatecheckboxesInput | string[]
    extrainput: string
    contents: string
    data?: Date | string
  }

  export type mydataUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    option2?: StringFieldUpdateOperationsInput | string
    option3?: StringFieldUpdateOperationsInput | string
    checkboxes?: mydataUpdatecheckboxesInput | string[]
    extrainput?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mydataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    option2?: StringFieldUpdateOperationsInput | string
    option3?: StringFieldUpdateOperationsInput | string
    checkboxes?: mydataUpdatecheckboxesInput | string[]
    extrainput?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type mydataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    option2?: SortOrder
    option3?: SortOrder
    checkboxes?: SortOrder
    extrainput?: SortOrder
    contents?: SortOrder
    data?: SortOrder
  }

  export type mydataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mydataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    option2?: SortOrder
    option3?: SortOrder
    extrainput?: SortOrder
    contents?: SortOrder
    data?: SortOrder
  }

  export type mydataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    option2?: SortOrder
    option3?: SortOrder
    extrainput?: SortOrder
    contents?: SortOrder
    data?: SortOrder
  }

  export type mydataSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type mydataCreatecheckboxesInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type mydataUpdatecheckboxesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use mydataDefaultArgs instead
     */
    export type mydataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mydataDefaultArgs<ExtArgs>

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