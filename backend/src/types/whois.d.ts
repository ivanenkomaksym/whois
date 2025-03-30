declare module 'whois' {
    export interface WhoisOptions {
      server?: string;
      follow?: number;
      timeout?: number;
      verbose?: boolean;
      bind?: string;
    }
  
    export function lookup(
      domain: string,
      options?: WhoisOptions | null,
      callback?: (error: Error | null, data: string) => void
    ): void;
  
    export function lookup(domain: string, options?: WhoisOptions): Promise<string>;
  }
  