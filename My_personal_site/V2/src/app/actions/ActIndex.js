export const selectProject = (proj) => {
  console.log("You clicked on proj: ", proj.id);
  return {
    type: "PROJ_SELECTED",
    payload: proj
  }
};
