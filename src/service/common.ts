export const baseUrl = "http://192.168.1.9:5000/api/v1/"
export const imageBaseUrl = "http://192.168.1.9:5000/public/"
export interface IPagination {
    page?: number;
    limit?: number
}

export interface IError {
    data: {
        message: string;
    }
}