export  type User ={
    name:string,
    email:string
}


export type ReviewType ={
    name: string
    rating: number
    comment: string
}
export  type CoursesType={
    id?: string
    title: string
    faculty: string
    code: string
    rating?: number
    reviews?: ReviewType[]
}


// Define the root type of the navigation container
export type RootStackParamList = {
    Home: undefined; // Assuming Home is your Bottom Tab Navigator
    About: undefined; // Assuming About is part of your Bottom Tab Navigator
  };
  
  export type CourseStackParamList = {
    courses: undefined;
    edit: { data: CoursesType }; 
    details:{data:CoursesType}
    add:{data:CoursesType}
  };
  