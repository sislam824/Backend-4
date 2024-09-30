const validateStudent = (data) => {
  if (
    !data.student_id ||
    !data.student_name ||
    !data.student_age ||
    !data.grade ||
    !data.school_id
  ) {
    return "Missing required fields";
  }
  if (
    isNaN(data.student_age) ||
    data.student_age < 1 ||
    data.student_age > 100
  ) {
    return "Invalid age";
  }
  return null;
};

module.exports = validateStudent;
