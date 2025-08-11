import type { Starbucks } from "./starbucks";
import type { Applicant as IApplicant, Gender, Position } from "./types";

export class Applicant implements IApplicant {
    nickname: string;
    gender: Gender;
    position: Position;

    constructor(nickname: string, gender: Gender, position: Position) {
        this.nickname = nickname;
        this.gender = gender;
        this.position = position;
    }

    apply(starbucks: Starbucks) {
        starbucks.application = this;
    }
}
