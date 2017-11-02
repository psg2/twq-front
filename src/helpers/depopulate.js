export default function depopulate(value) {
  if (Array.isArray(value)) {
    return value.map(item => item.id);
  } else if (value instanceof Object) {
    return value.id;
  }
  return value;
}
