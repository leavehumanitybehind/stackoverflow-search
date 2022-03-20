import { sendDefaultReq } from "../helpers/requests";
import { BASE_URL, KEY } from "./http";

export default class userApi {
    static async getTopUserTags(id) {
        return sendDefaultReq(`${BASE_URL}/users/${id}/top-tags?key=${KEY}&site=stackoverflow`)
    }
    static async getTopUserQuestions(id, tags) {
    return sendDefaultReq(`${BASE_URL}/users/${id}/tags/${tags}/top-questions/?key=${KEY}&site=stackoverflow`)
    }
}