const isDevelopment = false
export const BACKENDURL = isDevelopment ? "http://localhost:8000":"https://fabrik-vkswhy.herokuapp.com"
export const BASICURL = BACKENDURL+"/basicapp"
export const PRESETS = [false, "sunset" , "dawn" , "night" , "warehouse" , "forest" , "apartment" , "studio" , "city" , "park" , "lobby"]