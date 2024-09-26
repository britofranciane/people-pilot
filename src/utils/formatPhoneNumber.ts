export const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, '');

  if (cleaned.length <= 11) {
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    } else {
      return cleaned.replace(/^(\d{2})(\d{0,5})(\d{0,4})$/, (_, p1, p2, p3) => {
        const firstPart = p1 ? `(${p1}) ` : '';
        const secondPart = p2 ? p2 + (p3 ? '-' + p3 : '') : '';
        return firstPart + secondPart;
      });
    }
  }
  return value;
};
