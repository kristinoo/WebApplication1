import RegInfo from "../objects/RegInfo";
import RegInput from "../objects/RegInput";
import Repository from "./Repository";

class RegRepository extends Repository<RegInput, RegInfo> {
    constructor() {
        super("reg");
    }

    async login(regInput: RegInput) {
        let result = await super.postWithData("login", regInput);
        return result;
    }

    async logout() {
        let result = await super.get("logout");
        return result;
    }

    async getInfo() {
        let result = await super.get("getInfo");
        return result;
    }
}

const regRepository = new RegRepository();
export default RegRepository;
