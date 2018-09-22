export default hours => {
  if (hours < 0) return 'Negative productivity?! I refuse to believe it!';
  if (hours > 24)
    return 'Definition of hard worker -- work more hours than there are in a day! *applauds*';
  if (!hours) return 'Cannot be zero or empty.';
  return;
};
