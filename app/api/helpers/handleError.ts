import { NextResponse } from "next/server";
import { z } from "zod";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
export const handleError = ({
  error,
  defaultError,
}: {
  error: any;
  defaultError: string;
}) => {
  console.log(error);
  if (error instanceof JsonWebTokenError) {
    return NextResponse.json({
      success: false,
      error: {
        code:
          error instanceof TokenExpiredError
            ? "TOKEN EXPIRED"
            : "INVALID TOKEN",
        message: error.message,
      },
    });
  }
  if (error instanceof z.ZodError) {
    return NextResponse.json({
      code: 400,
      message: "Validation failed",
      error: error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      })),
    });
  }
  return NextResponse.json(
    { message: "Internal Server Error" + defaultError },
    { status: 500 }
  );
};
