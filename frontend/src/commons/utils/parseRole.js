const parseRole = (roleList) => {
  if (roleList.includes("ADMIN")) {
    return "Administrador";
  }
  if (roleList.includes("MANAGER")) {
    return "Triador";
  }
  return "Finalizador";
};

export default parseRole;
