import { getAll } from "./getAll";
import "mocha";

describe("hello test", () => {
  it("dd", () => {
    let event = {};
    let context = {};
    let callback = (context, data) => {
      console.log("data");
      done();
    };
    getAll(event,context,callback)
  });
});
