export default class ShiftSettingRules {
    // nullの場合ルール未適用
    public maxseq: number;
    constructor(params: { maxseq?: number }) {
        this.maxseq = params.maxseq ? params.maxseq : 0;
    }
}