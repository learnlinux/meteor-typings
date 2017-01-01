declare module Mongo {
  interface Collection<T> extends Mongo.Collection<T> {
    attachSchema(schema : any) : void;
  }
}
