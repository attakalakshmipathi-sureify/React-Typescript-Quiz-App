export interface QuestionData{
    QuestionId:string,
    QuestionText:string,
    Required:boolean,
    ResponseOptions:Answer[],
    Response:string,
    CorrectResponse:string,
    Explanation:string,
    selectedResponse:string,
    QuestionStatus:string
}

export interface Answer {
    id: string;
    label: string;
  }
