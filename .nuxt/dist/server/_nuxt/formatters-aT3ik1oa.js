const avatarText = (value) => {
  if (!value.trim())
    return "";
  const nameArray = value.trim().split(/\s+/);
  return nameArray.slice(0, 2).map((word) => word.charAt(0).toUpperCase()).join("");
};
export {
  avatarText as a
};
