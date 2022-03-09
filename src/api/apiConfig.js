const apiConfig = {
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey:'d9b5e9ed2401bf47279eb0d5671d3740',
    originalImage: (imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;