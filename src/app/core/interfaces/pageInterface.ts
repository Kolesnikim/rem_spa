/**
 * Описание приходящия данных о странице
 */
export interface PageInterface<T> {
    totalItems: number;
    itemsPerPage: number;
    offset: number;
    entities: T[];
}
