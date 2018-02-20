
const coursesListDefaultState = [
{
  name: "Course One",
  authorName: "abc",
  id: 1,
  classes: [ { name: "class1", description: "This is class1"}, { name: "class2", description: "This is class2"} ]
} ,
{
  name: "Course Two",
  authorName: "xyz",
  id: 2,
  classes: [ { name: "class3", description: "This is class3"}, { name: "class4", description: "This is class4"} ]
} ];

const coursesListReducer = (state = coursesListDefaultState, action) => {
   switch (action.type) {
     case 'ADD_COURSE':
     return [
       ...state,
       action.courses
     ];
     case 'ADD_CLASS':
     return state.map((course) => {
       if(course.id == action.id) {
        {course.classes = course.classes.concat([action.updatedCourse])}
        return {
          ...course
        };
      } else {
        return course;
      }
     });
     default:
       return state;
   }
};

export default coursesListReducer;
