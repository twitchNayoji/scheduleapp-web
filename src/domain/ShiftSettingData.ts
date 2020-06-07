
import ShiftSettingRules from "@/domain/ShiftSettingRules";
import ShiftSettingMember from "@/domain/ShiftSettingMember";

export default class ShiftSettingData {
    public hash: string;
    public year: number;
    public month: number;
    public asigndaynum: number;
    public rules: ShiftSettingRules;
    public members: ShiftSettingMember[];
    constructor(hash: string, year: number, month: number, asigndaynum: number, rules: ShiftSettingRules, members: ShiftSettingMember[]) {
        this.hash = hash;
        this.year = year;
        this.month = month;
        this.asigndaynum = asigndaynum;
        this.rules = rules;
        this.members = members;
    }
}

