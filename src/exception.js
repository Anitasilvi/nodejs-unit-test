export class MyException extends Error {}

export function callMe(name) {
  if (name === "Anita") {
    throw new MyException("Ups my exception happen");
  } else {
    return "OK";
  }
}
