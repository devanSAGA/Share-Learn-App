import uuid from 'uuid'

export const addCourse = ({ name = '', authorName = '', classes = [] } = {}) => ({
  type: 'ADD_COURSE',
  courses: {
    id: uuid(),
    name,
    authorName,
    classes
  }
});
