import { QuestionData } from "./QuestionTypes";

export const questions: QuestionData[] = [
    {
      QuestionId: "1",
      QuestionText: "What are the three main 'simple types' in TypeScript?",
      Required:true,

      ResponseOptions: [
        { id: "A", label: "Boolean,Number,String" },
        { id: "B", label: "Boolean,Array,Object" },
        { id: "C", label: "Object,Number,String" },
        { id: "D", label: "Object,Array,String" },
      ],
      Response: "A",
      CorrectResponse:"Boolean,Number,String",
      Explanation:"Boolean,Number,String are the mainly used data types in typescript",
      selectedResponse:"",
      QuestionStatus:"Incorrect",
     

    },
    {
        QuestionId: "2",
        QuestionText: "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        Required:true,
        ResponseOptions: [
          { id: "C", label: "Implicit" },
          { id: "D", label: "Explicit" },
          
        ],
        Response: "D",
        CorrectResponse:"Explicit",
        Explanation:" The type annotation is explicit because you're explicitly stating the type of the variable (string) using the : string",
        selectedResponse:"",
        QuestionStatus:"Incorrect"


      },
      {
        QuestionId: "3",
        QuestionText: "______ is similar to 'any', but a safer alternative when uncertain about the type.",
        Required:true,
        ResponseOptions: [
          { id: "A", label: "Similar" },
          { id: "B", label: "Unknown" },
          { id: "C", label: "Never" },
          
        ],
        Response: "B",
        CorrectResponse:"Unknown",
        Explanation:"In TypeScript, unknown is similar to any in that it represents a type that can hold any value. However, unknown is considered a safer alternative when you're uncertain about the specific type, as it enforces type checking before you can perform operations on values of the unknown type. ",
        selectedResponse:"",
        QuestionStatus:"Incorrect",

      },
      {
        QuestionId: "4",
        QuestionText: "What does the 'readonly' access modifier do for an array variable assignment like: `const codeNames: readonly string[] = ['Coding', 'God']`??",
        Required:true,
        ResponseOptions: [
          { id: "A", label: "Make it private and can be used only in that class" },
          { id: "B", label: "Allow no changes and just to read it" },
          { id: "C", label: "Cannot be accessed " },
          { id: "D", label: "Allows only adding but not deleting elements from array" },
        ],
        Response: "B",
        CorrectResponse:"Allow no changes and just to read it",
        Explanation:"The readonly access modifier in TypeScript is used to indicate that a variable or property should not be modified once it has been assigned a value. When applied to an array variable like const codeNames: readonly string[] = ['Coding', 'God'];, it means that the codeNames array cannot be modified after its initial assignment.",
        selectedResponse:"",
        QuestionStatus:"Incorrect",

      },
      {
        QuestionId: "5",
        QuestionText: "type Point = { x: number; y: number };<br>function distance(p1: Point, p2: Point): number {<br> const dx = p2.x - p1.x;<br> const dy = p2.y - p1.y;<br>return Math.sqrt(dx * dx + dy * dy); }<br>const point1: Point = { x: 0, y: 0 };<br> const point2: Point = { x: 3, y: 4 };<br> console.log(distance(point1, point2));",
        Required:true,
        ResponseOptions: [
          { id: "A", label: "5" },
          { id: "B", label: "4" },
          { id: "C", label: "25" },
          { id: "D", label: "Complilation Error" },
        ],
        Response: "A",
        CorrectResponse:"5",
        Explanation:"The provided code calculates the distance between two points using the Euclidean distance formula and then outputs the result to the console. Given the specific points point1 at (0, 0) and point2 at (3, 4), the distance between them can be calculated using the Pythagorean theorem",
        selectedResponse:"",
        QuestionStatus:"Incorrect",

      },
      {
        QuestionId: "6",
        QuestionText: "What are the two types of enums?",
        Required:true,
        ResponseOptions: [
          { id: "A", label: "String and Boolean" },
          { id: "B", label: "String and Number" },
          { id: "C", label: "Number and Number Array" },
          { id: "D", label: "Nmber and Boolean" },
        ],
        Response: "B",
        CorrectResponse:"String and Number",
        Explanation:"Both numeric and string enums serve the purpose of defining a set of named values that can be used as constants in your code. The choice between them depends on whether you need to represent values as numbers or strings and the level of clarity you want in your code.",
        selectedResponse:"",
        QuestionStatus:"Incorrect",

      },
      {
        QuestionId: "7",
        QuestionText: "function printLength(value: string | number) {<br/>if (________ value === 'string') {<br/> console.log(`Length of string: ${value.length}`); }<br/> else {<br/>console.log(`Value is a number: ${value}`); }}<br/><br/>Complete the code snippet",
        Required:true,
        ResponseOptions: [
          { id: "A", label: "type" },
          { id: "B", label: "typeof" },
          { id: "C", label: "val" },
          { id: "D", label: "any" },
        ],
        Response: "B",
        CorrectResponse:"typeof",
        Explanation:"In this code snippet, the typeof operator is used to check the type of the value variable. If it's a 'string', the length of the string is printed. Otherwise, if it's a 'number', the value of the number is printed. The typeof operator is a way to perform type checks at runtime in JavaScript and TypeScript.",
        selectedResponse:"",
        QuestionStatus:"Incorrect",

      },
      {
        QuestionId: "8",
        QuestionText: "What is the difference between “interface” and “type” in TypeScript?",
        Required:true,
        ResponseOptions: [
          { id: "A", label: "There is no difference between “interface” and “type”." },
          { id: "B", label: "“Interface” is a keyword for defining object types, while “type” is a keyword for defining any type." },
          { id: "C", label: "“Interface” is a keyword for defining object types with optional properties, while “type” is a keyword for defining object types with required properties." },
          { id: "D", label: "“Interface” is a keyword for defining object types, while “type” is a keyword for defining any type, including object types." },

          
        ],
        Response: "D",
        CorrectResponse:"“Interface” is a keyword for defining object types, while “type” is a keyword for defining any type, including object types.",
        Explanation: "Both “interface” and “type” are used to define types in TypeScript, but “interface” is typically used for defining object types, while “type” can be used for any type, including object types.",
        selectedResponse:"",
        QuestionStatus:"Incorrect",

      },
      {
        QuestionId: "9",
        QuestionText: "What is the type of the parameter: `function ex(param1?: string){}`?",
        Required:true,
        ResponseOptions: [
          { id: "A", label: "string | null" },
          { id: "B", label: "unknown" },
          { id: "C", label: "string | undefined" },
          { id: "D", label: "string" },
        ],
        Response: "C",
        CorrectResponse:"string | undefined",
        Explanation:"In TypeScript, when you define a parameter with a ? after its name (e.g., param1?: string), it indicates that the parameter is optional. This means that the parameter can either be provided a value of type string, or it can be left undefined.",
        selectedResponse:"",
        QuestionStatus:"Incorrect",

      },
      {
        QuestionId: "10",
        QuestionText: "What is the inherited type for the variable example in `const example = ['Dylan']`?",
        Required:true,
        ResponseOptions: [
          { id: "A", label: "string[]" },
          { id: "B", label: "string" },
          { id: "C", label: "any[]" },
          { id: "D", label: "unknown[]" },
        ],
        Response: "A",
        CorrectResponse:"string[]",
        Explanation:"In TypeScript, when you initialize an array with specific values like ['Dylan'], TypeScript will infer the type based on the provided values. In this case, since the array contains a single string value 'Dylan', TypeScript infers that the array's type is an array of strings (string[]).",
        selectedResponse:"",
        QuestionStatus:"Incorrect",

      }
      
  ];