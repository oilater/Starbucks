import { Employee } from "./Employee";
import type { Coffee, Employee as IEmployee, Sandwich, Starbucks as IStarbucks, Customer, Applicant } from "./types";

// 인터페이스는 원래 그 특성 자체가 public, private인 것은 인터페이스로 만들 필요도, 이유도 없음

/**
 * 스타벅스
 */
export class Starbucks implements IStarbucks {
    private static instance: Starbucks | null = null;

    public static getInstance(): Starbucks {
        if (!this.instance) {
            this.instance = new Starbucks();
        }
        return this.instance;
    }

    private applicants: Applicant[];
    employees: Employee[]; // 직원들
    customers: Customer[]; // 손님들
    menu: (Coffee | Sandwich)[]; // 메뉴
    driveThrough: boolean; // 드라이브 스루 가능 여부

    private constructor(
        applicants = [],
        employees = [],
        customers = [],
        menu = [],
        driveThrough = false
    ) {
        this.applicants = applicants;
        this.employees = employees;
        this.customers = customers;
        this.menu = menu;
        this.driveThrough = driveThrough;
    }

    private readyForStarbucks(applicant: Applicant) {
        return new Employee(applicant.nickname, applicant.gender, applicant.position);
    }

    hire(applicant: Applicant) {
        const newEmployee = this.readyForStarbucks(applicant);
        this.employees.push(newEmployee);
    }

    fire(nickname: string) {
        this.employees = this.employees.filter(em => em.nickname !== nickname)
    }

    findEmployee(nickname: string) {
        return this.employees.find(em => em.nickname === nickname);
    }

    get employeeCount() {
        return this.employees.length;
    }

    get customerCount() {
        return this.customers.length;
    }

    get application(): number {
        return this.applicants.length;
    }

    set application(applicant: Applicant) {
        this.applicants.push(applicant);
    }
}