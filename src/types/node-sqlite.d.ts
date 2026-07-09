declare module "node:sqlite" {
  class DatabaseSync {
    constructor(path: string);
    exec(sql: string): void;
    prepare(sql: string): StatementSync;
    close(): void;
  }

  class StatementSync {
    run(...params: unknown[]): { lastInsertRowid: number | bigint; changes: number };
    all(...params: unknown[]): Record<string, unknown>[];
    get(...params: unknown[]): Record<string, unknown> | undefined;
  }

  export { DatabaseSync };
}
