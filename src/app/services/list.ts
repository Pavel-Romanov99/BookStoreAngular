import {Book} from "../services/book";

export interface List {
        list_id: number;
        listName: string;
        books: Book[];
}
