import { Starbucks } from "./starbucks";
import { Applicant } from "./Applicant";

// 스타벅스 인스턴스
const starbucks = Starbucks.getInstance();

const 성현: Applicant = new Applicant('성현', 'male', 'staff');
const 수연: Applicant = new Applicant('수연', 'female', 'staff');
const 윤정: Applicant = new Applicant('윤정', 'female', 'manager');

성현.apply(starbucks);
수연.apply(starbucks);
윤정.apply(starbucks);

starbucks.hire(성현);
starbucks.hire(수연);

starbucks.fire('성현');

starbucks.findEmployee('수연')?.learnRecipe('coffee', '아메리카노');
console.log(starbucks.findEmployee('수연')?.skills);