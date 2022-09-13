import { lowerCaseAndRemoveAccents } from "./functions";
import {
  mockInputLowercaseAndAccentsFunc,
  mockOutputLowercaseAndAccentsFunc,
} from "./mocks";

describe("lowerCaseAndRemoveAccents", () => {
  test("should return a value with no accents and lowercase", () => {
    expect(lowerCaseAndRemoveAccents(mockInputLowercaseAndAccentsFunc)).toEqual(
      mockOutputLowercaseAndAccentsFunc
    );
  });
});
