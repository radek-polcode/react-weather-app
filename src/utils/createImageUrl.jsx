export const createImageUrl = function(size, description)
{ 
  const mappings = {
    'scattered_showers': 'rain_light',
    'mostly_sunny': 'sunny'
  }
  let imageUrl = "https://ssl.gstatic.com/onebox/weather/_size_/_type_.png"
  let type = createType(description);

  switch(type) {
    case 'scattered_showers':
      return imageUrl.replace('_size_', size).replace('_type_', 'rain_light')
    case 'mostly_sunny':
      return imageUrl.replace('_size_', size).replace('_type_', 'sunny')
    default:
     return imageUrl.replace('_size_', size).replace('_type_', type)
  }
}

function createType(description) {
  let splittedDescription = description.split(" ");
  let newSplittedDescription = splittedDescription.map(word => {
    return word.toLowerCase();
  });

  return newSplittedDescription.join("_")
}