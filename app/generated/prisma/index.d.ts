
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrganizationMembers
 * 
 */
export type OrganizationMembers = $Result.DefaultSelection<Prisma.$OrganizationMembersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  EMPLOYEE: 'EMPLOYEE',
  OWNER: 'OWNER',
  SUPERVISOR: 'SUPERVISOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  DEACTIVE: 'DEACTIVE',
  INVITED: 'INVITED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const OrganizationStatus: {
  ACTIVE: 'ACTIVE',
  DEACTIVE: 'DEACTIVE'
};

export type OrganizationStatus = (typeof OrganizationStatus)[keyof typeof OrganizationStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type OrganizationStatus = $Enums.OrganizationStatus

export const OrganizationStatus: typeof $Enums.OrganizationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationMembers`: Exposes CRUD operations for the **OrganizationMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMembers
    * const organizationMembers = await prisma.organizationMembers.findMany()
    * ```
    */
  get organizationMembers(): Prisma.OrganizationMembersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Organization: 'Organization',
    OrganizationMembers: 'OrganizationMembers'
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
      modelProps: "user" | "organization" | "organizationMembers"
      txIsolationLevel: never
    }
    model: {
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OrganizationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OrganizationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationMembers: {
        payload: Prisma.$OrganizationMembersPayload<ExtArgs>
        fields: Prisma.OrganizationMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembersPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembersPayload>
          }
          findMany: {
            args: Prisma.OrganizationMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembersPayload>[]
          }
          create: {
            args: Prisma.OrganizationMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembersPayload>
          }
          createMany: {
            args: Prisma.OrganizationMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizationMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembersPayload>
          }
          update: {
            args: Prisma.OrganizationMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembersPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembersPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMembers>
          }
          groupBy: {
            args: Prisma.OrganizationMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMembersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OrganizationMembersFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OrganizationMembersAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OrganizationMembersCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMembersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    user?: UserOmit
    organization?: OrganizationOmit
    organizationMembers?: OrganizationMembersOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    OrganizationMembers: number
    OwnedOrganization: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrganizationMembers?: boolean | UserCountOutputTypeCountOrganizationMembersArgs
    OwnedOrganization?: boolean | UserCountOutputTypeCountOwnedOrganizationArgs
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
  export type UserCountOutputTypeCountOrganizationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMembersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedOrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    OrganizationMembers: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrganizationMembers?: boolean | OrganizationCountOutputTypeCountOrganizationMembersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountOrganizationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMembersWhereInput
  }


  /**
   * Count Type OrganizationMembersCountOutputType
   */

  export type OrganizationMembersCountOutputType = {
    Employee: number
  }

  export type OrganizationMembersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | OrganizationMembersCountOutputTypeCountEmployeeArgs
  }

  // Custom InputTypes
  /**
   * OrganizationMembersCountOutputType without action
   */
  export type OrganizationMembersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembersCountOutputType
     */
    select?: OrganizationMembersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationMembersCountOutputType without action
   */
  export type OrganizationMembersCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMembersWhereInput
  }


  /**
   * Models
   */

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
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
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
    firstName: string | null
    lastName: string | null
    email: string
    password: string
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    OrganizationMembers?: boolean | User$OrganizationMembersArgs<ExtArgs>
    OwnedOrganization?: boolean | User$OwnedOrganizationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrganizationMembers?: boolean | User$OrganizationMembersArgs<ExtArgs>
    OwnedOrganization?: boolean | User$OwnedOrganizationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      OrganizationMembers: Prisma.$OrganizationMembersPayload<ExtArgs>[]
      OwnedOrganization: Prisma.$OrganizationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string | null
      lastName: string | null
      email: string
      password: string
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    OrganizationMembers<T extends User$OrganizationMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$OrganizationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OwnedOrganization<T extends User$OwnedOrganizationArgs<ExtArgs> = {}>(args?: Subset<T, User$OwnedOrganizationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.OrganizationMembers
   */
  export type User$OrganizationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    where?: OrganizationMembersWhereInput
    orderBy?: OrganizationMembersOrderByWithRelationInput | OrganizationMembersOrderByWithRelationInput[]
    cursor?: OrganizationMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMembersScalarFieldEnum | OrganizationMembersScalarFieldEnum[]
  }

  /**
   * User.OwnedOrganization
   */
  export type User$OwnedOrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    cursor?: OrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
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
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.OrganizationStatus | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.OrganizationStatus | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    status: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    status: $Enums.OrganizationStatus
    ownerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    OrganizationMembers?: boolean | Organization$OrganizationMembersArgs<ExtArgs>
    Owner?: boolean | Organization$OwnerArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>



  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrganizationMembers?: boolean | Organization$OrganizationMembersArgs<ExtArgs>
    Owner?: boolean | Organization$OwnerArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      OrganizationMembers: Prisma.$OrganizationMembersPayload<ExtArgs>[]
      Owner: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: $Enums.OrganizationStatus
      ownerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * @param {OrganizationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const organization = await prisma.organization.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OrganizationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Organization.
     * @param {OrganizationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const organization = await prisma.organization.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OrganizationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrganizationMembers<T extends Organization$OrganizationMembersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$OrganizationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Owner<T extends Organization$OwnerArgs<ExtArgs> = {}>(args?: Subset<T, Organization$OwnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly status: FieldRef<"Organization", 'OrganizationStatus'>
    readonly ownerId: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization findRaw
   */
  export type OrganizationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Organization aggregateRaw
   */
  export type OrganizationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Organization.OrganizationMembers
   */
  export type Organization$OrganizationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    where?: OrganizationMembersWhereInput
    orderBy?: OrganizationMembersOrderByWithRelationInput | OrganizationMembersOrderByWithRelationInput[]
    cursor?: OrganizationMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMembersScalarFieldEnum | OrganizationMembersScalarFieldEnum[]
  }

  /**
   * Organization.Owner
   */
  export type Organization$OwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationMembers
   */

  export type AggregateOrganizationMembers = {
    _count: OrganizationMembersCountAggregateOutputType | null
    _min: OrganizationMembersMinAggregateOutputType | null
    _max: OrganizationMembersMaxAggregateOutputType | null
  }

  export type OrganizationMembersMinAggregateOutputType = {
    id: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    userId: string | null
    organizationId: string | null
    supervisorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMembersMaxAggregateOutputType = {
    id: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    userId: string | null
    organizationId: string | null
    supervisorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMembersCountAggregateOutputType = {
    id: number
    role: number
    permissions: number
    status: number
    userId: number
    organizationId: number
    supervisorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMembersMinAggregateInputType = {
    id?: true
    role?: true
    status?: true
    userId?: true
    organizationId?: true
    supervisorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMembersMaxAggregateInputType = {
    id?: true
    role?: true
    status?: true
    userId?: true
    organizationId?: true
    supervisorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMembersCountAggregateInputType = {
    id?: true
    role?: true
    permissions?: true
    status?: true
    userId?: true
    organizationId?: true
    supervisorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembers to aggregate.
     */
    where?: OrganizationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMembersOrderByWithRelationInput | OrganizationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMembers
    **/
    _count?: true | OrganizationMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMembersMaxAggregateInputType
  }

  export type GetOrganizationMembersAggregateType<T extends OrganizationMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMembers[P]>
      : GetScalarType<T[P], AggregateOrganizationMembers[P]>
  }




  export type OrganizationMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMembersWhereInput
    orderBy?: OrganizationMembersOrderByWithAggregationInput | OrganizationMembersOrderByWithAggregationInput[]
    by: OrganizationMembersScalarFieldEnum[] | OrganizationMembersScalarFieldEnum
    having?: OrganizationMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMembersCountAggregateInputType | true
    _min?: OrganizationMembersMinAggregateInputType
    _max?: OrganizationMembersMaxAggregateInputType
  }

  export type OrganizationMembersGroupByOutputType = {
    id: string
    role: $Enums.UserRole
    permissions: string[]
    status: $Enums.UserStatus
    userId: string
    organizationId: string
    supervisorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationMembersCountAggregateOutputType | null
    _min: OrganizationMembersMinAggregateOutputType | null
    _max: OrganizationMembersMaxAggregateOutputType | null
  }

  type GetOrganizationMembersGroupByPayload<T extends OrganizationMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMembersGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMembersGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    permissions?: boolean
    status?: boolean
    userId?: boolean
    organizationId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    Supervisor?: boolean | OrganizationMembers$SupervisorArgs<ExtArgs>
    Employee?: boolean | OrganizationMembers$EmployeeArgs<ExtArgs>
    _count?: boolean | OrganizationMembersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMembers"]>



  export type OrganizationMembersSelectScalar = {
    id?: boolean
    role?: boolean
    permissions?: boolean
    status?: boolean
    userId?: boolean
    organizationId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "permissions" | "status" | "userId" | "organizationId" | "supervisorId" | "createdAt" | "updatedAt", ExtArgs["result"]["organizationMembers"]>
  export type OrganizationMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    Supervisor?: boolean | OrganizationMembers$SupervisorArgs<ExtArgs>
    Employee?: boolean | OrganizationMembers$EmployeeArgs<ExtArgs>
    _count?: boolean | OrganizationMembersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganizationMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMembers"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Organization: Prisma.$OrganizationPayload<ExtArgs>
      Supervisor: Prisma.$OrganizationMembersPayload<ExtArgs> | null
      Employee: Prisma.$OrganizationMembersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.UserRole
      permissions: string[]
      status: $Enums.UserStatus
      userId: string
      organizationId: string
      supervisorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organizationMembers"]>
    composites: {}
  }

  type OrganizationMembersGetPayload<S extends boolean | null | undefined | OrganizationMembersDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMembersPayload, S>

  type OrganizationMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationMembersCountAggregateInputType | true
    }

  export interface OrganizationMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMembers'], meta: { name: 'OrganizationMembers' } }
    /**
     * Find zero or one OrganizationMembers that matches the filter.
     * @param {OrganizationMembersFindUniqueArgs} args - Arguments to find a OrganizationMembers
     * @example
     * // Get one OrganizationMembers
     * const organizationMembers = await prisma.organizationMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMembersFindUniqueArgs>(args: SelectSubset<T, OrganizationMembersFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMembersClient<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationMembersFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMembers
     * @example
     * // Get one OrganizationMembers
     * const organizationMembers = await prisma.organizationMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMembersClient<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembersFindFirstArgs} args - Arguments to find a OrganizationMembers
     * @example
     * // Get one OrganizationMembers
     * const organizationMembers = await prisma.organizationMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMembersFindFirstArgs>(args?: SelectSubset<T, OrganizationMembersFindFirstArgs<ExtArgs>>): Prisma__OrganizationMembersClient<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembersFindFirstOrThrowArgs} args - Arguments to find a OrganizationMembers
     * @example
     * // Get one OrganizationMembers
     * const organizationMembers = await prisma.organizationMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMembersClient<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMembers
     * const organizationMembers = await prisma.organizationMembers.findMany()
     * 
     * // Get first 10 OrganizationMembers
     * const organizationMembers = await prisma.organizationMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationMembersWithIdOnly = await prisma.organizationMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationMembersFindManyArgs>(args?: SelectSubset<T, OrganizationMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationMembers.
     * @param {OrganizationMembersCreateArgs} args - Arguments to create a OrganizationMembers.
     * @example
     * // Create one OrganizationMembers
     * const OrganizationMembers = await prisma.organizationMembers.create({
     *   data: {
     *     // ... data to create a OrganizationMembers
     *   }
     * })
     * 
     */
    create<T extends OrganizationMembersCreateArgs>(args: SelectSubset<T, OrganizationMembersCreateArgs<ExtArgs>>): Prisma__OrganizationMembersClient<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationMembers.
     * @param {OrganizationMembersCreateManyArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMembers = await prisma.organizationMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMembersCreateManyArgs>(args?: SelectSubset<T, OrganizationMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrganizationMembers.
     * @param {OrganizationMembersDeleteArgs} args - Arguments to delete one OrganizationMembers.
     * @example
     * // Delete one OrganizationMembers
     * const OrganizationMembers = await prisma.organizationMembers.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMembers
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMembersDeleteArgs>(args: SelectSubset<T, OrganizationMembersDeleteArgs<ExtArgs>>): Prisma__OrganizationMembersClient<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationMembers.
     * @param {OrganizationMembersUpdateArgs} args - Arguments to update one OrganizationMembers.
     * @example
     * // Update one OrganizationMembers
     * const organizationMembers = await prisma.organizationMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMembersUpdateArgs>(args: SelectSubset<T, OrganizationMembersUpdateArgs<ExtArgs>>): Prisma__OrganizationMembersClient<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationMembers.
     * @param {OrganizationMembersDeleteManyArgs} args - Arguments to filter OrganizationMembers to delete.
     * @example
     * // Delete a few OrganizationMembers
     * const { count } = await prisma.organizationMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMembersDeleteManyArgs>(args?: SelectSubset<T, OrganizationMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMembers
     * const organizationMembers = await prisma.organizationMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMembersUpdateManyArgs>(args: SelectSubset<T, OrganizationMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrganizationMembers.
     * @param {OrganizationMembersUpsertArgs} args - Arguments to update or create a OrganizationMembers.
     * @example
     * // Update or create a OrganizationMembers
     * const organizationMembers = await prisma.organizationMembers.upsert({
     *   create: {
     *     // ... data to create a OrganizationMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMembers we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMembersUpsertArgs>(args: SelectSubset<T, OrganizationMembersUpsertArgs<ExtArgs>>): Prisma__OrganizationMembersClient<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationMembers that matches the filter.
     * @param {OrganizationMembersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const organizationMembers = await prisma.organizationMembers.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OrganizationMembersFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OrganizationMembers.
     * @param {OrganizationMembersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const organizationMembers = await prisma.organizationMembers.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OrganizationMembersAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembersCountArgs} args - Arguments to filter OrganizationMembers to count.
     * @example
     * // Count the number of OrganizationMembers
     * const count = await prisma.organizationMembers.count({
     *   where: {
     *     // ... the filter for the OrganizationMembers we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMembersCountArgs>(
      args?: Subset<T, OrganizationMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationMembersAggregateArgs>(args: Subset<T, OrganizationMembersAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMembersAggregateType<T>>

    /**
     * Group by OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembersGroupByArgs} args - Group by arguments.
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
      T extends OrganizationMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMembersGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMembers model
   */
  readonly fields: OrganizationMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Supervisor<T extends OrganizationMembers$SupervisorArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationMembers$SupervisorArgs<ExtArgs>>): Prisma__OrganizationMembersClient<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Employee<T extends OrganizationMembers$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationMembers$EmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OrganizationMembers model
   */
  interface OrganizationMembersFieldRefs {
    readonly id: FieldRef<"OrganizationMembers", 'String'>
    readonly role: FieldRef<"OrganizationMembers", 'UserRole'>
    readonly permissions: FieldRef<"OrganizationMembers", 'String[]'>
    readonly status: FieldRef<"OrganizationMembers", 'UserStatus'>
    readonly userId: FieldRef<"OrganizationMembers", 'String'>
    readonly organizationId: FieldRef<"OrganizationMembers", 'String'>
    readonly supervisorId: FieldRef<"OrganizationMembers", 'String'>
    readonly createdAt: FieldRef<"OrganizationMembers", 'DateTime'>
    readonly updatedAt: FieldRef<"OrganizationMembers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMembers findUnique
   */
  export type OrganizationMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where: OrganizationMembersWhereUniqueInput
  }

  /**
   * OrganizationMembers findUniqueOrThrow
   */
  export type OrganizationMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where: OrganizationMembersWhereUniqueInput
  }

  /**
   * OrganizationMembers findFirst
   */
  export type OrganizationMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMembersOrderByWithRelationInput | OrganizationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMembersScalarFieldEnum | OrganizationMembersScalarFieldEnum[]
  }

  /**
   * OrganizationMembers findFirstOrThrow
   */
  export type OrganizationMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMembersOrderByWithRelationInput | OrganizationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMembersScalarFieldEnum | OrganizationMembersScalarFieldEnum[]
  }

  /**
   * OrganizationMembers findMany
   */
  export type OrganizationMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMembersOrderByWithRelationInput | OrganizationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMembers.
     */
    cursor?: OrganizationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    distinct?: OrganizationMembersScalarFieldEnum | OrganizationMembersScalarFieldEnum[]
  }

  /**
   * OrganizationMembers create
   */
  export type OrganizationMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMembers.
     */
    data: XOR<OrganizationMembersCreateInput, OrganizationMembersUncheckedCreateInput>
  }

  /**
   * OrganizationMembers createMany
   */
  export type OrganizationMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMembersCreateManyInput | OrganizationMembersCreateManyInput[]
  }

  /**
   * OrganizationMembers update
   */
  export type OrganizationMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMembers.
     */
    data: XOR<OrganizationMembersUpdateInput, OrganizationMembersUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMembers to update.
     */
    where: OrganizationMembersWhereUniqueInput
  }

  /**
   * OrganizationMembers updateMany
   */
  export type OrganizationMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMembersUpdateManyMutationInput, OrganizationMembersUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMembersWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
  }

  /**
   * OrganizationMembers upsert
   */
  export type OrganizationMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMembers to update in case it exists.
     */
    where: OrganizationMembersWhereUniqueInput
    /**
     * In case the OrganizationMembers found by the `where` argument doesn't exist, create a new OrganizationMembers with this data.
     */
    create: XOR<OrganizationMembersCreateInput, OrganizationMembersUncheckedCreateInput>
    /**
     * In case the OrganizationMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMembersUpdateInput, OrganizationMembersUncheckedUpdateInput>
  }

  /**
   * OrganizationMembers delete
   */
  export type OrganizationMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    /**
     * Filter which OrganizationMembers to delete.
     */
    where: OrganizationMembersWhereUniqueInput
  }

  /**
   * OrganizationMembers deleteMany
   */
  export type OrganizationMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembers to delete
     */
    where?: OrganizationMembersWhereInput
    /**
     * Limit how many OrganizationMembers to delete.
     */
    limit?: number
  }

  /**
   * OrganizationMembers findRaw
   */
  export type OrganizationMembersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OrganizationMembers aggregateRaw
   */
  export type OrganizationMembersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OrganizationMembers.Supervisor
   */
  export type OrganizationMembers$SupervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    where?: OrganizationMembersWhereInput
  }

  /**
   * OrganizationMembers.Employee
   */
  export type OrganizationMembers$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
    where?: OrganizationMembersWhereInput
    orderBy?: OrganizationMembersOrderByWithRelationInput | OrganizationMembersOrderByWithRelationInput[]
    cursor?: OrganizationMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMembersScalarFieldEnum | OrganizationMembersScalarFieldEnum[]
  }

  /**
   * OrganizationMembers without action
   */
  export type OrganizationMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembers
     */
    select?: OrganizationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembers
     */
    omit?: OrganizationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrganizationMembersScalarFieldEnum: {
    id: 'id',
    role: 'role',
    permissions: 'permissions',
    status: 'status',
    userId: 'userId',
    organizationId: 'organizationId',
    supervisorId: 'supervisorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationMembersScalarFieldEnum = (typeof OrganizationMembersScalarFieldEnum)[keyof typeof OrganizationMembersScalarFieldEnum]


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
   * Reference to a field of type 'OrganizationStatus'
   */
  export type EnumOrganizationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationStatus'>
    


  /**
   * Reference to a field of type 'OrganizationStatus[]'
   */
  export type ListEnumOrganizationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationStatus[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    OrganizationMembers?: OrganizationMembersListRelationFilter
    OwnedOrganization?: OrganizationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    OrganizationMembers?: OrganizationMembersOrderByRelationAggregateInput
    OwnedOrganization?: OrganizationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    OrganizationMembers?: OrganizationMembersListRelationFilter
    OwnedOrganization?: OrganizationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
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
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    status?: EnumOrganizationStatusFilter<"Organization"> | $Enums.OrganizationStatus
    ownerId?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    OrganizationMembers?: OrganizationMembersListRelationFilter
    Owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    OrganizationMembers?: OrganizationMembersOrderByRelationAggregateInput
    Owner?: UserOrderByWithRelationInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    status?: EnumOrganizationStatusFilter<"Organization"> | $Enums.OrganizationStatus
    ownerId?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    OrganizationMembers?: OrganizationMembersListRelationFilter
    Owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "name">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    status?: EnumOrganizationStatusWithAggregatesFilter<"Organization"> | $Enums.OrganizationStatus
    ownerId?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type OrganizationMembersWhereInput = {
    AND?: OrganizationMembersWhereInput | OrganizationMembersWhereInput[]
    OR?: OrganizationMembersWhereInput[]
    NOT?: OrganizationMembersWhereInput | OrganizationMembersWhereInput[]
    id?: StringFilter<"OrganizationMembers"> | string
    role?: EnumUserRoleFilter<"OrganizationMembers"> | $Enums.UserRole
    permissions?: StringNullableListFilter<"OrganizationMembers">
    status?: EnumUserStatusFilter<"OrganizationMembers"> | $Enums.UserStatus
    userId?: StringFilter<"OrganizationMembers"> | string
    organizationId?: StringFilter<"OrganizationMembers"> | string
    supervisorId?: StringNullableFilter<"OrganizationMembers"> | string | null
    createdAt?: DateTimeFilter<"OrganizationMembers"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMembers"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    Supervisor?: XOR<OrganizationMembersNullableScalarRelationFilter, OrganizationMembersWhereInput> | null
    Employee?: OrganizationMembersListRelationFilter
  }

  export type OrganizationMembersOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Organization?: OrganizationOrderByWithRelationInput
    Supervisor?: OrganizationMembersOrderByWithRelationInput
    Employee?: OrganizationMembersOrderByRelationAggregateInput
  }

  export type OrganizationMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_organizationId?: OrganizationMembersUserIdOrganizationIdCompoundUniqueInput
    AND?: OrganizationMembersWhereInput | OrganizationMembersWhereInput[]
    OR?: OrganizationMembersWhereInput[]
    NOT?: OrganizationMembersWhereInput | OrganizationMembersWhereInput[]
    role?: EnumUserRoleFilter<"OrganizationMembers"> | $Enums.UserRole
    permissions?: StringNullableListFilter<"OrganizationMembers">
    status?: EnumUserStatusFilter<"OrganizationMembers"> | $Enums.UserStatus
    userId?: StringFilter<"OrganizationMembers"> | string
    organizationId?: StringFilter<"OrganizationMembers"> | string
    supervisorId?: StringNullableFilter<"OrganizationMembers"> | string | null
    createdAt?: DateTimeFilter<"OrganizationMembers"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMembers"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    Supervisor?: XOR<OrganizationMembersNullableScalarRelationFilter, OrganizationMembersWhereInput> | null
    Employee?: OrganizationMembersListRelationFilter
  }, "id" | "userId_organizationId">

  export type OrganizationMembersOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationMembersCountOrderByAggregateInput
    _max?: OrganizationMembersMaxOrderByAggregateInput
    _min?: OrganizationMembersMinOrderByAggregateInput
  }

  export type OrganizationMembersScalarWhereWithAggregatesInput = {
    AND?: OrganizationMembersScalarWhereWithAggregatesInput | OrganizationMembersScalarWhereWithAggregatesInput[]
    OR?: OrganizationMembersScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMembersScalarWhereWithAggregatesInput | OrganizationMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationMembers"> | string
    role?: EnumUserRoleWithAggregatesFilter<"OrganizationMembers"> | $Enums.UserRole
    permissions?: StringNullableListFilter<"OrganizationMembers">
    status?: EnumUserStatusWithAggregatesFilter<"OrganizationMembers"> | $Enums.UserStatus
    userId?: StringWithAggregatesFilter<"OrganizationMembers"> | string
    organizationId?: StringWithAggregatesFilter<"OrganizationMembers"> | string
    supervisorId?: StringNullableWithAggregatesFilter<"OrganizationMembers"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrganizationMembers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrganizationMembers"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrganizationMembers?: OrganizationMembersCreateNestedManyWithoutUserInput
    OwnedOrganization?: OrganizationCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrganizationMembers?: OrganizationMembersUncheckedCreateNestedManyWithoutUserInput
    OwnedOrganization?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrganizationMembers?: OrganizationMembersUpdateManyWithoutUserNestedInput
    OwnedOrganization?: OrganizationUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrganizationMembers?: OrganizationMembersUncheckedUpdateManyWithoutUserNestedInput
    OwnedOrganization?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    status?: $Enums.OrganizationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    OrganizationMembers?: OrganizationMembersCreateNestedManyWithoutOrganizationInput
    Owner?: UserCreateNestedOneWithoutOwnedOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    status?: $Enums.OrganizationStatus
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OrganizationMembers?: OrganizationMembersUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrganizationStatusFieldUpdateOperationsInput | $Enums.OrganizationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrganizationMembers?: OrganizationMembersUpdateManyWithoutOrganizationNestedInput
    Owner?: UserUpdateOneWithoutOwnedOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrganizationStatusFieldUpdateOperationsInput | $Enums.OrganizationStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrganizationMembers?: OrganizationMembersUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    status?: $Enums.OrganizationStatus
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrganizationStatusFieldUpdateOperationsInput | $Enums.OrganizationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrganizationStatusFieldUpdateOperationsInput | $Enums.OrganizationStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembersCreateInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutOrganizationMembersInput
    Organization: OrganizationCreateNestedOneWithoutOrganizationMembersInput
    Supervisor?: OrganizationMembersCreateNestedOneWithoutEmployeeInput
    Employee?: OrganizationMembersCreateNestedManyWithoutSupervisorInput
  }

  export type OrganizationMembersUncheckedCreateInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    userId: string
    organizationId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Employee?: OrganizationMembersUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type OrganizationMembersUpdateInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutOrganizationMembersNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutOrganizationMembersNestedInput
    Supervisor?: OrganizationMembersUpdateOneWithoutEmployeeNestedInput
    Employee?: OrganizationMembersUpdateManyWithoutSupervisorNestedInput
  }

  export type OrganizationMembersUncheckedUpdateInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: OrganizationMembersUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type OrganizationMembersCreateManyInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    userId: string
    organizationId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembersUpdateManyMutationInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembersUncheckedUpdateManyInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
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

  export type OrganizationMembersListRelationFilter = {
    every?: OrganizationMembersWhereInput
    some?: OrganizationMembersWhereInput
    none?: OrganizationMembersWhereInput
  }

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput
    some?: OrganizationWhereInput
    none?: OrganizationWhereInput
  }

  export type OrganizationMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
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

  export type EnumOrganizationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationStatus | EnumOrganizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationStatus[] | ListEnumOrganizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationStatus[] | ListEnumOrganizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationStatusFilter<$PrismaModel> | $Enums.OrganizationStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOrganizationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationStatus | EnumOrganizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationStatus[] | ListEnumOrganizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationStatus[] | ListEnumOrganizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganizationStatusFilter<$PrismaModel>
    _max?: NestedEnumOrganizationStatusFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrganizationMembersNullableScalarRelationFilter = {
    is?: OrganizationMembersWhereInput | null
    isNot?: OrganizationMembersWhereInput | null
  }

  export type OrganizationMembersUserIdOrganizationIdCompoundUniqueInput = {
    userId: string
    organizationId: string
  }

  export type OrganizationMembersCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMembersMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type OrganizationMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMembersCreateWithoutUserInput, OrganizationMembersUncheckedCreateWithoutUserInput> | OrganizationMembersCreateWithoutUserInput[] | OrganizationMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutUserInput | OrganizationMembersCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMembersCreateManyUserInputEnvelope
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
  }

  export type OrganizationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type OrganizationMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMembersCreateWithoutUserInput, OrganizationMembersUncheckedCreateWithoutUserInput> | OrganizationMembersCreateWithoutUserInput[] | OrganizationMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutUserInput | OrganizationMembersCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMembersCreateManyUserInputEnvelope
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
  }

  export type OrganizationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMembersCreateWithoutUserInput, OrganizationMembersUncheckedCreateWithoutUserInput> | OrganizationMembersCreateWithoutUserInput[] | OrganizationMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutUserInput | OrganizationMembersCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMembersUpsertWithWhereUniqueWithoutUserInput | OrganizationMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMembersCreateManyUserInputEnvelope
    set?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    disconnect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    delete?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    update?: OrganizationMembersUpdateWithWhereUniqueWithoutUserInput | OrganizationMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMembersUpdateManyWithWhereWithoutUserInput | OrganizationMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMembersScalarWhereInput | OrganizationMembersScalarWhereInput[]
  }

  export type OrganizationUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput | OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput | OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput | OrganizationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type OrganizationMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMembersCreateWithoutUserInput, OrganizationMembersUncheckedCreateWithoutUserInput> | OrganizationMembersCreateWithoutUserInput[] | OrganizationMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutUserInput | OrganizationMembersCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMembersUpsertWithWhereUniqueWithoutUserInput | OrganizationMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMembersCreateManyUserInputEnvelope
    set?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    disconnect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    delete?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    update?: OrganizationMembersUpdateWithWhereUniqueWithoutUserInput | OrganizationMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMembersUpdateManyWithWhereWithoutUserInput | OrganizationMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMembersScalarWhereInput | OrganizationMembersScalarWhereInput[]
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput | OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput | OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput | OrganizationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type OrganizationMembersCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMembersCreateWithoutOrganizationInput, OrganizationMembersUncheckedCreateWithoutOrganizationInput> | OrganizationMembersCreateWithoutOrganizationInput[] | OrganizationMembersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutOrganizationInput | OrganizationMembersCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMembersCreateManyOrganizationInputEnvelope
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOwnedOrganizationInput = {
    create?: XOR<UserCreateWithoutOwnedOrganizationInput, UserUncheckedCreateWithoutOwnedOrganizationInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedOrganizationInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationMembersUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMembersCreateWithoutOrganizationInput, OrganizationMembersUncheckedCreateWithoutOrganizationInput> | OrganizationMembersCreateWithoutOrganizationInput[] | OrganizationMembersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutOrganizationInput | OrganizationMembersCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMembersCreateManyOrganizationInputEnvelope
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
  }

  export type EnumOrganizationStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationStatus
  }

  export type OrganizationMembersUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMembersCreateWithoutOrganizationInput, OrganizationMembersUncheckedCreateWithoutOrganizationInput> | OrganizationMembersCreateWithoutOrganizationInput[] | OrganizationMembersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutOrganizationInput | OrganizationMembersCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMembersUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMembersUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMembersCreateManyOrganizationInputEnvelope
    set?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    disconnect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    delete?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    update?: OrganizationMembersUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMembersUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMembersUpdateManyWithWhereWithoutOrganizationInput | OrganizationMembersUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMembersScalarWhereInput | OrganizationMembersScalarWhereInput[]
  }

  export type UserUpdateOneWithoutOwnedOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOwnedOrganizationInput, UserUncheckedCreateWithoutOwnedOrganizationInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedOrganizationInput
    upsert?: UserUpsertWithoutOwnedOrganizationInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedOrganizationInput, UserUpdateWithoutOwnedOrganizationInput>, UserUncheckedUpdateWithoutOwnedOrganizationInput>
  }

  export type OrganizationMembersUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMembersCreateWithoutOrganizationInput, OrganizationMembersUncheckedCreateWithoutOrganizationInput> | OrganizationMembersCreateWithoutOrganizationInput[] | OrganizationMembersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutOrganizationInput | OrganizationMembersCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMembersUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMembersUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMembersCreateManyOrganizationInputEnvelope
    set?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    disconnect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    delete?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    update?: OrganizationMembersUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMembersUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMembersUpdateManyWithWhereWithoutOrganizationInput | OrganizationMembersUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMembersScalarWhereInput | OrganizationMembersScalarWhereInput[]
  }

  export type OrganizationMembersCreatepermissionsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutOrganizationMembersInput = {
    create?: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationMembersInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutOrganizationMembersInput = {
    create?: XOR<OrganizationCreateWithoutOrganizationMembersInput, OrganizationUncheckedCreateWithoutOrganizationMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutOrganizationMembersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationMembersCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<OrganizationMembersCreateWithoutEmployeeInput, OrganizationMembersUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutEmployeeInput
    connect?: OrganizationMembersWhereUniqueInput
  }

  export type OrganizationMembersCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<OrganizationMembersCreateWithoutSupervisorInput, OrganizationMembersUncheckedCreateWithoutSupervisorInput> | OrganizationMembersCreateWithoutSupervisorInput[] | OrganizationMembersUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutSupervisorInput | OrganizationMembersCreateOrConnectWithoutSupervisorInput[]
    createMany?: OrganizationMembersCreateManySupervisorInputEnvelope
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
  }

  export type OrganizationMembersUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<OrganizationMembersCreateWithoutSupervisorInput, OrganizationMembersUncheckedCreateWithoutSupervisorInput> | OrganizationMembersCreateWithoutSupervisorInput[] | OrganizationMembersUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutSupervisorInput | OrganizationMembersCreateOrConnectWithoutSupervisorInput[]
    createMany?: OrganizationMembersCreateManySupervisorInputEnvelope
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type OrganizationMembersUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type UserUpdateOneRequiredWithoutOrganizationMembersNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationMembersInput
    upsert?: UserUpsertWithoutOrganizationMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizationMembersInput, UserUpdateWithoutOrganizationMembersInput>, UserUncheckedUpdateWithoutOrganizationMembersInput>
  }

  export type OrganizationUpdateOneRequiredWithoutOrganizationMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutOrganizationMembersInput, OrganizationUncheckedCreateWithoutOrganizationMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutOrganizationMembersInput
    upsert?: OrganizationUpsertWithoutOrganizationMembersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutOrganizationMembersInput, OrganizationUpdateWithoutOrganizationMembersInput>, OrganizationUncheckedUpdateWithoutOrganizationMembersInput>
  }

  export type OrganizationMembersUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<OrganizationMembersCreateWithoutEmployeeInput, OrganizationMembersUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutEmployeeInput
    upsert?: OrganizationMembersUpsertWithoutEmployeeInput
    disconnect?: boolean
    delete?: OrganizationMembersWhereInput | boolean
    connect?: OrganizationMembersWhereUniqueInput
    update?: XOR<XOR<OrganizationMembersUpdateToOneWithWhereWithoutEmployeeInput, OrganizationMembersUpdateWithoutEmployeeInput>, OrganizationMembersUncheckedUpdateWithoutEmployeeInput>
  }

  export type OrganizationMembersUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<OrganizationMembersCreateWithoutSupervisorInput, OrganizationMembersUncheckedCreateWithoutSupervisorInput> | OrganizationMembersCreateWithoutSupervisorInput[] | OrganizationMembersUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutSupervisorInput | OrganizationMembersCreateOrConnectWithoutSupervisorInput[]
    upsert?: OrganizationMembersUpsertWithWhereUniqueWithoutSupervisorInput | OrganizationMembersUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: OrganizationMembersCreateManySupervisorInputEnvelope
    set?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    disconnect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    delete?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    update?: OrganizationMembersUpdateWithWhereUniqueWithoutSupervisorInput | OrganizationMembersUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: OrganizationMembersUpdateManyWithWhereWithoutSupervisorInput | OrganizationMembersUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: OrganizationMembersScalarWhereInput | OrganizationMembersScalarWhereInput[]
  }

  export type OrganizationMembersUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<OrganizationMembersCreateWithoutSupervisorInput, OrganizationMembersUncheckedCreateWithoutSupervisorInput> | OrganizationMembersCreateWithoutSupervisorInput[] | OrganizationMembersUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: OrganizationMembersCreateOrConnectWithoutSupervisorInput | OrganizationMembersCreateOrConnectWithoutSupervisorInput[]
    upsert?: OrganizationMembersUpsertWithWhereUniqueWithoutSupervisorInput | OrganizationMembersUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: OrganizationMembersCreateManySupervisorInputEnvelope
    set?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    disconnect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    delete?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    connect?: OrganizationMembersWhereUniqueInput | OrganizationMembersWhereUniqueInput[]
    update?: OrganizationMembersUpdateWithWhereUniqueWithoutSupervisorInput | OrganizationMembersUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: OrganizationMembersUpdateManyWithWhereWithoutSupervisorInput | OrganizationMembersUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: OrganizationMembersScalarWhereInput | OrganizationMembersScalarWhereInput[]
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedEnumOrganizationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationStatus | EnumOrganizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationStatus[] | ListEnumOrganizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationStatus[] | ListEnumOrganizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationStatusFilter<$PrismaModel> | $Enums.OrganizationStatus
  }

  export type NestedEnumOrganizationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationStatus | EnumOrganizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationStatus[] | ListEnumOrganizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationStatus[] | ListEnumOrganizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganizationStatusFilter<$PrismaModel>
    _max?: NestedEnumOrganizationStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type OrganizationMembersCreateWithoutUserInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization: OrganizationCreateNestedOneWithoutOrganizationMembersInput
    Supervisor?: OrganizationMembersCreateNestedOneWithoutEmployeeInput
    Employee?: OrganizationMembersCreateNestedManyWithoutSupervisorInput
  }

  export type OrganizationMembersUncheckedCreateWithoutUserInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    organizationId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Employee?: OrganizationMembersUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type OrganizationMembersCreateOrConnectWithoutUserInput = {
    where: OrganizationMembersWhereUniqueInput
    create: XOR<OrganizationMembersCreateWithoutUserInput, OrganizationMembersUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMembersCreateManyUserInputEnvelope = {
    data: OrganizationMembersCreateManyUserInput | OrganizationMembersCreateManyUserInput[]
  }

  export type OrganizationCreateWithoutOwnerInput = {
    id?: string
    name: string
    status?: $Enums.OrganizationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    OrganizationMembers?: OrganizationMembersCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    status?: $Enums.OrganizationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    OrganizationMembers?: OrganizationMembersUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationCreateManyOwnerInputEnvelope = {
    data: OrganizationCreateManyOwnerInput | OrganizationCreateManyOwnerInput[]
  }

  export type OrganizationMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationMembersWhereUniqueInput
    update: XOR<OrganizationMembersUpdateWithoutUserInput, OrganizationMembersUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationMembersCreateWithoutUserInput, OrganizationMembersUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationMembersWhereUniqueInput
    data: XOR<OrganizationMembersUpdateWithoutUserInput, OrganizationMembersUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationMembersUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationMembersScalarWhereInput
    data: XOR<OrganizationMembersUpdateManyMutationInput, OrganizationMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationMembersScalarWhereInput = {
    AND?: OrganizationMembersScalarWhereInput | OrganizationMembersScalarWhereInput[]
    OR?: OrganizationMembersScalarWhereInput[]
    NOT?: OrganizationMembersScalarWhereInput | OrganizationMembersScalarWhereInput[]
    id?: StringFilter<"OrganizationMembers"> | string
    role?: EnumUserRoleFilter<"OrganizationMembers"> | $Enums.UserRole
    permissions?: StringNullableListFilter<"OrganizationMembers">
    status?: EnumUserStatusFilter<"OrganizationMembers"> | $Enums.UserStatus
    userId?: StringFilter<"OrganizationMembers"> | string
    organizationId?: StringFilter<"OrganizationMembers"> | string
    supervisorId?: StringNullableFilter<"OrganizationMembers"> | string | null
    createdAt?: DateTimeFilter<"OrganizationMembers"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMembers"> | Date | string
  }

  export type OrganizationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutOwnerInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutOwnerInput>
  }

  export type OrganizationScalarWhereInput = {
    AND?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    OR?: OrganizationScalarWhereInput[]
    NOT?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    status?: EnumOrganizationStatusFilter<"Organization"> | $Enums.OrganizationStatus
    ownerId?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
  }

  export type OrganizationMembersCreateWithoutOrganizationInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutOrganizationMembersInput
    Supervisor?: OrganizationMembersCreateNestedOneWithoutEmployeeInput
    Employee?: OrganizationMembersCreateNestedManyWithoutSupervisorInput
  }

  export type OrganizationMembersUncheckedCreateWithoutOrganizationInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    userId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Employee?: OrganizationMembersUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type OrganizationMembersCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMembersWhereUniqueInput
    create: XOR<OrganizationMembersCreateWithoutOrganizationInput, OrganizationMembersUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMembersCreateManyOrganizationInputEnvelope = {
    data: OrganizationMembersCreateManyOrganizationInput | OrganizationMembersCreateManyOrganizationInput[]
  }

  export type UserCreateWithoutOwnedOrganizationInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrganizationMembers?: OrganizationMembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedOrganizationInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrganizationMembers?: OrganizationMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedOrganizationInput, UserUncheckedCreateWithoutOwnedOrganizationInput>
  }

  export type OrganizationMembersUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMembersWhereUniqueInput
    update: XOR<OrganizationMembersUpdateWithoutOrganizationInput, OrganizationMembersUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationMembersCreateWithoutOrganizationInput, OrganizationMembersUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMembersUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMembersWhereUniqueInput
    data: XOR<OrganizationMembersUpdateWithoutOrganizationInput, OrganizationMembersUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMembersUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMembersScalarWhereInput
    data: XOR<OrganizationMembersUpdateManyMutationInput, OrganizationMembersUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserUpsertWithoutOwnedOrganizationInput = {
    update: XOR<UserUpdateWithoutOwnedOrganizationInput, UserUncheckedUpdateWithoutOwnedOrganizationInput>
    create: XOR<UserCreateWithoutOwnedOrganizationInput, UserUncheckedCreateWithoutOwnedOrganizationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedOrganizationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedOrganizationInput, UserUncheckedUpdateWithoutOwnedOrganizationInput>
  }

  export type UserUpdateWithoutOwnedOrganizationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrganizationMembers?: OrganizationMembersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedOrganizationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrganizationMembers?: OrganizationMembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOrganizationMembersInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OwnedOrganization?: OrganizationCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutOrganizationMembersInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OwnedOrganization?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutOrganizationMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
  }

  export type OrganizationCreateWithoutOrganizationMembersInput = {
    id?: string
    name: string
    status?: $Enums.OrganizationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Owner?: UserCreateNestedOneWithoutOwnedOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutOrganizationMembersInput = {
    id?: string
    name: string
    status?: $Enums.OrganizationStatus
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateOrConnectWithoutOrganizationMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutOrganizationMembersInput, OrganizationUncheckedCreateWithoutOrganizationMembersInput>
  }

  export type OrganizationMembersCreateWithoutEmployeeInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutOrganizationMembersInput
    Organization: OrganizationCreateNestedOneWithoutOrganizationMembersInput
    Supervisor?: OrganizationMembersCreateNestedOneWithoutEmployeeInput
  }

  export type OrganizationMembersUncheckedCreateWithoutEmployeeInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    userId: string
    organizationId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembersCreateOrConnectWithoutEmployeeInput = {
    where: OrganizationMembersWhereUniqueInput
    create: XOR<OrganizationMembersCreateWithoutEmployeeInput, OrganizationMembersUncheckedCreateWithoutEmployeeInput>
  }

  export type OrganizationMembersCreateWithoutSupervisorInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutOrganizationMembersInput
    Organization: OrganizationCreateNestedOneWithoutOrganizationMembersInput
    Employee?: OrganizationMembersCreateNestedManyWithoutSupervisorInput
  }

  export type OrganizationMembersUncheckedCreateWithoutSupervisorInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    userId: string
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Employee?: OrganizationMembersUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type OrganizationMembersCreateOrConnectWithoutSupervisorInput = {
    where: OrganizationMembersWhereUniqueInput
    create: XOR<OrganizationMembersCreateWithoutSupervisorInput, OrganizationMembersUncheckedCreateWithoutSupervisorInput>
  }

  export type OrganizationMembersCreateManySupervisorInputEnvelope = {
    data: OrganizationMembersCreateManySupervisorInput | OrganizationMembersCreateManySupervisorInput[]
  }

  export type UserUpsertWithoutOrganizationMembersInput = {
    update: XOR<UserUpdateWithoutOrganizationMembersInput, UserUncheckedUpdateWithoutOrganizationMembersInput>
    create: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizationMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizationMembersInput, UserUncheckedUpdateWithoutOrganizationMembersInput>
  }

  export type UserUpdateWithoutOrganizationMembersInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OwnedOrganization?: OrganizationUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationMembersInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OwnedOrganization?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OrganizationUpsertWithoutOrganizationMembersInput = {
    update: XOR<OrganizationUpdateWithoutOrganizationMembersInput, OrganizationUncheckedUpdateWithoutOrganizationMembersInput>
    create: XOR<OrganizationCreateWithoutOrganizationMembersInput, OrganizationUncheckedCreateWithoutOrganizationMembersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutOrganizationMembersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutOrganizationMembersInput, OrganizationUncheckedUpdateWithoutOrganizationMembersInput>
  }

  export type OrganizationUpdateWithoutOrganizationMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrganizationStatusFieldUpdateOperationsInput | $Enums.OrganizationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Owner?: UserUpdateOneWithoutOwnedOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutOrganizationMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrganizationStatusFieldUpdateOperationsInput | $Enums.OrganizationStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembersUpsertWithoutEmployeeInput = {
    update: XOR<OrganizationMembersUpdateWithoutEmployeeInput, OrganizationMembersUncheckedUpdateWithoutEmployeeInput>
    create: XOR<OrganizationMembersCreateWithoutEmployeeInput, OrganizationMembersUncheckedCreateWithoutEmployeeInput>
    where?: OrganizationMembersWhereInput
  }

  export type OrganizationMembersUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: OrganizationMembersWhereInput
    data: XOR<OrganizationMembersUpdateWithoutEmployeeInput, OrganizationMembersUncheckedUpdateWithoutEmployeeInput>
  }

  export type OrganizationMembersUpdateWithoutEmployeeInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutOrganizationMembersNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutOrganizationMembersNestedInput
    Supervisor?: OrganizationMembersUpdateOneWithoutEmployeeNestedInput
  }

  export type OrganizationMembersUncheckedUpdateWithoutEmployeeInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembersUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: OrganizationMembersWhereUniqueInput
    update: XOR<OrganizationMembersUpdateWithoutSupervisorInput, OrganizationMembersUncheckedUpdateWithoutSupervisorInput>
    create: XOR<OrganizationMembersCreateWithoutSupervisorInput, OrganizationMembersUncheckedCreateWithoutSupervisorInput>
  }

  export type OrganizationMembersUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: OrganizationMembersWhereUniqueInput
    data: XOR<OrganizationMembersUpdateWithoutSupervisorInput, OrganizationMembersUncheckedUpdateWithoutSupervisorInput>
  }

  export type OrganizationMembersUpdateManyWithWhereWithoutSupervisorInput = {
    where: OrganizationMembersScalarWhereInput
    data: XOR<OrganizationMembersUpdateManyMutationInput, OrganizationMembersUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type OrganizationMembersCreateManyUserInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    organizationId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateManyOwnerInput = {
    id?: string
    name: string
    status?: $Enums.OrganizationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembersUpdateWithoutUserInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneRequiredWithoutOrganizationMembersNestedInput
    Supervisor?: OrganizationMembersUpdateOneWithoutEmployeeNestedInput
    Employee?: OrganizationMembersUpdateManyWithoutSupervisorNestedInput
  }

  export type OrganizationMembersUncheckedUpdateWithoutUserInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    organizationId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: OrganizationMembersUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type OrganizationMembersUncheckedUpdateManyWithoutUserInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    organizationId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrganizationStatusFieldUpdateOperationsInput | $Enums.OrganizationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrganizationMembers?: OrganizationMembersUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrganizationStatusFieldUpdateOperationsInput | $Enums.OrganizationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrganizationMembers?: OrganizationMembersUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrganizationStatusFieldUpdateOperationsInput | $Enums.OrganizationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembersCreateManyOrganizationInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    userId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembersUpdateWithoutOrganizationInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutOrganizationMembersNestedInput
    Supervisor?: OrganizationMembersUpdateOneWithoutEmployeeNestedInput
    Employee?: OrganizationMembersUpdateManyWithoutSupervisorNestedInput
  }

  export type OrganizationMembersUncheckedUpdateWithoutOrganizationInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: OrganizationMembersUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type OrganizationMembersUncheckedUpdateManyWithoutOrganizationInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembersCreateManySupervisorInput = {
    id?: string
    role?: $Enums.UserRole
    permissions?: OrganizationMembersCreatepermissionsInput | string[]
    status?: $Enums.UserStatus
    userId: string
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembersUpdateWithoutSupervisorInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutOrganizationMembersNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutOrganizationMembersNestedInput
    Employee?: OrganizationMembersUpdateManyWithoutSupervisorNestedInput
  }

  export type OrganizationMembersUncheckedUpdateWithoutSupervisorInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: OrganizationMembersUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type OrganizationMembersUncheckedUpdateManyWithoutSupervisorInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: OrganizationMembersUpdatepermissionsInput | string[]
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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