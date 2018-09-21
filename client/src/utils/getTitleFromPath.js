export default pathname => {
  let title = pathname.split('/');
  title.shift();
  return title.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};
