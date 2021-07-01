


export class DprofileModel {

    constructor(
        public name : string,
        public about: string,
        public pimage: string,
        public education: {year: string, school: string}[],
        public skills: {skill: string, value: number}[],
        public experience: {year: string, company: string}[]
        ) {}
}
