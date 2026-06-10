import { cn } from "@/lib/utils";

interface SalesforceLogoProps {
  className?: string;
}

export default function SalesforceLogo({ className }: SalesforceLogoProps) {
  return (
    <svg
      viewBox="0 0 273 191"
      aria-hidden="true"
      className={cn("h-8 w-auto shrink-0", className)}
    >
      <path
        fill="#00A1E0"
        d="M45.5 73.5c3.9-14.2 17.4-24.2 32.4-24.2 5.5 0 10.8 1.3 15.5 3.8 4.1-18.2 21.2-31.5 40.8-31.5 23.4 0 42.3 19 42.3 42.3 0 2.8-.3 5.6-.8 8.3 17.5 3.5 29.1 19.8 26.7 37.2-2.2 15.8-15.8 27.6-31.7 28.5-4.1 18.8-20.8 32.4-40.1 32.4-14.2 0-27.2-7.4-34.5-19.5-7.8 5.5-17.2 8.5-27 8.5-26.2 0-47.4-21.2-47.4-47.4 0-15.8 7.8-29.8 19.8-38.4z"
      />
    </svg>
  );
}
