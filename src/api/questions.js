import { sendDefaultReq } from "../helpers/requests";
import { BASE_URL, KEY } from "./http";

export default class questionsApi {
    static async getQuestions(question, sort, order) {
        return sendDefaultReq(`${BASE_URL}/search/advanced?key=${KEY}&order=${order ? order : "desc"}&sort=${sort ? sort : "activity"}&q=${question}&filter=withbody&site=stackoverflow`)
    }
    static async getQuestionById(questionId) {
        return sendDefaultReq(`${BASE_URL}/questions/${questionId}/answers?key=${KEY}&order=desc&sort=activity&site=stackoverflow&filter=withbody`)
    }
}