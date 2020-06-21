export default class ShiftSettingMember {
    public id: number;
    public name: string;
    // Todo Rulesを追加
    public testrulenum: number | null;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.testrulenum = null;
    }
}