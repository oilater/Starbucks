export type Gender = 'male' | 'female' | 'other';
export type Position = 'manager' | 'staff';

// 메뉴 (분류)
export type Menu = {
    coffee: CoffeeName;
    sandwich: SandwichName;
}

// 커피
export interface Coffee {
    name: CoffeeName;
    size: CoffeeSize;
    temp: CoffeeTemp;
}

type CoffeeName = '아메리카노' | '프라푸치노' | '라떼'
type CoffeeSize = 'tall' | 'grande' | 'venti';
type CoffeeTemp = 'ice' | 'hot';

// 샌드위치
export interface Sandwich {
    name: SandwichName;
    temp: SandwichTemp;
}

type SandwichName = '햄' | '베이컨' | '에그';
type SandwichTemp = 'normal' | 'hot';

// 레시피
export type Recipe = {
    [K in keyof Menu]: Record<Menu[K], string>;
};

export type CoffeeRecipe = {
    [key in CoffeeName]: string;
}

export type SandwichRecipe = {
    [key in SandwichName]: string;
}

// 직원 스킬셋
export type Skills = {
    [K in keyof Recipe]?: (keyof Recipe[K])[];
};

// 스타벅스
export interface Starbucks {
    employees: Employee[];
    customers: Customer[];
    menu: (Coffee | Sandwich)[];
    driveThrough: boolean;

    hire(applicant: Applicant): void;
    fire(nickname: string): void;
}

// 직원
export interface Employee {
    employeeId?: number;
    nickname: string;
    gender: Gender;
    position: Position;
    skills?: Skills;
    learnRecipe: <T extends keyof Recipe, K extends keyof Recipe[T]>(menuType: T, name: K) => void;
    make: () => void;
    serve: () => void;
}

// 스벅 지원자
export interface Applicant {
    applicantId?: number;
    nickname: string;
    gender: Gender;
    position: Position;
}

// 고객
export interface Customer {
    nickname?: string;
    parked?: boolean;
    order(): void;
    receive(): void;
}