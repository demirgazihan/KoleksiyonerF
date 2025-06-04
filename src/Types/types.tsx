export interface LoginResponse {
    id?: string,
    email?: string,
    password?: string
}

export interface AppSliceType {
    currentUser: LoginResponse | null,
}

export interface ProductType {
    id?: number,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
    rating?: RatingType,
    count?: number
}

interface RatingType {
    rate: number,
    count: number
}


export interface CategoryType {
    id: number,
    category: string
}


export interface CheckType {
    result: boolean,
    user: LoginResponse | null
}