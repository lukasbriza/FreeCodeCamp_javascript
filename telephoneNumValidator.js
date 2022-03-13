function telephoneNumValidator(input) {
  let text = input;
  let result = false;
  let regex1 = new RegExp(/^[(][0-9]{3}[)][0-9]{3}[-]{1}[0-9]{4}$/, "g");
  let regex2 = new RegExp(/^[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}$/, "g");
  let regex3 = new RegExp(
    /^[1]{0,1}[ ]{0,1}[(]{1}[0-9]{3}[)]{1}[ -]{0,1}[0-9]{3}[ -]{0,1}[0-9]{4}$/,
    "g"
  );
  let regex4 = new RegExp(/^[0-9]{3}[ ]{1}[0-9]{3}[ ]{1}[0-9]{4}$/, "g");
  let regex5 = new RegExp(/^[0-9]{10}/, "g");
  let regex6 = new RegExp(
    /^[1]{1}[ ]{1}[0-9]{3}[ -]{1}[0-9]{3}[ -]{1}[0-9]{4}/,
    "g"
  );

  if (regex1.test(text) == true) {
    result = true;
    return result;
  }
  if (regex2.test(text) == true) {
    result = true;
    return result;
  }
  if (regex3.test(text) == true) {
    result = true;
    return result;
  }
  if (regex4.test(text) == true) {
    result = true;
    return result;
  }
  if (regex5.test(text) == true) {
    if (text.length > 10) {
      return (result = false);
    }
    result = true;
    return result;
  }
  if (regex6.test(text) == true) {
    result = true;
    return result;
  }
  return result;
}

export { telephoneNumValidator };
