export const createImageUrl = function(imgCode)
{ 
  let imageUrl = "https://openweathermap.org/img/w/_type_.png"
  return imageUrl.replace('_type_', imgCode)
}
