import { sendDefaultReq } from "../helpers/requests";
import { BASE_URL, KEY } from "./http";

export default class tagsApi {
    static async getTagsFaq(tag) {
        return sendDefaultReq(`${BASE_URL}/tags/${tag}/faq?key=${KEY}&site=stackoverflow`)
    }

}