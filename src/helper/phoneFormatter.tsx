const PhoneFormatter = (str: string) => {
  return str.replace(/(\d{2})(\d)/, '+$1 $2')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
}

export default PhoneFormatter;
