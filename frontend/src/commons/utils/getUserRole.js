const getUserRole = (roleList) => {
  if (roleList.includes("ADMIN")) {
    return "ADMIN";
  }
  if (roleList.includes("MANAGER")) {
    return "MANAGER";
  }
  return "FINISHER";
};

export default getUserRole;
