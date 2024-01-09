export const validateAssignmentData = (req, res, next) => {
  const assignmentData = req.body;
  console.log(req.body);
  if (assignmentData.title.length > 35) {
    return res
      .status(400)
      .json({ message: "Title must not be over 35 characters" });
  }

  if (assignmentData.description.length > 150) {
    return res
      .status(400)
      .json({ message: "Description must not exceed 150 characters" });
  }

  if (
    !Array.isArray(assignmentData.categories) ||
    assignmentData.categories.length === 0
  ) {
    return res.status(400).json({
      message: "Categories must be an array with at least 1 value",
    });
  }
  console.log(
    `Do data validation on request: ${req.method} ${req.originalUrl}`
  );
  next();
};
