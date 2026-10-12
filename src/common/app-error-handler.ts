import { ErrorHandler } from "@angular/core";
import { AppError } from "./app-error";

export class AppErrorHandler implements ErrorHandler {
    
    handleError(error: unknown): void {
        const details = error instanceof AppError
            ? error.originalError ?? error
            : error;
        console.error('AppError:', details);
    }
}