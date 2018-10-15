
declare module "bananapi" {
  export type Options = {
    token: string
  };
  export const version: string;
  export class Eightball {
    public constructor(body: any);
    public readonly response: string;
    public readonly question: string;
    public readonly type: string;
    public readonly isPositive: boolean;
    public readonly isNegative: boolean;
    public readonly isNeutral: boolean;
  }
  export class Client {
    public constructor(options: Options);
    private token: string;
    public url: string;
    private _get(endpoint: string, query?: any): Promise<any>;
    public trumptweet(text: string): Promise<Buffer>;
    public jsify(text: string): Promise<string>;
    public sleeptight(text: string): Promise<string>;
    public legends(text: string): Promise<Buffer>;
    public abandon(text: string): Promise<Buffer>;
    public alert(text: string): Promise<Buffer>;
    public humansgood(text: string): Promise<Buffer>;
    public headache(text: string): Promise<Buffer>;
    public autism(text: string): Promise<Buffer>;
    public eightball(question: string): Promise<Eightball>;
  }
}
