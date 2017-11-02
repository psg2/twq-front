export default function reduceDevelopers(developers) {
  const devs = [];
  const members = developers.map(developer => developer.developer);
  const uniqueMembers = members.filter((member, index) => members.indexOf(member) === index);
  uniqueMembers.forEach(member => devs.push({ developer: member, categories: [] }));
  developers.forEach((developer) => {
    const index = uniqueMembers.indexOf(developer.developer);
    devs[index].categories.push(developer.category);
  });
  return devs;
}
