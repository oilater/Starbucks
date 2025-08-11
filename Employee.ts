import { Recipes } from './recipes';
import type { Gender, Position, Menu, Recipe, Skills } from './types';

export class Employee implements Employee {
    nickname: string;
    gender: Gender;
    position: Position;
    skills?: Skills;

    constructor(
        nickname: string,
        gender: Gender,
        position: Position,
        skills?: Skills,
    ) {
        this.nickname = nickname;
        this.gender = gender;
        this.position = position;
        this.skills = {};
    }

    learnRecipe<T extends keyof Recipe, K extends keyof Recipe[T]>(
        menuType: T,
        name: K
    ) {
        if (!this.skills) this.skills = {};
        if (!this.skills[menuType]) this.skills[menuType] = [];
        this.skills[menuType].push(name);
    }

    make(): void { }

    serve(): void { }
}
