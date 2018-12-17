export const createImageUrl = function(size, description)
{ 
  let imageUrl = "https://ssl.gstatic.com/onebox/weather/_size_/_type_.png"
  let type = createType(description);
  return imageUrl.replace('_size_', size).replace('_type_', type)
}

function createType(description) {
  let splittedDescription = description.split(" ");
  let newSplittedDescription = splittedDescription.map(word => {
    return word.toLowerCase();
  });

  return newSplittedDescription.join("_")
}