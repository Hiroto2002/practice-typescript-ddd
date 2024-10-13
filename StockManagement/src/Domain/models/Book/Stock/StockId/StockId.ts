import { ValueObject } from "Domain/models/shared/ValueObject";
import { nanoid } from "nanoid";

export class StockId extends ValueObject<string, "StockId"> {
  static readonly MAX_LENGTH = 100;
  static readonly MIN_LENGTH = 1;

  constructor(value: string = nanoid()) {
    super(value);
  }

  protected validate(stockId: string): void {
    if (
      stockId.length < StockId.MIN_LENGTH ||
      stockId.length > StockId.MAX_LENGTH
    ) {
      throw new Error(
        `StockIdは${StockId.MIN_LENGTH}文字以上、${StockId.MAX_LENGTH}文字以下でなければなりません。`
      );
    }
  }
}
