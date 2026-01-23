import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage =
      error.statusText ||
      error.data?.message ||
      "Unknown error. Please contact the support team.";
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error. Please contact the support team.";
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background text-foreground">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-xl text-muted-foreground">
        Sorry, an unexpected error has occurred. Please contact the support
        team.
      </p>
      <p className="font-mono text-destructive">
        <i>{errorMessage}</i>
      </p>
      <Link
        to="/"
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        Go back home
      </Link>
    </div>
  );
}
