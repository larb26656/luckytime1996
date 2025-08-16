/**
 * Formats a date string into a human-readable format
 * @param dateString - The date string to format (e.g., '2023-12-31')
 * @returns Formatted date string (e.g., 'Dec 31, 2023')
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
