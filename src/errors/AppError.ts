

export class AppError {
    message: string;
    statusCode: number;

    constructor(massage: string, statusCode = 400){
        this.message = massage;
        this.statusCode = statusCode;
    }
}