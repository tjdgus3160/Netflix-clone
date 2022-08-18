export const truncate = (str: string, n: number) => (str?.length > n ? str.substring(0, n - 1) + "..." : str);
