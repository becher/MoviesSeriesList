export interface ListResult<T> {
    results: T[];
    page: number;
    total_results: number;
}