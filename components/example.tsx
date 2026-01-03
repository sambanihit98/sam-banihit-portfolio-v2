import { cn } from "@/lib/utils";

function ExampleWrapper({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="bg-background w-full">
      <div
        data-slot="example-wrapper w-full"
        className={cn(
          "mx-auto flex w-full max-w-4xl min-w-0 flex-col pt-10 2xl:max-w-6xl",
          className
        )}
        {...props}
      />
    </div>
  );
}

function Example({
  children,
  className,
  containerClassName,
  ...props
}: React.ComponentProps<"div"> & {
  containerClassName?: string;
}) {
  return (
    <div
      data-slot="example"
      className={cn(
        "flex w-full h-full min-w-0 flex-col gap-1 self-stretch",
        containerClassName
      )}
      {...props}
    >
      <div
        data-slot="example-content"
        className={cn(
          "bg-background text-foreground flex min-w-0 flex-1 flex-col items-start gap-6 p-2 *:[div:not([class*='w-'])]:w-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export { ExampleWrapper, Example };
